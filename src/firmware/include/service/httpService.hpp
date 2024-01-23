// http_service.hpp
#ifndef HTTP_SERVICE_HPP
#define HTTP_SERVICE_HPP

#include "proxy/http.hpp"
#include <array>
#include <string>

constexpr uint8_t max_allocation_count = 2;

namespace service
{
    /**
     * @brief Class representing an HTTP Service for handling various tasks.
     */
    class HTTPService
    {
    public:
        /**
         * @brief Configuration structure for HTTPService.
         */
        struct Config
        {
            proxy::clientHTTP::Config http_config; /**< Configuration for the underlying HTTP client. */
        };

        /**
         * @brief Constructor for HTTPService.
         * @param http_srvice_config Configuration for the HTTPService instance.
         */
        HTTPService(const Config &http_srvice_config);

        /**
         * @brief Initializes the HTTP service.
         */
        void init();

        bool is_connected();

        void reconnect();

        /**
         * @brief Checks the existence of a local based on its ID.
         * @param localId The ID of the local to check.
         * @return bool Returns true if the local exists, false otherwise.
         */
        bool check_local_existence(const uint8_t localId);

        /**
         * @brief Creates a new local in the database.
         * @param localId The ID of the local to create.
         * @param localName The name of the local.
         * @param localType The type of the local.
         * @return int The HTTP status code.
         */
        int create_local(const uint8_t localId, const String &localName, const String &localType);

        /**
         * @brief Gets all allocations related to a specific local.
         * @param localId The ID of the local.
         * @param allocations An array to store the allocations.
         * @return int The HTTP status code.
         */
        int get_allocations(const uint8_t localId, std::array<uint8_t, max_allocation_count> &allocations);

        /**
         * @brief Updates the RFID reading on the server.
         * @param sensor The sensor index.
         * @param uuid The read card UUID.
         * @return int The HTTP status code.
         */
        int update_RFID_read(const uint8_t allocation_id, const String &item_id);

    private:
        proxy::clientHTTP client; /**< The underlying HTTP client instance. */
    };
};

#endif // HTTP_SERVICE_HPP
