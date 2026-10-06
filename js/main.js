const mb=document.getElementById('mb'),menu=document.getElementById('menu');
function tog(o){menu.hidden=!o;mb.setAttribute('aria-expanded',o);mb.textContent=o?'CLOSE':'MENU';document.body.style.overflow=o?'hidden':''}
mb.onclick=()=>tog(menu.hidden);menu.addEventListener('click',e=>{if(e.target.tagName==='A')tog(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden)tog(false)});
document.getElementById('yr').textContent=new Date().getFullYear();
// Temporary: opens the visitor's email app. Replace with Formspree / a Vercel function when ready.
const TO='hello@example.com'; // TODO: your real email
document.querySelectorAll('form.mail').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();
const d=[...new FormData(f)].map(([k,v])=>k.toUpperCase()+': '+v).join('\n');
location.href='mailto:'+TO+'?subject='+encodeURIComponent(f.dataset.subject)+'&body='+encodeURIComponent(d+'\nCONSENT: given');}));
