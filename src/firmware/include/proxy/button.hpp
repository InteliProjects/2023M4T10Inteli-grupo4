#ifndef __BUTTON_HPP__
#define __BUTTON_HPP__

#include "hal/gpio.hpp"

namespace proxy
{
    class Button
    {
    public:
        struct Config
        {
            uint8_t pin;
            uint16_t debounce_delay;
        };

        /**
         * @brief Construct a new Button object
         *
         * @param button_config Configuration of the button instance
         */
        Button(const Config &button_config);

        /**
         * @brief Update the button state
         *
         * @return True if the button is pressed, false otherwise
         */
        bool read();

        /**
         * @brief Check if the button is pressed
         *
         */
        bool is_pressed();

        /**
         * @brief Check if the button is released
         *
         */
        bool is_released();

        /**
         * @brief Check if the button status was changed
         *
         */
        bool has_changed();

        /**
         * @brief Check if a rising edge occurred (button pressed)
         *
         * @return True if a rising edge occurred, false otherwise
         */
        bool is_rising_edge();

        /**
         * @brief Check if a falling edge occurred (button released)
         *
         * @return True if a falling edge occurred, false otherwise
         */
        bool is_falling_edge();

    private:
        hal::Gpio gpio;
        uint16_t debounce_delay;
        unsigned long last_press_time;
        bool state;
        bool changed;
        uint16_t next_read_time;
    };
};

#endif // __BUTTON_HPP__