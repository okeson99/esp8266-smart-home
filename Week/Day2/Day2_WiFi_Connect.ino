/*
  Day 2: WiFi Connection & Web Server
  Board: NodeMCU 1.0 (ESP-12E Module)
*/

#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>

const char* ssid = "YOUR_WIFI_NAME";      // CHANGE THIS
const char* password = "YOUR_WIFI_PASS";  // CHANGE THIS

ESP8266WebServer server(80);
const int LED = LED_BUILTIN;

void setup() {
  Serial.begin(115200);
  pinMode(LED, OUTPUT);
  digitalWrite(LED, HIGH);
  
  delay(1000);
  Serial.println("\n\nESP8266 Booting...");
  
  // Connect to WiFi
  WiFi.begin(ssid, password);
  Serial.print("Connecting to ");
  Serial.print(ssid);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  Serial.println("\nWiFi Connected!");
  Serial.print("IP Address: ");
  Serial.println(WiFi.localIP());
  
  // Setup web server routes
  server.on("/", handleRoot);
  server.on("/on", handleOn);
  server.on("/off", handleOff);
  server.onNotFound(handleNotFound);
  
  server.begin();
  Serial.println("HTTP server started");
  Serial.print("Visit: http://");
  Serial.println(WiFi.localIP());
}

void loop() {
  server.handleClient();
}

void handleRoot() {
  String html = "<html><body>";
  html += "<h1>ESP8266 Smart Home</h1>";
  html += "<p>LED Control:</p>";
  html += "<a href='/on'><button>Turn ON</button></a> ";
  html += "<a href='/off'><button>Turn OFF</button></a>";
  html += "</body></html>";
  server.send(200, "text/html", html);
}

void handleOn() {
  digitalWrite(LED, LOW);  // ON (inverted)
  server.send(200, "text/plain", "LED is ON");
  Serial.println("LED turned ON via web");
}

void handleOff() {
  digitalWrite(LED, HIGH); // OFF (inverted)
  server.send(200, "text/plain", "LED is OFF");
  Serial.println("LED turned OFF via web");
}

void handleNotFound() {
  server.send(404, "text/plain", "Not found");
}
