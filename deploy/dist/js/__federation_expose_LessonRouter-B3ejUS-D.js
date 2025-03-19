const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./../js/LessonLearned-C3Rp2Z2Z.js","./../js/__federation_fn_import-Dc6jQS63.js","./../js/_plugin-vue_export-helper-1tPrXgE0.js","./../js/NowReady-CTlt6-3T.js"])))=>i.map(i=>d[i]);
const scriptRel = "modulepreload";
const assetsURL = function(dep, importerUrl) {
  return new URL(dep, importerUrl).href;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    const links = document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = Promise.allSettled(
      deps.map((dep) => {
        dep = assetsURL(dep, importerUrl);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        const isBaseRelative = !!importerUrl;
        if (isBaseRelative) {
          for (let i = links.length - 1; i >= 0; i--) {
            const link2 = links[i];
            if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
              return;
            }
          }
        } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
const lesson = {
  path: "/lesson",
  name: "lesson",
  redirect: { name: "learned" },
  children: [
    {
      path: "learned",
      name: "learned",
      component: () => __vitePreload(() => import("./LessonLearned-C3Rp2Z2Z.js"), true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url),
      children: [
        {
          path: "search",
          name: "learned-details",
          component: () => __vitePreload(() => import("./LessonLearned-C3Rp2Z2Z.js"), true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url)
        }
      ]
    },
    {
      path: "ready",
      name: "ready",
      component: () => __vitePreload(() => import("./NowReady-CTlt6-3T.js"), true ? __vite__mapDeps([3,1,2]) : void 0, import.meta.url)
    }
  ]
};
export {
  lesson as default
};
