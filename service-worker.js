"use strict";var precacheConfig=[["/final-golden-gear-persona-evangelion/index.html","d0021fb4c2c06994dcffcabde15941ba"],["/final-golden-gear-persona-evangelion/static/css/main.9609d538.css","c2a988bf8a9f401253aa622c30f35bb5"],["/final-golden-gear-persona-evangelion/static/js/main.28c7331c.js","238e9d4570c45443f0009476dfed6316"],["/final-golden-gear-persona-evangelion/static/media/abandonedBuilding.8c200504.png","8c2005044a201a7f00e9c6703ee55320"],["/final-golden-gear-persona-evangelion/static/media/abandonedBuildingInside.3de0f91e.png","3de0f91e106f7d722c4b0e2ff1e230ca"],["/final-golden-gear-persona-evangelion/static/media/allIn.afc8e5e6.png","afc8e5e6d63f2a7b142f24d74d3944e2"],["/final-golden-gear-persona-evangelion/static/media/battleBackground.b73ec2dd.png","b73ec2ddfc5b387bbd42cf37cbe49871"],["/final-golden-gear-persona-evangelion/static/media/betrayalInn.757139ce.png","757139ce008b3470fda4379305fee7a5"],["/final-golden-gear-persona-evangelion/static/media/campBattlefield.7f87da20.png","7f87da209a3cd2ade0b825c982a726da"],["/final-golden-gear-persona-evangelion/static/media/capitalCrossroads.fb417095.png","fb41709550d92c357f0b1032b3c8de75"],["/final-golden-gear-persona-evangelion/static/media/capitalForest.47ba47eb.png","47ba47eb0303500bd1cb97d57515b528"],["/final-golden-gear-persona-evangelion/static/media/castleCorridor.1e13d9c9.png","1e13d9c9f32e777a4fbe8c5f12338f29"],["/final-golden-gear-persona-evangelion/static/media/castleFront.99cbb3bb.png","99cbb3bbc87180a1e2d3421115b35cc8"],["/final-golden-gear-persona-evangelion/static/media/decimate.60075b69.png","60075b6977afd684d5b5f2dd1b6e33d1"],["/final-golden-gear-persona-evangelion/static/media/fireball.2efb1b77.png","2efb1b771731b8f044715be1149daf66"],["/final-golden-gear-persona-evangelion/static/media/healing.3811797a.png","3811797ace5382a8553f98b500a4c749"],["/final-golden-gear-persona-evangelion/static/media/inferno.55181a18.png","55181a184256bcb59f71b75c185347af"],["/final-golden-gear-persona-evangelion/static/media/magicBullet.f03b5b11.png","f03b5b11ab36e45a8e8b80a0500b3c0a"],["/final-golden-gear-persona-evangelion/static/media/meditate.f1632c4f.png","f1632c4f677ff3af9d70112fd834e959"],["/final-golden-gear-persona-evangelion/static/media/minorProtection.33fd5407.png","33fd5407f8a20f48a862854209795add"],["/final-golden-gear-persona-evangelion/static/media/route1.0b6e5ac6.png","0b6e5ac6d85b4f7244695da35e30ab31"],["/final-golden-gear-persona-evangelion/static/media/route2.7fd30e32.png","7fd30e32ed4cc14f0c7853e34bd99a4c"],["/final-golden-gear-persona-evangelion/static/media/strongBlow2.5994882a.png","5994882a570e178427506fc5312cb8c5"],["/final-golden-gear-persona-evangelion/static/media/throneRoomTest.2e0518ac.png","2e0518acc75f06ff9b74d2ceadf13425"],["/final-golden-gear-persona-evangelion/static/media/westsideInnBedroom.efe2e40f.png","efe2e40fff0d8fa5e40d79db81f76847"],["/final-golden-gear-persona-evangelion/static/media/whirlwind.af92be67.png","af92be6741a6f429c0f339e655fa34b3"],["/final-golden-gear-persona-evangelion/static/media/wolf.ede85dc1.png","ede85dc10761eaf8d6089148c2402209"],["/final-golden-gear-persona-evangelion/static/media/woodBackground.5b6b1094.jpg","5b6b10942c2ec24d56fd71807cb738e6"],["/final-golden-gear-persona-evangelion/static/media/woodenBackground.19fccd77.jpg","19fccd77f6d90d14ce1bf7472fd55adf"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=a),n.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,n,t){var r=new URL(e);return t&&r.pathname.match(t)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var n=new URL(a).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return n.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],n=e[1],t=new URL(a,self.location),r=createCacheKey(t,hashParamName,n,/\.\w{8}\./);return[t.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!n.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,n=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,t),e=urlsToCacheKeys.has(n));var r="/final-golden-gear-persona-evangelion/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});