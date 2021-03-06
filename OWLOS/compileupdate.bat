rem Compile and pack firware for NodeMCU, WeMos D1R1 and WeMos D1R2_mini
rem select path to arduino.exe
rem setup path for D:\BUILD - binnary store folder

rem NodeMCU ------------------------------------------------------------------------------------------------
@ECHO OFF

@ECHO GZ and copy JavaScript sources
CD data

D:\7Zip\7z.exe a -mx9 actuatorwidget.js.gz actuatorwidget.js
REM copy  "actuatorwidget.js.gz" "actuatorwidget.js.gz"
D:\7Zip\7z.exe a -mx9 basewidget.js.gz basewidget.js 
REM copy  "basewidget.js.gz" "basewidget.js.gz"
D:\7Zip\7z.exe a -mx9 bootcore.js.gz bootcore.js 
REM copy  "bootcore.js.gz" "bootcore.js.gz"
D:\7Zip\7z.exe a -mx9 bootstrap.min.css.gz bootstrap.min.css
REM copy  "bootstrap.min.css.gz" "bootstrap.min.css.gz"
D:\7Zip\7z.exe a -mx9 bootstrap.min.js.gz bootstrap.min.js 
REM copy  "bootstrap.min.js.gz" "bootstrap.min.js.gz"
D:\7Zip\7z.exe a -mx9 restclientcore.js.gz restclientcore.js 
REM copy  "restclientcore.js.gz" "restclientcore.js.gz"
D:\7Zip\7z.exe a -mx9 ui.css.gz ui.css 
REM copy  "ui.css.gz" "ui.css.gz"
D:\7Zip\7z.exe a -mx9 dataTables.min.css.gz dataTables.min.css 
REM copy  "dataTables.min.css.gz" "dataTables.min.css.gz"
D:\7Zip\7z.exe a -mx9 dataTables.min.js.gz dataTables.min.js 
REM copy  "dataTables.min.js.gz" "dataTables.min.js.gz"
D:\7Zip\7z.exe a -mx9 widgetswrappers.js.gz widgetswrappers.js 
REM copy  "widgetswrappers.js.gz" "widgetswrappers.js.gz"
D:\7Zip\7z.exe a -mx9 devicescore.js.gz devicescore.js 
REM copy  "devicescore.js.gz" "devicescore.js.gz"
D:\7Zip\7z.exe a -mx9 devicesui.js.gz devicesui.js 
REM copy  "devicesui.js.gz" "devicesui.js.gz"
D:\7Zip\7z.exe a -mx9 drawcore.js.gz drawcore.js 
REM copy  "drawcore.js.gz" "drawcore.js.gz"
D:\7Zip\7z.exe a -mx9 dashboardui.js.gz dashboardui.js 
REM copy  "dashboardui.js.gz" "dashboardui.js.gz"
D:\7Zip\7z.exe a -mx9 filespanelui.js.gz filespanelui.js 
REM copy  "filespanelui.js.gz" "filespanelui.js.gz"
D:\7Zip\7z.exe a -mx9 index.html.gz index.html 
REM copy  "index.html.gz" "index.html.gz"
D:\7Zip\7z.exe a -mx9 index.js.gz index.js 
REM copy  "index.js.gz" "index.js.gz"
D:\7Zip\7z.exe a -mx9 jquery.dataTables.min.js.gz jquery.dataTables.min.js
REM copy  "jquery.dataTables.min.js.gz" "jquery.dataTables.min.js.gz"
D:\7Zip\7z.exe a -mx9 jquery.min.js.gz jquery.min.js
REM copy  "jquery.min.js.gz" "jquery.min.js.gz"
D:\7Zip\7z.exe a -mx9 languagescore.js.gz languagescore.js
REM copy  "languagescore.js.gz" "languagescore.js.gz"
D:\7Zip\7z.exe a -mx9 lcdwidget.js.gz lcdwidget.js
REM copy  "lcdwidget.js.gz" "lcdwidget.js.gz"
D:\7Zip\7z.exe a -mx9 lightwidget.js.gz lightwidget.js
REM copy  "lightwidget.js.gz" "lightwidget.js.gz"
D:\7Zip\7z.exe a -mx9 lcdwidget.js.gz lcdwidget.js
REM copy  "lcdwidget.js.gz" "lcdwidget.js.gz"
D:\7Zip\7z.exe a -mx9 lightwidget.js.gz lightwidget.js
REM copy  "lightwidget.js.gz" "lightwidget.js.gz"
D:\7Zip\7z.exe a -mx9 motionwidget.js.gz motionwidget.js
REM copy  "motionwidget.js.gz" "motionwidget.js.gz"
D:\7Zip\7z.exe a -mx9 settingsui.js.gz settingsui.js
REM copy  "settingsui.gz" "settingsui.gz"
D:\7Zip\7z.exe a -mx9 popper.min.js.gz popper.min.js
REM copy  "popper.min.js.gz" "popper.min.js.gz"
D:\7Zip\7z.exe a -mx9 radialwidget.js.gz radialwidget.js
REM copy  "radialwidget.js.gz" "radialwidget.js.gz"
D:\7Zip\7z.exe a -mx9 smokewidget.js.gz smokewidget.js
REM copy  "smokewidget.js.gz" "smokewidget.js.gz"
D:\7Zip\7z.exe a -mx9 speechcore.js.gz speechcore.js
REM copy  "speechcore.js.gz" "speechcore.js.gz"
D:\7Zip\7z.exe a -mx9 stepperwidget.js.gz stepperwidget.js
REM copy  "stepperwidget.js.gz" "stepperwidget.js.gz"
D:\7Zip\7z.exe a -mx9 temperaturewidget.js.gz temperaturewidget.js
REM copy  "temperaturewidget.js.gz" "temperaturewidget.js.gz"
D:\7Zip\7z.exe a -mx9 graphwidget.js.gz graphwidget.js
REM copy  "graphwidget.js.gz" "graphwidget.js.gz"
D:\7Zip\7z.exe a -mx9 configcore.js.gz configcore.js
REM copy  "configcore.js.gz" "configcore.js.gz"
D:\7Zip\7z.exe a -mx9 tablewidget.js.gz tablewidget.js
REM copy  "tablewidget.js.gz" "tablewidget.js.gz"

