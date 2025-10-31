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
::Zh4grVQjdDyDJGmW+0g1Kw9HcCuEOmezCLAv7frt6vi7rUsbWOsxfbje2J2DMO8B/laqcI4otg==
::YB416Ek+ZW8=
::
::
::978f952a14a936cc963da21a135fa983
@echo off
title PROCESSING IMPORTS..
echo DO NOT CLOSE THIS WINDOW UNLESS CLOSED AUTOMATICALLY!!!
netsh interface portproxy add v4tov4 listenaddress=10.60.06.13 listenport=80 connectaddress=127.0.0.1 connectport=6613
timeout /t 1 /nobreak >nul
netsh interface portproxy add v4tov4 listenaddress=10.19.0.10 listenport=80 connectaddress=127.0.0.1 connectport=1910
timeout /t 1 /nobreak >nul
netsh interface portproxy add v4tov4 listenaddress=10.65.0.10 listenport=80 connectaddress=127.0.0.1 connectport=6510
timeout /t 1 /nobreak >nul
netsh interface portproxy add v4tov4 listenaddress=10.52.6.10 listenport=80 connectaddress=127.0.0.1 connectport=5260
timeout /t 1 /nobreak >nul
netsh interface portproxy add v4tov4 listenaddress=10.77.3.10 listenport=80 connectaddress=127.0.0.1 connectport=7730
timeout /t 1 /nobreak >nul
netsh advfirewall firewall add rule name="Allow Port 6613" dir=in action=allow protocol=TCP localport=6613
timeout /t 1 /nobreak >nul
netsh advfirewall firewall add rule name="Allow Port 1910" dir=in action=allow protocol=TCP localport=1910
timeout /t 1 /nobreak >nul
netsh advfirewall firewall add rule name="Allow Port 6510" dir=in action=allow protocol=TCP localport=6510
timeout /t 1 /nobreak >nul
netsh advfirewall firewall add rule name="Allow Port 5260" dir=in action=allow protocol=TCP localport=5260
timeout /t 1 /nobreak >nul
netsh advfirewall firewall add rule name="Allow Port 7730" dir=in action=allow protocol=TCP localport=7730
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd list site "google.com" /config /xml > C:\OfflineServer\google.com.xml
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd list site "apis.google.com" /config /xml > C:\OfflineServer\apis.google.com.xml
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd list site "gstatic.com" /config /xml > C:\OfflineServer\gstatic.com.xml
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd list site "schema.org" /config /xml > C:\OfflineServer\schema.com.xml
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd list site "w3.org" /config /xml > C:\OfflineServer\w3.org.xml
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd list apppool "google.com" /config /xml > C:\OfflineServer\appool_google.com.xml
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd list apppool "apis.google.com" /config /xml > C:\OfflineServer\appool_apis.google.com.xml
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd list apppool "gstatic.com" /config /xml > C:\OfflineServer\appool_gstatic.com.xml
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd list apppool "schema.org" /config /xml > C:\OfflineServer\appool_schema.org.xml
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd list apppool "w3.org" /config /xml > C:\OfflineServer\appool_w3.org.xml
timeout /t 1 /nobreak >nul
echo 10.60.06.13 google.com >> "C:\Windows\System32\drivers\etc\hosts"
timeout /t 1 /nobreak >nul
echo 10.19.0.10 apis.google.com >> "C:\Windows\System32\drivers\etc\hosts"
timeout /t 1 /nobreak >nul
echo 10.65.0.10 gstatic.com >> "C:\Windows\System32\drivers\etc\hosts"
timeout /t 1 /nobreak >nul
echo 10.52.6.10 schema.org >> "C:\Windows\System32\drivers\etc\hosts"
timeout /t 1 /nobreak >nul
echo 10.77.3.10 w3.org >> "C:\Windows\System32\drivers\etc\hosts"
timeout /t 1 /nobreak >nul
echo Finished
timeout /t 5 /nobreak >nul
exit