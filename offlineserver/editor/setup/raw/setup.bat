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
::Zh4grVQjdDyDJGmW+0g1Kw9HcCuEOmezCLAv7frt6vi7sUgJQfJxfZfeug==
::YB416Ek+ZW8=
::
::
::978f952a14a936cc963da21a135fa983
@echo off
setlocal EnableDelayedExpansion
title OfflineServer Setup Wizard
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
echo Backing up your default state of the hosts file...
md C:\OfflineServer
copy /Y "C:\Windows\System32\drivers\etc\hosts" "C:\inetpub\wwwroot\hosts"
copy /Y "C:\Windows\System32\drivers\etc\hosts" "C:\OfflineServer\hosts"
timeout /t 5 /nobreak >nul
echo Setting up registry keys (1 of 9)
reg import "%~dp0editor\setup\offlineserver-openfile.reg"
timeout /t 2 /nobreak >nul
echo Setting up registry keys (2 of 9)
reg import "%~dp0editor\setup\offlineserver-webdomain.reg"
timeout /t 2 /nobreak >nul
echo Setting up registry keys (3 of 9)
reg import "%~dp0editor\setup\offlineserver-import.reg"
timeout /t 2 /nobreak >nul
echo Setting up registry keys (4 of 9)
reg import "%~dp0editor\setup\offlineserver-createfolder.reg"
timeout /t 2 /nobreak >nul
echo Setting up registry keys (5 of 9)
reg import "%~dp0editor\setup\offlineserver-sslcert.reg"
timeout /t 2 /nobreak >nul
echo Setting up registry keys (6 of 9)
reg import "%~dp0editor\setup\offlineserver-shutdown.reg"
timeout /t 2 /nobreak >nul
echo Setting up registry keys (7 of 9)
reg import "%~dp0editor\setup\offlineserver-restart.reg"
timeout /t 2 /nobreak >nul
echo Setting up registry keys (8 of 9)
reg import "%~dp0editor\setup\offlineserver-startserver.reg"
timeout /t 2 /nobreak >nuk
echo Setting up registry keys (9 of 9)
reg import "%~dp0editor\setup\offlineserver-copy.reg"
timeout /t 2 /nobreak >nul
echo Finished setting up registry keys...
timeout /t 1 /nobreak >nul
echo Setting up DNS hostname (1 of 6) (ADMIN.OFFLINESERVER.NET)
echo. >> "C:\Windows\System32\drivers\etc\hosts"
timeout /t 1 /nobreak >nul
echo 127.0.0.1 admin.offlineserver.net >> "C:\Windows\System32\drivers\etc\hosts"
timeout /t 1 /nobreak >nul
echo Setting up DNS hostname (2 of 6) (ADS.ADMIN.OFFLINESERVER.COM)
echo. >> "C:\Windows\System32\drivers\etc\hosts"
timeout /t 1 /nobreak >nul
echo 127.0.0.1 ads.admin.offlineserver.com >> "C:\Windows\System32\drivers\etc\hosts"
timeout /t 1 /nobreak >nul
echo Setting up DNS hostname (3 of 6) (ADMIN.OFFLINESERVER.ORG)
echo. >> "C:\Windows\System32\drivers\etc\hosts"
timeout /t 1 /nobreak >nul
echo 127.0.0.1 admin.offlineserver.org >> "C:\Windows\System32\drivers\etc\hosts"
timeout /t 1 /nobreak >nul
echo Setting up DNS hostname (4 of 6) (ADMIN.OFFLINESERVER.COM)
echo. >> "C:\Windows\System32\drivers\etc\hosts"
timeout /t 1 /nobreak >nul
echo 127.0.0.1 admin.offlineserver.com >> "C:\Windows\System32\drivers\etc\hosts"
timeout /t 1 /nobreak >nul
echo Setting up DNS hostname (5 of 6) (ITZGAMETIMEVIPLABS.ORG)
echo. >> "C:\Windows\System32\drivers\etc\hosts"
timeout /t 1 /nobreak >nul
echo 47.38.98.96 itzgametimeviplabs.org >> "C:\Windows\System32\drivers\etc\hosts"
timeout /t 1 /nobreak >nul
echo Setting up DNS hostname (6 of 6) (OFFLINESERVER.ITZGAMETIMEVIPLABS.ORG)
echo. >> "C:\Windows\System32\drivers\etc\hosts"
timeout /t 1 /nobreak >nul
echo 127.0.0.1 offlineserver.itzgametimeviplabs.org >> "C:\Windows\System32\drivers\etc\hosts"
timeout /t 1 /nobreak >nul
echo Finished setting up DNS hostname(s)
timeout /t 1 /nobreak >nul
echo Setting up Offline Server...
xcopy "%~dp0*" "C:\inetpub\wwwroot" /E /H /C /I /Y
timeout /t 1 /nobreak >nul
echo Getting old hosts file...
copy /Y "C:\inetpub\wwwroot\hosts" "C:\inetpub\wwwroot\editor\backup\install\firsthosts\hosts"
copy /Y "C:\Windows\System32\drivers\etc\hosts" "C:\inetpub\wwwroot\editor\backup\install\oldhosts\hosts"
timeout /t 1 /nobreak >nul
echo Copying XML files to folder (A little housekeeping...)
xcopy "%~dp0editor\setup\app-stability\xmls" "C:\OfflineServer" /E /H /C /I
timeout /t 1 /nobreak >nul
echo A little housekeeping...
timeout /t 1 /nobreak >nul
echo DO NOT CLOSE THIS WINDOW UNLESS CLOSED AUTOMATICALLY!!!
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
%windir%\system32\inetsrv\appcmd add site /in < "C:\OfflineServer\google.com.xml"
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd add site /in < "C:\OfflineServer\apis.google.com.xml"
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd add site /in < "C:\OfflineServer\gstatic.com.xml"
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd add site /in < "C:\OfflineServer\schema.com.xml"
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd add site /in < "C:\OfflineServer\w3.org.xml"
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd add apppool /in < "C:\OfflineServer\appool_google.com.xml"
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd add apppool /in < "C:\OfflineServer\appool_apis.google.com.xml"
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd add apppool /in < "C:\OfflineServer\appool_gstatic.com.xml"
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd add apppool /in < "C:\OfflineServer\appool_schema.org.xml"
timeout /t 1 /nobreak >nul
%windir%\system32\inetsrv\appcmd add apppool /in < "C:\OfflineServer\appool_w3.org.xml"
timeout /t 1 /nobreak >nul
echo Offline Server is finished.
timeout /t 1 /nobreak >nul
echo Set up your OfflineServer now!
echo Set Username
set /p username=Username:
timeout /t 1 /nobreak >nul
echo %username%, enter your password
set /p password=Password:
echo Alright, %username%. You are all set!
echo Now setting it up for your OfflineServer...
echo ^<p id="rightUser"^>!username!^</p^> >> "C:\inetpub\wwwroot\editor\index.html"
echo ^<p id="rightPW"^>!password!^</p^> >> "C:\inetpub\wwwroot\editor\index.html"
timeout /t 1 /nobreak >nul
copy /Y "C:\inetpub\wwwroot\editor\temp\OfflineServer.url" "%PUBLIC%\Desktop\OfflineServer.url"
timeout /t 1 /nobreak >nul
echo Setup is all set!
pause
echo Please read a very important note first
timeout /t 3 /nobreak >nul
echo DO NOT DELETE A SINGLE FILE (unless it is one of your webpage files at
echo the wwwroot folder. If so delete a built in file, this will start to have
echo problems and may need to reinstall or copy everything from the backup folder
echo to the wwwroot folder. If it says some files have the same name, click on Replace.
echo.
echo If you want to share your free website (by your domain) to your friends. They cannot
echo access the domain because that domain is local, not external! If a public IP address
echo is connected to your computer of where you host your OfflineServer, share your friends
echo that public IP address.
echo If your friends are on the same network as you. It does not matter what IP address they
echo are going to access. You can share your private IP or public IP. But again, you can share
echo your private IP address too when your friends are STRICTLY on the SAME network!!
echo.
echo.
echo This is the very important message. Make sure to follow it.
timeout /t 5 /nobreak >nul
pause
echo Press any key to open OfflineServer Editor
pause
start http://admin.offlineserver.net/welcome
exit