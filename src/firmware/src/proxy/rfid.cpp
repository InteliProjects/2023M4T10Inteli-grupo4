#ifndef __RFID_CPP__
#define __RFID_CPP__

#include "proxy/rfid.hpp"

using namespace proxy;

RFID::RFID(const Config &rfid_config) : mfrc522(MFRC522(rfid_config.cs_pin, rfid_config.rst_pin)), name(rfid_config.name)
{
}

RFID::RFID()
{
}

void RFID::init()
{
    SPI.begin();
    mfrc522.PCD_Init();
}

bool RFID::available()
{
    return mfrc522.PICC_IsNewCardPresent() && mfrc522.PICC_ReadCardSerial();
}

void RFID::update_reading()
{
    byte *uid = mfrc522.uid.uidByte;
    current_reading = "";
    for (byte i = 0; i < mfrc522.uid.size; i++)
    {
        current_reading += String(uid[i], HEX);
        if (i < mfrc522.uid.size - 1)
        {
            current_reading += ":";
        }
    }
}

String RFID::get_reading()
{
    return current_reading;
}

bool RFID::has_changed()
{
    if (current_reading != last_reading)
    {
        last_reading = current_reading;
        return true;
    }
    return false;
}

void RFID::reset_last_reading()
{
    last_reading = "";
}

#endif // __RFID_CPP__