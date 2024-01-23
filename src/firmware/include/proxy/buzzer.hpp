#ifndef __BUZZER_HPP__
#define __BUZZER_HPP__

#include <Arduino.h>

namespace proxy
{
    class Buzzer
    {
    public:
        struct Config
        {
            uint8_t buzzer_pin;
        };

        /**
         * @brief Construct a new Buzzer object
         *
         * @param buzzer_config
         */
        Buzzer(const Config &buzzer_config);

        /**
         * @brief Starts a tone on the buzzer.
         *
         * @param frequency
         */
        void start_tone(uint16_t frequency);

        /**
         * @brief Plays a tone for a specified duration.
         *
         * @param frequency
         * @param duration
         */
        void play_tone(unsigned int frequency, unsigned long duration);

        /**
         * @brief Stops the tone on the buzzer.
         *
         */
        void stop_tone();

        bool mute;

    private:
        uint8_t buzzer_pin;
    };
};

#endif // __BUZZER_HPP__
