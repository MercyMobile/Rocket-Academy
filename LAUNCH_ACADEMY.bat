@echo off
setlocal
title Rocketry Academy Launcher
color 0B

set "APP_DIR=%~dp0"
set "APP_FILE=%APP_DIR%index.html"

echo.
echo ========================================
echo    WARRIORS ROCKET ADVENTURE
echo    Portable Training System v2.1
echo ========================================
echo.

if not exist "%APP_FILE%" (
  echo ERROR: index.html not found.
  echo Make sure this launcher is in the same folder as index.html.
  echo.
  pause
  exit /b 1
)

echo Launching in your default browser...
echo No Python, Node, or installation required.
echo.

cd /d "%APP_DIR%"
start "" "%APP_FILE%"

if errorlevel 1 (
  echo Primary launch failed. Trying PowerShell fallback...
  powershell -NoProfile -ExecutionPolicy Bypass -Command "Start-Process '%APP_FILE%'"
)

echo Done. You can close this window.
timeout /t 2 >nul
exit /b 0
