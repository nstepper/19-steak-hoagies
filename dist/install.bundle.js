/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/src/js/install.js":
/*!**********************************!*\
  !*** ./client/src/js/install.js ***!
  \**********************************/
/***/ (() => {

eval("const butInstall = document.getElementById('buttonInstall');\n\n// Initialize deferredPrompt for use later to show browser install prompt.\nlet deferredPrompt;\n\n// Logic for installing the PWA\nwindow.addEventListener('beforeinstallprompt', event => {\n  // Prevent Chrome 67 and earlier from automatically showing the prompt\n  event.preventDefault();\n\n  // Stash the event so it can be triggered later.\n  deferredPrompt = event;\n\n  // Update UI notify the user they can add to home screen\n  butInstall.style.display = 'block';\n});\nbutInstall.addEventListener('click', async () => {\n  // hide our user interface that shows our A2HS button\n  butInstall.style.display = 'none';\n\n  // Show the prompt\n  deferredPrompt.prompt();\n\n  // Wait for the user to respond to the prompt\n  const choiceResult = await deferredPrompt.userChoice;\n\n  // Dispose the user choice prompt\n  deferredPrompt = null;\n  if (choiceResult.outcome === 'accepted') {\n    console.log('User accepted the A2HS prompt');\n  } else {\n    console.log('User dismissed the A2HS prompt');\n  }\n});\nwindow.addEventListener('appinstalled', event => {\n  console.log('PWA was installed');\n});\n\n//# sourceURL=webpack://jate/./client/src/js/install.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/src/js/install.js"]();
/******/ 	
/******/ })()
;