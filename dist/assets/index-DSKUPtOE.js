(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}})();const u=["Call mom","Buy groceries","Buy cat food"],m=e=>{const t=listTemplate.content.cloneNode(!0);return t.querySelector(".list").id="list"+Date.now(),t.querySelector(".list-task").innerText=e,t},y=()=>{const e=document.querySelectorAll(".list");tasksTotal.innerText=e.length},f=()=>{const e=document.querySelectorAll(".list input:checked");doneTasksTotal.innerText=e.length},p=e=>{const t=document.querySelector(`#${e}`);window.confirm("Are you sure to delete ?")&&(t.classList.add("animate__animated","animate__fadeOutRight"),t.addEventListener("animationend",()=>{t.remove()}))},k=e=>{const t=document.querySelector(`#${e}`),r=t.querySelector(".list-task"),i=t.querySelector(".list-edit-btn"),s=t.querySelector(".list-done-check");i.setAttribute("disabled",!0),s.setAttribute("disabled",!0);const n=r.innerText,o=document.createElement("input");o.className="border border-stone-950 px-2 py-1 w-[180px]",o.value=n,r.after(o),o.focus(),r.classList.add("hidden"),o.addEventListener("blur",()=>{i.removeAttribute("disabled"),s.removeAttribute("disabled"),r.innerText=o.value,r.classList.remove("hidden"),o.remove()}),o.addEventListener("keyup",d=>{d.key==="Enter"&&(i.removeAttribute("disabled"),s.removeAttribute("disabled"),r.innerText=o.value,r.classList.remove("hidden"),o.remove())})},a=e=>{const t=e.querySelector(".list-task"),r=e.querySelector(".list-edit-btn"),i=e.querySelector(".list-done-check");t.classList.toggle("line-through"),e.classList.toggle("opacity-20"),e.classList.add("duration-200"),e.classList.toggle("scale-90"),i.checked?r.setAttribute("disabled",!0):r.removeAttribute("disabled")},c=e=>{e.trim()&&(listGroup.prepend(m(e)),taskInput.value=null)},L=()=>{u.forEach(e=>{c(e)})},b=document.querySelector("#taskInput"),v=document.querySelector("#addTaskBtn"),l=document.querySelector("#listGroup");document.querySelector("#tasksTotal");document.querySelector("#doneTasksTotal");const h=document.querySelector("#deleteAll"),T=document.querySelector("#doneAll");document.querySelector("#listTemplate");const g=e=>{const t=e.target.closest(".list");e.target.classList.contains("list-del-btn")&&p(e.target.closest(".list").id),e.target.classList.contains("list-edit-btn")&&k(t.id),e.target.classList.contains("list-done-check")&&a(t)},q=()=>{taskInput.value.trim()?c(taskInput.value):alert("Please enter text")},S=e=>{e.key==="Enter"&&c(taskInput.value)},A=e=>{e.key},E=()=>{confirm("Are you sure you want to remove all lists?")&&l.querySelectorAll(".list").forEach(t=>{t.classList.add("animate__animated","animate__backOutRight"),t.addEventListener("animationend",()=>{t.remove()})})},O=()=>{const e=l.querySelectorAll(".list"),t=Array.from(e).some(r=>!r.querySelector(".list-done-check").checked);confirm(`Are you sure you want to ${t?"mark":"unmark"} all lists as done?`)&&e.forEach(r=>{r.querySelector(".list-done-check").checked=t,a(r)})},w=()=>{v.addEventListener("click",q),l.addEventListener("click",g),b.addEventListener("keyup",S),l.addEventListener("keyup",A),h.addEventListener("click",E),T.addEventListener("click",O)},I=()=>{const e=()=>{y(),f()},t={attributes:!0,childList:!0,subtree:!0};new MutationObserver(e).observe(l,t)};class x{init(){I(),L(),w()}}const _=new x;_.init();
