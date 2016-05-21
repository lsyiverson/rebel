#!/bin/bash

echo --- start mock server ---
mock-api serve ./mock -d 1000 -p 8080
echo --- stop mock server ---