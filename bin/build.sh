#!/usr/bin/env bash

WIDGET_NAME="Truckee River Reno"
WIDGET_DIR="dist/$WIDGET_NAME.wdgt"

if [[ ! -d "$WIDGET_DIR" ]]; then
	mkdir -p "$WIDGET_DIR"
fi

cp *.* "$WIDGET_DIR"