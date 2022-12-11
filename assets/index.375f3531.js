(function(){const N=document.createElement("link").relList;if(N&&N.supports&&N.supports("modulepreload"))return;for(const T of document.querySelectorAll('link[rel="modulepreload"]'))O(T);new MutationObserver(T=>{for(const I of T)if(I.type==="childList")for(const d of I.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&O(d)}).observe(document,{childList:!0,subtree:!0});function _(T){const I={};return T.integrity&&(I.integrity=T.integrity),T.referrerpolicy&&(I.referrerPolicy=T.referrerpolicy),T.crossorigin==="use-credentials"?I.credentials="include":T.crossorigin==="anonymous"?I.credentials="omit":I.credentials="same-origin",I}function O(T){if(T.ep)return;T.ep=!0;const I=_(T);fetch(T.href,I)}})();var tt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ct={exports:{}};(function(B,N){(function(_,O){B.exports=O()})(tt,function(){var _="minute",O=/[+-]\d\d(?::?\d\d)?/g,T=/([+-]|\d\d)/g;return function(I,d,w){var o=d.prototype;w.utc=function(e){var m={date:e,utc:!0,args:arguments};return new d(m)},o.utc=function(e){var m=w(this.toDate(),{locale:this.$L,utc:!0});return e?m.add(this.utcOffset(),_):m},o.local=function(){return w(this.toDate(),{locale:this.$L,utc:!1})};var i=o.parse;o.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),i.call(this,e)};var L=o.init;o.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else L.call(this)};var H=o.utcOffset;o.utcOffset=function(e,m){var D=this.$utils().u;if(D(e))return this.$u?0:D(this.$offset)?H.call(this):this.$offset;if(typeof e=="string"&&(e=function(S){S===void 0&&(S="");var Y=S.match(O);if(!Y)return null;var C=(""+Y[0]).match(T)||["-",0,0],E=C[0],p=60*+C[1]+ +C[2];return p===0?0:E==="+"?p:-p}(e),e===null))return this;var g=Math.abs(e)<=16?60*e:e,v=this;if(m)return v.$offset=g,v.$u=e===0,v;if(e!==0){var U=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(v=this.local().add(g+U,_)).$offset=g,v.$x.$localOffset=U}else v=this.utc();return v};var h=o.format;o.format=function(e){var m=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return h.call(this,m)},o.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*e},o.isUTC=function(){return!!this.$u},o.toISOString=function(){return this.toDate().toISOString()},o.toString=function(){return this.toDate().toUTCString()};var y=o.toDate;o.toDate=function(e){return e==="s"&&this.$offset?w(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():y.call(this)};var l=o.diff;o.diff=function(e,m,D){if(e&&this.$u===e.$u)return l.call(this,e,m,D);var g=this.local(),v=w(e).local();return l.call(g,v,m,D)}}})})(ct);const gt=ct.exports;var ut={exports:{}};(function(B,N){(function(_,O){B.exports=O()})(tt,function(){var _=1e3,O=6e4,T=36e5,I="millisecond",d="second",w="minute",o="hour",i="day",L="week",H="month",h="quarter",y="year",l="date",e="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,D=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(a){var n=["th","st","nd","rd"],t=a%100;return"["+a+(n[(t-20)%10]||n[t]||n[0])+"]"}},v=function(a,n,t){var c=String(a);return!c||c.length>=n?a:""+Array(n+1-c.length).join(t)+a},U={s:v,z:function(a){var n=-a.utcOffset(),t=Math.abs(n),c=Math.floor(t/60),r=t%60;return(n<=0?"+":"-")+v(c,2,"0")+":"+v(r,2,"0")},m:function a(n,t){if(n.date()<t.date())return-a(t,n);var c=12*(t.year()-n.year())+(t.month()-n.month()),r=n.clone().add(c,H),u=t-r<0,s=n.clone().add(c+(u?-1:1),H);return+(-(c+(t-r)/(u?r-s:s-r))||0)},a:function(a){return a<0?Math.ceil(a)||0:Math.floor(a)},p:function(a){return{M:H,y,w:L,d:i,D:l,h:o,m:w,s:d,ms:I,Q:h}[a]||String(a||"").toLowerCase().replace(/s$/,"")},u:function(a){return a===void 0}},S="en",Y={};Y[S]=g;var C=function(a){return a instanceof F},E=function a(n,t,c){var r;if(!n)return S;if(typeof n=="string"){var u=n.toLowerCase();Y[u]&&(r=u),t&&(Y[u]=t,r=u);var s=n.split("-");if(!r&&s.length>1)return a(s[0])}else{var $=n.name;Y[$]=n,r=$}return!c&&r&&(S=r),r||!c&&S},p=function(a,n){if(C(a))return a.clone();var t=typeof n=="object"?n:{};return t.date=a,t.args=arguments,new F(t)},f=U;f.l=E,f.i=C,f.w=function(a,n){return p(a,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var F=function(){function a(t){this.$L=E(t.locale,null,!0),this.parse(t)}var n=a.prototype;return n.parse=function(t){this.$d=function(c){var r=c.date,u=c.utc;if(r===null)return new Date(NaN);if(f.u(r))return new Date;if(r instanceof Date)return new Date(r);if(typeof r=="string"&&!/Z$/i.test(r)){var s=r.match(m);if(s){var $=s[2]-1||0,x=(s[7]||"0").substring(0,3);return u?new Date(Date.UTC(s[1],$,s[3]||1,s[4]||0,s[5]||0,s[6]||0,x)):new Date(s[1],$,s[3]||1,s[4]||0,s[5]||0,s[6]||0,x)}}return new Date(r)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return f},n.isValid=function(){return this.$d.toString()!==e},n.isSame=function(t,c){var r=p(t);return this.startOf(c)<=r&&r<=this.endOf(c)},n.isAfter=function(t,c){return p(t)<this.startOf(c)},n.isBefore=function(t,c){return this.endOf(c)<p(t)},n.$g=function(t,c,r){return f.u(t)?this[c]:this.set(r,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,c){var r=this,u=!!f.u(c)||c,s=f.p(t),$=function(k,z){var j=f.w(r.$u?Date.UTC(r.$y,z,k):new Date(r.$y,z,k),r);return u?j:j.endOf(i)},x=function(k,z){return f.w(r.toDate()[k].apply(r.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(z)),r)},M=this.$W,b=this.$M,A=this.$D,Z="set"+(this.$u?"UTC":"");switch(s){case y:return u?$(1,0):$(31,11);case H:return u?$(1,b):$(0,b+1);case L:var V=this.$locale().weekStart||0,R=(M<V?M+7:M)-V;return $(u?A-R:A+(6-R),b);case i:case l:return x(Z+"Hours",0);case o:return x(Z+"Minutes",1);case w:return x(Z+"Seconds",2);case d:return x(Z+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,c){var r,u=f.p(t),s="set"+(this.$u?"UTC":""),$=(r={},r[i]=s+"Date",r[l]=s+"Date",r[H]=s+"Month",r[y]=s+"FullYear",r[o]=s+"Hours",r[w]=s+"Minutes",r[d]=s+"Seconds",r[I]=s+"Milliseconds",r)[u],x=u===i?this.$D+(c-this.$W):c;if(u===H||u===y){var M=this.clone().set(l,1);M.$d[$](x),M.init(),this.$d=M.set(l,Math.min(this.$D,M.daysInMonth())).$d}else $&&this.$d[$](x);return this.init(),this},n.set=function(t,c){return this.clone().$set(t,c)},n.get=function(t){return this[f.p(t)]()},n.add=function(t,c){var r,u=this;t=Number(t);var s=f.p(c),$=function(b){var A=p(u);return f.w(A.date(A.date()+Math.round(b*t)),u)};if(s===H)return this.set(H,this.$M+t);if(s===y)return this.set(y,this.$y+t);if(s===i)return $(1);if(s===L)return $(7);var x=(r={},r[w]=O,r[o]=T,r[d]=_,r)[s]||1,M=this.$d.getTime()+t*x;return f.w(M,this)},n.subtract=function(t,c){return this.add(-1*t,c)},n.format=function(t){var c=this,r=this.$locale();if(!this.isValid())return r.invalidDate||e;var u=t||"YYYY-MM-DDTHH:mm:ssZ",s=f.z(this),$=this.$H,x=this.$m,M=this.$M,b=r.weekdays,A=r.months,Z=function(z,j,G,K){return z&&(z[j]||z(c,u))||G[j].slice(0,K)},V=function(z){return f.s($%12||12,z,"0")},R=r.meridiem||function(z,j,G){var K=z<12?"AM":"PM";return G?K.toLowerCase():K},k={YY:String(this.$y).slice(-2),YYYY:this.$y,M:M+1,MM:f.s(M+1,2,"0"),MMM:Z(r.monthsShort,M,A,3),MMMM:Z(A,M),D:this.$D,DD:f.s(this.$D,2,"0"),d:String(this.$W),dd:Z(r.weekdaysMin,this.$W,b,2),ddd:Z(r.weekdaysShort,this.$W,b,3),dddd:b[this.$W],H:String($),HH:f.s($,2,"0"),h:V(1),hh:V(2),a:R($,x,!0),A:R($,x,!1),m:String(x),mm:f.s(x,2,"0"),s:String(this.$s),ss:f.s(this.$s,2,"0"),SSS:f.s(this.$ms,3,"0"),Z:s};return u.replace(D,function(z,j){return j||k[z]||s.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,c,r){var u,s=f.p(c),$=p(t),x=($.utcOffset()-this.utcOffset())*O,M=this-$,b=f.m(this,$);return b=(u={},u[y]=b/12,u[H]=b,u[h]=b/3,u[L]=(M-x)/6048e5,u[i]=(M-x)/864e5,u[o]=M/T,u[w]=M/O,u[d]=M/_,u)[s]||M,r?b:f.a(b)},n.daysInMonth=function(){return this.endOf(H).$D},n.$locale=function(){return Y[this.$L]},n.locale=function(t,c){if(!t)return this.$L;var r=this.clone(),u=E(t,c,!0);return u&&(r.$L=u),r},n.clone=function(){return f.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},a}(),P=F.prototype;return p.prototype=P,[["$ms",I],["$s",d],["$m",w],["$H",o],["$W",i],["$M",H],["$y",y],["$D",l]].forEach(function(a){P[a[1]]=function(n){return this.$g(n,a[0],a[1])}}),p.extend=function(a,n){return a.$i||(a(n,F,p),a.$i=!0),p},p.locale=E,p.isDayjs=C,p.unix=function(a){return p(1e3*a)},p.en=Y[S],p.Ls=Y,p.p={},p})})(ut);const W=ut.exports;var dt={exports:{}};(function(B,N){(function(_,O){B.exports=O()})(tt,function(){var _={year:0,month:1,day:2,hour:3,minute:4,second:5},O={};return function(T,I,d){var w,o=function(h,y,l){l===void 0&&(l={});var e=new Date(h),m=function(D,g){g===void 0&&(g={});var v=g.timeZoneName||"short",U=D+"|"+v,S=O[U];return S||(S=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:D,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:v}),O[U]=S),S}(y,l);return m.formatToParts(e)},i=function(h,y){for(var l=o(h,y),e=[],m=0;m<l.length;m+=1){var D=l[m],g=D.type,v=D.value,U=_[g];U>=0&&(e[U]=parseInt(v,10))}var S=e[3],Y=S===24?0:S,C=e[0]+"-"+e[1]+"-"+e[2]+" "+Y+":"+e[4]+":"+e[5]+":000",E=+h;return(d.utc(C).valueOf()-(E-=E%1e3))/6e4},L=I.prototype;L.tz=function(h,y){h===void 0&&(h=w);var l=this.utcOffset(),e=this.toDate(),m=e.toLocaleString("en-US",{timeZone:h}),D=Math.round((e-new Date(m))/1e3/60),g=d(m).$set("millisecond",this.$ms).utcOffset(15*-Math.round(e.getTimezoneOffset()/15)-D,!0);if(y){var v=g.utcOffset();g=g.add(l-v,"minute")}return g.$x.$timezone=h,g},L.offsetName=function(h){var y=this.$x.$timezone||d.tz.guess(),l=o(this.valueOf(),y,{timeZoneName:h}).find(function(e){return e.type.toLowerCase()==="timezonename"});return l&&l.value};var H=L.startOf;L.startOf=function(h,y){if(!this.$x||!this.$x.$timezone)return H.call(this,h,y);var l=d(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return H.call(l,h,y).tz(this.$x.$timezone,!0)},d.tz=function(h,y,l){var e=l&&y,m=l||y||w,D=i(+d(),m);if(typeof h!="string")return d(h).tz(m);var g=function(Y,C,E){var p=Y-60*C*1e3,f=i(p,E);if(C===f)return[p,C];var F=i(p-=60*(f-C)*1e3,E);return f===F?[p,f]:[Y-60*Math.min(f,F)*1e3,Math.max(f,F)]}(d.utc(h,e).valueOf(),D,m),v=g[0],U=g[1],S=d(v).utcOffset(U);return S.$x.$timezone=m,S},d.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},d.tz.setDefault=function(h){w=h}}})})(dt);const Mt=dt.exports;var ft={exports:{}};(function(B,N){(function(_,O){B.exports=O()})(tt,function(){var _={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(O,T,I){var d=T.prototype,w=d.format;I.en.formats=_,d.format=function(o){o===void 0&&(o="YYYY-MM-DDTHH:mm:ssZ");var i=this.$locale().formats,L=function(H,h){return H.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(y,l,e){var m=e&&e.toUpperCase();return l||h[e]||_[e]||h[m].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(D,g,v){return g||v.slice(1)})})}(o,i===void 0?{}:i);return w.call(this,L)}}})})(ft);const wt=ft.exports;W.extend(wt);W.extend(gt);W.extend(Mt);W().format();const J=document.getElementById("form"),st=document.getElementById("city");document.getElementById("country");const vt=document.getElementById("weatherDesc"),X=document.getElementById("weatherIcon"),Tt=document.getElementById("temp"),Dt=document.getElementById("feelsLike"),St=document.getElementById("dewPoint"),Lt=document.getElementById("humidity"),xt=document.getElementById("UV"),Ht=document.getElementById("precipitation"),Ot=document.getElementById("sunrise"),It=document.getElementById("sunset"),ot=J.elements.units,at="04c4452e0dc6606c0e2d6c5c918f0889";let q=document.getElementsByClassName("tempUnits").innerHTML;const Yt=document.getElementById("footDiv");Yt.textContent=`\xA9 ${W().format("YYYY")} Nate Card`;try{async function B(d){return await(await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${d}&limit=1&appid=${at}`)).json()}async function N(d){const w=await B(d),{lon:o,lat:i}=w[0],L=`https://api.openweathermap.org/data/3.0/onecall?lat=${i}&lon=${o}&exclude=minutely,alerts&appid=${at}&units=${ot.value}`,h=await(await fetch(`${L}`,{mode:"cors"})).json();return ot.value==="metric"?q="\u2103":q="\u2109",h}async function _(d){const w=await B(J.query.value),o=await N(J.query.value),{country:i,name:L,state:H}=w[0],{feels_like:h,temp:y,sunrise:l,sunset:e,dew_point:m,humidity:D,uvi:g,wind_speed:v}=o.current,{main:U,description:S,icon:Y}=o.current.weather[0],{pop:C,rain:E,snow:p}=o.daily[0];i==="US"?st.innerHTML=`${L}, ${H}`:st.innerHTML=`${L}, ${i}`,X.src=`http://openweathermap.org/img/wn/${Y}@4x.png`,vt.innerHTML=`${U} with ${S}`,Tt.innerHTML=`Temperature: ${Math.round(y)}${q}`,Dt.innerHTML=`Feels Like: ${Math.round(h)}${q}`,St.innerHTML=`Dew Point: ${Math.round(m)}${q}`,Lt.innerHTML=`Humidity: ${D}%`,xt.innerHTML=`UV Index: ${Math.round(g)}`,Ht.innerHTML=`Precipitation: ${Math.round(C)} %`;const f=o.timezone_offset/60/60;Ot.innerHTML=`Sunrise: ${W.unix(l).utcOffset(f).format("LT")}`,It.innerHTML=`Sunset: ${W.unix(e).utcOffset(f).format("LT")}`;async function F(){const P=window.innerWidth;P<200?X.src=`http://openweathermap.org/img/wn/${Y}.png`:P<800?X.src=`http://openweathermap.org/img/wn/${Y}@2x.png`:X.src=`http://openweathermap.org/img/wn/${Y}@4x.png`}window.addEventListener("resize",F)}async function O(d){const w=await N(J.query.value),o=w.timezone_offset/60/60,{daily:i}=w;ot.value==="metric"?q="\u2103":q="\u2109";const L=document.getElementById("day1"),H=L.querySelector(".date"),h=L.querySelector(".maxTemp"),y=L.querySelector(".minTemp"),l=L.querySelector(".icon"),e=L.querySelector(".description");H.innerHTML=`${W.unix(i[1].dt).utcOffset(o).format("dddd")}`,y.innerHTML=`${Math.round(i[1].temp.min)}${q}`,h.innerHTML=`${Math.round(i[1].temp.max)}${q}`;const m=i[1].weather[0].icon;l.src=`http://openweathermap.org/img/wn/${m}.png`,e.innerHTML=`${i[1].weather[0].main}`;const D=document.getElementById("day2"),g=D.querySelector(".date"),v=D.querySelector(".maxTemp"),U=D.querySelector(".minTemp"),S=D.querySelector(".icon"),Y=D.querySelector(".description");g.innerHTML=`${W.unix(i[2].dt).utcOffset(o).format("dddd")}`,U.innerHTML=`${Math.round(i[2].temp.min)}${q}`,v.innerHTML=`${Math.round(i[2].temp.max)}${q}`;const C=i[1].weather[0].icon;S.src=`http://openweathermap.org/img/wn/${C}.png`,Y.innerHTML=`${i[2].weather[0].main}`;const E=document.getElementById("day3"),p=E.querySelector(".date"),f=E.querySelector(".maxTemp"),F=E.querySelector(".minTemp"),P=E.querySelector(".icon"),a=E.querySelector(".description");p.innerHTML=`${W.unix(i[3].dt).utcOffset(o).format("dddd")}`,F.innerHTML=`${Math.round(i[3].temp.min)}${q}`,f.innerHTML=`${Math.round(i[3].temp.max)}${q}`;const n=i[3].weather[0].icon;P.src=`http://openweathermap.org/img/wn/${n}.png`,a.innerHTML=`${i[3].weather[0].main}`;const t=document.getElementById("day4"),c=t.querySelector(".date"),r=t.querySelector(".maxTemp"),u=t.querySelector(".minTemp"),s=t.querySelector(".icon"),$=t.querySelector(".description");c.innerHTML=`${W.unix(i[4].dt).utcOffset(o).format("dddd")}`,u.innerHTML=`${Math.round(i[4].temp.min)}${q}`,r.innerHTML=`${Math.round(i[4].temp.max)}${q}`;const x=i[4].weather[0].icon;s.src=`http://openweathermap.org/img/wn/${x}.png`,$.innerHTML=`${i[4].weather[0].main}`;const M=document.getElementById("day5"),b=M.querySelector(".date"),A=M.querySelector(".maxTemp"),Z=M.querySelector(".minTemp"),V=M.querySelector(".icon"),R=M.querySelector(".description");b.innerHTML=`${W.unix(i[5].dt).utcOffset(o).format("dddd")}`,Z.innerHTML=`${Math.round(i[5].temp.min)}${q}`,A.innerHTML=`${Math.round(i[5].temp.max)}${q}`;const k=i[5].weather[0].icon;V.src=`http://openweathermap.org/img/wn/${k}.png`,R.innerHTML=`${i[5].weather[0].main}`;const z=document.getElementById("day6"),j=z.querySelector(".date"),G=z.querySelector(".maxTemp"),K=z.querySelector(".minTemp"),et=z.querySelector(".icon"),mt=z.querySelector(".description");j.innerHTML=`${W.unix(i[6].dt).utcOffset(o).format("dddd")}`,K.innerHTML=`${Math.round(i[6].temp.min)}${q}`,G.innerHTML=`${Math.round(i[6].temp.max)}${q}`;const nt=i[6].weather[0].icon;et.src=`http://openweathermap.org/img/wn/${nt}.png`,mt.innerHTML=`${i[6].weather[0].main}`;const Q=document.getElementById("day7"),ht=Q.querySelector(".date"),lt=Q.querySelector(".maxTemp"),pt=Q.querySelector(".minTemp"),rt=Q.querySelector(".icon"),$t=Q.querySelector(".description");ht.innerHTML=`${W.unix(i[7].dt).utcOffset(o).format("dddd")}`,pt.innerHTML=`${Math.round(i[7].temp.min)}${q}`,lt.innerHTML=`${Math.round(i[7].temp.max)}${q}`;const it=i[7].weather[0].icon;rt.src=`http://openweathermap.org/img/wn/${it}.png`,$t.innerHTML=`${i[7].weather[0].main}`;async function yt(){window.innerWidth<600?(l.src=`http://openweathermap.org/img/wn/${m}.png`,S.src=`http://openweathermap.org/img/wn/${C}.png`,P.src=`http://openweathermap.org/img/wn/${n}.png`,s.src=`http://openweathermap.org/img/wn/${x}.png`,V.src=`http://openweathermap.org/img/wn/${k}.png`,et.src=`http://openweathermap.org/img/wn/${nt}.png`,rt.src=`http://openweathermap.org/img/wn/${it}.png`):(l.src=`http://openweathermap.org/img/wn/${m}@2x.png`,S.src=`http://openweathermap.org/img/wn/${C}@2x.png`,P.src=`http://openweathermap.org/img/wn/${n}@2x.png`,s.src=`http://openweathermap.org/img/wn/${x}@2x.png`,V.src=`http://openweathermap.org/img/wn/${k}@2x.png`,et.src=`http://openweathermap.org/img/wn/${nt}@2x.png`,rt.src=`http://openweathermap.org/img/wn/${it}@2x.png`)}window.addEventListener("resize",yt)}async function T(d){J.submit.disabled=!0;const w=await B(d),o=await N(d);J.submit.disabled=!1,_(o.results),O(o.results)}async function I(d){d.preventDefault(),T(J.query.value)}J.addEventListener("submit",I),T("San Francisco, California")}catch(B){console.error(B)}
