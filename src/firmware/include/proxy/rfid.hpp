#ifndef __RFID_HPP__
#define __RFID_HPP__

#include <Arduino.h>
#include <SPI.h>
#include <MFRC522.h>

namespace proxy
{
    class RFID
    {
    public:
        struct Config
        {
            uint8_t cs_pin;
            uint8_t rst_pin;
            String name;
        };

        /**
         * @brief Construct a new RFID object
         *
         * @param rfid_config
         */
        RFID(const Config &rfid_config);

        // Empty constructor for array initialization
        RFID();

        /**
         * @brief Initializes the RFID sensor.
         */
        void init();

        /**
         * @brief Verifies if a RFID tag is available.
         *
         * @return true
         * @return false
         */
        bool available();

        /**
         * @brief Update the current reading.
         */
        void update_reading();

        /**
         * @brief Get the reading object
         *
         * @return String
         */
        String get_reading();

        /**
         * @brief Verifies if the reading has changed.
         *
         * @return true
         * @return false
         */
        bool has_changed();

        /**
         * @brief Resets the last reading.
         *
         */
        void reset_last_reading();

        String name;

    private:
        String current_reading;
        String last_reading;
        MFRC522 mfrc522;
    };
};

#endif // __RFID_HPP__