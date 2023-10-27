/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../fonts/1942_report/1942.ttf */ "./src/fonts/1942_report/1942.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./../fonts/urban_jungle/UrbanJungleDEMO.otf */ "./src/fonts/urban_jungle/UrbanJungleDEMO.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./../images/background-2.jpg */ "./src/images/background-2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./../images/background-1.jpg */ "./src/images/background-1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@100;400&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: '1942-report';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face 
{
    font-family: 'Urban jungle';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

:root {
    --color-black: #212529;
    --color-white: #edf2f4;
    --font-main: '1942-report';
    --font-title: 'Urban jungle';
    --font-notifications: 'Raleway', sans-serif;
    --padding: 10px;
    --border-radius: 5px;
    --border: 2px solid #ffffff55;
    --color-semi-transparent-grey:#a4b2d0a7;
    --average-value:10px;
}

*, *::before, *::after{
    padding:0;
    margin:0;
    box-sizing:border-box;
}

body {
    background-color: var(--color-black);
    height: 100vh;
    display:flex;
    align-items:center;
    justify-content:center;
}

/* Notification box. */

div.notifications-box
{
    display:none;
    position: absolute;
    color: white;
    top: 74px;
    left: 69px;
    padding: 25px;
    z-index: 10;
    border-radius: 5px;
    background-color: #ffffff22;
}

div.notifications-box > p.message
{
    font-family:var(--font-notifications);
    font-weight: 400;
}

/* Scrollbar. */

::-webkit-scrollbar
{
    width: 10px;
    height: 10px;
}

::-webkit-scrollbar-thumb
{
    background-color: transparent;
    border: 1px solid var(--color-semi-transparent-grey);
    border-radius: var(--average-value);
}

/* Set the same screen properties for the different screens. */

div.intro-screen,
div.place-your-ships-screen,
div.game-screen,
div.winner-screen
{
    background-image: linear-gradient(#00000055, #00000055), url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    width: 95%;
    height: 90%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    border:5px solid var(--color-white);
    border-radius:5px;
    padding: calc(var(--padding) * 5);
    overflow:auto;
}

/* Buttons */

div.place-your-ships-screen button,
div.winner-screen button
{
    background: linear-gradient(45deg, #ffffff22, #ffffff22,#ffffff22, white, white  );
    background-size: 300%;
    background-position: left;
    font-family: var(--font-main);
    border-radius: var(--border-radius);
    background-color: #ffffff22;
    color: white;
    border: var(--border);
    padding: 7px;
    font-size: 1.1rem;
    transition:all 300ms ease-in-out;
    outline:none;
}

div.place-your-ships-screen button:hover,
div.winner-screen button:hover
{
    background-position:right;
    cursor:pointer;
    scale:1.03;
    color:black;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
}

div.place-your-ships-screen button:active,
div.winner-screen button:active
{
    scale:0.9;

}

/* INTRO SCREEN SECTION */

div.intro-screen
{
    animation: appear 1s ease-in-out;
    position:relative;
}

div.intro-screen > h1.main-title
{
    font-family: var(--font-title);
    font-weight: 100;
    color:var(--color-white);
    font-size:7rem;
    text-align:center;
}

div.intro-screen > form.start-game-section 
{
    background-color: #ffffff11;
    display:flex;
    flex-direction:column;
    align-items:stretch;
    gap: 15px;
    padding: 15px;
    border:1px solid #ffffff55;
    border-radius:var(--border-radius);
}

div.intro-screen > form.start-game-section > p 
{
    font-family:var(--font-main);
    font-weight: 100;
    font-size:1.3rem;
    color:var(--color-white);
}

div.intro-screen > form.start-game-section > p > span 
{
    font-size: 1rem;
}

div.intro-screen > form.start-game-section > input 
{
    padding:5px;
    background-color:transparent;
    border:1px solid #ffffff55;
    border-radius:5px;
    padding:5px;
    color:white;
    font-family:var(--font-main);
    font-size:1.3rem;
    text-align:center;
    transition: all 200ms ease-in-out;
    outline:none;
}

div.intro-screen > form.start-game-section > input:hover,
div.intro-screen > form.start-game-section > input:focus
{
    background-color: #ffffff33;
}

div.intro-screen > form.start-game-section > button.start-game-button 
{
    padding: 5px 15px;
    border-radius: 5px;
    font-family: var(--font-main);
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: all 150ms ease-in-out;
    text-align:center;
    font-size:1.5rem;
}

div.intro-screen > form.start-game-section > button.start-game-button:hover 
{
    scale: 1.05;
    cursor:pointer;
}

div.intro-screen > form.start-game-section > button.start-game-button:active
{
    scale: 0.95;
}

div.intro-screen > div.author
{
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:5px;
    border:1px solid #ffffff55;
    border-radius: 5px;
    padding:10px;
    background-color: #ffffff33;
    position:absolute;
    bottom: 0;
    left: 0;
    margin:10px;
}

div.intro-screen > div.author > p
{
    color:white;
    font-family:var(--font-main);
    display:flex;
    align-items:flex-end;
    gap:5px;
}

div.intro-screen > div.author > div.separator
{
    height: 1px;
    width: 100%;
    background-color: #ffffff44;
}

div.intro-screen > div.author > span > a
{
    font-size:2.5rem;
    color:white;
    transition: all 400ms ease-in-out;
    text-decoration: none;
}

div.intro-screen > div.author > span > a:hover
{
    transform: scale(1.2) rotate(360deg);
    cursor:pointer;

}

/* PLACE YOUR SHIPS SECTION */

div.place-your-ships-screen
{
    display:none;
    background-image: linear-gradient(#00000055, #00000055), url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    gap:10px;
}

div.place-your-ships-screen > h1
{
    text-align:center;
    font-size: 1.3rem;
    width: 100%;
}

div.place-your-ships-screen > p.place-ships-instructions
{
    font-family:var(--font-main);
    color:white;
    font-size:1.3rem;
    padding:5px 20px;
}

div.place-your-ships-screen > div.gameboard-and-ships-container 
{
    display:flex;
    width: 80%;
    height: 100%;
    justify-content: center; 
    border-radius: var(--border-radius);
    gap:var(--padding);
    overflow:auto;
}

div.place-your-ships-screen > div.gameboard-and-ships-container > div
{
    border: var(--border);
    border-radius:var(--border-radius);
    padding:var(--padding);
}

div.place-your-ships-screen > div.gameboard-and-ships-container > div.ships-container
{
    flex: 1 0 380px;
    display:flex;
    flex-direction:column;
    gap: var(--padding);
    overflow:auto;
}

div.place-your-ships-screen > div.gameboard-and-ships-container > div.ships-container  h1
{
    padding:5px;
    border: var(--border);
    border-radius:var(--border-radius);
    font-family: var(--font-main);
    font-weight: 100;
    color:white;
    text-align:center;
}

div.place-your-ships-screen > div.gameboard-and-ships-container > div.ships-container > div.ships-section
{
    display:flex;
    flex: 1 1 auto;
    align-items:flex-start;
    justify-content:start;
    gap: 25px;
    flex-direction:column;
}

div.place-your-ships-screen > div.gameboard-and-ships-container > div.ships-container > div.ships-section > div.ship
{
    width:fit-content;
    height: fit-content;
    display:flex;
    gap: 5px;
}

div.place-your-ships-screen > div.gameboard-and-ships-container > div.ships-container > div.ships-section > div.ship > div.ship-cell
{
    width: 45px;
    height: 45px;
    border-radius: 3px;
    border: var(--border);
    background-color: #ffffff22;
}


div.place-your-ships-screen > div.gameboard-and-ships-container > div.ships-container > div.ships-section > div.ship.vertical 
{
    width: fit-content;
    flex-direction:column;
}

div.place-your-ships-screen > div.gameboard-and-ships-container > div.ships-container p
{
    font-family:var(--font-main);
    color:white;
    display:flex;
    justify-content:space-between;
    font-size:1.1rem;
}

div.place-your-ships-screen > div.gameboard-and-ships-container > div.ships-container > div.buttons-container
{
    display:flex;
    flex-direction:column;
    gap:10px;
}

div.place-your-ships-screen > div.gameboard-and-ships-container > div.gameboard-container 
{
    flex: 4 0 560px;
    display:flex;
    flex-direction:column;
    gap: 10px;
    overflow:auto;
}

div.place-your-ships-screen > div.gameboard-and-ships-container > div.gameboard-container > h1
{
    font-family: var(--font-main);
    font-weight: 100;
    color:white;
    text-align:center;
    padding: 5px;
    border:var(--border);
    border-radius:var(--border-radius);
}

div.place-your-ships-screen > div.gameboard-and-ships-container > div.gameboard-container > div.gameboard
{
    flex: 1 1 auto;
    display:flex;
    flex-direction:column;
    padding: 10px;
    border:var(--border);
    border-radius:var(--border-radius);
    gap: 5px;
    align-items:center;
    justify-content:center;
}

div.place-your-ships-screen > div.gameboard-and-ships-container > div.gameboard-container > div.gameboard > div.grid-row
{
    display:flex;
    gap: 5px;
    width:fit-content;

}

div.place-your-ships-screen > div.gameboard-and-ships-container > div.gameboard-container > div.gameboard > div.grid-row > div.grid-cell
{
    width: 45px;
    height: 45px;
    border-radius:3px;
    border: var(--border);
    background-color: #ffffff22;
    
}

div.place-your-ships-screen > h1, div.game-screen > h1
{
    font-family:var(--font-main);
    color:white;
    font-weight:100;
    font-size:3rem;
}

/* MAIN GAME SCREEN SECTION*/

div.game-screen 
{
    display: none;
    justify-content:space-between;
    gap:25px;
    padding:25px;
}

div.game-screen > div.gameboards-container 
{
    flex: 1 1 auto;
    display:flex;
    width: 85%;
    height: 85%;
    justify-content:center;
    gap:10px;
}

div.game-screen > div.gameboards-container > div.board-container
{
    flex: 1 1 auto;
    display:flex;
    flex-direction:column;
    text-align:center;
    gap:10px;
}

div.game-screen > div.gameboards-container > div.board-container > div.title-and-instruction
{
    background-color: #ffffff22;
    border: 1px solid #ffffff33;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 10px;
}

div.game-screen > div.gameboards-container > div.board-container > div.title-and-instruction > h3
{
    font-family:var(--font-main);
    font-size:2rem;
    font-weight:100;
    color:white;
}

div.game-screen > div.gameboards-container > div.board-container > div.title-and-instruction > p
{
    font-family:var(--font-main);
    color:white;
    font-size:1.2rem;
}

div.game-screen > div.gameboards-container > div.board-container > div.gameboard
{
    background-color:#ffffff22;
    min-width: 500px;
    min-height: 500px;
    flex: 1 1 auto;
    border:1px solid #ffffff33;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:5px;
    padding:10px;
}

div.game-screen > div.gameboards-container > div.board-container > div.gameboard > div.grid-row
{
    display:flex;
    height: fit-content;
    width:fit-content;
    gap: 5px;
}

div.game-screen > div.gameboards-container > div.board-container > div.gameboard > div.grid-row > div.grid-cell
{
    background-color:#ffffff22;
    height: 45px;
    width:45px;
    border: 1px solid #ffffff55;
    border-radius:5px;
}

div.game-screen > div.gameboards-container > div.board-container > ul.colors-meaning
{
    background-color: #ffffff22;
    border: 1px solid #ffffff33;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 10px;
    list-style-type: none;
}

div.game-screen > div.gameboards-container > div.board-container > ul.colors-meaning > li 
{
    font-family:var(--font-main);
    font-size:1.2rem;
    color:white;
}

div.game-screen > div.gameboards-container > div.separator 
{
    background-color:white;
    width: 1px;
    height:100%;
    opacity:.2;
    align-self:center;
}

/* Winner screen. */

div.winner-screen
{
    display:flex;
    align-items:center;
    justify-content:center;
}

div.winner-screen > div.message
{
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items:center;
    width: 50%;
    height: 100%;
    background-color: #ffffff22;
    border-radius:var(--border-radius);
    padding:25px;
}

div.winner-screen > div.message > div.winner,
div.loser
{
    width: 90%;
    padding:50px 10px;
    border-radius:var(--border-radius);
    background-color:#ffffff33;
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 20px;
}

div.winner-screen > div.message > div.winner > h2,
div.loser > h2
{
    font-family: var(--font-title);
    text-align:center;
    font-weight:100;
    font-size:4rem;
    color:white;
    letter-spacing: 2px;   
}

div.winner-screen > div.message > div.winner > p.player-name
{
    text-align:center;
    font-family:var(--font-main);
    font-size:1.4rem;
    border-radius:var(--border-radius);
    padding:10px;
}

div.winner-screen > div.message > div.winner > p:last-of-type,
div.loser > p:last-of-type
{
    font-family: var(--font-main);
    text-align:center;
    font-weight:100;
    font-size:2rem;
    color:white;
}

/* Classes to control animations. */

.vanish-screen 
{
    animation: disappear 1s ease-in-out !important;
    animation-fill-mode: forwards !important;
}

.appear-screen
{
    display:flex !important;
    animation:appear-place-ships-screen 1s ease-in;
    animation-fill-mode: forwards;
}

.disappear-place-ships-screen
{
    animation: disappear-place-ships-screen 750ms ease-in-out;
    animation-fill-mode: forwards;
}

.appear-game-screen
{
    display:flex !important;
    animation: appear-game-screen 750ms ease-in;
    animation-fill-mode: forwards;
}

.disappear-game-screen
{
    animation: disappear-game-screen 1s ease-in-out;
    animation-fill-mode: forwards;
}

.appear-winner-screen
{
    animation: appear-winner-screen 750ms cubic-bezier(0.4, 0, 0.2, 1);
    animation-fill-mode: forwards;
}

.appear-notifications-box
{
    display:block !important;
    animation:appear-notifications-box 4s ease-in-out;
    animation-fill-mode: forwards;
}


/* Keyframes to control animations. */

@keyframes appear {
    0% 
    {
        transform: scale(3);
    }
    33%
    {
        transform: scale(.9)
    }
    66%
    {
        transform: scale(1.1)
    }
    100% 
    {
        transform: scale(1);
    }
}

@keyframes disappear 
{
    0%
    {
        transform: rotate(0deg) scale(1);
    }
    30%
    {
        transform:rotate(-45deg) scale(1.2);
    }
    100%
    {
        transform: rotate(360deg) scale(0);
    }
}

@keyframes appear-place-ships-screen
{
    0%
    {
        transform: scale(0) rotate(-360deg);
    }
    60%
    {
        transform: scale(1.2) rotate(45deg);
    }
    100%
    {
        transform: scale(1) rotate(0);
    }
}

@keyframes disappear-place-ships-screen
{
    0%
    {
        transform: scale(1);
    }
    40%
    {
        transform: scale(1.1);
        opacity:1;
    }
    100%
    {
        transform: scale(0);
        opacity:0;
    }
}

@keyframes appear-game-screen
{
    0%
    {
        transform: scale(0);
        opacity: 0;
    }
    75%
    {
        transform: scale(1.2);
    }
    100%
    {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes disappear-game-screen
{
    0%
    {
        transform: rotate(0deg) scale(1);
    }
    30%
    {
        transform: rotate(-25deg) scale(1.1);
    }
    100%
    {
        transform: rotate(360deg) scale(0);
    }
}

@keyframes appear-winner-screen
{
    0%
    {
        transform: translateY(-120%);
    }
    60%
    {
        transform: translateY(50px);
    }
    80%
    {
        transform: translateY(-25px);
    }
    100%
    {
        transform: translateY(0);
    }
}

@keyframes appear-notifications-box
{
    0%
    {
        opacity:0;
        transform:scale(0);
    }
    25%
    {
        opacity: 1;
        transform:scale(1);
    }
    75%
    {
        opacity: 1;
        transform:scale(1);
    }
    100%
    {
        opacity:0;
        transform:scale(0);
    }
}


/* Classes to decorate buttons. */

.platinum-effect {
  color: rgba(0, 0, 0, 0.72);
  text-decoration: none;
  font-weight: bold;
  text-shadow: 1px 1px 0 #ffffff;
  box-shadow:
    2px 2px 0.5em rgba(122, 122, 122, 0.55),
    inset 1px 1px 0 rgba(255, 255, 255, 0.9),
    inset -1px -1px 0 rgba(0, 0, 0, 0.5)
  ;
  border: 1px solid #cacade;
  background:
    -moz-linear-gradient(
    -72deg,
    #dedeff,
    #ffffff 16%,
    #dedeff 21%,
    #ffffff 24%,
    #555564 27%,
    #dedeff 36%,
    #ffffff 45%,
    #ffffff 60%,
    #dedeff 72%,
    #ffffff 80%,
    #dedeff 84%,
    #555564
  );
  background:
  -webkit-linear-gradient(
    -72deg,
    #dedeff,
    #ffffff 16%,
    #dedeff 21%,
    #ffffff 24%,
    #555564 27%,
    #dedeff 36%,
    #ffffff 45%,
    #ffffff 60%,
    #dedeff 72%,
    #ffffff 80%,
    #dedeff 84%,
    #555564
  );
  background:
  -o-linear-gradient(
    -72deg,
    #dedeff,
    #ffffff 16%,
    #dedeff 21%,
    #ffffff 24%,
    #555564 27%,
    #dedeff 36%,
    #ffffff 45%,
    #ffffff 60%,
    #dedeff 72%,
    #ffffff 80%,
    #dedeff 84%,
    #555564
  );
  background:
  linear-gradient(
    -72deg,
    #dedeff,
    #ffffff 16%,
    #dedeff 21%,
    #ffffff 24%,
    #555564 27%,
    #dedeff 36%,
    #ffffff 45%,
    #ffffff 60%,
    #dedeff 72%,
    #ffffff 80%,
    #dedeff 84%,
    #555564
  );
}

.button-yellowgold {
  color: rgba(73, 45, 21, 0.72);
  text-decoration: none;
  font-weight: bold;
  text-shadow: 1px 1px 0 #ffffff;
  box-shadow:
    2px 2px 0.5em rgba(155, 122, 89, 0.55),
    inset 1px 1px 0 rgba(255, 255, 255, 0.9),
    inset -1px -1px 0 rgba(0, 0, 0, 0.5)
  ;
  border: 1px solid #deca45;
  background:
  -moz-linear-gradient(
    -72deg,
    #ffc373,
    #ffffff 16%,
    #ffc373 21%,
    #ffffff 24%,
    #a17434 27%,
    #ffc373 36%,
    #ffffff 45%,
    #ffffff 60%,
    #ffc373 72%,
    #ffffff 80%,
    #ffc373 84%,
    #a17434
  );
  background:
  -webkit-linear-gradient(
    -72deg,
    #ffc373,
    #ffffff 16%,
    #ffc373 21%,
    #ffffff 24%,
    #a17434 27%,
    #ffc373 36%,
    #ffffff 45%,
    #ffffff 60%,
    #ffc373 72%,
    #ffffff 80%,
    #ffc373 84%,
    #a17434
  );
  background:
  -o-linear-gradient(
    -72deg,
    #ffc373,
    #ffffff 16%,
    #ffc373 21%,
    #ffffff 24%,
    #a17434 27%,
    #ffc373 36%,
    #ffffff 45%,
    #ffffff 60%,
    #ffc373 72%,
    #ffffff 80%,
    #ffc373 84%,
    #a17434
  );
  background:
  linear-gradient(
    -72deg,
    #ffc373,
    #ffffff 16%,
    #ffc373 21%,
    #ffffff 24%,
    #a17434 27%,
    #ffc373 36%,
    #ffffff 45%,
    #ffffff 60%,
    #ffc373 72%,
    #ffffff 80%,
    #ffc373 84%,
    #a17434
  );
}`, "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400&display=swap');\n\n@font-face {\n    font-family: '1942-report';\n    src: url('./../fonts/1942_report/1942.ttf');\n}\n\n@font-face \n{\n    font-family: 'Urban jungle';\n    src: url('./../fonts/urban_jungle/UrbanJungleDEMO.otf');\n}\n\n:root {\n    --color-black: #212529;\n    --color-white: #edf2f4;\n    --font-main: '1942-report';\n    --font-title: 'Urban jungle';\n    --font-notifications: 'Raleway', sans-serif;\n    --padding: 10px;\n    --border-radius: 5px;\n    --border: 2px solid #ffffff55;\n    --color-semi-transparent-grey:#a4b2d0a7;\n    --average-value:10px;\n}\n\n*, *::before, *::after{\n    padding:0;\n    margin:0;\n    box-sizing:border-box;\n}\n\nbody {\n    background-color: var(--color-black);\n    height: 100vh;\n    display:flex;\n    align-items:center;\n    justify-content:center;\n}\n\n/* Notification box. */\n\ndiv.notifications-box\n{\n    display:none;\n    position: absolute;\n    color: white;\n    top: 74px;\n    left: 69px;\n    padding: 25px;\n    z-index: 10;\n    border-radius: 5px;\n    background-color: #ffffff22;\n}\n\ndiv.notifications-box > p.message\n{\n    font-family:var(--font-notifications);\n    font-weight: 400;\n}\n\n/* Scrollbar. */\n\n::-webkit-scrollbar\n{\n    width: 10px;\n    height: 10px;\n}\n\n::-webkit-scrollbar-thumb\n{\n    background-color: transparent;\n    border: 1px solid var(--color-semi-transparent-grey);\n    border-radius: var(--average-value);\n}\n\n/* Set the same screen properties for the different screens. */\n\ndiv.intro-screen,\ndiv.place-your-ships-screen,\ndiv.game-screen,\ndiv.winner-screen\n{\n    background-image: linear-gradient(#00000055, #00000055), url('./../images/background-2.jpg');\n    background-size:cover;\n    background-position:center;\n    background-repeat:no-repeat;\n    width: 95%;\n    height: 90%;\n    display:flex;\n    flex-direction:column;\n    justify-content:space-between;\n    align-items:center;\n    border:5px solid var(--color-white);\n    border-radius:5px;\n    padding: calc(var(--padding) * 5);\n    overflow:auto;\n}\n\n/* Buttons */\n\ndiv.place-your-ships-screen button,\ndiv.winner-screen button\n{\n    background: linear-gradient(45deg, #ffffff22, #ffffff22,#ffffff22, white, white  );\n    background-size: 300%;\n    background-position: left;\n    font-family: var(--font-main);\n    border-radius: var(--border-radius);\n    background-color: #ffffff22;\n    color: white;\n    border: var(--border);\n    padding: 7px;\n    font-size: 1.1rem;\n    transition:all 300ms ease-in-out;\n    outline:none;\n}\n\ndiv.place-your-ships-screen button:hover,\ndiv.winner-screen button:hover\n{\n    background-position:right;\n    cursor:pointer;\n    scale:1.03;\n    color:black;\n    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;\n}\n\ndiv.place-your-ships-screen button:active,\ndiv.winner-screen button:active\n{\n    scale:0.9;\n\n}\n\n/* INTRO SCREEN SECTION */\n\ndiv.intro-screen\n{\n    animation: appear 1s ease-in-out;\n    position:relative;\n}\n\ndiv.intro-screen > h1.main-title\n{\n    font-family: var(--font-title);\n    font-weight: 100;\n    color:var(--color-white);\n    font-size:7rem;\n    text-align:center;\n}\n\ndiv.intro-screen > form.start-game-section \n{\n    background-color: #ffffff11;\n    display:flex;\n    flex-direction:column;\n    align-items:stretch;\n    gap: 15px;\n    padding: 15px;\n    border:1px solid #ffffff55;\n    border-radius:var(--border-radius);\n}\n\ndiv.intro-screen > form.start-game-section > p \n{\n    font-family:var(--font-main);\n    font-weight: 100;\n    font-size:1.3rem;\n    color:var(--color-white);\n}\n\ndiv.intro-screen > form.start-game-section > p > span \n{\n    font-size: 1rem;\n}\n\ndiv.intro-screen > form.start-game-section > input \n{\n    padding:5px;\n    background-color:transparent;\n    border:1px solid #ffffff55;\n    border-radius:5px;\n    padding:5px;\n    color:white;\n    font-family:var(--font-main);\n    font-size:1.3rem;\n    text-align:center;\n    transition: all 200ms ease-in-out;\n    outline:none;\n}\n\ndiv.intro-screen > form.start-game-section > input:hover,\ndiv.intro-screen > form.start-game-section > input:focus\n{\n    background-color: #ffffff33;\n}\n\ndiv.intro-screen > form.start-game-section > button.start-game-button \n{\n    padding: 5px 15px;\n    border-radius: 5px;\n    font-family: var(--font-main);\n    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;\n    transition: all 150ms ease-in-out;\n    text-align:center;\n    font-size:1.5rem;\n}\n\ndiv.intro-screen > form.start-game-section > button.start-game-button:hover \n{\n    scale: 1.05;\n    cursor:pointer;\n}\n\ndiv.intro-screen > form.start-game-section > button.start-game-button:active\n{\n    scale: 0.95;\n}\n\ndiv.intro-screen > div.author\n{\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    gap:5px;\n    border:1px solid #ffffff55;\n    border-radius: 5px;\n    padding:10px;\n    background-color: #ffffff33;\n    position:absolute;\n    bottom: 0;\n    left: 0;\n    margin:10px;\n}\n\ndiv.intro-screen > div.author > p\n{\n    color:white;\n    font-family:var(--font-main);\n    display:flex;\n    align-items:flex-end;\n    gap:5px;\n}\n\ndiv.intro-screen > div.author > div.separator\n{\n    height: 1px;\n    width: 100%;\n    background-color: #ffffff44;\n}\n\ndiv.intro-screen > div.author > span > a\n{\n    font-size:2.5rem;\n    color:white;\n    transition: all 400ms ease-in-out;\n    text-decoration: none;\n}\n\ndiv.intro-screen > div.author > span > a:hover\n{\n    transform: scale(1.2) rotate(360deg);\n    cursor:pointer;\n\n}\n\n/* PLACE YOUR SHIPS SECTION */\n\ndiv.place-your-ships-screen\n{\n    display:none;\n    background-image: linear-gradient(#00000055, #00000055), url('./../images/background-1.jpg');\n    background-size:cover;\n    background-position:center;\n    background-repeat:no-repeat;\n    gap:10px;\n}\n\ndiv.place-your-ships-screen > h1\n{\n    text-align:center;\n    font-size: 1.3rem;\n    width: 100%;\n}\n\ndiv.place-your-ships-screen > p.place-ships-instructions\n{\n    font-family:var(--font-main);\n    color:white;\n    font-size:1.3rem;\n    padding:5px 20px;\n}\n\ndiv.place-your-ships-screen > div.gameboard-and-ships-container \n{\n    display:flex;\n    width: 80%;\n    height: 100%;\n    justify-content: center; \n    border-radius: var(--border-radius);\n    gap:var(--padding);\n    overflow:auto;\n}\n\ndiv.place-your-ships-screen > div.gameboard-and-ships-container > div\n{\n    border: var(--border);\n    border-radius:var(--border-radius);\n    padding:var(--padding);\n}\n\ndiv.place-your-ships-screen > div.gameboard-and-ships-container > div.ships-container\n{\n    flex: 1 0 380px;\n    display:flex;\n    flex-direction:column;\n    gap: var(--padding);\n    overflow:auto;\n}\n\ndiv.place-your-ships-screen > div.gameboard-and-ships-container > div.ships-container  h1\n{\n    padding:5px;\n    border: var(--border);\n    border-radius:var(--border-radius);\n    font-family: var(--font-main);\n    font-weight: 100;\n    color:white;\n    text-align:center;\n}\n\ndiv.place-your-ships-screen > div.gameboard-and-ships-container > div.ships-container > div.ships-section\n{\n    display:flex;\n    flex: 1 1 auto;\n    align-items:flex-start;\n    justify-content:start;\n    gap: 25px;\n    flex-direction:column;\n}\n\ndiv.place-your-ships-screen > div.gameboard-and-ships-container > div.ships-container > div.ships-section > div.ship\n{\n    width:fit-content;\n    height: fit-content;\n    display:flex;\n    gap: 5px;\n}\n\ndiv.place-your-ships-screen > div.gameboard-and-ships-container > div.ships-container > div.ships-section > div.ship > div.ship-cell\n{\n    width: 45px;\n    height: 45px;\n    border-radius: 3px;\n    border: var(--border);\n    background-color: #ffffff22;\n}\n\n\ndiv.place-your-ships-screen > div.gameboard-and-ships-container > div.ships-container > div.ships-section > div.ship.vertical \n{\n    width: fit-content;\n    flex-direction:column;\n}\n\ndiv.place-your-ships-screen > div.gameboard-and-ships-container > div.ships-container p\n{\n    font-family:var(--font-main);\n    color:white;\n    display:flex;\n    justify-content:space-between;\n    font-size:1.1rem;\n}\n\ndiv.place-your-ships-screen > div.gameboard-and-ships-container > div.ships-container > div.buttons-container\n{\n    display:flex;\n    flex-direction:column;\n    gap:10px;\n}\n\ndiv.place-your-ships-screen > div.gameboard-and-ships-container > div.gameboard-container \n{\n    flex: 4 0 560px;\n    display:flex;\n    flex-direction:column;\n    gap: 10px;\n    overflow:auto;\n}\n\ndiv.place-your-ships-screen > div.gameboard-and-ships-container > div.gameboard-container > h1\n{\n    font-family: var(--font-main);\n    font-weight: 100;\n    color:white;\n    text-align:center;\n    padding: 5px;\n    border:var(--border);\n    border-radius:var(--border-radius);\n}\n\ndiv.place-your-ships-screen > div.gameboard-and-ships-container > div.gameboard-container > div.gameboard\n{\n    flex: 1 1 auto;\n    display:flex;\n    flex-direction:column;\n    padding: 10px;\n    border:var(--border);\n    border-radius:var(--border-radius);\n    gap: 5px;\n    align-items:center;\n    justify-content:center;\n}\n\ndiv.place-your-ships-screen > div.gameboard-and-ships-container > div.gameboard-container > div.gameboard > div.grid-row\n{\n    display:flex;\n    gap: 5px;\n    width:fit-content;\n\n}\n\ndiv.place-your-ships-screen > div.gameboard-and-ships-container > div.gameboard-container > div.gameboard > div.grid-row > div.grid-cell\n{\n    width: 45px;\n    height: 45px;\n    border-radius:3px;\n    border: var(--border);\n    background-color: #ffffff22;\n    \n}\n\ndiv.place-your-ships-screen > h1, div.game-screen > h1\n{\n    font-family:var(--font-main);\n    color:white;\n    font-weight:100;\n    font-size:3rem;\n}\n\n/* MAIN GAME SCREEN SECTION*/\n\ndiv.game-screen \n{\n    display: none;\n    justify-content:space-between;\n    gap:25px;\n    padding:25px;\n}\n\ndiv.game-screen > div.gameboards-container \n{\n    flex: 1 1 auto;\n    display:flex;\n    width: 85%;\n    height: 85%;\n    justify-content:center;\n    gap:10px;\n}\n\ndiv.game-screen > div.gameboards-container > div.board-container\n{\n    flex: 1 1 auto;\n    display:flex;\n    flex-direction:column;\n    text-align:center;\n    gap:10px;\n}\n\ndiv.game-screen > div.gameboards-container > div.board-container > div.title-and-instruction\n{\n    background-color: #ffffff22;\n    border: 1px solid #ffffff33;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n    padding: 10px;\n}\n\ndiv.game-screen > div.gameboards-container > div.board-container > div.title-and-instruction > h3\n{\n    font-family:var(--font-main);\n    font-size:2rem;\n    font-weight:100;\n    color:white;\n}\n\ndiv.game-screen > div.gameboards-container > div.board-container > div.title-and-instruction > p\n{\n    font-family:var(--font-main);\n    color:white;\n    font-size:1.2rem;\n}\n\ndiv.game-screen > div.gameboards-container > div.board-container > div.gameboard\n{\n    background-color:#ffffff22;\n    min-width: 500px;\n    min-height: 500px;\n    flex: 1 1 auto;\n    border:1px solid #ffffff33;\n    border-radius:5px;\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    align-items:center;\n    gap:5px;\n    padding:10px;\n}\n\ndiv.game-screen > div.gameboards-container > div.board-container > div.gameboard > div.grid-row\n{\n    display:flex;\n    height: fit-content;\n    width:fit-content;\n    gap: 5px;\n}\n\ndiv.game-screen > div.gameboards-container > div.board-container > div.gameboard > div.grid-row > div.grid-cell\n{\n    background-color:#ffffff22;\n    height: 45px;\n    width:45px;\n    border: 1px solid #ffffff55;\n    border-radius:5px;\n}\n\ndiv.game-screen > div.gameboards-container > div.board-container > ul.colors-meaning\n{\n    background-color: #ffffff22;\n    border: 1px solid #ffffff33;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n    padding: 10px;\n    list-style-type: none;\n}\n\ndiv.game-screen > div.gameboards-container > div.board-container > ul.colors-meaning > li \n{\n    font-family:var(--font-main);\n    font-size:1.2rem;\n    color:white;\n}\n\ndiv.game-screen > div.gameboards-container > div.separator \n{\n    background-color:white;\n    width: 1px;\n    height:100%;\n    opacity:.2;\n    align-self:center;\n}\n\n/* Winner screen. */\n\ndiv.winner-screen\n{\n    display:flex;\n    align-items:center;\n    justify-content:center;\n}\n\ndiv.winner-screen > div.message\n{\n    display:flex;\n    flex-direction:column;\n    justify-content: space-between;\n    align-items:center;\n    width: 50%;\n    height: 100%;\n    background-color: #ffffff22;\n    border-radius:var(--border-radius);\n    padding:25px;\n}\n\ndiv.winner-screen > div.message > div.winner,\ndiv.loser\n{\n    width: 90%;\n    padding:50px 10px;\n    border-radius:var(--border-radius);\n    background-color:#ffffff33;\n    display: flex;\n    flex-direction: column;\n    align-items:center;\n    gap: 20px;\n}\n\ndiv.winner-screen > div.message > div.winner > h2,\ndiv.loser > h2\n{\n    font-family: var(--font-title);\n    text-align:center;\n    font-weight:100;\n    font-size:4rem;\n    color:white;\n    letter-spacing: 2px;   \n}\n\ndiv.winner-screen > div.message > div.winner > p.player-name\n{\n    text-align:center;\n    font-family:var(--font-main);\n    font-size:1.4rem;\n    border-radius:var(--border-radius);\n    padding:10px;\n}\n\ndiv.winner-screen > div.message > div.winner > p:last-of-type,\ndiv.loser > p:last-of-type\n{\n    font-family: var(--font-main);\n    text-align:center;\n    font-weight:100;\n    font-size:2rem;\n    color:white;\n}\n\n/* Classes to control animations. */\n\n.vanish-screen \n{\n    animation: disappear 1s ease-in-out !important;\n    animation-fill-mode: forwards !important;\n}\n\n.appear-screen\n{\n    display:flex !important;\n    animation:appear-place-ships-screen 1s ease-in;\n    animation-fill-mode: forwards;\n}\n\n.disappear-place-ships-screen\n{\n    animation: disappear-place-ships-screen 750ms ease-in-out;\n    animation-fill-mode: forwards;\n}\n\n.appear-game-screen\n{\n    display:flex !important;\n    animation: appear-game-screen 750ms ease-in;\n    animation-fill-mode: forwards;\n}\n\n.disappear-game-screen\n{\n    animation: disappear-game-screen 1s ease-in-out;\n    animation-fill-mode: forwards;\n}\n\n.appear-winner-screen\n{\n    animation: appear-winner-screen 750ms cubic-bezier(0.4, 0, 0.2, 1);\n    animation-fill-mode: forwards;\n}\n\n.appear-notifications-box\n{\n    display:block !important;\n    animation:appear-notifications-box 4s ease-in-out;\n    animation-fill-mode: forwards;\n}\n\n\n/* Keyframes to control animations. */\n\n@keyframes appear {\n    0% \n    {\n        transform: scale(3);\n    }\n    33%\n    {\n        transform: scale(.9)\n    }\n    66%\n    {\n        transform: scale(1.1)\n    }\n    100% \n    {\n        transform: scale(1);\n    }\n}\n\n@keyframes disappear \n{\n    0%\n    {\n        transform: rotate(0deg) scale(1);\n    }\n    30%\n    {\n        transform:rotate(-45deg) scale(1.2);\n    }\n    100%\n    {\n        transform: rotate(360deg) scale(0);\n    }\n}\n\n@keyframes appear-place-ships-screen\n{\n    0%\n    {\n        transform: scale(0) rotate(-360deg);\n    }\n    60%\n    {\n        transform: scale(1.2) rotate(45deg);\n    }\n    100%\n    {\n        transform: scale(1) rotate(0);\n    }\n}\n\n@keyframes disappear-place-ships-screen\n{\n    0%\n    {\n        transform: scale(1);\n    }\n    40%\n    {\n        transform: scale(1.1);\n        opacity:1;\n    }\n    100%\n    {\n        transform: scale(0);\n        opacity:0;\n    }\n}\n\n@keyframes appear-game-screen\n{\n    0%\n    {\n        transform: scale(0);\n        opacity: 0;\n    }\n    75%\n    {\n        transform: scale(1.2);\n    }\n    100%\n    {\n        transform: scale(1);\n        opacity: 1;\n    }\n}\n\n@keyframes disappear-game-screen\n{\n    0%\n    {\n        transform: rotate(0deg) scale(1);\n    }\n    30%\n    {\n        transform: rotate(-25deg) scale(1.1);\n    }\n    100%\n    {\n        transform: rotate(360deg) scale(0);\n    }\n}\n\n@keyframes appear-winner-screen\n{\n    0%\n    {\n        transform: translateY(-120%);\n    }\n    60%\n    {\n        transform: translateY(50px);\n    }\n    80%\n    {\n        transform: translateY(-25px);\n    }\n    100%\n    {\n        transform: translateY(0);\n    }\n}\n\n@keyframes appear-notifications-box\n{\n    0%\n    {\n        opacity:0;\n        transform:scale(0);\n    }\n    25%\n    {\n        opacity: 1;\n        transform:scale(1);\n    }\n    75%\n    {\n        opacity: 1;\n        transform:scale(1);\n    }\n    100%\n    {\n        opacity:0;\n        transform:scale(0);\n    }\n}\n\n\n/* Classes to decorate buttons. */\n\n.platinum-effect {\n  color: rgba(0, 0, 0, 0.72);\n  text-decoration: none;\n  font-weight: bold;\n  text-shadow: 1px 1px 0 #ffffff;\n  box-shadow:\n    2px 2px 0.5em rgba(122, 122, 122, 0.55),\n    inset 1px 1px 0 rgba(255, 255, 255, 0.9),\n    inset -1px -1px 0 rgba(0, 0, 0, 0.5)\n  ;\n  border: 1px solid #cacade;\n  background:\n    -moz-linear-gradient(\n    -72deg,\n    #dedeff,\n    #ffffff 16%,\n    #dedeff 21%,\n    #ffffff 24%,\n    #555564 27%,\n    #dedeff 36%,\n    #ffffff 45%,\n    #ffffff 60%,\n    #dedeff 72%,\n    #ffffff 80%,\n    #dedeff 84%,\n    #555564\n  );\n  background:\n  -webkit-linear-gradient(\n    -72deg,\n    #dedeff,\n    #ffffff 16%,\n    #dedeff 21%,\n    #ffffff 24%,\n    #555564 27%,\n    #dedeff 36%,\n    #ffffff 45%,\n    #ffffff 60%,\n    #dedeff 72%,\n    #ffffff 80%,\n    #dedeff 84%,\n    #555564\n  );\n  background:\n  -o-linear-gradient(\n    -72deg,\n    #dedeff,\n    #ffffff 16%,\n    #dedeff 21%,\n    #ffffff 24%,\n    #555564 27%,\n    #dedeff 36%,\n    #ffffff 45%,\n    #ffffff 60%,\n    #dedeff 72%,\n    #ffffff 80%,\n    #dedeff 84%,\n    #555564\n  );\n  background:\n  linear-gradient(\n    -72deg,\n    #dedeff,\n    #ffffff 16%,\n    #dedeff 21%,\n    #ffffff 24%,\n    #555564 27%,\n    #dedeff 36%,\n    #ffffff 45%,\n    #ffffff 60%,\n    #dedeff 72%,\n    #ffffff 80%,\n    #dedeff 84%,\n    #555564\n  );\n}\n\n.button-yellowgold {\n  color: rgba(73, 45, 21, 0.72);\n  text-decoration: none;\n  font-weight: bold;\n  text-shadow: 1px 1px 0 #ffffff;\n  box-shadow:\n    2px 2px 0.5em rgba(155, 122, 89, 0.55),\n    inset 1px 1px 0 rgba(255, 255, 255, 0.9),\n    inset -1px -1px 0 rgba(0, 0, 0, 0.5)\n  ;\n  border: 1px solid #deca45;\n  background:\n  -moz-linear-gradient(\n    -72deg,\n    #ffc373,\n    #ffffff 16%,\n    #ffc373 21%,\n    #ffffff 24%,\n    #a17434 27%,\n    #ffc373 36%,\n    #ffffff 45%,\n    #ffffff 60%,\n    #ffc373 72%,\n    #ffffff 80%,\n    #ffc373 84%,\n    #a17434\n  );\n  background:\n  -webkit-linear-gradient(\n    -72deg,\n    #ffc373,\n    #ffffff 16%,\n    #ffc373 21%,\n    #ffffff 24%,\n    #a17434 27%,\n    #ffc373 36%,\n    #ffffff 45%,\n    #ffffff 60%,\n    #ffc373 72%,\n    #ffffff 80%,\n    #ffc373 84%,\n    #a17434\n  );\n  background:\n  -o-linear-gradient(\n    -72deg,\n    #ffc373,\n    #ffffff 16%,\n    #ffc373 21%,\n    #ffffff 24%,\n    #a17434 27%,\n    #ffc373 36%,\n    #ffffff 45%,\n    #ffffff 60%,\n    #ffc373 72%,\n    #ffffff 80%,\n    #ffc373 84%,\n    #a17434\n  );\n  background:\n  linear-gradient(\n    -72deg,\n    #ffc373,\n    #ffffff 16%,\n    #ffc373 21%,\n    #ffffff 24%,\n    #a17434 27%,\n    #ffc373 36%,\n    #ffffff 45%,\n    #ffffff 60%,\n    #ffc373 72%,\n    #ffffff 80%,\n    #ffc373 84%,\n    #a17434\n  );\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/computer.js":
/*!****************************!*\
  !*** ./src/js/computer.js ***!
  \****************************/
/***/ ((module) => {

class Computer {
    constructor(playerGameboard) {
        this.enemyGameboard = playerGameboard;
        // Save the coordinates of each attack that has been already launched.
        this.coordinatesAlreadyUsed = [];
    }

    // Take turn and throw attack to the player's gameboard by passing the coordinates of the attack
    takeTurn() {
        // Create random coordinates between 0 and 9.
        const coordinates = {
            row: Math.floor(Math.random() * 10),
            column: Math.floor(Math.random() * 10),
        };

        // Check if randomly generated coordinates are already in array.
        const isAttackPresent = this.coordinatesAlreadyUsed.some((obj) => obj.row
        === coordinates.row && obj.column === coordinates.column);

        // If all the possible moves were already made by the computer.
        if (isAttackPresent && this.coordinatesAlreadyUsed.length === 100) {
            throw new Error('There aren\'t more possible moves.');
        }

        // If the coordinates are already present in the array, call the method recursively.
        if (isAttackPresent) {
            this.takeTurn();
        } else {
            // Destructure the coordinates object into separate variables to launch attack.
            const { row, column } = coordinates;
            this.coordinatesAlreadyUsed.push({ row, column });
            this.enemyGameboard.receiveAttack(row, column);
        }
    }
}

module.exports = Computer;


/***/ }),

/***/ "./src/js/dom-control.js":
/*!*******************************!*\
  !*** ./src/js/dom-control.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-controls */ "./src/js/game-controls.js");
// eslint-disable-next-line import/no-cycle


const DOMMethods = {
    disappearIntroScreen() {
        const introScreen = document.querySelector('[data-intro-screen]');
        introScreen.classList.add('vanish-screen');
        setTimeout(() => {
            document.querySelector('[data-intro-screen]').remove();
        }, 1000);
    },
    showPlaceShipsScreen() {
        const placeShipsScreen = document.querySelector('[data-place-your-ships-screen]');
        placeShipsScreen.classList.add('appear-screen');
    },
    setUserName(playerName) {
        if (playerName === '') {
            return;
        }
        document.querySelector('[data-player-name]').textContent = playerName;
        document.querySelector('[data-game-screen-player-name]').textContent = playerName;
    },
    disappearPlaceShipsScreen() {
        const placeShipsScreen = document.querySelector('[data-place-your-ships-screen]');
        placeShipsScreen.classList.add('disappear-place-ships-screen');
        setTimeout(() => {
            document.querySelector('[data-place-your-ships-screen]').remove();
        }, 1000);
    },
    appearGameScreen() {
        const gameScreen = document.querySelector('[data-game-screen]');
        gameScreen.classList.add('appear-game-screen');
    },
    // Render gameboards to begin game.
    renderGameboards(player, computer) {
        // References to DOM elements.
        const playerGameboard = document.querySelector('[data-player-gameboard]');
        playerGameboard.innerHTML = '';
        const computerGameboard = document.querySelector('[data-computer-gameboard]');
        computerGameboard.innerHTML = '';

        // Create grid rows DOM.
        for (let a = 0; a < 10; a += 1) {
            const playerGridRow = document.createElement('div');
            const computerGridRow = document.createElement('div');
            playerGridRow.classList.add('grid-row');
            computerGridRow.classList.add('grid-row');

            // Create grid cells DOM.
            for (let b = 0; b < 10; b += 1) {
                const playerGridCell = document.createElement('div');
                const computerGridCell = document.createElement('div');
                playerGridCell.classList.add('grid-cell');
                computerGridCell.classList.add('grid-cell');

                const computerCell = player.enemyGameboard.grid[a][b];
                const playerCell = computer.enemyGameboard.grid[a][b];

                if (computerCell.ship !== null && computerCell.hit) {
                    computerGridCell.style.backgroundColor = '#00ff00';
                } else if (computerCell.ship === null && computerCell.hit) {
                    computerGridCell.style.backgroundColor = '#ff0000';
                } else {
                    computerGridCell.addEventListener('click', () => {
                        player.takeTurn(a, b);
                        computer.takeTurn();
                        _game_controls__WEBPACK_IMPORTED_MODULE_0__["default"].checkForWinner(player, computer);
                        this.renderGameboards(player, computer);
                    });
                }
                computerGridRow.appendChild(computerGridCell);

                if (playerCell.ship !== null && playerCell.hit === false) {
                    playerGridCell.style.backgroundColor = '#ffffff';
                } else if (playerCell.ship !== null && playerCell.hit) {
                    playerGridCell.style.backgroundColor = '#00ff00';
                } else if (playerCell.ship === null && playerCell.hit) {
                    playerGridCell.style.backgroundColor = '#ff0000';
                }
                playerGridRow.appendChild(playerGridCell);
            }
            playerGameboard.appendChild(playerGridRow);
            computerGameboard.appendChild(computerGridRow);
        }
    },

    // Render gameboard to place ships.
    renderGameboardToPlaceShips(gameboard) {
        const gameboardToPlaceShips = document.querySelector('[data-place-ships-gameboard]');
        gameboardToPlaceShips.innerHTML = '';
        // Create rows.
        for (let a = 0; a < 10; a += 1) {
            const gridRow = document.createElement('div');
            gridRow.classList.add('grid-row');

            // Create grid cells.
            for (let b = 0; b < 10; b += 1) {
                const gridCell = document.createElement('div');
                gridCell.classList.add('grid-cell');

                // Create reference to gameboard cell.
                const cell = gameboard.grid[a][b];
                if (cell.ship !== null) {
                    gridCell.style.backgroundColor = 'white';
                } else {
                    gridCell.addEventListener('dragover', (event) => {
                        event.preventDefault();
                    });
                    gridCell.addEventListener('drop', (event) => {
                        event.preventDefault();
                        const shipLength = Number(event.dataTransfer.getData('text'));
                        _game_controls__WEBPACK_IMPORTED_MODULE_0__["default"].placeShip(gameboard, a, b, shipLength);
                        this.renderGameboardToPlaceShips(gameboard);
                    });
                }
                gridRow.appendChild(gridCell);
            }
            gameboardToPlaceShips.appendChild(gridRow);
        }
    },

    rotateShips() {
        const shipsDirection = document.querySelector('#ship-direction').getAttribute('data-ship-direction');
        const shipsContainer = document.querySelector('.ships-section');
        const ships = document.querySelectorAll('.ship');
        if (shipsDirection === 'vertical') {
            shipsContainer.style.flexDirection = 'row';
            ships.forEach((ship) => {
                const singleShip = ship;
                singleShip.classList.add('vertical');
                singleShip.classList.remove('horizontal');
            });
        } else {
            shipsContainer.style.flexDirection = 'column';
            ships.forEach((ship) => {
                const singleShip = ship;
                singleShip.classList.add('horizontal');
                singleShip.classList.remove('vertical');
            });
        }
    },

    showWinnerScreen(winner) {
        // Hide game screen.
        const winnerName = document.querySelector('[data-game-screen-player-name]').textContent;
        const gameScreen = document.querySelector('[data-game-screen]');
        gameScreen.classList.add('disappear-game-screen');
        setTimeout(() => {
            gameScreen.style = 'display:none !important;';
            gameScreen.remove();
        }, 1000);

        // Show winner screen.
        const displayWinnerName = document.querySelector('[data-winner-name]');
        displayWinnerName.textContent = winnerName;
        const winnerScreen = document.querySelector('[data-winner-screen]');
        setTimeout(() => {
            winnerScreen.style = 'display:flex';
            winnerScreen.classList.add('appear-winner-screen');
        }, 1200);
        const playerWinner = document.querySelector('[data-winner]');
        const computerWinner = document.querySelector('[data-loser]');
        if (winner === 'Player') {
            playerWinner.style = 'display:flex !important;';
            computerWinner.style = 'display:none;';
        } else if (winner === 'Computer') {
            computerWinner.style = 'display:flex !important;';
            playerWinner.style = 'display:none;';
        }
    },

    notifyError(error) {
        const notificationBox = document.querySelector('[data-notification-box]');
        notificationBox.classList.add('appear-notifications-box');
        const notificationMessage = document.querySelector('[data-notification-message]');
        notificationMessage.textContent = error;
        setTimeout(() => {
            notificationBox.classList.remove('appear-notifications-box');
        }, 4000);
    },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMMethods);


/***/ }),

/***/ "./src/js/game-controls.js":
/*!*********************************!*\
  !*** ./src/js/game-controls.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _computer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./computer */ "./src/js/computer.js");
/* harmony import */ var _computer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_computer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dom_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-control */ "./src/js/dom-control.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/js/gameboard.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gameboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/js/player.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_player__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ship */ "./src/js/ship.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ship__WEBPACK_IMPORTED_MODULE_4__);

// eslint-disable-next-line import/no-cycle





const GAME_CONTROLS = {
    setNewGame(userName) {
        // Create game boards.
        const playerGameboard = new (_gameboard__WEBPACK_IMPORTED_MODULE_2___default())();
        const computerGameboard = new (_gameboard__WEBPACK_IMPORTED_MODULE_2___default())();

        // Populate game boards with ships.
        for (let a = 0, b = 5; a < 5; a += 1, b -= 1) {
            const shipForPlayer = new (_ship__WEBPACK_IMPORTED_MODULE_4___default())(b);
            const shipForComputer = new (_ship__WEBPACK_IMPORTED_MODULE_4___default())(b);
            playerGameboard.placeShip(shipForPlayer, a, 0, true);
            computerGameboard.placeShip(shipForComputer, a, 0, true);
        }

        // Create players.
        const player = new (_player__WEBPACK_IMPORTED_MODULE_3___default())(userName, computerGameboard);
        const computer = new (_computer__WEBPACK_IMPORTED_MODULE_0___default())(playerGameboard);

        // Render both players gameboards.
        return [player, computer];
    },

    checkForWinner(player, computer) {
        if (player.enemyGameboard.allShipsSunk()) {
            console.log('Player wins');
            _dom_control__WEBPACK_IMPORTED_MODULE_1__["default"].showWinnerScreen('Player');
        }
        if (computer.enemyGameboard.allShipsSunk()) {
            console.log('Computer wins');
            _dom_control__WEBPACK_IMPORTED_MODULE_1__["default"].showWinnerScreen('Computer');
        }
    },

    // Prepare ship to be placed by the player.
    // Adding drag controls to each ship.
    prepareShips() {
        // Carrier.
        document.querySelector('.carrier').addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', event.target.id);
        });
        // Battleship.
        document.querySelector('.battleship').addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', event.target.id);
        });
        // Cruiser.
        document.querySelector('.cruiser').addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', event.target.id);
        });
        // Submarine.
        document.querySelector('.submarine').addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', event.target.id);
        });
        // Destroyer.
        document.querySelector('.destroyer').addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', event.target.id);
        });
    },

    // Change the ships direction.
    changeShipAxis() {
        const shipDirection = document.querySelector('#ship-direction');
        if (shipDirection.getAttribute('data-ship-direction') === 'horizontal') {
            shipDirection.setAttribute('data-ship-direction', 'vertical');
            document.querySelector('#ship-direction').textContent = 'vertical';
        } else if (shipDirection.getAttribute('data-ship-direction') === 'vertical') {
            shipDirection.setAttribute('data-ship-direction', 'horizontal');
            document.querySelector('#ship-direction').textContent = 'horizontal';
        }
    },

    // Place the ships after the player drags them into the gameboard.
    placeShip(playerGameboard, row, column, shipLength) {
        try {
            const ship = new (_ship__WEBPACK_IMPORTED_MODULE_4___default())(shipLength);
            const shipDirectionInfo = document.querySelector('#ship-direction').getAttribute('data-ship-direction');
            let shipDirection = null;
            if (shipDirectionInfo === 'horizontal') {
                shipDirection = true;
            } else {
                shipDirection = false;
            }

            playerGameboard.placeShip(ship, row, column, shipDirection);
            // Remove the ships after being placed.
            document.getElementById(`${shipLength}`).remove();
            // Update the ships placed counter.
            let shipsPlacedCounter = Number(document.querySelector('[data-number-of-ships-placed]').textContent);
            shipsPlacedCounter += 1;
            document.querySelector('[data-number-of-ships-placed]').textContent = shipsPlacedCounter;
        } catch (error) {
            _dom_control__WEBPACK_IMPORTED_MODULE_1__["default"].notifyError(error.message);
        }
    },
    // Randomly place the computer ships.
    placeComputerShips(computerGameboard) {
        try {
            // Create ships for the computer.
            const carrier = new (_ship__WEBPACK_IMPORTED_MODULE_4___default())(5);
            const battleship = new (_ship__WEBPACK_IMPORTED_MODULE_4___default())(4);
            const cruiser = new (_ship__WEBPACK_IMPORTED_MODULE_4___default())(3);
            const submarine = new (_ship__WEBPACK_IMPORTED_MODULE_4___default())(3);
            const destroyer = new (_ship__WEBPACK_IMPORTED_MODULE_4___default())(2);
            const ships = [carrier, battleship, cruiser, submarine, destroyer];

            // Append them into the gameboard depending of the ship length and the random number.
            for (let a = 0; a < ships.length; a += 1) {
                // Decide ship direction; if === 0 is horizontal, if === 1 is vertical.
                const shipDirection = Math.floor(Math.random() * 2);
                if (shipDirection === 0) {
                    const randomRow = Math.floor(Math.random() * 10);
                    const randomColumnCase5 = Math.floor(Math.random() * 6);
                    const randomColumnCase4 = Math.floor(Math.random() * 5);
                    const randomColumnCase3 = Math.floor(Math.random() * 4);
                    const randomColumnCase2 = Math.floor(Math.random() * 3);
                    switch (ships[a].length) {
                    case 5:
                        computerGameboard.placeShip(ships[a], randomRow, randomColumnCase5, true);
                        break;
                    case 4:
                        computerGameboard.placeShip(ships[a], randomRow, randomColumnCase4, true);
                        break;
                    case 3:
                        computerGameboard.placeShip(ships[a], randomRow, randomColumnCase3, true);
                        break;
                    case 2:
                        computerGameboard.placeShip(ships[a], randomRow, randomColumnCase2, true);
                        break;
                    default:
                        return;
                    }
                // Vertical ship.
                } else {
                    const randomColumn = Math.floor(Math.random() * 10);
                    const randomRowCase5 = Math.floor(Math.random() * 6);
                    const randomRowCase4 = Math.floor(Math.random() * 5);
                    const randomRowCase3 = Math.floor(Math.random() * 4);
                    const randomRowCase2 = Math.floor(Math.random() * 3);
                    switch (ships[a].length) {
                    case 5:
                        computerGameboard.placeShip(ships[a], randomRowCase5, randomColumn, false);
                        break;
                    case 4:
                        computerGameboard.placeShip(ships[a], randomRowCase4, randomColumn, false);
                        break;
                    case 3:
                        computerGameboard.placeShip(ships[a], randomRowCase3, randomColumn, false);
                        break;
                    case 2:
                        computerGameboard.placeShip(ships[a], randomRowCase2, randomColumn, false);
                        break;
                    default:
                        return;
                    }
                }
            }
        // If ships overlap or an error happens, erase the grid, create a new one and try again.
        // Calling the function recursively.
        } catch {
            // New computer gameboard.
            const computerGB = computerGameboard;
            computerGB.grid = Array(10).fill(null).map(() => Array(10).fill(null).map(() => (
                { ship: null, hit: false })));
            this.placeComputerShips(computerGB);
        }
    },

    // Check if the player has placed all the ships to start the battle.
    startBattle() {
        const numberOfShipsPlaced = Number(document.querySelector('[data-number-of-ships-placed]').textContent);
        if (numberOfShipsPlaced < 5) {
            _dom_control__WEBPACK_IMPORTED_MODULE_1__["default"].notifyError('The game can\'t start if all the ships are not placed.');
            return false;
        }
        console.log('The game has started.');
        return true;
    },

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GAME_CONTROLS);


/***/ }),

/***/ "./src/js/gameboard.js":
/*!*****************************!*\
  !*** ./src/js/gameboard.js ***!
  \*****************************/
/***/ ((module) => {

class Gameboard {
    constructor() {
        // Create the gameboard grid.
        this.grid = Array(10).fill(null).map(() => Array(10).fill(null).map(() => (
            { ship: null, hit: false })));
        this.missedAttacks = 0;
    }

    // Check if ship placement is out of boundaries.
    placeShip(ship, row, col, isHorizontal) {
        if (row >= 10 || col >= 10) {
            throw new Error('Ship placement out of boundaries.');
        }

        const shipLength = ship.length;

        if (isHorizontal) {
            // If the ship placement overflows the grid's horizontal positioning, throw error.
            if ((col + ship.length) > 10) {
                throw new Error('Invalid ship placement, the ship exceeds the gameboard.');
            }

            let gridColumn = col;

            // If there's already another ship in the grid in the same place.
            for (let a = 0, columnNumber = col; a < shipLength; a += 1, columnNumber += 1) {
                if (this.grid[row][columnNumber].ship !== null) {
                    throw new Error('Invalid ship placement, the ship overlaps another ship horizontally.');
                }
            }
            // If the placement is valid, proceed.
            for (let i = 0; i < shipLength; i += 1, gridColumn += 1) {
                this.grid[row][gridColumn].ship = ship;
            }
        // If the positioning is vertical.
        } else {
            // If the ship placement overflows the grid's vertical positioning, throw error.
            if ((row + ship.length) > 10) {
                throw new Error('Invalid ship placement, the ship exceeds the gameboard.');
            }

            let gridRow = row;

            // If there's already another ship in the grid in the same place.
            for (let a = 0, rowNumber = row; a < shipLength; a += 1, rowNumber += 1) {
                if (this.grid[rowNumber][col].ship !== null) {
                    throw new Error('Invalid ship placement, the ship overlaps another ship vertically.');
                }
            }
            // If the placement is valid, proceed.
            for (let i = 0; i < shipLength; i += 1, gridRow += 1) {
                this.grid[gridRow][col].ship = ship;
            }
        }
    }

    receiveAttack(row, col) {
        // Check if the grid cell has been hit already.
        if (this.grid[row][col].hit === true) {
            throw new Error('That grid cell has been attacked already.');
        }

        // If there's a ship in the attacked grid cell.
        if (this.grid[row][col].ship !== null) {
            this.grid[row][col].ship.receiveHit();
            this.grid[row][col].hit = true;
        // I there isn't a ship in the attacked place.
        } else {
            this.grid[row][col].hit = true;
            this.missedAttacks += 1;
        }
    }

    // Check if all the ships in the grid have been sunk.
    allShipsSunk() {
        // Loop through all the grid cells.
        for (let row = 0; row < 10; row += 1) {
            for (let col = 0; col < 10; col += 1) {
                const cell = this.grid[row][col];
                // If it finds at least one ship whose "isSunk" property is false, return false.
                if (cell.ship && !cell.ship.isSunk) {
                    return false;
                }
            }
        }
        // If it doesn't find a single ship whose "isSunk" property is false, return true.
        return true;
    }
}

module.exports = Gameboard;


/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/***/ ((module) => {

class Player {
    constructor(name, enemyGameboard) {
        this.name = name;
        this.enemyGameboard = enemyGameboard;
    }

    takeTurn(row, col) {
        // If attack is invalid.
        if (row < 0 || row >= 10 || col < 0 || col >= 10) {
            throw new Error('Invalid attack coordinates. The attack is outside of the grid\'s boundaries.');
        }

        // Check if the grid's cell has been hit already.
        if (this.enemyGameboard.grid[row][col].hit) {
            throw new Error('That cell has already been attacked.');
        }

        this.enemyGameboard.receiveAttack(row, col);
    }
}

module.exports = Player;


/***/ }),

/***/ "./src/js/ship.js":
/*!************************!*\
  !*** ./src/js/ship.js ***!
  \************************/
/***/ ((module) => {

class Ship {
    constructor(length) {
        if (typeof length !== 'number' || length < 1 || length > 5) {
            throw new Error('Invalid ship length');
        }
        this.length = length;
        this.hitsCounter = 0;
        this.isSunk = false;
    }

    receiveHit() {
        if (!this.isSunk) {
            this.hitsCounter += 1;
            this.checkShipHealth();
            return true;
        }
        return false;
    }

    checkShipHealth() {
        if (this.hitsCounter === this.length) {
            this.isSunk = true;
        }
    }
}

module.exports = Ship;


/***/ }),

/***/ "./src/fonts/1942_report/1942.ttf":
/*!****************************************!*\
  !*** ./src/fonts/1942_report/1942.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1f8a446f5a562edf4ae8.ttf";

/***/ }),

/***/ "./src/fonts/urban_jungle/UrbanJungleDEMO.otf":
/*!****************************************************!*\
  !*** ./src/fonts/urban_jungle/UrbanJungleDEMO.otf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b6c2d200dedd8c18d02e.otf";

/***/ }),

/***/ "./src/images/background-1.jpg":
/*!*************************************!*\
  !*** ./src/images/background-1.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9db26a408d59ee8530e7.jpg";

/***/ }),

/***/ "./src/images/background-2.jpg":
/*!*************************************!*\
  !*** ./src/images/background-2.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f366b190d567e05dcae9.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ "./src/css/styles.css");
/* harmony import */ var _js_computer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/computer */ "./src/js/computer.js");
/* harmony import */ var _js_computer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_computer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_dom_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/dom-control */ "./src/js/dom-control.js");
/* harmony import */ var _js_game_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/game-controls */ "./src/js/game-controls.js");
/* harmony import */ var _js_gameboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/gameboard */ "./src/js/gameboard.js");
/* harmony import */ var _js_gameboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_gameboard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/player */ "./src/js/player.js");
/* harmony import */ var _js_player__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_player__WEBPACK_IMPORTED_MODULE_5__);







const audio = new Audio('./src/music/main-theme.mp3');

// Save the user name every time he enters an input in the input field.
let userName = '';
const userNameInputField = document.querySelector('[data-user-name]');
userNameInputField.addEventListener('input', () => {
    userName = document.querySelector('[data-user-name]').value;
});

// Create gameboards.
const playerGameboard = new (_js_gameboard__WEBPACK_IMPORTED_MODULE_4___default())();
const computerGameboard = new (_js_gameboard__WEBPACK_IMPORTED_MODULE_4___default())();

// Create players.
const player = new (_js_player__WEBPACK_IMPORTED_MODULE_5___default())(userName, computerGameboard);
const computer = new (_js_computer__WEBPACK_IMPORTED_MODULE_1___default())(playerGameboard);

// Button to go to "place ships" section.
const startGameButton = document.querySelector('[data-start-game-form]');
startGameButton.addEventListener('submit', (e) => {
    e.preventDefault();
    audio.play();
    _js_dom_control__WEBPACK_IMPORTED_MODULE_2__["default"].disappearIntroScreen();
    _js_dom_control__WEBPACK_IMPORTED_MODULE_2__["default"].renderGameboardToPlaceShips(computer.enemyGameboard);
    _js_dom_control__WEBPACK_IMPORTED_MODULE_2__["default"].setUserName(userName);
    _js_game_controls__WEBPACK_IMPORTED_MODULE_3__["default"].prepareShips();
    _js_game_controls__WEBPACK_IMPORTED_MODULE_3__["default"].placeComputerShips(player.enemyGameboard);
    setTimeout(() => {
        _js_dom_control__WEBPACK_IMPORTED_MODULE_2__["default"].showPlaceShipsScreen();
    }, 1050);
});

// Button to change the ship axis to be placed on the gameboard.
const changeShipAxisButton = document.querySelector('[data-change-ship-axis]');
changeShipAxisButton.addEventListener('click', () => {
    _js_game_controls__WEBPACK_IMPORTED_MODULE_3__["default"].changeShipAxis();
    _js_dom_control__WEBPACK_IMPORTED_MODULE_2__["default"].rotateShips();
});

// Button to start the battle.
const startBattleButton = document.querySelector('[data-start-battle-button]');
startBattleButton.addEventListener('click', () => {
    if (_js_game_controls__WEBPACK_IMPORTED_MODULE_3__["default"].startBattle()) {
        _js_dom_control__WEBPACK_IMPORTED_MODULE_2__["default"].renderGameboards(player, computer);
        _js_dom_control__WEBPACK_IMPORTED_MODULE_2__["default"].disappearPlaceShipsScreen();
        setTimeout(() => {
            _js_dom_control__WEBPACK_IMPORTED_MODULE_2__["default"].appearGameScreen();
        }, 1000);
    }
});

// Play again button.
const playAgainButton = document.querySelector('[data-play-again-button]');
playAgainButton.addEventListener('click', () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsd0lBQWtEO0FBQzlGLDRDQUE0QyxnS0FBOEQ7QUFDMUcsNENBQTRDLGtJQUErQztBQUMzRiw0Q0FBNEMsa0lBQStDO0FBQzNGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsZ0hBQWdILGtCQUFrQjtBQUNsSSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsbUNBQW1DO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsbUNBQW1DO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8scUZBQXFGLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sYUFBYSxPQUFPLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxXQUFXLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxXQUFXLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxPQUFPLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLE9BQU8sV0FBVyxNQUFNLGFBQWEsT0FBTyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksWUFBWSxPQUFPLGFBQWEsT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsUUFBUSxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLGFBQWEsT0FBTyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxhQUFhLE9BQU8sVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxPQUFPLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxPQUFPLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLGFBQWEsT0FBTyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsUUFBUSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLFdBQVcsS0FBSyxNQUFNLFlBQVksV0FBVyxLQUFLLE1BQU0sTUFBTSxNQUFNLFlBQVksV0FBVyxLQUFLLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxXQUFXLEtBQUssTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFlBQVksTUFBTSxNQUFNLFVBQVUsWUFBWSxNQUFNLE1BQU0sVUFBVSxZQUFZLE1BQU0sTUFBTSxVQUFVLFlBQVksTUFBTSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFNBQVMsS0FBSyxZQUFZLG9CQUFvQixLQUFLLG1CQUFtQixLQUFLLG1CQUFtQixLQUFLLG1CQUFtQixLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFNBQVMsS0FBSyxZQUFZLG9CQUFvQixLQUFLLG1CQUFtQixLQUFLLG1CQUFtQixLQUFLLG1CQUFtQixLQUFLLGdHQUFnRyxtQkFBbUIsZ0JBQWdCLGlDQUFpQyxrREFBa0QsR0FBRyxrQkFBa0Isa0NBQWtDLDhEQUE4RCxHQUFHLFdBQVcsNkJBQTZCLDZCQUE2QixpQ0FBaUMsbUNBQW1DLGtEQUFrRCxzQkFBc0IsMkJBQTJCLG9DQUFvQyw4Q0FBOEMsMkJBQTJCLEdBQUcsMkJBQTJCLGdCQUFnQixlQUFlLDRCQUE0QixHQUFHLFVBQVUsMkNBQTJDLG9CQUFvQixtQkFBbUIseUJBQXlCLDZCQUE2QixHQUFHLHVEQUF1RCxtQkFBbUIseUJBQXlCLG1CQUFtQixnQkFBZ0IsaUJBQWlCLG9CQUFvQixrQkFBa0IseUJBQXlCLGtDQUFrQyxHQUFHLHdDQUF3Qyw0Q0FBNEMsdUJBQXVCLEdBQUcsOENBQThDLGtCQUFrQixtQkFBbUIsR0FBRyxnQ0FBZ0Msb0NBQW9DLDJEQUEyRCwwQ0FBMEMsR0FBRyw4SkFBOEosbUdBQW1HLDRCQUE0QixpQ0FBaUMsa0NBQWtDLGlCQUFpQixrQkFBa0IsbUJBQW1CLDRCQUE0QixvQ0FBb0MseUJBQXlCLDBDQUEwQyx3QkFBd0Isd0NBQXdDLG9CQUFvQixHQUFHLHFGQUFxRix5RkFBeUYsNEJBQTRCLGdDQUFnQyxvQ0FBb0MsMENBQTBDLGtDQUFrQyxtQkFBbUIsNEJBQTRCLG1CQUFtQix3QkFBd0IsdUNBQXVDLG1CQUFtQixHQUFHLGdGQUFnRixnQ0FBZ0MscUJBQXFCLGlCQUFpQixrQkFBa0Isd0xBQXdMLEdBQUcsa0ZBQWtGLGdCQUFnQixLQUFLLHFEQUFxRCx1Q0FBdUMsd0JBQXdCLEdBQUcsdUNBQXVDLHFDQUFxQyx1QkFBdUIsK0JBQStCLHFCQUFxQix3QkFBd0IsR0FBRyxrREFBa0Qsa0NBQWtDLG1CQUFtQiw0QkFBNEIsMEJBQTBCLGdCQUFnQixvQkFBb0IsaUNBQWlDLHlDQUF5QyxHQUFHLHNEQUFzRCxtQ0FBbUMsdUJBQXVCLHVCQUF1QiwrQkFBK0IsR0FBRyw2REFBNkQsc0JBQXNCLEdBQUcsMERBQTBELGtCQUFrQixtQ0FBbUMsaUNBQWlDLHdCQUF3QixrQkFBa0Isa0JBQWtCLG1DQUFtQyx1QkFBdUIsd0JBQXdCLHdDQUF3QyxtQkFBbUIsR0FBRywwSEFBMEgsa0NBQWtDLEdBQUcsNkVBQTZFLHdCQUF3Qix5QkFBeUIsb0NBQW9DLHFGQUFxRix3Q0FBd0Msd0JBQXdCLHVCQUF1QixHQUFHLG1GQUFtRixrQkFBa0IscUJBQXFCLEdBQUcsbUZBQW1GLGtCQUFrQixHQUFHLG9DQUFvQyxtQkFBbUIsNEJBQTRCLHlCQUF5QixjQUFjLGlDQUFpQyx5QkFBeUIsbUJBQW1CLGtDQUFrQyx3QkFBd0IsZ0JBQWdCLGNBQWMsa0JBQWtCLEdBQUcsd0NBQXdDLGtCQUFrQixtQ0FBbUMsbUJBQW1CLDJCQUEyQixjQUFjLEdBQUcsb0RBQW9ELGtCQUFrQixrQkFBa0Isa0NBQWtDLEdBQUcsK0NBQStDLHVCQUF1QixrQkFBa0Isd0NBQXdDLDRCQUE0QixHQUFHLHFEQUFxRCwyQ0FBMkMscUJBQXFCLEtBQUssb0VBQW9FLG1CQUFtQixtR0FBbUcsNEJBQTRCLGlDQUFpQyxrQ0FBa0MsZUFBZSxHQUFHLHVDQUF1Qyx3QkFBd0Isd0JBQXdCLGtCQUFrQixHQUFHLCtEQUErRCxtQ0FBbUMsa0JBQWtCLHVCQUF1Qix1QkFBdUIsR0FBRyx1RUFBdUUsbUJBQW1CLGlCQUFpQixtQkFBbUIsK0JBQStCLDBDQUEwQyx5QkFBeUIsb0JBQW9CLEdBQUcsNEVBQTRFLDRCQUE0Qix5Q0FBeUMsNkJBQTZCLEdBQUcsNEZBQTRGLHNCQUFzQixtQkFBbUIsNEJBQTRCLDBCQUEwQixvQkFBb0IsR0FBRyxnR0FBZ0csa0JBQWtCLDRCQUE0Qix5Q0FBeUMsb0NBQW9DLHVCQUF1QixrQkFBa0Isd0JBQXdCLEdBQUcsZ0hBQWdILG1CQUFtQixxQkFBcUIsNkJBQTZCLDRCQUE0QixnQkFBZ0IsNEJBQTRCLEdBQUcsMkhBQTJILHdCQUF3QiwwQkFBMEIsbUJBQW1CLGVBQWUsR0FBRywySUFBMkksa0JBQWtCLG1CQUFtQix5QkFBeUIsNEJBQTRCLGtDQUFrQyxHQUFHLHVJQUF1SSx5QkFBeUIsNEJBQTRCLEdBQUcsOEZBQThGLG1DQUFtQyxrQkFBa0IsbUJBQW1CLG9DQUFvQyx1QkFBdUIsR0FBRyxvSEFBb0gsbUJBQW1CLDRCQUE0QixlQUFlLEdBQUcsaUdBQWlHLHNCQUFzQixtQkFBbUIsNEJBQTRCLGdCQUFnQixvQkFBb0IsR0FBRyxxR0FBcUcsb0NBQW9DLHVCQUF1QixrQkFBa0Isd0JBQXdCLG1CQUFtQiwyQkFBMkIseUNBQXlDLEdBQUcsZ0hBQWdILHFCQUFxQixtQkFBbUIsNEJBQTRCLG9CQUFvQiwyQkFBMkIseUNBQXlDLGVBQWUseUJBQXlCLDZCQUE2QixHQUFHLCtIQUErSCxtQkFBbUIsZUFBZSx3QkFBd0IsS0FBSywrSUFBK0ksa0JBQWtCLG1CQUFtQix3QkFBd0IsNEJBQTRCLGtDQUFrQyxTQUFTLDZEQUE2RCxtQ0FBbUMsa0JBQWtCLHNCQUFzQixxQkFBcUIsR0FBRyx3REFBd0Qsb0JBQW9CLG9DQUFvQyxlQUFlLG1CQUFtQixHQUFHLGtEQUFrRCxxQkFBcUIsbUJBQW1CLGlCQUFpQixrQkFBa0IsNkJBQTZCLGVBQWUsR0FBRyx1RUFBdUUscUJBQXFCLG1CQUFtQiw0QkFBNEIsd0JBQXdCLGVBQWUsR0FBRyxtR0FBbUcsa0NBQWtDLGtDQUFrQyx5QkFBeUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLGVBQWUsb0JBQW9CLEdBQUcsd0dBQXdHLG1DQUFtQyxxQkFBcUIsc0JBQXNCLGtCQUFrQixHQUFHLHVHQUF1RyxtQ0FBbUMsa0JBQWtCLHVCQUF1QixHQUFHLHVGQUF1RixpQ0FBaUMsdUJBQXVCLHdCQUF3QixxQkFBcUIsaUNBQWlDLHdCQUF3QixtQkFBbUIsNEJBQTRCLDZCQUE2Qix5QkFBeUIsY0FBYyxtQkFBbUIsR0FBRyxzR0FBc0csbUJBQW1CLDBCQUEwQix3QkFBd0IsZUFBZSxHQUFHLHNIQUFzSCxpQ0FBaUMsbUJBQW1CLGlCQUFpQixrQ0FBa0Msd0JBQXdCLEdBQUcsMkZBQTJGLGtDQUFrQyxrQ0FBa0MseUJBQXlCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixlQUFlLG9CQUFvQiw0QkFBNEIsR0FBRyxpR0FBaUcsbUNBQW1DLHVCQUF1QixrQkFBa0IsR0FBRyxrRUFBa0UsNkJBQTZCLGlCQUFpQixrQkFBa0IsaUJBQWlCLHdCQUF3QixHQUFHLGdEQUFnRCxtQkFBbUIseUJBQXlCLDZCQUE2QixHQUFHLHNDQUFzQyxtQkFBbUIsNEJBQTRCLHFDQUFxQyx5QkFBeUIsaUJBQWlCLG1CQUFtQixrQ0FBa0MseUNBQXlDLG1CQUFtQixHQUFHLCtEQUErRCxpQkFBaUIsd0JBQXdCLHlDQUF5QyxpQ0FBaUMsb0JBQW9CLDZCQUE2Qix5QkFBeUIsZ0JBQWdCLEdBQUcseUVBQXlFLHFDQUFxQyx3QkFBd0Isc0JBQXNCLHFCQUFxQixrQkFBa0IsNkJBQTZCLEdBQUcsbUVBQW1FLHdCQUF3QixtQ0FBbUMsdUJBQXVCLHlDQUF5QyxtQkFBbUIsR0FBRyxpR0FBaUcsb0NBQW9DLHdCQUF3QixzQkFBc0IscUJBQXFCLGtCQUFrQixHQUFHLDhEQUE4RCxxREFBcUQsK0NBQStDLEdBQUcscUJBQXFCLDhCQUE4QixxREFBcUQsb0NBQW9DLEdBQUcsb0NBQW9DLGdFQUFnRSxvQ0FBb0MsR0FBRywwQkFBMEIsOEJBQThCLGtEQUFrRCxvQ0FBb0MsR0FBRyw2QkFBNkIsc0RBQXNELG9DQUFvQyxHQUFHLDRCQUE0Qix5RUFBeUUsb0NBQW9DLEdBQUcsZ0NBQWdDLCtCQUErQix3REFBd0Qsb0NBQW9DLEdBQUcsbUVBQW1FLGdCQUFnQiw4QkFBOEIsT0FBTyxnQkFBZ0IscUNBQXFDLGdCQUFnQixzQ0FBc0Msa0JBQWtCLDhCQUE4QixPQUFPLEdBQUcsNEJBQTRCLGVBQWUsMkNBQTJDLE9BQU8sZ0JBQWdCLDhDQUE4QyxPQUFPLGlCQUFpQiw2Q0FBNkMsT0FBTyxHQUFHLDJDQUEyQyxlQUFlLDhDQUE4QyxPQUFPLGdCQUFnQiw4Q0FBOEMsT0FBTyxpQkFBaUIsd0NBQXdDLE9BQU8sR0FBRyw4Q0FBOEMsZUFBZSw4QkFBOEIsT0FBTyxnQkFBZ0IsZ0NBQWdDLG9CQUFvQixPQUFPLGlCQUFpQiw4QkFBOEIsb0JBQW9CLE9BQU8sR0FBRyxvQ0FBb0MsZUFBZSw4QkFBOEIscUJBQXFCLE9BQU8sZ0JBQWdCLGdDQUFnQyxPQUFPLGlCQUFpQiw4QkFBOEIscUJBQXFCLE9BQU8sR0FBRyx1Q0FBdUMsZUFBZSwyQ0FBMkMsT0FBTyxnQkFBZ0IsK0NBQStDLE9BQU8saUJBQWlCLDZDQUE2QyxPQUFPLEdBQUcsc0NBQXNDLGVBQWUsdUNBQXVDLE9BQU8sZ0JBQWdCLHNDQUFzQyxPQUFPLGdCQUFnQix1Q0FBdUMsT0FBTyxpQkFBaUIsbUNBQW1DLE9BQU8sR0FBRywwQ0FBMEMsZUFBZSxvQkFBb0IsNkJBQTZCLE9BQU8sZ0JBQWdCLHFCQUFxQiw2QkFBNkIsT0FBTyxnQkFBZ0IscUJBQXFCLDZCQUE2QixPQUFPLGlCQUFpQixvQkFBb0IsNkJBQTZCLE9BQU8sR0FBRyw4REFBOEQsK0JBQStCLDBCQUEwQixzQkFBc0IsbUNBQW1DLDJKQUEySiw4QkFBOEIsNFFBQTRRLDZRQUE2USx3UUFBd1EscVFBQXFRLEdBQUcsd0JBQXdCLGtDQUFrQywwQkFBMEIsc0JBQXNCLG1DQUFtQywwSkFBMEosOEJBQThCLDBRQUEwUSw2UUFBNlEsd1FBQXdRLHFRQUFxUSxHQUFHLG1CQUFtQjtBQUNubDBCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ2orQjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXVHO0FBQ3ZHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJaUQ7QUFDekUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLHVGQUFPLFVBQVUsdUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDLCtDQUErQyxhQUFhO0FBQzVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUM0Qzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzREFBYTtBQUNyQztBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzREFBYTtBQUNyQztBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQsaURBQWlEO0FBQ2pELFVBQVU7QUFDViw0REFBNEQ7QUFDNUQsK0NBQStDO0FBQy9DO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdExRO0FBQ2xDO0FBQ3VDO0FBQ0g7QUFDTjtBQUNKOztBQUUxQjtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsbURBQVM7QUFDN0Msc0NBQXNDLG1EQUFTOztBQUUvQztBQUNBLCtCQUErQixPQUFPO0FBQ3RDLHNDQUFzQyw4Q0FBSTtBQUMxQyx3Q0FBd0MsOENBQUk7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLGdEQUFNO0FBQ2pDLDZCQUE2QixrREFBUTs7QUFFckM7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvREFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFVO0FBQ3RCO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDhDQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QyxXQUFXO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLFlBQVksb0RBQVU7QUFDdEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsOENBQUk7QUFDcEMsbUNBQW1DLDhDQUFJO0FBQ3ZDLGdDQUFnQyw4Q0FBSTtBQUNwQyxrQ0FBa0MsOENBQUk7QUFDdEMsa0NBQWtDLDhDQUFJO0FBQ3RDOztBQUVBO0FBQ0EsNEJBQTRCLGtCQUFrQjtBQUM5QywwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7O0FDMUw3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsd0JBQXdCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0RBQWdELGdCQUFnQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw2Q0FBNkMsZ0JBQWdCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsVUFBVTtBQUNwQyw4QkFBOEIsVUFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzFCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMEI7QUFDVztBQUNLO0FBQ0s7QUFDUjtBQUNOOztBQUVqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLDRCQUE0QixzREFBUztBQUNyQyw4QkFBOEIsc0RBQVM7O0FBRXZDO0FBQ0EsbUJBQW1CLG1EQUFNO0FBQ3pCLHFCQUFxQixxREFBUTs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVU7QUFDZCxJQUFJLHVEQUFVO0FBQ2QsSUFBSSx1REFBVTtBQUNkLElBQUkseURBQWE7QUFDakIsSUFBSSx5REFBYTtBQUNqQjtBQUNBLFFBQVEsdURBQVU7QUFDbEIsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBYTtBQUNqQixJQUFJLHVEQUFVO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFhO0FBQ3JCLFFBQVEsdURBQVU7QUFDbEIsUUFBUSx1REFBVTtBQUNsQjtBQUNBLFlBQVksdURBQVU7QUFDdEIsU0FBUztBQUNUO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3NzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3NzL3N0eWxlcy5jc3M/OTlhMyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvY29tcHV0ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9kb20tY29udHJvbC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2dhbWUtY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi8uLi9mb250cy8xOTQyX3JlcG9ydC8xOTQyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vLi4vZm9udHMvdXJiYW5fanVuZ2xlL1VyYmFuSnVuZ2xlREVNTy5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLy4uL2ltYWdlcy9iYWNrZ3JvdW5kLTIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi8uLi9pbWFnZXMvYmFja2dyb3VuZC0xLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFsZXdheTp3Z2h0QDEwMDs0MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICcxOTQyLXJlcG9ydCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2UgXG57XG4gICAgZm9udC1mYW1pbHk6ICdVcmJhbiBqdW5nbGUnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG46cm9vdCB7XG4gICAgLS1jb2xvci1ibGFjazogIzIxMjUyOTtcbiAgICAtLWNvbG9yLXdoaXRlOiAjZWRmMmY0O1xuICAgIC0tZm9udC1tYWluOiAnMTk0Mi1yZXBvcnQnO1xuICAgIC0tZm9udC10aXRsZTogJ1VyYmFuIGp1bmdsZSc7XG4gICAgLS1mb250LW5vdGlmaWNhdGlvbnM6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgICAtLXBhZGRpbmc6IDEwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLS1ib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmNTU7XG4gICAgLS1jb2xvci1zZW1pLXRyYW5zcGFyZW50LWdyZXk6I2E0YjJkMGE3O1xuICAgIC0tYXZlcmFnZS12YWx1ZToxMHB4O1xufVxuXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVye1xuICAgIHBhZGRpbmc6MDtcbiAgICBtYXJnaW46MDtcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbn1cblxuLyogTm90aWZpY2F0aW9uIGJveC4gKi9cblxuZGl2Lm5vdGlmaWNhdGlvbnMtYm94XG57XG4gICAgZGlzcGxheTpub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdG9wOiA3NHB4O1xuICAgIGxlZnQ6IDY5cHg7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjIyO1xufVxuXG5kaXYubm90aWZpY2F0aW9ucy1ib3ggPiBwLm1lc3NhZ2VcbntcbiAgICBmb250LWZhbWlseTp2YXIoLS1mb250LW5vdGlmaWNhdGlvbnMpO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi8qIFNjcm9sbGJhci4gKi9cblxuOjotd2Via2l0LXNjcm9sbGJhclxue1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYlxue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXNlbWktdHJhbnNwYXJlbnQtZ3JleSk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXZlcmFnZS12YWx1ZSk7XG59XG5cbi8qIFNldCB0aGUgc2FtZSBzY3JlZW4gcHJvcGVydGllcyBmb3IgdGhlIGRpZmZlcmVudCBzY3JlZW5zLiAqL1xuXG5kaXYuaW50cm8tc2NyZWVuLFxuZGl2LnBsYWNlLXlvdXItc2hpcHMtc2NyZWVuLFxuZGl2LmdhbWUtc2NyZWVuLFxuZGl2Lndpbm5lci1zY3JlZW5cbntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzAwMDAwMDU1LCAjMDAwMDAwNTUpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcbiAgICB3aWR0aDogOTUlO1xuICAgIGhlaWdodDogOTAlO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIGJvcmRlcjo1cHggc29saWQgdmFyKC0tY29sb3Itd2hpdGUpO1xuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFkZGluZykgKiA1KTtcbiAgICBvdmVyZmxvdzphdXRvO1xufVxuXG4vKiBCdXR0b25zICovXG5cbmRpdi5wbGFjZS15b3VyLXNoaXBzLXNjcmVlbiBidXR0b24sXG5kaXYud2lubmVyLXNjcmVlbiBidXR0b25cbntcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZmZmZmYyMiwgI2ZmZmZmZjIyLCNmZmZmZmYyMiwgd2hpdGUsIHdoaXRlICApO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1haW4pO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYyMjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB0cmFuc2l0aW9uOmFsbCAzMDBtcyBlYXNlLWluLW91dDtcbiAgICBvdXRsaW5lOm5vbmU7XG59XG5cbmRpdi5wbGFjZS15b3VyLXNoaXBzLXNjcmVlbiBidXR0b246aG92ZXIsXG5kaXYud2lubmVyLXNjcmVlbiBidXR0b246aG92ZXJcbntcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0O1xuICAgIGN1cnNvcjpwb2ludGVyO1xuICAgIHNjYWxlOjEuMDM7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA3KSAwcHggMXB4IDFweCwgcmdiYSgwLCAwLCAwLCAwLjA3KSAwcHggMnB4IDJweCwgcmdiYSgwLCAwLCAwLCAwLjA3KSAwcHggNHB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjA3KSAwcHggOHB4IDhweCwgcmdiYSgwLCAwLCAwLCAwLjA3KSAwcHggMTZweCAxNnB4O1xufVxuXG5kaXYucGxhY2UteW91ci1zaGlwcy1zY3JlZW4gYnV0dG9uOmFjdGl2ZSxcbmRpdi53aW5uZXItc2NyZWVuIGJ1dHRvbjphY3RpdmVcbntcbiAgICBzY2FsZTowLjk7XG5cbn1cblxuLyogSU5UUk8gU0NSRUVOIFNFQ1RJT04gKi9cblxuZGl2LmludHJvLXNjcmVlblxue1xuICAgIGFuaW1hdGlvbjogYXBwZWFyIDFzIGVhc2UtaW4tb3V0O1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuXG5kaXYuaW50cm8tc2NyZWVuID4gaDEubWFpbi10aXRsZVxue1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlKTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGNvbG9yOnZhcigtLWNvbG9yLXdoaXRlKTtcbiAgICBmb250LXNpemU6N3JlbTtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuZGl2LmludHJvLXNjcmVlbiA+IGZvcm0uc3RhcnQtZ2FtZS1zZWN0aW9uIFxue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYxMTtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOnN0cmV0Y2g7XG4gICAgZ2FwOiAxNXB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmZmZmNTU7XG4gICAgYm9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtcbn1cblxuZGl2LmludHJvLXNjcmVlbiA+IGZvcm0uc3RhcnQtZ2FtZS1zZWN0aW9uID4gcCBcbntcbiAgICBmb250LWZhbWlseTp2YXIoLS1mb250LW1haW4pO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOjEuM3JlbTtcbiAgICBjb2xvcjp2YXIoLS1jb2xvci13aGl0ZSk7XG59XG5cbmRpdi5pbnRyby1zY3JlZW4gPiBmb3JtLnN0YXJ0LWdhbWUtc2VjdGlvbiA+IHAgPiBzcGFuIFxue1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuZGl2LmludHJvLXNjcmVlbiA+IGZvcm0uc3RhcnQtZ2FtZS1zZWN0aW9uID4gaW5wdXQgXG57XG4gICAgcGFkZGluZzo1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZmZmZmY1NTtcbiAgICBib3JkZXItcmFkaXVzOjVweDtcbiAgICBwYWRkaW5nOjVweDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LWZhbWlseTp2YXIoLS1mb250LW1haW4pO1xuICAgIGZvbnQtc2l6ZToxLjNyZW07XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xuICAgIG91dGxpbmU6bm9uZTtcbn1cblxuZGl2LmludHJvLXNjcmVlbiA+IGZvcm0uc3RhcnQtZ2FtZS1zZWN0aW9uID4gaW5wdXQ6aG92ZXIsXG5kaXYuaW50cm8tc2NyZWVuID4gZm9ybS5zdGFydC1nYW1lLXNlY3Rpb24gPiBpbnB1dDpmb2N1c1xue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYzMztcbn1cblxuZGl2LmludHJvLXNjcmVlbiA+IGZvcm0uc3RhcnQtZ2FtZS1zZWN0aW9uID4gYnV0dG9uLnN0YXJ0LWdhbWUtYnV0dG9uIFxue1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tYWluKTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTkpIDBweCAxMHB4IDIwcHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDZweCA2cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGZvbnQtc2l6ZToxLjVyZW07XG59XG5cbmRpdi5pbnRyby1zY3JlZW4gPiBmb3JtLnN0YXJ0LWdhbWUtc2VjdGlvbiA+IGJ1dHRvbi5zdGFydC1nYW1lLWJ1dHRvbjpob3ZlciBcbntcbiAgICBzY2FsZTogMS4wNTtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbn1cblxuZGl2LmludHJvLXNjcmVlbiA+IGZvcm0uc3RhcnQtZ2FtZS1zZWN0aW9uID4gYnV0dG9uLnN0YXJ0LWdhbWUtYnV0dG9uOmFjdGl2ZVxue1xuICAgIHNjYWxlOiAwLjk1O1xufVxuXG5kaXYuaW50cm8tc2NyZWVuID4gZGl2LmF1dGhvclxue1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIGdhcDo1cHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmZmZmNTU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMzM7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgbWFyZ2luOjEwcHg7XG59XG5cbmRpdi5pbnRyby1zY3JlZW4gPiBkaXYuYXV0aG9yID4gcFxue1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtZmFtaWx5OnZhcigtLWZvbnQtbWFpbik7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGFsaWduLWl0ZW1zOmZsZXgtZW5kO1xuICAgIGdhcDo1cHg7XG59XG5cbmRpdi5pbnRyby1zY3JlZW4gPiBkaXYuYXV0aG9yID4gZGl2LnNlcGFyYXRvclxue1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY0NDtcbn1cblxuZGl2LmludHJvLXNjcmVlbiA+IGRpdi5hdXRob3IgPiBzcGFuID4gYVxue1xuICAgIGZvbnQtc2l6ZToyLjVyZW07XG4gICAgY29sb3I6d2hpdGU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDQwMG1zIGVhc2UtaW4tb3V0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuZGl2LmludHJvLXNjcmVlbiA+IGRpdi5hdXRob3IgPiBzcGFuID4gYTpob3Zlclxue1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKSByb3RhdGUoMzYwZGVnKTtcbiAgICBjdXJzb3I6cG9pbnRlcjtcblxufVxuXG4vKiBQTEFDRSBZT1VSIFNISVBTIFNFQ1RJT04gKi9cblxuZGl2LnBsYWNlLXlvdXItc2hpcHMtc2NyZWVuXG57XG4gICAgZGlzcGxheTpub25lO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMDAwMDAwNTUsICMwMDAwMDA1NSksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICAgIGdhcDoxMHB4O1xufVxuXG5kaXYucGxhY2UteW91ci1zaGlwcy1zY3JlZW4gPiBoMVxue1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5kaXYucGxhY2UteW91ci1zaGlwcy1zY3JlZW4gPiBwLnBsYWNlLXNoaXBzLWluc3RydWN0aW9uc1xue1xuICAgIGZvbnQtZmFtaWx5OnZhcigtLWZvbnQtbWFpbik7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZm9udC1zaXplOjEuM3JlbTtcbiAgICBwYWRkaW5nOjVweCAyMHB4O1xufVxuXG5kaXYucGxhY2UteW91ci1zaGlwcy1zY3JlZW4gPiBkaXYuZ2FtZWJvYXJkLWFuZC1zaGlwcy1jb250YWluZXIgXG57XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBnYXA6dmFyKC0tcGFkZGluZyk7XG4gICAgb3ZlcmZsb3c6YXV0bztcbn1cblxuZGl2LnBsYWNlLXlvdXItc2hpcHMtc2NyZWVuID4gZGl2LmdhbWVib2FyZC1hbmQtc2hpcHMtY29udGFpbmVyID4gZGl2XG57XG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgcGFkZGluZzp2YXIoLS1wYWRkaW5nKTtcbn1cblxuZGl2LnBsYWNlLXlvdXItc2hpcHMtc2NyZWVuID4gZGl2LmdhbWVib2FyZC1hbmQtc2hpcHMtY29udGFpbmVyID4gZGl2LnNoaXBzLWNvbnRhaW5lclxue1xuICAgIGZsZXg6IDEgMCAzODBweDtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIGdhcDogdmFyKC0tcGFkZGluZyk7XG4gICAgb3ZlcmZsb3c6YXV0bztcbn1cblxuZGl2LnBsYWNlLXlvdXItc2hpcHMtc2NyZWVuID4gZGl2LmdhbWVib2FyZC1hbmQtc2hpcHMtY29udGFpbmVyID4gZGl2LnNoaXBzLWNvbnRhaW5lciAgaDFcbntcbiAgICBwYWRkaW5nOjVweDtcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tYWluKTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG5kaXYucGxhY2UteW91ci1zaGlwcy1zY3JlZW4gPiBkaXYuZ2FtZWJvYXJkLWFuZC1zaGlwcy1jb250YWluZXIgPiBkaXYuc2hpcHMtY29udGFpbmVyID4gZGl2LnNoaXBzLXNlY3Rpb25cbntcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3RhcnQ7XG4gICAgZ2FwOiAyNXB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbn1cblxuZGl2LnBsYWNlLXlvdXItc2hpcHMtc2NyZWVuID4gZGl2LmdhbWVib2FyZC1hbmQtc2hpcHMtY29udGFpbmVyID4gZGl2LnNoaXBzLWNvbnRhaW5lciA+IGRpdi5zaGlwcy1zZWN0aW9uID4gZGl2LnNoaXBcbntcbiAgICB3aWR0aDpmaXQtY29udGVudDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBnYXA6IDVweDtcbn1cblxuZGl2LnBsYWNlLXlvdXItc2hpcHMtc2NyZWVuID4gZGl2LmdhbWVib2FyZC1hbmQtc2hpcHMtY29udGFpbmVyID4gZGl2LnNoaXBzLWNvbnRhaW5lciA+IGRpdi5zaGlwcy1zZWN0aW9uID4gZGl2LnNoaXAgPiBkaXYuc2hpcC1jZWxsXG57XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjIyO1xufVxuXG5cbmRpdi5wbGFjZS15b3VyLXNoaXBzLXNjcmVlbiA+IGRpdi5nYW1lYm9hcmQtYW5kLXNoaXBzLWNvbnRhaW5lciA+IGRpdi5zaGlwcy1jb250YWluZXIgPiBkaXYuc2hpcHMtc2VjdGlvbiA+IGRpdi5zaGlwLnZlcnRpY2FsIFxue1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG59XG5cbmRpdi5wbGFjZS15b3VyLXNoaXBzLXNjcmVlbiA+IGRpdi5nYW1lYm9hcmQtYW5kLXNoaXBzLWNvbnRhaW5lciA+IGRpdi5zaGlwcy1jb250YWluZXIgcFxue1xuICAgIGZvbnQtZmFtaWx5OnZhcigtLWZvbnQtbWFpbik7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xuICAgIGZvbnQtc2l6ZToxLjFyZW07XG59XG5cbmRpdi5wbGFjZS15b3VyLXNoaXBzLXNjcmVlbiA+IGRpdi5nYW1lYm9hcmQtYW5kLXNoaXBzLWNvbnRhaW5lciA+IGRpdi5zaGlwcy1jb250YWluZXIgPiBkaXYuYnV0dG9ucy1jb250YWluZXJcbntcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIGdhcDoxMHB4O1xufVxuXG5kaXYucGxhY2UteW91ci1zaGlwcy1zY3JlZW4gPiBkaXYuZ2FtZWJvYXJkLWFuZC1zaGlwcy1jb250YWluZXIgPiBkaXYuZ2FtZWJvYXJkLWNvbnRhaW5lciBcbntcbiAgICBmbGV4OiA0IDAgNTYwcHg7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG4gICAgb3ZlcmZsb3c6YXV0bztcbn1cblxuZGl2LnBsYWNlLXlvdXItc2hpcHMtc2NyZWVuID4gZGl2LmdhbWVib2FyZC1hbmQtc2hpcHMtY29udGFpbmVyID4gZGl2LmdhbWVib2FyZC1jb250YWluZXIgPiBoMVxue1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1haW4pO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlcjp2YXIoLS1ib3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7XG59XG5cbmRpdi5wbGFjZS15b3VyLXNoaXBzLXNjcmVlbiA+IGRpdi5nYW1lYm9hcmQtYW5kLXNoaXBzLWNvbnRhaW5lciA+IGRpdi5nYW1lYm9hcmQtY29udGFpbmVyID4gZGl2LmdhbWVib2FyZFxue1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6dmFyKC0tYm9yZGVyKTtcbiAgICBib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGdhcDogNXB4O1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xufVxuXG5kaXYucGxhY2UteW91ci1zaGlwcy1zY3JlZW4gPiBkaXYuZ2FtZWJvYXJkLWFuZC1zaGlwcy1jb250YWluZXIgPiBkaXYuZ2FtZWJvYXJkLWNvbnRhaW5lciA+IGRpdi5nYW1lYm9hcmQgPiBkaXYuZ3JpZC1yb3dcbntcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZ2FwOiA1cHg7XG4gICAgd2lkdGg6Zml0LWNvbnRlbnQ7XG5cbn1cblxuZGl2LnBsYWNlLXlvdXItc2hpcHMtc2NyZWVuID4gZGl2LmdhbWVib2FyZC1hbmQtc2hpcHMtY29udGFpbmVyID4gZGl2LmdhbWVib2FyZC1jb250YWluZXIgPiBkaXYuZ2FtZWJvYXJkID4gZGl2LmdyaWQtcm93ID4gZGl2LmdyaWQtY2VsbFxue1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBib3JkZXItcmFkaXVzOjNweDtcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjIyO1xuICAgIFxufVxuXG5kaXYucGxhY2UteW91ci1zaGlwcy1zY3JlZW4gPiBoMSwgZGl2LmdhbWUtc2NyZWVuID4gaDFcbntcbiAgICBmb250LWZhbWlseTp2YXIoLS1mb250LW1haW4pO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OjEwMDtcbiAgICBmb250LXNpemU6M3JlbTtcbn1cblxuLyogTUFJTiBHQU1FIFNDUkVFTiBTRUNUSU9OKi9cblxuZGl2LmdhbWUtc2NyZWVuIFxue1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG4gICAgZ2FwOjI1cHg7XG4gICAgcGFkZGluZzoyNXB4O1xufVxuXG5kaXYuZ2FtZS1zY3JlZW4gPiBkaXYuZ2FtZWJvYXJkcy1jb250YWluZXIgXG57XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIHdpZHRoOiA4NSU7XG4gICAgaGVpZ2h0OiA4NSU7XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICBnYXA6MTBweDtcbn1cblxuZGl2LmdhbWUtc2NyZWVuID4gZGl2LmdhbWVib2FyZHMtY29udGFpbmVyID4gZGl2LmJvYXJkLWNvbnRhaW5lclxue1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgZ2FwOjEwcHg7XG59XG5cbmRpdi5nYW1lLXNjcmVlbiA+IGRpdi5nYW1lYm9hcmRzLWNvbnRhaW5lciA+IGRpdi5ib2FyZC1jb250YWluZXIgPiBkaXYudGl0bGUtYW5kLWluc3RydWN0aW9uXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjIyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmYzMztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuZGl2LmdhbWUtc2NyZWVuID4gZGl2LmdhbWVib2FyZHMtY29udGFpbmVyID4gZGl2LmJvYXJkLWNvbnRhaW5lciA+IGRpdi50aXRsZS1hbmQtaW5zdHJ1Y3Rpb24gPiBoM1xue1xuICAgIGZvbnQtZmFtaWx5OnZhcigtLWZvbnQtbWFpbik7XG4gICAgZm9udC1zaXplOjJyZW07XG4gICAgZm9udC13ZWlnaHQ6MTAwO1xuICAgIGNvbG9yOndoaXRlO1xufVxuXG5kaXYuZ2FtZS1zY3JlZW4gPiBkaXYuZ2FtZWJvYXJkcy1jb250YWluZXIgPiBkaXYuYm9hcmQtY29udGFpbmVyID4gZGl2LnRpdGxlLWFuZC1pbnN0cnVjdGlvbiA+IHBcbntcbiAgICBmb250LWZhbWlseTp2YXIoLS1mb250LW1haW4pO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtc2l6ZToxLjJyZW07XG59XG5cbmRpdi5nYW1lLXNjcmVlbiA+IGRpdi5nYW1lYm9hcmRzLWNvbnRhaW5lciA+IGRpdi5ib2FyZC1jb250YWluZXIgPiBkaXYuZ2FtZWJvYXJkXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMjI7XG4gICAgbWluLXdpZHRoOiA1MDBweDtcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZmZmZmYzMztcbiAgICBib3JkZXItcmFkaXVzOjVweDtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIGdhcDo1cHg7XG4gICAgcGFkZGluZzoxMHB4O1xufVxuXG5kaXYuZ2FtZS1zY3JlZW4gPiBkaXYuZ2FtZWJvYXJkcy1jb250YWluZXIgPiBkaXYuYm9hcmQtY29udGFpbmVyID4gZGl2LmdhbWVib2FyZCA+IGRpdi5ncmlkLXJvd1xue1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIHdpZHRoOmZpdC1jb250ZW50O1xuICAgIGdhcDogNXB4O1xufVxuXG5kaXYuZ2FtZS1zY3JlZW4gPiBkaXYuZ2FtZWJvYXJkcy1jb250YWluZXIgPiBkaXYuYm9hcmQtY29udGFpbmVyID4gZGl2LmdhbWVib2FyZCA+IGRpdi5ncmlkLXJvdyA+IGRpdi5ncmlkLWNlbGxcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYyMjtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6NDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmNTU7XG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XG59XG5cbmRpdi5nYW1lLXNjcmVlbiA+IGRpdi5nYW1lYm9hcmRzLWNvbnRhaW5lciA+IGRpdi5ib2FyZC1jb250YWluZXIgPiB1bC5jb2xvcnMtbWVhbmluZ1xue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYyMjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmMzM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5kaXYuZ2FtZS1zY3JlZW4gPiBkaXYuZ2FtZWJvYXJkcy1jb250YWluZXIgPiBkaXYuYm9hcmQtY29udGFpbmVyID4gdWwuY29sb3JzLW1lYW5pbmcgPiBsaSBcbntcbiAgICBmb250LWZhbWlseTp2YXIoLS1mb250LW1haW4pO1xuICAgIGZvbnQtc2l6ZToxLjJyZW07XG4gICAgY29sb3I6d2hpdGU7XG59XG5cbmRpdi5nYW1lLXNjcmVlbiA+IGRpdi5nYW1lYm9hcmRzLWNvbnRhaW5lciA+IGRpdi5zZXBhcmF0b3IgXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICB3aWR0aDogMXB4O1xuICAgIGhlaWdodDoxMDAlO1xuICAgIG9wYWNpdHk6LjI7XG4gICAgYWxpZ24tc2VsZjpjZW50ZXI7XG59XG5cbi8qIFdpbm5lciBzY3JlZW4uICovXG5cbmRpdi53aW5uZXItc2NyZWVuXG57XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xufVxuXG5kaXYud2lubmVyLXNjcmVlbiA+IGRpdi5tZXNzYWdlXG57XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYyMjtcbiAgICBib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIHBhZGRpbmc6MjVweDtcbn1cblxuZGl2Lndpbm5lci1zY3JlZW4gPiBkaXYubWVzc2FnZSA+IGRpdi53aW5uZXIsXG5kaXYubG9zZXJcbntcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmc6NTBweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMzM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG59XG5cbmRpdi53aW5uZXItc2NyZWVuID4gZGl2Lm1lc3NhZ2UgPiBkaXYud2lubmVyID4gaDIsXG5kaXYubG9zZXIgPiBoMlxue1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlKTtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBmb250LXdlaWdodDoxMDA7XG4gICAgZm9udC1zaXplOjRyZW07XG4gICAgY29sb3I6d2hpdGU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDsgICBcbn1cblxuZGl2Lndpbm5lci1zY3JlZW4gPiBkaXYubWVzc2FnZSA+IGRpdi53aW5uZXIgPiBwLnBsYXllci1uYW1lXG57XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6dmFyKC0tZm9udC1tYWluKTtcbiAgICBmb250LXNpemU6MS40cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgcGFkZGluZzoxMHB4O1xufVxuXG5kaXYud2lubmVyLXNjcmVlbiA+IGRpdi5tZXNzYWdlID4gZGl2Lndpbm5lciA+IHA6bGFzdC1vZi10eXBlLFxuZGl2Lmxvc2VyID4gcDpsYXN0LW9mLXR5cGVcbntcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tYWluKTtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBmb250LXdlaWdodDoxMDA7XG4gICAgZm9udC1zaXplOjJyZW07XG4gICAgY29sb3I6d2hpdGU7XG59XG5cbi8qIENsYXNzZXMgdG8gY29udHJvbCBhbmltYXRpb25zLiAqL1xuXG4udmFuaXNoLXNjcmVlbiBcbntcbiAgICBhbmltYXRpb246IGRpc2FwcGVhciAxcyBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzICFpbXBvcnRhbnQ7XG59XG5cbi5hcHBlYXItc2NyZWVuXG57XG4gICAgZGlzcGxheTpmbGV4ICFpbXBvcnRhbnQ7XG4gICAgYW5pbWF0aW9uOmFwcGVhci1wbGFjZS1zaGlwcy1zY3JlZW4gMXMgZWFzZS1pbjtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLmRpc2FwcGVhci1wbGFjZS1zaGlwcy1zY3JlZW5cbntcbiAgICBhbmltYXRpb246IGRpc2FwcGVhci1wbGFjZS1zaGlwcy1zY3JlZW4gNzUwbXMgZWFzZS1pbi1vdXQ7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5hcHBlYXItZ2FtZS1zY3JlZW5cbntcbiAgICBkaXNwbGF5OmZsZXggIWltcG9ydGFudDtcbiAgICBhbmltYXRpb246IGFwcGVhci1nYW1lLXNjcmVlbiA3NTBtcyBlYXNlLWluO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG4uZGlzYXBwZWFyLWdhbWUtc2NyZWVuXG57XG4gICAgYW5pbWF0aW9uOiBkaXNhcHBlYXItZ2FtZS1zY3JlZW4gMXMgZWFzZS1pbi1vdXQ7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi5hcHBlYXItd2lubmVyLXNjcmVlblxue1xuICAgIGFuaW1hdGlvbjogYXBwZWFyLXdpbm5lci1zY3JlZW4gNzUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLmFwcGVhci1ub3RpZmljYXRpb25zLWJveFxue1xuICAgIGRpc3BsYXk6YmxvY2sgIWltcG9ydGFudDtcbiAgICBhbmltYXRpb246YXBwZWFyLW5vdGlmaWNhdGlvbnMtYm94IDRzIGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG5cbi8qIEtleWZyYW1lcyB0byBjb250cm9sIGFuaW1hdGlvbnMuICovXG5cbkBrZXlmcmFtZXMgYXBwZWFyIHtcbiAgICAwJSBcbiAgICB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7XG4gICAgfVxuICAgIDMzJVxuICAgIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguOSlcbiAgICB9XG4gICAgNjYlXG4gICAge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSlcbiAgICB9XG4gICAgMTAwJSBcbiAgICB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGRpc2FwcGVhciBcbntcbiAgICAwJVxuICAgIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMSk7XG4gICAgfVxuICAgIDMwJVxuICAgIHtcbiAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEuMik7XG4gICAgfVxuICAgIDEwMCVcbiAgICB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMCk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGFwcGVhci1wbGFjZS1zaGlwcy1zY3JlZW5cbntcbiAgICAwJVxuICAgIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoLTM2MGRlZyk7XG4gICAgfVxuICAgIDYwJVxuICAgIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpIHJvdGF0ZSg0NWRlZyk7XG4gICAgfVxuICAgIDEwMCVcbiAgICB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDApO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBkaXNhcHBlYXItcGxhY2Utc2hpcHMtc2NyZWVuXG57XG4gICAgMCVcbiAgICB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuICAgIDQwJVxuICAgIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICBvcGFjaXR5OjE7XG4gICAgfVxuICAgIDEwMCVcbiAgICB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIG9wYWNpdHk6MDtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgYXBwZWFyLWdhbWUtc2NyZWVuXG57XG4gICAgMCVcbiAgICB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDc1JVxuICAgIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIH1cbiAgICAxMDAlXG4gICAge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBkaXNhcHBlYXItZ2FtZS1zY3JlZW5cbntcbiAgICAwJVxuICAgIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMSk7XG4gICAgfVxuICAgIDMwJVxuICAgIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTI1ZGVnKSBzY2FsZSgxLjEpO1xuICAgIH1cbiAgICAxMDAlXG4gICAge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDApO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBhcHBlYXItd2lubmVyLXNjcmVlblxue1xuICAgIDAlXG4gICAge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEyMCUpO1xuICAgIH1cbiAgICA2MCVcbiAgICB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcbiAgICB9XG4gICAgODAlXG4gICAge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1cHgpO1xuICAgIH1cbiAgICAxMDAlXG4gICAge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGFwcGVhci1ub3RpZmljYXRpb25zLWJveFxue1xuICAgIDAlXG4gICAge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKTtcbiAgICB9XG4gICAgMjUlXG4gICAge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMSk7XG4gICAgfVxuICAgIDc1JVxuICAgIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEpO1xuICAgIH1cbiAgICAxMDAlXG4gICAge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKTtcbiAgICB9XG59XG5cblxuLyogQ2xhc3NlcyB0byBkZWNvcmF0ZSBidXR0b25zLiAqL1xuXG4ucGxhdGludW0tZWZmZWN0IHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43Mik7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDAgI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzpcbiAgICAycHggMnB4IDAuNWVtIHJnYmEoMTIyLCAxMjIsIDEyMiwgMC41NSksXG4gICAgaW5zZXQgMXB4IDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSxcbiAgICBpbnNldCAtMXB4IC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuNSlcbiAgO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWRlO1xuICBiYWNrZ3JvdW5kOlxuICAgIC1tb3otbGluZWFyLWdyYWRpZW50KFxuICAgIC03MmRlZyxcbiAgICAjZGVkZWZmLFxuICAgICNmZmZmZmYgMTYlLFxuICAgICNkZWRlZmYgMjElLFxuICAgICNmZmZmZmYgMjQlLFxuICAgICM1NTU1NjQgMjclLFxuICAgICNkZWRlZmYgMzYlLFxuICAgICNmZmZmZmYgNDUlLFxuICAgICNmZmZmZmYgNjAlLFxuICAgICNkZWRlZmYgNzIlLFxuICAgICNmZmZmZmYgODAlLFxuICAgICNkZWRlZmYgODQlLFxuICAgICM1NTU1NjRcbiAgKTtcbiAgYmFja2dyb3VuZDpcbiAgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXG4gICAgLTcyZGVnLFxuICAgICNkZWRlZmYsXG4gICAgI2ZmZmZmZiAxNiUsXG4gICAgI2RlZGVmZiAyMSUsXG4gICAgI2ZmZmZmZiAyNCUsXG4gICAgIzU1NTU2NCAyNyUsXG4gICAgI2RlZGVmZiAzNiUsXG4gICAgI2ZmZmZmZiA0NSUsXG4gICAgI2ZmZmZmZiA2MCUsXG4gICAgI2RlZGVmZiA3MiUsXG4gICAgI2ZmZmZmZiA4MCUsXG4gICAgI2RlZGVmZiA4NCUsXG4gICAgIzU1NTU2NFxuICApO1xuICBiYWNrZ3JvdW5kOlxuICAtby1saW5lYXItZ3JhZGllbnQoXG4gICAgLTcyZGVnLFxuICAgICNkZWRlZmYsXG4gICAgI2ZmZmZmZiAxNiUsXG4gICAgI2RlZGVmZiAyMSUsXG4gICAgI2ZmZmZmZiAyNCUsXG4gICAgIzU1NTU2NCAyNyUsXG4gICAgI2RlZGVmZiAzNiUsXG4gICAgI2ZmZmZmZiA0NSUsXG4gICAgI2ZmZmZmZiA2MCUsXG4gICAgI2RlZGVmZiA3MiUsXG4gICAgI2ZmZmZmZiA4MCUsXG4gICAgI2RlZGVmZiA4NCUsXG4gICAgIzU1NTU2NFxuICApO1xuICBiYWNrZ3JvdW5kOlxuICBsaW5lYXItZ3JhZGllbnQoXG4gICAgLTcyZGVnLFxuICAgICNkZWRlZmYsXG4gICAgI2ZmZmZmZiAxNiUsXG4gICAgI2RlZGVmZiAyMSUsXG4gICAgI2ZmZmZmZiAyNCUsXG4gICAgIzU1NTU2NCAyNyUsXG4gICAgI2RlZGVmZiAzNiUsXG4gICAgI2ZmZmZmZiA0NSUsXG4gICAgI2ZmZmZmZiA2MCUsXG4gICAgI2RlZGVmZiA3MiUsXG4gICAgI2ZmZmZmZiA4MCUsXG4gICAgI2RlZGVmZiA4NCUsXG4gICAgIzU1NTU2NFxuICApO1xufVxuXG4uYnV0dG9uLXllbGxvd2dvbGQge1xuICBjb2xvcjogcmdiYSg3MywgNDUsIDIxLCAwLjcyKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMCAjZmZmZmZmO1xuICBib3gtc2hhZG93OlxuICAgIDJweCAycHggMC41ZW0gcmdiYSgxNTUsIDEyMiwgODksIDAuNTUpLFxuICAgIGluc2V0IDFweCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSksXG4gICAgaW5zZXQgLTFweCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpXG4gIDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlY2E0NTtcbiAgYmFja2dyb3VuZDpcbiAgLW1vei1saW5lYXItZ3JhZGllbnQoXG4gICAgLTcyZGVnLFxuICAgICNmZmMzNzMsXG4gICAgI2ZmZmZmZiAxNiUsXG4gICAgI2ZmYzM3MyAyMSUsXG4gICAgI2ZmZmZmZiAyNCUsXG4gICAgI2ExNzQzNCAyNyUsXG4gICAgI2ZmYzM3MyAzNiUsXG4gICAgI2ZmZmZmZiA0NSUsXG4gICAgI2ZmZmZmZiA2MCUsXG4gICAgI2ZmYzM3MyA3MiUsXG4gICAgI2ZmZmZmZiA4MCUsXG4gICAgI2ZmYzM3MyA4NCUsXG4gICAgI2ExNzQzNFxuICApO1xuICBiYWNrZ3JvdW5kOlxuICAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcbiAgICAtNzJkZWcsXG4gICAgI2ZmYzM3MyxcbiAgICAjZmZmZmZmIDE2JSxcbiAgICAjZmZjMzczIDIxJSxcbiAgICAjZmZmZmZmIDI0JSxcbiAgICAjYTE3NDM0IDI3JSxcbiAgICAjZmZjMzczIDM2JSxcbiAgICAjZmZmZmZmIDQ1JSxcbiAgICAjZmZmZmZmIDYwJSxcbiAgICAjZmZjMzczIDcyJSxcbiAgICAjZmZmZmZmIDgwJSxcbiAgICAjZmZjMzczIDg0JSxcbiAgICAjYTE3NDM0XG4gICk7XG4gIGJhY2tncm91bmQ6XG4gIC1vLWxpbmVhci1ncmFkaWVudChcbiAgICAtNzJkZWcsXG4gICAgI2ZmYzM3MyxcbiAgICAjZmZmZmZmIDE2JSxcbiAgICAjZmZjMzczIDIxJSxcbiAgICAjZmZmZmZmIDI0JSxcbiAgICAjYTE3NDM0IDI3JSxcbiAgICAjZmZjMzczIDM2JSxcbiAgICAjZmZmZmZmIDQ1JSxcbiAgICAjZmZmZmZmIDYwJSxcbiAgICAjZmZjMzczIDcyJSxcbiAgICAjZmZmZmZmIDgwJSxcbiAgICAjZmZjMzczIDg0JSxcbiAgICAjYTE3NDM0XG4gICk7XG4gIGJhY2tncm91bmQ6XG4gIGxpbmVhci1ncmFkaWVudChcbiAgICAtNzJkZWcsXG4gICAgI2ZmYzM3MyxcbiAgICAjZmZmZmZmIDE2JSxcbiAgICAjZmZjMzczIDIxJSxcbiAgICAjZmZmZmZmIDI0JSxcbiAgICAjYTE3NDM0IDI3JSxcbiAgICAjZmZjMzczIDM2JSxcbiAgICAjZmZmZmZmIDQ1JSxcbiAgICAjZmZmZmZmIDYwJSxcbiAgICAjZmZjMzczIDcyJSxcbiAgICAjZmZmZmZmIDgwJSxcbiAgICAjZmZjMzczIDg0JSxcbiAgICAjYTE3NDM0XG4gICk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSwwQkFBMEI7SUFDMUIsNENBQTJDO0FBQy9DOztBQUVBOztJQUVJLDJCQUEyQjtJQUMzQiw0Q0FBdUQ7QUFDM0Q7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsMkNBQTJDO0lBQzNDLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsNkJBQTZCO0lBQzdCLHVDQUF1QztJQUN2QyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsUUFBUTtJQUNSLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUEsc0JBQXNCOztBQUV0Qjs7SUFFSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQjs7QUFFQTs7SUFFSSxxQ0FBcUM7SUFDckMsZ0JBQWdCO0FBQ3BCOztBQUVBLGVBQWU7O0FBRWY7O0lBRUksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksNkJBQTZCO0lBQzdCLG9EQUFvRDtJQUNwRCxtQ0FBbUM7QUFDdkM7O0FBRUEsOERBQThEOztBQUU5RDs7Ozs7SUFLSSxnR0FBNEY7SUFDNUYscUJBQXFCO0lBQ3JCLDBC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RUFDRSwwQkFBMEI7RUFDMUIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUI7Ozs7RUFJQTtFQUNBLHlCQUF5QjtFQUN6Qjs7Ozs7Ozs7Ozs7Ozs7O0dBZUM7RUFDRDs7Ozs7Ozs7Ozs7Ozs7O0dBZUM7RUFDRDs7Ozs7Ozs7Ozs7Ozs7O0dBZUM7RUFDRDs7Ozs7Ozs7Ozs7Ozs7O0dBZUM7QUFDSDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5Qjs7OztFQUlBO0VBQ0EseUJBQXlCO0VBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7R0FlQztFQUNEOzs7Ozs7Ozs7Ozs7Ozs7R0FlQztFQUNEOzs7Ozs7Ozs7Ozs7Ozs7R0FlQztFQUNEOzs7Ozs7Ozs7Ozs7Ozs7R0FlQztBQUNIXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXk6d2dodEAxMDA7NDAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJzE5NDItcmVwb3J0JztcXG4gICAgc3JjOiB1cmwoJy4vLi4vZm9udHMvMTk0Ml9yZXBvcnQvMTk0Mi50dGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSBcXG57XFxuICAgIGZvbnQtZmFtaWx5OiAnVXJiYW4ganVuZ2xlJztcXG4gICAgc3JjOiB1cmwoJy4vLi4vZm9udHMvdXJiYW5fanVuZ2xlL1VyYmFuSnVuZ2xlREVNTy5vdGYnKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWNvbG9yLWJsYWNrOiAjMjEyNTI5O1xcbiAgICAtLWNvbG9yLXdoaXRlOiAjZWRmMmY0O1xcbiAgICAtLWZvbnQtbWFpbjogJzE5NDItcmVwb3J0JztcXG4gICAgLS1mb250LXRpdGxlOiAnVXJiYW4ganVuZ2xlJztcXG4gICAgLS1mb250LW5vdGlmaWNhdGlvbnM6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG4gICAgLS1wYWRkaW5nOiAxMHB4O1xcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLS1ib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmNTU7XFxuICAgIC0tY29sb3Itc2VtaS10cmFuc3BhcmVudC1ncmV5OiNhNGIyZDBhNztcXG4gICAgLS1hdmVyYWdlLXZhbHVlOjEwcHg7XFxufVxcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXJ7XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgbWFyZ2luOjA7XFxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxufVxcblxcbi8qIE5vdGlmaWNhdGlvbiBib3guICovXFxuXFxuZGl2Lm5vdGlmaWNhdGlvbnMtYm94XFxue1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0b3A6IDc0cHg7XFxuICAgIGxlZnQ6IDY5cHg7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYyMjtcXG59XFxuXFxuZGl2Lm5vdGlmaWNhdGlvbnMtYm94ID4gcC5tZXNzYWdlXFxue1xcbiAgICBmb250LWZhbWlseTp2YXIoLS1mb250LW5vdGlmaWNhdGlvbnMpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4vKiBTY3JvbGxiYXIuICovXFxuXFxuOjotd2Via2l0LXNjcm9sbGJhclxcbntcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYlxcbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXNlbWktdHJhbnNwYXJlbnQtZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWF2ZXJhZ2UtdmFsdWUpO1xcbn1cXG5cXG4vKiBTZXQgdGhlIHNhbWUgc2NyZWVuIHByb3BlcnRpZXMgZm9yIHRoZSBkaWZmZXJlbnQgc2NyZWVucy4gKi9cXG5cXG5kaXYuaW50cm8tc2NyZWVuLFxcbmRpdi5wbGFjZS15b3VyLXNoaXBzLXNjcmVlbixcXG5kaXYuZ2FtZS1zY3JlZW4sXFxuZGl2Lndpbm5lci1zY3JlZW5cXG57XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMDAwMDAwNTUsICMwMDAwMDA1NSksIHVybCgnLi8uLi9pbWFnZXMvYmFja2dyb3VuZC0yLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgYm9yZGVyOjVweCBzb2xpZCB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZGRpbmcpICogNSk7XFxuICAgIG92ZXJmbG93OmF1dG87XFxufVxcblxcbi8qIEJ1dHRvbnMgKi9cXG5cXG5kaXYucGxhY2UteW91ci1zaGlwcy1zY3JlZW4gYnV0dG9uLFxcbmRpdi53aW5uZXItc2NyZWVuIGJ1dHRvblxcbntcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmZmZmZmMjIsICNmZmZmZmYyMiwjZmZmZmZmMjIsIHdoaXRlLCB3aGl0ZSAgKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAzMDAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tYWluKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYyMjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHRyYW5zaXRpb246YWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICBvdXRsaW5lOm5vbmU7XFxufVxcblxcbmRpdi5wbGFjZS15b3VyLXNoaXBzLXNjcmVlbiBidXR0b246aG92ZXIsXFxuZGl2Lndpbm5lci1zY3JlZW4gYnV0dG9uOmhvdmVyXFxue1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0O1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgc2NhbGU6MS4wMztcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDFweCAxcHgsIHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDJweCAycHgsIHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDRweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDhweCA4cHgsIHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDE2cHggMTZweDtcXG59XFxuXFxuZGl2LnBsYWNlLXlvdXItc2hpcHMtc2NyZWVuIGJ1dHRvbjphY3RpdmUsXFxuZGl2Lndpbm5lci1zY3JlZW4gYnV0dG9uOmFjdGl2ZVxcbntcXG4gICAgc2NhbGU6MC45O1xcblxcbn1cXG5cXG4vKiBJTlRSTyBTQ1JFRU4gU0VDVElPTiAqL1xcblxcbmRpdi5pbnRyby1zY3JlZW5cXG57XFxuICAgIGFuaW1hdGlvbjogYXBwZWFyIDFzIGVhc2UtaW4tb3V0O1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG59XFxuXFxuZGl2LmludHJvLXNjcmVlbiA+IGgxLm1haW4tdGl0bGVcXG57XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgY29sb3I6dmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICBmb250LXNpemU6N3JlbTtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxufVxcblxcbmRpdi5pbnRyby1zY3JlZW4gPiBmb3JtLnN0YXJ0LWdhbWUtc2VjdGlvbiBcXG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYxMTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOnN0cmV0Y2g7XFxuICAgIGdhcDogMTVweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmZmZmNTU7XFxuICAgIGJvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbmRpdi5pbnRyby1zY3JlZW4gPiBmb3JtLnN0YXJ0LWdhbWUtc2VjdGlvbiA+IHAgXFxue1xcbiAgICBmb250LWZhbWlseTp2YXIoLS1mb250LW1haW4pO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LXNpemU6MS4zcmVtO1xcbiAgICBjb2xvcjp2YXIoLS1jb2xvci13aGl0ZSk7XFxufVxcblxcbmRpdi5pbnRyby1zY3JlZW4gPiBmb3JtLnN0YXJ0LWdhbWUtc2VjdGlvbiA+IHAgPiBzcGFuIFxcbntcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5kaXYuaW50cm8tc2NyZWVuID4gZm9ybS5zdGFydC1nYW1lLXNlY3Rpb24gPiBpbnB1dCBcXG57XFxuICAgIHBhZGRpbmc6NXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZmZmZmY1NTtcXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XFxuICAgIHBhZGRpbmc6NXB4O1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6dmFyKC0tZm9udC1tYWluKTtcXG4gICAgZm9udC1zaXplOjEuM3JlbTtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgb3V0bGluZTpub25lO1xcbn1cXG5cXG5kaXYuaW50cm8tc2NyZWVuID4gZm9ybS5zdGFydC1nYW1lLXNlY3Rpb24gPiBpbnB1dDpob3ZlcixcXG5kaXYuaW50cm8tc2NyZWVuID4gZm9ybS5zdGFydC1nYW1lLXNlY3Rpb24gPiBpbnB1dDpmb2N1c1xcbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjMzO1xcbn1cXG5cXG5kaXYuaW50cm8tc2NyZWVuID4gZm9ybS5zdGFydC1nYW1lLXNlY3Rpb24gPiBidXR0b24uc3RhcnQtZ2FtZS1idXR0b24gXFxue1xcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tYWluKTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE5KSAwcHggMTBweCAyMHB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCA2cHggNnB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgICBmb250LXNpemU6MS41cmVtO1xcbn1cXG5cXG5kaXYuaW50cm8tc2NyZWVuID4gZm9ybS5zdGFydC1nYW1lLXNlY3Rpb24gPiBidXR0b24uc3RhcnQtZ2FtZS1idXR0b246aG92ZXIgXFxue1xcbiAgICBzY2FsZTogMS4wNTtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbmRpdi5pbnRyby1zY3JlZW4gPiBmb3JtLnN0YXJ0LWdhbWUtc2VjdGlvbiA+IGJ1dHRvbi5zdGFydC1nYW1lLWJ1dHRvbjphY3RpdmVcXG57XFxuICAgIHNjYWxlOiAwLjk1O1xcbn1cXG5cXG5kaXYuaW50cm8tc2NyZWVuID4gZGl2LmF1dGhvclxcbntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgZ2FwOjVweDtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmZmZmNTU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzoxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMzM7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG1hcmdpbjoxMHB4O1xcbn1cXG5cXG5kaXYuaW50cm8tc2NyZWVuID4gZGl2LmF1dGhvciA+IHBcXG57XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBmb250LWZhbWlseTp2YXIoLS1mb250LW1haW4pO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOmZsZXgtZW5kO1xcbiAgICBnYXA6NXB4O1xcbn1cXG5cXG5kaXYuaW50cm8tc2NyZWVuID4gZGl2LmF1dGhvciA+IGRpdi5zZXBhcmF0b3JcXG57XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjQ0O1xcbn1cXG5cXG5kaXYuaW50cm8tc2NyZWVuID4gZGl2LmF1dGhvciA+IHNwYW4gPiBhXFxue1xcbiAgICBmb250LXNpemU6Mi41cmVtO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDQwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmRpdi5pbnRyby1zY3JlZW4gPiBkaXYuYXV0aG9yID4gc3BhbiA+IGE6aG92ZXJcXG57XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKSByb3RhdGUoMzYwZGVnKTtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxuXFxufVxcblxcbi8qIFBMQUNFIFlPVVIgU0hJUFMgU0VDVElPTiAqL1xcblxcbmRpdi5wbGFjZS15b3VyLXNoaXBzLXNjcmVlblxcbntcXG4gICAgZGlzcGxheTpub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzAwMDAwMDU1LCAjMDAwMDAwNTUpLCB1cmwoJy4vLi4vaW1hZ2VzL2JhY2tncm91bmQtMS5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xcbiAgICBnYXA6MTBweDtcXG59XFxuXFxuZGl2LnBsYWNlLXlvdXItc2hpcHMtc2NyZWVuID4gaDFcXG57XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmRpdi5wbGFjZS15b3VyLXNoaXBzLXNjcmVlbiA+IHAucGxhY2Utc2hpcHMtaW5zdHJ1Y3Rpb25zXFxue1xcbiAgICBmb250LWZhbWlseTp2YXIoLS1mb250LW1haW4pO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1zaXplOjEuM3JlbTtcXG4gICAgcGFkZGluZzo1cHggMjBweDtcXG59XFxuXFxuZGl2LnBsYWNlLXlvdXItc2hpcHMtc2NyZWVuID4gZGl2LmdhbWVib2FyZC1hbmQtc2hpcHMtY29udGFpbmVyIFxcbntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGdhcDp2YXIoLS1wYWRkaW5nKTtcXG4gICAgb3ZlcmZsb3c6YXV0bztcXG59XFxuXFxuZGl2LnBsYWNlLXlvdXItc2hpcHMtc2NyZWVuID4gZGl2LmdhbWVib2FyZC1hbmQtc2hpcHMtY29udGFpbmVyID4gZGl2XFxue1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICAgIGJvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIHBhZGRpbmc6dmFyKC0tcGFkZGluZyk7XFxufVxcblxcbmRpdi5wbGFjZS15b3VyLXNoaXBzLXNjcmVlbiA+IGRpdi5nYW1lYm9hcmQtYW5kLXNoaXBzLWNvbnRhaW5lciA+IGRpdi5zaGlwcy1jb250YWluZXJcXG57XFxuICAgIGZsZXg6IDEgMCAzODBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGdhcDogdmFyKC0tcGFkZGluZyk7XFxuICAgIG92ZXJmbG93OmF1dG87XFxufVxcblxcbmRpdi5wbGFjZS15b3VyLXNoaXBzLXNjcmVlbiA+IGRpdi5nYW1lYm9hcmQtYW5kLXNoaXBzLWNvbnRhaW5lciA+IGRpdi5zaGlwcy1jb250YWluZXIgIGgxXFxue1xcbiAgICBwYWRkaW5nOjVweDtcXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcbiAgICBib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tYWluKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG5cXG5kaXYucGxhY2UteW91ci1zaGlwcy1zY3JlZW4gPiBkaXYuZ2FtZWJvYXJkLWFuZC1zaGlwcy1jb250YWluZXIgPiBkaXYuc2hpcHMtY29udGFpbmVyID4gZGl2LnNoaXBzLXNlY3Rpb25cXG57XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDpzdGFydDtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxufVxcblxcbmRpdi5wbGFjZS15b3VyLXNoaXBzLXNjcmVlbiA+IGRpdi5nYW1lYm9hcmQtYW5kLXNoaXBzLWNvbnRhaW5lciA+IGRpdi5zaGlwcy1jb250YWluZXIgPiBkaXYuc2hpcHMtc2VjdGlvbiA+IGRpdi5zaGlwXFxue1xcbiAgICB3aWR0aDpmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuZGl2LnBsYWNlLXlvdXItc2hpcHMtc2NyZWVuID4gZGl2LmdhbWVib2FyZC1hbmQtc2hpcHMtY29udGFpbmVyID4gZGl2LnNoaXBzLWNvbnRhaW5lciA+IGRpdi5zaGlwcy1zZWN0aW9uID4gZGl2LnNoaXAgPiBkaXYuc2hpcC1jZWxsXFxue1xcbiAgICB3aWR0aDogNDVweDtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjIyO1xcbn1cXG5cXG5cXG5kaXYucGxhY2UteW91ci1zaGlwcy1zY3JlZW4gPiBkaXYuZ2FtZWJvYXJkLWFuZC1zaGlwcy1jb250YWluZXIgPiBkaXYuc2hpcHMtY29udGFpbmVyID4gZGl2LnNoaXBzLXNlY3Rpb24gPiBkaXYuc2hpcC52ZXJ0aWNhbCBcXG57XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbn1cXG5cXG5kaXYucGxhY2UteW91ci1zaGlwcy1zY3JlZW4gPiBkaXYuZ2FtZWJvYXJkLWFuZC1zaGlwcy1jb250YWluZXIgPiBkaXYuc2hpcHMtY29udGFpbmVyIHBcXG57XFxuICAgIGZvbnQtZmFtaWx5OnZhcigtLWZvbnQtbWFpbik7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcbiAgICBmb250LXNpemU6MS4xcmVtO1xcbn1cXG5cXG5kaXYucGxhY2UteW91ci1zaGlwcy1zY3JlZW4gPiBkaXYuZ2FtZWJvYXJkLWFuZC1zaGlwcy1jb250YWluZXIgPiBkaXYuc2hpcHMtY29udGFpbmVyID4gZGl2LmJ1dHRvbnMtY29udGFpbmVyXFxue1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgZ2FwOjEwcHg7XFxufVxcblxcbmRpdi5wbGFjZS15b3VyLXNoaXBzLXNjcmVlbiA+IGRpdi5nYW1lYm9hcmQtYW5kLXNoaXBzLWNvbnRhaW5lciA+IGRpdi5nYW1lYm9hcmQtY29udGFpbmVyIFxcbntcXG4gICAgZmxleDogNCAwIDU2MHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBvdmVyZmxvdzphdXRvO1xcbn1cXG5cXG5kaXYucGxhY2UteW91ci1zaGlwcy1zY3JlZW4gPiBkaXYuZ2FtZWJvYXJkLWFuZC1zaGlwcy1jb250YWluZXIgPiBkaXYuZ2FtZWJvYXJkLWNvbnRhaW5lciA+IGgxXFxue1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tYWluKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlcjp2YXIoLS1ib3JkZXIpO1xcbiAgICBib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG5kaXYucGxhY2UteW91ci1zaGlwcy1zY3JlZW4gPiBkaXYuZ2FtZWJvYXJkLWFuZC1zaGlwcy1jb250YWluZXIgPiBkaXYuZ2FtZWJvYXJkLWNvbnRhaW5lciA+IGRpdi5nYW1lYm9hcmRcXG57XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOnZhcigtLWJvcmRlcik7XFxuICAgIGJvcmRlci1yYWRpdXM6dmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGdhcDogNXB4O1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxufVxcblxcbmRpdi5wbGFjZS15b3VyLXNoaXBzLXNjcmVlbiA+IGRpdi5nYW1lYm9hcmQtYW5kLXNoaXBzLWNvbnRhaW5lciA+IGRpdi5nYW1lYm9hcmQtY29udGFpbmVyID4gZGl2LmdhbWVib2FyZCA+IGRpdi5ncmlkLXJvd1xcbntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgd2lkdGg6Zml0LWNvbnRlbnQ7XFxuXFxufVxcblxcbmRpdi5wbGFjZS15b3VyLXNoaXBzLXNjcmVlbiA+IGRpdi5nYW1lYm9hcmQtYW5kLXNoaXBzLWNvbnRhaW5lciA+IGRpdi5nYW1lYm9hcmQtY29udGFpbmVyID4gZGl2LmdhbWVib2FyZCA+IGRpdi5ncmlkLXJvdyA+IGRpdi5ncmlkLWNlbGxcXG57XFxuICAgIHdpZHRoOiA0NXB4O1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6M3B4O1xcbiAgICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYyMjtcXG4gICAgXFxufVxcblxcbmRpdi5wbGFjZS15b3VyLXNoaXBzLXNjcmVlbiA+IGgxLCBkaXYuZ2FtZS1zY3JlZW4gPiBoMVxcbntcXG4gICAgZm9udC1mYW1pbHk6dmFyKC0tZm9udC1tYWluKTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OjEwMDtcXG4gICAgZm9udC1zaXplOjNyZW07XFxufVxcblxcbi8qIE1BSU4gR0FNRSBTQ1JFRU4gU0VDVElPTiovXFxuXFxuZGl2LmdhbWUtc2NyZWVuIFxcbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxuICAgIGdhcDoyNXB4O1xcbiAgICBwYWRkaW5nOjI1cHg7XFxufVxcblxcbmRpdi5nYW1lLXNjcmVlbiA+IGRpdi5nYW1lYm9hcmRzLWNvbnRhaW5lciBcXG57XFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGhlaWdodDogODUlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgICBnYXA6MTBweDtcXG59XFxuXFxuZGl2LmdhbWUtc2NyZWVuID4gZGl2LmdhbWVib2FyZHMtY29udGFpbmVyID4gZGl2LmJvYXJkLWNvbnRhaW5lclxcbntcXG4gICAgZmxleDogMSAxIGF1dG87XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG4gICAgZ2FwOjEwcHg7XFxufVxcblxcbmRpdi5nYW1lLXNjcmVlbiA+IGRpdi5nYW1lYm9hcmRzLWNvbnRhaW5lciA+IGRpdi5ib2FyZC1jb250YWluZXIgPiBkaXYudGl0bGUtYW5kLWluc3RydWN0aW9uXFxue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMjI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmYzMztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbmRpdi5nYW1lLXNjcmVlbiA+IGRpdi5nYW1lYm9hcmRzLWNvbnRhaW5lciA+IGRpdi5ib2FyZC1jb250YWluZXIgPiBkaXYudGl0bGUtYW5kLWluc3RydWN0aW9uID4gaDNcXG57XFxuICAgIGZvbnQtZmFtaWx5OnZhcigtLWZvbnQtbWFpbik7XFxuICAgIGZvbnQtc2l6ZToycmVtO1xcbiAgICBmb250LXdlaWdodDoxMDA7XFxuICAgIGNvbG9yOndoaXRlO1xcbn1cXG5cXG5kaXYuZ2FtZS1zY3JlZW4gPiBkaXYuZ2FtZWJvYXJkcy1jb250YWluZXIgPiBkaXYuYm9hcmQtY29udGFpbmVyID4gZGl2LnRpdGxlLWFuZC1pbnN0cnVjdGlvbiA+IHBcXG57XFxuICAgIGZvbnQtZmFtaWx5OnZhcigtLWZvbnQtbWFpbik7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBmb250LXNpemU6MS4ycmVtO1xcbn1cXG5cXG5kaXYuZ2FtZS1zY3JlZW4gPiBkaXYuZ2FtZWJvYXJkcy1jb250YWluZXIgPiBkaXYuYm9hcmQtY29udGFpbmVyID4gZGl2LmdhbWVib2FyZFxcbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMjI7XFxuICAgIG1pbi13aWR0aDogNTAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgICBmbGV4OiAxIDEgYXV0bztcXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmZmZmMzM7XFxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBnYXA6NXB4O1xcbiAgICBwYWRkaW5nOjEwcHg7XFxufVxcblxcbmRpdi5nYW1lLXNjcmVlbiA+IGRpdi5nYW1lYm9hcmRzLWNvbnRhaW5lciA+IGRpdi5ib2FyZC1jb250YWluZXIgPiBkaXYuZ2FtZWJvYXJkID4gZGl2LmdyaWQtcm93XFxue1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuZGl2LmdhbWUtc2NyZWVuID4gZGl2LmdhbWVib2FyZHMtY29udGFpbmVyID4gZGl2LmJvYXJkLWNvbnRhaW5lciA+IGRpdi5nYW1lYm9hcmQgPiBkaXYuZ3JpZC1yb3cgPiBkaXYuZ3JpZC1jZWxsXFxue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYyMjtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICB3aWR0aDo0NXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmNTU7XFxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xcbn1cXG5cXG5kaXYuZ2FtZS1zY3JlZW4gPiBkaXYuZ2FtZWJvYXJkcy1jb250YWluZXIgPiBkaXYuYm9hcmQtY29udGFpbmVyID4gdWwuY29sb3JzLW1lYW5pbmdcXG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYyMjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjMzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5kaXYuZ2FtZS1zY3JlZW4gPiBkaXYuZ2FtZWJvYXJkcy1jb250YWluZXIgPiBkaXYuYm9hcmQtY29udGFpbmVyID4gdWwuY29sb3JzLW1lYW5pbmcgPiBsaSBcXG57XFxuICAgIGZvbnQtZmFtaWx5OnZhcigtLWZvbnQtbWFpbik7XFxuICAgIGZvbnQtc2l6ZToxLjJyZW07XFxuICAgIGNvbG9yOndoaXRlO1xcbn1cXG5cXG5kaXYuZ2FtZS1zY3JlZW4gPiBkaXYuZ2FtZWJvYXJkcy1jb250YWluZXIgPiBkaXYuc2VwYXJhdG9yIFxcbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXG4gICAgd2lkdGg6IDFweDtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIG9wYWNpdHk6LjI7XFxuICAgIGFsaWduLXNlbGY6Y2VudGVyO1xcbn1cXG5cXG4vKiBXaW5uZXIgc2NyZWVuLiAqL1xcblxcbmRpdi53aW5uZXItc2NyZWVuXFxue1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG59XFxuXFxuZGl2Lndpbm5lci1zY3JlZW4gPiBkaXYubWVzc2FnZVxcbntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYyMjtcXG4gICAgYm9yZGVyLXJhZGl1czp2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgcGFkZGluZzoyNXB4O1xcbn1cXG5cXG5kaXYud2lubmVyLXNjcmVlbiA+IGRpdi5tZXNzYWdlID4gZGl2Lndpbm5lcixcXG5kaXYubG9zZXJcXG57XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIHBhZGRpbmc6NTBweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYzMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbmRpdi53aW5uZXItc2NyZWVuID4gZGl2Lm1lc3NhZ2UgPiBkaXYud2lubmVyID4gaDIsXFxuZGl2Lmxvc2VyID4gaDJcXG57XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXRpdGxlKTtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OjEwMDtcXG4gICAgZm9udC1zaXplOjRyZW07XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4OyAgIFxcbn1cXG5cXG5kaXYud2lubmVyLXNjcmVlbiA+IGRpdi5tZXNzYWdlID4gZGl2Lndpbm5lciA+IHAucGxheWVyLW5hbWVcXG57XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgICBmb250LWZhbWlseTp2YXIoLS1mb250LW1haW4pO1xcbiAgICBmb250LXNpemU6MS40cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOnZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBwYWRkaW5nOjEwcHg7XFxufVxcblxcbmRpdi53aW5uZXItc2NyZWVuID4gZGl2Lm1lc3NhZ2UgPiBkaXYud2lubmVyID4gcDpsYXN0LW9mLXR5cGUsXFxuZGl2Lmxvc2VyID4gcDpsYXN0LW9mLXR5cGVcXG57XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1haW4pO1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6MTAwO1xcbiAgICBmb250LXNpemU6MnJlbTtcXG4gICAgY29sb3I6d2hpdGU7XFxufVxcblxcbi8qIENsYXNzZXMgdG8gY29udHJvbCBhbmltYXRpb25zLiAqL1xcblxcbi52YW5pc2gtc2NyZWVuIFxcbntcXG4gICAgYW5pbWF0aW9uOiBkaXNhcHBlYXIgMXMgZWFzZS1pbi1vdXQgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHMgIWltcG9ydGFudDtcXG59XFxuXFxuLmFwcGVhci1zY3JlZW5cXG57XFxuICAgIGRpc3BsYXk6ZmxleCAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb246YXBwZWFyLXBsYWNlLXNoaXBzLXNjcmVlbiAxcyBlYXNlLWluO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuLmRpc2FwcGVhci1wbGFjZS1zaGlwcy1zY3JlZW5cXG57XFxuICAgIGFuaW1hdGlvbjogZGlzYXBwZWFyLXBsYWNlLXNoaXBzLXNjcmVlbiA3NTBtcyBlYXNlLWluLW91dDtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbi5hcHBlYXItZ2FtZS1zY3JlZW5cXG57XFxuICAgIGRpc3BsYXk6ZmxleCAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb246IGFwcGVhci1nYW1lLXNjcmVlbiA3NTBtcyBlYXNlLWluO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuLmRpc2FwcGVhci1nYW1lLXNjcmVlblxcbntcXG4gICAgYW5pbWF0aW9uOiBkaXNhcHBlYXItZ2FtZS1zY3JlZW4gMXMgZWFzZS1pbi1vdXQ7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4uYXBwZWFyLXdpbm5lci1zY3JlZW5cXG57XFxuICAgIGFuaW1hdGlvbjogYXBwZWFyLXdpbm5lci1zY3JlZW4gNzUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbi5hcHBlYXItbm90aWZpY2F0aW9ucy1ib3hcXG57XFxuICAgIGRpc3BsYXk6YmxvY2sgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uOmFwcGVhci1ub3RpZmljYXRpb25zLWJveCA0cyBlYXNlLWluLW91dDtcXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcblxcbi8qIEtleWZyYW1lcyB0byBjb250cm9sIGFuaW1hdGlvbnMuICovXFxuXFxuQGtleWZyYW1lcyBhcHBlYXIge1xcbiAgICAwJSBcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgzKTtcXG4gICAgfVxcbiAgICAzMyVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguOSlcXG4gICAgfVxcbiAgICA2NiVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpXFxuICAgIH1cXG4gICAgMTAwJSBcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGRpc2FwcGVhciBcXG57XFxuICAgIDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDEpO1xcbiAgICB9XFxuICAgIDMwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKC00NWRlZykgc2NhbGUoMS4yKTtcXG4gICAgfVxcbiAgICAxMDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMCk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBhcHBlYXItcGxhY2Utc2hpcHMtc2NyZWVuXFxue1xcbiAgICAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSgtMzYwZGVnKTtcXG4gICAgfVxcbiAgICA2MCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpIHJvdGF0ZSg0NWRlZyk7XFxuICAgIH1cXG4gICAgMTAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGRpc2FwcGVhci1wbGFjZS1zaGlwcy1zY3JlZW5cXG57XFxuICAgIDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIH1cXG4gICAgNDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgICAgIG9wYWNpdHk6MTtcXG4gICAgfVxcbiAgICAxMDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICBvcGFjaXR5OjA7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBhcHBlYXItZ2FtZS1zY3JlZW5cXG57XFxuICAgIDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIDc1JVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIH1cXG4gICAgMTAwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGRpc2FwcGVhci1nYW1lLXNjcmVlblxcbntcXG4gICAgMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMSk7XFxuICAgIH1cXG4gICAgMzAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yNWRlZykgc2NhbGUoMS4xKTtcXG4gICAgfVxcbiAgICAxMDAlXFxuICAgIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMCk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBhcHBlYXItd2lubmVyLXNjcmVlblxcbntcXG4gICAgMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMjAlKTtcXG4gICAgfVxcbiAgICA2MCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xcbiAgICB9XFxuICAgIDgwJVxcbiAgICB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1cHgpO1xcbiAgICB9XFxuICAgIDEwMCVcXG4gICAge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYXBwZWFyLW5vdGlmaWNhdGlvbnMtYm94XFxue1xcbiAgICAwJVxcbiAgICB7XFxuICAgICAgICBvcGFjaXR5OjA7XFxuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMCk7XFxuICAgIH1cXG4gICAgMjUlXFxuICAgIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMSk7XFxuICAgIH1cXG4gICAgNzUlXFxuICAgIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMSk7XFxuICAgIH1cXG4gICAgMTAwJVxcbiAgICB7XFxuICAgICAgICBvcGFjaXR5OjA7XFxuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMCk7XFxuICAgIH1cXG59XFxuXFxuXFxuLyogQ2xhc3NlcyB0byBkZWNvcmF0ZSBidXR0b25zLiAqL1xcblxcbi5wbGF0aW51bS1lZmZlY3Qge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43Mik7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDAgI2ZmZmZmZjtcXG4gIGJveC1zaGFkb3c6XFxuICAgIDJweCAycHggMC41ZW0gcmdiYSgxMjIsIDEyMiwgMTIyLCAwLjU1KSxcXG4gICAgaW5zZXQgMXB4IDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSxcXG4gICAgaW5zZXQgLTFweCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpXFxuICA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWRlO1xcbiAgYmFja2dyb3VuZDpcXG4gICAgLW1vei1saW5lYXItZ3JhZGllbnQoXFxuICAgIC03MmRlZyxcXG4gICAgI2RlZGVmZixcXG4gICAgI2ZmZmZmZiAxNiUsXFxuICAgICNkZWRlZmYgMjElLFxcbiAgICAjZmZmZmZmIDI0JSxcXG4gICAgIzU1NTU2NCAyNyUsXFxuICAgICNkZWRlZmYgMzYlLFxcbiAgICAjZmZmZmZmIDQ1JSxcXG4gICAgI2ZmZmZmZiA2MCUsXFxuICAgICNkZWRlZmYgNzIlLFxcbiAgICAjZmZmZmZmIDgwJSxcXG4gICAgI2RlZGVmZiA4NCUsXFxuICAgICM1NTU1NjRcXG4gICk7XFxuICBiYWNrZ3JvdW5kOlxcbiAgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXFxuICAgIC03MmRlZyxcXG4gICAgI2RlZGVmZixcXG4gICAgI2ZmZmZmZiAxNiUsXFxuICAgICNkZWRlZmYgMjElLFxcbiAgICAjZmZmZmZmIDI0JSxcXG4gICAgIzU1NTU2NCAyNyUsXFxuICAgICNkZWRlZmYgMzYlLFxcbiAgICAjZmZmZmZmIDQ1JSxcXG4gICAgI2ZmZmZmZiA2MCUsXFxuICAgICNkZWRlZmYgNzIlLFxcbiAgICAjZmZmZmZmIDgwJSxcXG4gICAgI2RlZGVmZiA4NCUsXFxuICAgICM1NTU1NjRcXG4gICk7XFxuICBiYWNrZ3JvdW5kOlxcbiAgLW8tbGluZWFyLWdyYWRpZW50KFxcbiAgICAtNzJkZWcsXFxuICAgICNkZWRlZmYsXFxuICAgICNmZmZmZmYgMTYlLFxcbiAgICAjZGVkZWZmIDIxJSxcXG4gICAgI2ZmZmZmZiAyNCUsXFxuICAgICM1NTU1NjQgMjclLFxcbiAgICAjZGVkZWZmIDM2JSxcXG4gICAgI2ZmZmZmZiA0NSUsXFxuICAgICNmZmZmZmYgNjAlLFxcbiAgICAjZGVkZWZmIDcyJSxcXG4gICAgI2ZmZmZmZiA4MCUsXFxuICAgICNkZWRlZmYgODQlLFxcbiAgICAjNTU1NTY0XFxuICApO1xcbiAgYmFja2dyb3VuZDpcXG4gIGxpbmVhci1ncmFkaWVudChcXG4gICAgLTcyZGVnLFxcbiAgICAjZGVkZWZmLFxcbiAgICAjZmZmZmZmIDE2JSxcXG4gICAgI2RlZGVmZiAyMSUsXFxuICAgICNmZmZmZmYgMjQlLFxcbiAgICAjNTU1NTY0IDI3JSxcXG4gICAgI2RlZGVmZiAzNiUsXFxuICAgICNmZmZmZmYgNDUlLFxcbiAgICAjZmZmZmZmIDYwJSxcXG4gICAgI2RlZGVmZiA3MiUsXFxuICAgICNmZmZmZmYgODAlLFxcbiAgICAjZGVkZWZmIDg0JSxcXG4gICAgIzU1NTU2NFxcbiAgKTtcXG59XFxuXFxuLmJ1dHRvbi15ZWxsb3dnb2xkIHtcXG4gIGNvbG9yOiByZ2JhKDczLCA0NSwgMjEsIDAuNzIpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwICNmZmZmZmY7XFxuICBib3gtc2hhZG93OlxcbiAgICAycHggMnB4IDAuNWVtIHJnYmEoMTU1LCAxMjIsIDg5LCAwLjU1KSxcXG4gICAgaW5zZXQgMXB4IDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSxcXG4gICAgaW5zZXQgLTFweCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpXFxuICA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVjYTQ1O1xcbiAgYmFja2dyb3VuZDpcXG4gIC1tb3otbGluZWFyLWdyYWRpZW50KFxcbiAgICAtNzJkZWcsXFxuICAgICNmZmMzNzMsXFxuICAgICNmZmZmZmYgMTYlLFxcbiAgICAjZmZjMzczIDIxJSxcXG4gICAgI2ZmZmZmZiAyNCUsXFxuICAgICNhMTc0MzQgMjclLFxcbiAgICAjZmZjMzczIDM2JSxcXG4gICAgI2ZmZmZmZiA0NSUsXFxuICAgICNmZmZmZmYgNjAlLFxcbiAgICAjZmZjMzczIDcyJSxcXG4gICAgI2ZmZmZmZiA4MCUsXFxuICAgICNmZmMzNzMgODQlLFxcbiAgICAjYTE3NDM0XFxuICApO1xcbiAgYmFja2dyb3VuZDpcXG4gIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxcbiAgICAtNzJkZWcsXFxuICAgICNmZmMzNzMsXFxuICAgICNmZmZmZmYgMTYlLFxcbiAgICAjZmZjMzczIDIxJSxcXG4gICAgI2ZmZmZmZiAyNCUsXFxuICAgICNhMTc0MzQgMjclLFxcbiAgICAjZmZjMzczIDM2JSxcXG4gICAgI2ZmZmZmZiA0NSUsXFxuICAgICNmZmZmZmYgNjAlLFxcbiAgICAjZmZjMzczIDcyJSxcXG4gICAgI2ZmZmZmZiA4MCUsXFxuICAgICNmZmMzNzMgODQlLFxcbiAgICAjYTE3NDM0XFxuICApO1xcbiAgYmFja2dyb3VuZDpcXG4gIC1vLWxpbmVhci1ncmFkaWVudChcXG4gICAgLTcyZGVnLFxcbiAgICAjZmZjMzczLFxcbiAgICAjZmZmZmZmIDE2JSxcXG4gICAgI2ZmYzM3MyAyMSUsXFxuICAgICNmZmZmZmYgMjQlLFxcbiAgICAjYTE3NDM0IDI3JSxcXG4gICAgI2ZmYzM3MyAzNiUsXFxuICAgICNmZmZmZmYgNDUlLFxcbiAgICAjZmZmZmZmIDYwJSxcXG4gICAgI2ZmYzM3MyA3MiUsXFxuICAgICNmZmZmZmYgODAlLFxcbiAgICAjZmZjMzczIDg0JSxcXG4gICAgI2ExNzQzNFxcbiAgKTtcXG4gIGJhY2tncm91bmQ6XFxuICBsaW5lYXItZ3JhZGllbnQoXFxuICAgIC03MmRlZyxcXG4gICAgI2ZmYzM3MyxcXG4gICAgI2ZmZmZmZiAxNiUsXFxuICAgICNmZmMzNzMgMjElLFxcbiAgICAjZmZmZmZmIDI0JSxcXG4gICAgI2ExNzQzNCAyNyUsXFxuICAgICNmZmMzNzMgMzYlLFxcbiAgICAjZmZmZmZmIDQ1JSxcXG4gICAgI2ZmZmZmZiA2MCUsXFxuICAgICNmZmMzNzMgNzIlLFxcbiAgICAjZmZmZmZmIDgwJSxcXG4gICAgI2ZmYzM3MyA4NCUsXFxuICAgICNhMTc0MzRcXG4gICk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBDb21wdXRlciB7XG4gICAgY29uc3RydWN0b3IocGxheWVyR2FtZWJvYXJkKSB7XG4gICAgICAgIHRoaXMuZW5lbXlHYW1lYm9hcmQgPSBwbGF5ZXJHYW1lYm9hcmQ7XG4gICAgICAgIC8vIFNhdmUgdGhlIGNvb3JkaW5hdGVzIG9mIGVhY2ggYXR0YWNrIHRoYXQgaGFzIGJlZW4gYWxyZWFkeSBsYXVuY2hlZC5cbiAgICAgICAgdGhpcy5jb29yZGluYXRlc0FscmVhZHlVc2VkID0gW107XG4gICAgfVxuXG4gICAgLy8gVGFrZSB0dXJuIGFuZCB0aHJvdyBhdHRhY2sgdG8gdGhlIHBsYXllcidzIGdhbWVib2FyZCBieSBwYXNzaW5nIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgYXR0YWNrXG4gICAgdGFrZVR1cm4oKSB7XG4gICAgICAgIC8vIENyZWF0ZSByYW5kb20gY29vcmRpbmF0ZXMgYmV0d2VlbiAwIGFuZCA5LlxuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IHtcbiAgICAgICAgICAgIHJvdzogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgICAgICAgY29sdW1uOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgcmFuZG9tbHkgZ2VuZXJhdGVkIGNvb3JkaW5hdGVzIGFyZSBhbHJlYWR5IGluIGFycmF5LlxuICAgICAgICBjb25zdCBpc0F0dGFja1ByZXNlbnQgPSB0aGlzLmNvb3JkaW5hdGVzQWxyZWFkeVVzZWQuc29tZSgob2JqKSA9PiBvYmoucm93XG4gICAgICAgID09PSBjb29yZGluYXRlcy5yb3cgJiYgb2JqLmNvbHVtbiA9PT0gY29vcmRpbmF0ZXMuY29sdW1uKTtcblxuICAgICAgICAvLyBJZiBhbGwgdGhlIHBvc3NpYmxlIG1vdmVzIHdlcmUgYWxyZWFkeSBtYWRlIGJ5IHRoZSBjb21wdXRlci5cbiAgICAgICAgaWYgKGlzQXR0YWNrUHJlc2VudCAmJiB0aGlzLmNvb3JkaW5hdGVzQWxyZWFkeVVzZWQubGVuZ3RoID09PSAxMDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgYXJlblxcJ3QgbW9yZSBwb3NzaWJsZSBtb3Zlcy4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSBjb29yZGluYXRlcyBhcmUgYWxyZWFkeSBwcmVzZW50IGluIHRoZSBhcnJheSwgY2FsbCB0aGUgbWV0aG9kIHJlY3Vyc2l2ZWx5LlxuICAgICAgICBpZiAoaXNBdHRhY2tQcmVzZW50KSB7XG4gICAgICAgICAgICB0aGlzLnRha2VUdXJuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBEZXN0cnVjdHVyZSB0aGUgY29vcmRpbmF0ZXMgb2JqZWN0IGludG8gc2VwYXJhdGUgdmFyaWFibGVzIHRvIGxhdW5jaCBhdHRhY2suXG4gICAgICAgICAgICBjb25zdCB7IHJvdywgY29sdW1uIH0gPSBjb29yZGluYXRlcztcbiAgICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXNBbHJlYWR5VXNlZC5wdXNoKHsgcm93LCBjb2x1bW4gfSk7XG4gICAgICAgICAgICB0aGlzLmVuZW15R2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2x1bW4pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXB1dGVyO1xuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxuaW1wb3J0IEdBTUVfQ09OVFJPTFMgZnJvbSAnLi9nYW1lLWNvbnRyb2xzJztcblxuY29uc3QgRE9NTWV0aG9kcyA9IHtcbiAgICBkaXNhcHBlYXJJbnRyb1NjcmVlbigpIHtcbiAgICAgICAgY29uc3QgaW50cm9TY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pbnRyby1zY3JlZW5dJyk7XG4gICAgICAgIGludHJvU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ3ZhbmlzaC1zY3JlZW4nKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pbnRyby1zY3JlZW5dJykucmVtb3ZlKCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH0sXG4gICAgc2hvd1BsYWNlU2hpcHNTY3JlZW4oKSB7XG4gICAgICAgIGNvbnN0IHBsYWNlU2hpcHNTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wbGFjZS15b3VyLXNoaXBzLXNjcmVlbl0nKTtcbiAgICAgICAgcGxhY2VTaGlwc1NjcmVlbi5jbGFzc0xpc3QuYWRkKCdhcHBlYXItc2NyZWVuJyk7XG4gICAgfSxcbiAgICBzZXRVc2VyTmFtZShwbGF5ZXJOYW1lKSB7XG4gICAgICAgIGlmIChwbGF5ZXJOYW1lID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBsYXllci1uYW1lXScpLnRleHRDb250ZW50ID0gcGxheWVyTmFtZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZ2FtZS1zY3JlZW4tcGxheWVyLW5hbWVdJykudGV4dENvbnRlbnQgPSBwbGF5ZXJOYW1lO1xuICAgIH0sXG4gICAgZGlzYXBwZWFyUGxhY2VTaGlwc1NjcmVlbigpIHtcbiAgICAgICAgY29uc3QgcGxhY2VTaGlwc1NjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBsYWNlLXlvdXItc2hpcHMtc2NyZWVuXScpO1xuICAgICAgICBwbGFjZVNoaXBzU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2Rpc2FwcGVhci1wbGFjZS1zaGlwcy1zY3JlZW4nKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wbGFjZS15b3VyLXNoaXBzLXNjcmVlbl0nKS5yZW1vdmUoKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfSxcbiAgICBhcHBlYXJHYW1lU2NyZWVuKCkge1xuICAgICAgICBjb25zdCBnYW1lU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZ2FtZS1zY3JlZW5dJyk7XG4gICAgICAgIGdhbWVTY3JlZW4uY2xhc3NMaXN0LmFkZCgnYXBwZWFyLWdhbWUtc2NyZWVuJyk7XG4gICAgfSxcbiAgICAvLyBSZW5kZXIgZ2FtZWJvYXJkcyB0byBiZWdpbiBnYW1lLlxuICAgIHJlbmRlckdhbWVib2FyZHMocGxheWVyLCBjb21wdXRlcikge1xuICAgICAgICAvLyBSZWZlcmVuY2VzIHRvIERPTSBlbGVtZW50cy5cbiAgICAgICAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGxheWVyLWdhbWVib2FyZF0nKTtcbiAgICAgICAgcGxheWVyR2FtZWJvYXJkLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCBjb21wdXRlckdhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvbXB1dGVyLWdhbWVib2FyZF0nKTtcbiAgICAgICAgY29tcHV0ZXJHYW1lYm9hcmQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGdyaWQgcm93cyBET00uXG4gICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgMTA7IGEgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgcGxheWVyR3JpZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJHcmlkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwbGF5ZXJHcmlkUm93LmNsYXNzTGlzdC5hZGQoJ2dyaWQtcm93Jyk7XG4gICAgICAgICAgICBjb21wdXRlckdyaWRSb3cuY2xhc3NMaXN0LmFkZCgnZ3JpZC1yb3cnKTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGdyaWQgY2VsbHMgRE9NLlxuICAgICAgICAgICAgZm9yIChsZXQgYiA9IDA7IGIgPCAxMDsgYiArPSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGxheWVyR3JpZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21wdXRlckdyaWRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcGxheWVyR3JpZENlbGwuY2xhc3NMaXN0LmFkZCgnZ3JpZC1jZWxsJyk7XG4gICAgICAgICAgICAgICAgY29tcHV0ZXJHcmlkQ2VsbC5jbGFzc0xpc3QuYWRkKCdncmlkLWNlbGwnKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVyQ2VsbCA9IHBsYXllci5lbmVteUdhbWVib2FyZC5ncmlkW2FdW2JdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllckNlbGwgPSBjb21wdXRlci5lbmVteUdhbWVib2FyZC5ncmlkW2FdW2JdO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbXB1dGVyQ2VsbC5zaGlwICE9PSBudWxsICYmIGNvbXB1dGVyQ2VsbC5oaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXJHcmlkQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwZmYwMCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb21wdXRlckNlbGwuc2hpcCA9PT0gbnVsbCAmJiBjb21wdXRlckNlbGwuaGl0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyR3JpZENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZjAwMDAnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyR3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIudGFrZVR1cm4oYSwgYik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wdXRlci50YWtlVHVybigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgR0FNRV9DT05UUk9MUy5jaGVja0Zvcldpbm5lcihwbGF5ZXIsIGNvbXB1dGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyR2FtZWJvYXJkcyhwbGF5ZXIsIGNvbXB1dGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXB1dGVyR3JpZFJvdy5hcHBlbmRDaGlsZChjb21wdXRlckdyaWRDZWxsKTtcblxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJDZWxsLnNoaXAgIT09IG51bGwgJiYgcGxheWVyQ2VsbC5oaXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllckdyaWRDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmZmZmJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllckNlbGwuc2hpcCAhPT0gbnVsbCAmJiBwbGF5ZXJDZWxsLmhpdCkge1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJHcmlkQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwZmYwMCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJDZWxsLnNoaXAgPT09IG51bGwgJiYgcGxheWVyQ2VsbC5oaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyR3JpZENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZjAwMDAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwbGF5ZXJHcmlkUm93LmFwcGVuZENoaWxkKHBsYXllckdyaWRDZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBsYXllckdhbWVib2FyZC5hcHBlbmRDaGlsZChwbGF5ZXJHcmlkUm93KTtcbiAgICAgICAgICAgIGNvbXB1dGVyR2FtZWJvYXJkLmFwcGVuZENoaWxkKGNvbXB1dGVyR3JpZFJvdyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUmVuZGVyIGdhbWVib2FyZCB0byBwbGFjZSBzaGlwcy5cbiAgICByZW5kZXJHYW1lYm9hcmRUb1BsYWNlU2hpcHMoZ2FtZWJvYXJkKSB7XG4gICAgICAgIGNvbnN0IGdhbWVib2FyZFRvUGxhY2VTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBsYWNlLXNoaXBzLWdhbWVib2FyZF0nKTtcbiAgICAgICAgZ2FtZWJvYXJkVG9QbGFjZVNoaXBzLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAvLyBDcmVhdGUgcm93cy5cbiAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCAxMDsgYSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBncmlkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBncmlkUm93LmNsYXNzTGlzdC5hZGQoJ2dyaWQtcm93Jyk7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBncmlkIGNlbGxzLlxuICAgICAgICAgICAgZm9yIChsZXQgYiA9IDA7IGIgPCAxMDsgYiArPSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JpZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBncmlkQ2VsbC5jbGFzc0xpc3QuYWRkKCdncmlkLWNlbGwnKTtcblxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSByZWZlcmVuY2UgdG8gZ2FtZWJvYXJkIGNlbGwuXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGdhbWVib2FyZC5ncmlkW2FdW2JdO1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLnNoaXAgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBncmlkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gTnVtYmVyKGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgR0FNRV9DT05UUk9MUy5wbGFjZVNoaXAoZ2FtZWJvYXJkLCBhLCBiLCBzaGlwTGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyR2FtZWJvYXJkVG9QbGFjZVNoaXBzKGdhbWVib2FyZCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBncmlkUm93LmFwcGVuZENoaWxkKGdyaWRDZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdhbWVib2FyZFRvUGxhY2VTaGlwcy5hcHBlbmRDaGlsZChncmlkUm93KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByb3RhdGVTaGlwcygpIHtcbiAgICAgICAgY29uc3Qgc2hpcHNEaXJlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hpcC1kaXJlY3Rpb24nKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2hpcC1kaXJlY3Rpb24nKTtcbiAgICAgICAgY29uc3Qgc2hpcHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcHMtc2VjdGlvbicpO1xuICAgICAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJyk7XG4gICAgICAgIGlmIChzaGlwc0RpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgc2hpcHNDb250YWluZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdyb3cnO1xuICAgICAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpbmdsZVNoaXAgPSBzaGlwO1xuICAgICAgICAgICAgICAgIHNpbmdsZVNoaXAuY2xhc3NMaXN0LmFkZCgndmVydGljYWwnKTtcbiAgICAgICAgICAgICAgICBzaW5nbGVTaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ2hvcml6b250YWwnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcHNDb250YWluZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgICAgICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNpbmdsZVNoaXAgPSBzaGlwO1xuICAgICAgICAgICAgICAgIHNpbmdsZVNoaXAuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbnRhbCcpO1xuICAgICAgICAgICAgICAgIHNpbmdsZVNoaXAuY2xhc3NMaXN0LnJlbW92ZSgndmVydGljYWwnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNob3dXaW5uZXJTY3JlZW4od2lubmVyKSB7XG4gICAgICAgIC8vIEhpZGUgZ2FtZSBzY3JlZW4uXG4gICAgICAgIGNvbnN0IHdpbm5lck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1nYW1lLXNjcmVlbi1wbGF5ZXItbmFtZV0nKS50ZXh0Q29udGVudDtcbiAgICAgICAgY29uc3QgZ2FtZVNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWdhbWUtc2NyZWVuXScpO1xuICAgICAgICBnYW1lU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2Rpc2FwcGVhci1nYW1lLXNjcmVlbicpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGdhbWVTY3JlZW4uc3R5bGUgPSAnZGlzcGxheTpub25lICFpbXBvcnRhbnQ7JztcbiAgICAgICAgICAgIGdhbWVTY3JlZW4ucmVtb3ZlKCk7XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIC8vIFNob3cgd2lubmVyIHNjcmVlbi5cbiAgICAgICAgY29uc3QgZGlzcGxheVdpbm5lck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS13aW5uZXItbmFtZV0nKTtcbiAgICAgICAgZGlzcGxheVdpbm5lck5hbWUudGV4dENvbnRlbnQgPSB3aW5uZXJOYW1lO1xuICAgICAgICBjb25zdCB3aW5uZXJTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS13aW5uZXItc2NyZWVuXScpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdpbm5lclNjcmVlbi5zdHlsZSA9ICdkaXNwbGF5OmZsZXgnO1xuICAgICAgICAgICAgd2lubmVyU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2FwcGVhci13aW5uZXItc2NyZWVuJyk7XG4gICAgICAgIH0sIDEyMDApO1xuICAgICAgICBjb25zdCBwbGF5ZXJXaW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS13aW5uZXJdJyk7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyV2lubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbG9zZXJdJyk7XG4gICAgICAgIGlmICh3aW5uZXIgPT09ICdQbGF5ZXInKSB7XG4gICAgICAgICAgICBwbGF5ZXJXaW5uZXIuc3R5bGUgPSAnZGlzcGxheTpmbGV4ICFpbXBvcnRhbnQ7JztcbiAgICAgICAgICAgIGNvbXB1dGVyV2lubmVyLnN0eWxlID0gJ2Rpc3BsYXk6bm9uZTsnO1xuICAgICAgICB9IGVsc2UgaWYgKHdpbm5lciA9PT0gJ0NvbXB1dGVyJykge1xuICAgICAgICAgICAgY29tcHV0ZXJXaW5uZXIuc3R5bGUgPSAnZGlzcGxheTpmbGV4ICFpbXBvcnRhbnQ7JztcbiAgICAgICAgICAgIHBsYXllcldpbm5lci5zdHlsZSA9ICdkaXNwbGF5Om5vbmU7JztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBub3RpZnlFcnJvcihlcnJvcikge1xuICAgICAgICBjb25zdCBub3RpZmljYXRpb25Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1ub3RpZmljYXRpb24tYm94XScpO1xuICAgICAgICBub3RpZmljYXRpb25Cb3guY2xhc3NMaXN0LmFkZCgnYXBwZWFyLW5vdGlmaWNhdGlvbnMtYm94Jyk7XG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbk1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1ub3RpZmljYXRpb24tbWVzc2FnZV0nKTtcbiAgICAgICAgbm90aWZpY2F0aW9uTWVzc2FnZS50ZXh0Q29udGVudCA9IGVycm9yO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbkJveC5jbGFzc0xpc3QucmVtb3ZlKCdhcHBlYXItbm90aWZpY2F0aW9ucy1ib3gnKTtcbiAgICAgICAgfSwgNDAwMCk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERPTU1ldGhvZHM7XG4iLCJpbXBvcnQgQ29tcHV0ZXIgZnJvbSAnLi9jb21wdXRlcic7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgRE9NTWV0aG9kcyBmcm9tICcuL2RvbS1jb250cm9sJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5jb25zdCBHQU1FX0NPTlRST0xTID0ge1xuICAgIHNldE5ld0dhbWUodXNlck5hbWUpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGdhbWUgYm9hcmRzLlxuICAgICAgICBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuXG4gICAgICAgIC8vIFBvcHVsYXRlIGdhbWUgYm9hcmRzIHdpdGggc2hpcHMuXG4gICAgICAgIGZvciAobGV0IGEgPSAwLCBiID0gNTsgYSA8IDU7IGEgKz0gMSwgYiAtPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwRm9yUGxheWVyID0gbmV3IFNoaXAoYik7XG4gICAgICAgICAgICBjb25zdCBzaGlwRm9yQ29tcHV0ZXIgPSBuZXcgU2hpcChiKTtcbiAgICAgICAgICAgIHBsYXllckdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcEZvclBsYXllciwgYSwgMCwgdHJ1ZSk7XG4gICAgICAgICAgICBjb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcEZvckNvbXB1dGVyLCBhLCAwLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBwbGF5ZXJzLlxuICAgICAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKHVzZXJOYW1lLCBjb21wdXRlckdhbWVib2FyZCk7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyID0gbmV3IENvbXB1dGVyKHBsYXllckdhbWVib2FyZCk7XG5cbiAgICAgICAgLy8gUmVuZGVyIGJvdGggcGxheWVycyBnYW1lYm9hcmRzLlxuICAgICAgICByZXR1cm4gW3BsYXllciwgY29tcHV0ZXJdO1xuICAgIH0sXG5cbiAgICBjaGVja0Zvcldpbm5lcihwbGF5ZXIsIGNvbXB1dGVyKSB7XG4gICAgICAgIGlmIChwbGF5ZXIuZW5lbXlHYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQbGF5ZXIgd2lucycpO1xuICAgICAgICAgICAgRE9NTWV0aG9kcy5zaG93V2lubmVyU2NyZWVuKCdQbGF5ZXInKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tcHV0ZXIuZW5lbXlHYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb21wdXRlciB3aW5zJyk7XG4gICAgICAgICAgICBET01NZXRob2RzLnNob3dXaW5uZXJTY3JlZW4oJ0NvbXB1dGVyJyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUHJlcGFyZSBzaGlwIHRvIGJlIHBsYWNlZCBieSB0aGUgcGxheWVyLlxuICAgIC8vIEFkZGluZyBkcmFnIGNvbnRyb2xzIHRvIGVhY2ggc2hpcC5cbiAgICBwcmVwYXJlU2hpcHMoKSB7XG4gICAgICAgIC8vIENhcnJpZXIuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJyaWVyJykuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGV2ZW50LnRhcmdldC5pZCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBCYXR0bGVzaGlwLlxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmF0dGxlc2hpcCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBldmVudC50YXJnZXQuaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQ3J1aXNlci5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNydWlzZXInKS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgZXZlbnQudGFyZ2V0LmlkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFN1Ym1hcmluZS5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1hcmluZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBldmVudC50YXJnZXQuaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gRGVzdHJveWVyLlxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzdHJveWVyJykuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGV2ZW50LnRhcmdldC5pZCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyBDaGFuZ2UgdGhlIHNoaXBzIGRpcmVjdGlvbi5cbiAgICBjaGFuZ2VTaGlwQXhpcygpIHtcbiAgICAgICAgY29uc3Qgc2hpcERpcmVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaGlwLWRpcmVjdGlvbicpO1xuICAgICAgICBpZiAoc2hpcERpcmVjdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2hpcC1kaXJlY3Rpb24nKSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICBzaGlwRGlyZWN0aW9uLnNldEF0dHJpYnV0ZSgnZGF0YS1zaGlwLWRpcmVjdGlvbicsICd2ZXJ0aWNhbCcpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NoaXAtZGlyZWN0aW9uJykudGV4dENvbnRlbnQgPSAndmVydGljYWwnO1xuICAgICAgICB9IGVsc2UgaWYgKHNoaXBEaXJlY3Rpb24uZ2V0QXR0cmlidXRlKCdkYXRhLXNoaXAtZGlyZWN0aW9uJykgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAgIHNoaXBEaXJlY3Rpb24uc2V0QXR0cmlidXRlKCdkYXRhLXNoaXAtZGlyZWN0aW9uJywgJ2hvcml6b250YWwnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaGlwLWRpcmVjdGlvbicpLnRleHRDb250ZW50ID0gJ2hvcml6b250YWwnO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIFBsYWNlIHRoZSBzaGlwcyBhZnRlciB0aGUgcGxheWVyIGRyYWdzIHRoZW0gaW50byB0aGUgZ2FtZWJvYXJkLlxuICAgIHBsYWNlU2hpcChwbGF5ZXJHYW1lYm9hcmQsIHJvdywgY29sdW1uLCBzaGlwTGVuZ3RoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoc2hpcExlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCBzaGlwRGlyZWN0aW9uSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaGlwLWRpcmVjdGlvbicpLmdldEF0dHJpYnV0ZSgnZGF0YS1zaGlwLWRpcmVjdGlvbicpO1xuICAgICAgICAgICAgbGV0IHNoaXBEaXJlY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgaWYgKHNoaXBEaXJlY3Rpb25JbmZvID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICBzaGlwRGlyZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2hpcERpcmVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwbGF5ZXJHYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAsIHJvdywgY29sdW1uLCBzaGlwRGlyZWN0aW9uKTtcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgc2hpcHMgYWZ0ZXIgYmVpbmcgcGxhY2VkLlxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7c2hpcExlbmd0aH1gKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgc2hpcHMgcGxhY2VkIGNvdW50ZXIuXG4gICAgICAgICAgICBsZXQgc2hpcHNQbGFjZWRDb3VudGVyID0gTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW51bWJlci1vZi1zaGlwcy1wbGFjZWRdJykudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgc2hpcHNQbGFjZWRDb3VudGVyICs9IDE7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1udW1iZXItb2Ytc2hpcHMtcGxhY2VkXScpLnRleHRDb250ZW50ID0gc2hpcHNQbGFjZWRDb3VudGVyO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgRE9NTWV0aG9kcy5ub3RpZnlFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8gUmFuZG9tbHkgcGxhY2UgdGhlIGNvbXB1dGVyIHNoaXBzLlxuICAgIHBsYWNlQ29tcHV0ZXJTaGlwcyhjb21wdXRlckdhbWVib2FyZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIHNoaXBzIGZvciB0aGUgY29tcHV0ZXIuXG4gICAgICAgICAgICBjb25zdCBjYXJyaWVyID0gbmV3IFNoaXAoNSk7XG4gICAgICAgICAgICBjb25zdCBiYXR0bGVzaGlwID0gbmV3IFNoaXAoNCk7XG4gICAgICAgICAgICBjb25zdCBjcnVpc2VyID0gbmV3IFNoaXAoMyk7XG4gICAgICAgICAgICBjb25zdCBzdWJtYXJpbmUgPSBuZXcgU2hpcCgzKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc3Ryb3llciA9IG5ldyBTaGlwKDIpO1xuICAgICAgICAgICAgY29uc3Qgc2hpcHMgPSBbY2FycmllciwgYmF0dGxlc2hpcCwgY3J1aXNlciwgc3VibWFyaW5lLCBkZXN0cm95ZXJdO1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlbSBpbnRvIHRoZSBnYW1lYm9hcmQgZGVwZW5kaW5nIG9mIHRoZSBzaGlwIGxlbmd0aCBhbmQgdGhlIHJhbmRvbSBudW1iZXIuXG4gICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IHNoaXBzLmxlbmd0aDsgYSArPSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gRGVjaWRlIHNoaXAgZGlyZWN0aW9uOyBpZiA9PT0gMCBpcyBob3Jpem9udGFsLCBpZiA9PT0gMSBpcyB2ZXJ0aWNhbC5cbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwRGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBEaXJlY3Rpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5kb21Db2x1bW5DYXNlNSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5kb21Db2x1bW5DYXNlNCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5kb21Db2x1bW5DYXNlMyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5kb21Db2x1bW5DYXNlMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHNoaXBzW2FdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcHNbYV0sIHJhbmRvbVJvdywgcmFuZG9tQ29sdW1uQ2FzZTUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyR2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwc1thXSwgcmFuZG9tUm93LCByYW5kb21Db2x1bW5DYXNlNCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VTaGlwKHNoaXBzW2FdLCByYW5kb21Sb3csIHJhbmRvbUNvbHVtbkNhc2UzLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcHNbYV0sIHJhbmRvbVJvdywgcmFuZG9tQ29sdW1uQ2FzZTIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBWZXJ0aWNhbCBzaGlwLlxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbUNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tUm93Q2FzZTUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tUm93Q2FzZTQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tUm93Q2FzZTMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tUm93Q2FzZTIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzaGlwc1thXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VTaGlwKHNoaXBzW2FdLCByYW5kb21Sb3dDYXNlNSwgcmFuZG9tQ29sdW1uLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VTaGlwKHNoaXBzW2FdLCByYW5kb21Sb3dDYXNlNCwgcmFuZG9tQ29sdW1uLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VTaGlwKHNoaXBzW2FdLCByYW5kb21Sb3dDYXNlMywgcmFuZG9tQ29sdW1uLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VTaGlwKHNoaXBzW2FdLCByYW5kb21Sb3dDYXNlMiwgcmFuZG9tQ29sdW1uLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgLy8gSWYgc2hpcHMgb3ZlcmxhcCBvciBhbiBlcnJvciBoYXBwZW5zLCBlcmFzZSB0aGUgZ3JpZCwgY3JlYXRlIGEgbmV3IG9uZSBhbmQgdHJ5IGFnYWluLlxuICAgICAgICAvLyBDYWxsaW5nIHRoZSBmdW5jdGlvbiByZWN1cnNpdmVseS5cbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAvLyBOZXcgY29tcHV0ZXIgZ2FtZWJvYXJkLlxuICAgICAgICAgICAgY29uc3QgY29tcHV0ZXJHQiA9IGNvbXB1dGVyR2FtZWJvYXJkO1xuICAgICAgICAgICAgY29tcHV0ZXJHQi5ncmlkID0gQXJyYXkoMTApLmZpbGwobnVsbCkubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKG51bGwpLm1hcCgoKSA9PiAoXG4gICAgICAgICAgICAgICAgeyBzaGlwOiBudWxsLCBoaXQ6IGZhbHNlIH0pKSk7XG4gICAgICAgICAgICB0aGlzLnBsYWNlQ29tcHV0ZXJTaGlwcyhjb21wdXRlckdCKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBDaGVjayBpZiB0aGUgcGxheWVyIGhhcyBwbGFjZWQgYWxsIHRoZSBzaGlwcyB0byBzdGFydCB0aGUgYmF0dGxlLlxuICAgIHN0YXJ0QmF0dGxlKCkge1xuICAgICAgICBjb25zdCBudW1iZXJPZlNoaXBzUGxhY2VkID0gTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW51bWJlci1vZi1zaGlwcy1wbGFjZWRdJykudGV4dENvbnRlbnQpO1xuICAgICAgICBpZiAobnVtYmVyT2ZTaGlwc1BsYWNlZCA8IDUpIHtcbiAgICAgICAgICAgIERPTU1ldGhvZHMubm90aWZ5RXJyb3IoJ1RoZSBnYW1lIGNhblxcJ3Qgc3RhcnQgaWYgYWxsIHRoZSBzaGlwcyBhcmUgbm90IHBsYWNlZC4nKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnVGhlIGdhbWUgaGFzIHN0YXJ0ZWQuJyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdBTUVfQ09OVFJPTFM7XG4iLCJjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBDcmVhdGUgdGhlIGdhbWVib2FyZCBncmlkLlxuICAgICAgICB0aGlzLmdyaWQgPSBBcnJheSgxMCkuZmlsbChudWxsKS5tYXAoKCkgPT4gQXJyYXkoMTApLmZpbGwobnVsbCkubWFwKCgpID0+IChcbiAgICAgICAgICAgIHsgc2hpcDogbnVsbCwgaGl0OiBmYWxzZSB9KSkpO1xuICAgICAgICB0aGlzLm1pc3NlZEF0dGFja3MgPSAwO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHNoaXAgcGxhY2VtZW50IGlzIG91dCBvZiBib3VuZGFyaWVzLlxuICAgIHBsYWNlU2hpcChzaGlwLCByb3csIGNvbCwgaXNIb3Jpem9udGFsKSB7XG4gICAgICAgIGlmIChyb3cgPj0gMTAgfHwgY29sID49IDEwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoaXAgcGxhY2VtZW50IG91dCBvZiBib3VuZGFyaWVzLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXAubGVuZ3RoO1xuXG4gICAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBzaGlwIHBsYWNlbWVudCBvdmVyZmxvd3MgdGhlIGdyaWQncyBob3Jpem9udGFsIHBvc2l0aW9uaW5nLCB0aHJvdyBlcnJvci5cbiAgICAgICAgICAgIGlmICgoY29sICsgc2hpcC5sZW5ndGgpID4gMTApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2hpcCBwbGFjZW1lbnQsIHRoZSBzaGlwIGV4Y2VlZHMgdGhlIGdhbWVib2FyZC4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGdyaWRDb2x1bW4gPSBjb2w7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYWxyZWFkeSBhbm90aGVyIHNoaXAgaW4gdGhlIGdyaWQgaW4gdGhlIHNhbWUgcGxhY2UuXG4gICAgICAgICAgICBmb3IgKGxldCBhID0gMCwgY29sdW1uTnVtYmVyID0gY29sOyBhIDwgc2hpcExlbmd0aDsgYSArPSAxLCBjb2x1bW5OdW1iZXIgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdyaWRbcm93XVtjb2x1bW5OdW1iZXJdLnNoaXAgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNoaXAgcGxhY2VtZW50LCB0aGUgc2hpcCBvdmVybGFwcyBhbm90aGVyIHNoaXAgaG9yaXpvbnRhbGx5LicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBwbGFjZW1lbnQgaXMgdmFsaWQsIHByb2NlZWQuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSwgZ3JpZENvbHVtbiArPSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkW3Jvd11bZ3JpZENvbHVtbl0uc2hpcCA9IHNoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBwb3NpdGlvbmluZyBpcyB2ZXJ0aWNhbC5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBzaGlwIHBsYWNlbWVudCBvdmVyZmxvd3MgdGhlIGdyaWQncyB2ZXJ0aWNhbCBwb3NpdGlvbmluZywgdGhyb3cgZXJyb3IuXG4gICAgICAgICAgICBpZiAoKHJvdyArIHNoaXAubGVuZ3RoKSA+IDEwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNoaXAgcGxhY2VtZW50LCB0aGUgc2hpcCBleGNlZWRzIHRoZSBnYW1lYm9hcmQuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBncmlkUm93ID0gcm93O1xuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIGFscmVhZHkgYW5vdGhlciBzaGlwIGluIHRoZSBncmlkIGluIHRoZSBzYW1lIHBsYWNlLlxuICAgICAgICAgICAgZm9yIChsZXQgYSA9IDAsIHJvd051bWJlciA9IHJvdzsgYSA8IHNoaXBMZW5ndGg7IGEgKz0gMSwgcm93TnVtYmVyICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ncmlkW3Jvd051bWJlcl1bY29sXS5zaGlwICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzaGlwIHBsYWNlbWVudCwgdGhlIHNoaXAgb3ZlcmxhcHMgYW5vdGhlciBzaGlwIHZlcnRpY2FsbHkuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIHBsYWNlbWVudCBpcyB2YWxpZCwgcHJvY2VlZC5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxLCBncmlkUm93ICs9IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRbZ3JpZFJvd11bY29sXS5zaGlwID0gc2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2socm93LCBjb2wpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGdyaWQgY2VsbCBoYXMgYmVlbiBoaXQgYWxyZWFkeS5cbiAgICAgICAgaWYgKHRoaXMuZ3JpZFtyb3ddW2NvbF0uaGl0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoYXQgZ3JpZCBjZWxsIGhhcyBiZWVuIGF0dGFja2VkIGFscmVhZHkuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGVyZSdzIGEgc2hpcCBpbiB0aGUgYXR0YWNrZWQgZ3JpZCBjZWxsLlxuICAgICAgICBpZiAodGhpcy5ncmlkW3Jvd11bY29sXS5zaGlwICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWRbcm93XVtjb2xdLnNoaXAucmVjZWl2ZUhpdCgpO1xuICAgICAgICAgICAgdGhpcy5ncmlkW3Jvd11bY29sXS5oaXQgPSB0cnVlO1xuICAgICAgICAvLyBJIHRoZXJlIGlzbid0IGEgc2hpcCBpbiB0aGUgYXR0YWNrZWQgcGxhY2UuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdyaWRbcm93XVtjb2xdLmhpdCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm1pc3NlZEF0dGFja3MgKz0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIGFsbCB0aGUgc2hpcHMgaW4gdGhlIGdyaWQgaGF2ZSBiZWVuIHN1bmsuXG4gICAgYWxsU2hpcHNTdW5rKCkge1xuICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIHRoZSBncmlkIGNlbGxzLlxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93ICs9IDEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wgKz0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmdyaWRbcm93XVtjb2xdO1xuICAgICAgICAgICAgICAgIC8vIElmIGl0IGZpbmRzIGF0IGxlYXN0IG9uZSBzaGlwIHdob3NlIFwiaXNTdW5rXCIgcHJvcGVydHkgaXMgZmFsc2UsIHJldHVybiBmYWxzZS5cbiAgICAgICAgICAgICAgICBpZiAoY2VsbC5zaGlwICYmICFjZWxsLnNoaXAuaXNTdW5rKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgaXQgZG9lc24ndCBmaW5kIGEgc2luZ2xlIHNoaXAgd2hvc2UgXCJpc1N1bmtcIiBwcm9wZXJ0eSBpcyBmYWxzZSwgcmV0dXJuIHRydWUuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lYm9hcmQ7XG4iLCJjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGVuZW15R2FtZWJvYXJkKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZW5lbXlHYW1lYm9hcmQgPSBlbmVteUdhbWVib2FyZDtcbiAgICB9XG5cbiAgICB0YWtlVHVybihyb3csIGNvbCkge1xuICAgICAgICAvLyBJZiBhdHRhY2sgaXMgaW52YWxpZC5cbiAgICAgICAgaWYgKHJvdyA8IDAgfHwgcm93ID49IDEwIHx8IGNvbCA8IDAgfHwgY29sID49IDEwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXR0YWNrIGNvb3JkaW5hdGVzLiBUaGUgYXR0YWNrIGlzIG91dHNpZGUgb2YgdGhlIGdyaWRcXCdzIGJvdW5kYXJpZXMuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgZ3JpZCdzIGNlbGwgaGFzIGJlZW4gaGl0IGFscmVhZHkuXG4gICAgICAgIGlmICh0aGlzLmVuZW15R2FtZWJvYXJkLmdyaWRbcm93XVtjb2xdLmhpdCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGF0IGNlbGwgaGFzIGFscmVhZHkgYmVlbiBhdHRhY2tlZC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZW5lbXlHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbCk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcbiIsImNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgICAgICBpZiAodHlwZW9mIGxlbmd0aCAhPT0gJ251bWJlcicgfHwgbGVuZ3RoIDwgMSB8fCBsZW5ndGggPiA1KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2hpcCBsZW5ndGgnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5oaXRzQ291bnRlciA9IDA7XG4gICAgICAgIHRoaXMuaXNTdW5rID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUhpdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3Vuaykge1xuICAgICAgICAgICAgdGhpcy5oaXRzQ291bnRlciArPSAxO1xuICAgICAgICAgICAgdGhpcy5jaGVja1NoaXBIZWFsdGgoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjaGVja1NoaXBIZWFsdGgoKSB7XG4gICAgICAgIGlmICh0aGlzLmhpdHNDb3VudGVyID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pc1N1bmsgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9jc3Mvc3R5bGVzLmNzcyc7XG5pbXBvcnQgQ29tcHV0ZXIgZnJvbSAnLi9qcy9jb21wdXRlcic7XG5pbXBvcnQgRE9NTWV0aG9kcyBmcm9tICcuL2pzL2RvbS1jb250cm9sJztcbmltcG9ydCBHQU1FX0NPTlRST0xTIGZyb20gJy4vanMvZ2FtZS1jb250cm9scyc7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vanMvZ2FtZWJvYXJkJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9qcy9wbGF5ZXInO1xuXG5jb25zdCBhdWRpbyA9IG5ldyBBdWRpbygnLi9zcmMvbXVzaWMvbWFpbi10aGVtZS5tcDMnKTtcblxuLy8gU2F2ZSB0aGUgdXNlciBuYW1lIGV2ZXJ5IHRpbWUgaGUgZW50ZXJzIGFuIGlucHV0IGluIHRoZSBpbnB1dCBmaWVsZC5cbmxldCB1c2VyTmFtZSA9ICcnO1xuY29uc3QgdXNlck5hbWVJbnB1dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdXNlci1uYW1lXScpO1xudXNlck5hbWVJbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdXNlci1uYW1lXScpLnZhbHVlO1xufSk7XG5cbi8vIENyZWF0ZSBnYW1lYm9hcmRzLlxuY29uc3QgcGxheWVyR2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuY29uc3QgY29tcHV0ZXJHYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5cbi8vIENyZWF0ZSBwbGF5ZXJzLlxuY29uc3QgcGxheWVyID0gbmV3IFBsYXllcih1c2VyTmFtZSwgY29tcHV0ZXJHYW1lYm9hcmQpO1xuY29uc3QgY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXIocGxheWVyR2FtZWJvYXJkKTtcblxuLy8gQnV0dG9uIHRvIGdvIHRvIFwicGxhY2Ugc2hpcHNcIiBzZWN0aW9uLlxuY29uc3Qgc3RhcnRHYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc3RhcnQtZ2FtZS1mb3JtXScpO1xuc3RhcnRHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGF1ZGlvLnBsYXkoKTtcbiAgICBET01NZXRob2RzLmRpc2FwcGVhckludHJvU2NyZWVuKCk7XG4gICAgRE9NTWV0aG9kcy5yZW5kZXJHYW1lYm9hcmRUb1BsYWNlU2hpcHMoY29tcHV0ZXIuZW5lbXlHYW1lYm9hcmQpO1xuICAgIERPTU1ldGhvZHMuc2V0VXNlck5hbWUodXNlck5hbWUpO1xuICAgIEdBTUVfQ09OVFJPTFMucHJlcGFyZVNoaXBzKCk7XG4gICAgR0FNRV9DT05UUk9MUy5wbGFjZUNvbXB1dGVyU2hpcHMocGxheWVyLmVuZW15R2FtZWJvYXJkKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgRE9NTWV0aG9kcy5zaG93UGxhY2VTaGlwc1NjcmVlbigpO1xuICAgIH0sIDEwNTApO1xufSk7XG5cbi8vIEJ1dHRvbiB0byBjaGFuZ2UgdGhlIHNoaXAgYXhpcyB0byBiZSBwbGFjZWQgb24gdGhlIGdhbWVib2FyZC5cbmNvbnN0IGNoYW5nZVNoaXBBeGlzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY2hhbmdlLXNoaXAtYXhpc10nKTtcbmNoYW5nZVNoaXBBeGlzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIEdBTUVfQ09OVFJPTFMuY2hhbmdlU2hpcEF4aXMoKTtcbiAgICBET01NZXRob2RzLnJvdGF0ZVNoaXBzKCk7XG59KTtcblxuLy8gQnV0dG9uIHRvIHN0YXJ0IHRoZSBiYXR0bGUuXG5jb25zdCBzdGFydEJhdHRsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXN0YXJ0LWJhdHRsZS1idXR0b25dJyk7XG5zdGFydEJhdHRsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoR0FNRV9DT05UUk9MUy5zdGFydEJhdHRsZSgpKSB7XG4gICAgICAgIERPTU1ldGhvZHMucmVuZGVyR2FtZWJvYXJkcyhwbGF5ZXIsIGNvbXB1dGVyKTtcbiAgICAgICAgRE9NTWV0aG9kcy5kaXNhcHBlYXJQbGFjZVNoaXBzU2NyZWVuKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgRE9NTWV0aG9kcy5hcHBlYXJHYW1lU2NyZWVuKCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cbn0pO1xuXG4vLyBQbGF5IGFnYWluIGJ1dHRvbi5cbmNvbnN0IHBsYXlBZ2FpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBsYXktYWdhaW4tYnV0dG9uXScpO1xucGxheUFnYWluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9