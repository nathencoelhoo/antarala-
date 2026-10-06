(()=>{const K='antarala_bag',$=s=>document.querySelector(s);
const get=()=>{try{return JSON.parse(localStorage.getItem(K))||[]}catch(e){return[]}};
const set=b=>{try{localStorage.setItem(K,JSON.stringify(b))}catch(e){}cnt()};
const inr=n=>'₹'+Number(n).toLocaleString('en-IN');
const esc=s=>String(s).replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';');
const tot=()=>get().reduce((a,i)=>a+i.p*i.q,0);
function cnt(){const e=$('#bc');if(e)e.textContent=get().reduce((a,i)=>a+i.q,0)}cnt();
const buy=$('.buy');
if(buy)buy.addEventListener('submit',e=>{e.preventDefault();const d=buy.dataset,s=buy.size.value,b=get(),x=b.find(i=>i.n===d.name&&i.s===s);x?x.q++:b.push({n:d.name,p:+d.price,s,q:1});set(b);$('#added').hidden=false});
const c=$('#cart');
if(c){const r=()=>{const b=get();c.innerHTML=b.length?b.map((i,k)=>`<div class="row"><span><b>${esc(i.n)}</b><br>SIZE ${esc(i.s)} / QTY ${i.q}</span><span>${inr(i.p*i.q)}<br><button data-rm="${k}">REMOVE</button></span></div>`).join('')+`<div class="row tot"><b>TOTAL, INCL. GST</b><b>${inr(tot())}</b></div><p><a class="btn" href="/checkout">CHECKOUT</a></p>`:'<p>YOUR BAG IS EMPTY. <a href="/#capsule"><u>SEE CAPSULE 01</u></a></p>';c.querySelectorAll('[data-rm]').forEach(x=>x.onclick=()=>{const b=get();b.splice(+x.dataset.rm,1);set(b);r()})};r()}
const co=$('#co');
if(co){const b=get();$('#sum').innerHTML=b.length?b.map(i=>`<div class="row"><span>${esc(i.n)} / ${esc(i.s)} / ${i.q}</span><span>${inr(i.p*i.q)}</span></div>`).join('')+`<div class="row tot"><b>TOTAL, INCL. GST</b><b>${inr(tot())}</b></div>`:'<p>YOUR BAG IS EMPTY.</p>';
co.addEventListener('submit',e=>{e.preventDefault();const b=get();if(!b.length)return;
const d=[...new FormData(co)].map(([k,v])=>k.toUpperCase()+': '+v).join('\n');
const o=b.map(i=>`${i.n} / SIZE ${i.s} / QTY ${i.q} / ${inr(i.p*i.q)}`).join('\n');
location.href='mailto:'+(typeof TO!=='undefined'?TO:'hello@example.com')+'?subject='+encodeURIComponent('Order request')+'&body='+encodeURIComponent(d+'\n\nORDER\n'+o+'\nTOTAL '+inr(tot())+'\nCONSENTS: terms and privacy accepted');
$('#done').hidden=false})}
})();
