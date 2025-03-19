import { importShared } from "./__federation_fn_import-Dc6jQS63.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import lesson from "./__federation_expose_LessonRouter-B3ejUS-D.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const _sfc_main$3 = {};
const { createTextVNode: _createTextVNode$1, resolveComponent: _resolveComponent$2, withCtx: _withCtx$1, createVNode: _createVNode$2, createElementVNode: _createElementVNode$3, openBlock: _openBlock$3, createElementBlock: _createElementBlock$3 } = await importShared("vue");
const _hoisted_1$3 = { class: "sb-topnav navbar navbar-expand navbar-light bg-light shadow-sm p-3 bg-white rounded" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = _resolveComponent$2("router-link");
  return _openBlock$3(), _createElementBlock$3("nav", _hoisted_1$3, [
    _createVNode$2(_component_router_link, {
      class: "navbar-brand ps-3",
      to: "/lessonlearned"
    }, {
      default: _withCtx$1(() => _cache[0] || (_cache[0] = [
        _createTextVNode$1(" 시운전 통합 관제 서비스 ")
      ])),
      _: 1
    }),
    _cache[1] || (_cache[1] = _createElementVNode$3("button", {
      class: "btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0 mlml",
      id: "sidebarToggle"
    }, [
      _createElementVNode$3("i", { class: "bi bi-justify" }, [
        _createElementVNode$3("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "25",
          height: "25",
          fill: "currentColor",
          class: "bi bi-list",
          viewBox: "0 0 16 16"
        }, [
          _createElementVNode$3("path", {
            "fill-rule": "evenodd",
            d: "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          })
        ])
      ])
    ], -1)),
    _cache[2] || (_cache[2] = _createElementVNode$3("div", { class: "d-md-inline-block ms-auto me-0 me-md-3 my-md-0" }, [
      _createElementVNode$3("ul", { class: "navbar-nav ms-auto ms-md-0 me-3 me-lg-4" }, [
        _createElementVNode$3("li", { class: "nav-item" }, [
          _createElementVNode$3("a", {
            class: "nav-link",
            href: "#",
            role: "button",
            "aria-expanded": "false"
          }, [
            _createElementVNode$3("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "25",
              height: "25",
              fill: "currentColor",
              class: "bi bi-person-fill",
              viewBox: "0 0 16 16"
            }, [
              _createElementVNode$3("path", { d: "M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" })
            ])
          ])
        ])
      ])
    ], -1))
  ]);
}
const AppHeader = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-ee9833e9"]]);
const _sfc_main$2 = {};
const { createElementVNode: _createElementVNode$2, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent$1, withCtx: _withCtx, createVNode: _createVNode$1, openBlock: _openBlock$2, createElementBlock: _createElementBlock$2 } = await importShared("vue");
const _hoisted_1$2 = { id: "layoutSidenav_nav" };
const _hoisted_2$1 = {
  class: "sb-sidenav accordion sb-sidenav-light",
  id: "sidenavAccordion"
};
const _hoisted_3 = {
  class: "sb-sidenav-menu",
  id: "shadowing"
};
const _hoisted_4 = { class: "nav" };
function _sfc_render$2(_ctx, _cache) {
  const _component_router_link = _resolveComponent$1("router-link");
  return _openBlock$2(), _createElementBlock$2("div", _hoisted_1$2, [
    _createElementVNode$2("nav", _hoisted_2$1, [
      _createElementVNode$2("div", _hoisted_3, [
        _createElementVNode$2("div", _hoisted_4, [
          _cache[9] || (_cache[9] = _createElementVNode$2("div", { class: "sb-sidenav-menu-heading shadow-sm fs-6" }, "시운전 관제", -1)),
          _createVNode$1(_component_router_link, {
            to: "/ready",
            class: "nav-link nav-link-font side-hover",
            id: "total"
          }, {
            default: _withCtx(() => _cache[0] || (_cache[0] = [
              _createElementVNode$2("div", { class: "sb-nav-link-icon side-hover" }, [
                _createElementVNode$2("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  fill: "currentColor",
                  class: "bi bi-display",
                  viewBox: "0 0 16 16"
                }, [
                  _createElementVNode$2("path", { d: "M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4q0 1 .25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75Q6 13 6 12H2s-2 0-2-2zm1.398-.855a.76.76 0 0 0-.254.302A1.5 1.5 0 0 0 1 4.01V10c0 .325.078.502.145.602q.105.156.302.254a1.5 1.5 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.76.76 0 0 0 .254-.302 1.5 1.5 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.76.76 0 0 0-.302-.254A1.5 1.5 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145" })
                ])
              ], -1),
              _createTextVNode(" 통합 관제 ")
            ])),
            _: 1
          }),
          _createVNode$1(_component_router_link, {
            to: "/ready",
            class: "nav-link nav-link-font side-hover",
            id: "sea"
          }, {
            default: _withCtx(() => _cache[1] || (_cache[1] = [
              _createElementVNode$2("div", { class: "sb-nav-link-icon" }, [
                _createElementVNode$2("svg", {
                  version: "1.0",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  preserveAspectRatio: "xMidYMid meet"
                }, [
                  _createElementVNode$2("g", {
                    transform: "translate(0.000000,24.000000) scale(0.100000,-0.100000)",
                    fill: "currentColor",
                    stroke: "none"
                  }, [
                    _createElementVNode$2("path", { d: "M85 210 c-3 -11 -15 -20 -25 -20 -19 0 -30 -19 -30 -50 0 -9 -7 -23 -15 -30 -13 -10 -13 -16 0 -46 12 -29 12 -35 -1 -42 -9 -5 35 -8 106 -8 71 0 115 3 106 8 -13 7 -13 13 -1 42 13 30 13 36 0 46 -8 7 -15 21 -15 30 0 31 -11 50 -30 50 -10 0 -22 9 -25 20 -4 14 -15 20 -35 20 -20 0 -31 -6 -35 -20z m55 -5 c0 -8 -9 -15 -20 -15 -11 0 -20 7 -20 15 0 8 9 15 20 15 11 0 20 -7 20 -15z m50 -53 c0 -15 -9 -18 -70 -18 -61 0 -70 3 -70 18 0 16 9 18 70 18 61 0 70 -2 70 -18z m-16 -38 c45 -8 49 -14 35 -52 -13 -37 -40 -43 -151 -33 -16 1 -43 59 -32 70 9 9 88 29 101 26 6 -2 28 -7 47 -11z" }),
                    _createElementVNode$2("path", { d: "M83 99 c-18 -5 -33 -11 -33 -12 0 -1 31 -2 69 -2 67 0 74 6 21 18 -14 2 -40 1 -57 -4z" })
                  ])
                ])
              ], -1),
              _createTextVNode(" 해상 관제 ")
            ])),
            _: 1
          }),
          _createVNode$1(_component_router_link, {
            to: "/ready",
            class: "nav-link nav-link-font side-hover",
            id: "yard"
          }, {
            default: _withCtx(() => _cache[2] || (_cache[2] = [
              _createElementVNode$2("div", { class: "sb-nav-link-icon" }, [
                _createElementVNode$2("svg", {
                  version: "1.0",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24.000000 24.000000",
                  preserveAspectRatio: "xMidYMid meet"
                }, [
                  _createElementVNode$2("g", {
                    transform: "translate(0.000000,24.000000) scale(0.100000,-0.100000)",
                    fill: "currentColor",
                    stroke: "none"
                  }, [
                    _createElementVNode$2("path", { d: "M154 218 l-19 -23 22 18 c12 11 27 16 34 11 8 -4 10 -3 5 4 -10 17 -21 15 -42 -10z" }),
                    _createElementVNode$2("path", { d: "M175 190 l-40 -7 43 -2 c23 0 42 4 42 9 0 6 -1 9 -2 9 -2 -1 -21 -5 -43 -9z" }),
                    _createElementVNode$2("path", { d: "M38 164 c-25 -13 -28 -21 -28 -63 0 -42 3 -50 23 -56 12 -4 32 -6 44 -5 11 0 23 -3 26 -7 3 -5 -17 -7 -44 -6 -27 2 -49 -1 -49 -7 0 -5 7 -6 17 -3 11 4 14 3 9 -5 -5 -9 0 -9 19 -2 33 13 38 13 30 0 -4 -7 3 -7 20 0 33 13 38 13 30 0 -4 -7 3 -7 20 0 32 12 38 12 31 1 -4 -5 3 -7 14 -4 11 3 23 10 27 16 4 7 -1 8 -13 4 -18 -7 -18 -6 -1 7 18 14 24 56 8 56 -5 0 -12 14 -16 31 -7 29 -8 30 -26 13 -10 -9 -19 -23 -19 -31 0 -7 -4 -13 -10 -13 -5 0 -10 15 -10 33 0 26 -6 36 -25 45 -33 15 -44 15 -77 -4z m73 -4 c37 -21 23 -40 -30 -40 -49 0 -50 -1 -54 -32 -3 -26 -4 -24 -5 13 -2 39 2 48 21 57 29 14 44 14 68 2z m-13 -67 c-56 -9 -26 -18 47 -15 77 4 85 -1 62 -32 -17 -23 -82 -24 -106 -2 -10 9 -27 16 -39 16 -15 0 -22 6 -22 20 0 17 6 20 43 19 29 -2 34 -3 15 -6z" }),
                    _createElementVNode$2("path", { d: "M50 138 c0 -12 48 -10 55 2 4 6 -5 10 -24 8 -17 -1 -31 -6 -31 -10z" })
                  ])
                ])
              ], -1),
              _createTextVNode(" 육상 관제 ")
            ])),
            _: 1
          }),
          _createVNode$1(_component_router_link, {
            to: "/lesson",
            class: "nav-link nav-link-font side-hover",
            id: "lesson"
          }, {
            default: _withCtx(() => _cache[3] || (_cache[3] = [
              _createElementVNode$2("div", { class: "sb-nav-link-icon" }, [
                _createElementVNode$2("svg", {
                  version: "1.0",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24.000000 24.000000",
                  preserveAspectRatio: "xMidYMid meet"
                }, [
                  _createElementVNode$2("g", {
                    transform: "translate(0.000000,24.000000) scale(0.100000,-0.100000)",
                    fill: "currentColor",
                    stroke: "none"
                  }, [
                    _createElementVNode$2("path", { d: "M13 203 c-9 -3 -13 -30 -13 -84 l0 -79 39 0 c22 0 48 -3 58 -6 15 -5 15 -4 3 5 -8 6 -32 11 -52 11 l-38 0 0 71 c0 38 3 68 8 66 4 -3 13 1 20 9 10  11 10 14 0 13 -7 0 -19 -3 -25 -6z" }),
                    _createElementVNode$2("path", { d: "M93 197 c16 -5 38 -5 54 0 22 8 18 9 -27 9 -45 0 -49 -1 -27 -9z" }),
                    _createElementVNode$2("path", { d: "M198 203 c6 -2 13 -23 13 -46 l2 -42 7 40 c6 34 7 30 9 -32 l1 -73 -37 0 c-21 0 -45 -5 -53 -11 -12 -9 -12 -10 3 -5 10 3 36 6 58 6 l39 0 0 79 c0 80 -6 93 -43 90 -8 0 -8 -2 1 -6z" }),
                    _createElementVNode$2("path", { d: "M48 183 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" }),
                    _createElementVNode$2("path", { d: "M168 183 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" }),
                    _createElementVNode$2("path", { d: "M22 113 l-2 -53 38 2 c36 1 36 1 5 5 -30 4 -32 7 -36 51 l-3 47 -2 -52z" }),
                    _createElementVNode$2("path", { d: "M48 153 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" }),
                    _createElementVNode$2("path", { d: "M168 153 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" }),
                    _createElementVNode$2("path", { d: "M48 123 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" }),
                    _createElementVNode$2("path", { d: "M168 123 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" }),
                    _createElementVNode$2("path", { d: "M41 96 c2 -2 20 -6 39 -10 25 -4 31 -3 20 4 -14 9 -69 15 -59 6z" }),
                    _createElementVNode$2("path", { d: "M140 90 c-11 -7 -5 -8 20 -4 43 8 51 14 19 14 -13 0 -31 -5 -39 -10z" }),
                    _createElementVNode$2("path", { d: "M210 86 c0 -9 -13 -16 -32 -19 -32 -4 -32 -4 5 -5 31 -2 37 1 37 18 0 11 -2 20 -5 20 -3 0 -5 -6 -5 -14z" }),
                    _createElementVNode$2("path", { d: "M108 53 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" })
                  ])
                ])
              ], -1),
              _createTextVNode(" Lesson learned ")
            ])),
            _: 1
          }),
          _cache[10] || (_cache[10] = _createElementVNode$2("div", { class: "sb-sidenav-menu-heading shadow-sm fs-6" }, "시운전 관리", -1)),
          _createVNode$1(_component_router_link, {
            to: "/ready",
            class: "nav-link nav-link-font side-hover",
            id: "schedule"
          }, {
            default: _withCtx(() => _cache[4] || (_cache[4] = [
              _createElementVNode$2("div", { class: "sb-nav-link-icon" }, [
                _createElementVNode$2("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  fill: "currentColor",
                  class: "bi bi-calendar4-week",
                  viewBox: "0 0 16 16"
                }, [
                  _createElementVNode$2("path", { d: "M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" }),
                  _createElementVNode$2("path", { d: "M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" })
                ])
              ], -1),
              _createTextVNode(" 시운전 일정 ")
            ])),
            _: 1
          }),
          _createVNode$1(_component_router_link, {
            to: "/ready",
            class: "nav-link nav-link-font side-hover",
            id: "procedure"
          }, {
            default: _withCtx(() => _cache[5] || (_cache[5] = [
              _createElementVNode$2("div", { class: "sb-nav-link-icon" }, [
                _createElementVNode$2("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  fill: "currentColor",
                  class: "bi bi-sliders",
                  viewBox: "0 0 16 16"
                }, [
                  _createElementVNode$2("path", {
                    "fill-rule": "evenodd",
                    d: "M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"
                  })
                ])
              ], -1),
              _createTextVNode(" 시운전 절차 ")
            ])),
            _: 1
          }),
          _createVNode$1(_component_router_link, {
            to: "/ready",
            class: "nav-link nav-link-font side-hover"
          }, {
            default: _withCtx(() => _cache[6] || (_cache[6] = [
              _createElementVNode$2("div", { class: "sb-nav-link-icon" }, [
                _createElementVNode$2("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  fill: "currentColor",
                  class: "bi bi-person-fill-check",
                  viewBox: "0 0 16 16"
                }, [
                  _createElementVNode$2("path", { d: "M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" }),
                  _createElementVNode$2("path", { d: "M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" })
                ])
              ], -1),
              _createTextVNode(" 시운전 인원 ")
            ])),
            _: 1
          }),
          _createVNode$1(_component_router_link, {
            to: "/ready",
            class: "nav-link nav-link-font side-hover"
          }, {
            default: _withCtx(() => _cache[7] || (_cache[7] = [
              _createElementVNode$2("div", { class: "sb-nav-link-icon" }, [
                _createElementVNode$2("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  fill: "currentColor",
                  class: "bi bi-cash-stack",
                  viewBox: "0 0 16 16"
                }, [
                  _createElementVNode$2("path", { d: "M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" }),
                  _createElementVNode$2("path", { d: "M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z" })
                ])
              ], -1),
              _createTextVNode(" 시운전 비용 ")
            ])),
            _: 1
          }),
          _createVNode$1(_component_router_link, {
            to: "/ready",
            class: "nav-link nav-link-font side-hover"
          }, {
            default: _withCtx(() => _cache[8] || (_cache[8] = [
              _createElementVNode$2("div", { class: "sb-nav-link-icon" }, [
                _createElementVNode$2("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  fill: "currentColor",
                  class: "bi bi-clipboard2-data",
                  viewBox: "0 0 16 16"
                }, [
                  _createElementVNode$2("path", { d: "M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z" }),
                  _createElementVNode$2("path", { d: "M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" }),
                  _createElementVNode$2("path", { d: "M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1" })
                ])
              ], -1),
              _createTextVNode(" 시운전 분석 ")
            ])),
            _: 1
          })
        ])
      ])
    ])
  ]);
}
const AppSider = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-f7d464c9"]]);
const _sfc_main$1 = {};
const { createElementVNode: _createElementVNode$1, openBlock: _openBlock$1, createElementBlock: _createElementBlock$1 } = await importShared("vue");
const _hoisted_1$1 = { class: "py-1 bg-dark fixed-bottom" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock$1(), _createElementBlock$1("footer", _hoisted_1$1, _cache[0] || (_cache[0] = [
    _createElementVNode$1("div", null, [
      _createElementVNode$1("p", { class: "m-0 text-center text-white" }, "COPYRIGHT© 2024 research institute of medium&small shipbuilding all rights reserved.")
    ], -1)
  ]));
}
const AppFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  name: "app",
  components: {
    AppHeader,
    AppSider,
    AppFooter
  }
};
const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = await importShared("vue");
const _hoisted_1 = { id: "layoutSidenav" };
const _hoisted_2 = { id: "layoutSidenav_content" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppHeader = _resolveComponent("AppHeader");
  const _component_AppSider = _resolveComponent("AppSider");
  const _component_router_view = _resolveComponent("router-view");
  const _component_AppFooter = _resolveComponent("AppFooter");
  return _openBlock(), _createElementBlock(_Fragment, null, [
    _createVNode(_component_AppHeader),
    _createElementVNode("div", _hoisted_1, [
      _createVNode(_component_AppSider),
      _createElementVNode("div", _hoisted_2, [
        _createElementVNode("main", null, [
          _createVNode(_component_router_view)
        ])
      ])
    ]),
    _createVNode(_component_AppFooter)
  ], 64);
}
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const { createWebHistory, createRouter } = await importShared("vue-router");
const router = createRouter({
  history: createWebHistory(),
  routes: [{ ...lesson }]
});
const { createApp } = await importShared("vue");
createApp(App).use(router).mount("#app");
