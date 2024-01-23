#ifndef __CFG_TARGET_HPP__
#define __CFG_TARGET_HPP__

#include <Arduino.h>
#include "hal/gpio.hpp"
#include "proxy/http.hpp"
#include "proxy/rfid.hpp"
#include "proxy/buzzer.hpp"
#include "proxy/button.hpp"
#include "service/httpService.hpp"
#include "cfg/secrets.hpp"
#include "controller/vehicleController.hpp"

/*****************************************
 * PROXY CONFIGURATION
 *****************************************/

constexpr proxy::Button::Config mute_button_config = {
    .pin = 26,
    .debounce_delay = 5,
};

constexpr proxy::Button::Config unmute_button_config = {
    .pin = 25,
    .debounce_delay = 5,
};

constexpr proxy::Led::Config mute_led_config = {
    .pin = 27,
};

constexpr proxy::Led::Config status_led_config = {
    .pin = 14,
};

proxy::Buzzer::Config buzzer_config = {
    .buzzer_pin = 33,
};

proxy::RFID::Config rfid_1_config = {
    .cs_pin = 21,
    .rst_pin = 22,
    .name = "Battery",
};

proxy::RFID::Config rfid_2_config = {
    .cs_pin = 13,
    .rst_pin = 32,
    .name = "Tire",
};

proxy::clientHTTP::Config proxy_http_config = {
    .ssid = secrets::network_SSID,
    .password = secrets::network_password,
    .server_name = secrets::server_name,
};

/*****************************************
 * SERVICE CONFIGURATION
 *****************************************/

service::HTTPService::Config http_service_config = {
    .http_config = proxy_http_config,
};

/*****************************************
 * PROXY INSTANCES
 *****************************************/

proxy::Buzzer buzzer(buzzer_config);
std::array<proxy::RFID, max_allocation_count> rfid_sensors = {
    {
        rfid_1_config,
        rfid_2_config,
    },
};
proxy::Button mute_button(mute_button_config);
proxy::Button unmute_button(unmute_button_config);
proxy::Led mute_led(mute_led_config);
proxy::Led status_led(status_led_config);

/*****************************************
 * SERVICE INSTANCES
 *****************************************/

service::HTTPService httpService(http_service_config);

/*****************************************
 * LOGGER CONFIGURATION
 *****************************************/

utils::Logger logger(LOG_LEVEL_ERROR, "main");

/*****************************************
 * CONTROLLER CONFIGURATION
 *****************************************/

controller::vehicleController::Config vehicle_controller_config = {
    .vehicle_id = 245,
    .vehicle_name = "My Vehicle",
    .vehicle_type = "Caminhão oficina",
    .http_service = httpService,
    .rfid_sensors = rfid_sensors,
    .mute_button = mute_button,
    .unmute_button = unmute_button,
    .led = mute_led,
    .status_led = status_led,
    .buzzer = buzzer,
};

/*****************************************
 * CONTROLLER INSTANCE
 *****************************************/

controller::vehicleController vehicleController(vehicle_controller_config);

#endif // __CFG_TARGET_HPP__
