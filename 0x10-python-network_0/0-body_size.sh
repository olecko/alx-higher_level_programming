#!/bin/bash
# Script that sends a request to a URL and displays size of response
curl -so /dev/null -w '%{size_download}\n' $1
