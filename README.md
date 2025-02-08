# Unhandled Promise Rejection: Cannot set headers after they are sent to the client

This repository demonstrates a common Node.js error: 'ERR_HTTP_HEADERS_SENT'.  This error occurs when you attempt to set response headers after the response has already begun being sent to the client. The bug.js file contains the erroneous code, while bugSolution.js provides the corrected version.

## Bug Description

The bug arises from improper handling of asynchronous operations within the HTTP response. If you try to modify headers after sending data or calling `response.end()`, this error will be thrown.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`
4. Observe the unhandled promise rejection error in the console.

## Solution

The solution involves ensuring all header modifications are performed *before* any data is sent or `response.end()` is called.  See bugSolution.js for a corrected implementation.