import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as h,i as f}from"./assets/vendor-77e16229.js";const c=document.querySelector("#datetime-picker"),e=document.querySelector("[data-start]"),x=document.querySelector("[data-days]"),g=document.querySelector("[data-hours]"),k=document.querySelector("[data-minutes]"),q=document.querySelector("[data-seconds]");e.disabled=!0;let u="",d=null;const l={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){u=t[0],t[0]<=l.defaultDate?(e.disabled=!0,e.style.hover="none",f.warning({title:"Caution",message:"Please choose a date in the future"})):e.disabled=!1}};e.addEventListener("click",C);function C(){e.disabled=!0,c.disabled=!0,c.style.cursor="default",d=setInterval(()=>{const t=Date.now(),o=u.getTime()-t,n=T(o);D(n),p(o)},1e3)}function p(t){t<=1e3&&(clearInterval(d),c.disabled=!1,c.style.cursor="pointer")}function D({days:t,hours:o,minutes:n,seconds:s}=time){x.textContent=t,g.textContent=o,k.textContent=n,q.textContent=s}function r(t){return String(t).padStart(2,"0")}h("#datetime-picker",l);function T(t){const i=r(Math.floor(t/864e5)),m=r(Math.floor(t%864e5/36e5)),y=r(Math.floor(t%864e5%36e5/6e4)),S=r(Math.floor(t%864e5%36e5%6e4/1e3));return{days:i,hours:m,minutes:y,seconds:S}}const v=document.querySelector(".curent-value_week"),w=document.querySelector(".curent-value_day"),M=document.querySelector(".curent-value_month"),b=document.querySelector(".curent-value_year");document.querySelector(".clock-box");const _=document.querySelector(".clock-seconds"),I=document.querySelector(".clock-minutes"),H=document.querySelector(".clock-hours"),N=["Неділя","Понеділок","Вівторок","Середа","Четвер","Пятниця","Субота"],L=["Січень","Лютий","Березень","Квітень","Травень"," Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],a=new Date,z=N[a.getDay()],E=L[a.getMonth()];b.textContent=a.getFullYear();v.textContent=z;M.textContent=E;w.textContent=a.getDate();setInterval(()=>{const t=new Date;_.textContent=t.getSeconds().toString().padStart(2,"0"),I.textContent=t.getMinutes().toString().padStart(2,"0"),H.textContent=t.getHours().toString().padStart(2,"0")},1e3);
//# sourceMappingURL=commonHelpers2.js.map
