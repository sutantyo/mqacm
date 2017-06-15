#!/bin/bash
cd /var/www/mqacm/
npm run build
npm install -g serve
exec serve -s build