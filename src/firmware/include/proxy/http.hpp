#ifndef __HTTP_HPP__
#define __HTTP_HPP__

#include <WiFi.h>
#include <HTTPClient.h>

#include "utils/logger.hpp"

namespace proxy
{
    class clientHTTP
    {
    public:
        struct Config
        {
            String ssid;
            String password;
            String server_name;
        };

        struct Response
        {
            int code;
            String payload;
        };

        /**
         * @brief Construct a new clientHTTP object
         *
         * @param http_config Configuration of the clientHTTP instance
         */
        clientHTTP(const Config &http_config);

        /**
         * @brief Initializes the WiFi connection
         */
        void init();

        /**
         * @brief Verifies if the client is connected to the WiFi network
         *
         * @return true
         * @return false
         */
        bool is_connected();

        /**
         * @brief Reconnects to the WiFi network
         */
        void reconnect();

        /**
         * @brief Sends a HTTP GET request and returns the response
         *
         * @param url URL to send the request to
         */
        Response get(String url);

        /**
         * @brief Sends a HTTP POST request and returns the response code
         *
         * @param url URL to send the request to
         * @param data Data to be sent
         */
        Response post(String url, String data);

        /**
         * @brief Sends a HTTP PUT request and returns the response code
         *
         * @param url URL to send the request to
         * @param data Data to be sent
         */
        Response put(String url, String data);

    private:
        WiFiClient client;
        HTTPClient http;
        Config http_config;
        utils::Logger logger = utils::Logger(LOG_LEVEL_DEBUG, "clientHTTP");
    };
};

#endif // __HTTP_HPP__