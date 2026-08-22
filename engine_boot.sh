#!/usr/bin/env bash
# Echotide Engine boot sequence

set -e
cd "$(dirname "$0")"

echo "══════════════════════════════════════════"
echo "  ECHOTIDE ENGINE — tide rising"
echo "══════════════════════════════════════════"

node crest/crest_flux.js
