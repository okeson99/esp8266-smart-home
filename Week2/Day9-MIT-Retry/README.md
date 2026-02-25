# MIT App Inventor HTTP Analysis

## Attempt 1: Web Component
- Method: GET requests to ESP8266
- Result: Error 1101 (timeout)
- Cause: 5-second timeout too aggressive for network

## Attempt 2: WebViewer Component  
- Method: GoToUrl with page load events
- Result: No response, events not firing
- Cause: Hidden WebViewer doesn't load pages properly

## Attempt 3: HTTP Shortcuts (Working)
- Method: Native Android HTTP client
- Result: Success
- Why: No artificial timeout, system-level networking

## Root Cause
MIT AI2 Web/WebViewer components have limitations:
- Timeout not configurable
- Hidden views don't execute JavaScript/network
- No raw socket access

## Solution for Course
Use HTTP Shortcuts for mobile control.
Document MIT AI2 limitations for future reference.
