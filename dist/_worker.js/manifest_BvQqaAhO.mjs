globalThis.process ??= {}; globalThis.process.env ??= {};
import { h as decodeKey } from './chunks/astro/server_B56e0_WZ.mjs';
import './chunks/astro-designed-error-pages_B8rI0ZSe.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_BtSf0MLZ.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/Project/mysite/","cacheDir":"file:///D:/Project/mysite/node_modules/.astro/","outDir":"file:///D:/Project/mysite/dist/","srcDir":"file:///D:/Project/mysite/src/","publicDir":"file:///D:/Project/mysite/public/","buildClientDir":"file:///D:/Project/mysite/dist/","buildServerDir":"file:///D:/Project/mysite/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/dark-mode/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/dark-mode","isIndex":false,"type":"page","pattern":"^\\/blog\\/dark-mode\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"dark-mode","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/dark-mode.astro","pathname":"/blog/dark-mode","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/digital-garden/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/digital-garden","isIndex":false,"type":"page","pattern":"^\\/blog\\/digital-garden\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"digital-garden","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/digital-garden.astro","pathname":"/blog/digital-garden","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/minimalism/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/minimalism","isIndex":false,"type":"page","pattern":"^\\/blog\\/minimalism\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"minimalism","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/minimalism.astro","pathname":"/blog/minimalism","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"portfolio/project-alpha/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/portfolio/project-alpha","isIndex":false,"type":"page","pattern":"^\\/portfolio\\/project-alpha\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"project-alpha","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/project-alpha.astro","pathname":"/portfolio/project-alpha","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"portfolio/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/portfolio","isIndex":true,"type":"page","pattern":"^\\/portfolio\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/index.astro","pathname":"/portfolio","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"share/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/share","isIndex":true,"type":"page","pattern":"^\\/share\\/?$","segments":[[{"content":"share","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/share/index.astro","pathname":"/share","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://dar1an.pages.dev","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Project/mysite/src/pages/blog/dark-mode.astro",{"propagation":"none","containsHead":true}],["D:/Project/mysite/src/pages/blog/digital-garden.astro",{"propagation":"none","containsHead":true}],["D:/Project/mysite/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["D:/Project/mysite/src/pages/blog/minimalism.astro",{"propagation":"none","containsHead":true}],["D:/Project/mysite/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/Project/mysite/src/pages/portfolio/index.astro",{"propagation":"none","containsHead":true}],["D:/Project/mysite/src/pages/portfolio/project-alpha.astro",{"propagation":"none","containsHead":true}],["D:/Project/mysite/src/pages/share/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/blog/dark-mode@_@astro":"pages/blog/dark-mode.astro.mjs","\u0000@astro-page:src/pages/blog/digital-garden@_@astro":"pages/blog/digital-garden.astro.mjs","\u0000@astro-page:src/pages/blog/minimalism@_@astro":"pages/blog/minimalism.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/portfolio/project-alpha@_@astro":"pages/portfolio/project-alpha.astro.mjs","\u0000@astro-page:src/pages/portfolio/index@_@astro":"pages/portfolio.astro.mjs","\u0000@astro-page:src/pages/share/index@_@astro":"pages/share.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BvQqaAhO.mjs","D:/Project/mysite/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","D:/Project/mysite/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.L1mxk3Wh.js","D:/Project/mysite/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts":"_astro/BaseLayout.astro_astro_type_script_index_0_lang.B7sG9DRd.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["D:/Project/mysite/src/pages/index.astro?astro&type=script&index=0&lang.ts","const r=[\"home\",\"blog\",\"portfolio\",\"share\"];function l(n){const o=r.indexOf(n);if(o===-1)return 0;if(window.innerWidth<=768){const e=document.getElementById(n);return e?e.offsetTop:0}return o*window.innerHeight}function d(n){window.scrollTo({top:n,behavior:\"smooth\"})}document.querySelectorAll(\".nav-anchor\").forEach(n=>{n.addEventListener(\"click\",function(o){const e=this.getAttribute(\"href\");if(e&&e.startsWith(\"#\")){o.preventDefault();const t=this.getAttribute(\"data-target\");if(t){const i=l(t);d(i)}}})});const a=document.querySelectorAll(\".nav-anchor\");function s(){const n=window.scrollY,o=window.innerHeight;let e=\"home\";if(document.getElementById(\"home\")){if(window.innerWidth<=768)for(const t of r){const i=document.getElementById(t);if(i){const c=i.getBoundingClientRect();if(c.top<=o/3&&c.bottom>=o/3){e=t;break}}}else{let t=Math.round(n/o);t=Math.min(t,r.length-1),t=Math.max(t,0),e=r[t]}a.forEach(t=>{t.getAttribute(\"data-target\")===e?t.classList.add(\"active\"):t.classList.remove(\"active\")})}}window.addEventListener(\"scroll\",s);s();"],["D:/Project/mysite/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"navbar\");window.addEventListener(\"scroll\",()=>{window.scrollY>50?t?.classList.add(\"scrolled\"):t?.classList.remove(\"scrolled\")});function o(){navigator.clipboard.writeText(\"hwe2377@gmail.com\").then(()=>{const e=document.getElementById(\"copy-toast\");e&&(e.style.opacity=\"1\",e.style.top=\"40%\",setTimeout(()=>{e.style.opacity=\"0\",e.style.top=\"50%\"},2e3))}).catch(e=>{console.error(\"Copy failed:\",e)})}window.copyEmail=o;"]],"assets":["/_astro/dark-mode.Clx7lGLn.css","/favicon.ico","/favicon.svg","/_worker.js/index.js","/_worker.js/noop-entrypoint.mjs","/_worker.js/renderers.mjs","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/chunks/astro-designed-error-pages_B8rI0ZSe.mjs","/_worker.js/chunks/astro_xm7GvrS1.mjs","/_worker.js/chunks/BaseLayout_wpbKvP1D.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/index_a07PXHh3.mjs","/_worker.js/chunks/noop-middleware_BtSf0MLZ.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_nBppX9Ni.mjs","/_worker.js/pages/blog.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/portfolio.astro.mjs","/_worker.js/pages/share.astro.mjs","/_worker.js/_astro/dark-mode.Clx7lGLn.css","/_worker.js/chunks/astro/server_B56e0_WZ.mjs","/_worker.js/pages/blog/dark-mode.astro.mjs","/_worker.js/pages/blog/digital-garden.astro.mjs","/_worker.js/pages/blog/minimalism.astro.mjs","/_worker.js/pages/portfolio/project-alpha.astro.mjs","/blog/dark-mode/index.html","/blog/digital-garden/index.html","/blog/minimalism/index.html","/blog/index.html","/portfolio/project-alpha/index.html","/portfolio/index.html","/share/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"hSEwEZFJHwOcWiahBmPFSPxc8S/yUyQxTEg2/SgTt+M=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
