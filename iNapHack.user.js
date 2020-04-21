// ==UserScript==
// @name         iNapHack
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  iN@pló feljavittó
// @author       You
// @match        http://160.114.82.156/t1920/menu.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const page = (window.location.href.match(/module=[^&]*/) || [''])[0].replace('module=','')

    window.CountBack = x => {};

    switch (page) {
        case 'elomenet': {
            document.querySelectorAll('div#main')[0].removeChild(document.querySelectorAll('#main > form')[0]);
            document.querySelectorAll("#main > table:nth-child(2) > tbody .bxuz div.button").forEach(e => {
                e.style.fontSize = '12px';
                e.style.padding = '4px';
                e.style.margin = 0;
                e.style.lineHeight = '12px';
            });
            document.querySelectorAll("#main > table:nth-child(2) > tbody .bxuz").forEach(e => {
                e.style.fontSize = '12px';
                e.style.padding = '4px';
                e.style.margin = 0;
                e.style.lineHeight = '12px';
            });
        }
    }
})();
