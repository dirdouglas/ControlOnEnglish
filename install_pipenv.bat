@echo off
echo Installing pipenv and virtualenv...
pip3 install --user pipenv
pip3 install --user virtualenv

set "PATH=%USERPROFILE%\.local\bin;%PATH%"

echo pipenv and virtualenv installed and PATH configured.
