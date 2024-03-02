// ==UserScript==
// @name         ᏼꭱꮖꮇꮪꭲσɴꭼ's FreeIP
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Blocks all Ads
// @match        *://shellshock.io/*
// @grant        none
// @run-at       document-start
// ==/UserScript==
String.prototype.replace_all = function(str, newstr) {
    return this.split(str).join(newstr);
};
window.XMLHttpRequest = class extends window.XMLHttpRequest {
	open( method, url ) {
        console.log(url);
		if ( url.indexOf( 'shellshock.js' ) > - 1 ) {
			this.isScript = true;
            console.log(url);
		}   return super.open( ...arguments );
	}
	get response() {
		if ( this.isScript ) {
            return super.response.replace_all(`hasValue(this.upgradeProductId)&&!this.upgradeIsExpired`,`1`)
                .replace(`(document.getElementById("chickenBadge").style.display="block")`,`0`)
                .replace(`(document.getElementById("chickenBadge").style.display="none")`,`0`)
		}   return super.response;
	}
};

