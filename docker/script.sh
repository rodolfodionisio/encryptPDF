#!/bin/sh
/usr/bin/flock -n /tmp/scraping.lock /usr/local/bin/node --trace-warnings /app/src/index.js > /proc/self/fd/1 2>/proc/self/fd/2 &&
/usr/sbin/crond -f -d 8