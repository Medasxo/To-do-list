(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,":root {\n    --light-blue: #79c5e7;\n    --dark-blue: #002447;\n    --white: #fffaf7;\n    --black: #000000;\n    --mainFont: 'Pacifico', cursive;\n    --menuFontSize: 32px;\n}\n\nbody {\n    display: flex;\n    gap: 20px;\n    font-family: var(--mainFont, sans-serif);\n    color: var(--dark-blue, blue);\n    width: 100%;\n    height: 100%;\n    background-color: var(--white, white);\n}\n\n.listMenu {\n    margin-bottom: 0px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    font-family: var(--mainFont, sans-serif);\n    font-size: var(--menuFontSize);\n    height: 800px;\n    width: 25%;\n    border: 3px solid var(--dark-blue, blue);\n    border-radius: 20px;\n    overflow: hidden;\n}\n\n.title {\n    display: inline-block;\n    position: relative;\n}\n\n.title:after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    transform: scaleX(0);\n    height: 2px;\n    bottom: 0;\n    left: 0;\n    background-color: var(--dark-blue, blue);\n    transform-origin: bottom right;\n    transition: transform 0.25s ease-out;\n}\n\n.title:hover:after {\n    transform: scaleX(1);\n    transform-origin: bottom left;\n}\n\n#projectsList {\n    height: 55%;\n    width: 85%;\n    align-self: start;\n    overflow: hidden;\n    margin: 0px;\n}\n\n\n.active-list {\n\n    background-color: var(--light-blue, blue);\n    border-radius: 10px;\n    display: flex;\n    align-items: center;\n    margin: 0px;\n}\n\n.inactive-list {\n    margin: 0px;\n    height: 10%;\n    display: flex;\n    align-items: center;\n}\n\n\n.newListName {\n    margin: 0px;\n    width: 60%;\n    border-radius: 10px;\n    font-family: var(--mainFont, sans-serif);\n    font-size: var(--menuFontSize);\n    font-size: calc(var(--menuFontSize)/2);\n}\n\n.addButton,\n.deleteListButton {\n    width: 80%;\n    height: 10%;\n    font-family: var(--mainFont, sans-serif);\n    font-size: var(--menuFontSize);\n    border-radius: 10px;\n    background-color: var(--dark-blue, blue);\n    color: var(--white, white);\n}\n\n.addButton:hover,\n.addTaskButton:hover,\n.submitButton:hover,\n.deleteListButton:hover{\n    background-color: var(--light-blue, blue);\n}\n\n.addButton:active,\n.addTaskButton:active,\n.submitButton:active,\n.deleteListButton:active {\n    border: 5px solid black;\n}\n\n.mainMenu {\n    position: relative;\n    width: 72%;\n    border: 3px solid var(--dark-blue, blue);\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n}\n\n.listTitle {\n    font-size: 50px;\n    margin-left: 30px;\n    text-decoration: underline;\n\n}\n\n.toDoList {\n\n    width: 85%;\n    height: 60%;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.taskContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    flex: 0 1;\n\n    width: 100%;\n    border-bottom: 3px solid var(--dark-blue, blue);\n\n}\n\n.task {\n    font-size: 24px;\n    margin: 0px;\n}\n\n.taskNotesContainer {\n    position: absolute;\n    width: 40%;\n    height: 40%;\n    left: 30%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    transform: translateY(-50%);\n    border: 3px solid var(--light-blue, blue);\n    border-radius: 10px;\n    background-color: var(--light-blue, blue);\n    display: grid;\n    grid-template: 1fr 3fr / 1fr 1fr 1fr;\n    justify-content: center;\n    white-space: initial;\n    overflow: hidden;\n}\n\n.notesTitle {\n    grid-row: 1;\n    grid-column: 2/3;\n    justify-self: center;\n    font-size: 30px;\n}\n\n.exitNotes {\n    grid-row: 1;\n    grid-column: 3;\n    width: 20%;\n    height: 30%;\n    justify-self: right;\n    background-color: var(--dark-blue, white);\n    border-radius: 5px;\n    color: var(--white, blue);\n    border: 2px solid var(--dark-blue, blue);\n    font-size: 20px;\n}\n\n.notes {\n    padding-left: 5px;\n    font-size: 24px;\n    color: var(--dark-blue, blue);\n    grid-row: 2;\n    grid-column: 1/4;\n    word-wrap: break-word;\n}\n\n.addTaskButton {\n    width: 20%;\n    height: 12%;\n    border-radius: 10px;\n    background-color: var(--dark-blue, white);\n    color: var(--white, blue);\n    justify-self: flex-end;\n    font-size: var(--menuFontSize);\n    font-family: var(--mainFont, sans-serif);\n    margin-left: 75%;\n    margin-top: 15px;\n}\n\n.formContainer {\n    position: absolute;\n    width: 70%;\n    height: 80%;\n    left: 15%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    transform: translateY(-50%);\n    background-color: var(--light-blue, blue);\n    border-radius: 15px;\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    font-size: 30px;\n    gap: 30px;\n}\n\n.titleFormContainer,\n.dateFormContainer,\n.notesFormContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    height: 20%;\n}\n\n.notesFormContainer {\n    height: 40%;\n    word-wrap: break-word;\n    white-space: initial;\n    overflow: hidden;\n\n}\n\n.titleInput,\n.dateInput,\n.notesInput {\n    height: 50%;\n    border-radius: 10px;\n    border: 3px solid var(--dark-blue, blue);\n    background-color: var(--white, white);\n    color: var(--dark-blue, blue);\n    font-size: 20px;\n    font-family: var(--mainFont, sans-serif);\n}\n\n.submitButton {\n    width: 30%;\n    border-radius: 10px;\n    align-self: center;\n    height: 15%;\n    background-color: var(--dark-blue, blue);\n    color: var(--white, white);\n    font-size: 20px;\n    font-family: var(--mainFont, sans-serif);\n}\n\n.exitFormButton {\n    right: 25px;\n    position: absolute;\n    width: 30px;\n    height: 30px;\n    justify-self: right;\n    background-color: var(--dark-blue, white);\n    border-radius: 5px;\n    color: var(--white, blue);\n    border: 2px solid var(--dark-blue, blue);\n    font-size: 20px;\n}\n\n.dateAndDoneContainer {\n    display: flex;\n    gap: 20px;\n}\n\n.taskDone {\n\n    font-family: var(--mainFont, sans-serif);\n    font-size: 20px;\n    text-transform: uppercase;\n    letter-spacing: 2.5px;\n    font-weight: 500;\n    color: var(--white);\n    background-color: var(--dark-blue);\n    border: none;\n    border-radius: 5px;\n    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\n    transition: all 0.3s ease 0s;\n    cursor: pointer;\n    outline: none;\n}\n.taskDone:hover {\n    background-color: var(--light-blue);\n    box-shadow: 0px 15px 20px var(--light-blue);\n    color: #fff;\n    transform: translateY(-7px);\n  }",""]);const l=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);o&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],l=0;l<e.length;l++){var s=e[l],d=o.base?s[0]+o.base:s[0],c=a[d]||0,u="".concat(d," ").concat(c);a[d]=c+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=l,t.splice(l,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=n(a[i]);t[l].references--}for(var s=o(e,r),d=0;d<a.length;d++){var c=n(a[d]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},867:(e,t,n)=>{n.d(t,{w:()=>r});var o=n(72);function r(){let e=1;const t=document.createElement("div");t.className="listMenu";const n=document.createElement("p");n.className="title",n.innerText="To Do List",t.appendChild(n);const r=document.createElement("ul");r.id="projectsList";const i=document.createElement("li");i.className="active-list",i.innerText="Default",i.id="0",i.addEventListener("click",(()=>{a(),i.className="active-list",document.querySelector(".listTitle").textContent=i.textContent,(0,o.oS)()})),r.appendChild(i),t.appendChild(r);const l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("placeholder","New List Name"),l.setAttribute("name","newName"),l.id="newListName",l.className="newListName",t.appendChild(l);const s=document.createElement("button");s.className="addButton",s.setAttribute("type","button"),s.innerText="Add List",s.addEventListener("click",(()=>{if(""!==l.value){let t=0,n=r.children;for(let e=0;e<n.length;e++)l.value===n[e].textContent&&t++;if(0===t){const t=document.createElement("li");t.innerText=l.value,t.id=e,e++,t.addEventListener("click",(()=>{a(),t.className="active-list",document.querySelector(".listTitle").textContent=t.textContent,(0,o.oS)()})),r.appendChild(t)}}})),t.appendChild(s);const d=document.createElement("button");d.className="deleteListButton",d.textContent="Delete List",d.addEventListener("click",(()=>{let e=(0,o.jU)();document.getElementById(e).remove(),i.className="active-list",(0,o.oS)()})),t.appendChild(d),document.body.appendChild(t)}function a(){let e=document.getElementById("projectsList").children;for(let t=0;t<e.length;t++)e[t].removeAttribute("class")}},72:(e,t,n)=>{n.d(t,{jU:()=>i,oS:()=>a,us:()=>r});let o=[];function r(){const e=document.createElement("div");e.className="mainMenu";const t=document.createElement("h1");t.className="listTitle",t.textContent="Default",e.appendChild(t);const n=document.createElement("ul");n.className="toDoList";const r=document.createElement("button");r.textContent="Add Task",r.className="addTaskButton",r.addEventListener("click",(()=>{const t=document.createElement("form");t.setAttribute("onsubmit","return false"),t.className="formContainer";const n=document.createElement("button");n.className="exitFormButton",n.textContent="X",n.setAttribute("type","button"),n.addEventListener("click",(()=>{"none"!==t.style.display?t.style.display="none":t.style.display="block"}));const r=document.createElement("div");r.className="titleFormContainer";const s=document.createElement("label");s.setAttribute("for","title"),s.textContent="Title:";const d=document.createElement("input");d.setAttribute("type","text"),d.setAttribute("id","title"),d.setAttribute("name","title"),d.setAttribute("placeholder","Create a todo list..."),d.className="titleInput",d.required=!0;const c=document.createElement("div");c.className="dateFormContainer";const u=document.createElement("label");u.setAttribute("for","date"),u.textContent="Date:";const p=document.createElement("input");p.setAttribute("type","date"),p.setAttribute("id","date"),p.setAttribute("name","date"),p.className="dateInput",p.required=!0;const m=document.createElement("div");m.className="notesFormContainer";const f=document.createElement("label");f.setAttribute("for","notes"),f.textContent="Notes: (Optional)";const h=document.createElement("input");h.setAttribute("type","text"),h.setAttribute("id","notes"),h.setAttribute("name","notes"),h.setAttribute("placeholder","I need to finish the project before..."),h.className="notesInput";const b=document.createElement("input");b.setAttribute("type","submit"),b.className="submitButton",b.addEventListener("click",(()=>{""!==d.value&&""!==p.value&&(function(e,t,n){let r=i(),a=o[r];if(void 0===a){let a=[];a[0]=new l(e,t,n),o[r]=a}else a[a.length]=new l(e,t,n),o[r]=a}(d.value,p.value,h.value),a(),t.style.display="none")})),c.appendChild(u),c.appendChild(p),r.appendChild(s),r.appendChild(d),m.appendChild(f),m.appendChild(h),t.appendChild(n),t.appendChild(r),t.appendChild(c),t.appendChild(m),t.appendChild(b),e.appendChild(t)})),e.appendChild(n),e.appendChild(r),document.body.appendChild(e)}function a(){document.querySelectorAll(".task").forEach((e=>{e.remove()})),document.querySelectorAll(".taskContainer").forEach((e=>{e.remove()}));const e=document.querySelector(".toDoList");let t=i(),n=o[t];if(void 0!==n)for(let t=0;t<n.length;t++){const r=document.createElement("div");r.className="taskContainer";const a=document.createElement("p");a.className="task",a.textContent=n[t].title;const l=document.createElement("div");l.className="dateAndDoneContainer";const s=document.createElement("p");s.className="task",s.textContent=n[t].dueDate;const d=document.createElement("button");d.setAttribute("type","button"),d.className="taskDone",d.textContent="Done",d.setAttribute("onclick","event.stopPropagation()"),d.addEventListener("click",(()=>{let e=i();r.remove();let a=o[e];for(let r=0;r<a.length;r++)a[r]===n[t]&&(a.splice(r,1),o[e]=a)})),r.addEventListener("click",(()=>{document.querySelectorAll(".taskNotesContainer").forEach((e=>{e.remove()}));const o=document.createElement("div");o.className="taskNotesContainer";const r=document.createElement("p");r.className="notesTitle",r.textContent="Notes";const a=document.createElement("button");a.className="exitNotes",a.textContent="X",a.addEventListener("click",(()=>{"none"!==o.style.display?o.style.display="none":o.style.display="block"}));const i=document.createElement("p");i.className="notes",i.textContent=n[t].notes,o.appendChild(r),o.appendChild(a),o.appendChild(i),e.appendChild(o)})),l.appendChild(s),l.appendChild(d),r.appendChild(a),r.appendChild(l),e.appendChild(r)}}function i(){let e=document.getElementById("projectsList").children;for(let t=0;t<e.length;t++)if("active-list"===e[t].className)return e[t].id}class l{constructor(e,t,n){this.title=e,this.dueDate=t,this.notes=n}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),i=n.n(a),l=n(565),s=n.n(l),d=n(216),c=n.n(d),u=n(589),p=n.n(u),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=c(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var h=n(867),b=n(72);(0,h.w)(),(0,b.us)()})()})();