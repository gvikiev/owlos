#include <Arduino.h>

bool filesBegin();
bool filesExists(String fileName);
int filesGetSize(String fileName);
bool filesDelete(String fileName);

String filesReadString(String fileName);
bool filesWriteString(String fileName, String value);
bool filesAppendString(String fileName, String value);
bool filesAddString(String fileName, String value);

int filesReadInt(String fileName);
bool filesWriteInt(String fileName, int value);

float filesReadFloat(String fileName);
bool filesWriteFloat(String fileName, float value);

String filesGetList(String path);