#include "service/httpService.hpp"
#include <ArduinoJson.h>

using namespace service;

HTTPService::HTTPService(const Config &http_service_config) : client(http_service_config.http_config)
{
}

void HTTPService::init()
{
    client.init();
}

bool HTTPService::is_connected()
{
    return client.is_connected();
}

void HTTPService::reconnect()
{
    client.reconnect();
}

bool HTTPService::check_local_existence(const uint8_t localId)
{
    return client.get("/locals/" + String(localId)).code == 200;
}

int HTTPService::create_local(const uint8_t localId, const String &localName, const String &localType)
{
    String data = "{\"id\":\"" + String(localId) + "\",\"name\":\"" + localName + "\",\"type\":\"" + localType + "\"}";
    return client.post("/locals", data).code;
}

int HTTPService::get_allocations(const uint8_t localId, std::array<uint8_t, max_allocation_count> &allocations)
{
    auto response = client.get("/allocations/local/" + String(localId));

    Serial.print("Response code: ");
    Serial.print(response.code);
    Serial.print("\tResponse payload: ");
    Serial.println(response.payload);

    if (response.code != 200)
    {
        return response.code;
    }

    auto payload = response.payload;
    DynamicJsonDocument doc(1024);
    deserializeJson(doc, payload);
    auto allocationsJson = doc;

    for (int i = 0; i < allocationsJson.size(); i++)
    {
        allocations[i] = allocationsJson[i]["id"].as<uint8_t>();
    }

    return response.code;
}

int HTTPService::update_RFID_read(const uint8_t allocation_id, const String &item_id)
{
    String data = "{\"item_id\":\"" + item_id + "\"}";
    return client.put("/allocations/" + String(allocation_id), data).code;
}
