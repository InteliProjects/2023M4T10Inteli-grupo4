#include "proxy/button.hpp"

using namespace proxy;

Button::Button(const Config &button_config)
    : gpio({button_config.pin, INPUT_PULLUP}), debounce_delay(button_config.debounce_delay), last_press_time(0)
{
}

bool Button::read()
{
    if (millis() > next_read_time && gpio.read() != state)
    {
        state = !state;
        changed = true;
        next_read_time = millis() + debounce_delay;
    }

    return state;
}

bool Button::is_pressed()
{
    return read();
}

bool Button::is_released()
{
    return !read();
}

bool Button::has_changed()
{
    if (changed)
    {
        changed = false;
        return true;
    }

    return false;
}

bool Button::is_rising_edge()
{
    return !read() && has_changed();
}

bool Button::is_falling_edge()
{
    return read() && has_changed();
}