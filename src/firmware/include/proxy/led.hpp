#ifndef __LED_HPP__
#define __LED_HPP__

#include "hal/gpio.hpp"

namespace proxy
{
    class Led
    {
    public:
        struct Config
        {
            uint8_t pin;
        };

        /**
         * @brief Construct a new Led object
         *
         * @param led_config Configuration of the LED instance
         */
        Led(const Config &led_config);

        /**
         * @brief Turn the LED on
         */
        void on();

        /**
         * @brief Turn the LED off
         */
        void off();

        /**
         * @brief Toggle the state of the LED
         */
        void toggle();

    private:
        hal::Gpio gpio;
    };
};

#endif // __LED_HPP__
