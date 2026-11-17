/* ASCULTA AI hub · shared composite components */
(function(){
const X=window.ASC,{$,$$,I}=X;

/* risk review drawer */
X.reviewRisk=function(id,onDone){const r=X.risks.find(x=>x.id===id);if(!r)return;const a=X.A[r.agent],c=X.C[r.call];const done=X.handled().includes(id);
 const dr=X.drawer({pre:`<div style="display:flex;gap:6px;margin-bottom:8px">${X.sevPill(r.sev)}<span class="pill gy">${r.cat}</span></div>`,title:r.title,sub:`${a.name} · ${a.desk} desk · flagged at ${r.at} in the call · ${r.when}`,
  body:`<div><div class="eyebrow" style="margin-bottom:8px">Flagged moment</div><div style="position:relative"><div class="wave" id="rvWave" style="height:46px"></div><i style="position:absolute;top:-6px;bottom:-6px;left:${r.mark*100-4}%;width:8%;border-radius:6px;background:var(--risk-bg);border-inline:2px solid var(--risk)"></i><span class="mono" style="position:absolute;top:-22px;left:${r.mark*100-4}%;font-size:10.5px;color:var(--risk-tx)">${r.at}</span></div></div>
   <div class="tag-q rk">"${r.quote}"</div>
   <p style="font-size:14.5px"><b>Why it was flagged:</b> <span class="muted">${r.why}</span></p>
   <div class="card flat" style="padding:14px 16px"><div class="eyebrow" style="margin-bottom:6px">Suggested wording for the agent</div><p style="font-size:14.5px">${r.id==='r1'||r.id==='r4'?'"All investments carry risk, and returns are not guaranteed. Let me show you how this one manages it."':r.id==='r2'?'"Before I confirm: the old plan has an exit fee of 15 dollars. Shall I go ahead?"':r.id==='r3'?'"Take the time you need. Can I call you Thursday to answer any questions?"':'"Let me check what discount I can approve and call you back today."'}</p></div>
   <div><div class="eyebrow" style="margin-bottom:8px">Call context</div><div class="row" style="padding:10px 0"><span class="av">${a.ini}</span><div><b>${c.cust} · ${c.dur}</b><small>${c.summary.slice(0,120)}…</small></div></div></div>
   <div id="rvDone" style="display:${done?'flex':'none'};align-items:center;gap:10px;padding:12px 14px;border-radius:12px;background:var(--accent-bg);color:var(--accent-tx);font-weight:700">${I.check} Handled. Coaching on risk wording assigned to ${a.name.split(' ')[0]}.</div>`,
  foot:`<button class="btn pri" id="rvHandle"${done?' disabled style="opacity:.5"':''}>${I.check} Mark as handled</button><button class="btn gh" id="rvCoach">Assign coaching</button><a class="btn gh" href="call.html?id=${c.id}" style="margin-left:auto">Open full call ${I.arrow}</a>`});
 X.wave($('#rvWave',dr),64,true);
 const fin=()=>{X.setHandled(id);$('#rvDone',dr).style.display='flex';const b=$('#rvHandle',dr);b.disabled=true;b.style.opacity=.5;X.toast({title:'Risk handled',text:`${r.title} · ${a.name}. Coaching assigned.`});onDone&&onDone(id)};
 $('#rvHandle',dr).onclick=fin;$('#rvCoach',dr).onclick=()=>{X.toast({title:'Coaching assigned',text:`"Use the approved risk wording" added to ${a.name.split(' ')[0]}'s coaching plan.`})};
 return dr};

/* agent drawer */
X.agentDrawer=function(id){const a=X.A[id];const cs=X.calls.filter(c=>c.agent===id);
 X.drawer({pre:`<div style="display:flex;gap:12px;align-items:center;margin-bottom:10px"><span class="av lg ${a.top?'t':''}">${a.ini}</span>${a.top?'<span class="pill ok">Top performer</span>':a.low?'<span class="pill rk">Needs coaching</span>':''}</div>`,title:a.name,sub:`${a.desk} desk · ${a.calls} calls today · ${a.talk} talk time`,
  body:`<div class="grid g3"><div class="kpi"><label>Coaching score</label><strong>${a.score}</strong></div><div class="kpi"><label>Conversion</label><strong>${a.conv}%</strong></div><div class="kpi"><label>Tips applied</label><strong>${a.tips}%</strong></div></div>
  <div class="card flat"><div class="card-h"><h3>Score, last 8 weeks</h3></div>${X.spark(a.trend,{w:400,h:60,color:a.low?'var(--amber)':'var(--teal)'})}</div>
  <div><div class="eyebrow" style="margin-bottom:8px">What ASCULTA sees working</div>${a.strengths.map(s=>`<div class="row" style="padding:8px 0"><i class="ck"></i><span>${s}</span></div>`).join('')}</div>
  <div class="card flat"><div class="eyebrow" style="margin-bottom:6px">Coaching focus</div><p style="font-size:15px">${a.focus}</p></div>
  <div><div class="eyebrow" style="margin-bottom:6px">Recent conversations</div>${cs.map(c=>`<a class="row" href="call.html?id=${c.id}"><div><b>${c.cust} · ${c.when}</b><small>${c.dur} · score ${c.score}</small></div><span class="end">${c.risk?'<span class="pill rk">Risk</span>':''}${X.outPill(c.outcome)}</span></a>`).join('')||'<p class="note">No analyzed calls in the sample set.</p>'}</div>`,
  foot:`<button class="btn pri" id="agCoach">Assign coaching</button><button class="btn gh" id="agListen">${I.live} Listen to live call</button>`});
 $('#agCoach').onclick=()=>X.toast({title:'Coaching assigned',text:`Next tip set for ${a.name.split(' ')[0]}: ${a.focus.split('.')[0]}.`});
 $('#agListen').onclick=()=>location.href='live.html?a='+id};

/* line chart */
X.lineChart=function(el,vals,labels,{suffix='%',color='var(--teal)',h=200}={}){const w=640,pad=[16,10,26,36];const mn=Math.floor(Math.min(...vals)-.5),mx=Math.ceil(Math.max(...vals)+.5);
 const x=i=>pad[3]+i/(vals.length-1)*(w-pad[1]-pad[3]),y=v=>pad[0]+(1-(v-mn)/(mx-mn))*(h-pad[0]-pad[2]);
 const d=vals.map((v,i)=>(i?'L':'M')+x(i).toFixed(1)+' '+y(v).toFixed(1)).join(' ');
 let g='';for(let k=0;k<=3;k++){const v=mn+(mx-mn)*k/3;g+=`<line x1="${pad[3]}" x2="${w-pad[1]}" y1="${y(v)}" y2="${y(v)}" stroke="var(--line)"/><text x="${pad[3]-8}" y="${y(v)+4}" text-anchor="end" font-size="11" fill="var(--tx-3)" font-family="JetBrains Mono">${(Math.abs(v-Math.round(v))<.05?v.toFixed(0):v.toFixed(1))}${suffix}</text>`}
 const lab=labels.map((l,i)=>l?`<text x="${x(i)}" y="${h-6}" text-anchor="middle" font-size="11" fill="var(--tx-3)" font-family="JetBrains Mono">${l}</text>`:'').join('');
 const last=vals.length-1;
 el.innerHTML=`<svg viewBox="0 0 ${w} ${h}" width="100%" style="display:block;overflow:visible">${g}${lab}<path d="${d} L${x(last)} ${h-pad[2]} L${x(0)} ${h-pad[2]}Z" fill="${color}" opacity=".10"/><path d="${d}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" pathLength="1" style="stroke-dasharray:1;stroke-dashoffset:1;animation:draw 1.2s .1s forwards"/>
  <circle cx="${x(last)}" cy="${y(vals[last])}" r="5" fill="${color}"/><circle cx="${x(last)}" cy="${y(vals[last])}" r="11" fill="${color}" opacity=".2"/></svg>`;
 if(!document.getElementById('drawKf')){const s=document.createElement('style');s.id='drawKf';s.textContent='@keyframes draw{to{stroke-dashoffset:0}}';document.head.append(s)}};
})();
