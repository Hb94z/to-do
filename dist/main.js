(()=>{"use strict";let e=0,t=[];(()=>{let e=document.getElementById("add-project");document.getElementById("add").addEventListener("click",(()=>{e.style.display="block",window.onclick=function(t){t.target==e&&(e.style.display="none")}}))})(),(()=>{let o=document.getElementById("addprojectform");o.addEventListener("submit",(l=>{l.preventDefault();let d=document.getElementById("add-project"),c=document.getElementById("project-name").value,r=document.getElementById("description").value,i=document.getElementById("deadline").value;console.log(c,r,i),d.style.display="none";let a=n(c,r,i,[]);t.push(a),console.log(t),console.log(a.deadline),function(t){let o=document.getElementById("project-template").content.cloneNode(!0),n=document.getElementById("project-container"),l=o.querySelector(".title1"),d=o.querySelector(".description1"),c=o.querySelector(".deadline1"),r=o.querySelector(".new-project"),i=o.querySelector(".to-do-form");r.setAttribute("data-num",e),i.setAttribute("data-num",e);let a=t.title,m=t.description,u=a.charAt(0).toUpperCase()+a.slice(1),s=m.charAt(0).toUpperCase()+m.slice(1);l.innerHTML=u,d.innerHTML=s,c.innerHTML="Deadline: "+t.deadline,n.appendChild(o),t.dataNum=`${e}`,t.toDoItemReferenceNum=0,e++,r.getAttribute("data-num")}(a),o.reset()}))})();let o=(e,t)=>({todoitem:e,reference:t}),n=(e,t,o,n)=>({title:e,description:t,deadline:o,toDos:n});document.getElementById("project-container").addEventListener("click",(function(){let e=event.target;if("edit-to-dos"===event.target.className){console.log("hello");let n=e.parentNode.parentNode.getAttribute("data-num");console.log(n),function(e){let n=document.getElementById("add-to-do");console.log(e),n.style.display="block";let l="";window.onclick=function(e){e.target==n&&(n.style.display="none")};let d=document.getElementById("addToDoForm");console.log(e),d.addEventListener("submit",(function n(c){c.preventDefault();let r=document.getElementById("add-to-do"),i=document.getElementById("To-Do-Name").value;console.log(e),r.style.display="none",l=t.find((t=>t.dataNum===e));let a=l.toDos,m=e+l.toDoItemReferenceNum,u=o(i,m);l.toDos.push(u),d.reset(),console.log(t),function(e,t,o,n){console.log(t.title),document.querySelectorAll(".to-do-form").forEach((l=>{let d=l.getAttribute("data-num");if(console.log(d),d===e){let l=document.getElementById("check-box-to-do-item").content.cloneNode(!0),c=l.querySelector(".check-box-container"),r=document.querySelector(`form[data-num="${d}"]`),i=l.querySelector(".to-do-label"),a=l.querySelector(".to-do-item"),m=l.querySelector(".del-to-do");a.id=n,i.htmlFor=e+t.toDoItemReferenceNum,m.id="remove"+e+t.toDoItemReferenceNum,c.setAttribute("to-do-num",n);let u=o[t.toDoItemReferenceNum].todoitem,s=u.charAt(0).toUpperCase()+u.slice(1);i.innerHTML=s,t.toDoItemReferenceNum++,r.appendChild(l)}}))}(e,l,a,m),d.removeEventListener("submit",n,!1)}),!1)}(n)}if("Remove"===event.target.className){document.querySelector(".project-info");let o=e.parentNode.getAttribute("data-num");console.log(o),t=t.filter(((e,t)=>{if(e.dataNum===o){console.log(e),console.log("num is"+e.dataNum);let t=document.querySelector(`div[data-num="${o}"]`);return t.parentNode.removeChild(t),!1}return!0}))}if("del-to-do"===event.target.className){console.log("hello"+event.target.id);let o=event.target.id.slice(-2),n=o.substring(1);console.log(n+"this is removereference num");let l=e.parentNode.parentNode.getAttribute("data-num");return console.log(l+"this is datanum"),void function(e,o,n){console.log("removeid is"+e+"removereferencenum is"+o+"datanum is"+n);let l=t.find((e=>e.dataNum===n)),d=l.toDos;const c=d.findIndex((t=>t.reference===e));if(console.log(c+"this is idk"),console.log(l),d[c].reference==e){console.log(l),console.log("num is"+l.dataNum);let o=document.querySelector(`div[to-do-num="${e}"]`);console.log(o),o.parentNode.removeChild(o),d.splice(c,1),l.toDoItemReferenceNum--,console.log(t)}}(o,n,l)}}))})();