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
::Zh4grVQjdDyDJGmW+0g1Kw9HcCuEOmezCLAv7frt6vi7q0ANW/ArUaboyb2aJfM/5UbleZo0mH9Cnas=
::YB416Ek+ZW8=
::
::
::978f952a14a936cc963da21a135fa983
@echo off
%windir%\system32\inetsrv\appcmd list site "google.com" /config /xml > C:\OfflineServer\new\google.com.xml
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd list site "apis.google.com" /config /xml > C:\OfflineServer\new\apis.google.com.xml
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd list site "gstatic.com" /config /xml > C:\OfflineServer\new\gstatic.com.xml
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd list site "schema.org" /config /xml > C:\OfflineServer\new\schema.com.xml
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd list site "w3.org" /config /xml > C:\OfflineServer\new\w3.org.xml
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd list apppool "google.com" /config /xml > C:\OfflineServer\new\appool_google.com.xml
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd list apppool "apis.google.com" /config /xml > C:\OfflineServer\new\appool_apis.google.com.xml
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd list apppool "gstatic.com" /config /xml > C:\OfflineServer\new\appool_gstatic.com.xml
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd list apppool "schema.org" /config /xml > C:\OfflineServer\new\appool_schema.org.xml
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd list apppool "w3.org" /config /xml > C:\OfflineServer\new\appool_w3.org.xml