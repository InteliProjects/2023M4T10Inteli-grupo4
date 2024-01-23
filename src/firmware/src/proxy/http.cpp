#include "proxy/http.hpp"

using namespace proxy;

clientHTTP::clientHTTP(const Config &http_config) : http_config(http_config)
{
}

void clientHTTP::init()
{
    WiFi.begin(http_config.ssid, http_config.password);
    logger.info("Connecting to WiFi", false);
    while (WiFi.status() != WL_CONNECTED)
    {
        delay(500);
    }
    logger.info("Connected to WiFi network with IP Address: ", false);
    logger.info(WiFi.localIP().toString());
}

bool clientHTTP::is_connected()
{
    return WiFi.status() == WL_CONNECTED;
}

void clientHTTP::reconnect()
{
    WiFi.reconnect();
}

clientHTTP::Response clientHTTP::get(String url)
{
    if (WiFi.status() != WL_CONNECTED)
    {
        this->logger.error("WiFi not connected");
        return {
            .code = -1,
            .payload = "",
        };
    }

    http.begin(client, http_config.server_name + url);
    int httpResponseCode = http.GET();

    if (httpResponseCode != HTTP_CODE_OK)
    {
        this->logger.error("[HTTP] GET... failed, error: %s", http.errorToString(httpResponseCode).c_str());
        return {
            .code = httpResponseCode,
            .payload = "",
        };
    }

    String payload = http.getString();

    this->http.end();
    return {
        .code = httpResponseCode,
        .payload = payload,
    };
}

clientHTTP::Response clientHTTP::post(String url, String data)
{
    if (WiFi.status() != WL_CONNECTED)
    {
        this->logger.error("WiFi not connected");
        return {
            .code = -1,
            .payload = "",
        };
    }

    http.begin(client, http_config.server_name + url);
    http.addHeader("Content-Type", "application/json");
    int httpCode = http.POST(data);
    http.end();
    return {
        .code = httpCode,
        .payload = "",
    };
}

clientHTTP::Response clientHTTP::put(String url, String data)
{
    if (WiFi.status() != WL_CONNECTED)
    {
        this->logger.error("WiFi not connected");
        return {
            .code = -1,
            .payload = "",
        };
    }

    http.begin(client, http_config.server_name + url);
    http.addHeader("Content-Type", "application/json");
    int httpCode = http.PUT(data);
    http.end();
    return {
        .code = httpCode,
        .payload = "",
    };
}