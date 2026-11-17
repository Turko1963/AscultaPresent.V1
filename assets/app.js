/* ASCULTA AI hub · shared shell: navigation, roles, theme, toasts, drawer, palette, demo bus */
(function(){
const D=window.ASC;
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const store={get(k,d){try{const v=localStorage.getItem(k);return v===null?d:JSON.parse(v)}catch(_){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(_){}}};
const ss={get(k){try{return sessionStorage.getItem(k)}catch(_){return null}},set(k,v){try{sessionStorage.setItem(k,v)}catch(_){}}};

const I={
 logo:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M4 10v4M8 6v12M12 3v18M16 7v10M20 10v4"/></svg>',
 dash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="2"/><rect x="14" y="3" width="7" height="5" rx="2"/><rect x="14" y="12" width="7" height="9" rx="2"/><rect x="3" y="16" width="7" height="5" rx="2"/></svg>',
 live:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="2.5"/><path d="M7.8 7.8a6 6 0 000 8.4M16.2 7.8a6 6 0 010 8.4M4.9 4.9a10 10 0 000 14.2M19.1 4.9a10 10 0 010 14.2"/></svg>',
 conv:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 01-11.6 7.1L4 20.5l1.4-4.9A8 8 0 1121 12z"/><path d="M8.5 11h7M8.5 14.5h4"/></svg>',
 risk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 4.6-3.3 8-8 9.5C7.3 20 4 16.6 4 12V6z"/><path d="M12 8v5M12 16.5v.5"/></svg>',
 coach:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.6 10.8c.6.5 1 1.2 1 2V16h5.2v-.2c0-.8.4-1.5 1-2A6 6 0 0012 3z"/></svg>',
 agents:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.5-3.6 3.2-6 6.5-6s6 2.4 6.5 6"/><path d="M16 4.6a3.5 3.5 0 010 6.8M18.5 14.5c1.7.9 2.8 2.7 3 5.5"/></svg>',
 cust:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="15" rx="2.5"/><circle cx="9" cy="11" r="2.3"/><path d="M5.8 16.5c.5-1.7 1.7-2.6 3.2-2.6s2.7.9 3.2 2.6M14.5 10h4M14.5 13.5h3"/></svg>',
 pilot:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4c3.3 0 6 0 6 0s0 2.7 0 6l-6.5 6.5-6-6z"/><path d="M7.5 10.5L4 12l2.5 2.5M13.5 16.5L12 20l-2.5-2.5M6.5 17.5L4 20"/><circle cx="15.5" cy="8.5" r="1.3"/></svg>',
 home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10.5L12 4l8 6.5V20H4z"/><path d="M10 20v-5h4v5"/></svg>',
 phone:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 3h3l1.6 4.2-2.1 1.5a12 12 0 006.2 6.2l1.5-2.1L21 14.4v3c0 1.4-1.1 2.6-2.6 2.6C10.5 20 4 13.5 4 5.6 4 4.1 5.2 3 6.6 3z"/></svg>',
 list:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"/></svg>',
 out:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10"/></svg>',
 sun:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
 moon:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z"/></svg>',
 search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
 spark:'<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8zM19 15l.9 2.6 2.6.9-2.6.9L19 22l-.9-2.6-2.6-.9 2.6-.9z"/></svg>',
 play:'<svg width="12" height="12" viewBox="0 0 12 14" fill="currentColor"><path d="M0 0l12 7-12 7z"/></svg>',
 pause:'<svg width="12" height="12" viewBox="0 0 12 14" fill="currentColor"><path d="M0 0h4v14H0zm8 0h4v14H8z"/></svg>',
 x:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
 arrow:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
 bell:'<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5a6 6 0 00-6 6v3.7L4 16v1.5h16V16l-2-3.8V8.5a6 6 0 00-6-6zM9.5 19a2.5 2.5 0 005 0z"/></svg>',
 menu:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
 check:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>'
};

/* ---------- roles & navigation ---------- */
const NAV={
 manager:[
  ['Overview',[['dashboard','Dashboard',I.dash],['live','Live monitor',I.live,'live']]],
  ['Conversations',[['conversations','All conversations',I.conv],['risks','Risk alerts',I.risk,'risk']]],
  ['People',[['coaching','Coaching playbook',I.coach,'new'],['agents','Agents',I.agents],['customers','Customer profiles',I.cust]]],
  ['Pilot',[['pilot','Pilot week',I.pilot]]]],
 agent:[
  ['My work',[['agent-home','My day',I.home],['agent-live','Live call',I.phone],['agent-calls','My calls',I.list]]]]
};
NAV.lead=NAV.manager.slice(0,3);
const ROLE_OK={manager:null,lead:null,agent:['agent-home','agent-live','agent-calls']};
const QROLE=new URLSearchParams(location.search).get('role');
const role=()=>QROLE||store.get('asc-role','manager');
const handled=()=>store.get('asc-handled',[]);
const openRisks=()=>D.risks.filter(r=>!handled().includes(r.id));

function theme(t){document.documentElement.dataset.theme=t;store.set('asc-theme',t);const b=$('#thBtn');if(b)b.innerHTML=(t==='light'?I.moon+' Dark':I.sun+' Light')}

function shell(){
 const page=document.body.dataset.page; if(!page)return;
 const r=role();
 if(r==='agent'&&!ROLE_OK.agent.includes(page)){location.replace('agent-home.html');return}
 if(r==='lead'&&page==='pilot'){location.replace('dashboard.html');return}
 if(r!=='agent'&&page.startsWith('agent-')&&!new URLSearchParams(location.search).has('as')){/* managers may preview agent screens */}
 const asAgent=page.startsWith('agent-'),preview=asAgent&&r!=='agent';
 const me=asAgent?D.me.agent:(D.me[r]||D.me.manager);
 const nav=(asAgent?NAV.agent:(NAV[r]||NAV.manager)).map(([g,items])=>`<div class="nav-g">${g}</div><nav class="nav">${items.map(([id,label,ic,b])=>{
   let badge='';if(b==='risk'){const n=openRisks().length;badge=n?`<span class="badge" data-risk-badge>${n}</span>`:''}
   if(b==='live')badge='<span class="badge t">8</span>'; if(b==='new')badge='<span class="badge t">NEW</span>';
   return `<a href="${id}.html"${id===page?' aria-current="page"':''}>${ic}<span>${label}</span>${badge}</a>`}).join('')}</nav>`).join('');
 const side=document.createElement('aside');side.className='side';side.id='side';
 side.innerHTML=`<a class="brand" href="${asAgent?'agent-home':'dashboard'}.html"><span class="brand-mk">${I.logo}</span><span class="brand-tx">ASCULTA <b>AI</b><small>CONVERSATION INTELLIGENCE</small></span></a>${nav}
  <div class="side-foot">${preview?`<a class="btn sm gh" href="dashboard.html" style="justify-content:flex-start">← Back to manager view</a>`:''}<div class="me"><span class="av t">${me.ini}</span><div><b>${me.name}</b><small>${me.role}</small></div></div>
  <div class="side-acts"><button id="thBtn" type="button"></button><a href="login.html" id="outBtn">${I.out} Sign out</a></div></div>`;
 const main=$('main');const wrap=document.createElement('div');wrap.className='shell';
 main.classList.add('main');main.parentNode.insertBefore(wrap,main);wrap.append(side,main);
 const top=document.createElement('header');top.className='top';
 const crumb=document.body.dataset.crumb||'';
 top.innerHTML=`<button class="menu-btn" id="menuBtn" aria-label="Menu">${I.menu}</button><span class="crumb">ASCULTA AI · <b>${crumb}</b></span>
  <button class="ask" id="askBtn" type="button">${I.spark}<span>Ask ASCULTA, e.g. "who needs coaching today?"</span><kbd>Ctrl K</kbd></button>
  <span class="live-pill"><i class="dot pulse"></i>${asAgent?(preview?'AGENT VIEW · PREVIEW':'CONNECTED'):'LISTENING · 100%'}</span>`;
 main.prepend(top);
 $('#menuBtn').onclick=()=>side.classList.toggle('open');
 $('#thBtn').onclick=()=>theme(document.documentElement.dataset.theme==='light'?'dark':'light');theme(store.get('asc-theme','dark'));
 $('#askBtn').onclick=()=>palette(true);
 // ambient live risk alert for managers, once per session
 if(r!=='agent'&&!page.startsWith('agent-')&&!ss.get('asc-live-risk')&&page!=='risks'){
  setTimeout(()=>{if(ss.get('asc-live-risk'))return;ss.set('asc-live-risk','1');
   toast({kind:'rk',icon:I.bell,title:'Risk detected · live call',text:'Lior Katz · Sales desk: "there\'s no risk at all with this one"',actions:[['Review','risks.html?r=r4'],['Later',null]]})},16000)}
}

/* ---------- toast ---------- */
function toast(o){let h=$('.toasts');if(!h){h=document.createElement('div');h.className='toasts';document.body.append(h)}
 const t=document.createElement('div');t.className='toast '+(o.kind||'ok');
 t.innerHTML=`<span style="color:${o.kind==='rk'?'var(--risk)':'var(--teal)'}">${o.icon||I.check}</span><div style="flex:1"><b>${o.title}</b>${o.text?`<p>${o.text}</p>`:''}${o.actions?`<div class="ta">${o.actions.map(([l,u],i)=>`<button class="btn sm ${i?'gh':'pri'}" data-i="${i}">${l}</button>`).join('')}</div>`:''}</div>`;
 h.append(t);const kill=()=>{t.classList.add('out');setTimeout(()=>t.remove(),300)};
 $$('[data-i]',t).forEach(b=>b.onclick=()=>{const a=o.actions[+b.dataset.i];if(typeof a[1]==='function')a[1]();else if(a[1])location.href=a[1];kill()});
 setTimeout(kill,o.ms||(o.actions?9000:3600));return t}

/* ---------- drawer ---------- */
let scrim,drw;
function drawer(o){if(!drw){scrim=document.createElement('div');scrim.className='scrim';drw=document.createElement('aside');drw.className='drawer';drw.setAttribute('role','dialog');document.body.append(scrim,drw);scrim.onclick=closeDrawer;addEventListener('keydown',e=>{if(e.key==='Escape')closeDrawer()})}
 drw.innerHTML=`<div class="drawer-h"><div style="min-width:0">${o.pre||''}<h3>${o.title}</h3>${o.sub?`<p class="muted" style="font-size:13.5px;margin-top:4px">${o.sub}</p>`:''}</div><button class="x" aria-label="Close">${I.x}</button></div><div class="drawer-b">${o.body}</div>${o.foot?`<div class="drawer-f">${o.foot}</div>`:''}`;
 $('.x',drw).onclick=closeDrawer;requestAnimationFrame(()=>{scrim.classList.add('on');drw.classList.add('on')});o.onOpen&&o.onOpen(drw);return drw}
function closeDrawer(){if(!drw)return;scrim.classList.remove('on');drw.classList.remove('on')}

/* ---------- palette (Ask ASCULTA) ---------- */
const SCREENS=[['dashboard','Dashboard','Overview'],['live','Live monitor','Overview'],['conversations','All conversations','Conversations'],['risks','Risk alerts','Conversations'],['coaching','Coaching playbook','People'],['agents','Agents','People'],['customers','Customer profiles','People'],['pilot','Pilot week','Pilot'],['agent-home','My day (agent view)','Agent'],['agent-live','Live call (agent view)','Agent'],['agent-calls','My calls (agent view)','Agent'],['index','Landing page','Site'],['login','Sign in','Site'],['presentation','Presentation','Site']];
const QA=[
 ['Who needs coaching today?','<b>Tom Harel</b> (score 58) and <b>Lior Katz</b> (66). Both have an open high-severity compliance alert and low adoption of the approved risk wording (38% and 52%). Coaching on risk wording is the fastest win.','agents'],
 ['What is working on the retention desk?','<b>Show actual costs before the offer</b>, learned from Maya. Calls that use it convert <b>2.1 points</b> higher. Noa and Shira already use it; Dana is at 54% adoption.','coaching'],
 ['Which calls had a risk today?','<b>5 calls</b>: a guaranteed-profit claim (Tom), a missing risk disclaimer (Lior), a skipped fee disclosure (Dana), deadline pressure (Eli) and a discount outside policy (Avi).','risks'],
 ['How many conversations were analyzed?','<b>1,284 of 1,284</b> today. 100% coverage, compared with about 3% when managers sample calls by hand.','conversations'],
 ['Which customers are at risk of leaving?','<b>3 profiles</b> are marked at risk: C-51907, C-55120 and C-61008. Each has a "before next call" brief ready for the agent.','customers']];
let pal;
function palette(open){if(!pal){pal=document.createElement('div');pal.className='pal';pal.innerHTML=`<div class="pal-box" role="dialog" aria-label="Ask ASCULTA"><div class="pal-in">${I.spark}<input id="palIn" placeholder="Ask a question or jump to a screen" autocomplete="off"><kbd class="mono faint" style="font-size:11px">ESC</kbd></div><div class="pal-ans" id="palAns"></div><div class="pal-res" id="palRes"></div></div>`;document.body.append(pal);
  pal.onclick=e=>{if(e.target===pal)palette(false)};$('#palIn').oninput=e=>palRender(e.target.value);
  $('#palIn').onkeydown=e=>{const b=$$('#palRes button');let i=b.findIndex(x=>x.classList.contains('sel'));if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();b[i]&&b[i].classList.remove('sel');i=(i+(e.key==='ArrowDown'?1:-1)+b.length)%b.length;b[i]&&b[i].classList.add('sel')}if(e.key==='Enter'){(b[i]||b[0])&&(b[i]||b[0]).click()}}}
 pal.classList.toggle('on',open);if(open){$('#palIn').value='';$('#palAns').classList.remove('on');palRender('');setTimeout(()=>$('#palIn').focus(),20)}}
function palRender(q){q=q.toLowerCase().trim();const r=role();
 const scr=SCREENS.filter(s=>r!=='agent'||s[0].startsWith('agent')).filter(s=>!q||s[1].toLowerCase().includes(q));
 const qa=r==='agent'?[]:QA.filter(x=>!q||x[0].toLowerCase().includes(q)||q.split(' ').some(w=>w.length>3&&x[0].toLowerCase().includes(w)));
 $('#palRes').innerHTML=qa.map((x,i)=>`<button data-q="${i}">${I.spark}<span>${x[0]}</span><small>Ask</small></button>`).join('')+scr.map(s=>`<button data-go="${s[0]}">${I.arrow}<span>${s[1]}</span><small>${s[2]}</small></button>`).join('')||'<div class="empty">Nothing matches. Try "coaching" or "risk".</div>';
 $$('#palRes [data-go]').forEach(b=>b.onclick=()=>location.href=b.dataset.go+'.html');
 $$('#palRes [data-q]').forEach(b=>b.onclick=()=>{const x=qa[+b.dataset.q];const a=$('#palAns');a.innerHTML=`<div class="eyebrow" style="margin-bottom:6px">ASCULTA AI</div>${x[1]}<div style="margin-top:10px"><a class="btn sm pri" href="${x[2]}.html">Open ${SCREENS.find(s=>s[0]===x[2])[1]} ${I.arrow}</a></div>`;a.classList.add('on')})}
addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();palette(!(pal&&pal.classList.contains('on')))}if(e.key==='Escape'&&pal)palette(false)});

