#ifndef __VEHICLE_CONTROLLER_HPP__
#define __VEHICLE_CONTROLLER_HPP__

#include "service/httpService.hpp"
#include "proxy/rfid.hpp"
#include "proxy/button.hpp"
#include "proxy/led.hpp"
#include "proxy/buzzer.hpp"
#include <vector>

namespace controller
{
    /**
     * @brief Class representing a Vehicle Controller.
     */
    class vehicleController
    {
    public:
        /**
         * @brief Configuration structure for vehicleController.
         */
        struct Config
        {
            uint8_t vehicle_id;                                          /**< The ID of the vehicle. */
            String vehicle_name;                                         /**< The name of the vehicle. */
            String vehicle_type;                                         /**< The type of the vehicle. */
            service::HTTPService &http_service;                          /**< Reference to the HTTPService instance. */
            std::array<proxy::RFID, max_allocation_count> &rfid_sensors; /**< Reference to RFID sensors. */
            proxy::Button &mute_button;                                  /**< Reference to the mute_button instance. */
            proxy::Button &unmute_button;                                /**< Reference to the unmute_button instance. */
            proxy::Led &led;
            proxy::Led &status_led; /**< Reference to the Led instance. */
            proxy::Buzzer &buzzer;  /**< Reference to the buzzer instance. */
        };

        struct Allocation
        {
            proxy::RFID rfid_sensor; /**< RFID sensor instance. */
            uint8_t allocation_id;   /**< Allocation ID. */
            uint32_t last_update;    /**< Last RFID update time. */
        };

        vehicleController(const Config &vehicleConfig);

        /**
         * @brief Initializes the vehicleController.
         * @param vehicleConfig Configuration for the vehicleController instance.
         */
        void init();

        /**
         * @brief Processes changes in RFID readings.
         */
        void loop();

        /**
         * @brief Test loop for RFID sensor.
         */
        void test_rfid();

        /**
         * @brief Test loop for HTTP service.
         */
        void test_http();

    private:
        uint8_t vehicle_id;                                           /**< The ID of the vehicle. */
        String vehicle_name;                                          /**< The name of the vehicle. */
        String vehicle_type;                                          /**< The type of the vehicle. */
        service::HTTPService &http_service;                           /**< Reference to the HTTPService instance. */
        std::array<Allocation, max_allocation_count> allocation_list; /**< List to store RFID and allocation data. */
        proxy::Button &mute_button;                                   /**< Reference to the mute_button instance. */
        proxy::Button &unmute_button;                                 /**< Reference to the unmute_button instance. */
        proxy::Led &led;                                              /**< Reference to the Led instance. */
        proxy::Led &status_led;                                       /**< Reference to the status_led instance. */
        proxy::Buzzer &buzzer;                                        /**< Reference to the buzzer instance. */
    };
};

#endif // __VEHICLE_CONTROLLER_HPP__
