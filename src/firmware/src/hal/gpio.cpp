#include "hal/gpio.hpp"

using namespace hal;

Gpio::Gpio(const Config &gpio_config)
{
    this->pin = gpio_config.pin;
    this->pullup_resistor = gpio_config.mode == INPUT_PULLUP;
    pinMode(this->pin, gpio_config.mode);
}

bool Gpio::read(void) const
{
    bool value = digitalRead(this->pin) != this->pullup_resistor;
    return value;
}

void Gpio::write(bool state)
{
    digitalWrite(this->pin, state);
}

void Gpio::on(void)
{
    this->write(true);
}

void Gpio::off(void)
{
    this->write(false);
}

void Gpio::toggle(void)
{
    this->write(!this->read());
}