/* ---------- helpers ---------- */
let seed=11;const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647;
function wave(el,n=48,still){let h='';for(let i=0;i<n;i++){const e=.35+.65*Math.abs(Math.sin(i*.37)*Math.cos(i*.11));h+=`<i style="--h:${Math.max(18,Math.round((25+rnd()*75)*e))};--d:${(.45+rnd()*.8).toFixed(2)}s;--dl:-${(rnd()*1.2).toFixed(2)}s"></i>`}el.innerHTML=h;if(still)el.classList.add('still');return el}
function spark(vals,{w=120,h=36,color='var(--teal)',fill=true}={}){const mn=Math.min(...vals),mx=Math.max(...vals),r=mx-mn||1;const pts=vals.map((v,i)=>[i/(vals.length-1)*w,h-4-(v-mn)/r*(h-8)]);
 const d=pts.map((p,i)=>(i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)).join(' ');
 return `<svg class="spark" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">${fill?`<path d="${d} L${w} ${h} L0 ${h}Z" fill="${color}" opacity=".12"/>`:''}<path d="${d}" fill="none" stroke="${color}" stroke-width="2" vector-effect="non-scaling-stroke" stroke-linejoin="round" stroke-linecap="round"/></svg>`}
const KIND={obj:['Objection','am'],int:['Intent',''],pref:['Preference','vi'],need:['Need',''],rk:['Risk','rk'],tip:['Tip applied','ok'],ok:['Outcome','ok']};
function marks(s){return s.replace(/\[\[(.+?)\|(\w+)\]\]/g,(m,t,k)=>`<mark class="${k==='rk'?'rk':k==='obj'?'am':''}" title="${KIND[k]?KIND[k][0]:''}">${t}</mark>`)}
function kinds(s){return [...s.matchAll(/\[\[(.+?)\|(\w+)\]\]/g)].map(m=>m[2])}
const mmss=s=>{s=Math.max(0,Math.floor(s));return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')};
const outPill=o=>`<span class="pill ${o==='Lost'?'rk':o==='Follow-up'?'am':o==='Converted'?'ok':''}">${o}</span>`;
const sevPill=s=>`<span class="pill ${s==='High'?'rk solid':s==='Medium'?'am':'gy'}">${s}</span>`;
const av=(a,cls='')=>`<span class="av ${cls}">${a.ini}</span>`;
function count(el,to,{dur=900,fmt=v=>Math.round(v).toLocaleString('en-US')}={}){const t0=performance.now(),from=0;(function f(now){const k=Math.min(1,(now-t0)/dur),e=1-Math.pow(1-k,3);el.textContent=fmt(from+(to-from)*e);if(k<1)requestAnimationFrame(f)})(t0)}
function setHandled(id){const h=handled();if(!h.includes(id)){h.push(id);store.set('asc-handled',h)}const n=openRisks().length;$$('[data-risk-badge]').forEach(b=>{b.textContent=n;b.style.display=n?'':'none'})}

/* ---------- demo bus (the presentation drives screens through postMessage) ---------- */
const actions={};
function act(name,fn){actions[name]=fn}
addEventListener('message',e=>{const m=e.data;if(!m||!m.asc)return;if(m.asc==='reset'){try{localStorage.removeItem('asc-handled');localStorage.removeItem('asc-mycalls')}catch(_){}ss.set('asc-live-risk','1');location.reload();return}
 if(m.asc==='theme'){theme(m.v);return}if(m.asc==='role'){store.set('asc-role',m.v);return}const f=actions[m.asc];if(f)f(m.v)});
if(window.self!==window.top)ss.set('asc-live-risk','1');

Object.assign(window.ASC,{$,$$,I,store,toast,drawer,closeDrawer,palette,wave,spark,marks,kinds,KIND,mmss,outPill,sevPill,av,count,role,handled,openRisks,setHandled,act,theme});
document.documentElement.dataset.theme=store.get('asc-theme','dark');
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',shell);else shell();
})();
