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
::Zh4grVQjdDyDJGmW+0g1Kw9HcCuEOmezCLAv7frt6vi7p0kUQO0tRJzezqGeHOED+gj3YZcv33ZTjNIwCg5WfQaiYQF5pmhEum2LMtSZoRnkWAWK6VspLlddykboqWU+eNYI
::YB416Ek+ZW8=
::
::
::978f952a14a936cc963da21a135fa983
@echo off
setlocal enabledelayedexpansion

:: Get the raw URI and clean it up
set "raw=%~1"
set "data=%raw:offlineserver-copy://=%"
set "data=%data:"=%"

:: Remove trailing slash
if "%data:~-1%"=="/" set "data=%data:~0,-1%"

:: Split on comma into domain and extension
for /f "tokens=1,2 delims=," %%A in ("%data%") do (
    set "fd=%%A"
    set "cfd=%%B"
)

:: Normalize backslashes and lowercase extension manually
set "domain=%domain:/=\%"
set "ext=%ext:/=\%"
copy /Y "%fd%" "C:\inetpub\wwwroot\%cfd%"
timeout /t 2 /nobreak >nul
echo Done importing file to folder...
pause
exit