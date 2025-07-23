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
::Zh4grVQjdDyDJGmW+0g1Kw9HcCuEOmezCLAv7frt6vi7t0MUWvEreYPXlLGWJYA=
::YB416Ek+ZW8=
::
::
::978f952a14a936cc963da21a135fa983
@echo off
setlocal EnableDelayedExpansion
echo OFFLINESERVER IS MADE BY ITZGAMETIME VIP.
echo PROUDLY MADE IN THE CAROLINAS.
echo Make sure you installed Internet Information Services, and Internet Information Services Web Core
timeout /t 2 /nobreak >nul
echo Setting ownership of wwwroot in inetpub
:: Get the current username
for /f "tokens=*" %%i in ('whoami') do set "CurrentUser=%%i"

:: Take ownership of the folder
takeown /f "C:\inetpub\wwwroot" /r /d y

:: Grant ownership to the current user
icacls "C:\inetpub\wwwroot" /setowner "%CurrentUser%" /t /c

:: Grant IIS_IUSRS full control
icacls "C:\inetpub\wwwroot" /grant "IIS_IUSRS:(OI)(CI)F" /t /c


icacls "C:\OfflineServer" /setowner "%CurrentUser%" /t /c

icacls "C:\OfflineServer" /grant "IIS_IUSRS:(OI)(CI)F" /t /c

echo.
echo Permissions updated successfully.
timeout /t 5 /nobreak >nul
echo Putting back your default state of the hosts file...
copy /Y "C:\OfflineServer\hosts" "C:\Windows\System32\drivers\etc\hosts"
timeout /t 5 /nobreak >nul
echo Removing Registry Keys from OfflineServer...
reg delete "HKCR\offlineserver-openfile" /f
reg delete "HKCR\offlineserver-webdomain" /f
reg delete "HKCR\offlineserver-import" /f
reg delete "HKCR\offlineserver-createfolder" /f
reg delete "HKCR\offlineserver-sslcert" /f
reg delete "HKCR\offlineserver-shutdown" /f
reg delete "HKCR\offlineserver-restart" /f
reg delete "HKCR\offlineserver-startserver" /f
reg delete "HKCR\offlineserver-copy" /f
echo Done
timeout /t 1 /nobreak >nul
echo Deleting OfflineServer...
del /q /s "C:\inetpub\wwwroot\*" & for /d %%i in ("C:\inetpub\wwwroot\*") do rd /s /q "%%i"
rmdir /s /q "C:\OfflineServer"
timeout /t 1 /nobreak >nul
del /q /s "%PUBLIC%\Desktop\OfflineServer.url"
echo Done
timeout /t 1 /nobreak >nul
echo OfflineServer is uninstalled...
pause
exit