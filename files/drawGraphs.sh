#!/bin/sh
dot -Tsvg "../tmp/all.txt" -o "../tmp/all.svg" > ../tmp/all.svg
dot -Tsvg "../tmp/extend.txt" -o "../tmp/extend.svg" > ../tmp/extend.svg
dot -Tsvg "../tmp/instances.txt" -o "../tmp/instances.svg" > ../tmp/instances.svg
dot -Tsvg "../tmp/mixin.txt" -o "../tmp/mixin.svg" > ../tmp/mixin.svg
dot -Tsvg "../tmp/analysis.txt" -o "../tmp/analysis.svg" > ../tmp/analysis.svg
rm ../tmp/all.svg? ../tmp/extend.svg? ../tmp/instances.svg? ../tmp/mixin.svg? ../tmp/analysis.svg?