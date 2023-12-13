#!/bin/bash

if [ "$DEPLOYENV" = "dev" ]; then
    python manage.py migrate && hypercorn app.asgi:application -b 0.0.0.0:8000
else
    hypercorn app.asgi:application -b 0.0.0.0:8000
fi
