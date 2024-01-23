#include "proxy/led.hpp"

namespace proxy
{
    Led::Led(const Config &led_config) : gpio({led_config.pin, OUTPUT})
    {
        gpio.off();
    }

    void Led::on()
    {
        gpio.on();
    }

    void Led::off()
    {
        gpio.off();
    }

    void Led::toggle()
    {
        gpio.toggle();
    }
}
