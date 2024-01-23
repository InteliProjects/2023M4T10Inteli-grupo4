#include "controller/vehicleController.hpp"

using namespace controller;

constexpr uint16_t rfid_idle_timeout = 5000;

vehicleController::vehicleController(const Config &vehicle_config) : vehicle_id(vehicle_config.vehicle_id),
                                                                     vehicle_name(vehicle_config.vehicle_name),
                                                                     vehicle_type(vehicle_config.vehicle_type),
                                                                     http_service(vehicle_config.http_service),
                                                                     mute_button(vehicle_config.mute_button),
                                                                     unmute_button(vehicle_config.unmute_button),
                                                                     led(vehicle_config.led),
                                                                     status_led(vehicle_config.status_led),
                                                                     buzzer(vehicle_config.buzzer)
{
    for (auto &allocation : allocation_list)
    {
        allocation.rfid_sensor = vehicle_config.rfid_sensors[&allocation - &allocation_list[0]];
    }
}

void vehicleController::init()
{
    status_led.off();
    http_service.init();

    if (!http_service.check_local_existence(vehicle_id))
    {
        Serial.println("Local data not found, creating new entry.");
        http_service.create_local(vehicle_id, vehicle_name, vehicle_type);
    }

    std::array<uint8_t, max_allocation_count> allocations;
    http_service.get_allocations(vehicle_id, allocations);

    for (auto &allocation : allocation_list)
    {
        if (allocation.rfid_sensor.name == "")
        {
            continue;
        }

        allocation.allocation_id = allocations[&allocation - &allocation_list[0]];
        Serial.print("Allocation id: ");
        Serial.println(allocation.allocation_id);
        allocation.rfid_sensor.init();
        delay(500);
    }

    Serial.println("Vehicle controller initialized.");
    status_led.on();
}

void vehicleController::loop()
{
    if (!http_service.is_connected())
    {
        Serial.println("HTTP service not connected. Reconnecting...");
        http_service.reconnect();
    }

    for (auto &allocation : allocation_list)
    {
        if (allocation.rfid_sensor.name == "")
        {
            continue;
        }

        if (!allocation.rfid_sensor.available())
        {

            if (millis() - allocation.last_update > rfid_idle_timeout)
            {
                buzzer.play_tone(1500, 500);
                http_service.update_RFID_read(allocation.allocation_id, "null");
                Serial.print("RFID ");
                Serial.print(allocation.rfid_sensor.name);
                Serial.println(" not available. Alerting and updating RFID read to null.");
                allocation.last_update = millis();
                allocation.rfid_sensor.reset_last_reading();
            }

            continue;
        }

        allocation.rfid_sensor.update_reading();
        allocation.last_update = millis();

        if (!allocation.rfid_sensor.has_changed())
        {
            continue;
        }

        buzzer.play_tone(1000, 200);
        Serial.print("RFID ");
        Serial.print(allocation.rfid_sensor.name);
        Serial.print(" reading changed. New value: ");
        Serial.println(allocation.rfid_sensor.get_reading());
        Serial.println(http_service.update_RFID_read(allocation.allocation_id, allocation.rfid_sensor.get_reading()));
    }

    if (mute_button.is_pressed())
    {
        buzzer.mute = true;
        led.on();
        Serial.println("Mute button pressed. Muting buzzer and turning LED on.");
    }
    else if (unmute_button.is_pressed())
    {
        buzzer.mute = false;
        led.off();
        Serial.println("Unmute button pressed. Unmuting buzzer and turning LED off.");
    }
}

void vehicleController::test_rfid()
{
    for (auto &allocation : allocation_list)
    {
        if (allocation.rfid_sensor.name == "")
        {
            continue;
        }

        if (!allocation.rfid_sensor.available())
        {
            continue;
        }

        allocation.rfid_sensor.update_reading();

        if (allocation.rfid_sensor.has_changed())
        {
            Serial.print("Read from");
            Serial.print(allocation.rfid_sensor.name);
            Serial.print(": ");
            Serial.println(allocation.rfid_sensor.get_reading());
        }
    }
}

void vehicleController::test_http()
{
    for (auto &allocation : allocation_list)
    {
        if (allocation.rfid_sensor.name == "")
        {
            continue;
        }
        Serial.print("Updating ID: ");
        Serial.print(allocation.allocation_id);
        Serial.println(http_service.update_RFID_read(allocation.allocation_id, "30:43:1414"));
    }

    delay(1600);
}