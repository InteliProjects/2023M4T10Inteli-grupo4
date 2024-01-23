#include "proxy/buzzer.hpp"

using namespace proxy;

Buzzer::Buzzer(const Config &buzzer_config) : buzzer_pin(buzzer_config.buzzer_pin)
{
    pinMode(buzzer_pin, OUTPUT);
    ledcAttachPin(buzzer_pin, 0);
}

void Buzzer::start_tone(uint16_t frequency)
{
    if (mute)
        return;
    tone(buzzer_pin, frequency);
}

void Buzzer::play_tone(unsigned int frequency, unsigned long duration)
{
    if (mute)
        return;
    tone(buzzer_pin, frequency, duration);
    delay(duration);
    noTone(buzzer_pin);
}

void Buzzer::stop_tone()
{
    noTone(buzzer_pin);
}
