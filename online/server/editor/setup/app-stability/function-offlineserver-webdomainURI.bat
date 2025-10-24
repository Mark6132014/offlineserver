::[Bat To Exe Converter]
::
::YAwzoRdxOk+EWAnk
::fBw5plQjdG8=
::YAwzuBVtJxjWCl3EqQJgSA==
::ZR4luwNxJguZRRnk
::Yhs/ulQjdF+5
::cxAkpRVqdFKZSDk=
::cBs/ulQjdF+5
::ZR41oxFsdFKZSDk=
::eBoioBt6dFKZSDk=
::cRo6pxp7LAbNWATEpCI=
::egkzugNsPRvcWATEpCI=
::dAsiuh18IRvcCxnZtBJQ
::cRYluBh/LU+EWAnk
::YxY4rhs+aU+JeA==
::cxY6rQJ7JhzQF1fEqQJQ
::ZQ05rAF9IBncCkqN+0xwdVs0
::ZQ05rAF9IAHYFVzEqQJQ
::eg0/rx1wNQPfEVWB+kM9LVsJDGQ=
::fBEirQZwNQPfEVWB+kM9LVsJDGQ=
::cRolqwZ3JBvQF1fEqQJQ
::dhA7uBVwLU+EWDk=
::YQ03rBFzNR3SWATElA==
::dhAmsQZ3MwfNWATElA==
::ZQ0/vhVqMQ3MEVWAtB9wSA==
::Zg8zqx1/OA3MEVWAtB9wSA==
::dhA7pRFwIByZRRnk
::Zh4grVQjdDyDJGmW+0g1Kw9HcCuEOmezCLAv7frt6vi7p0kUQO0tRJzezqGeHOED+gj3YZcv33ZTjNIwCg5WfQaiYQF5pmhEum2LMtSZoRnkWAWe40k0FGh1jm3lvgJ2RetN1MYb1kA=
::YB416Ek+ZW8=
::
::
::978f952a14a936cc963da21a135fa983
@echo off
setlocal enabledelayedexpansion

:: Get the raw URI and clean it up
set "raw=%~1"
set "data=%raw:offlineserver-webdomain://=%"
set "data=%data:"=%"

:: Remove trailing slash
if "%data:~-1%"=="/" set "data=%data:~0,-1%"

:: Split on comma into domain and extension
for /f "tokens=1,2 delims=," %%A in ("%data%") do (
    set "domain=%%A"
    set "ext=%%B"
)

:: Normalize backslashes and lowercase extension manually
set "domain=%domain:/=\%"
set "ext=%ext:/=\%"

:: Add host entries
(
    echo.
    echo 127.0.0.1 %domain%.%ext%
    echo 127.0.0.1 www.%domain%.%ext%
    echo 127.0.0.1 %domain%.offlineserver.%ext%
    echo.
) >> "%SystemRoot%\System32\drivers\etc\hosts"
timeout /t 2 /nobreak >nul
echo Setting up domain is done... Now it is backed up as the new hosts file...
copy /Y "C:\Windows\System32\drivers\etc\hosts" "C:\inetpub\wwwroot\editor\backup\install\newhosts\hosts"
pause
exit