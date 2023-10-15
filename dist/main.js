(()=>{var t={701:(t,e,i)=>{"use strict";i.r(e),i.d(e,{Carousel:()=>s});class s{constructor(t,e){return this.imageArray=[],this.carousel,this.imgIndex=0,this.timeInterval,this.startRotation(),this.buildCarousel(t,e)}createButton=(t,e)=>{const i=document.createElement("button");switch(t){case"prev":i.innerText="<",i.addEventListener("click",(()=>{this.imgIndex--,this.displayImages(this.carousel,this.getDisplayImages(this.imageArray)),clearInterval(this.timeInterval)}));break;case"next":i.innerText=">",i.addEventListener("click",(()=>{this.imgIndex++,this.displayImages(this.carousel,this.getDisplayImages(this.imageArray)),clearInterval(this.timeInterval)}));break;case"pip":i.innerText="",i.addEventListener("click",(()=>{this.imgIndex=e,this.displayImages(this.carousel,this.getDisplayImages(this.imageArray)),clearInterval(this.timeInterval)}))}return i};createNav=()=>{const t=document.createElement("div");t.setAttribute("class","carousel-nav");const e=this.createButton("prev",0);t.appendChild(e),this.imageArray.forEach(((e,i)=>{const s=this.createButton("pip",i);t.appendChild(s)}));const i=this.createButton("next",0);return t.appendChild(i),t};rotateImages=()=>{this.imgIndex++;const t=this.getDisplayImages(this.imageArray);this.displayImages(this.carousel,t)};startRotation=()=>{this.timeInterval=setInterval(this.rotateImages,5e3)};displayImages=(t,e)=>(t.innerHTML="",e.forEach((e=>{t.appendChild(e)})),t);getDisplayImages=t=>{let e=[];return 0===this.imgIndex?(e.push(t[t.length-1]),e.push(t[this.imgIndex]),e.push(t[this.imgIndex+1])):this.imgIndex===t.length-1?(e.push(t[this.imgIndex-1]),e.push(t[this.imgIndex]),e.push(t[0]),this.imgIndex=0):e=t.slice(this.imgIndex-1,this.imgIndex+2),e};createContainer=t=>{const e=document.createElement("div");return e.setAttribute("class","carousel-container"),e.setAttribute("id",t),e};createCarousel=(t,e)=>{const i=document.createElement("div");i.setAttribute("class","carousel"),i.setAttribute("id",`${t}-carousel`),e.forEach(((t,e)=>{const i=document.createElement("div");i.setAttribute("class","carousel-image-container");const s=document.createElement("img");s.setAttribute("class","carousel-image"),s.setAttribute("src",t.src),i.appendChild(s),this.imageArray.push(i)}));const s=this.getDisplayImages(this.imageArray);return this.displayImages(i,s),i};buildCarousel=(t,e)=>{const i=this.createContainer(t);this.carousel=this.createCarousel(t,e);const s=this.createNav();return i.appendChild(this.carousel),i.appendChild(s),i}}},49:(t,e,i)=>{"use strict";i.r(e),i.d(e,{buildDropDown:()=>s});const s=(t,e,i,s)=>{const r=(t=>{const e=document.createElement("div");return e.setAttribute("id",t),e.setAttribute("class","drop-down"),e})(t),n=((t,e)=>{let i=document.createElement("button");return i.setAttribute("class","drop-down-button"),i.innerText=t,i.addEventListener("click",(()=>{(t=>{const e=document.getElementById(t),i=e.getAttribute("visibility");"visible"===i?(e.setAttribute("visibility","hidden"),e.style.visibility="hidden"):"hidden"===i?(e.setAttribute("visibility","visible"),e.style.visibility="visible"):console.error("unknown")})(e)})),i})(e,s),a=((t,e)=>{const i=document.createElement("ul");return i.setAttribute("class","drop-down-list"),i.setAttribute("id",e),i.setAttribute("visibility","hidden"),i.style.visibility="hidden",t.forEach((t=>{let e=document.createElement("li");e.innerText=t.text,e.setAttribute("class","drop-down-list-item"),i.appendChild(e)})),i})(i,s);return r.appendChild(n),r.appendChild(a),r}}},e={};function i(s){var r=e[s];if(void 0!==r)return r.exports;var n=e[s]={exports:{}};return t[s](n,n.exports,i),n.exports}i.d=(t,e)=>{for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{const{buildDropDown:t}=i(49),{Carousel:e}=i(701);window.onload=i=>{const s=document.getElementById("content"),r=t("dd1","MENU",[{text:"HOME"},{text:"ABOUT"},{text:"CONTACT"}],"list-one"),n=new e("first",[{src:"https://placehold.co/400x350"},{src:"https://placehold.co/401x350"},{src:"https://placehold.co/399x350"},{src:"https://placehold.co/401x350"},{src:"https://placehold.co/399x350"}]);s.appendChild(r),s.appendChild(n)}})()})();