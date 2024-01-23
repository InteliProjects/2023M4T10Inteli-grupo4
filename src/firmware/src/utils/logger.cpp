#include "utils/logger.hpp"

using namespace utils;

Logger::Logger(logLevel log_level, String tag) : log_level(log_level), tag(tag)
{
    Serial.begin(115200);
}

void Logger::setLevel(logLevel log_level)
{
    this->log_level = log_level;
}

void Logger::log(logLevel log_level, const String &message, bool break_line)
{
    if (this->log_level > log_level)
    {
        return;
    }

    String formatted_message;

    switch (log_level)
    {
    case LOG_LEVEL_DEBUG:
        formatted_message = "[DEBUG]";
        break;
    case LOG_LEVEL_INFO:
        formatted_message = "[INFO]";
        break;
    case LOG_LEVEL_WARNING:
        formatted_message = "[WARNING]";
        break;
    case LOG_LEVEL_ERROR:
        formatted_message = "[ERROR]";
        break;
    }

    formatted_message += " " + this->tag + ": " + message;

    if (break_line)
    {
        Serial.println(message);
    }
    else
    {
        Serial.print(message);
    }
}

void Logger::debug(const String &message, bool break_line)
{
    log(LOG_LEVEL_DEBUG, message, break_line);
}

void Logger::info(const String &message, bool break_line)
{
    log(LOG_LEVEL_INFO, message, break_line);
}

void Logger::warning(const String &message, bool break_line)
{
    log(LOG_LEVEL_WARNING, message, break_line);
}

void Logger::error(const String &message, bool break_line)
{
    log(LOG_LEVEL_ERROR, message, break_line);
}