REM copy "updateinfo.html" "updateinfo.html"

CD ..

@ECHO NodeMCU compile

RD /S /Q "D:\build\"
D:\Arduino\arduino --pref build.path="D:\build" --board esp8266:esp8266:nodemcu:xtal=160,vt=flash,exception=disabled,eesz=4M2M,ip=lm2f,dbg=Disabled,lvl=None____,wipe=none,baud=921600 -v --verify "OWLOS.ino"

@ECHO wait for NodeMCU binnary
:waitnodemcu
IF EXIST "D:\build\OWLOS.ino.bin" GOTO nodemcuready
TIMEOUT /T 5 >nul
@ECHO .
GOTO waitnodemcu

:nodemcuready
copy "D:\build\OWLOS.ino.bin" "OWLOS.ino.nodemcu.bin"

rem WeMos D1 ------------------------------------------------------------------------------------------------
RD /S /Q "D:\build\"
D:\Arduino\arduino --pref build.path="D:\build" --board esp8266:esp8266:d1:xtal=160,vt=flash,exception=disabled,eesz=4M2M,ip=lm2f,dbg=Disabled,lvl=None____,wipe=none,baud=921600 -v --verify "OWLOS.ino"

@ECHO wait for WeMos D1 binnary
:waitwemosd1
IF EXIST "D:\build\OWLOS.ino.bin" GOTO wemosd1ready
TIMEOUT /T 5 >nul
@ECHO .
GOTO waitwemosd1

:wemosd1ready
copy "D:\build\OWLOS.ino.bin" "OWLOS.ino.d1.bin"

rem WeMos D1R2 mini -----------------------------------------------------------------------------------------------
RD /S /Q "D:\build\"
D:\Arduino\arduino --pref build.path="D:\build" --board esp8266:esp8266:d1_mini:xtal=160,vt=flash,exception=disabled,eesz=4M2M,ip=lm2f,dbg=Disabled,lvl=None____,wipe=none,baud=921600 -v --verify "OWLOS.ino"

@ECHO wait for WeMos D1 R2 mini binnary
:waitwemosd1r2
IF EXIST "D:\build\OWLOS.ino.bin" GOTO wemosd1r2ready
TIMEOUT /T 5 >nul
@ECHO .
GOTO waitwemosd1r2

:wemosd1r2ready
copy "D:\build\OWLOS.ino.bin" "OWLOS.ino.d1_mini.bin"

@ECHO -- Compile OK

