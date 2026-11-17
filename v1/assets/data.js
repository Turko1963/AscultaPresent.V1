/* ASCULTA AI demo data. Sample names and figures, for the design demo only. */
(function(){
const agents=[
 {id:'maya', name:'Maya Cohen',  ini:'MC', desk:'Retention', score:86, conv:18.4, tips:91, risks:0, calls:41, talk:'3h 12m', trend:[70,72,75,74,78,80,83,86], top:true,
  strengths:['Shows actual costs before any offer','Names the objection back in the customer\'s words'], focus:'Keep it up. Your fee-objection technique is now coached to the whole retention desk.'},
 {id:'noa',  name:'Noa Shapiro', ini:'NS', desk:'Retention', score:82, conv:16.9, tips:88, risks:0, calls:38, talk:'2h 58m', trend:[71,73,72,76,77,79,81,82],
  strengths:['Confirms the follow-up channel','Calm pacing after price'], focus:'Try one offer instead of two when the customer is undecided.'},
 {id:'shira',name:'Shira Golan', ini:'SG', desk:'Retention', score:80, conv:15.7, tips:84, risks:0, calls:36, talk:'2h 49m', trend:[66,68,71,72,74,76,79,80],
  strengths:['Uses customer history from the last call','Strong openings'], focus:'Show the actual cost earlier, before the customer asks.'},
 {id:'dana', name:'Dana Levi',   ini:'DL', desk:'Retention', score:78, conv:14.2, tips:79, risks:1, calls:39, talk:'3h 01m', trend:[74,73,75,76,75,77,78,78],
  strengths:['Warm tone','High first-call resolution'], focus:'State the fee terms before confirming a plan change. One medium alert this week.'},
 {id:'avi',  name:'Avi Mizrahi', ini:'AM', desk:'Sales',     score:74, conv:11.8, tips:76, risks:1, calls:44, talk:'3h 20m', trend:[62,65,66,70,69,71,73,74],
  strengths:['Fast qualification','Good at booking callbacks'], focus:'Avoid promising discounts that need approval.'},
 {id:'eli',  name:'Eli Ben-David',ini:'EB',desk:'Sales',     score:71, conv:10.9, tips:72, risks:1, calls:47, talk:'3h 34m', trend:[60,63,61,65,67,68,70,71],
  strengths:['High call volume','Clear product explanations'], focus:'Drop "decide today" pressure. Offer a follow-up instead.'},
 {id:'lior', name:'Lior Katz',   ini:'LK', desk:'Sales',     score:66, conv:9.6,  tips:64, risks:1, calls:42, talk:'3h 05m', trend:[64,62,63,61,64,65,64,66],
  strengths:['Persistent follow-ups'], focus:'Never describe an investment as having no risk. Use the approved risk wording.'},
 {id:'tom',  name:'Tom Harel',   ini:'TH', desk:'Sales',     score:58, conv:8.1,  tips:55, risks:1, calls:45, talk:'3h 41m', trend:[63,61,60,58,59,57,58,58], low:true,
  strengths:['Energetic, builds rapport quickly'], focus:'One high-severity alert: a guaranteed-profit claim. Coaching assigned on risk wording.'}
];
const A=Object.fromEntries(agents.map(a=>[a.id,a]));

/* transcript markup: [[text|kind]] kind = obj | int | pref | need | rk | tip | ok */
const calls=[
 {id:'c1', cust:'C-48213', agent:'maya', desk:'Retention', when:'Today 09:14', dur:'05:12', sec:312, outcome:'Retained', score:92, sentiment:[-.6,-.7,-.4,.1,.4,.6], risk:null,
  summary:'The customer wanted to close the account over fees. Maya acknowledged the concern, showed what the customer actually paid last year, and offered one lower-cost plan. The customer accepted and asked for the details by email.',
  profile:{Objection:'Fees too high',Intent:'Was considering closing the account',Preference:'Email follow-up',Need:'Lower monthly costs'},
  tips:[{at:'00:41',t:'Acknowledge the fee concern first. Then show the actual costs before presenting an offer.',applied:true}],
  next:'Send the plan comparison by email today. Check in after the first statement on the new plan.',
  lines:[
   [3,'c','Hi, I\'m calling because the [[fees are too high|obj]]. I\'m [[thinking of closing my account|int]].'],
   [14,'a','I understand. Let me check what we can do for you.'],
   [26,'c','I\'ve been with you four years and the costs just keep going up.'],
   [41,'a','[[You\'re right, fees matter.|tip]] [[Here is what you actually paid last year|tip]]: about 210 dollars across all charges.'],
   [63,'c','Oh. I thought it was a lot more than that.'],
   [78,'a','[[And there is one plan that lowers it|tip]] to about 140 a year, with the same features you use.'],
   [101,'c','That\'s better than I expected. Can you [[email me the details|pref]]? I just want to [[pay less|need]].'],
   [118,'a','Of course. I\'ll send the comparison right after this call.'],
   [131,'c','Great, then I\'ll stay.','ok']
  ]},
 {id:'c2', cust:'C-51907', agent:'tom', desk:'Sales', when:'Today 10:02', dur:'08:27', sec:507, outcome:'Follow-up', score:41, sentiment:[0,.1,-.2,-.3,.2,.1], risk:'r1',
  summary:'A new lead asked about losing money on the managed portfolio. Tom answered that it was basically guaranteed profit, a misleading promise. ASCULTA AI flagged the moment at 06:41 and notified the manager during the call.',
  profile:{Objection:'Worried about losing money',Intent:'Interested in the managed portfolio',Preference:'Phone call',Need:'Clear explanation of risk'},
  tips:[{at:'06:44',t:'Correct the statement now: returns are not guaranteed. Use the approved risk wording.',applied:false}],
  next:'Manager to call the lead back with the approved risk disclosure before any sign-up.',
  lines:[
   [20,'a','Thanks for your interest in the managed portfolio. What made you look at it?'],
   [44,'c','My friend uses it. But [[is there any chance I could lose money on this?|obj]]'],
   [380,'a','Look, the market has been great this year.'],
   [401,'a','Don\'t worry, [[this is basically guaranteed profit|rk]].'],
   [416,'c','Really? That sounds good. [[Can you call me tomorrow|pref]] so I can think about it?'],
   [431,'a','Sure, I\'ll call you tomorrow at the same time.']
  ]},
 {id:'c3', cust:'C-40552', agent:'dana', desk:'Retention', when:'Today 10:37', dur:'06:03', sec:363, outcome:'Retained', score:68, sentiment:[-.3,-.2,0,.2,.3,.4], risk:'r2',
  summary:'The customer was moved to a cheaper plan. Dana confirmed the change without stating the exit fee for the old plan, which the fee disclosure policy requires.',
  profile:{Objection:'Paying for features not used',Intent:'Wants a simpler plan',Preference:'SMS confirmation',Need:'Fewer features, lower price'},
  tips:[{at:'03:05',t:'Before confirming, read the fee terms of the new plan.',applied:false}],
  next:'Send the fee terms by SMS and log the disclosure.',
  lines:[
   [8,'c','I\'m [[paying for things I never use|obj]].'],
   [22,'a','Let\'s look at a simpler plan that fits how you use the account.'],
   [95,'c','Okay, [[just the basics|need]] then.'],
   [192,'a','[[Done, I\'ve switched you over|rk]]. You\'ll see it from next month.'],
   [205,'c','Perfect. [[Send me a text|pref]] to confirm?']
  ]},
 {id:'c4', cust:'C-55120', agent:'eli', desk:'Sales', when:'Today 11:20', dur:'11:46', sec:706, outcome:'Lost', score:52, sentiment:[.2,.3,.1,-.2,-.5,-.6], risk:'r3',
  summary:'Eli pressed the lead to sign the same day to get a price. The customer pulled back and ended the call without committing.',
  profile:{Objection:'Needs time to compare',Intent:'Comparing two providers',Preference:'Email',Need:'Time to decide'},
  tips:[{at:'09:52',t:'Offer a follow-up date instead of a same-day deadline.',applied:false}],
  next:'Send a comparison by email and offer a call later this week, without deadline language.',
  lines:[
   [30,'c','I\'m [[comparing you with another provider|int]].'],
   [588,'a','[[This price is only good if you decide today|rk]].'],
   [600,'c','I [[need time to think about it|obj]].'],
   [615,'a','I really can\'t hold it after today.'],
   [640,'c','Then I\'ll pass for now. [[Email me something|pref]].']
  ]},
 {id:'c5', cust:'C-60311', agent:'noa', desk:'Retention', when:'Today 11:58', dur:'04:40', sec:280, outcome:'Converted', score:88, sentiment:[-.2,0,.3,.5,.6,.7], risk:null,
  summary:'An upgrade call. Noa used the technique learned from Maya: actual costs first, then one offer. The customer upgraded on the call.',
  profile:{Objection:'Not sure the upgrade is worth it',Intent:'Open to upgrading',Preference:'Phone',Need:'Better value per month'},
  tips:[{at:'01:02',t:'Show the actual costs first, then present one fitting offer.',applied:true}],
  next:'Confirm the upgrade by email, with the first statement date.',
  lines:[
   [5,'c','[[I\'m not sure the upgrade is worth it|obj]].'],
   [62,'a','[[Here is what you paid in the last six months|tip]], and here is the same usage on the upgraded plan.'],
   [90,'c','So it\'s almost the same, and I get more?'],
   [104,'a','[[Exactly, and it\'s the one plan I\'d suggest for you|tip]].'],
   [121,'c','Okay, [[let\'s do it|ok]].','ok']
  ]},
 {id:'c6', cust:'C-38874', agent:'shira', desk:'Retention', when:'Today 12:31', dur:'03:55', sec:235, outcome:'Follow-up', score:84, sentiment:[0,.2,.3,.4,.4,.5], risk:null,
  summary:'A follow-up call. ASCULTA AI surfaced the customer\'s last objection and email preference, so Shira opened with the plan comparison the customer had asked for.',
  profile:{Objection:'Fees (from last call)',Intent:'Evaluating the plan sent last week',Preference:'Email follow-up',Need:'Lower costs'},
  tips:[{at:'00:10',t:'Open with the comparison sent last week. The customer prefers email.',applied:true}],
  next:'Callback booked for Thursday 16:00.',
  lines:[
   [10,'a','[[Last week you asked about lower fees|tip]], did the comparison I emailed help?'],
   [24,'c','Yes, I read it. I just want to check one thing with my partner.'],
   [40,'a','Of course. Shall I [[call you Thursday afternoon|pref]]?'],
   [52,'c','Thursday at four works.','ok']
  ]},
 {id:'c7', cust:'C-61008', agent:'lior', desk:'Sales', when:'Today 13:05', dur:'07:12', sec:432, outcome:'Follow-up', score:47, sentiment:[.1,.2,.2,0,.1,.2], risk:'r4',
  summary:'Lior told a lead the product had no risk at all. ASCULTA AI flagged a missing risk disclaimer and alerted the sales desk manager.',
  profile:{Objection:'First time investing',Intent:'Interested in the starter fund',Preference:'WhatsApp',Need:'Simple explanation'},
  tips:[{at:'04:20',t:'Say: "All investments carry risk. Here is how this fund manages it."',applied:false}],
  next:'Manager review, then a callback with the approved disclaimer.',
  lines:[
   [15,'c','[[It\'s my first time investing|obj]].'],
   [255,'a','Honestly, [[there\'s no risk at all with this one|rk]].'],
   [270,'c','Oh good. [[Can you send me the link on WhatsApp|pref]]?']
  ]},
 {id:'c8', cust:'C-47720', agent:'avi', desk:'Sales', when:'Today 13:40', dur:'05:30', sec:330, outcome:'Converted', score:73, sentiment:[0,.1,.3,.4,.5,.5], risk:'r5',
  summary:'The lead signed up. Avi promised a 20% loyalty discount that needs manager approval. Flagged as low severity.',
  profile:{Objection:'Price higher than competitor',Intent:'Ready to switch',Preference:'Email',Need:'A better price'},
  tips:[{at:'02:48',t:'Discounts over 10% need approval. Offer to check and call back.',applied:false}],
  next:'Manager to approve or adjust the discount before the first bill.',
  lines:[
   [20,'c','[[You\'re more expensive than the other one|obj]].'],
   [168,'a','[[I can give you twenty percent off, no problem|rk]].'],
   [180,'c','Then [[I\'ll switch today|ok]].','ok']
  ]}
];
const C=Object.fromEntries(calls.map(c=>[c.id,c]));

const risks=[
 {id:'r1', call:'c2', agent:'tom',  sev:'High',   title:'Possible misleading promise', cat:'Compliance · Guaranteed-profit claim', at:'06:41', quote:'...this is basically guaranteed profit.', why:'The agent presented profit as guaranteed in answer to a question about losing money.', when:'10:09', mark:.79},
 {id:'r4', call:'c7', agent:'lior', sev:'High',   title:'Missing risk disclaimer', cat:'Compliance · Risk wording', at:'04:15', quote:'...there\'s no risk at all with this one.', why:'Investment products must be described with the approved risk wording.', when:'13:09', mark:.59},
 {id:'r2', call:'c3', agent:'dana', sev:'Medium', title:'Fee disclosure skipped', cat:'Policy · Fee disclosure', at:'03:12', quote:'Done, I\'ve switched you over.', why:'The plan was changed without stating the exit fee of the old plan.', when:'10:40', mark:.53},
 {id:'r3', call:'c4', agent:'eli',  sev:'Medium', title:'Pressure to decide today', cat:'Conduct · High-pressure sales', at:'09:48', quote:'This price is only good if you decide today.', why:'Same-day deadlines are listed as high-pressure language in the sales policy.', when:'11:30', mark:.83},
 {id:'r5', call:'c8', agent:'avi',  sev:'Low',    title:'Discount outside policy', cat:'Policy · Approval needed', at:'02:48', quote:'I can give you twenty percent off, no problem.', why:'Discounts above 10% need manager approval.', when:'13:43', mark:.51}
];

const techniques=[
 {id:'t1', name:'Show actual costs before the offer', from:'maya', lift:'+2.1 pts', liftN:2.1, desk:'Retention', used:184, adopt:{maya:96,noa:88,shira:71,dana:54}, quote:'"Here is what you actually paid last year."', why:'Customers who see their real costs first accept an offer far more often than those offered a discount straight away.', isNew:true},
 {id:'t2', name:'Name the objection back', from:'maya', lift:'+1.4 pts', liftN:1.4, desk:'Retention', used:221, adopt:{maya:94,noa:90,shira:82,dana:77}, quote:'"You\'re right, fees matter."', why:'Repeating the objection in the customer\'s words lowers tension in the next 30 seconds of the call.'},
 {id:'t3', name:'One offer, not three', from:'noa', lift:'+1.2 pts', liftN:1.2, desk:'Retention', used:132, adopt:{noa:92,maya:85,shira:64,dana:58}, quote:'"This is the one plan I\'d suggest for you."', why:'Calls with a single recommendation convert better than calls with a menu of options.'},
 {id:'t4', name:'Book the next step on the call', from:'avi', lift:'+0.9 pts', liftN:.9, desk:'Sales', used:168, adopt:{avi:93,eli:70,lior:66,tom:49}, quote:'"Shall I call you Thursday at four?"', why:'Leads with a booked callback are twice as likely to answer the next call.'},
 {id:'t5', name:'Use the approved risk wording', from:'policy', lift:'Risk', liftN:0, desk:'Sales', used:97, adopt:{avi:88,eli:81,lior:52,tom:38}, quote:'"All investments carry risk. Here is how this one manages it."', why:'Required wording. Agents with low adoption carry most of this week\'s compliance alerts.'}
];

const customers=[
 {id:'C-48213', status:'Retained', since:'2022', last:'Today · Maya', value:'$1,240 / yr', calls:4, needs:['Lower monthly costs'], prefs:['Email follow-up','Mornings'], objections:['Fees too high'],
  history:[['Today','Retention call','Moved to the lower-cost plan. Comparison sent by email.','c1'],['3 weeks ago','Billing question','Asked why the fee went up.'],['Mar 2026','Service call','Card replaced.']],
  brief:'Stayed after seeing actual costs. Check in after the first statement on the new plan, by email.'},
 {id:'C-51907', status:'At risk', since:'New lead', last:'Today · Tom', value:'Lead', calls:1, needs:['Clear explanation of risk'], prefs:['Phone call','Tomorrow, same time'], objections:['Worried about losing money'],
  history:[['Today','Sales call','Was told profit is guaranteed. Flagged. Manager callback needed.','c2']],
  brief:'Open the callback by correcting the earlier statement. Use the approved risk wording before discussing returns.'},
 {id:'C-38874', status:'Warm', since:'2021', last:'Today · Shira', value:'$980 / yr', calls:3, needs:['Lower costs'], prefs:['Email follow-up','Thursday 16:00'], objections:['Fees (last call)'],
  history:[['Today','Follow-up','Read the comparison. Checking with partner.','c6'],['Last week','Retention call','Asked about lower fees. Comparison sent.']],
  brief:'Callback Thursday 16:00. Partner is part of the decision: offer to send the comparison to both.'},
 {id:'C-60311', status:'Converted', since:'2023', last:'Today · Noa', value:'$1,560 / yr', calls:2, needs:['Better value per month'], prefs:['Phone'], objections:['Upgrade worth it?'],
  history:[['Today','Upgrade call','Upgraded after seeing six months of costs.','c5']],
  brief:'Upgraded today. Good candidate for the referral offer in 30 days.'},
 {id:'C-55120', status:'At risk', since:'New lead', last:'Today · Eli', value:'Lead', calls:1, needs:['Time to decide'], prefs:['Email'], objections:['Needs time to compare'],
  history:[['Today','Sales call','Pressed to decide today. Pulled back.','c4']],
  brief:'Send the comparison by email. No deadline language. Suggest a call later in the week.'},
 {id:'C-40552', status:'Retained', since:'2020', last:'Today · Dana', value:'$620 / yr', calls:5, needs:['Fewer features, lower price'], prefs:['SMS confirmation'], objections:['Paying for unused features'],
  history:[['Today','Retention call','Switched to the basic plan. Fee terms still to be sent.','c3']],
  brief:'Send the fee terms by SMS today to complete the disclosure.'},
 {id:'C-61008', status:'At risk', since:'New lead', last:'Today · Lior', value:'Lead', calls:1, needs:['Simple explanation'], prefs:['WhatsApp'], objections:['First time investing'],
  history:[['Today','Sales call','Told there is no risk. Flagged.','c7']],
  brief:'First-time investor. Explain risk plainly with the approved wording before sending any link.'},
 {id:'C-47720', status:'Converted', since:'Today', last:'Today · Avi', value:'$890 / yr', calls:1, needs:['A better price'], prefs:['Email'], objections:['Price vs competitor'],
  history:[['Today','Sales call','Signed up with a 20% discount pending approval.','c8']],
  brief:'Confirm the approved discount before the first bill.'}
];

/* live calls for the monitor */
const live=[
 {agent:'maya', cust:'C-63390', desk:'Retention', start:142, tag:['Objection captured','obj'], text:'The new pricing doesn\'t work for me.'},
 {agent:'noa',  cust:'C-63402', desk:'Retention', start:61,  tag:['Tip applied','tip'], text:'Here is what you paid over the last year.'},
 {agent:'tom',  cust:'C-63417', desk:'Sales',     start:288, tag:['Listening','lis'], text:'Let me walk you through the options.'},
 {agent:'eli',  cust:'C-63421', desk:'Sales',     start:35,  tag:['Intent: comparing','int'], text:'I\'m also talking to another company.'},
 {agent:'shira',cust:'C-63428', desk:'Retention', start:199, tag:['Preference saved','pref'], text:'Email me, I don\'t pick up during work.'},
 {agent:'lior', cust:'C-63433', desk:'Sales',     start:12,  tag:['Listening','lis'], text:'Hi, I saw your ad about the starter fund.'},
 {agent:'avi',  cust:'C-63440', desk:'Sales',     start:96,  tag:['Next step booked','tip'], text:'Thursday at four works for me.'},
 {agent:'dana', cust:'C-63446', desk:'Retention', start:240, tag:['Need: lower costs','need'], text:'I just want to pay less each month.'}
];

const kpis={
 today:{conv:1284, tips:312, applied:71, cr:12.4, crd:'+2.1 pts', risks:5, val:'$48.3k', label:'Today'},
 '7d': {conv:8902, tips:2145,applied:68, cr:11.9, crd:'+1.6 pts', risks:23,val:'$311k', label:'Last 7 days'},
 '30d':{conv:37415,tips:8760,applied:64, cr:11.2, crd:'+0.9 pts', risks:88,val:'$1.18M',label:'Last 30 days'}
};
const trend={today:[10.1,10.4,10.2,10.9,11.3,11.0,11.8,12.0,11.7,12.4], '7d':[10.3,10.6,10.9,11.1,11.4,11.6,11.9], '30d':[10.0,10.1,10.3,10.2,10.5,10.6,10.8,10.7,10.9,11.0,11.1,11.2]};

window.ASC={agents,A,calls,C,risks,techniques,customers,live,kpis,trend,
 me:{manager:{name:'Noam Peretz',ini:'NP',role:'Head of Sales & Retention'},lead:{name:'Yael Ben-Ami',ini:'YB',role:'Team lead · Sales desk'},agent:{name:'Maya Cohen',ini:'MC',role:'Agent · Retention desk'}}};
})();
