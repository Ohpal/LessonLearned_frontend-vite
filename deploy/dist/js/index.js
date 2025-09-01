import { importShared } from "./__federation_fn_import-Dc6jQS63.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import lesson from "./__federation_expose_LessonRouter-C_c4W7h8.js";
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
const _sfc_main = {};
const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = await importShared("vue");
function _sfc_render(_ctx, _cache) {
  const _component_router_view = _resolveComponent("router-view");
  return _openBlock(), _createElementBlock("main", null, [
    _createVNode(_component_router_view)
  ]);
}
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const { createWebHistory, createRouter } = await importShared("vue-router");
const router = createRouter({
  history: createWebHistory(),
  routes: [{ ...lesson }]
});
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement$1(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
const applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement$1(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement$1(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle$1(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
const arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle$1(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
const computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
const eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle$1(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle$1(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement$1(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement$1(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement$1(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement$1(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i2 = 0; i2 < placements2.length; i2++) {
    var placement = placements2[i2];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i3) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i3).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i2 = numberOfChecks; _i2 > 0; _i2--) {
      var _ret = _loop(_i2);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
const flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
const hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
const offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    placement: state.placement
  });
}
const popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
const preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn3) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn3());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement$1(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn3 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn3 === "function") {
            state = fn3({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn3) {
        return fn3();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper$2 = /* @__PURE__ */ popperGenerator();
var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
var createPopper$1 = /* @__PURE__ */ popperGenerator({
  defaultModifiers: defaultModifiers$1
});
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
const Popper = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain,
  afterRead,
  afterWrite,
  applyStyles: applyStyles$1,
  arrow: arrow$1,
  auto,
  basePlacements,
  beforeMain,
  beforeRead,
  beforeWrite,
  bottom,
  clippingParents,
  computeStyles: computeStyles$1,
  createPopper,
  createPopperBase: createPopper$2,
  createPopperLite: createPopper$1,
  detectOverflow,
  end,
  eventListeners,
  flip: flip$1,
  hide: hide$1,
  left,
  main,
  modifierPhases,
  offset: offset$1,
  placements,
  popper,
  popperGenerator,
  popperOffsets: popperOffsets$1,
  preventOverflow: preventOverflow$1,
  read,
  reference,
  right,
  start,
  top,
  variationPlacements,
  viewport,
  write
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * Bootstrap v5.3.7 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const elementMap = /* @__PURE__ */ new Map();
const Data = {
  set(element, key, instance) {
    if (!elementMap.has(element)) {
      elementMap.set(element, /* @__PURE__ */ new Map());
    }
    const instanceMap = elementMap.get(element);
    if (!instanceMap.has(key) && instanceMap.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
      return;
    }
    instanceMap.set(key, instance);
  },
  get(element, key) {
    if (elementMap.has(element)) {
      return elementMap.get(element).get(key) || null;
    }
    return null;
  },
  remove(element, key) {
    if (!elementMap.has(element)) {
      return;
    }
    const instanceMap = elementMap.get(element);
    instanceMap.delete(key);
    if (instanceMap.size === 0) {
      elementMap.delete(element);
    }
  }
};
const MAX_UID = 1e6;
const MILLISECONDS_MULTIPLIER = 1e3;
const TRANSITION_END = "transitionend";
const parseSelector = (selector) => {
  if (selector && window.CSS && window.CSS.escape) {
    selector = selector.replace(/#([^\s"#']+)/g, (match, id2) => `#${CSS.escape(id2)}`);
  }
  return selector;
};
const toType = (object) => {
  if (object === null || object === void 0) {
    return `${object}`;
  }
  return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
};
const getUID = (prefix) => {
  do {
    prefix += Math.floor(Math.random() * MAX_UID);
  } while (document.getElementById(prefix));
  return prefix;
};
const getTransitionDurationFromElement = (element) => {
  if (!element) {
    return 0;
  }
  let {
    transitionDuration,
    transitionDelay
  } = window.getComputedStyle(element);
  const floatTransitionDuration = Number.parseFloat(transitionDuration);
  const floatTransitionDelay = Number.parseFloat(transitionDelay);
  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  }
  transitionDuration = transitionDuration.split(",")[0];
  transitionDelay = transitionDelay.split(",")[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};
const triggerTransitionEnd = (element) => {
  element.dispatchEvent(new Event(TRANSITION_END));
};
const isElement = (object) => {
  if (!object || typeof object !== "object") {
    return false;
  }
  if (typeof object.jquery !== "undefined") {
    object = object[0];
  }
  return typeof object.nodeType !== "undefined";
};
const getElement = (object) => {
  if (isElement(object)) {
    return object.jquery ? object[0] : object;
  }
  if (typeof object === "string" && object.length > 0) {
    return document.querySelector(parseSelector(object));
  }
  return null;
};
const isVisible = (element) => {
  if (!isElement(element) || element.getClientRects().length === 0) {
    return false;
  }
  const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
  const closedDetails = element.closest("details:not([open])");
  if (!closedDetails) {
    return elementIsVisible;
  }
  if (closedDetails !== element) {
    const summary = element.closest("summary");
    if (summary && summary.parentNode !== closedDetails) {
      return false;
    }
    if (summary === null) {
      return false;
    }
  }
  return elementIsVisible;
};
const isDisabled = (element) => {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true;
  }
  if (element.classList.contains("disabled")) {
    return true;
  }
  if (typeof element.disabled !== "undefined") {
    return element.disabled;
  }
  return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
};
const findShadowRoot = (element) => {
  if (!document.documentElement.attachShadow) {
    return null;
  }
  if (typeof element.getRootNode === "function") {
    const root = element.getRootNode();
    return root instanceof ShadowRoot ? root : null;
  }
  if (element instanceof ShadowRoot) {
    return element;
  }
  if (!element.parentNode) {
    return null;
  }
  return findShadowRoot(element.parentNode);
};
const noop = () => {
};
const reflow = (element) => {
  element.offsetHeight;
};
const getjQuery = () => {
  if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
    return window.jQuery;
  }
  return null;
};
const DOMContentLoadedCallbacks = [];
const onDOMContentLoaded = (callback) => {
  if (document.readyState === "loading") {
    if (!DOMContentLoadedCallbacks.length) {
      document.addEventListener("DOMContentLoaded", () => {
        for (const callback2 of DOMContentLoadedCallbacks) {
          callback2();
        }
      });
    }
    DOMContentLoadedCallbacks.push(callback);
  } else {
    callback();
  }
};
const isRTL = () => document.documentElement.dir === "rtl";
const defineJQueryPlugin = (plugin) => {
  onDOMContentLoaded(() => {
    const $2 = getjQuery();
    if ($2) {
      const name = plugin.NAME;
      const JQUERY_NO_CONFLICT = $2.fn[name];
      $2.fn[name] = plugin.jQueryInterface;
      $2.fn[name].Constructor = plugin;
      $2.fn[name].noConflict = () => {
        $2.fn[name] = JQUERY_NO_CONFLICT;
        return plugin.jQueryInterface;
      };
    }
  });
};
const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
  return typeof possibleCallback === "function" ? possibleCallback.call(...args) : defaultValue;
};
const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
  if (!waitForTransition) {
    execute(callback);
    return;
  }
  const durationPadding = 5;
  const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
  let called = false;
  const handler = ({
    target
  }) => {
    if (target !== transitionElement) {
      return;
    }
    called = true;
    transitionElement.removeEventListener(TRANSITION_END, handler);
    execute(callback);
  };
  transitionElement.addEventListener(TRANSITION_END, handler);
  setTimeout(() => {
    if (!called) {
      triggerTransitionEnd(transitionElement);
    }
  }, emulatedDuration);
};
const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
  const listLength = list.length;
  let index = list.indexOf(activeElement);
  if (index === -1) {
    return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
  }
  index += shouldGetNext ? 1 : -1;
  if (isCycleAllowed) {
    index = (index + listLength) % listLength;
  }
  return list[Math.max(0, Math.min(index, listLength - 1))];
};
const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
const stripNameRegex = /\..*/;
const stripUidRegex = /::\d+$/;
const eventRegistry = {};
let uidEvent = 1;
const customEvents = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
};
const nativeEvents = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function makeEventUid(element, uid) {
  return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
}
function getElementEvents(element) {
  const uid = makeEventUid(element);
  element.uidEvent = uid;
  eventRegistry[uid] = eventRegistry[uid] || {};
  return eventRegistry[uid];
}
function bootstrapHandler(element, fn3) {
  return function handler(event) {
    hydrateObj(event, {
      delegateTarget: element
    });
    if (handler.oneOff) {
      EventHandler.off(element, event.type, fn3);
    }
    return fn3.apply(element, [event]);
  };
}
function bootstrapDelegationHandler(element, selector, fn3) {
  return function handler(event) {
    const domElements = element.querySelectorAll(selector);
    for (let {
      target
    } = event; target && target !== this; target = target.parentNode) {
      for (const domElement of domElements) {
        if (domElement !== target) {
          continue;
        }
        hydrateObj(event, {
          delegateTarget: target
        });
        if (handler.oneOff) {
          EventHandler.off(element, event.type, selector, fn3);
        }
        return fn3.apply(target, [event]);
      }
    }
  };
}
function findHandler(events, callable, delegationSelector = null) {
  return Object.values(events).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
}
function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
  const isDelegated = typeof handler === "string";
  const callable = isDelegated ? delegationFunction : handler || delegationFunction;
  let typeEvent = getTypeEvent(originalTypeEvent);
  if (!nativeEvents.has(typeEvent)) {
    typeEvent = originalTypeEvent;
  }
  return [isDelegated, callable, typeEvent];
}
function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
  if (typeof originalTypeEvent !== "string" || !element) {
    return;
  }
  let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
  if (originalTypeEvent in customEvents) {
    const wrapFunction = (fn4) => {
      return function(event) {
        if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
          return fn4.call(this, event);
        }
      };
    };
    callable = wrapFunction(callable);
  }
  const events = getElementEvents(element);
  const handlers = events[typeEvent] || (events[typeEvent] = {});
  const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
  if (previousFunction) {
    previousFunction.oneOff = previousFunction.oneOff && oneOff;
    return;
  }
  const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
  const fn3 = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
  fn3.delegationSelector = isDelegated ? handler : null;
  fn3.callable = callable;
  fn3.oneOff = oneOff;
  fn3.uidEvent = uid;
  handlers[uid] = fn3;
  element.addEventListener(typeEvent, fn3, isDelegated);
}
function removeHandler(element, events, typeEvent, handler, delegationSelector) {
  const fn3 = findHandler(events[typeEvent], handler, delegationSelector);
  if (!fn3) {
    return;
  }
  element.removeEventListener(typeEvent, fn3, Boolean(delegationSelector));
  delete events[typeEvent][fn3.uidEvent];
}
function removeNamespacedHandlers(element, events, typeEvent, namespace) {
  const storeElementEvent = events[typeEvent] || {};
  for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
    if (handlerKey.includes(namespace)) {
      removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
    }
  }
}
function getTypeEvent(event) {
  event = event.replace(stripNameRegex, "");
  return customEvents[event] || event;
}
const EventHandler = {
  on(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, false);
  },
  one(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, true);
  },
  off(element, originalTypeEvent, handler, delegationFunction) {
    if (typeof originalTypeEvent !== "string" || !element) {
      return;
    }
    const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
    const inNamespace = typeEvent !== originalTypeEvent;
    const events = getElementEvents(element);
    const storeElementEvent = events[typeEvent] || {};
    const isNamespace = originalTypeEvent.startsWith(".");
    if (typeof callable !== "undefined") {
      if (!Object.keys(storeElementEvent).length) {
        return;
      }
      removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
      return;
    }
    if (isNamespace) {
      for (const elementEvent of Object.keys(events)) {
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
      }
    }
    for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
      const handlerKey = keyHandlers.replace(stripUidRegex, "");
      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  },
  trigger(element, event, args) {
    if (typeof event !== "string" || !element) {
      return null;
    }
    const $2 = getjQuery();
    const typeEvent = getTypeEvent(event);
    const inNamespace = event !== typeEvent;
    let jQueryEvent = null;
    let bubbles = true;
    let nativeDispatch = true;
    let defaultPrevented = false;
    if (inNamespace && $2) {
      jQueryEvent = $2.Event(event, args);
      $2(element).trigger(jQueryEvent);
      bubbles = !jQueryEvent.isPropagationStopped();
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
      defaultPrevented = jQueryEvent.isDefaultPrevented();
    }
    const evt = hydrateObj(new Event(event, {
      bubbles,
      cancelable: true
    }), args);
    if (defaultPrevented) {
      evt.preventDefault();
    }
    if (nativeDispatch) {
      element.dispatchEvent(evt);
    }
    if (evt.defaultPrevented && jQueryEvent) {
      jQueryEvent.preventDefault();
    }
    return evt;
  }
};
function hydrateObj(obj, meta = {}) {
  for (const [key, value] of Object.entries(meta)) {
    try {
      obj[key] = value;
    } catch (_unused) {
      Object.defineProperty(obj, key, {
        configurable: true,
        get() {
          return value;
        }
      });
    }
  }
  return obj;
}
function normalizeData(value) {
  if (value === "true") {
    return true;
  }
  if (value === "false") {
    return false;
  }
  if (value === Number(value).toString()) {
    return Number(value);
  }
  if (value === "" || value === "null") {
    return null;
  }
  if (typeof value !== "string") {
    return value;
  }
  try {
    return JSON.parse(decodeURIComponent(value));
  } catch (_unused) {
    return value;
  }
}
function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
}
const Manipulator = {
  setDataAttribute(element, key, value) {
    element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
  },
  removeDataAttribute(element, key) {
    element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
  },
  getDataAttributes(element) {
    if (!element) {
      return {};
    }
    const attributes = {};
    const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
    for (const key of bsKeys) {
      let pureKey = key.replace(/^bs/, "");
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1);
      attributes[pureKey] = normalizeData(element.dataset[key]);
    }
    return attributes;
  },
  getDataAttribute(element, key) {
    return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
  }
};
class Config {
  // Getters
  static get Default() {
    return {};
  }
  static get DefaultType() {
    return {};
  }
  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!');
  }
  _getConfig(config) {
    config = this._mergeConfigObj(config);
    config = this._configAfterMerge(config);
    this._typeCheckConfig(config);
    return config;
  }
  _configAfterMerge(config) {
    return config;
  }
  _mergeConfigObj(config, element) {
    const jsonConfig = isElement(element) ? Manipulator.getDataAttribute(element, "config") : {};
    return {
      ...this.constructor.Default,
      ...typeof jsonConfig === "object" ? jsonConfig : {},
      ...isElement(element) ? Manipulator.getDataAttributes(element) : {},
      ...typeof config === "object" ? config : {}
    };
  }
  _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
    for (const [property, expectedTypes] of Object.entries(configTypes)) {
      const value = config[property];
      const valueType = isElement(value) ? "element" : toType(value);
      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
      }
    }
  }
}
const VERSION = "5.3.7";
class BaseComponent extends Config {
  constructor(element, config) {
    super();
    element = getElement(element);
    if (!element) {
      return;
    }
    this._element = element;
    this._config = this._getConfig(config);
    Data.set(this._element, this.constructor.DATA_KEY, this);
  }
  // Public
  dispose() {
    Data.remove(this._element, this.constructor.DATA_KEY);
    EventHandler.off(this._element, this.constructor.EVENT_KEY);
    for (const propertyName of Object.getOwnPropertyNames(this)) {
      this[propertyName] = null;
    }
  }
  // Private
  _queueCallback(callback, element, isAnimated = true) {
    executeAfterTransition(callback, element, isAnimated);
  }
  _getConfig(config) {
    config = this._mergeConfigObj(config, this._element);
    config = this._configAfterMerge(config);
    this._typeCheckConfig(config);
    return config;
  }
  // Static
  static getInstance(element) {
    return Data.get(getElement(element), this.DATA_KEY);
  }
  static getOrCreateInstance(element, config = {}) {
    return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
  }
  static get VERSION() {
    return VERSION;
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
  static eventName(name) {
    return `${name}${this.EVENT_KEY}`;
  }
}
const getSelector = (element) => {
  let selector = element.getAttribute("data-bs-target");
  if (!selector || selector === "#") {
    let hrefAttribute = element.getAttribute("href");
    if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
      return null;
    }
    if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
      hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
    }
    selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
  }
  return selector ? selector.split(",").map((sel) => parseSelector(sel)).join(",") : null;
};
const SelectorEngine = {
  find(selector, element = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
  },
  findOne(selector, element = document.documentElement) {
    return Element.prototype.querySelector.call(element, selector);
  },
  children(element, selector) {
    return [].concat(...element.children).filter((child) => child.matches(selector));
  },
  parents(element, selector) {
    const parents = [];
    let ancestor = element.parentNode.closest(selector);
    while (ancestor) {
      parents.push(ancestor);
      ancestor = ancestor.parentNode.closest(selector);
    }
    return parents;
  },
  prev(element, selector) {
    let previous = element.previousElementSibling;
    while (previous) {
      if (previous.matches(selector)) {
        return [previous];
      }
      previous = previous.previousElementSibling;
    }
    return [];
  },
  // TODO: this is now unused; remove later along with prev()
  next(element, selector) {
    let next = element.nextElementSibling;
    while (next) {
      if (next.matches(selector)) {
        return [next];
      }
      next = next.nextElementSibling;
    }
    return [];
  },
  focusableChildren(element) {
    const focusables = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((selector) => `${selector}:not([tabindex^="-"])`).join(",");
    return this.find(focusables, element).filter((el2) => !isDisabled(el2) && isVisible(el2));
  },
  getSelectorFromElement(element) {
    const selector = getSelector(element);
    if (selector) {
      return SelectorEngine.findOne(selector) ? selector : null;
    }
    return null;
  },
  getElementFromSelector(element) {
    const selector = getSelector(element);
    return selector ? SelectorEngine.findOne(selector) : null;
  },
  getMultipleElementsFromSelector(element) {
    const selector = getSelector(element);
    return selector ? SelectorEngine.find(selector) : [];
  }
};
const enableDismissTrigger = (component, method = "hide") => {
  const clickEvent = `click.dismiss${component.EVENT_KEY}`;
  const name = component.NAME;
  EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
    const instance = component.getOrCreateInstance(target);
    instance[method]();
  });
};
const NAME$f = "alert";
const DATA_KEY$a = "bs.alert";
const EVENT_KEY$b = `.${DATA_KEY$a}`;
const EVENT_CLOSE = `close${EVENT_KEY$b}`;
const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
const CLASS_NAME_FADE$5 = "fade";
const CLASS_NAME_SHOW$8 = "show";
class Alert extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME$f;
  }
  // Public
  close() {
    const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
    if (closeEvent.defaultPrevented) {
      return;
    }
    this._element.classList.remove(CLASS_NAME_SHOW$8);
    const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
    this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
  }
  // Private
  _destroyElement() {
    this._element.remove();
    EventHandler.trigger(this._element, EVENT_CLOSED);
    this.dispose();
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = Alert.getOrCreateInstance(this);
      if (typeof config !== "string") {
        return;
      }
      if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config](this);
    });
  }
}
enableDismissTrigger(Alert, "close");
defineJQueryPlugin(Alert);
const NAME$e = "button";
const DATA_KEY$9 = "bs.button";
const EVENT_KEY$a = `.${DATA_KEY$9}`;
const DATA_API_KEY$6 = ".data-api";
const CLASS_NAME_ACTIVE$3 = "active";
const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
class Button extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME$e;
  }
  // Public
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = Button.getOrCreateInstance(this);
      if (config === "toggle") {
        data[config]();
      }
    });
  }
}
EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, (event) => {
  event.preventDefault();
  const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
  const data = Button.getOrCreateInstance(button);
  data.toggle();
});
defineJQueryPlugin(Button);
const NAME$d = "swipe";
const EVENT_KEY$9 = ".bs.swipe";
const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
const POINTER_TYPE_TOUCH = "touch";
const POINTER_TYPE_PEN = "pen";
const CLASS_NAME_POINTER_EVENT = "pointer-event";
const SWIPE_THRESHOLD = 40;
const Default$c = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
};
const DefaultType$c = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
class Swipe extends Config {
  constructor(element, config) {
    super();
    this._element = element;
    if (!element || !Swipe.isSupported()) {
      return;
    }
    this._config = this._getConfig(config);
    this._deltaX = 0;
    this._supportPointerEvents = Boolean(window.PointerEvent);
    this._initEvents();
  }
  // Getters
  static get Default() {
    return Default$c;
  }
  static get DefaultType() {
    return DefaultType$c;
  }
  static get NAME() {
    return NAME$d;
  }
  // Public
  dispose() {
    EventHandler.off(this._element, EVENT_KEY$9);
  }
  // Private
  _start(event) {
    if (!this._supportPointerEvents) {
      this._deltaX = event.touches[0].clientX;
      return;
    }
    if (this._eventIsPointerPenTouch(event)) {
      this._deltaX = event.clientX;
    }
  }
  _end(event) {
    if (this._eventIsPointerPenTouch(event)) {
      this._deltaX = event.clientX - this._deltaX;
    }
    this._handleSwipe();
    execute(this._config.endCallback);
  }
  _move(event) {
    this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const absDeltaX = Math.abs(this._deltaX);
    if (absDeltaX <= SWIPE_THRESHOLD) {
      return;
    }
    const direction = absDeltaX / this._deltaX;
    this._deltaX = 0;
    if (!direction) {
      return;
    }
    execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    if (this._supportPointerEvents) {
      EventHandler.on(this._element, EVENT_POINTERDOWN, (event) => this._start(event));
      EventHandler.on(this._element, EVENT_POINTERUP, (event) => this._end(event));
      this._element.classList.add(CLASS_NAME_POINTER_EVENT);
    } else {
      EventHandler.on(this._element, EVENT_TOUCHSTART, (event) => this._start(event));
      EventHandler.on(this._element, EVENT_TOUCHMOVE, (event) => this._move(event));
      EventHandler.on(this._element, EVENT_TOUCHEND, (event) => this._end(event));
    }
  }
  _eventIsPointerPenTouch(event) {
    return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const NAME$c = "carousel";
const DATA_KEY$8 = "bs.carousel";
const EVENT_KEY$8 = `.${DATA_KEY$8}`;
const DATA_API_KEY$5 = ".data-api";
const ARROW_LEFT_KEY$1 = "ArrowLeft";
const ARROW_RIGHT_KEY$1 = "ArrowRight";
const TOUCHEVENT_COMPAT_WAIT = 500;
const ORDER_NEXT = "next";
const ORDER_PREV = "prev";
const DIRECTION_LEFT = "left";
const DIRECTION_RIGHT = "right";
const EVENT_SLIDE = `slide${EVENT_KEY$8}`;
const EVENT_SLID = `slid${EVENT_KEY$8}`;
const EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
const EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
const EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
const EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
const EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
const CLASS_NAME_CAROUSEL = "carousel";
const CLASS_NAME_ACTIVE$2 = "active";
const CLASS_NAME_SLIDE = "slide";
const CLASS_NAME_END = "carousel-item-end";
const CLASS_NAME_START = "carousel-item-start";
const CLASS_NAME_NEXT = "carousel-item-next";
const CLASS_NAME_PREV = "carousel-item-prev";
const SELECTOR_ACTIVE = ".active";
const SELECTOR_ITEM = ".carousel-item";
const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
const SELECTOR_ITEM_IMG = ".carousel-item img";
const SELECTOR_INDICATORS = ".carousel-indicators";
const SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
const KEY_TO_DIRECTION = {
  [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
  [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
};
const Default$b = {
  interval: 5e3,
  keyboard: true,
  pause: "hover",
  ride: false,
  touch: true,
  wrap: true
};
const DefaultType$b = {
  interval: "(number|boolean)",
  // TODO:v6 remove boolean support
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
class Carousel extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._interval = null;
    this._activeElement = null;
    this._isSliding = false;
    this.touchTimeout = null;
    this._swipeHelper = null;
    this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
    this._addEventListeners();
    if (this._config.ride === CLASS_NAME_CAROUSEL) {
      this.cycle();
    }
  }
  // Getters
  static get Default() {
    return Default$b;
  }
  static get DefaultType() {
    return DefaultType$b;
  }
  static get NAME() {
    return NAME$c;
  }
  // Public
  next() {
    this._slide(ORDER_NEXT);
  }
  nextWhenVisible() {
    if (!document.hidden && isVisible(this._element)) {
      this.next();
    }
  }
  prev() {
    this._slide(ORDER_PREV);
  }
  pause() {
    if (this._isSliding) {
      triggerTransitionEnd(this._element);
    }
    this._clearInterval();
  }
  cycle() {
    this._clearInterval();
    this._updateInterval();
    this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (!this._config.ride) {
      return;
    }
    if (this._isSliding) {
      EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
      return;
    }
    this.cycle();
  }
  to(index) {
    const items = this._getItems();
    if (index > items.length - 1 || index < 0) {
      return;
    }
    if (this._isSliding) {
      EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
      return;
    }
    const activeIndex = this._getItemIndex(this._getActive());
    if (activeIndex === index) {
      return;
    }
    const order2 = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
    this._slide(order2, items[index]);
  }
  dispose() {
    if (this._swipeHelper) {
      this._swipeHelper.dispose();
    }
    super.dispose();
  }
  // Private
  _configAfterMerge(config) {
    config.defaultInterval = config.interval;
    return config;
  }
  _addEventListeners() {
    if (this._config.keyboard) {
      EventHandler.on(this._element, EVENT_KEYDOWN$1, (event) => this._keydown(event));
    }
    if (this._config.pause === "hover") {
      EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
      EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
    }
    if (this._config.touch && Swipe.isSupported()) {
      this._addTouchEventListeners();
    }
  }
  _addTouchEventListeners() {
    for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
      EventHandler.on(img, EVENT_DRAG_START, (event) => event.preventDefault());
    }
    const endCallBack = () => {
      if (this._config.pause !== "hover") {
        return;
      }
      this.pause();
      if (this.touchTimeout) {
        clearTimeout(this.touchTimeout);
      }
      this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
    };
    const swipeConfig = {
      leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
      rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
      endCallback: endCallBack
    };
    this._swipeHelper = new Swipe(this._element, swipeConfig);
  }
  _keydown(event) {
    if (/input|textarea/i.test(event.target.tagName)) {
      return;
    }
    const direction = KEY_TO_DIRECTION[event.key];
    if (direction) {
      event.preventDefault();
      this._slide(this._directionToOrder(direction));
    }
  }
  _getItemIndex(element) {
    return this._getItems().indexOf(element);
  }
  _setActiveIndicatorElement(index) {
    if (!this._indicatorsElement) {
      return;
    }
    const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
    activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
    activeIndicator.removeAttribute("aria-current");
    const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
    if (newActiveIndicator) {
      newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
      newActiveIndicator.setAttribute("aria-current", "true");
    }
  }
  _updateInterval() {
    const element = this._activeElement || this._getActive();
    if (!element) {
      return;
    }
    const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
    this._config.interval = elementInterval || this._config.defaultInterval;
  }
  _slide(order2, element = null) {
    if (this._isSliding) {
      return;
    }
    const activeElement = this._getActive();
    const isNext = order2 === ORDER_NEXT;
    const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
    if (nextElement === activeElement) {
      return;
    }
    const nextElementIndex = this._getItemIndex(nextElement);
    const triggerEvent = (eventName) => {
      return EventHandler.trigger(this._element, eventName, {
        relatedTarget: nextElement,
        direction: this._orderToDirection(order2),
        from: this._getItemIndex(activeElement),
        to: nextElementIndex
      });
    };
    const slideEvent = triggerEvent(EVENT_SLIDE);
    if (slideEvent.defaultPrevented) {
      return;
    }
    if (!activeElement || !nextElement) {
      return;
    }
    const isCycling = Boolean(this._interval);
    this.pause();
    this._isSliding = true;
    this._setActiveIndicatorElement(nextElementIndex);
    this._activeElement = nextElement;
    const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
    const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
    nextElement.classList.add(orderClassName);
    reflow(nextElement);
    activeElement.classList.add(directionalClassName);
    nextElement.classList.add(directionalClassName);
    const completeCallBack = () => {
      nextElement.classList.remove(directionalClassName, orderClassName);
      nextElement.classList.add(CLASS_NAME_ACTIVE$2);
      activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
      this._isSliding = false;
      triggerEvent(EVENT_SLID);
    };
    this._queueCallback(completeCallBack, activeElement, this._isAnimated());
    if (isCycling) {
      this.cycle();
    }
  }
  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_SLIDE);
  }
  _getActive() {
    return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
  }
  _getItems() {
    return SelectorEngine.find(SELECTOR_ITEM, this._element);
  }
  _clearInterval() {
    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }
  }
  _directionToOrder(direction) {
    if (isRTL()) {
      return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
    }
    return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
  }
  _orderToDirection(order2) {
    if (isRTL()) {
      return order2 === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return order2 === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = Carousel.getOrCreateInstance(this, config);
      if (typeof config === "number") {
        data.to(config);
        return;
      }
      if (typeof config === "string") {
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    });
  }
}
EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function(event) {
  const target = SelectorEngine.getElementFromSelector(this);
  if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
    return;
  }
  event.preventDefault();
  const carousel = Carousel.getOrCreateInstance(target);
  const slideIndex = this.getAttribute("data-bs-slide-to");
  if (slideIndex) {
    carousel.to(slideIndex);
    carousel._maybeEnableCycle();
    return;
  }
  if (Manipulator.getDataAttribute(this, "slide") === "next") {
    carousel.next();
    carousel._maybeEnableCycle();
    return;
  }
  carousel.prev();
  carousel._maybeEnableCycle();
});
EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
  const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
  for (const carousel of carousels) {
    Carousel.getOrCreateInstance(carousel);
  }
});
defineJQueryPlugin(Carousel);
const NAME$b = "collapse";
const DATA_KEY$7 = "bs.collapse";
const EVENT_KEY$7 = `.${DATA_KEY$7}`;
const DATA_API_KEY$4 = ".data-api";
const EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
const EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
const EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
const EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
const CLASS_NAME_SHOW$7 = "show";
const CLASS_NAME_COLLAPSE = "collapse";
const CLASS_NAME_COLLAPSING = "collapsing";
const CLASS_NAME_COLLAPSED = "collapsed";
const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
const CLASS_NAME_HORIZONTAL = "collapse-horizontal";
const WIDTH = "width";
const HEIGHT = "height";
const SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
const Default$a = {
  parent: null,
  toggle: true
};
const DefaultType$a = {
  parent: "(null|element)",
  toggle: "boolean"
};
class Collapse extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._isTransitioning = false;
    this._triggerArray = [];
    const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
    for (const elem of toggleList) {
      const selector = SelectorEngine.getSelectorFromElement(elem);
      const filterElement = SelectorEngine.find(selector).filter((foundElement) => foundElement === this._element);
      if (selector !== null && filterElement.length) {
        this._triggerArray.push(elem);
      }
    }
    this._initializeChildren();
    if (!this._config.parent) {
      this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
    }
    if (this._config.toggle) {
      this.toggle();
    }
  }
  // Getters
  static get Default() {
    return Default$a;
  }
  static get DefaultType() {
    return DefaultType$a;
  }
  static get NAME() {
    return NAME$b;
  }
  // Public
  toggle() {
    if (this._isShown()) {
      this.hide();
    } else {
      this.show();
    }
  }
  show() {
    if (this._isTransitioning || this._isShown()) {
      return;
    }
    let activeChildren = [];
    if (this._config.parent) {
      activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element) => element !== this._element).map((element) => Collapse.getOrCreateInstance(element, {
        toggle: false
      }));
    }
    if (activeChildren.length && activeChildren[0]._isTransitioning) {
      return;
    }
    const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
    if (startEvent.defaultPrevented) {
      return;
    }
    for (const activeInstance of activeChildren) {
      activeInstance.hide();
    }
    const dimension = this._getDimension();
    this._element.classList.remove(CLASS_NAME_COLLAPSE);
    this._element.classList.add(CLASS_NAME_COLLAPSING);
    this._element.style[dimension] = 0;
    this._addAriaAndCollapsedClass(this._triggerArray, true);
    this._isTransitioning = true;
    const complete = () => {
      this._isTransitioning = false;
      this._element.classList.remove(CLASS_NAME_COLLAPSING);
      this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
      this._element.style[dimension] = "";
      EventHandler.trigger(this._element, EVENT_SHOWN$6);
    };
    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    const scrollSize = `scroll${capitalizedDimension}`;
    this._queueCallback(complete, this._element, true);
    this._element.style[dimension] = `${this._element[scrollSize]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown()) {
      return;
    }
    const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
    if (startEvent.defaultPrevented) {
      return;
    }
    const dimension = this._getDimension();
    this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
    reflow(this._element);
    this._element.classList.add(CLASS_NAME_COLLAPSING);
    this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
    for (const trigger of this._triggerArray) {
      const element = SelectorEngine.getElementFromSelector(trigger);
      if (element && !this._isShown(element)) {
        this._addAriaAndCollapsedClass([trigger], false);
      }
    }
    this._isTransitioning = true;
    const complete = () => {
      this._isTransitioning = false;
      this._element.classList.remove(CLASS_NAME_COLLAPSING);
      this._element.classList.add(CLASS_NAME_COLLAPSE);
      EventHandler.trigger(this._element, EVENT_HIDDEN$6);
    };
    this._element.style[dimension] = "";
    this._queueCallback(complete, this._element, true);
  }
  // Private
  _isShown(element = this._element) {
    return element.classList.contains(CLASS_NAME_SHOW$7);
  }
  _configAfterMerge(config) {
    config.toggle = Boolean(config.toggle);
    config.parent = getElement(config.parent);
    return config;
  }
  _getDimension() {
    return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
  }
  _initializeChildren() {
    if (!this._config.parent) {
      return;
    }
    const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
    for (const element of children) {
      const selected = SelectorEngine.getElementFromSelector(element);
      if (selected) {
        this._addAriaAndCollapsedClass([element], this._isShown(selected));
      }
    }
  }
  _getFirstLevelChildren(selector) {
    const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
    return SelectorEngine.find(selector, this._config.parent).filter((element) => !children.includes(element));
  }
  _addAriaAndCollapsedClass(triggerArray, isOpen) {
    if (!triggerArray.length) {
      return;
    }
    for (const element of triggerArray) {
      element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
      element.setAttribute("aria-expanded", isOpen);
    }
  }
  // Static
  static jQueryInterface(config) {
    const _config = {};
    if (typeof config === "string" && /show|hide/.test(config)) {
      _config.toggle = false;
    }
    return this.each(function() {
      const data = Collapse.getOrCreateInstance(this, _config);
      if (typeof config === "string") {
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    });
  }
}
EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function(event) {
  if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") {
    event.preventDefault();
  }
  for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {
    Collapse.getOrCreateInstance(element, {
      toggle: false
    }).toggle();
  }
});
defineJQueryPlugin(Collapse);
const NAME$a = "dropdown";
const DATA_KEY$6 = "bs.dropdown";
const EVENT_KEY$6 = `.${DATA_KEY$6}`;
const DATA_API_KEY$3 = ".data-api";
const ESCAPE_KEY$2 = "Escape";
const TAB_KEY$1 = "Tab";
const ARROW_UP_KEY$1 = "ArrowUp";
const ARROW_DOWN_KEY$1 = "ArrowDown";
const RIGHT_MOUSE_BUTTON = 2;
const EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
const EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
const EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
const CLASS_NAME_SHOW$6 = "show";
const CLASS_NAME_DROPUP = "dropup";
const CLASS_NAME_DROPEND = "dropend";
const CLASS_NAME_DROPSTART = "dropstart";
const CLASS_NAME_DROPUP_CENTER = "dropup-center";
const CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
const SELECTOR_MENU = ".dropdown-menu";
const SELECTOR_NAVBAR = ".navbar";
const SELECTOR_NAVBAR_NAV = ".navbar-nav";
const SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
const PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
const PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
const PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
const PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
const PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
const PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
const PLACEMENT_TOPCENTER = "top";
const PLACEMENT_BOTTOMCENTER = "bottom";
const Default$9 = {
  autoClose: true,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
};
const DefaultType$9 = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
class Dropdown extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._popper = null;
    this._parent = this._element.parentNode;
    this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
    this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return Default$9;
  }
  static get DefaultType() {
    return DefaultType$9;
  }
  static get NAME() {
    return NAME$a;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (isDisabled(this._element) || this._isShown()) {
      return;
    }
    const relatedTarget = {
      relatedTarget: this._element
    };
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
    if (showEvent.defaultPrevented) {
      return;
    }
    this._createPopper();
    if ("ontouchstart" in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.on(element, "mouseover", noop);
      }
    }
    this._element.focus();
    this._element.setAttribute("aria-expanded", true);
    this._menu.classList.add(CLASS_NAME_SHOW$6);
    this._element.classList.add(CLASS_NAME_SHOW$6);
    EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
  }
  hide() {
    if (isDisabled(this._element) || !this._isShown()) {
      return;
    }
    const relatedTarget = {
      relatedTarget: this._element
    };
    this._completeHide(relatedTarget);
  }
  dispose() {
    if (this._popper) {
      this._popper.destroy();
    }
    super.dispose();
  }
  update() {
    this._inNavbar = this._detectNavbar();
    if (this._popper) {
      this._popper.update();
    }
  }
  // Private
  _completeHide(relatedTarget) {
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
    if (hideEvent.defaultPrevented) {
      return;
    }
    if ("ontouchstart" in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.off(element, "mouseover", noop);
      }
    }
    if (this._popper) {
      this._popper.destroy();
    }
    this._menu.classList.remove(CLASS_NAME_SHOW$6);
    this._element.classList.remove(CLASS_NAME_SHOW$6);
    this._element.setAttribute("aria-expanded", "false");
    Manipulator.removeDataAttribute(this._menu, "popper");
    EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
    this._element.focus();
  }
  _getConfig(config) {
    config = super._getConfig(config);
    if (typeof config.reference === "object" && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== "function") {
      throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    }
    return config;
  }
  _createPopper() {
    if (typeof Popper === "undefined") {
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
    }
    let referenceElement = this._element;
    if (this._config.reference === "parent") {
      referenceElement = this._parent;
    } else if (isElement(this._config.reference)) {
      referenceElement = getElement(this._config.reference);
    } else if (typeof this._config.reference === "object") {
      referenceElement = this._config.reference;
    }
    const popperConfig = this._getPopperConfig();
    this._popper = createPopper(referenceElement, this._menu, popperConfig);
  }
  _isShown() {
    return this._menu.classList.contains(CLASS_NAME_SHOW$6);
  }
  _getPlacement() {
    const parentDropdown = this._parent;
    if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
      return PLACEMENT_RIGHT;
    }
    if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
      return PLACEMENT_LEFT;
    }
    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
      return PLACEMENT_TOPCENTER;
    }
    if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
      return PLACEMENT_BOTTOMCENTER;
    }
    const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
      return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
    }
    return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
  }
  _detectNavbar() {
    return this._element.closest(SELECTOR_NAVBAR) !== null;
  }
  _getOffset() {
    const {
      offset: offset2
    } = this._config;
    if (typeof offset2 === "string") {
      return offset2.split(",").map((value) => Number.parseInt(value, 10));
    }
    if (typeof offset2 === "function") {
      return (popperData) => offset2(popperData, this._element);
    }
    return offset2;
  }
  _getPopperConfig() {
    const defaultBsPopperConfig = {
      placement: this._getPlacement(),
      modifiers: [{
        name: "preventOverflow",
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: "offset",
        options: {
          offset: this._getOffset()
        }
      }]
    };
    if (this._inNavbar || this._config.display === "static") {
      Manipulator.setDataAttribute(this._menu, "popper", "static");
      defaultBsPopperConfig.modifiers = [{
        name: "applyStyles",
        enabled: false
      }];
    }
    return {
      ...defaultBsPopperConfig,
      ...execute(this._config.popperConfig, [void 0, defaultBsPopperConfig])
    };
  }
  _selectMenuItem({
    key,
    target
  }) {
    const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter((element) => isVisible(element));
    if (!items.length) {
      return;
    }
    getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = Dropdown.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (typeof data[config] === "undefined") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
  static clearMenus(event) {
    if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY$1) {
      return;
    }
    const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
    for (const toggle of openToggles) {
      const context = Dropdown.getInstance(toggle);
      if (!context || context._config.autoClose === false) {
        continue;
      }
      const composedPath = event.composedPath();
      const isMenuTarget = composedPath.includes(context._menu);
      if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) {
        continue;
      }
      if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
        continue;
      }
      const relatedTarget = {
        relatedTarget: context._element
      };
      if (event.type === "click") {
        relatedTarget.clickEvent = event;
      }
      context._completeHide(relatedTarget);
    }
  }
  static dataApiKeydownHandler(event) {
    const isInput = /input|textarea/i.test(event.target.tagName);
    const isEscapeEvent = event.key === ESCAPE_KEY$2;
    const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);
    if (!isUpOrDownEvent && !isEscapeEvent) {
      return;
    }
    if (isInput && !isEscapeEvent) {
      return;
    }
    event.preventDefault();
    const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
    const instance = Dropdown.getOrCreateInstance(getToggleButton);
    if (isUpOrDownEvent) {
      event.stopPropagation();
      instance.show();
      instance._selectMenuItem(event);
      return;
    }
    if (instance._isShown()) {
      event.stopPropagation();
      instance.hide();
      getToggleButton.focus();
    }
  }
}
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function(event) {
  event.preventDefault();
  Dropdown.getOrCreateInstance(this).toggle();
});
defineJQueryPlugin(Dropdown);
const NAME$9 = "backdrop";
const CLASS_NAME_FADE$4 = "fade";
const CLASS_NAME_SHOW$5 = "show";
const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
const Default$8 = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: false,
  isVisible: true,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: "body"
  // give the choice to place backdrop under different elements
};
const DefaultType$8 = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
class Backdrop extends Config {
  constructor(config) {
    super();
    this._config = this._getConfig(config);
    this._isAppended = false;
    this._element = null;
  }
  // Getters
  static get Default() {
    return Default$8;
  }
  static get DefaultType() {
    return DefaultType$8;
  }
  static get NAME() {
    return NAME$9;
  }
  // Public
  show(callback) {
    if (!this._config.isVisible) {
      execute(callback);
      return;
    }
    this._append();
    const element = this._getElement();
    if (this._config.isAnimated) {
      reflow(element);
    }
    element.classList.add(CLASS_NAME_SHOW$5);
    this._emulateAnimation(() => {
      execute(callback);
    });
  }
  hide(callback) {
    if (!this._config.isVisible) {
      execute(callback);
      return;
    }
    this._getElement().classList.remove(CLASS_NAME_SHOW$5);
    this._emulateAnimation(() => {
      this.dispose();
      execute(callback);
    });
  }
  dispose() {
    if (!this._isAppended) {
      return;
    }
    EventHandler.off(this._element, EVENT_MOUSEDOWN);
    this._element.remove();
    this._isAppended = false;
  }
  // Private
  _getElement() {
    if (!this._element) {
      const backdrop = document.createElement("div");
      backdrop.className = this._config.className;
      if (this._config.isAnimated) {
        backdrop.classList.add(CLASS_NAME_FADE$4);
      }
      this._element = backdrop;
    }
    return this._element;
  }
  _configAfterMerge(config) {
    config.rootElement = getElement(config.rootElement);
    return config;
  }
  _append() {
    if (this._isAppended) {
      return;
    }
    const element = this._getElement();
    this._config.rootElement.append(element);
    EventHandler.on(element, EVENT_MOUSEDOWN, () => {
      execute(this._config.clickCallback);
    });
    this._isAppended = true;
  }
  _emulateAnimation(callback) {
    executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
  }
}
const NAME$8 = "focustrap";
const DATA_KEY$5 = "bs.focustrap";
const EVENT_KEY$5 = `.${DATA_KEY$5}`;
const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
const TAB_KEY = "Tab";
const TAB_NAV_FORWARD = "forward";
const TAB_NAV_BACKWARD = "backward";
const Default$7 = {
  autofocus: true,
  trapElement: null
  // The element to trap focus inside of
};
const DefaultType$7 = {
  autofocus: "boolean",
  trapElement: "element"
};
class FocusTrap extends Config {
  constructor(config) {
    super();
    this._config = this._getConfig(config);
    this._isActive = false;
    this._lastTabNavDirection = null;
  }
  // Getters
  static get Default() {
    return Default$7;
  }
  static get DefaultType() {
    return DefaultType$7;
  }
  static get NAME() {
    return NAME$8;
  }
  // Public
  activate() {
    if (this._isActive) {
      return;
    }
    if (this._config.autofocus) {
      this._config.trapElement.focus();
    }
    EventHandler.off(document, EVENT_KEY$5);
    EventHandler.on(document, EVENT_FOCUSIN$2, (event) => this._handleFocusin(event));
    EventHandler.on(document, EVENT_KEYDOWN_TAB, (event) => this._handleKeydown(event));
    this._isActive = true;
  }
  deactivate() {
    if (!this._isActive) {
      return;
    }
    this._isActive = false;
    EventHandler.off(document, EVENT_KEY$5);
  }
  // Private
  _handleFocusin(event) {
    const {
      trapElement
    } = this._config;
    if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
      return;
    }
    const elements = SelectorEngine.focusableChildren(trapElement);
    if (elements.length === 0) {
      trapElement.focus();
    } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
      elements[elements.length - 1].focus();
    } else {
      elements[0].focus();
    }
  }
  _handleKeydown(event) {
    if (event.key !== TAB_KEY) {
      return;
    }
    this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
  }
}
const SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
const SELECTOR_STICKY_CONTENT = ".sticky-top";
const PROPERTY_PADDING = "padding-right";
const PROPERTY_MARGIN = "margin-right";
class ScrollBarHelper {
  constructor() {
    this._element = document.body;
  }
  // Public
  getWidth() {
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  }
  hide() {
    const width = this.getWidth();
    this._disableOverFlow();
    this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
    this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
    this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue) => calculatedValue - width);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow");
    this._resetElementAttributes(this._element, PROPERTY_PADDING);
    this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
    this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  // Private
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow");
    this._element.style.overflow = "hidden";
  }
  _setElementAttributes(selector, styleProperty, callback) {
    const scrollbarWidth = this.getWidth();
    const manipulationCallBack = (element) => {
      if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
        return;
      }
      this._saveInitialAttribute(element, styleProperty);
      const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
      element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
    };
    this._applyManipulationCallback(selector, manipulationCallBack);
  }
  _saveInitialAttribute(element, styleProperty) {
    const actualValue = element.style.getPropertyValue(styleProperty);
    if (actualValue) {
      Manipulator.setDataAttribute(element, styleProperty, actualValue);
    }
  }
  _resetElementAttributes(selector, styleProperty) {
    const manipulationCallBack = (element) => {
      const value = Manipulator.getDataAttribute(element, styleProperty);
      if (value === null) {
        element.style.removeProperty(styleProperty);
        return;
      }
      Manipulator.removeDataAttribute(element, styleProperty);
      element.style.setProperty(styleProperty, value);
    };
    this._applyManipulationCallback(selector, manipulationCallBack);
  }
  _applyManipulationCallback(selector, callBack) {
    if (isElement(selector)) {
      callBack(selector);
      return;
    }
    for (const sel of SelectorEngine.find(selector, this._element)) {
      callBack(sel);
    }
  }
}
const NAME$7 = "modal";
const DATA_KEY$4 = "bs.modal";
const EVENT_KEY$4 = `.${DATA_KEY$4}`;
const DATA_API_KEY$2 = ".data-api";
const ESCAPE_KEY$1 = "Escape";
const EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
const EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
const EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
const EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
const EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
const CLASS_NAME_OPEN = "modal-open";
const CLASS_NAME_FADE$3 = "fade";
const CLASS_NAME_SHOW$4 = "show";
const CLASS_NAME_STATIC = "modal-static";
const OPEN_SELECTOR$1 = ".modal.show";
const SELECTOR_DIALOG = ".modal-dialog";
const SELECTOR_MODAL_BODY = ".modal-body";
const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
const Default$6 = {
  backdrop: true,
  focus: true,
  keyboard: true
};
const DefaultType$6 = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class Modal extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();
    this._isShown = false;
    this._isTransitioning = false;
    this._scrollBar = new ScrollBarHelper();
    this._addEventListeners();
  }
  // Getters
  static get Default() {
    return Default$6;
  }
  static get DefaultType() {
    return DefaultType$6;
  }
  static get NAME() {
    return NAME$7;
  }
  // Public
  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }
  show(relatedTarget) {
    if (this._isShown || this._isTransitioning) {
      return;
    }
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
      relatedTarget
    });
    if (showEvent.defaultPrevented) {
      return;
    }
    this._isShown = true;
    this._isTransitioning = true;
    this._scrollBar.hide();
    document.body.classList.add(CLASS_NAME_OPEN);
    this._adjustDialog();
    this._backdrop.show(() => this._showElement(relatedTarget));
  }
  hide() {
    if (!this._isShown || this._isTransitioning) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
    if (hideEvent.defaultPrevented) {
      return;
    }
    this._isShown = false;
    this._isTransitioning = true;
    this._focustrap.deactivate();
    this._element.classList.remove(CLASS_NAME_SHOW$4);
    this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
  }
  dispose() {
    EventHandler.off(window, EVENT_KEY$4);
    EventHandler.off(this._dialog, EVENT_KEY$4);
    this._backdrop.dispose();
    this._focustrap.deactivate();
    super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _initializeBackDrop() {
    return new Backdrop({
      isVisible: Boolean(this._config.backdrop),
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new FocusTrap({
      trapElement: this._element
    });
  }
  _showElement(relatedTarget) {
    if (!document.body.contains(this._element)) {
      document.body.append(this._element);
    }
    this._element.style.display = "block";
    this._element.removeAttribute("aria-hidden");
    this._element.setAttribute("aria-modal", true);
    this._element.setAttribute("role", "dialog");
    this._element.scrollTop = 0;
    const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
    if (modalBody) {
      modalBody.scrollTop = 0;
    }
    reflow(this._element);
    this._element.classList.add(CLASS_NAME_SHOW$4);
    const transitionComplete = () => {
      if (this._config.focus) {
        this._focustrap.activate();
      }
      this._isTransitioning = false;
      EventHandler.trigger(this._element, EVENT_SHOWN$4, {
        relatedTarget
      });
    };
    this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, (event) => {
      if (event.key !== ESCAPE_KEY$1) {
        return;
      }
      if (this._config.keyboard) {
        this.hide();
        return;
      }
      this._triggerBackdropTransition();
    });
    EventHandler.on(window, EVENT_RESIZE$1, () => {
      if (this._isShown && !this._isTransitioning) {
        this._adjustDialog();
      }
    });
    EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, (event) => {
      EventHandler.one(this._element, EVENT_CLICK_DISMISS, (event2) => {
        if (this._element !== event.target || this._element !== event2.target) {
          return;
        }
        if (this._config.backdrop === "static") {
          this._triggerBackdropTransition();
          return;
        }
        if (this._config.backdrop) {
          this.hide();
        }
      });
    });
  }
  _hideModal() {
    this._element.style.display = "none";
    this._element.setAttribute("aria-hidden", true);
    this._element.removeAttribute("aria-modal");
    this._element.removeAttribute("role");
    this._isTransitioning = false;
    this._backdrop.hide(() => {
      document.body.classList.remove(CLASS_NAME_OPEN);
      this._resetAdjustments();
      this._scrollBar.reset();
      EventHandler.trigger(this._element, EVENT_HIDDEN$4);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_FADE$3);
  }
  _triggerBackdropTransition() {
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
    if (hideEvent.defaultPrevented) {
      return;
    }
    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
    const initialOverflowY = this._element.style.overflowY;
    if (initialOverflowY === "hidden" || this._element.classList.contains(CLASS_NAME_STATIC)) {
      return;
    }
    if (!isModalOverflowing) {
      this._element.style.overflowY = "hidden";
    }
    this._element.classList.add(CLASS_NAME_STATIC);
    this._queueCallback(() => {
      this._element.classList.remove(CLASS_NAME_STATIC);
      this._queueCallback(() => {
        this._element.style.overflowY = initialOverflowY;
      }, this._dialog);
    }, this._dialog);
    this._element.focus();
  }
  /**
   * The following methods are used to handle overflowing modals
   */
  _adjustDialog() {
    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
    const scrollbarWidth = this._scrollBar.getWidth();
    const isBodyOverflowing = scrollbarWidth > 0;
    if (isBodyOverflowing && !isModalOverflowing) {
      const property = isRTL() ? "paddingLeft" : "paddingRight";
      this._element.style[property] = `${scrollbarWidth}px`;
    }
    if (!isBodyOverflowing && isModalOverflowing) {
      const property = isRTL() ? "paddingRight" : "paddingLeft";
      this._element.style[property] = `${scrollbarWidth}px`;
    }
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "";
    this._element.style.paddingRight = "";
  }
  // Static
  static jQueryInterface(config, relatedTarget) {
    return this.each(function() {
      const data = Modal.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (typeof data[config] === "undefined") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config](relatedTarget);
    });
  }
}
EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function(event) {
  const target = SelectorEngine.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName)) {
    event.preventDefault();
  }
  EventHandler.one(target, EVENT_SHOW$4, (showEvent) => {
    if (showEvent.defaultPrevented) {
      return;
    }
    EventHandler.one(target, EVENT_HIDDEN$4, () => {
      if (isVisible(this)) {
        this.focus();
      }
    });
  });
  const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
  if (alreadyOpen) {
    Modal.getInstance(alreadyOpen).hide();
  }
  const data = Modal.getOrCreateInstance(target);
  data.toggle(this);
});
enableDismissTrigger(Modal);
defineJQueryPlugin(Modal);
const NAME$6 = "offcanvas";
const DATA_KEY$3 = "bs.offcanvas";
const EVENT_KEY$3 = `.${DATA_KEY$3}`;
const DATA_API_KEY$1 = ".data-api";
const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
const ESCAPE_KEY = "Escape";
const CLASS_NAME_SHOW$3 = "show";
const CLASS_NAME_SHOWING$1 = "showing";
const CLASS_NAME_HIDING = "hiding";
const CLASS_NAME_BACKDROP = "offcanvas-backdrop";
const OPEN_SELECTOR = ".offcanvas.show";
const EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
const EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
const EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
const EVENT_RESIZE = `resize${EVENT_KEY$3}`;
const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
const Default$5 = {
  backdrop: true,
  keyboard: true,
  scroll: false
};
const DefaultType$5 = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
class Offcanvas extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._isShown = false;
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();
    this._addEventListeners();
  }
  // Getters
  static get Default() {
    return Default$5;
  }
  static get DefaultType() {
    return DefaultType$5;
  }
  static get NAME() {
    return NAME$6;
  }
  // Public
  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }
  show(relatedTarget) {
    if (this._isShown) {
      return;
    }
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
      relatedTarget
    });
    if (showEvent.defaultPrevented) {
      return;
    }
    this._isShown = true;
    this._backdrop.show();
    if (!this._config.scroll) {
      new ScrollBarHelper().hide();
    }
    this._element.setAttribute("aria-modal", true);
    this._element.setAttribute("role", "dialog");
    this._element.classList.add(CLASS_NAME_SHOWING$1);
    const completeCallBack = () => {
      if (!this._config.scroll || this._config.backdrop) {
        this._focustrap.activate();
      }
      this._element.classList.add(CLASS_NAME_SHOW$3);
      this._element.classList.remove(CLASS_NAME_SHOWING$1);
      EventHandler.trigger(this._element, EVENT_SHOWN$3, {
        relatedTarget
      });
    };
    this._queueCallback(completeCallBack, this._element, true);
  }
  hide() {
    if (!this._isShown) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
    if (hideEvent.defaultPrevented) {
      return;
    }
    this._focustrap.deactivate();
    this._element.blur();
    this._isShown = false;
    this._element.classList.add(CLASS_NAME_HIDING);
    this._backdrop.hide();
    const completeCallback = () => {
      this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
      this._element.removeAttribute("aria-modal");
      this._element.removeAttribute("role");
      if (!this._config.scroll) {
        new ScrollBarHelper().reset();
      }
      EventHandler.trigger(this._element, EVENT_HIDDEN$3);
    };
    this._queueCallback(completeCallback, this._element, true);
  }
  dispose() {
    this._backdrop.dispose();
    this._focustrap.deactivate();
    super.dispose();
  }
  // Private
  _initializeBackDrop() {
    const clickCallback = () => {
      if (this._config.backdrop === "static") {
        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
        return;
      }
      this.hide();
    };
    const isVisible2 = Boolean(this._config.backdrop);
    return new Backdrop({
      className: CLASS_NAME_BACKDROP,
      isVisible: isVisible2,
      isAnimated: true,
      rootElement: this._element.parentNode,
      clickCallback: isVisible2 ? clickCallback : null
    });
  }
  _initializeFocusTrap() {
    return new FocusTrap({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event) => {
      if (event.key !== ESCAPE_KEY) {
        return;
      }
      if (this._config.keyboard) {
        this.hide();
        return;
      }
      EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
    });
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = Offcanvas.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config](this);
    });
  }
}
EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function(event) {
  const target = SelectorEngine.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName)) {
    event.preventDefault();
  }
  if (isDisabled(this)) {
    return;
  }
  EventHandler.one(target, EVENT_HIDDEN$3, () => {
    if (isVisible(this)) {
      this.focus();
    }
  });
  const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
  if (alreadyOpen && alreadyOpen !== target) {
    Offcanvas.getInstance(alreadyOpen).hide();
  }
  const data = Offcanvas.getOrCreateInstance(target);
  data.toggle(this);
});
EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
  for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
    Offcanvas.getOrCreateInstance(selector).show();
  }
});
EventHandler.on(window, EVENT_RESIZE, () => {
  for (const element of SelectorEngine.find("[aria-modal][class*=show][class*=offcanvas-]")) {
    if (getComputedStyle(element).position !== "fixed") {
      Offcanvas.getOrCreateInstance(element).hide();
    }
  }
});
enableDismissTrigger(Offcanvas);
defineJQueryPlugin(Offcanvas);
const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
const DefaultAllowlist = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
  a: ["target", "href", "title", "rel"],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  dd: [],
  div: [],
  dl: [],
  dt: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ["src", "srcset", "alt", "title", "width", "height"],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};
const uriAttributes = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]);
const SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
const allowedAttribute = (attribute, allowedAttributeList) => {
  const attributeName = attribute.nodeName.toLowerCase();
  if (allowedAttributeList.includes(attributeName)) {
    if (uriAttributes.has(attributeName)) {
      return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
    }
    return true;
  }
  return allowedAttributeList.filter((attributeRegex) => attributeRegex instanceof RegExp).some((regex) => regex.test(attributeName));
};
function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
  if (!unsafeHtml.length) {
    return unsafeHtml;
  }
  if (sanitizeFunction && typeof sanitizeFunction === "function") {
    return sanitizeFunction(unsafeHtml);
  }
  const domParser = new window.DOMParser();
  const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
  const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
  for (const element of elements) {
    const elementName = element.nodeName.toLowerCase();
    if (!Object.keys(allowList).includes(elementName)) {
      element.remove();
      continue;
    }
    const attributeList = [].concat(...element.attributes);
    const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
    for (const attribute of attributeList) {
      if (!allowedAttribute(attribute, allowedAttributes)) {
        element.removeAttribute(attribute.nodeName);
      }
    }
  }
  return createdDocument.body.innerHTML;
}
const NAME$5 = "TemplateFactory";
const Default$4 = {
  allowList: DefaultAllowlist,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: "",
  html: false,
  sanitize: true,
  sanitizeFn: null,
  template: "<div></div>"
};
const DefaultType$4 = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
};
const DefaultContentType = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
class TemplateFactory extends Config {
  constructor(config) {
    super();
    this._config = this._getConfig(config);
  }
  // Getters
  static get Default() {
    return Default$4;
  }
  static get DefaultType() {
    return DefaultType$4;
  }
  static get NAME() {
    return NAME$5;
  }
  // Public
  getContent() {
    return Object.values(this._config.content).map((config) => this._resolvePossibleFunction(config)).filter(Boolean);
  }
  hasContent() {
    return this.getContent().length > 0;
  }
  changeContent(content) {
    this._checkContent(content);
    this._config.content = {
      ...this._config.content,
      ...content
    };
    return this;
  }
  toHtml() {
    const templateWrapper = document.createElement("div");
    templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
    for (const [selector, text] of Object.entries(this._config.content)) {
      this._setContent(templateWrapper, text, selector);
    }
    const template = templateWrapper.children[0];
    const extraClass = this._resolvePossibleFunction(this._config.extraClass);
    if (extraClass) {
      template.classList.add(...extraClass.split(" "));
    }
    return template;
  }
  // Private
  _typeCheckConfig(config) {
    super._typeCheckConfig(config);
    this._checkContent(config.content);
  }
  _checkContent(arg) {
    for (const [selector, content] of Object.entries(arg)) {
      super._typeCheckConfig({
        selector,
        entry: content
      }, DefaultContentType);
    }
  }
  _setContent(template, content, selector) {
    const templateElement = SelectorEngine.findOne(selector, template);
    if (!templateElement) {
      return;
    }
    content = this._resolvePossibleFunction(content);
    if (!content) {
      templateElement.remove();
      return;
    }
    if (isElement(content)) {
      this._putElementInTemplate(getElement(content), templateElement);
      return;
    }
    if (this._config.html) {
      templateElement.innerHTML = this._maybeSanitize(content);
      return;
    }
    templateElement.textContent = content;
  }
  _maybeSanitize(arg) {
    return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
  }
  _resolvePossibleFunction(arg) {
    return execute(arg, [void 0, this]);
  }
  _putElementInTemplate(element, templateElement) {
    if (this._config.html) {
      templateElement.innerHTML = "";
      templateElement.append(element);
      return;
    }
    templateElement.textContent = element.textContent;
  }
}
const NAME$4 = "tooltip";
const DISALLOWED_ATTRIBUTES = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]);
const CLASS_NAME_FADE$2 = "fade";
const CLASS_NAME_MODAL = "modal";
const CLASS_NAME_SHOW$2 = "show";
const SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
const EVENT_MODAL_HIDE = "hide.bs.modal";
const TRIGGER_HOVER = "hover";
const TRIGGER_FOCUS = "focus";
const TRIGGER_CLICK = "click";
const TRIGGER_MANUAL = "manual";
const EVENT_HIDE$2 = "hide";
const EVENT_HIDDEN$2 = "hidden";
const EVENT_SHOW$2 = "show";
const EVENT_SHOWN$2 = "shown";
const EVENT_INSERTED = "inserted";
const EVENT_CLICK$1 = "click";
const EVENT_FOCUSIN$1 = "focusin";
const EVENT_FOCUSOUT$1 = "focusout";
const EVENT_MOUSEENTER = "mouseenter";
const EVENT_MOUSELEAVE = "mouseleave";
const AttachmentMap = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: isRTL() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: isRTL() ? "right" : "left"
};
const Default$3 = {
  allowList: DefaultAllowlist,
  animation: true,
  boundary: "clippingParents",
  container: false,
  customClass: "",
  delay: 0,
  fallbackPlacements: ["top", "right", "bottom", "left"],
  html: false,
  offset: [0, 6],
  placement: "top",
  popperConfig: null,
  sanitize: true,
  sanitizeFn: null,
  selector: false,
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  title: "",
  trigger: "hover focus"
};
const DefaultType$3 = {
  allowList: "object",
  animation: "boolean",
  boundary: "(string|element)",
  container: "(string|element|boolean)",
  customClass: "(string|function)",
  delay: "(number|object)",
  fallbackPlacements: "array",
  html: "boolean",
  offset: "(array|string|function)",
  placement: "(string|function)",
  popperConfig: "(null|object|function)",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  selector: "(string|boolean)",
  template: "string",
  title: "(string|element|function)",
  trigger: "string"
};
class Tooltip extends BaseComponent {
  constructor(element, config) {
    if (typeof Popper === "undefined") {
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
    }
    super(element, config);
    this._isEnabled = true;
    this._timeout = 0;
    this._isHovered = null;
    this._activeTrigger = {};
    this._popper = null;
    this._templateFactory = null;
    this._newContent = null;
    this.tip = null;
    this._setListeners();
    if (!this._config.selector) {
      this._fixTitle();
    }
  }
  // Getters
  static get Default() {
    return Default$3;
  }
  static get DefaultType() {
    return DefaultType$3;
  }
  static get NAME() {
    return NAME$4;
  }
  // Public
  enable() {
    this._isEnabled = true;
  }
  disable() {
    this._isEnabled = false;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle() {
    if (!this._isEnabled) {
      return;
    }
    if (this._isShown()) {
      this._leave();
      return;
    }
    this._enter();
  }
  dispose() {
    clearTimeout(this._timeout);
    EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    if (this._element.getAttribute("data-bs-original-title")) {
      this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
    }
    this._disposePopper();
    super.dispose();
  }
  show() {
    if (this._element.style.display === "none") {
      throw new Error("Please use show on visible elements");
    }
    if (!(this._isWithContent() && this._isEnabled)) {
      return;
    }
    const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
    const shadowRoot = findShadowRoot(this._element);
    const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
    if (showEvent.defaultPrevented || !isInTheDom) {
      return;
    }
    this._disposePopper();
    const tip = this._getTipElement();
    this._element.setAttribute("aria-describedby", tip.getAttribute("id"));
    const {
      container
    } = this._config;
    if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
      container.append(tip);
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
    }
    this._popper = this._createPopper(tip);
    tip.classList.add(CLASS_NAME_SHOW$2);
    if ("ontouchstart" in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.on(element, "mouseover", noop);
      }
    }
    const complete = () => {
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));
      if (this._isHovered === false) {
        this._leave();
      }
      this._isHovered = false;
    };
    this._queueCallback(complete, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown()) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
    if (hideEvent.defaultPrevented) {
      return;
    }
    const tip = this._getTipElement();
    tip.classList.remove(CLASS_NAME_SHOW$2);
    if ("ontouchstart" in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.off(element, "mouseover", noop);
      }
    }
    this._activeTrigger[TRIGGER_CLICK] = false;
    this._activeTrigger[TRIGGER_FOCUS] = false;
    this._activeTrigger[TRIGGER_HOVER] = false;
    this._isHovered = null;
    const complete = () => {
      if (this._isWithActiveTrigger()) {
        return;
      }
      if (!this._isHovered) {
        this._disposePopper();
      }
      this._element.removeAttribute("aria-describedby");
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
    };
    this._queueCallback(complete, this.tip, this._isAnimated());
  }
  update() {
    if (this._popper) {
      this._popper.update();
    }
  }
  // Protected
  _isWithContent() {
    return Boolean(this._getTitle());
  }
  _getTipElement() {
    if (!this.tip) {
      this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
    }
    return this.tip;
  }
  _createTipElement(content) {
    const tip = this._getTemplateFactory(content).toHtml();
    if (!tip) {
      return null;
    }
    tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
    tip.classList.add(`bs-${this.constructor.NAME}-auto`);
    const tipId = getUID(this.constructor.NAME).toString();
    tip.setAttribute("id", tipId);
    if (this._isAnimated()) {
      tip.classList.add(CLASS_NAME_FADE$2);
    }
    return tip;
  }
  setContent(content) {
    this._newContent = content;
    if (this._isShown()) {
      this._disposePopper();
      this.show();
    }
  }
  _getTemplateFactory(content) {
    if (this._templateFactory) {
      this._templateFactory.changeContent(content);
    } else {
      this._templateFactory = new TemplateFactory({
        ...this._config,
        // the `content` var has to be after `this._config`
        // to override config.content in case of popover
        content,
        extraClass: this._resolvePossibleFunction(this._config.customClass)
      });
    }
    return this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [SELECTOR_TOOLTIP_INNER]: this._getTitle()
    };
  }
  _getTitle() {
    return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
  }
  // Private
  _initializeOnDelegatedTarget(event) {
    return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
  }
  _isAnimated() {
    return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
  }
  _createPopper(tip) {
    const placement = execute(this._config.placement, [this, tip, this._element]);
    const attachment = AttachmentMap[placement.toUpperCase()];
    return createPopper(this._element, tip, this._getPopperConfig(attachment));
  }
  _getOffset() {
    const {
      offset: offset2
    } = this._config;
    if (typeof offset2 === "string") {
      return offset2.split(",").map((value) => Number.parseInt(value, 10));
    }
    if (typeof offset2 === "function") {
      return (popperData) => offset2(popperData, this._element);
    }
    return offset2;
  }
  _resolvePossibleFunction(arg) {
    return execute(arg, [this._element, this._element]);
  }
  _getPopperConfig(attachment) {
    const defaultBsPopperConfig = {
      placement: attachment,
      modifiers: [{
        name: "flip",
        options: {
          fallbackPlacements: this._config.fallbackPlacements
        }
      }, {
        name: "offset",
        options: {
          offset: this._getOffset()
        }
      }, {
        name: "preventOverflow",
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: "arrow",
        options: {
          element: `.${this.constructor.NAME}-arrow`
        }
      }, {
        name: "preSetPlacement",
        enabled: true,
        phase: "beforeMain",
        fn: (data) => {
          this._getTipElement().setAttribute("data-popper-placement", data.state.placement);
        }
      }]
    };
    return {
      ...defaultBsPopperConfig,
      ...execute(this._config.popperConfig, [void 0, defaultBsPopperConfig])
    };
  }
  _setListeners() {
    const triggers = this._config.trigger.split(" ");
    for (const trigger of triggers) {
      if (trigger === "click") {
        EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, (event) => {
          const context = this._initializeOnDelegatedTarget(event);
          context._activeTrigger[TRIGGER_CLICK] = !(context._isShown() && context._activeTrigger[TRIGGER_CLICK]);
          context.toggle();
        });
      } else if (trigger !== TRIGGER_MANUAL) {
        const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
        const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
        EventHandler.on(this._element, eventIn, this._config.selector, (event) => {
          const context = this._initializeOnDelegatedTarget(event);
          context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
          context._enter();
        });
        EventHandler.on(this._element, eventOut, this._config.selector, (event) => {
          const context = this._initializeOnDelegatedTarget(event);
          context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
          context._leave();
        });
      }
    }
    this._hideModalHandler = () => {
      if (this._element) {
        this.hide();
      }
    };
    EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
  }
  _fixTitle() {
    const title = this._element.getAttribute("title");
    if (!title) {
      return;
    }
    if (!this._element.getAttribute("aria-label") && !this._element.textContent.trim()) {
      this._element.setAttribute("aria-label", title);
    }
    this._element.setAttribute("data-bs-original-title", title);
    this._element.removeAttribute("title");
  }
  _enter() {
    if (this._isShown() || this._isHovered) {
      this._isHovered = true;
      return;
    }
    this._isHovered = true;
    this._setTimeout(() => {
      if (this._isHovered) {
        this.show();
      }
    }, this._config.delay.show);
  }
  _leave() {
    if (this._isWithActiveTrigger()) {
      return;
    }
    this._isHovered = false;
    this._setTimeout(() => {
      if (!this._isHovered) {
        this.hide();
      }
    }, this._config.delay.hide);
  }
  _setTimeout(handler, timeout) {
    clearTimeout(this._timeout);
    this._timeout = setTimeout(handler, timeout);
  }
  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(true);
  }
  _getConfig(config) {
    const dataAttributes = Manipulator.getDataAttributes(this._element);
    for (const dataAttribute of Object.keys(dataAttributes)) {
      if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
        delete dataAttributes[dataAttribute];
      }
    }
    config = {
      ...dataAttributes,
      ...typeof config === "object" && config ? config : {}
    };
    config = this._mergeConfigObj(config);
    config = this._configAfterMerge(config);
    this._typeCheckConfig(config);
    return config;
  }
  _configAfterMerge(config) {
    config.container = config.container === false ? document.body : getElement(config.container);
    if (typeof config.delay === "number") {
      config.delay = {
        show: config.delay,
        hide: config.delay
      };
    }
    if (typeof config.title === "number") {
      config.title = config.title.toString();
    }
    if (typeof config.content === "number") {
      config.content = config.content.toString();
    }
    return config;
  }
  _getDelegateConfig() {
    const config = {};
    for (const [key, value] of Object.entries(this._config)) {
      if (this.constructor.Default[key] !== value) {
        config[key] = value;
      }
    }
    config.selector = false;
    config.trigger = "manual";
    return config;
  }
  _disposePopper() {
    if (this._popper) {
      this._popper.destroy();
      this._popper = null;
    }
    if (this.tip) {
      this.tip.remove();
      this.tip = null;
    }
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = Tooltip.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (typeof data[config] === "undefined") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
}
defineJQueryPlugin(Tooltip);
const NAME$3 = "popover";
const SELECTOR_TITLE = ".popover-header";
const SELECTOR_CONTENT = ".popover-body";
const Default$2 = {
  ...Tooltip.Default,
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
};
const DefaultType$2 = {
  ...Tooltip.DefaultType,
  content: "(null|string|element|function)"
};
class Popover extends Tooltip {
  // Getters
  static get Default() {
    return Default$2;
  }
  static get DefaultType() {
    return DefaultType$2;
  }
  static get NAME() {
    return NAME$3;
  }
  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  // Private
  _getContentForTemplate() {
    return {
      [SELECTOR_TITLE]: this._getTitle(),
      [SELECTOR_CONTENT]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = Popover.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (typeof data[config] === "undefined") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
}
defineJQueryPlugin(Popover);
const NAME$2 = "scrollspy";
const DATA_KEY$2 = "bs.scrollspy";
const EVENT_KEY$2 = `.${DATA_KEY$2}`;
const DATA_API_KEY = ".data-api";
const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
const EVENT_CLICK = `click${EVENT_KEY$2}`;
const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
const CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
const CLASS_NAME_ACTIVE$1 = "active";
const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
const SELECTOR_TARGET_LINKS = "[href]";
const SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
const SELECTOR_NAV_LINKS = ".nav-link";
const SELECTOR_NAV_ITEMS = ".nav-item";
const SELECTOR_LIST_ITEMS = ".list-group-item";
const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
const SELECTOR_DROPDOWN = ".dropdown";
const SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle";
const Default$1 = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "0px 0px -25%",
  smoothScroll: false,
  target: null,
  threshold: [0.1, 0.5, 1]
};
const DefaultType$1 = {
  offset: "(number|null)",
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
class ScrollSpy extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._targetLinks = /* @__PURE__ */ new Map();
    this._observableSections = /* @__PURE__ */ new Map();
    this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
    this._activeTarget = null;
    this._observer = null;
    this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    };
    this.refresh();
  }
  // Getters
  static get Default() {
    return Default$1;
  }
  static get DefaultType() {
    return DefaultType$1;
  }
  static get NAME() {
    return NAME$2;
  }
  // Public
  refresh() {
    this._initializeTargetsAndObservables();
    this._maybeEnableSmoothScroll();
    if (this._observer) {
      this._observer.disconnect();
    } else {
      this._observer = this._getNewObserver();
    }
    for (const section of this._observableSections.values()) {
      this._observer.observe(section);
    }
  }
  dispose() {
    this._observer.disconnect();
    super.dispose();
  }
  // Private
  _configAfterMerge(config) {
    config.target = getElement(config.target) || document.body;
    config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
    if (typeof config.threshold === "string") {
      config.threshold = config.threshold.split(",").map((value) => Number.parseFloat(value));
    }
    return config;
  }
  _maybeEnableSmoothScroll() {
    if (!this._config.smoothScroll) {
      return;
    }
    EventHandler.off(this._config.target, EVENT_CLICK);
    EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, (event) => {
      const observableSection = this._observableSections.get(event.target.hash);
      if (observableSection) {
        event.preventDefault();
        const root = this._rootElement || window;
        const height = observableSection.offsetTop - this._element.offsetTop;
        if (root.scrollTo) {
          root.scrollTo({
            top: height,
            behavior: "smooth"
          });
          return;
        }
        root.scrollTop = height;
      }
    });
  }
  _getNewObserver() {
    const options = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin
    };
    return new IntersectionObserver((entries) => this._observerCallback(entries), options);
  }
  // The logic of selection
  _observerCallback(entries) {
    const targetElement = (entry) => this._targetLinks.get(`#${entry.target.id}`);
    const activate = (entry) => {
      this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
      this._process(targetElement(entry));
    };
    const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
    const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = parentScrollTop;
    for (const entry of entries) {
      if (!entry.isIntersecting) {
        this._activeTarget = null;
        this._clearActiveClass(targetElement(entry));
        continue;
      }
      const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (userScrollsDown && entryIsLowerThanPrevious) {
        activate(entry);
        if (!parentScrollTop) {
          return;
        }
        continue;
      }
      if (!userScrollsDown && !entryIsLowerThanPrevious) {
        activate(entry);
      }
    }
  }
  _initializeTargetsAndObservables() {
    this._targetLinks = /* @__PURE__ */ new Map();
    this._observableSections = /* @__PURE__ */ new Map();
    const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
    for (const anchor of targetLinks) {
      if (!anchor.hash || isDisabled(anchor)) {
        continue;
      }
      const observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);
      if (isVisible(observableSection)) {
        this._targetLinks.set(decodeURI(anchor.hash), anchor);
        this._observableSections.set(anchor.hash, observableSection);
      }
    }
  }
  _process(target) {
    if (this._activeTarget === target) {
      return;
    }
    this._clearActiveClass(this._config.target);
    this._activeTarget = target;
    target.classList.add(CLASS_NAME_ACTIVE$1);
    this._activateParents(target);
    EventHandler.trigger(this._element, EVENT_ACTIVATE, {
      relatedTarget: target
    });
  }
  _activateParents(target) {
    if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
      SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
      return;
    }
    for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
      for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
        item.classList.add(CLASS_NAME_ACTIVE$1);
      }
    }
  }
  _clearActiveClass(parent) {
    parent.classList.remove(CLASS_NAME_ACTIVE$1);
    const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
    for (const node of activeNodes) {
      node.classList.remove(CLASS_NAME_ACTIVE$1);
    }
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = ScrollSpy.getOrCreateInstance(this, config);
      if (typeof config !== "string") {
        return;
      }
      if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
}
EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
  for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
    ScrollSpy.getOrCreateInstance(spy);
  }
});
defineJQueryPlugin(ScrollSpy);
const NAME$1 = "tab";
const DATA_KEY$1 = "bs.tab";
const EVENT_KEY$1 = `.${DATA_KEY$1}`;
const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
const EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
const EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
const ARROW_LEFT_KEY = "ArrowLeft";
const ARROW_RIGHT_KEY = "ArrowRight";
const ARROW_UP_KEY = "ArrowUp";
const ARROW_DOWN_KEY = "ArrowDown";
const HOME_KEY = "Home";
const END_KEY = "End";
const CLASS_NAME_ACTIVE = "active";
const CLASS_NAME_FADE$1 = "fade";
const CLASS_NAME_SHOW$1 = "show";
const CLASS_DROPDOWN = "dropdown";
const SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
const SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
const NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE})`;
const SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
const SELECTOR_OUTER = ".nav-item, .list-group-item";
const SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
const SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
class Tab extends BaseComponent {
  constructor(element) {
    super(element);
    this._parent = this._element.closest(SELECTOR_TAB_PANEL);
    if (!this._parent) {
      return;
    }
    this._setInitialAttributes(this._parent, this._getChildren());
    EventHandler.on(this._element, EVENT_KEYDOWN, (event) => this._keydown(event));
  }
  // Getters
  static get NAME() {
    return NAME$1;
  }
  // Public
  show() {
    const innerElem = this._element;
    if (this._elemIsActive(innerElem)) {
      return;
    }
    const active = this._getActiveElem();
    const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
      relatedTarget: innerElem
    }) : null;
    const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
      relatedTarget: active
    });
    if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
      return;
    }
    this._deactivate(active, innerElem);
    this._activate(innerElem, active);
  }
  // Private
  _activate(element, relatedElem) {
    if (!element) {
      return;
    }
    element.classList.add(CLASS_NAME_ACTIVE);
    this._activate(SelectorEngine.getElementFromSelector(element));
    const complete = () => {
      if (element.getAttribute("role") !== "tab") {
        element.classList.add(CLASS_NAME_SHOW$1);
        return;
      }
      element.removeAttribute("tabindex");
      element.setAttribute("aria-selected", true);
      this._toggleDropDown(element, true);
      EventHandler.trigger(element, EVENT_SHOWN$1, {
        relatedTarget: relatedElem
      });
    };
    this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
  }
  _deactivate(element, relatedElem) {
    if (!element) {
      return;
    }
    element.classList.remove(CLASS_NAME_ACTIVE);
    element.blur();
    this._deactivate(SelectorEngine.getElementFromSelector(element));
    const complete = () => {
      if (element.getAttribute("role") !== "tab") {
        element.classList.remove(CLASS_NAME_SHOW$1);
        return;
      }
      element.setAttribute("aria-selected", false);
      element.setAttribute("tabindex", "-1");
      this._toggleDropDown(element, false);
      EventHandler.trigger(element, EVENT_HIDDEN$1, {
        relatedTarget: relatedElem
      });
    };
    this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
  }
  _keydown(event) {
    if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY, HOME_KEY, END_KEY].includes(event.key)) {
      return;
    }
    event.stopPropagation();
    event.preventDefault();
    const children = this._getChildren().filter((element) => !isDisabled(element));
    let nextActiveElement;
    if ([HOME_KEY, END_KEY].includes(event.key)) {
      nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
    } else {
      const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
      nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
    }
    if (nextActiveElement) {
      nextActiveElement.focus({
        preventScroll: true
      });
      Tab.getOrCreateInstance(nextActiveElement).show();
    }
  }
  _getChildren() {
    return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find((child) => this._elemIsActive(child)) || null;
  }
  _setInitialAttributes(parent, children) {
    this._setAttributeIfNotExists(parent, "role", "tablist");
    for (const child of children) {
      this._setInitialAttributesOnChild(child);
    }
  }
  _setInitialAttributesOnChild(child) {
    child = this._getInnerElement(child);
    const isActive = this._elemIsActive(child);
    const outerElem = this._getOuterElement(child);
    child.setAttribute("aria-selected", isActive);
    if (outerElem !== child) {
      this._setAttributeIfNotExists(outerElem, "role", "presentation");
    }
    if (!isActive) {
      child.setAttribute("tabindex", "-1");
    }
    this._setAttributeIfNotExists(child, "role", "tab");
    this._setInitialAttributesOnTargetPanel(child);
  }
  _setInitialAttributesOnTargetPanel(child) {
    const target = SelectorEngine.getElementFromSelector(child);
    if (!target) {
      return;
    }
    this._setAttributeIfNotExists(target, "role", "tabpanel");
    if (child.id) {
      this._setAttributeIfNotExists(target, "aria-labelledby", `${child.id}`);
    }
  }
  _toggleDropDown(element, open) {
    const outerElem = this._getOuterElement(element);
    if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
      return;
    }
    const toggle = (selector, className) => {
      const element2 = SelectorEngine.findOne(selector, outerElem);
      if (element2) {
        element2.classList.toggle(className, open);
      }
    };
    toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
    toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
    outerElem.setAttribute("aria-expanded", open);
  }
  _setAttributeIfNotExists(element, attribute, value) {
    if (!element.hasAttribute(attribute)) {
      element.setAttribute(attribute, value);
    }
  }
  _elemIsActive(elem) {
    return elem.classList.contains(CLASS_NAME_ACTIVE);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(elem) {
    return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(elem) {
    return elem.closest(SELECTOR_OUTER) || elem;
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = Tab.getOrCreateInstance(this);
      if (typeof config !== "string") {
        return;
      }
      if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
}
EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
  if (["A", "AREA"].includes(this.tagName)) {
    event.preventDefault();
  }
  if (isDisabled(this)) {
    return;
  }
  Tab.getOrCreateInstance(this).show();
});
EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
  for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
    Tab.getOrCreateInstance(element);
  }
});
defineJQueryPlugin(Tab);
const NAME = "toast";
const DATA_KEY = "bs.toast";
const EVENT_KEY = `.${DATA_KEY}`;
const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const CLASS_NAME_FADE = "fade";
const CLASS_NAME_HIDE = "hide";
const CLASS_NAME_SHOW = "show";
const CLASS_NAME_SHOWING = "showing";
const DefaultType = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
};
const Default = {
  animation: true,
  autohide: true,
  delay: 5e3
};
class Toast extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._timeout = null;
    this._hasMouseInteraction = false;
    this._hasKeyboardInteraction = false;
    this._setListeners();
  }
  // Getters
  static get Default() {
    return Default;
  }
  static get DefaultType() {
    return DefaultType;
  }
  static get NAME() {
    return NAME;
  }
  // Public
  show() {
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
    if (showEvent.defaultPrevented) {
      return;
    }
    this._clearTimeout();
    if (this._config.animation) {
      this._element.classList.add(CLASS_NAME_FADE);
    }
    const complete = () => {
      this._element.classList.remove(CLASS_NAME_SHOWING);
      EventHandler.trigger(this._element, EVENT_SHOWN);
      this._maybeScheduleHide();
    };
    this._element.classList.remove(CLASS_NAME_HIDE);
    reflow(this._element);
    this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
    this._queueCallback(complete, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown()) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
    if (hideEvent.defaultPrevented) {
      return;
    }
    const complete = () => {
      this._element.classList.add(CLASS_NAME_HIDE);
      this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
      EventHandler.trigger(this._element, EVENT_HIDDEN);
    };
    this._element.classList.add(CLASS_NAME_SHOWING);
    this._queueCallback(complete, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout();
    if (this.isShown()) {
      this._element.classList.remove(CLASS_NAME_SHOW);
    }
    super.dispose();
  }
  isShown() {
    return this._element.classList.contains(CLASS_NAME_SHOW);
  }
  // Private
  _maybeScheduleHide() {
    if (!this._config.autohide) {
      return;
    }
    if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
      return;
    }
    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }
  _onInteraction(event, isInteracting) {
    switch (event.type) {
      case "mouseover":
      case "mouseout": {
        this._hasMouseInteraction = isInteracting;
        break;
      }
      case "focusin":
      case "focusout": {
        this._hasKeyboardInteraction = isInteracting;
        break;
      }
    }
    if (isInteracting) {
      this._clearTimeout();
      return;
    }
    const nextElement = event.relatedTarget;
    if (this._element === nextElement || this._element.contains(nextElement)) {
      return;
    }
    this._maybeScheduleHide();
  }
  _setListeners() {
    EventHandler.on(this._element, EVENT_MOUSEOVER, (event) => this._onInteraction(event, true));
    EventHandler.on(this._element, EVENT_MOUSEOUT, (event) => this._onInteraction(event, false));
    EventHandler.on(this._element, EVENT_FOCUSIN, (event) => this._onInteraction(event, true));
    EventHandler.on(this._element, EVENT_FOCUSOUT, (event) => this._onInteraction(event, false));
  }
  _clearTimeout() {
    clearTimeout(this._timeout);
    this._timeout = null;
  }
  // Static
  static jQueryInterface(config) {
    return this.each(function() {
      const data = Toast.getOrCreateInstance(this, config);
      if (typeof config === "string") {
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      }
    });
  }
}
enableDismissTrigger(Toast);
defineJQueryPlugin(Toast);
var yn = Object.defineProperty;
var Bn = (e, t, a) => t in e ? yn(e, t, { enumerable: true, configurable: true, writable: true, value: a }) : e[t] = a;
var be = (e, t, a) => (Bn(e, typeof t != "symbol" ? t + "" : t, a), a);
const { shallowRef: Za, watchEffect: Qe, readonly: Nt, unref: o, ref: U, isRef: Ze, watch: de, getCurrentScope: $n, onScopeDispose: Sn, getCurrentInstance: el, onMounted: Be, nextTick: Ee, computed: i, Comment: kn, reactive: De, inject: He, onBeforeUnmount: Zt, toRef: s, onActivated: ea, defineComponent: P, provide: et, openBlock: f, createElementBlock: g, normalizeClass: E, renderSlot: $, createBlock: z, resolveDynamicComponent: Y, withCtx: H, createElementVNode: M, withDirectives: tt, createTextVNode: ee, toDisplayString: G, createVNode: fe, Transition: Cn, normalizeProps: he, guardReactiveProps: Ce, useSlots: Se, createCommentVNode: W, mergeProps: J, resolveComponent: tl, Fragment: oe, normalizeStyle: Ie, renderList: ve, isReactive: wn, onUnmounted: _n, h: le, useAttrs: al, withModifiers: ta, vModelCheckbox: Tn, vModelRadio: Vn, vModelSelect: An, Teleport: On, withKeys: xn, vShow: Pn, createSlots: ll } = await importShared("vue");
var zn = Object.defineProperty, Nn = Object.defineProperties, Dn = Object.getOwnPropertyDescriptors, da = Object.getOwnPropertySymbols, Hn = Object.prototype.hasOwnProperty, Rn = Object.prototype.propertyIsEnumerable, ca = (e, t, a) => t in e ? zn(e, t, { enumerable: true, configurable: true, writable: true, value: a }) : e[t] = a, jn = (e, t) => {
  for (var a in t || (t = {}))
    Hn.call(t, a) && ca(e, a, t[a]);
  if (da)
    for (var a of da(t))
      Rn.call(t, a) && ca(e, a, t[a]);
  return e;
}, Mn = (e, t) => Nn(e, Dn(t));
function nl(e, t) {
  var a;
  const l = Za();
  return Qe(() => {
    l.value = e();
  }, Mn(jn({}, t), {
    flush: (a = void 0) != null ? a : "sync"
  })), Nt(l);
}
var fa;
const ht = typeof window < "u", ol = (e) => typeof e == "function";
ht && ((fa = window == null ? void 0 : window.navigator) == null ? void 0 : fa.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function qe(e) {
  return typeof e == "function" ? e() : o(e);
}
function Kn(e) {
  return e;
}
function yt(e) {
  return $n() ? (Sn(e), true) : false;
}
function Jn(e, t = 1e3, a = {}) {
  const {
    immediate: l = true,
    immediateCallback: n = false
  } = a;
  let r = null;
  const c = U(false);
  function d() {
    r && (clearInterval(r), r = null);
  }
  function v() {
    c.value = false, d();
  }
  function b() {
    o(t) <= 0 || (c.value = true, n && e(), d(), r = setInterval(e, qe(t)));
  }
  if (l && ht && b(), Ze(t) || ol(t)) {
    const B = de(t, () => {
      c.value && ht && b();
    });
    yt(B);
  }
  return yt(v), {
    isActive: c,
    pause: v,
    resume: b
  };
}
const Ht = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Rt = "__vueuse_ssr_handlers__";
Ht[Rt] = Ht[Rt] || {};
var Ba;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ba || (Ba = {}));
var _o = Object.defineProperty, $a = Object.getOwnPropertySymbols, To = Object.prototype.hasOwnProperty, Vo = Object.prototype.propertyIsEnumerable, Sa = (e, t, a) => t in e ? _o(e, t, { enumerable: true, configurable: true, writable: true, value: a }) : e[t] = a, Ao = (e, t) => {
  for (var a in t || (t = {}))
    To.call(t, a) && Sa(e, a, t[a]);
  if ($a)
    for (var a of $a(t))
      Vo.call(t, a) && Sa(e, a, t[a]);
  return e;
};
const Oo = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Ao({
  linear: Kn
}, Oo);
const it = (e) => nl(() => e.value ? `justify-content-${e.value}` : "");
class Ue {
  constructor(t, a = {}) {
    be(this, "cancelable", true);
    be(this, "componentId", null);
    be(this, "_defaultPrevented", false);
    be(this, "eventType", "");
    be(this, "nativeEvent", null);
    be(this, "_preventDefault");
    be(this, "relatedTarget", null);
    be(this, "target", null);
    if (!t)
      throw new TypeError(
        `Failed to construct '${this.constructor.name}'. 1 argument required, ${arguments.length} given.`
      );
    Object.assign(this, Ue.Defaults, a, { eventType: t }), this._preventDefault = function() {
      this.cancelable && (this.defaultPrevented = true);
    };
  }
  get defaultPrevented() {
    return this._defaultPrevented;
  }
  set defaultPrevented(t) {
    this._defaultPrevented = t;
  }
  get preventDefault() {
    return this._preventDefault;
  }
  set preventDefault(t) {
    this._preventDefault = t;
  }
  static get Defaults() {
    return {
      cancelable: true,
      componentId: null,
      eventType: "",
      nativeEvent: null,
      relatedTarget: null,
      target: null
    };
  }
}
class cl extends Ue {
  constructor(a, l = {}) {
    super(a, l);
    be(this, "trigger", null);
    Object.assign(this, Ue.Defaults, l, { eventType: a });
  }
  static get Defaults() {
    return {
      ...super.Defaults,
      trigger: null
    };
  }
}
const jt = (e) => e !== null && typeof e == "object", fl = (e) => /^[0-9]*\.?[0-9]+$/.test(String(e)), xo = (e) => Object.prototype.toString.call(e) === "[object Object]", ze = (e) => e === null, vl = /_/g, ml = /([a-z])([A-Z])/g, Po = /(\s|^)(\w)/g, Io = /(\s|^)(\w)/, mt = /\s+/, Fo = /^#/, Eo = /^#[A-Za-z]+[\w\-:.]*$/, Lo = /-u-.+/, $t = (e, t = 2) => typeof e == "string" ? e : e == null ? "" : Array.isArray(e) || xo(e) && e.toString === Object.prototype.toString ? JSON.stringify(e, null, t) : String(e), ka = (e) => e.replace(vl, " ").replace(ml, (t, a, l) => `${a} ${l}`).replace(Io, (t, a, l) => a + l.toUpperCase()), Ca = (e) => e.replace(vl, " ").replace(ml, (t, a, l) => `${a} ${l}`).replace(Po, (t, a, l) => a + l.toUpperCase()), zo = (e) => {
  const t = e.trim();
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Et = (e) => `\\${e}`, No = (e) => {
  const t = $t(e), { length: a } = t, l = t.charCodeAt(0);
  return t.split("").reduce((n, r, c) => {
    const d = t.charCodeAt(c);
    return d === 0 ? `${n}�` : d === 127 || d >= 1 && d <= 31 || c === 0 && d >= 48 && d <= 57 || c === 1 && d >= 48 && d <= 57 && l === 45 ? n + Et(`${d.toString(16)} `) : c === 0 && d === 45 && a === 1 ? n + Et(r) : d >= 128 || d === 45 || d === 95 || d >= 48 && d <= 57 || d >= 65 && d <= 90 || d >= 97 && d <= 122 ? n + r : n + Et(r);
  }, "");
}, aa = typeof window < "u", Do = typeof document < "u", Ho = typeof navigator < "u", bl = aa && Do && Ho, wa = aa ? window : {}, Ro = (() => {
  let e = false;
  if (bl)
    try {
      const t = {
        get passive() {
          e = true;
        }
      };
      wa.addEventListener("test", t, t), wa.removeEventListener("test", t, t);
    } catch {
      e = false;
    }
  return e;
})(), pl = typeof window < "u", gl = typeof document < "u", jo = typeof Element < "u", hl = typeof navigator < "u", wt = pl && gl && hl, Ge = pl ? window : {}, _t = gl ? document : {}, yl = hl ? navigator : {}, Bl = (yl.userAgent || "").toLowerCase();
Bl.indexOf("jsdom") > 0;
(() => {
  let e = false;
  if (wt)
    try {
      const t = {
        get passive() {
          return e = true, e;
        }
      };
      Ge.addEventListener("test", t, t), Ge.removeEventListener("test", t, t);
    } catch {
      e = false;
    }
  return e;
})();
wt && ("ontouchstart" in _t.documentElement || yl.maxTouchPoints > 0);
wt && Boolean(Ge.PointerEvent || Ge.MSPointerEvent);
wt && "IntersectionObserver" in Ge && "IntersectionObserverEntry" in Ge && "intersectionRatio" in Ge.IntersectionObserverEntry.prototype;
const Oe = jo ? Element.prototype : void 0, Mo = (Oe == null ? void 0 : Oe.matches) || (Oe == null ? void 0 : Oe.msMatchesSelector) || (Oe == null ? void 0 : Oe.webkitMatchesSelector), Le = (e) => !!(e && e.nodeType === Node.ELEMENT_NODE), qo = (e) => Le(e) ? e.getBoundingClientRect() : null, Go = (e = []) => {
  const { activeElement: t } = document;
  return t && !e.some((a) => a === t) ? t : null;
}, Uo = (e) => Le(e) && e === Go(), Wo = (e, t = {}) => {
  try {
    e.focus(t);
  } catch (a) {
    console.error(a);
  }
  return Uo(e);
}, Ko = (e, t) => Le(e) && e.getAttribute(t) || null, Xo = (e) => {
  if (Ko(e, "display") === "none")
    return false;
  const t = qo(e);
  return !!(t && t.height > 0 && t.width > 0);
}, Ve = (e, t) => !e || e(t).filter((a) => a.type !== kn).length < 1, $l = (e, t) => (Le(t) ? t : _t).querySelector(e) || null, Jo = (e, t) => Array.from([(Le(t) ? t : _t).querySelectorAll(e)]), la = (e, t) => t && Le(e) ? e.getAttribute(t) : null, Qo = (e) => _t.getElementById(/^#/.test(e) ? e.slice(1) : e) || null, Yo = (e, t, a) => {
  Le(e) && e.setAttribute(t, a);
}, Zo = (e, t) => {
  Le(e) && e.removeAttribute(t);
}, es = (e, t) => $t(e).toLowerCase() === $t(t).toLowerCase(), ct = aa ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || ((e) => setTimeout(e, 16)) : (e) => setTimeout(e, 0), Sl = (e, t) => Le(e) ? Mo.call(e, t) : false, ts = (Oe == null ? void 0 : Oe.closest) || function(e) {
  let t = this;
  if (!t)
    return null;
  do {
    if (Sl(t, e))
      return t;
    t = t.parentElement || t.parentNode;
  } while (t !== null && t.nodeType === Node.ELEMENT_NODE);
  return null;
}, _a = (e, t, a = false) => {
  if (!Le(t))
    return null;
  const l = ts.call(t, e);
  return a ? l : l === t ? null : l;
}, Tt = (e, t, a) => t.concat(["sm", "md", "lg", "xl", "xxl"]).reduce((l, n) => (l[e ? `${e}${n.charAt(0).toUpperCase() + n.slice(1)}` : n] = a, l), /* @__PURE__ */ Object.create(null)), kl = (e, t, a, l = a) => Object.keys(t).reduce((n, r) => (e[r] && n.push(
  [l, r.replace(a, ""), e[r]].filter((c) => c && typeof c != "boolean").join("-").toLowerCase()
), n), []), Ne = (e = "") => `__BVID__${Math.random().toString().slice(2, 8)}___BV_${e}__`, Vt = (e, t) => e === true || e === "true" || e === "" ? "true" : e === "grammar" || e === "spelling" ? e : t === false ? "true" : e === false || e === "false" ? "false" : void 0, Lt = (e) => !!e && typeof e == "object" && e.constructor === Object, Mt = (e, t, a = true) => {
  const l = e instanceof Date && typeof e.getMonth == "function" ? new Date(e.getTime()) : Object.assign({}, e);
  return Lt(e) && Lt(t) && Object.keys(t).forEach((n) => {
    Lt(t[n]) ? n in e ? l[n] = Mt(e[n], t[n], a) : Object.assign(l, { [n]: t[n] }) : Array.isArray(t[n]) && Array.isArray(e[n]) ? Object.assign(l, {
      [n]: a ? e[n].concat(
        t[n].filter((r) => !e[n].includes(r))
      ) : t[n]
    }) : Object.assign(l, { [n]: t[n] });
  }), l;
}, Pe = (e, t = {}, a = {}) => {
  const l = [e];
  let n;
  for (let r = 0; r < l.length && !n; r++) {
    const c = l[r];
    n = a[c];
  }
  return n && typeof n == "function" ? n(t) : n;
}, je = (e, t = NaN) => Number.isInteger(e) ? e : t, lt = (e, t = NaN) => {
  const a = Number.parseInt(e, 10);
  return Number.isNaN(a) ? t : a;
}, ot = (e, t = NaN) => {
  const a = Number.parseFloat(e.toString());
  return Number.isNaN(a) ? t : a;
}, At = (e, t) => Object.keys(e).filter((a) => !t.includes(a)).reduce((a, l) => ({ ...a, [l]: e[l] }), {}), St = (e) => Array.isArray(e) ? e.map((t) => St(t)) : e instanceof Date ? new Date(e.getTime()) : e && typeof e == "object" ? Object.getOwnPropertyNames(e).reduce((t, a) => {
  var l;
  return Object.defineProperty(t, a, (l = Object.getOwnPropertyDescriptor(e, a)) != null ? l : {}), t[a] = St(e[a]), t;
}, Object.create(Object.getPrototypeOf(e))) : e, qt = (e) => new Promise((t) => t(St(e))), Ta = (e, t) => t + (e ? zo(e) : ""), na = (e, t) => (Array.isArray(t) ? t.slice() : Object.keys(t)).reduce(
  (a, l) => (a[l] = e[l], a),
  {}
), as = (e) => typeof e == "boolean" ? e : e === "" ? true : e === "true", rt = (e) => !!(e.href || e.to);
function u(e) {
  return nl(
    () => e.value === void 0 || e.value === null ? e.value : as(e.value)
  );
}
const Cl = Symbol(), wl = {
  items: De([]),
  reset() {
    this.items = De([]);
  }
}, ls = (e) => {
  e.provide(Cl, wl);
}, _l = () => {
  var e;
  return (e = He(Cl)) != null ? e : wl;
}, _e = (e, t, a) => {
  Be(() => {
    var l;
    (l = e == null ? void 0 : e.value) == null || l.addEventListener(t, a);
  }), Zt(() => {
    var l;
    (l = e == null ? void 0 : e.value) == null || l.removeEventListener(t, a);
  });
}, Tl = (e) => i(() => ({
  "form-check": e.plain === false && e.button === false,
  "form-check-inline": e.inline === true,
  "form-switch": e.switch === true,
  [`form-control-${e.size}`]: e.size !== void 0 && e.size !== "md"
})), Vl = (e) => i(() => ({
  "form-check-input": e.plain === false && e.button === false,
  "is-valid": e.state === true,
  "is-invalid": e.state === false,
  "btn-check": e.button === true
})), Al = (e) => i(() => ({
  "form-check-label": e.plain === false && e.button === false,
  btn: e.button === true,
  [`btn-${e.buttonVariant}`]: e.button === true && e.buttonVariant !== void 0,
  [`btn-${e.size}`]: e.button && e.size && e.size !== "md"
})), Ol = (e) => i(() => ({
  "aria-invalid": Vt(e.ariaInvalid, e.state),
  "aria-required": e.required === true ? true : void 0
})), xl = (e) => i(() => ({
  "was-validated": e.validated === true,
  "btn-group": e.buttons === true && e.stacked === false,
  "btn-group-vertical": e.stacked === true,
  [`btn-group-${e.size}`]: e.size !== void 0
})), kt = (e, t, a) => e.reduce(
  (l, n) => n.type.toString() === "Symbol(Fragment)" ? l.concat(n.children) : l.concat([n]),
  []
).filter((l) => l.type.__name === t || l.type.name === t).map((l) => {
  const n = (l.children.default ? l.children.default() : []).find(
    (r) => r.type.toString() === "Symbol(Text)"
  );
  return {
    props: {
      disabled: a,
      ...l.props
    },
    text: n ? n.children : ""
  };
}), Pl = (e, t) => typeof e == "string" ? {
  props: {
    value: e,
    disabled: t.disabled
  },
  text: e
} : {
  props: {
    value: e[t.valueField],
    disabled: t.disabled || e[t.disabledField],
    ...e.props
  },
  text: e[t.textField],
  html: e[t.htmlField]
}, Il = (e, t, a, l, n) => ({
  ...e,
  props: {
    "button-variant": a.buttonVariant,
    form: a.form,
    name: l.value,
    id: `${n.value}_option_${t}`,
    button: a.buttons,
    state: a.state,
    plain: a.plain,
    size: a.size,
    inline: !a.stacked,
    required: a.required,
    ...e.props
  }
}), $e = (e, t) => i(() => (e == null ? void 0 : e.value) || Ne(t)), Fl = {
  ariaInvalid: {
    type: [Boolean, String],
    default: void 0
  },
  autocomplete: { type: String, required: false },
  autofocus: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  form: { type: String, required: false },
  formatter: { type: Function, required: false },
  id: { type: String, required: false },
  lazy: { type: Boolean, default: false },
  lazyFormatter: { type: Boolean, default: false },
  list: { type: String, required: false },
  modelValue: { type: [String, Number], default: "" },
  name: { type: String, required: false },
  number: { type: Boolean, default: false },
  placeholder: { type: String, required: false },
  plaintext: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  required: { type: Boolean, default: false },
  size: { type: String, required: false },
  state: { type: Boolean, default: null },
  trim: { type: Boolean, default: false }
}, El = (e, t) => {
  const a = U();
  let l = null, n = true;
  const r = $e(s(e, "id"), "input"), c = (y, k, h = false) => (y = String(y), typeof e.formatter == "function" && (!e.lazyFormatter || h) ? (n = false, e.formatter(y, k)) : y), d = (y) => e.trim ? y.trim() : e.number ? Number.parseFloat(y) : y, v = () => {
    Ee(() => {
      var y;
      e.autofocus && ((y = a.value) == null || y.focus());
    });
  };
  Be(v), Be(() => {
    a.value && (a.value.value = e.modelValue);
  }), ea(v);
  const b = i(
    () => {
      var y;
      return Vt(e.ariaInvalid, (y = e.state) != null ? y : void 0);
    }
  ), B = (y) => {
    const { value: k } = y.target, h = c(k, y);
    if (h === false || y.defaultPrevented) {
      y.preventDefault();
      return;
    }
    if (e.lazy)
      return;
    const S = d(h);
    e.modelValue !== S && (l = k, t("update:modelValue", S)), t("input", h);
  }, m = (y) => {
    const { value: k } = y.target, h = c(k, y);
    if (h === false || y.defaultPrevented) {
      y.preventDefault();
      return;
    }
    if (!e.lazy)
      return;
    l = k, t("update:modelValue", h);
    const S = d(h);
    e.modelValue !== S && t("change", h);
  }, p = (y) => {
    if (t("blur", y), !e.lazy && !e.lazyFormatter)
      return;
    const { value: k } = y.target, h = c(k, y, true);
    l = k, t("update:modelValue", h);
  }, V = () => {
    var y;
    e.disabled || (y = a.value) == null || y.focus();
  }, w = () => {
    var y;
    e.disabled || (y = a.value) == null || y.blur();
  };
  return de(
    () => e.modelValue,
    (y) => {
      !a.value || (a.value.value = l && n ? l : y, l = null, n = true);
    }
  ), {
    input: a,
    computedId: r,
    computedAriaInvalid: b,
    onInput: B,
    onChange: m,
    onBlur: p,
    focus: V,
    blur: w
  };
}, Je = (e, t) => {
  if (!e)
    return e;
  if (t in e)
    return e[t];
  const a = t.split(".");
  return Je(e[a[0]], a.splice(1).join("."));
}, zt = (e, t = null, a, l) => {
  if (Object.prototype.toString.call(e) === "[object Object]") {
    const n = Je(e, l.valueField), r = Je(e, l.textField), c = Je(e, l.htmlField), d = Je(e, l.disabledField), v = e[l.optionsField] || null;
    return v !== null ? {
      label: String(Je(e, l.labelField) || r),
      options: oa(v, a, l)
    } : {
      value: typeof n > "u" ? t || r : n,
      text: String(typeof r > "u" ? t : r),
      html: c,
      disabled: Boolean(d)
    };
  }
  return {
    value: t || e,
    text: String(e),
    disabled: false
  };
}, oa = (e, t, a) => Array.isArray(e) ? e.map((l) => zt(l, null, t, a)) : Object.prototype.toString.call(e) === "[object Object]" ? (console.warn(
  `[BootstrapVue warn]: ${t} - Setting prop "options" to an object is deprecated. Use the array format instead.`
), Object.keys(e).map((l) => {
  const n = e[l];
  switch (typeof n) {
    case "object":
      return zt(n.text, String(n.value), t, a);
    default:
      return zt(n, String(l), t, a);
  }
})) : [], os = ["id"], Ll = Symbol(), ss = /* @__PURE__ */ P({
  __name: "BAccordion",
  props: {
    flush: { default: false },
    free: { default: false },
    id: null
  },
  setup(e) {
    const t = e, a = $e(s(t, "id"), "accordion"), l = u(s(t, "flush")), n = u(s(t, "free")), r = i(() => ({
      "accordion-flush": l.value
    }));
    return n.value || et(Ll, a.value), (c, d) => (f(), g("div", {
      id: o(a),
      class: E(["accordion", o(r)])
    }, [
      $(c.$slots, "default")
    ], 10, os));
  }
}), zl = /* @__PURE__ */ P({
  __name: "BCollapse",
  props: {
    accordion: null,
    id: { default: Ne() },
    modelValue: { default: false },
    tag: { default: "div" },
    toggle: { default: false },
    visible: { default: false },
    isNav: { default: false }
  },
  emits: ["update:modelValue", "show", "shown", "hide", "hidden"],
  setup(e, { emit: t }) {
    const a = e, l = u(s(a, "modelValue")), n = u(s(a, "toggle")), r = u(s(a, "visible")), c = u(s(a, "isNav")), d = U(), v = U(), b = i(() => ({
      show: l.value,
      "navbar-collapse": c.value
    })), B = () => t("update:modelValue", false);
    return de(
      () => l.value,
      (m) => {
        var p, V;
        m ? (p = v.value) == null || p.show() : (V = v.value) == null || V.hide();
      }
    ), de(
      () => r.value,
      (m) => {
        var p, V;
        m ? (t("update:modelValue", !!m), (p = v.value) == null || p.show()) : (t("update:modelValue", !!m), (V = v.value) == null || V.hide());
      }
    ), _e(d, "show.bs.collapse", () => {
      t("show"), t("update:modelValue", true);
    }), _e(d, "hide.bs.collapse", () => {
      t("hide"), t("update:modelValue", false);
    }), _e(d, "shown.bs.collapse", () => t("shown")), _e(d, "hidden.bs.collapse", () => t("hidden")), Be(() => {
      var m;
      v.value = new Collapse(d.value, {
        parent: a.accordion ? `#${a.accordion}` : void 0,
        toggle: n.value
      }), (r.value || l.value) && (t("update:modelValue", true), (m = v.value) == null || m.show());
    }), (m, p) => (f(), z(Y(e.tag), {
      id: e.id,
      ref_key: "element",
      ref: d,
      class: E(["collapse", o(b)]),
      "data-bs-parent": e.accordion || null,
      "is-nav": o(c)
    }, {
      default: H(() => [
        $(m.$slots, "default", {
          visible: o(l),
          close: B
        })
      ]),
      _: 3
    }, 8, ["id", "class", "data-bs-parent", "is-nav"]));
  }
}), Va = (e, t) => e.setAttribute("data-bs-theme", t), rs = {
  mounted(e, t) {
    Va(e, t.value);
  },
  updated(e, t) {
    Va(e, t.value);
  }
}, is = {
  mounted(e, t) {
    const a = t.modifiers.left ? "left" : t.modifiers.right ? "right" : t.modifiers.bottom ? "bottom" : t.modifiers.top ? "top" : "right", l = [];
    t.modifiers.manual ? l.push("manual") : (t.modifiers.click && l.push("click"), t.modifiers.hover && l.push("hover"), t.modifiers.focus && l.push("focus")), e.setAttribute("data-bs-toggle", "popover"), new Popover(e, {
      trigger: l.length === 0 ? "click" : l.join(" "),
      placement: a,
      content: t.value,
      html: t.modifiers.html
    });
  },
  unmounted(e) {
    const t = Popover.getInstance(e);
    t !== null && t.dispose();
  }
}, us = (e) => {
  if (e.classList.contains("offcanvas"))
    return "offcanvas";
  if (e.classList.contains("collapse"))
    return "collapse";
  throw Error("Couldn't resolve toggle type");
}, ds = (e, t) => {
  const { modifiers: a, arg: l, value: n } = e, r = Object.keys(a || {}), c = typeof n == "string" ? n.split(mt) : n;
  if (es(t.tagName, "a")) {
    const d = la(t, "href") || "";
    Eo.test(d) && r.push(d.replace(Fo, ""));
  }
  return Array.prototype.concat.apply([], [l, c]).forEach((d) => typeof d == "string" && r.push(d)), r.filter((d, v, b) => d && b.indexOf(d) === v);
}, sa = {
  mounted(e, t) {
    const a = ds(t, e), l = [], n = e.tagName === "a" ? "href" : "data-bs-target";
    a.forEach((r) => {
      const c = document.getElementById(r);
      c !== null && (e.setAttribute("data-bs-toggle", us(c)), l.push(`#${r}`));
    }), l.length > 0 && e.setAttribute(n, l.join(","));
  }
}, cs = (e, t) => {
  if (t != null && t.trigger)
    return t.trigger;
  if (e.manual)
    return "manual";
  const a = [];
  return e.click && a.push("click"), e.hover && a.push("hover"), e.focus && a.push("focus"), a.length > 0 ? a.join(" ") : "hover focus";
}, fs = (e, t) => t != null && t.placement ? t.placement : e.left ? "left" : e.right ? "right" : e.bottom ? "bottom" : "top", vs = (e) => e != null && e.delay ? e.delay : 0, Aa = (e) => typeof e > "u" ? (console.warn(
  "Review tooltip directive usage. Some uses are not defining a title in root component or a value like `v-b-tooltip='{title: \"my title\"}'` nor `v-b-tooltip=\"'my title'\"` to define a title"
), "") : typeof e == "object" ? e == null ? void 0 : e.title : e, ms = {
  beforeMount(e, t) {
    e.setAttribute("data-bs-toggle", "tooltip"), e.getAttribute("title") || e.setAttribute("title", Aa(t.value).toString());
    const a = /<("[^"]*"|'[^']*'|[^'">])*>/.test(e.title), l = cs(t.modifiers, t.value), n = fs(t.modifiers, t.value), r = vs(t.value), c = e.getAttribute("title");
    new Tooltip(e, {
      trigger: l,
      placement: n,
      delay: r,
      html: a
    }), c && e.setAttribute("data-bs-original-title", c);
  },
  updated(e, t) {
    e.getAttribute("title") || e.setAttribute("title", Aa(t.value).toString());
    const a = e.getAttribute("title"), l = e.getAttribute("data-bs-original-title"), n = Tooltip.getInstance(e);
    e.removeAttribute("title"), a && a !== l && (n == null || n.setContent({ ".tooltip-inner": a }), e.setAttribute("data-bs-original-title", a));
  },
  unmounted(e) {
    const t = Tooltip.getInstance(e);
    t !== null && t.dispose();
  }
}, bt = /* @__PURE__ */ new Map();
class bs {
  constructor(t, a, l, n, r) {
    be(this, "element");
    be(this, "margin");
    be(this, "once");
    be(this, "callback");
    be(this, "instance");
    be(this, "observer");
    be(this, "doneOnce");
    be(this, "visible");
    this.element = t, this.margin = a, this.once = l, this.callback = n, this.instance = r, this.createObserver();
  }
  createObserver() {
    if (this.observer && this.stop(), !(this.doneOnce || typeof this.callback != "function")) {
      try {
        this.observer = new IntersectionObserver(this.handler.bind(this), {
          root: null,
          rootMargin: this.margin,
          threshold: 0
        });
      } catch {
        console.error("Intersection Observer not supported"), this.doneOnce = true, this.observer = void 0, this.callback(null);
        return;
      }
      this.instance.$nextTick(() => {
        this.observer && this.observer.observe(this.element);
      });
    }
  }
  handler(t) {
    const [a] = t, l = Boolean(a.isIntersecting || a.intersectionRatio > 0);
    l !== this.visible && (this.visible = l, this.callback(l), this.once && this.visible && (this.doneOnce = true, this.stop()));
  }
  stop() {
    this.observer && this.observer.disconnect(), this.observer = null;
  }
}
const Nl = (e) => {
  if (bt.has(e)) {
    const t = bt.get(e);
    t && t.stop && t.stop(), bt.delete(e);
  }
}, Oa = (e, t) => {
  const a = {
    margin: "0px",
    once: false,
    callback: t.value
  };
  Object.keys(t.modifiers).forEach((n) => {
    Number.isInteger(n) ? a.margin = `${n}px` : n.toLowerCase() === "once" && (a.once = true);
  }), Nl(e);
  const l = new bs(
    e,
    a.margin,
    a.once,
    a.callback,
    t.instance
  );
  bt.set(e, l);
}, ps = {
  beforeMount(e, t) {
    Oa(e, t);
  },
  updated(e, t) {
    Oa(e, t);
  },
  unmounted(e) {
    Nl(e);
  }
}, gs = { class: "accordion-item" }, hs = ["id"], ys = ["aria-expanded", "aria-controls"], Bs = { class: "accordion-body" }, $s = /* @__PURE__ */ P({
  __name: "BAccordionItem",
  props: {
    id: null,
    title: null,
    visible: { default: false }
  },
  setup(e) {
    const t = e, a = He(Ll, ""), l = $e(s(t, "id"), "accordion_item"), n = u(s(t, "visible"));
    return (r, c) => (f(), g("div", gs, [
      M("h2", {
        id: `${o(l)}heading`,
        class: "accordion-header"
      }, [
        tt((f(), g("button", {
          class: E(["accordion-button", { collapsed: !o(n) }]),
          type: "button",
          "aria-expanded": o(n) ? "true" : "false",
          "aria-controls": o(l)
        }, [
          $(r.$slots, "title", {}, () => [
            ee(G(e.title), 1)
          ])
        ], 10, ys)), [
          [o(sa), void 0, o(l)]
        ])
      ], 8, hs),
      fe(zl, {
        id: o(l),
        class: "accordion-collapse",
        visible: e.visible,
        accordion: o(a),
        "aria-labelledby": `heading${o(l)}`
      }, {
        default: H(() => [
          M("div", Bs, [
            $(r.$slots, "default")
          ])
        ]),
        _: 3
      }, 8, ["id", "visible", "accordion", "aria-labelledby"])
    ]));
  }
}), ut = /* @__PURE__ */ P({
  __name: "BTransition",
  props: {
    appear: { default: false },
    mode: null,
    noFade: { default: false },
    transProps: null
  },
  setup(e) {
    const t = e, a = u(s(t, "appear")), l = u(s(t, "noFade")), n = i(() => {
      const d = {
        name: "",
        enterActiveClass: "",
        enterToClass: "",
        leaveActiveClass: "",
        leaveToClass: "showing",
        enterFromClass: "showing",
        leaveFromClass: ""
      }, v = {
        ...d,
        enterActiveClass: "fade showing",
        leaveActiveClass: "fade showing"
      };
      return l.value ? d : v;
    }), r = i(() => ({ mode: t.mode, css: true, ...n.value })), c = i(
      () => t.transProps !== void 0 ? {
        ...r.value,
        ...t.transProps
      } : a.value ? {
        ...r.value,
        appear: true,
        appearActiveClass: n.value.enterActiveClass,
        appearToClass: n.value.enterToClass
      } : r.value
    );
    return (d, v) => (f(), z(Cn, he(Ce(o(c))), {
      default: H(() => [
        $(d.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ss = ["type", "disabled", "aria-label"], at = /* @__PURE__ */ P({
  __name: "BCloseButton",
  props: {
    ariaLabel: { default: "Close" },
    disabled: { default: false },
    white: { default: false },
    type: { default: "button" }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const a = e, l = u(s(a, "disabled")), n = u(s(a, "white")), r = i(() => ({
      "btn-close-white": n.value
    }));
    return (c, d) => (f(), g("button", {
      type: e.type,
      class: E(["btn-close", o(r)]),
      disabled: o(l),
      "aria-label": e.ariaLabel,
      onClick: d[0] || (d[0] = (v) => t("click", v))
    }, null, 10, Ss));
  }
}), ks = {
  key: 0,
  class: "visually-hidden"
}, Ot = /* @__PURE__ */ P({
  __name: "BSpinner",
  props: {
    label: null,
    role: { default: "status" },
    small: { default: false },
    tag: { default: "span" },
    type: { default: "border" },
    variant: null
  },
  setup(e) {
    const t = e, a = Se(), l = u(s(t, "small")), n = i(() => ({
      "spinner-border": t.type === "border",
      "spinner-border-sm": t.type === "border" && l.value,
      "spinner-grow": t.type === "grow",
      "spinner-grow-sm": t.type === "grow" && l.value,
      [`text-${t.variant}`]: t.variant !== void 0
    })), r = i(() => !Ve(a.label));
    return (c, d) => (f(), z(Y(e.tag), {
      class: E(o(n)),
      role: e.label || o(r) ? e.role : null,
      "aria-hidden": e.label || o(r) ? null : true
    }, {
      default: H(() => [
        e.label || o(r) ? (f(), g("span", ks, [
          $(c.$slots, "label", {}, () => [
            ee(G(e.label), 1)
          ])
        ])) : W("", true)
      ]),
      _: 3
    }, 8, ["class", "role", "aria-hidden"]));
  }
}), We = {
  active: { type: [Boolean, String], default: false },
  activeClass: { type: String, default: "router-link-active" },
  append: { type: [Boolean, String], default: false },
  disabled: { type: [Boolean, String], default: false },
  event: { type: [String, Array], default: "click" },
  exact: { type: [Boolean, String], default: false },
  exactActiveClass: { type: String, default: "router-link-exact-active" },
  href: { type: String },
  rel: { type: String, default: null },
  replace: { type: [Boolean, String], default: false },
  routerComponentName: { type: String, default: "router-link" },
  routerTag: { type: String, default: "a" },
  target: { type: String, default: "_self" },
  to: { type: [String, Object], default: null }
}, Cs = P({
  props: We,
  emits: ["click"],
  setup(e, { emit: t, attrs: a }) {
    const l = u(s(e, "active")), n = u(s(e, "append")), r = u(s(e, "disabled")), c = u(s(e, "exact")), d = u(s(e, "replace")), v = el(), b = U(null), B = i(() => {
      const y = e.routerComponentName.split("-").map((h) => h.charAt(0).toUpperCase() + h.slice(1)).join("");
      return !((v == null ? void 0 : v.appContext.app.component(y)) !== void 0) || r.value || !e.to ? "a" : e.routerComponentName;
    }), m = i(() => {
      const y = "#";
      if (e.href)
        return e.href;
      if (typeof e.to == "string")
        return e.to || y;
      const k = e.to;
      if (Object.prototype.toString.call(k) === "[object Object]" && (k.path || k.query || k.hash)) {
        const h = k.path || "", S = k.query ? `?${Object.keys(k.query).map((F) => `${F}=${k.query[F]}`).join("=")}` : "", I = !k.hash || k.hash.charAt(0) === "#" ? k.hash || "" : `#${k.hash}`;
        return `${h}${S}${I}` || y;
      }
      return y;
    }), p = i(() => ({
      to: e.to,
      href: m.value,
      target: e.target,
      rel: e.target === "_blank" && e.rel === null ? "noopener" : e.rel || null,
      tabindex: r.value ? "-1" : typeof a.tabindex > "u" ? null : a.tabindex,
      "aria-disabled": r.value ? "true" : null
    }));
    return {
      computedLinkClasses: i(() => ({
        active: l.value,
        disabled: r.value
      })),
      tag: B,
      routerAttr: p,
      link: b,
      clicked: (y) => {
        if (r.value) {
          y.preventDefault(), y.stopImmediatePropagation();
          return;
        }
        t("click", y);
      },
      activeBoolean: l,
      appendBoolean: n,
      disabledBoolean: r,
      replaceBoolean: d,
      exactBoolean: c
    };
  }
}), Te = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [l, n] of t)
    a[l] = n;
  return a;
};
function ws(e, t, a, l, n, r) {
  return e.tag === "router-link" ? (f(), z(Y(e.tag), J({ key: 0 }, e.routerAttr, { custom: "" }), {
    default: H(({ href: c, navigate: d, isActive: v, isExactActive: b }) => [
      (f(), z(Y(e.routerTag), J({
        ref: "link",
        href: c,
        class: [
          (v || e.activeBoolean) && e.activeClass,
          (b || e.exactBoolean) && e.exactActiveClass
        ]
      }, e.$attrs, { onClick: d }), {
        default: H(() => [
          $(e.$slots, "default")
        ]),
        _: 2
      }, 1040, ["href", "class", "onClick"]))
    ]),
    _: 3
  }, 16)) : (f(), z(Y(e.tag), J({
    key: 1,
    ref: "link",
    class: e.computedLinkClasses
  }, e.routerAttr, { onClick: e.clicked }), {
    default: H(() => [
      $(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class", "onClick"]));
}
const Ae = /* @__PURE__ */ Te(Cs, [["render", ws]]), _s = P({
  components: { BLink: Ae, BSpinner: Ot },
  props: {
    ...We,
    active: { type: [Boolean, String], default: false },
    disabled: { type: [Boolean, String], default: false },
    href: { type: String, required: false },
    pill: { type: [Boolean, String], default: false },
    pressed: { type: [Boolean, String], default: false },
    rel: { type: String, default: void 0 },
    size: { type: String, default: "md" },
    squared: { type: [Boolean, String], default: false },
    tag: { type: String, default: "button" },
    target: { type: String, default: "_self" },
    type: { type: String, default: "button" },
    variant: { type: String, default: "secondary" },
    loading: { type: [Boolean, String], default: false },
    loadingMode: { type: String, default: "inline" }
  },
  emits: ["click", "update:pressed"],
  setup(e, { emit: t }) {
    const a = u(s(e, "active")), l = u(s(e, "disabled")), n = u(s(e, "pill")), r = u(s(e, "pressed")), c = u(s(e, "squared")), d = u(s(e, "loading")), v = i(() => r.value === true), b = i(
      () => e.tag === "button" && e.href === void 0 && e.to === null
    ), B = i(() => rt(e)), m = i(() => e.to !== null), p = i(
      () => e.href !== void 0 ? false : !b.value
    ), V = i(() => [
      [`btn-${e.variant}`],
      [`btn-${e.size}`],
      {
        active: a.value || r.value,
        "rounded-pill": n.value,
        "rounded-0": c.value,
        disabled: l.value
      }
    ]), w = i(() => ({
      "aria-disabled": p.value ? l.value : null,
      "aria-pressed": v.value ? r.value : null,
      autocomplete: v.value ? "off" : null,
      disabled: b.value ? l.value : null,
      href: e.href,
      rel: B.value ? e.rel : null,
      role: p.value || B.value ? "button" : null,
      target: B.value ? e.target : null,
      type: b.value ? e.type : null,
      to: b.value ? null : e.to,
      append: B.value ? e.append : null,
      activeClass: m.value ? e.activeClass : null,
      event: m.value ? e.event : null,
      exact: m.value ? e.exact : null,
      exactActiveClass: m.value ? e.exactActiveClass : null,
      replace: m.value ? e.replace : null,
      routerComponentName: m.value ? e.routerComponentName : null,
      routerTag: m.value ? e.routerTag : null
    })), y = i(
      () => m.value ? Ae : e.href ? "a" : e.tag
    );
    return {
      computedClasses: V,
      computedAttrs: w,
      computedTag: y,
      clicked: (h) => {
        if (l.value) {
          h.preventDefault(), h.stopPropagation();
          return;
        }
        t("click", h), v.value && t("update:pressed", !r.value);
      },
      loadingBoolean: d
    };
  }
});
function Ts(e, t, a, l, n, r) {
  const c = tl("b-spinner");
  return f(), z(Y(e.computedTag), J({
    class: ["btn", e.computedClasses]
  }, e.computedAttrs, { onClick: e.clicked }), {
    default: H(() => [
      e.loadingBoolean ? (f(), g("div", {
        key: 0,
        class: E(["btn-loading", { "mode-fill": e.loadingMode === "fill", "mode-inline": e.loadingMode === "inline" }])
      }, [
        $(e.$slots, "loading", {}, () => [
          fe(c, {
            class: "btn-spinner",
            small: e.size !== "lg"
          }, null, 8, ["small"])
        ])
      ], 2)) : W("", true),
      M("div", {
        class: E(["btn-content", { "btn-loading-fill": e.loadingBoolean && e.loadingMode === "fill" }])
      }, [
        $(e.$slots, "default")
      ], 2)
    ]),
    _: 3
  }, 16, ["class", "onClick"]);
}
const Ye = /* @__PURE__ */ Te(_s, [["render", Ts]]), Vs = (e, t = U(1e3), a = {}) => {
  const l = U(false), n = U(0), r = U(qe(e)), c = U(qe(t)), d = i(() => Math.ceil(r.value / c.value)), v = i(
    () => m.value || l.value ? Math.round(r.value - n.value * c.value) : 0
  ), { pause: b, resume: B, isActive: m } = Jn(
    () => n.value = n.value + 1,
    t,
    a
  ), p = () => {
    l.value = false, n.value = 0, B();
  }, V = () => {
    l.value = false, n.value = d.value;
  };
  Qe(() => {
    const k = qe(e), h = r.value;
    k !== h && (r.value = k, V(), p());
  }), Qe(() => {
    const k = qe(t), h = c.value;
    k !== h && (c.value = k, V(), p());
  }), Qe(() => {
    n.value > d.value && (n.value = d.value), n.value === d.value && b();
  });
  const w = () => {
    m.value !== false && (l.value = true, b());
  }, y = () => {
    n.value !== d.value && (l.value = false, B());
  };
  return {
    isActive: Nt(m),
    isPaused: Nt(l),
    restart: p,
    stop: V,
    pause: w,
    resume: y,
    value: v
  };
}, As = /* @__PURE__ */ P({
  __name: "BAlert",
  props: {
    dismissLabel: { default: "Close" },
    dismissible: { default: false },
    fade: { default: false },
    modelValue: { type: [Boolean, Number], default: false },
    variant: { default: "info" },
    closeContent: null,
    immediate: { default: true },
    interval: { default: 1e3 },
    showOnPause: { default: true }
  },
  emits: ["closed", "close-countdown", "update:modelValue"],
  setup(e, { expose: t, emit: a }) {
    const l = e, n = u(s(l, "dismissible")), r = u(s(l, "fade")), c = u(s(l, "immediate")), d = u(s(l, "showOnPause")), v = Se(), b = i(() => !Ve(v.close)), B = i(() => [
      [`alert-${l.variant}`],
      {
        "alert-dismissible": n.value
      }
    ]), {
      isActive: m,
      pause: p,
      restart: V,
      resume: w,
      stop: y,
      isPaused: k,
      value: h
    } = Vs(
      typeof l.modelValue == "boolean" ? 0 : s(l, "modelValue"),
      s(l, "interval"),
      {
        immediate: typeof l.modelValue == "number" && c.value
      }
    ), S = i(
      () => typeof l.modelValue == "boolean" ? l.modelValue : m.value || d.value && k.value
    );
    Qe(() => a("close-countdown", h.value));
    const I = () => {
      typeof l.modelValue == "boolean" ? a("update:modelValue", false) : (a("update:modelValue", 0), y()), a("closed");
    };
    return Zt(() => y()), t({ pause: p, resume: w, restart: V, stop: y }), (F, x) => (f(), z(ut, {
      "no-fade": !o(r),
      "trans-props": { enterToClass: "show" }
    }, {
      default: H(() => [
        o(S) ? (f(), g("div", {
          key: 0,
          class: E(["alert", o(B)]),
          role: "alert",
          "aria-live": "polite",
          "aria-atomic": "true"
        }, [
          $(F.$slots, "default"),
          o(n) ? (f(), g(oe, { key: 0 }, [
            o(b) || e.closeContent ? (f(), z(Ye, {
              key: 0,
              type: "button",
              onClick: I
            }, {
              default: H(() => [
                $(F.$slots, "close", {}, () => [
                  ee(G(e.closeContent), 1)
                ])
              ]),
              _: 3
            })) : (f(), z(at, {
              key: 1,
              "aria-label": e.dismissLabel,
              onClick: I
            }, null, 8, ["aria-label"]))
          ], 64)) : W("", true)
        ], 2)) : W("", true)
      ]),
      _: 3
    }, 8, ["no-fade"]));
  }
}), Dl = Symbol(), Os = /* @__PURE__ */ P({
  __name: "BAvatarGroup",
  props: {
    overlap: { default: 0.3 },
    rounded: { type: [Boolean, String], default: false },
    size: null,
    square: { default: false },
    tag: { default: "div" },
    variant: null
  },
  setup(e) {
    const t = e, a = u(s(t, "square")), l = i(() => Gt(t.size)), n = i(
      () => Math.min(Math.max(c(t.overlap), 0), 1) / 2
    ), r = i(() => {
      const d = l.value ? `calc(${l.value} * ${n.value})` : null;
      return d ? { paddingLeft: d, paddingRight: d } : {};
    }), c = (d) => typeof d == "string" && fl(d) ? ot(d, 0) : d || 0;
    return et(Dl, {
      overlapScale: n,
      size: t.size,
      square: a.value,
      rounded: t.rounded,
      variant: t.variant
    }), (d, v) => (f(), z(Y(e.tag), {
      class: "b-avatar-group",
      role: "group"
    }, {
      default: H(() => [
        M("div", {
          class: "b-avatar-group-inner",
          style: Ie(o(r))
        }, [
          $(d.$slots, "default")
        ], 4)
      ]),
      _: 3
    }));
  }
}), xs = {
  key: 0,
  class: "b-avatar-custom"
}, Ps = {
  key: 1,
  class: "b-avatar-img"
}, Is = ["src", "alt"], Gt = (e) => {
  const t = typeof e == "string" && fl(e) ? ot(e, 0) : e;
  return typeof t == "number" ? `${t}px` : t || null;
}, Fs = /* @__PURE__ */ P({
  __name: "BAvatar",
  props: {
    alt: { default: "avatar" },
    ariaLabel: null,
    badge: { type: [Boolean, String], default: false },
    badgeLeft: { default: false },
    badgeOffset: null,
    badgeTop: { default: false },
    badgeVariant: { default: "primary" },
    button: { default: false },
    buttonType: { default: "button" },
    disabled: { default: false },
    icon: null,
    rounded: { type: [Boolean, String], default: "circle" },
    size: null,
    square: { default: false },
    src: null,
    text: null,
    textVariant: null,
    variant: { default: "secondary" }
  },
  emits: ["click", "img-error"],
  setup(e, { emit: t }) {
    const a = e, l = Se(), n = He(Dl, null), r = ["sm", null, "lg"], c = 0.4, d = c * 0.7, v = u(s(a, "badgeLeft")), b = u(s(a, "badgeTop")), B = u(s(a, "button")), m = u(s(a, "disabled")), p = u(s(a, "square")), V = i(() => !Ve(l.default)), w = i(() => !Ve(l.badge)), y = i(() => !!a.badge || a.badge === "" || w.value), k = i(
      () => n != null && n.size ? n.size : Gt(a.size)
    ), h = i(
      () => n != null && n.variant ? n.variant : a.variant
    ), S = i(
      () => n != null && n.rounded ? n.rounded : a.rounded
    ), I = i(() => ({
      type: B.value ? a.buttonType : void 0,
      "aria-label": a.ariaLabel || null,
      disabled: m.value || null
    })), F = i(() => [`bg-${a.badgeVariant}`]), x = i(() => a.badge === true ? "" : a.badge), T = i(() => [[`text-${re(a.badgeVariant)}`]]), O = i(() => ({
      [`b-avatar-${a.size}`]: !!a.size && r.indexOf(Gt(a.size)) !== -1,
      [`bg-${h.value}`]: !!h.value,
      badge: !B.value && h.value && V.value,
      rounded: S.value === "" || S.value === true,
      ["rounded-circle"]: !p.value && S.value === "circle",
      ["rounded-0"]: p.value || S.value === "0",
      ["rounded-1"]: !p.value && S.value === "sm",
      ["rounded-3"]: !p.value && S.value === "lg",
      ["rounded-top"]: !p.value && S.value === "top",
      ["rounded-bottom"]: !p.value && S.value === "bottom",
      ["rounded-start"]: !p.value && S.value === "left",
      ["rounded-end"]: !p.value && S.value === "right",
      btn: B.value,
      [`btn-${h.value}`]: B.value ? !!h.value : false
    })), A = i(() => [
      [`text-${a.textVariant || re(h.value)}`]
    ]), C = i(() => {
      const ae = a.badgeOffset || "0px";
      return {
        fontSize: (r.indexOf(k.value || null) === -1 ? `calc(${k.value} * ${d})` : "") || "",
        top: b.value ? ae : "",
        bottom: b.value ? "" : ae,
        left: v.value ? ae : "",
        right: v.value ? "" : ae
      };
    }), L = i(() => {
      const ae = r.indexOf(k.value || null) === -1 ? `calc(${k.value} * ${c})` : null;
      return ae ? { fontSize: ae } : {};
    }), N = i(() => {
      var ye;
      const ae = ((ye = n == null ? void 0 : n.overlapScale) == null ? void 0 : ye.value) || 0, pe = k.value && ae ? `calc(${k.value} * -${ae})` : null;
      return pe ? { marginLeft: pe, marginRight: pe } : {};
    }), te = i(() => B.value ? "button" : "span"), Z = i(() => ({
      ...N.value,
      width: k.value,
      height: k.value
    })), re = (ae) => ae === "light" || ae === "warning" ? "dark" : "light", K = (ae) => {
      !m.value && B.value && t("click", ae);
    }, me = (ae) => t("img-error", ae);
    return (ae, pe) => (f(), z(Y(o(te)), J({
      class: ["b-avatar", o(O)],
      style: o(Z)
    }, o(I), { onClick: K }), {
      default: H(() => [
        o(V) ? (f(), g("span", xs, [
          $(ae.$slots, "default")
        ])) : e.src ? (f(), g("span", Ps, [
          M("img", {
            src: e.src,
            alt: e.alt,
            onError: me
          }, null, 40, Is)
        ])) : e.text ? (f(), g("span", {
          key: 2,
          class: E(["b-avatar-text", o(A)]),
          style: Ie(o(L))
        }, G(e.text), 7)) : W("", true),
        o(y) ? (f(), g("span", {
          key: 3,
          class: E(["b-avatar-badge", o(F)]),
          style: Ie(o(C))
        }, [
          o(w) ? $(ae.$slots, "badge", { key: 0 }) : (f(), g("span", {
            key: 1,
            class: E(o(T))
          }, G(o(x)), 3))
        ], 6)) : W("", true)
      ]),
      _: 3
    }, 16, ["class", "style"]));
  }
}), xa = At(We, ["event", "routerTag"]), Es = P({
  components: { BLink: Ae },
  props: {
    pill: { type: [Boolean, String], default: false },
    tag: { type: String, default: "span" },
    variant: { type: String, default: "secondary" },
    textIndicator: { type: [Boolean, String], default: false },
    dotIndicator: { type: [Boolean, String], default: false },
    ...xa
  },
  setup(e) {
    const t = u(s(e, "pill")), a = u(s(e, "textIndicator")), l = u(s(e, "dotIndicator")), n = u(s(e, "active")), r = u(s(e, "disabled")), c = i(() => rt(e)), d = i(
      () => c.value ? Ae : e.tag
    ), v = i(() => [
      [`bg-${e.variant}`],
      {
        active: n.value,
        disabled: r.value,
        "text-dark": ["warning", "info", "light"].includes(e.variant),
        "rounded-pill": t.value,
        "position-absolute top-0 start-100 translate-middle": a.value || l.value,
        "p-2 border border-light rounded-circle": l.value,
        "text-decoration-none": c.value
      }
    ]), b = i(
      () => c.value ? na(e, xa) : {}
    );
    return {
      computedClasses: v,
      computedLinkProps: b,
      computedTag: d
    };
  }
});
function Ls(e, t, a, l, n, r) {
  return f(), z(Y(e.computedTag), J({
    class: ["badge", e.computedClasses]
  }, e.computedLinkProps), {
    default: H(() => [
      $(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
const zs = /* @__PURE__ */ Te(Es, [["render", Ls]]), Pa = At(We, ["event", "routerTag"]), Ns = P({
  components: { BLink: Ae },
  props: {
    ...Pa,
    active: { type: [Boolean, String], default: false },
    ariaCurrent: { type: String, default: "location" },
    disabled: { type: [Boolean, String], default: false },
    text: { type: String, required: false }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const a = u(s(e, "active")), l = u(s(e, "disabled")), n = i(() => ({
      active: a.value
    })), r = i(
      () => a.value ? "span" : Ae
    ), c = i(
      () => a.value ? e.ariaCurrent : void 0
    );
    return {
      computedLinkProps: i(
        () => r.value !== "span" ? na(e, Pa) : {}
      ),
      computedClasses: n,
      computedTag: r,
      computedAriaCurrent: c,
      clicked: (b) => {
        if (l.value || a.value) {
          b.preventDefault(), b.stopImmediatePropagation();
          return;
        }
        l.value || t("click", b);
      }
    };
  }
});
function Ds(e, t, a, l, n, r) {
  return f(), g("li", {
    class: E(["breadcrumb-item", e.computedClasses])
  }, [
    (f(), z(Y(e.computedTag), J({ "aria-current": e.computedAriaCurrent }, e.computedLinkProps, { onClick: e.clicked }), {
      default: H(() => [
        $(e.$slots, "default", {}, () => [
          ee(G(e.text), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-current", "onClick"]))
  ], 2);
}
const Hl = /* @__PURE__ */ Te(Ns, [["render", Ds]]), Hs = { "aria-label": "breadcrumb" }, Rs = { class: "breadcrumb" }, js = /* @__PURE__ */ P({
  __name: "BBreadcrumb",
  props: {
    items: null
  },
  setup(e) {
    const t = e, a = _l(), l = i(() => {
      const n = t.items || (a == null ? void 0 : a.items) || [];
      let r = false;
      return n.map((d, v) => (typeof d == "string" && (d = { text: d }, v < n.length - 1 && (d.href = "#")), d.active && (r = true), !d.active && !r && (d.active = v + 1 === n.length), d));
    });
    return (n, r) => (f(), g("nav", Hs, [
      M("ol", Rs, [
        $(n.$slots, "prepend"),
        (f(true), g(oe, null, ve(o(l), (c, d) => (f(), z(Hl, J({ key: d }, c), {
          default: H(() => [
            ee(G(c.text), 1)
          ]),
          _: 2
        }, 1040))), 128)),
        $(n.$slots, "default"),
        $(n.$slots, "append")
      ])
    ]));
  }
}), Ms = /* @__PURE__ */ P({
  __name: "BButtonGroup",
  props: {
    ariaLabel: { default: "Group" },
    size: null,
    tag: { default: "div" },
    vertical: { default: false }
  },
  setup(e) {
    const t = e, a = u(s(t, "vertical")), l = i(() => ({
      "btn-group": !a.value,
      [`btn-group-${t.size}`]: t.size !== void 0,
      "btn-group-vertical": a.value
    }));
    return (n, r) => (f(), z(Y(e.tag), {
      class: E(o(l)),
      role: "group",
      "aria-label": e.ariaLabel
    }, {
      default: H(() => [
        $(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "aria-label"]));
  }
}), qs = ["role", "aria-label"], Gs = /* @__PURE__ */ P({
  __name: "BButtonToolbar",
  props: {
    ariaLabel: { default: "Group" },
    justify: { default: false },
    role: { default: "toolbar" }
  },
  setup(e) {
    const a = u(s(e, "justify")), l = i(() => ({
      "justify-content-between": a.value
    }));
    return (n, r) => (f(), g("div", {
      class: E([o(l), "btn-toolbar"]),
      role: e.role,
      "aria-label": e.ariaLabel
    }, [
      $(n.$slots, "default")
    ], 10, qs));
  }
}), ra = /* @__PURE__ */ P({
  __name: "BImg",
  props: {
    alt: null,
    blank: { default: false },
    blankColor: { default: "transparent" },
    block: { default: false },
    center: { default: false },
    fluid: { default: false },
    lazy: { default: false },
    fluidGrow: { default: false },
    height: null,
    left: { default: false },
    start: { default: false },
    right: { default: false },
    end: { default: false },
    rounded: { type: [Boolean, String], default: false },
    sizes: null,
    src: null,
    srcset: null,
    thumbnail: { default: false },
    width: null
  },
  emits: ["load"],
  setup(e, { emit: t }) {
    const a = e, l = '<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>', n = u(s(a, "lazy")), r = u(s(a, "blank")), c = u(s(a, "block")), d = u(s(a, "center")), v = u(s(a, "fluid")), b = u(s(a, "fluidGrow")), B = u(s(a, "left")), m = u(s(a, "start")), p = u(s(a, "right")), V = u(s(a, "end")), w = u(s(a, "thumbnail")), y = i(
      () => typeof a.srcset == "string" ? a.srcset.split(",").filter((O) => O).join(",") : Array.isArray(a.srcset) ? a.srcset.filter((O) => O).join(",") : void 0
    ), k = i(
      () => typeof a.sizes == "string" ? a.sizes.split(",").filter((O) => O).join(",") : Array.isArray(a.sizes) ? a.sizes.filter((O) => O).join(",") : void 0
    ), h = i(() => {
      const O = (L) => L === void 0 ? void 0 : typeof L == "number" ? L : Number.parseInt(L, 10) || void 0, A = O(a.width), C = O(a.height);
      if (r.value) {
        if (A !== void 0 && C === void 0)
          return { height: A, width: A };
        if (A === void 0 && C !== void 0)
          return { height: C, width: C };
        if (A === void 0 && C === void 0)
          return { height: 1, width: 1 };
      }
      return {
        width: A,
        height: C
      };
    }), S = i(
      () => T(h.value.width, h.value.height, a.blankColor)
    ), I = i(() => ({
      src: r.value ? S.value : a.src,
      alt: a.alt,
      width: h.value.width || void 0,
      height: h.value.height || void 0,
      srcset: r.value ? void 0 : y.value,
      sizes: r.value ? void 0 : k.value,
      loading: n.value ? "lazy" : "eager"
    })), F = i(
      () => B.value || m.value ? "float-start" : p.value || V.value ? "float-end" : d.value ? "mx-auto" : void 0
    ), x = i(() => ({
      "img-thumbnail": w.value,
      "img-fluid": v.value || b.value,
      "w-100": b.value,
      rounded: a.rounded === "" || a.rounded === true,
      [`rounded-${a.rounded}`]: typeof a.rounded == "string" && a.rounded !== "",
      [`${F.value}`]: F.value !== void 0,
      "d-block": c.value || d.value
    })), T = (O, A, C) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
      l.replace("%{w}", String(O)).replace("%{h}", String(A)).replace("%{f}", C)
    )}`;
    return (O, A) => (f(), g("img", J({ class: o(x) }, o(I), {
      onLoad: A[0] || (A[0] = (C) => t("load", C))
    }), null, 16));
  }
}), Ct = /* @__PURE__ */ P({
  __name: "BCardImg",
  props: {
    alt: null,
    blank: { default: false },
    blankColor: null,
    bottom: { default: false },
    lazy: { default: false },
    height: null,
    left: { default: false },
    start: { default: false },
    right: { default: false },
    end: { default: false },
    sizes: null,
    src: null,
    srcset: null,
    top: { default: false },
    width: null
  },
  emits: ["load"],
  setup(e, { emit: t }) {
    const a = e, l = u(s(a, "bottom")), n = u(s(a, "end")), r = u(s(a, "left")), c = u(s(a, "right")), d = u(s(a, "start")), v = u(s(a, "top")), b = i(
      () => v.value ? "card-img-top" : c.value || n.value ? "card-img-right" : l.value ? "card-img-bottom" : r.value || d.value ? "card-img-left" : "card-img"
    ), B = i(() => ({
      alt: a.alt,
      height: a.height,
      src: a.src,
      lazy: a.lazy,
      width: a.width,
      blank: a.blank,
      blankColor: a.blankColor,
      sizes: a.sizes,
      srcset: a.srcset
    }));
    return (m, p) => (f(), z(ra, J({ class: o(b) }, o(B), {
      onLoad: p[0] || (p[0] = (V) => t("load", V))
    }), null, 16, ["class"]));
  }
}), Us = ["innerHTML"], Rl = /* @__PURE__ */ P({
  __name: "BCardHeadFoot",
  props: {
    text: null,
    bgVariant: null,
    borderVariant: null,
    html: null,
    tag: { default: "div" },
    textVariant: null
  },
  setup(e) {
    const t = e, a = i(() => ({
      [`text-${t.textVariant}`]: t.textVariant !== void 0,
      [`bg-${t.bgVariant}`]: t.bgVariant !== void 0,
      [`border-${t.borderVariant}`]: t.borderVariant !== void 0
    }));
    return (l, n) => (f(), z(Y(e.tag), {
      class: E(o(a))
    }, {
      default: H(() => [
        e.html ? (f(), g("div", {
          key: 0,
          innerHTML: e.html
        }, null, 8, Us)) : $(l.$slots, "default", { key: 1 }, () => [
          ee(G(e.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), jl = /* @__PURE__ */ P({
  __name: "BCardHeader",
  props: {
    text: null,
    bgVariant: null,
    borderVariant: null,
    html: null,
    tag: { default: "div" },
    textVariant: null
  },
  setup(e) {
    const t = e;
    return (a, l) => (f(), z(Rl, J({ class: "card-header" }, t), {
      default: H(() => [
        $(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ml = /* @__PURE__ */ P({
  __name: "BCardTitle",
  props: {
    text: null,
    tag: { default: "h4" }
  },
  setup(e) {
    return (t, a) => (f(), z(Y(e.tag), { class: "card-title" }, {
      default: H(() => [
        $(t.$slots, "default", {}, () => [
          ee(G(e.text), 1)
        ])
      ]),
      _: 3
    }));
  }
}), ql = /* @__PURE__ */ P({
  __name: "BCardSubtitle",
  props: {
    text: null,
    tag: { default: "h6" },
    textVariant: { default: "muted" }
  },
  setup(e) {
    const t = e, a = i(() => [`text-${t.textVariant}`]);
    return (l, n) => (f(), z(Y(e.tag), {
      class: E(["card-subtitle mb-2", o(a)])
    }, {
      default: H(() => [
        $(l.$slots, "default", {}, () => [
          ee(G(e.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Gl = /* @__PURE__ */ P({
  __name: "BCardBody",
  props: {
    bodyBgVariant: null,
    bodyTag: { default: "div" },
    bodyTextVariant: null,
    overlay: { default: false },
    subtitle: null,
    subtitleTag: { default: "h4" },
    subtitleTextVariant: null,
    title: null,
    titleTag: { default: "h4" },
    text: null
  },
  setup(e) {
    const t = e, a = Se(), l = u(s(t, "overlay")), n = i(() => !Ve(a.title)), r = i(() => !Ve(a.subtitle)), c = i(() => ({
      "card-img-overlay": l.value,
      [`text-${t.bodyTextVariant}`]: t.bodyTextVariant !== void 0,
      [`bg-${t.bodyBgVariant}`]: t.bodyBgVariant !== void 0
    }));
    return (d, v) => (f(), z(Y(e.bodyTag), {
      class: E(["card-body", o(c)])
    }, {
      default: H(() => [
        !!e.title || o(n) ? (f(), z(Ml, {
          key: 0,
          tag: e.titleTag
        }, {
          default: H(() => [
            $(d.$slots, "title", {}, () => [
              ee(G(e.title), 1)
            ])
          ]),
          _: 3
        }, 8, ["tag"])) : W("", true),
        !!e.subtitle || o(r) ? (f(), z(ql, {
          key: 1,
          tag: e.subtitleTag,
          "text-variant": e.subtitleTextVariant
        }, {
          default: H(() => [
            $(d.$slots, "subtitle", {}, () => [
              ee(G(e.subtitle), 1)
            ])
          ]),
          _: 3
        }, 8, ["tag", "text-variant"])) : W("", true),
        $(d.$slots, "default", {}, () => [
          ee(G(e.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ul = /* @__PURE__ */ P({
  __name: "BCardFooter",
  props: {
    text: null,
    bgVariant: null,
    borderVariant: null,
    html: null,
    tag: { default: "div" },
    textVariant: null
  },
  setup(e) {
    const t = e;
    return (a, l) => (f(), z(Rl, J({ class: "card-footer" }, t), {
      default: H(() => [
        $(a.$slots, "default", {}, () => [
          ee(G(e.text), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
}), Wl = /* @__PURE__ */ P({
  __name: "BCard",
  props: {
    align: null,
    bgVariant: null,
    bodyBgVariant: null,
    bodyClass: null,
    bodyTag: { default: "div" },
    bodyTextVariant: null,
    borderVariant: null,
    footer: null,
    footerBgVariant: null,
    footerBorderVariant: null,
    footerClass: null,
    footerHtml: { default: "" },
    footerTag: { default: "div" },
    footerTextVariant: null,
    header: null,
    headerBgVariant: null,
    headerBorderVariant: null,
    headerClass: null,
    headerHtml: { default: "" },
    headerTag: { default: "div" },
    headerTextVariant: null,
    imgAlt: null,
    imgBottom: { default: false },
    imgEnd: { default: false },
    imgHeight: null,
    imgLeft: { default: false },
    imgRight: { default: false },
    imgSrc: null,
    imgStart: { default: false },
    imgTop: { default: false },
    imgWidth: null,
    noBody: { default: false },
    overlay: { default: false },
    subtitle: null,
    subtitleTag: { default: "h6" },
    subtitleTextVariant: { default: "muted" },
    tag: { default: "div" },
    textVariant: null,
    title: null,
    titleTag: { default: "h4" },
    bodyText: { default: "" }
  },
  setup(e) {
    const t = e, a = Se(), l = u(s(t, "imgBottom")), n = u(s(t, "imgEnd")), r = u(s(t, "imgLeft")), c = u(s(t, "imgRight")), d = u(s(t, "imgStart")), v = u(s(t, "noBody")), b = i(() => !Ve(a.header)), B = i(() => !Ve(a.footer)), m = i(() => ({
      [`text-${t.align}`]: t.align !== void 0,
      [`text-${t.textVariant}`]: t.textVariant !== void 0,
      [`bg-${t.bgVariant}`]: t.bgVariant !== void 0,
      [`border-${t.borderVariant}`]: t.borderVariant !== void 0,
      "flex-row": r.value || d.value,
      "flex-row-reverse": n.value || c.value
    })), p = i(() => ({
      bgVariant: t.headerBgVariant,
      borderVariant: t.headerBorderVariant,
      html: t.headerHtml,
      tag: t.headerTag,
      textVariant: t.headerTextVariant
    })), V = i(() => ({
      overlay: t.overlay,
      bodyBgVariant: t.bodyBgVariant,
      bodyTag: t.bodyTag,
      bodyTextVariant: t.bodyTextVariant,
      subtitle: t.subtitle,
      subtitleTag: t.subtitleTag,
      subtitleTextVariant: t.subtitleTextVariant,
      title: t.title,
      titleTag: t.titleTag
    })), w = i(() => ({
      bgVariant: t.footerBgVariant,
      borderVariant: t.footerBorderVariant,
      html: t.footerHtml,
      tag: t.footerTag,
      textVariant: t.footerTextVariant
    })), y = i(() => ({
      src: t.imgSrc,
      alt: t.imgAlt,
      height: t.imgHeight,
      width: t.imgWidth,
      bottom: t.imgBottom,
      end: t.imgEnd,
      left: t.imgLeft,
      right: t.imgRight,
      start: t.imgStart,
      top: t.imgTop
    }));
    return (k, h) => (f(), z(Y(e.tag), {
      class: E(["card", o(m)])
    }, {
      default: H(() => [
        o(l) ? W("", true) : $(k.$slots, "img", { key: 0 }, () => [
          e.imgSrc ? (f(), z(Ct, he(J({ key: 0 }, o(y))), null, 16)) : W("", true)
        ]),
        e.header || o(b) || e.headerHtml ? (f(), z(jl, J({ key: 1 }, o(p), { class: e.headerClass }), {
          default: H(() => [
            $(k.$slots, "header", {}, () => [
              ee(G(e.header), 1)
            ])
          ]),
          _: 3
        }, 16, ["class"])) : W("", true),
        o(v) ? $(k.$slots, "default", { key: 3 }, () => [
          ee(G(e.bodyText), 1)
        ]) : (f(), z(Gl, J({ key: 2 }, o(V), { class: e.bodyClass }), {
          default: H(() => [
            $(k.$slots, "default", {}, () => [
              ee(G(e.bodyText), 1)
            ])
          ]),
          _: 3
        }, 16, ["class"])),
        e.footer || o(B) || e.footerHtml ? (f(), z(Ul, J({ key: 4 }, o(w), { class: e.footerClass }), {
          default: H(() => [
            $(k.$slots, "footer", {}, () => [
              ee(G(e.footer), 1)
            ])
          ]),
          _: 3
        }, 16, ["class"])) : W("", true),
        o(l) ? $(k.$slots, "img", { key: 5 }, () => [
          e.imgSrc ? (f(), z(Ct, he(J({ key: 0 }, o(y))), null, 16)) : W("", true)
        ]) : W("", true)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ws = /* @__PURE__ */ P({
  __name: "BCardGroup",
  props: {
    columns: { default: false },
    deck: { default: false },
    tag: { default: "div" }
  },
  setup(e) {
    const t = e, a = u(s(t, "columns")), l = u(s(t, "deck")), n = i(
      () => l.value ? "card-deck" : a.value ? "card-columns" : "card-group"
    ), r = i(() => [n.value]);
    return (c, d) => (f(), z(Y(e.tag), {
      class: E(o(r))
    }, {
      default: H(() => [
        $(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Ks = /* @__PURE__ */ P({
  __name: "BCardText",
  props: {
    text: null,
    tag: { default: "p" }
  },
  setup(e) {
    return (t, a) => (f(), z(Y(e.tag), { class: "card-text" }, {
      default: H(() => [
        $(t.$slots, "default", {}, () => [
          ee(G(e.text), 1)
        ])
      ]),
      _: 3
    }));
  }
}), Xs = ["id"], Js = {
  key: 0,
  class: "carousel-indicators"
}, Qs = ["data-bs-target", "data-bs-slide-to", "aria-label"], Ys = { class: "carousel-inner" }, Zs = ["data-bs-target"], er = /* @__PURE__ */ M("span", {
  class: "carousel-control-prev-icon",
  "aria-hidden": "true"
}, null, -1), tr = { class: "visually-hidden" }, ar = ["data-bs-target"], lr = /* @__PURE__ */ M("span", {
  class: "carousel-control-next-icon",
  "aria-hidden": "true"
}, null, -1), nr = { class: "visually-hidden" }, Kl = Symbol(), or = /* @__PURE__ */ P({
  __name: "BCarousel",
  props: {
    startingSlide: { default: 0 },
    id: null,
    imgHeight: null,
    imgWidth: null,
    background: null,
    modelValue: { default: 0 },
    controls: { default: false },
    indicators: { default: false },
    interval: { default: 5e3 },
    noTouch: { default: false },
    noWrap: { default: false },
    controlsPrevText: { default: "Previous" },
    controlsNextText: { default: "Next" },
    indicatorsButtonLabel: { default: "Slide" }
  },
  emits: ["sliding-start", "sliding-end"],
  setup(e, { emit: t }) {
    const a = e, l = Se(), n = $e(s(a, "id"), "carousel"), r = u(s(a, "controls")), c = u(s(a, "indicators")), d = u(s(a, "noTouch"));
    u(s(a, "noWrap"));
    const v = U(), b = U(), B = U([]);
    return _e(v, "slide.bs.carousel", (m) => t("sliding-start", m)), _e(v, "slid.bs.carousel", (m) => t("sliding-end", m)), Be(() => {
      b.value = new Carousel(v.value, {
        wrap: !d.value,
        interval: a.interval,
        touch: !d.value
      }), l.default && (B.value = l.default().filter((m) => {
        var p;
        return ((p = m.type) == null ? void 0 : p.__name) === "BCarouselSlide";
      }));
    }), et(Kl, {
      background: a.background,
      width: a.imgWidth,
      height: a.imgHeight
    }), (m, p) => (f(), g("div", {
      id: o(n),
      ref_key: "element",
      ref: v,
      class: "carousel slide",
      "data-bs-ride": "carousel"
    }, [
      o(c) ? (f(), g("div", Js, [
        (f(true), g(oe, null, ve(B.value, (V, w) => (f(), g("button", {
          key: w,
          type: "button",
          "data-bs-target": `#${o(n)}`,
          "data-bs-slide-to": w,
          class: E(w === e.startingSlide ? "active" : ""),
          "aria-current": "true",
          "aria-label": `${e.indicatorsButtonLabel} ${w}`
        }, null, 10, Qs))), 128))
      ])) : W("", true),
      M("div", Ys, [
        $(m.$slots, "default")
      ]),
      o(r) ? (f(), g(oe, { key: 1 }, [
        M("button", {
          class: "carousel-control-prev",
          type: "button",
          "data-bs-target": `#${o(n)}`,
          "data-bs-slide": "prev"
        }, [
          er,
          M("span", tr, G(e.controlsPrevText), 1)
        ], 8, Zs),
        M("button", {
          class: "carousel-control-next",
          type: "button",
          "data-bs-target": `#${o(n)}`,
          "data-bs-slide": "next"
        }, [
          lr,
          M("span", nr, G(e.controlsNextText), 1)
        ], 8, ar)
      ], 64)) : W("", true)
    ], 8, Xs));
  }
}), sr = ["data-bs-interval"], rr = ["innerHTML"], ir = { key: 1 }, ur = ["innerHTML"], dr = { key: 1 }, cr = /* @__PURE__ */ P({
  __name: "BCarouselSlide",
  props: {
    imgSrc: null,
    imgHeight: null,
    imgWidth: null,
    interval: null,
    active: { default: false },
    background: null,
    caption: null,
    captionHtml: null,
    captionTag: { default: "h3" },
    contentTag: { default: "div" },
    contentVisibleUp: null,
    id: null,
    imgAlt: null,
    imgBlank: { default: false },
    imgBlankColor: { default: "transparent" },
    text: null,
    textHtml: null,
    textTag: { default: "p" }
  },
  setup(e) {
    const t = e, a = Se(), l = He(Kl, {}), n = u(s(t, "active")), r = i(() => !Ve(a.default)), c = i(() => ({
      background: `${t.background || l.background || "rgb(171, 171, 171)"} none repeat scroll 0% 0%`
    })), d = i(() => ({
      "d-none": t.contentVisibleUp !== void 0,
      [`d-${t.contentVisibleUp}-block`]: t.contentVisibleUp !== void 0
    })), v = i(() => l.width), b = i(() => l.height);
    return (B, m) => (f(), g("div", {
      class: E(["carousel-item", { active: o(n) }]),
      "data-bs-interval": e.interval,
      style: Ie(o(c))
    }, [
      $(B.$slots, "img", {}, () => [
        fe(ra, {
          class: "d-block w-100",
          alt: e.imgAlt,
          src: e.imgSrc,
          width: e.imgWidth || o(v),
          height: e.imgHeight || o(b),
          blank: e.imgBlank,
          "blank-color": e.imgBlankColor
        }, null, 8, ["alt", "src", "width", "height", "blank", "blank-color"])
      ]),
      e.caption || e.captionHtml || e.text || e.textHtml || o(r) ? (f(), z(Y(e.contentTag), {
        key: 0,
        class: E(["carousel-caption", o(d)])
      }, {
        default: H(() => [
          e.caption || e.captionHtml ? (f(), z(Y(e.captionTag), { key: 0 }, {
            default: H(() => [
              e.captionHtml ? (f(), g("span", {
                key: 0,
                innerHTML: e.captionHtml
              }, null, 8, rr)) : (f(), g("span", ir, G(e.caption), 1))
            ]),
            _: 1
          })) : W("", true),
          e.text || e.textHtml ? (f(), z(Y(e.textTag), { key: 1 }, {
            default: H(() => [
              e.textHtml ? (f(), g("span", {
                key: 0,
                innerHTML: e.textHtml
              }, null, 8, ur)) : (f(), g("span", dr, G(e.text), 1))
            ]),
            _: 1
          })) : W("", true),
          $(B.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"])) : W("", true)
    ], 14, sr));
  }
}), Ia = Tt("", [], { type: [Boolean, String, Number], default: false }), Fa = Tt("offset", [""], { type: [String, Number], default: null }), Ea = Tt("order", [""], { type: [String, Number], default: null }), fr = P({
  name: "BCol",
  props: {
    col: { type: [Boolean, String], default: false },
    cols: { type: [String, Number], default: null },
    ...Ia,
    offset: { type: [String, Number], default: null },
    ...Fa,
    order: { type: [String, Number], default: null },
    ...Ea,
    alignSelf: { type: String, default: null },
    tag: { type: String, default: "div" }
  },
  setup(e) {
    const t = [
      { content: Ia, propPrefix: "cols", classPrefix: "col" },
      { content: Fa, propPrefix: "offset" },
      { content: Ea, propPrefix: "order" }
    ], a = u(s(e, "col")), l = i(
      () => t.flatMap((r) => kl(e, r.content, r.propPrefix, r.classPrefix))
    );
    return {
      computedClasses: i(() => [
        l.value,
        {
          col: a.value || !l.value.some((r) => /^col-/.test(r)) && !e.cols,
          [`col-${e.cols}`]: !!e.cols,
          [`offset-${e.offset}`]: !!e.offset,
          [`order-${e.order}`]: !!e.order,
          [`align-self-${e.alignSelf}`]: !!e.alignSelf
        }
      ])
    };
  }
});
function vr(e, t, a, l, n, r) {
  return f(), z(Y(e.tag), {
    class: E(e.computedClasses)
  }, {
    default: H(() => [
      $(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const nt = /* @__PURE__ */ Te(fr, [["render", vr]]), Xe = {
  autoHide: true,
  delay: 5e3,
  noCloseButton: false,
  pos: "top-right",
  value: true
};
class La {
  constructor(t) {
    be(this, "vm");
    be(this, "containerPositions");
    wn(t) ? this.vm = t : this.vm = De(t), this.containerPositions = i(() => {
      const a = /* @__PURE__ */ new Set([]);
      return this.vm.toasts.map((l) => {
        l.options.pos && a.add(l.options.pos);
      }), a;
    });
  }
  toasts(t) {
    return t ? i(
      () => this.vm.toasts.filter((a) => {
        if (a.options.pos === t && a.options.value)
          return a;
      })
    ) : i(() => this.vm.toasts);
  }
  remove(...t) {
    this.vm.toasts = this.vm.toasts.filter((a) => {
      if (a.options.id && !t.includes(a.options.id))
        return a;
    });
  }
  isRoot() {
    var t;
    return (t = this.vm.root) != null ? t : false;
  }
  show(t, a = Xe) {
    const l = { id: Ne(), ...Xe, ...a }, n = {
      options: De(l),
      content: t
    };
    return this.vm.toasts.push(n), n;
  }
  info(t, a = Xe) {
    return this.show(t, { variant: "info", ...a });
  }
  danger(t, a = Xe) {
    return this.show(t, { variant: "danger", ...a });
  }
  warning(t, a = Xe) {
    return this.show(t, { variant: "warning", ...a });
  }
  success(t, a = Xe) {
    return this.show(t, { variant: "success", ...a });
  }
  hide() {
  }
}
class mr {
  constructor() {
    be(this, "vms");
    be(this, "rootInstance");
    be(this, "useToast", Jl);
    this.vms = {};
  }
  getOrCreateViewModel(t) {
    if (!t) {
      if (this.rootInstance)
        return this.vms[this.rootInstance];
      const a = { root: true, toasts: [], container: void 0, id: Symbol("toast") };
      return this.rootInstance = a.id, this.vms[a.id] = a, a;
    }
    if (t.root) {
      if (this.rootInstance)
        return this.vms[this.rootInstance];
      this.rootInstance = t.id;
    }
    return this.vms[t.id] = t, t;
  }
  getVM(t) {
    if (!t && this.rootInstance)
      return this.vms[this.rootInstance];
    if (t)
      return this.vms[t];
  }
}
const Ut = Symbol(), Xl = Symbol(), br = {
  container: void 0,
  toasts: [],
  root: false
};
function pr() {
  return He(Xl);
}
function Jl(e, t = Ut) {
  const a = He(pr());
  if (!e)
    return new La(a.getOrCreateViewModel());
  const l = { id: Symbol("toastInstance") }, n = { ...br, ...l, ...e }, r = a.getOrCreateViewModel(n);
  return new La(r);
}
const gr = {
  install: (e, t = {}) => {
    var a, l, n, r;
    e.provide(Xl, (l = (a = t == null ? void 0 : t.BToast) == null ? void 0 : a.injectkey) != null ? l : Ut), e.provide((r = (n = t == null ? void 0 : t.BToast) == null ? void 0 : n.injectkey) != null ? r : Ut, new mr());
  }
}, hr = "toast-title", za = 1e3, Ql = P({
  components: { BLink: Ae },
  props: {
    ...We,
    delay: { type: Number, default: 5e3 },
    bodyClass: { type: String },
    body: { type: [Object, String] },
    headerClass: { type: String },
    headerTag: { type: String, default: "div" },
    animation: { type: [Boolean, String], default: true },
    id: { type: String },
    isStatus: { type: [Boolean, String], default: false },
    autoHide: { type: [Boolean, String], default: true },
    noCloseButton: { type: [Boolean, String], default: false },
    noFade: { type: [Boolean, String], default: false },
    noHoverPause: { type: [Boolean, String], default: false },
    solid: { type: [Boolean, String], default: false },
    static: { type: [Boolean, String], default: false },
    title: { type: String },
    modelValue: { type: [Boolean, String], default: false },
    toastClass: { type: Array },
    variant: { type: String }
  },
  emits: ["destroyed", "update:modelValue"],
  setup(e, { emit: t, slots: a }) {
    u(s(e, "animation"));
    const l = u(s(e, "isStatus")), n = u(s(e, "autoHide")), r = u(s(e, "noCloseButton")), c = u(s(e, "noFade")), d = u(s(e, "noHoverPause"));
    u(s(e, "solid")), u(s(e, "static"));
    const v = u(s(e, "modelValue")), b = U(false), B = U(false), m = U(false), p = i(() => ({
      [`b-toast-${e.variant}`]: e.variant !== void 0,
      show: m.value || b.value
    }));
    let V, w, y;
    const k = () => {
      typeof V > "u" || (clearTimeout(V), V = void 0);
    }, h = i(
      () => Math.max(je(e.delay, 0), za)
    ), S = () => {
      v.value && (w = y = 0, k(), B.value = true, ct(() => {
        m.value = false;
      }));
    }, I = () => {
      k(), t("update:modelValue", true), w = y = 0, B.value = false, Ee(() => {
        ct(() => {
          m.value = true;
        });
      });
    }, F = () => {
      if (!n.value || d.value || !V || y)
        return;
      const te = Date.now() - w;
      te > 0 && (k(), y = Math.max(h.value - te, za));
    }, x = () => {
      (!n.value || d.value || !y) && (y = w = 0), T();
    };
    de(
      () => v.value,
      (te) => {
        te ? I() : S();
      }
    );
    const T = () => {
      k(), n.value && (V = setTimeout(S, y || h.value), w = Date.now(), y = 0);
    }, O = () => {
      b.value = true, t("update:modelValue", true);
    }, A = () => {
      b.value = false, T();
    }, C = () => {
      b.value = true;
    }, L = () => {
      b.value = false, y = w = 0, t("update:modelValue", false);
    };
    _n(() => {
      k(), n.value && t("destroyed", e.id);
    }), Be(() => {
      Ee(() => {
        v.value && ct(() => {
          I();
        });
      });
    });
    const N = () => {
      Ee(() => {
        ct(() => {
          S();
        });
      });
    };
    return () => {
      const te = () => {
        const Z = [], re = Pe(hr, { hide: S }, a);
        re ? Z.push(le(re)) : e.title && Z.push(le("strong", { class: "me-auto" }, e.title)), !r.value && Z.length !== 0 && Z.push(
          le(at, {
            class: ["btn-close"],
            onClick: () => {
              S();
            }
          })
        );
        const K = [];
        if (Z.length > 0 && K.push(
          le(
            e.headerTag,
            {
              class: "toast-header"
            },
            { default: () => Z }
          )
        ), Pe("default", { hide: S }, a) || e.body) {
          const me = le(
            rt(e) ? "b-link" : "div",
            {
              class: ["toast-body", e.bodyClass],
              onClick: rt(e) ? { click: N } : {}
            },
            Pe("default", { hide: S }, a) || e.body
          );
          K.push(me);
        }
        return le(
          "div",
          {
            class: ["toast", e.toastClass, p.value],
            tabindex: "0"
          },
          K
        );
      };
      return le(
        "div",
        {
          class: ["b-toast"],
          id: e.id,
          role: B.value ? null : l.value ? "status" : "alert",
          "aria-live": B.value ? null : l.value ? "polite" : "assertive",
          "aria-atomic": B.value ? null : "true",
          onmouseenter: F,
          onmouseleave: x
        },
        [
          le(
            ut,
            {
              noFade: c.value,
              onAfterEnter: A,
              onBeforeEnter: O,
              onAfterLeave: L,
              onBeforeLeave: C
            },
            () => [m.value ? te() : ""]
          )
        ]
      );
    };
  }
}), Wt = /* @__PURE__ */ P({
  __name: "BToaster",
  props: {
    position: { default: "top-right" },
    instance: null
  },
  setup(e) {
    const t = e, a = {
      "top-left": "top-0 start-0",
      "top-center": "top-0 start-50 translate-middle-x",
      "top-right": "top-0 end-0",
      "middle-left": "top-50 start-0 translate-middle-y",
      "middle-center": "top-50 start-50 translate-middle",
      "middle-right": "top-50 end-0 translate-middle-y",
      "bottom-left": "bottom-0 start-0",
      "bottom-center": "bottom-0 start-50 translate-middle-x",
      "bottom-right": "bottom-0 end-0"
    }, l = i(() => a[t.position]), n = (r) => {
      var c;
      (c = t.instance) == null || c.remove(r);
    };
    return (r, c) => {
      var d;
      return f(), g("div", {
        class: E([[o(l)], "b-toaster position-fixed p-3"]),
        style: { "z-index": "11" }
      }, [
        (f(true), g(oe, null, ve((d = e.instance) == null ? void 0 : d.toasts(e.position).value, (v) => (f(), z(Ql, {
          id: v.options.id,
          key: v.options.id,
          modelValue: v.options.value,
          "onUpdate:modelValue": (b) => v.options.value = b,
          "auto-hide": v.options.autoHide,
          delay: v.options.delay,
          "no-close-button": v.options.noCloseButton,
          title: v.content.title,
          body: v.content.body,
          component: v.content.body,
          variant: v.options.variant,
          onDestroyed: n
        }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "auto-hide", "delay", "no-close-button", "title", "body", "component", "variant"]))), 128))
      ], 2);
    };
  }
}), yr = P({
  props: {
    gutterX: { type: String, default: null },
    gutterY: { type: String, default: null },
    fluid: { type: [Boolean, String], default: false },
    toast: { type: Object },
    position: { type: String, required: false }
  },
  setup(e, { slots: t, expose: a }) {
    const l = U();
    let n;
    const r = i(() => ({
      container: !e.fluid,
      ["container-fluid"]: typeof e.fluid == "boolean" && e.fluid,
      [`container-${e.fluid}`]: typeof e.fluid == "string",
      [`gx-${e.gutterX}`]: e.gutterX !== null,
      [`gy-${e.gutterY}`]: e.gutterY !== null
    }));
    return Be(() => {
      e.toast;
    }), e.toast && (n = Jl({ container: l, root: e.toast.root }), a({})), () => {
      var d;
      const c = [];
      return n == null || n.containerPositions.value.forEach((v) => {
        c.push(le(Wt, { key: v, instance: n, position: v }));
      }), le("div", { class: [r.value, e.position], ref: l }, [
        ...c,
        (d = t.default) == null ? void 0 : d.call(t)
      ]);
    };
  },
  methods: {}
}), Br = { class: "visually-hidden" }, $r = ["aria-labelledby", "role"], Yl = /* @__PURE__ */ P({
  __name: "BDropdown",
  props: {
    id: null,
    menuClass: null,
    size: null,
    splitClass: null,
    splitVariant: null,
    text: null,
    toggleClass: null,
    autoClose: { type: [Boolean, String], default: true },
    block: { default: false },
    boundary: { default: "clippingParents" },
    dark: { default: false },
    disabled: { default: false },
    isNav: { default: false },
    dropup: { default: false },
    dropright: { default: false },
    dropleft: { default: false },
    noFlip: { default: false },
    offset: { default: 0 },
    popperOpts: { default: () => ({}) },
    right: { default: false },
    role: { default: "menu" },
    split: { default: false },
    splitButtonType: { default: "button" },
    splitHref: { default: void 0 },
    noCaret: { default: false },
    toggleText: { default: "Toggle dropdown" },
    variant: { default: "secondary" }
  },
  emits: ["show", "shown", "hide", "hidden", "click", "toggle"],
  setup(e, { expose: t, emit: a }) {
    const l = e, n = $e(s(l, "id"), "dropdown"), r = u(s(l, "block")), c = u(s(l, "dark")), d = u(s(l, "dropup")), v = u(s(l, "dropright")), b = u(s(l, "isNav")), B = u(s(l, "dropleft")), m = u(s(l, "right")), p = u(s(l, "split")), V = u(s(l, "noCaret")), w = U(), y = U(), k = U(), h = i(() => ({
      "d-grid": r.value,
      "d-flex": r.value && p.value
    })), S = i(() => [
      p.value ? l.splitClass : l.toggleClass,
      {
        "nav-link": b.value,
        "dropdown-toggle": !p.value,
        "dropdown-toggle-no-caret": V.value && !p.value,
        "w-100": p.value && r.value
      }
    ]), I = i(() => [
      l.menuClass,
      {
        "dropdown-menu-dark": c.value,
        "dropdown-menu-end": m.value
      }
    ]), F = i(() => ({
      "data-bs-toggle": p.value ? void 0 : "dropdown",
      "aria-expanded": p.value ? void 0 : false,
      ref: p.value ? void 0 : y,
      href: p.value ? l.splitHref : void 0
    })), x = i(() => ({
      ref: p.value ? y : void 0
    })), T = () => {
      var A;
      (A = k.value) == null || A.hide();
    }, O = (A) => {
      p.value && a("click", A);
    };
    return _e(w, "show.bs.dropdown", () => a("show")), _e(w, "shown.bs.dropdown", () => a("shown")), _e(w, "hide.bs.dropdown", () => a("hide")), _e(w, "hidden.bs.dropdown", () => a("hidden")), Be(() => {
      var A;
      k.value = new Dropdown((A = y.value) == null ? void 0 : A.$el, {
        autoClose: l.autoClose,
        boundary: l.boundary,
        offset: l.offset ? l.offset.toString() : "",
        reference: l.offset || p.value ? "parent" : "toggle",
        popperConfig: (C) => {
          const L = {
            placement: "bottom-start",
            modifiers: l.noFlip ? [
              {
                name: "flip",
                options: {
                  fallbackPlacements: []
                }
              }
            ] : []
          };
          return d.value ? L.placement = m.value ? "top-end" : "top-start" : v.value ? L.placement = "right-start" : B.value ? L.placement = "left-start" : m.value && (L.placement = "bottom-end"), Mt(C, Mt(L, l.popperOpts));
        }
      });
    }), t({
      hide: T
    }), (A, C) => (f(), g("div", {
      ref_key: "parent",
      ref: w,
      class: E([o(h), "btn-group"])
    }, [
      fe(Ye, J({
        id: o(n),
        variant: e.splitVariant || e.variant,
        size: e.size,
        class: o(S),
        disabled: e.disabled,
        type: e.splitButtonType
      }, o(F), { onClick: O }), {
        default: H(() => [
          $(A.$slots, "button-content", {}, () => [
            ee(G(e.text), 1)
          ])
        ]),
        _: 3
      }, 16, ["id", "variant", "size", "class", "disabled", "type"]),
      o(p) ? (f(), z(Ye, J({
        key: 0,
        variant: e.variant,
        size: e.size,
        disabled: e.disabled
      }, o(x), {
        class: [e.toggleClass, "dropdown-toggle-split dropdown-toggle"],
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false",
        onClick: C[0] || (C[0] = (L) => a("toggle"))
      }), {
        default: H(() => [
          M("span", Br, [
            $(A.$slots, "toggle-text", {}, () => [
              ee(G(e.toggleText), 1)
            ])
          ])
        ]),
        _: 3
      }, 16, ["variant", "size", "disabled", "class"])) : W("", true),
      M("ul", {
        class: E(["dropdown-menu", o(I)]),
        "aria-labelledby": o(n),
        role: e.role
      }, [
        $(A.$slots, "default")
      ], 10, $r)
    ], 2));
  }
}), Sr = { role: "presentation" }, kr = /* @__PURE__ */ P({
  __name: "BDropdownDivider",
  props: {
    tag: { default: "hr" }
  },
  setup(e) {
    return (t, a) => (f(), g("li", Sr, [
      (f(), z(Y(e.tag), {
        class: "dropdown-divider",
        role: "separator",
        "aria-orientation": "horizontal"
      }))
    ]));
  }
}), Cr = {}, wr = { role: "presentation" }, _r = { class: "px-4 py-3" };
function Tr(e, t) {
  return f(), g("li", wr, [
    M("form", _r, [
      $(e.$slots, "default")
    ])
  ]);
}
const Vr = /* @__PURE__ */ Te(Cr, [["render", Tr]]), Ar = { role: "presentation" }, Or = ["id", "aria-describedby"], xr = {
  inheritAttrs: false
}, Pr = /* @__PURE__ */ P({
  ...xr,
  __name: "BDropdownGroup",
  props: {
    id: null,
    ariaDescribedby: null,
    header: null,
    headerClass: null,
    headerTag: { default: "header" },
    headerVariant: null
  },
  setup(e) {
    const t = e, a = i(
      () => t.id ? `${t.id}_group_dd_header` : void 0
    ), l = i(
      () => t.headerTag === "header" ? void 0 : "heading"
    ), n = i(() => [
      t.headerClass,
      {
        [`text-${t.headerVariant}`]: t.headerVariant !== void 0
      }
    ]);
    return (r, c) => (f(), g("li", Ar, [
      (f(), z(Y(e.headerTag), {
        id: o(a),
        class: E(["dropdown-header", o(n)]),
        role: o(l)
      }, {
        default: H(() => [
          $(r.$slots, "header", {}, () => [
            ee(G(e.header), 1)
          ])
        ]),
        _: 3
      }, 8, ["id", "class", "role"])),
      M("ul", J({
        id: e.id,
        role: "group",
        class: "list-unstyled"
      }, r.$attrs, {
        "aria-describedby": e.ariaDescribedby || o(a)
      }), [
        $(r.$slots, "default")
      ], 16, Or)
    ]));
  }
}), Ir = {}, Fr = { class: "dropdown-header" };
function Er(e, t) {
  return f(), g("li", null, [
    M("h6", Fr, [
      $(e.$slots, "default")
    ])
  ]);
}
const Lr = /* @__PURE__ */ Te(Ir, [["render", Er]]), zr = {
  inheritAttrs: false
}, Nr = /* @__PURE__ */ P({
  ...zr,
  __name: "BDropdownItem",
  props: {
    href: null,
    linkClass: null,
    active: { default: false },
    disabled: { default: false },
    rel: { default: void 0 },
    target: { default: "_self" },
    variant: null
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const a = e, l = u(s(a, "active")), n = u(s(a, "disabled")), r = al(), c = i(() => [
      a.linkClass,
      {
        active: l.value,
        disabled: n.value,
        [`text-${a.variant}`]: a.variant !== void 0
      }
    ]), d = i(
      () => a.href ? "a" : r.to ? Ae : "button"
    ), v = i(() => ({
      disabled: n.value,
      "aria-current": l.value ? "true" : null,
      href: d.value === "a" ? a.href : null,
      rel: a.rel,
      type: d.value === "button" ? "button" : null,
      target: a.target,
      ...r.to ? { activeClass: "active", ...r } : {}
    })), b = (B) => t("click", B);
    return (B, m) => (f(), g("li", {
      role: "presentation",
      class: E(B.$attrs.class)
    }, [
      (f(), z(Y(o(d)), J({
        class: ["dropdown-item", o(c)]
      }, o(v), { onClick: b }), {
        default: H(() => [
          $(B.$slots, "default")
        ]),
        _: 3
      }, 16, ["class"]))
    ], 2));
  }
}), Dr = ["disabled"], Hr = {
  inheritAttrs: false
}, Rr = /* @__PURE__ */ P({
  ...Hr,
  __name: "BDropdownItemButton",
  props: {
    buttonClass: null,
    active: { default: false },
    activeClass: { default: "active" },
    disabled: { default: false },
    variant: null
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const a = e, l = u(s(a, "active")), n = u(s(a, "disabled")), r = i(() => [
      a.buttonClass,
      {
        [a.activeClass]: l.value,
        disabled: n.value,
        [`text-${a.variant}`]: a.variant !== void 0
      }
    ]), c = (d) => t("click", d);
    return (d, v) => (f(), g("li", {
      role: "presentation",
      class: E(d.$attrs.class)
    }, [
      M("button", {
        role: "menu",
        type: "button",
        class: E(["dropdown-item", o(r)]),
        disabled: o(n),
        onClick: c
      }, [
        $(d.$slots, "default")
      ], 10, Dr)
    ], 2));
  }
}), jr = { role: "presentation" }, Mr = { class: "px-4 py-1 mb-0 text-muted" }, qr = /* @__PURE__ */ P({
  __name: "BDropdownText",
  props: {
    text: { default: "" }
  },
  setup(e) {
    return (t, a) => (f(), g("li", jr, [
      M("p", Mr, [
        $(t.$slots, "default", {}, () => [
          ee(G(e.text), 1)
        ])
      ])
    ]));
  }
}), Gr = ["id", "novalidate", "onSubmit"], Zl = /* @__PURE__ */ P({
  __name: "BForm",
  props: {
    id: null,
    floating: { default: false },
    novalidate: { default: false },
    validated: { default: false }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const a = e, l = u(s(a, "floating")), n = u(s(a, "novalidate")), r = u(s(a, "validated")), c = i(() => ({
      "form-floating": l.value,
      "was-validated": r.value
    })), d = (v) => t("submit", v);
    return (v, b) => (f(), g("form", {
      id: e.id,
      novalidate: o(n),
      class: E(o(c)),
      onSubmit: ta(d, ["prevent"])
    }, [
      $(v.$slots, "default")
    ], 42, Gr));
  }
}), Ur = { class: "form-floating" }, Wr = ["for"], Kr = /* @__PURE__ */ P({
  __name: "BFormFloatingLabel",
  props: {
    labelFor: null,
    label: null,
    text: null
  },
  setup(e) {
    return (t, a) => (f(), g("div", Ur, [
      $(t.$slots, "default", {}, () => [
        ee(G(e.text), 1)
      ]),
      M("label", { for: e.labelFor }, [
        $(t.$slots, "label", {}, () => [
          ee(G(e.label), 1)
        ])
      ], 8, Wr)
    ]));
  }
}), Kt = /* @__PURE__ */ P({
  __name: "BFormInvalidFeedback",
  props: {
    ariaLive: null,
    forceShow: { default: false },
    id: null,
    text: null,
    role: null,
    state: { default: void 0 },
    tag: { default: "div" },
    tooltip: { default: false }
  },
  setup(e) {
    const t = e, a = u(s(t, "forceShow")), l = u(s(t, "state")), n = u(s(t, "tooltip")), r = i(
      () => a.value === true || l.value === false
    ), c = i(() => ({
      "d-block": r.value,
      "invalid-feedback": !n.value,
      "invalid-tooltip": n.value
    })), d = i(() => ({
      id: t.id,
      role: t.role,
      "aria-live": t.ariaLive,
      "aria-atomic": t.ariaLive ? "true" : void 0
    }));
    return (v, b) => (f(), z(Y(e.tag), J({ class: o(c) }, o(d)), {
      default: H(() => [
        $(v.$slots, "default", {}, () => [
          ee(G(e.text), 1)
        ])
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), pt = /* @__PURE__ */ P({
  __name: "BFormRow",
  props: {
    tag: { default: "div" }
  },
  setup(e) {
    return (t, a) => (f(), z(Y(e.tag), { class: "row d-flex flex-wrap" }, {
      default: H(() => [
        $(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Xt = /* @__PURE__ */ P({
  __name: "BFormText",
  props: {
    id: null,
    inline: { default: false },
    tag: { default: "small" },
    text: null,
    textVariant: { default: "muted" }
  },
  setup(e) {
    const t = e, a = u(s(t, "inline")), l = i(() => [
      [`text-${t.textVariant}`],
      {
        "form-text": !a.value
      }
    ]);
    return (n, r) => (f(), z(Y(e.tag), {
      id: e.id,
      class: E(o(l))
    }, {
      default: H(() => [
        $(n.$slots, "default", {}, () => [
          ee(G(e.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), Jt = /* @__PURE__ */ P({
  __name: "BFormValidFeedback",
  props: {
    ariaLive: null,
    forceShow: { default: false },
    id: null,
    role: null,
    text: null,
    state: { default: void 0 },
    tag: { default: "div" },
    tooltip: { default: false }
  },
  setup(e) {
    const t = e, a = u(s(t, "forceShow")), l = u(s(t, "state")), n = u(s(t, "tooltip")), r = i(
      () => a.value === true || l.value === true
    ), c = i(() => ({
      "d-block": r.value,
      "valid-feedback": !n.value,
      "valid-tooltip": n.value
    })), d = i(() => t.ariaLive ? "true" : void 0);
    return (v, b) => (f(), z(Y(e.tag), {
      id: e.id,
      role: e.role,
      "aria-live": e.ariaLive,
      "aria-atomic": o(d),
      class: E(o(c))
    }, {
      default: H(() => [
        $(v.$slots, "default", {}, () => [
          ee(G(e.text), 1)
        ])
      ]),
      _: 3
    }, 8, ["id", "role", "aria-live", "aria-atomic", "class"]));
  }
}), Xr = ["id", "disabled", "required", "name", "form", "aria-label", "aria-labelledby", "aria-required", "value", "indeterminate"], Jr = ["for"], Qr = {
  inheritAttrs: false
}, en = /* @__PURE__ */ P({
  ...Qr,
  __name: "BFormCheckbox",
  props: {
    ariaLabel: null,
    ariaLabelledBy: null,
    form: null,
    indeterminate: null,
    name: null,
    id: { default: void 0 },
    autofocus: { default: false },
    plain: { default: false },
    button: { default: false },
    switch: { default: false },
    disabled: { default: false },
    buttonVariant: { default: "secondary" },
    inline: { default: false },
    required: { default: void 0 },
    size: { default: "md" },
    state: { default: void 0 },
    uncheckedValue: { type: [Array, Set, Boolean, String, Object, Number], default: false },
    value: { type: [Array, Set, Boolean, String, Object, Number], default: true },
    modelValue: { type: [Array, Set, Boolean, String, Object, Number], default: void 0 }
  },
  emits: ["update:modelValue", "input", "change"],
  setup(e, { emit: t }) {
    const a = e, l = Se(), n = $e(s(a, "id"), "form-check"), r = u(s(a, "indeterminate")), c = u(s(a, "autofocus")), d = u(s(a, "plain")), v = u(s(a, "button")), b = u(s(a, "switch")), B = u(s(a, "disabled")), m = u(s(a, "inline")), p = u(s(a, "required")), V = u(s(a, "state")), w = U(null), y = U(false), k = i(() => !Ve(l.default)), h = i({
      get: () => a.uncheckedValue ? Array.isArray(a.modelValue) ? a.modelValue.indexOf(a.value) > -1 : a.modelValue === a.value : a.modelValue,
      set: (O) => {
        let A = O;
        Array.isArray(a.modelValue) ? a.uncheckedValue && (A = a.modelValue, O ? (A.indexOf(a.uncheckedValue) > -1 && A.splice(A.indexOf(a.uncheckedValue), 1), A.push(a.value)) : (A.indexOf(a.value) > -1 && A.splice(A.indexOf(a.value), 1), A.push(a.uncheckedValue))) : A = O ? a.value : a.uncheckedValue, t("input", A), t("update:modelValue", A), t("change", A);
      }
    }), S = i(() => Array.isArray(a.modelValue) ? a.modelValue.indexOf(a.value) > -1 : JSON.stringify(a.modelValue) === JSON.stringify(a.value)), I = De({
      plain: s(d, "value"),
      button: s(v, "value"),
      inline: s(m, "value"),
      switch: s(b, "value"),
      size: s(a, "size"),
      state: s(V, "value"),
      buttonVariant: s(a, "buttonVariant")
    }), F = Tl(I), x = Vl(I), T = Al(I);
    return Be(() => {
      c.value && w.value.focus();
    }), (O, A) => (f(), g("div", {
      class: E(o(F))
    }, [
      tt(M("input", J({ id: o(n) }, O.$attrs, {
        ref_key: "input",
        ref: w,
        "onUpdate:modelValue": A[0] || (A[0] = (C) => Ze(h) ? h.value = C : null),
        class: o(x),
        type: "checkbox",
        disabled: o(B),
        required: !!e.name && !!o(p),
        name: e.name,
        form: e.form,
        "aria-label": e.ariaLabel,
        "aria-labelledby": e.ariaLabelledBy,
        "aria-required": e.name && o(p) ? "true" : void 0,
        value: e.value,
        indeterminate: o(r),
        onFocus: A[1] || (A[1] = (C) => y.value = true),
        onBlur: A[2] || (A[2] = (C) => y.value = false)
      }), null, 16, Xr), [
        [Tn, o(h)]
      ]),
      o(k) || !o(d) ? (f(), g("label", {
        key: 0,
        for: o(n),
        class: E([o(T), { active: o(S), focus: y.value }])
      }, [
        $(O.$slots, "default")
      ], 10, Jr)) : W("", true)
    ], 2));
  }
}), Yr = ["id"], Zr = ["innerHTML"], ei = ["textContent"], ti = /* @__PURE__ */ P({
  __name: "BFormCheckboxGroup",
  props: {
    id: null,
    form: null,
    modelValue: { default: () => [] },
    ariaInvalid: { default: void 0 },
    autofocus: { default: false },
    buttonVariant: { default: "secondary" },
    buttons: { default: false },
    disabled: { default: false },
    disabledField: { default: "disabled" },
    htmlField: { default: "html" },
    name: null,
    options: { default: () => [] },
    plain: { default: false },
    required: { default: false },
    size: null,
    stacked: { default: false },
    state: { default: void 0 },
    switches: { default: false },
    textField: { default: "text" },
    validated: { default: false },
    valueField: { default: "value" }
  },
  emits: ["input", "update:modelValue", "change"],
  setup(e, { emit: t }) {
    const a = e, l = Se(), n = "BFormCheckbox", r = $e(s(a, "id"), "checkbox"), c = $e(s(a, "name"), "checkbox");
    u(s(a, "autofocus"));
    const d = u(s(a, "buttons")), v = u(s(a, "disabled"));
    u(s(a, "plain"));
    const b = u(s(a, "required")), B = u(s(a, "stacked")), m = u(s(a, "state")), p = u(s(a, "switches")), V = u(s(a, "validated")), w = i({
      get: () => a.modelValue,
      set: (I) => {
        if (JSON.stringify(I) === JSON.stringify(a.modelValue))
          return;
        const F = a.options.filter(
          (x) => I.map((T) => JSON.stringify(T)).includes(JSON.stringify(typeof x == "string" ? x : x[a.valueField]))
        ).map((x) => typeof x == "string" ? x : x[a.valueField]);
        t("input", F), t("update:modelValue", F), t("change", F);
      }
    }), y = i(
      () => (l.first ? kt(l.first(), n, v.value) : []).concat(a.options.map((I) => Pl(I, a))).concat(l.default ? kt(l.default(), n, v.value) : []).map((I, F) => Il(I, F, a, c, r)).map((I) => ({
        ...I,
        props: {
          switch: p.value,
          ...I.props
        }
      }))
    ), k = De({
      required: s(b, "value"),
      ariaInvalid: s(a, "ariaInvalid"),
      state: s(m, "value"),
      validated: s(V, "value"),
      buttons: s(d, "value"),
      stacked: s(B, "value"),
      size: s(a, "size")
    }), h = Ol(k), S = xl(k);
    return (I, F) => (f(), g("div", J(o(h), {
      id: o(r),
      role: "group",
      class: [o(S), "bv-no-focus-ring"],
      tabindex: "-1"
    }), [
      (f(true), g(oe, null, ve(o(y), (x, T) => (f(), z(en, J({
        key: T,
        modelValue: o(w),
        "onUpdate:modelValue": F[0] || (F[0] = (O) => Ze(w) ? w.value = O : null)
      }, x.props), {
        default: H(() => [
          x.html ? (f(), g("span", {
            key: 0,
            innerHTML: x.html
          }, null, 8, Zr)) : (f(), g("span", {
            key: 1,
            textContent: G(x.text)
          }, null, 8, ei))
        ]),
        _: 2
      }, 1040, ["modelValue"]))), 128))
    ], 16, Yr));
  }
}), tn = ["input", "select", "textarea"], ai = tn.map((e) => `${e}:not([disabled])`).join(), li = [...tn, "a", "button", "label"], ni = "label", oi = "invalid-feedback", si = "valid-feedback", ri = "description", ii = "default", ui = P({
  components: { BCol: nt, BFormInvalidFeedback: Kt, BFormRow: pt, BFormText: Xt, BFormValidFeedback: Jt },
  props: {
    contentCols: { type: [Boolean, String, Number], required: false },
    contentColsLg: { type: [Boolean, String, Number], required: false },
    contentColsMd: { type: [Boolean, String, Number], required: false },
    contentColsSm: { type: [Boolean, String, Number], required: false },
    contentColsXl: { type: [Boolean, String, Number], required: false },
    description: { type: [String], required: false },
    disabled: { type: [Boolean, String], default: false },
    feedbackAriaLive: { type: String, default: "assertive" },
    id: { type: String, required: false },
    invalidFeedback: { type: String, required: false },
    label: { type: String, required: false },
    labelAlign: { type: [Boolean, String, Number], required: false },
    labelAlignLg: { type: [Boolean, String, Number], required: false },
    labelAlignMd: { type: [Boolean, String, Number], required: false },
    labelAlignSm: { type: [Boolean, String, Number], required: false },
    labelAlignXl: { type: [Boolean, String, Number], required: false },
    labelClass: { type: [Array, Object, String], required: false },
    labelCols: { type: [Boolean, String, Number], required: false },
    labelColsLg: { type: [Boolean, String, Number], required: false },
    labelColsMd: { type: [Boolean, String, Number], required: false },
    labelColsSm: { type: [Boolean, String, Number], required: false },
    labelColsXl: { type: [Boolean, String, Number], required: false },
    labelFor: { type: String, required: false },
    labelSize: { type: String, required: false },
    labelSrOnly: { type: [Boolean, String], default: false },
    state: { type: [Boolean, String], default: null },
    tooltip: { type: [Boolean, String], default: false },
    validFeedback: { type: String, required: false },
    validated: { type: [Boolean, String], default: false },
    floating: { type: [Boolean, String], default: false }
  },
  setup(e, { attrs: t }) {
    const a = u(s(e, "disabled")), l = u(s(e, "labelSrOnly")), n = u(s(e, "state")), r = u(s(e, "tooltip")), c = u(s(e, "validated")), d = u(s(e, "floating")), v = null, b = ["xs", "sm", "md", "lg", "xl"], B = (T, O) => b.reduce((A, C) => {
      const L = Ta(C === "xs" ? "" : C, `${O}Align`), N = T[L] || null;
      return N && (C === "xs" ? A.push(`text-${N}`) : A.push(`text-${C}-${N}`)), A;
    }, []), m = (T, O) => b.reduce((A, C) => {
      const L = Ta(C === "xs" ? "" : C, `${O}Cols`);
      let N = T[L];
      return N = N === "" ? true : N || false, typeof N != "boolean" && N !== "auto" && (N = lt(N, 0), N = N > 0 ? N : false), N && (C === "xs" ? A.cols = N : A[C || (typeof N == "boolean" ? "col" : "cols")] = N), A;
    }, {}), p = U(), V = (T, O = null) => {
      if (bl && e.labelFor) {
        const A = $l(`#${No(e.labelFor)}`, p);
        if (A) {
          const C = "aria-describedby", L = (T || "").split(mt), N = (O || "").split(mt), te = (la(A, C) || "").split(mt).filter((Z) => !N.includes(Z)).concat(L).filter((Z, re, K) => K.indexOf(Z) === re).filter((Z) => Z).join(" ").trim();
          te ? Yo(A, C, te) : Zo(A, C);
        }
      }
    }, w = i(() => m(e, "content")), y = i(() => B(e, "label")), k = i(() => m(e, "label")), h = i(
      () => Object.keys(w.value).length > 0 || Object.keys(k.value).length > 0
    ), S = i(
      () => typeof n.value == "boolean" ? n.value : null
    ), I = i(() => {
      const T = S.value;
      return T === true ? "is-valid" : T === false ? "is-invalid" : null;
    }), F = i(
      () => Vt(t.ariaInvalid, n.value)
    );
    return de(
      () => v,
      (T, O) => {
        T !== O && V(T, O);
      }
    ), Be(() => {
      Ee(() => {
        V(v);
      });
    }), {
      disabledBoolean: a,
      labelSrOnlyBoolean: l,
      stateBoolean: n,
      tooltipBoolean: r,
      validatedBoolean: c,
      floatingBoolean: d,
      ariaDescribedby: v,
      computedAriaInvalid: F,
      contentColProps: w,
      isHorizontal: h,
      labelAlignClasses: y,
      labelColProps: k,
      onLegendClick: (T) => {
        if (e.labelFor)
          return;
        const { target: O } = T, A = O ? O.tagName : "";
        if (li.indexOf(A) !== -1)
          return;
        const C = Jo(ai, p).filter(Xo);
        C.length === 1 && Wo(C[0]);
      },
      stateClass: I
    };
  },
  render() {
    const e = this.$props, t = this.$slots, a = $e(), l = !e.labelFor;
    let n = null;
    const r = Pe(ni, {}, t) || e.label, c = r ? Ne("_BV_label_") : null;
    if (r || this.isHorizontal) {
      const F = l ? "legend" : "label";
      if (this.labelSrOnlyBoolean)
        r && (n = le(
          F,
          {
            class: "visually-hidden",
            id: c,
            for: e.labelFor || null
          },
          r
        )), this.isHorizontal ? n = le(nt, this.labelColProps, { default: () => n }) : n = le("div", {}, [n]);
      else {
        const x = {
          onClick: l ? this.onLegendClick : null,
          ...this.isHorizontal ? this.labelColProps : {},
          tag: this.isHorizontal ? F : null,
          id: c,
          for: e.labelFor || null,
          tabIndex: l ? "-1" : null,
          class: [
            this.isHorizontal ? "col-form-label" : "form-label",
            {
              "bv-no-focus-ring": l,
              "col-form-label": this.isHorizontal || l,
              "pt-0": !this.isHorizontal && l,
              "d-block": !this.isHorizontal && !l,
              [`col-form-label-${e.labelSize}`]: !!e.labelSize
            },
            this.labelAlignClasses,
            e.labelClass
          ]
        };
        this.isHorizontal ? n = le(nt, x, { default: () => r }) : n = le(F, x, r);
      }
    }
    let d = null;
    const v = Pe(oi, {}, t) || this.invalidFeedback, b = v ? Ne("_BV_feedback_invalid_") : void 0;
    v && (d = le(
      Kt,
      {
        ariaLive: e.feedbackAriaLive,
        id: b,
        state: this.stateBoolean,
        tooltip: this.tooltipBoolean
      },
      { default: () => v }
    ));
    let B = null;
    const m = Pe(si, {}, t) || this.validFeedback, p = m ? Ne("_BV_feedback_valid_") : void 0;
    m && (B = le(
      Jt,
      {
        ariaLive: e.feedbackAriaLive,
        id: p,
        state: this.stateBoolean,
        tooltip: this.tooltipBoolean
      },
      { default: () => m }
    ));
    let V = null;
    const w = Pe(ri, {}, t) || this.description, y = w ? Ne("_BV_description_") : void 0;
    w && (V = le(
      Xt,
      {
        id: y
      },
      { default: () => w }
    ));
    const k = this.ariaDescribedby = [
      y,
      this.stateBoolean === false ? b : null,
      this.stateBoolean === true ? p : null
    ].filter((F) => F).join(" ") || null, h = [
      Pe(ii, { ariaDescribedby: k, descriptionId: y, id: a, labelId: c }, t) || "",
      d,
      B,
      V
    ];
    !this.isHorizontal && this.floatingBoolean && h.push(n);
    let S = le(
      "div",
      {
        ref: "content",
        class: [
          {
            "form-floating": !this.isHorizontal && this.floatingBoolean
          }
        ]
      },
      h
    );
    this.isHorizontal && (S = le(nt, { ref: "content", ...this.contentColProps }, { default: () => h }));
    const I = {
      class: [
        "mb-3",
        this.stateClass,
        {
          "was-validated": this.validatedBoolean
        }
      ],
      id: $e(s(e, "id")).value,
      disabled: l ? this.disabledBoolean : null,
      role: l ? null : "group",
      "aria-invalid": this.computedAriaInvalid,
      "aria-labelledby": l && this.isHorizontal ? c : null
    };
    return this.isHorizontal && !l ? le(pt, I, { default: () => [n, S] }) : le(
      l ? "fieldset" : "div",
      I,
      this.isHorizontal && l ? [le(pt, null, { default: () => [n, S] })] : this.isHorizontal || !this.floatingBoolean ? [n, S] : [S]
    );
  }
}), Na = [
  "text",
  "number",
  "email",
  "password",
  "search",
  "url",
  "tel",
  "date",
  "time",
  "range",
  "color"
], di = P({
  props: {
    ...Fl,
    max: { type: [String, Number], required: false },
    min: { type: [String, Number], required: false },
    step: { type: [String, Number], required: false },
    type: {
      type: String,
      default: "text",
      validator: (e) => Na.includes(e)
    }
  },
  emits: ["update:modelValue", "change", "blur", "input"],
  setup(e, { emit: t }) {
    const { input: a, computedId: l, computedAriaInvalid: n, onInput: r, onChange: c, onBlur: d, focus: v, blur: b } = El(e, t), B = U(false), m = i(() => {
      const w = e.type === "range", y = e.type === "color";
      return {
        "form-control-highlighted": B.value,
        "form-range": w,
        "form-control": y || !e.plaintext && !w,
        "form-control-color": y,
        "form-control-plaintext": e.plaintext && !w && !y,
        [`form-control-${e.size}`]: !!e.size,
        "is-valid": e.state === true,
        "is-invalid": e.state === false
      };
    }), p = i(
      () => Na.includes(e.type) ? e.type : "text"
    );
    return {
      computedClasses: m,
      localType: p,
      input: a,
      computedId: l,
      computedAriaInvalid: n,
      onInput: r,
      onChange: c,
      onBlur: d,
      focus: v,
      blur: b,
      highlight: () => {
        B.value !== true && (B.value = true, setTimeout(() => {
          B.value = false;
        }, 2e3));
      }
    };
  }
}), ci = ["id", "name", "form", "type", "disabled", "placeholder", "required", "autocomplete", "readonly", "min", "max", "step", "list", "aria-required", "aria-invalid"];
function fi(e, t, a, l, n, r) {
  return f(), g("input", J({
    id: e.computedId,
    ref: "input",
    class: e.computedClasses,
    name: e.name || void 0,
    form: e.form || void 0,
    type: e.localType,
    disabled: e.disabled,
    placeholder: e.placeholder,
    required: e.required,
    autocomplete: e.autocomplete || void 0,
    readonly: e.readonly || e.plaintext,
    min: e.min,
    max: e.max,
    step: e.step,
    list: e.type !== "password" ? e.list : void 0,
    "aria-required": e.required ? "true" : void 0,
    "aria-invalid": e.computedAriaInvalid
  }, e.$attrs, {
    onInput: t[0] || (t[0] = (c) => e.onInput(c)),
    onChange: t[1] || (t[1] = (c) => e.onChange(c)),
    onBlur: t[2] || (t[2] = (c) => e.onBlur(c))
  }), null, 16, ci);
}
const vi = /* @__PURE__ */ Te(di, [["render", fi]]), mi = ["id", "disabled", "required", "name", "form", "aria-label", "aria-labelledby", "value", "aria-required"], bi = ["for"], an = /* @__PURE__ */ P({
  __name: "BFormRadio",
  props: {
    ariaLabel: null,
    ariaLabelledby: null,
    form: null,
    id: null,
    name: null,
    size: null,
    autofocus: { default: false },
    modelValue: { type: [Boolean, String, Array, Object, Number], default: void 0 },
    plain: { default: false },
    button: { default: false },
    switch: { default: false },
    disabled: { default: false },
    buttonVariant: { default: "secondary" },
    inline: { default: false },
    required: { default: false },
    state: { default: void 0 },
    value: { type: [String, Boolean, Object, Number], default: true }
  },
  emits: ["input", "change", "update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, l = Se(), n = $e(s(a, "id"), "form-check"), r = u(s(a, "autofocus")), c = u(s(a, "plain")), d = u(s(a, "button")), v = u(s(a, "switch")), b = u(s(a, "disabled")), B = u(s(a, "inline")), m = u(s(a, "required")), p = u(s(a, "state")), V = U(null), w = U(false), y = i({
      get: () => Array.isArray(a.modelValue) ? a.modelValue[0] : a.modelValue,
      set: (T) => {
        const O = T ? a.value : false, A = Array.isArray(a.modelValue) ? [O] : O;
        t("input", A), t("change", A), t("update:modelValue", A);
      }
    }), k = i(() => Array.isArray(a.modelValue) ? (a.modelValue || []).find((T) => T === a.value) : JSON.stringify(a.modelValue) === JSON.stringify(a.value)), h = i(() => !Ve(l.default)), S = De({
      plain: s(c, "value"),
      button: s(d, "value"),
      inline: s(B, "value"),
      switch: s(v, "value"),
      size: s(a, "size"),
      state: s(p, "value"),
      buttonVariant: s(a, "buttonVariant")
    }), I = Tl(S), F = Vl(S), x = Al(S);
    return Be(() => {
      r.value && V.value !== null && V.value.focus();
    }), (T, O) => (f(), g("div", {
      class: E(o(I))
    }, [
      tt(M("input", J({ id: o(n) }, T.$attrs, {
        ref_key: "input",
        ref: V,
        "onUpdate:modelValue": O[0] || (O[0] = (A) => Ze(y) ? y.value = A : null),
        class: o(F),
        type: "radio",
        disabled: o(b),
        required: !!e.name && o(m),
        name: e.name,
        form: e.form,
        "aria-label": e.ariaLabel,
        "aria-labelledby": e.ariaLabelledby,
        value: e.value,
        "aria-required": !!e.name && o(m) ? true : void 0,
        onFocus: O[1] || (O[1] = (A) => w.value = true),
        onBlur: O[2] || (O[2] = (A) => w.value = false)
      }), null, 16, mi), [
        [Vn, o(y)]
      ]),
      o(h) || o(c) === false ? (f(), g("label", {
        key: 0,
        for: o(n),
        class: E([o(x), { active: o(k), focus: w.value }])
      }, [
        $(T.$slots, "default")
      ], 10, bi)) : W("", true)
    ], 2));
  }
}), pi = ["id"], gi = ["innerHTML"], hi = ["textContent"], yi = /* @__PURE__ */ P({
  __name: "BFormRadioGroup",
  props: {
    size: null,
    form: null,
    id: null,
    name: null,
    modelValue: { type: [String, Boolean, Array, Object, Number], default: "" },
    ariaInvalid: { default: void 0 },
    autofocus: { default: false },
    buttonVariant: { default: "secondary" },
    buttons: { default: false },
    disabled: { default: false },
    disabledField: { default: "disabled" },
    htmlField: { default: "html" },
    options: { default: () => [] },
    plain: { default: false },
    required: { default: false },
    stacked: { default: false },
    state: { default: void 0 },
    textField: { default: "text" },
    validated: { default: false },
    valueField: { default: "value" }
  },
  emits: ["input", "update:modelValue", "change"],
  setup(e, { emit: t }) {
    const a = e, l = Se(), n = "BFormRadio", r = $e(s(a, "id"), "radio"), c = $e(s(a, "name"), "checkbox");
    u(s(a, "autofocus"));
    const d = u(s(a, "buttons")), v = u(s(a, "disabled"));
    u(s(a, "plain"));
    const b = u(s(a, "required")), B = u(s(a, "stacked")), m = u(s(a, "state")), p = u(s(a, "validated")), V = i({
      get: () => a.modelValue,
      set: (S) => {
        t("input", S), t("update:modelValue", S), t("change", S);
      }
    }), w = i(
      () => (l.first ? kt(l.first(), n, v.value) : []).concat(a.options.map((S) => Pl(S, a))).concat(l.default ? kt(l.default(), n, v.value) : []).map((S, I) => Il(S, I, a, c, r)).map((S) => ({
        ...S
      }))
    ), y = De({
      required: s(b, "value"),
      ariaInvalid: s(a, "ariaInvalid"),
      state: s(m, "value"),
      validated: s(p, "value"),
      buttons: s(d, "value"),
      stacked: s(B, "value"),
      size: s(a, "size")
    }), k = Ol(y), h = xl(y);
    return (S, I) => (f(), g("div", J(o(k), {
      id: o(r),
      role: "radiogroup",
      class: [o(h), "bv-no-focus-ring"],
      tabindex: "-1"
    }), [
      (f(true), g(oe, null, ve(o(w), (F, x) => (f(), z(an, J({
        key: x,
        modelValue: o(V),
        "onUpdate:modelValue": I[0] || (I[0] = (T) => Ze(V) ? V.value = T : null)
      }, F.props), {
        default: H(() => [
          F.html ? (f(), g("span", {
            key: 0,
            innerHTML: F.html
          }, null, 8, gi)) : (f(), g("span", {
            key: 1,
            textContent: G(F.text)
          }, null, 8, hi))
        ]),
        _: 2
      }, 1040, ["modelValue"]))), 128))
    ], 16, pi));
  }
}), Bi = ["value", "disabled"], ia = /* @__PURE__ */ P({
  __name: "BFormSelectOption",
  props: {
    value: null,
    disabled: { default: false }
  },
  setup(e) {
    const a = u(s(e, "disabled"));
    return (l, n) => (f(), g("option", {
      value: e.value,
      disabled: o(a)
    }, [
      $(l.$slots, "default")
    ], 8, Bi));
  }
}), $i = ["label"], ln = /* @__PURE__ */ P({
  __name: "BFormSelectOptionGroup",
  props: {
    label: null,
    disabledField: { default: "disabled" },
    htmlField: { default: "html" },
    options: { default: () => [] },
    textField: { default: "text" },
    valueField: { default: "value" }
  },
  setup(e) {
    const t = e, a = i(
      () => oa(t.options, "BFormSelectOptionGroup", t)
    );
    return (l, n) => (f(), g("optgroup", { label: e.label }, [
      $(l.$slots, "first"),
      (f(true), g(oe, null, ve(o(a), (r, c) => (f(), z(ia, J({
        key: c,
        value: r.value,
        disabled: r.disabled
      }, l.$attrs, {
        innerHTML: r.html || r.text
      }), null, 16, ["value", "disabled", "innerHTML"]))), 128)),
      $(l.$slots, "default")
    ], 8, $i));
  }
}), Si = ["id", "name", "form", "multiple", "size", "disabled", "required", "aria-required", "aria-invalid"], ki = /* @__PURE__ */ P({
  __name: "BFormSelect",
  props: {
    ariaInvalid: { default: void 0 },
    autofocus: { default: false },
    disabled: { default: false },
    disabledField: { default: "disabled" },
    form: null,
    htmlField: { default: "html" },
    id: null,
    labelField: { default: "label" },
    multiple: { default: false },
    name: null,
    options: { default: () => [] },
    optionsField: { default: "options" },
    plain: { default: false },
    required: { default: false },
    selectSize: { default: 0 },
    size: null,
    state: { default: void 0 },
    textField: { default: "text" },
    valueField: { default: "value" },
    modelValue: { default: "" }
  },
  emits: ["input", "update:modelValue", "change"],
  setup(e, { expose: t, emit: a }) {
    const l = e, n = $e(s(l, "id"), "input"), r = u(s(l, "autofocus")), c = u(s(l, "disabled")), d = u(s(l, "multiple")), v = u(s(l, "plain")), b = u(s(l, "required")), B = u(s(l, "state")), m = U(), p = i(() => ({
      "form-control": v.value,
      [`form-control-${l.size}`]: l.size && v.value,
      "form-select": !v.value,
      [`form-select-${l.size}`]: l.size && !v.value,
      "is-valid": B.value === true,
      "is-invalid": B.value === false
    })), V = i(() => {
      if (l.selectSize || v.value)
        return l.selectSize;
    }), w = i(
      () => Vt(l.ariaInvalid, B.value)
    ), y = i(
      () => oa(l.options, "BFormSelect", l)
    ), k = i({
      get() {
        return l.modelValue;
      },
      set(F) {
        a("change", F), a("update:modelValue", F), a("input", F);
      }
    }), h = () => {
      var F;
      c.value || (F = m.value) == null || F.focus();
    }, S = () => {
      var F;
      c.value || (F = m.value) == null || F.blur();
    }, I = () => {
      Ee(() => {
        var F;
        r.value && ((F = m.value) == null || F.focus());
      });
    };
    return Be(I), ea(I), t({
      blur: S,
      focus: h
    }), (F, x) => tt((f(), g("select", J({
      id: o(n),
      ref_key: "input",
      ref: m
    }, F.$attrs, {
      "onUpdate:modelValue": x[0] || (x[0] = (T) => Ze(k) ? k.value = T : null),
      class: o(p),
      name: e.name,
      form: e.form || void 0,
      multiple: o(d) || void 0,
      size: o(V),
      disabled: o(c),
      required: o(b),
      "aria-required": o(b) ? true : void 0,
      "aria-invalid": o(w)
    }), [
      $(F.$slots, "first"),
      (f(true), g(oe, null, ve(o(y), (T, O) => (f(), g(oe, { key: O }, [
        Array.isArray(T.options) ? (f(), z(ln, {
          key: 0,
          label: T.label,
          options: T.options
        }, null, 8, ["label", "options"])) : (f(), z(ia, {
          key: 1,
          value: T.value,
          disabled: T.disabled,
          innerHTML: T.html || T.text
        }, null, 8, ["value", "disabled", "innerHTML"]))
      ], 64))), 128)),
      $(F.$slots, "default")
    ], 16, Si)), [
      [An, o(k)]
    ]);
  }
}), Ci = ["id"], nn = /* @__PURE__ */ P({
  __name: "BFormTag",
  props: {
    id: null,
    title: null,
    disabled: { default: false },
    noRemove: { default: false },
    pill: { default: false },
    removeLabel: { default: "Remove tag" },
    tag: { default: "span" },
    variant: { default: "secondary" }
  },
  emits: ["remove"],
  setup(e, { emit: t }) {
    const a = e, l = Se(), n = $e(s(a, "id")), r = u(s(a, "disabled")), c = u(s(a, "noRemove")), d = u(s(a, "pill")), v = i(
      () => {
        var m, p, V;
        return (V = ((p = (m = l.default) == null ? void 0 : m.call(l)[0].children) != null ? p : "").toString() || a.title) != null ? V : "";
      }
    ), b = i(() => `${n.value}taglabel__`), B = i(() => [
      `bg-${a.variant}`,
      {
        "text-dark": ["warning", "info", "light"].includes(a.variant),
        "rounded-pill": d.value,
        disabled: r.value
      }
    ]);
    return (m, p) => (f(), z(Y(e.tag), {
      id: o(n),
      title: o(v),
      class: E(["badge b-form-tag d-inline-flex align-items-center mw-100", o(B)]),
      "aria-labelledby": o(b)
    }, {
      default: H(() => [
        M("span", {
          id: o(b),
          class: "b-form-tag-content flex-grow-1 text-truncate"
        }, [
          $(m.$slots, "default", {}, () => [
            ee(G(o(v)), 1)
          ])
        ], 8, Ci),
        !o(r) && !o(c) ? (f(), z(at, {
          key: 0,
          "aria-keyshortcuts": "Delete",
          "aria-label": e.removeLabel,
          class: "b-form-tag-remove",
          white: !["warning", "info", "light"].includes(e.variant),
          "aria-describedby": o(b),
          "aria-controls": e.id,
          onClick: p[0] || (p[0] = (V) => t("remove", o(v)))
        }, null, 8, ["aria-label", "white", "aria-describedby", "aria-controls"])) : W("", true)
      ]),
      _: 3
    }, 8, ["id", "title", "class", "aria-labelledby"]));
  }
}), wi = ["id"], _i = ["id", "for", "aria-live"], Ti = ["id", "aria-live"], Vi = ["id"], Ai = ["aria-controls"], Oi = {
  role: "group",
  class: "d-flex"
}, xi = ["id", "disabled", "value", "type", "placeholder", "form", "required"], Pi = ["disabled"], Ii = {
  "aria-live": "polite",
  "aria-atomic": "true"
}, Fi = {
  key: 0,
  class: "d-block invalid-feedback"
}, Ei = {
  key: 1,
  class: "form-text text-muted"
}, Li = {
  key: 2,
  class: "form-text text-muted"
}, zi = ["name", "value"], Ni = /* @__PURE__ */ P({
  __name: "BFormTags",
  props: {
    addButtonText: { default: "Add" },
    addButtonVariant: { default: "outline-secondary" },
    addOnChange: { default: false },
    autofocus: { default: false },
    disabled: { default: false },
    duplicateTagText: { default: "Duplicate tag(s)" },
    inputAttrs: null,
    inputClass: null,
    inputId: null,
    inputType: { default: "text" },
    invalidTagText: { default: "Invalid tag(s)" },
    form: null,
    limit: null,
    limitTagsText: { default: "Tag limit reached" },
    modelValue: { default: () => [] },
    name: null,
    noAddOnEnter: { default: false },
    noOuterFocus: { default: false },
    noTagRemove: { default: false },
    placeholder: { default: "Add tag..." },
    removeOnDelete: { default: false },
    required: { default: false },
    separator: null,
    state: { default: void 0 },
    size: null,
    tagClass: null,
    tagPills: { default: false },
    tagRemoveLabel: null,
    tagRemovedLabel: { default: "Tag removed" },
    tagValidator: { type: Function, default: () => true },
    tagVariant: { default: "secondary" }
  },
  emits: ["update:modelValue", "input", "tag-state", "focus", "focusin", "focusout", "blur"],
  setup(e, { emit: t }) {
    const a = e, l = $e(), n = u(s(a, "addOnChange")), r = u(s(a, "autofocus")), c = u(s(a, "disabled")), d = u(s(a, "noAddOnEnter")), v = u(s(a, "noOuterFocus")), b = u(s(a, "noTagRemove")), B = u(s(a, "removeOnDelete")), m = u(s(a, "required")), p = u(s(a, "state")), V = u(s(a, "tagPills")), w = U(null), y = i(() => a.inputId || `${l.value}input__`), k = U(a.modelValue), h = U(""), S = U(false), I = U(false), F = U(""), x = U([]), T = U([]), O = U([]), A = i(() => ({
      [`form-control-${a.size}`]: a.size !== void 0,
      disabled: c.value,
      focus: I.value,
      "is-invalid": p.value === false,
      "is-valid": p.value === true
    })), C = i(() => k.value.includes(h.value)), L = i(
      () => h.value === "" ? false : !a.tagValidator(h.value)
    ), N = i(() => k.value.length === a.limit), te = i(() => !L.value && !C.value), Z = i(() => ({
      addButtonText: a.addButtonText,
      addButtonVariant: a.addButtonVariant,
      addTag: ie,
      disableAddButton: te.value,
      disabled: c.value,
      duplicateTagText: a.duplicateTagText,
      duplicateTags: O.value,
      form: a.form,
      inputAttrs: {
        ...a.inputAttrs,
        disabled: c.value,
        form: a.form,
        id: y,
        value: h
      },
      inputHandlers: {
        input: pe,
        keydown: ge,
        change: ye
      },
      inputId: y,
      inputType: a.inputType,
      invalidTagText: a.invalidTagText,
      invalidTags: T.value,
      isDuplicate: C.value,
      isInvalid: L.value,
      isLimitReached: N.value,
      limitTagsText: a.limitTagsText,
      limit: a.limit,
      noTagRemove: b.value,
      placeholder: a.placeholder,
      removeTag: R,
      required: m.value,
      separator: a.separator,
      size: a.size,
      state: p.value,
      tagClass: a.tagClass,
      tagPills: V.value,
      tagRemoveLabel: a.tagRemoveLabel,
      tagVariant: a.tagVariant,
      tags: k.value
    }));
    de(
      () => a.modelValue,
      (D) => {
        k.value = D;
      }
    );
    const re = () => {
      var D;
      r.value && ((D = w.value) == null || D.focus());
    }, K = (D) => {
      if (c.value) {
        D.target.blur();
        return;
      }
      t("focusin", D);
    }, me = (D) => {
      c.value || v.value || (I.value = true, t("focus", D));
    }, ae = (D) => {
      I.value = false, t("blur", D);
    }, pe = (D) => {
      var ne, Q;
      const X = typeof D == "string" ? D : D.target.value;
      if (S.value = false, ((ne = a.separator) == null ? void 0 : ne.includes(X.charAt(0))) && X.length > 0) {
        w.value && (w.value.value = "");
        return;
      }
      if (h.value = X, (Q = a.separator) != null && Q.includes(X.charAt(X.length - 1))) {
        ie(X.slice(0, X.length - 1));
        return;
      }
      x.value = a.tagValidator(X) && !C.value ? [X] : [], T.value = a.tagValidator(X) ? [] : [X], O.value = C.value ? [X] : [], t("tag-state", x.value, T.value, O.value);
    }, ye = (D) => {
      n.value && (pe(D), C.value || ie(h.value));
    }, ge = (D) => {
      if (D.key === "Enter" && !d.value) {
        ie(h.value);
        return;
      }
      (D.key === "Backspace" || D.key === "Delete") && B.value && h.value === "" && S.value && k.value.length > 0 ? R(k.value[k.value.length - 1]) : S.value = true;
    }, ie = (D) => {
      var ne;
      if (D = (D || h.value).trim(), D === "" || C.value || !a.tagValidator(D) || a.limit && N.value)
        return;
      const X = [...a.modelValue, D];
      h.value = "", S.value = true, t("update:modelValue", X), t("input", X), (ne = w.value) == null || ne.focus();
    }, R = (D) => {
      var ne;
      const X = k.value.indexOf((ne = D == null ? void 0 : D.toString()) != null ? ne : "");
      F.value = k.value.splice(X, 1).toString(), t("update:modelValue", k.value);
    };
    return Be(() => {
      re(), a.modelValue.length > 0 && (S.value = true);
    }), ea(() => re()), (D, X) => (f(), g("div", {
      id: o(l),
      class: E(["b-form-tags form-control h-auto", o(A)]),
      role: "group",
      tabindex: "-1",
      onFocusin: K,
      onFocusout: X[1] || (X[1] = (ne) => t("focusout", ne))
    }, [
      M("output", {
        id: `${o(l)}selected_tags__`,
        class: "visually-hidden",
        role: "status",
        for: o(y),
        "aria-live": I.value ? "polite" : "off",
        "aria-atomic": "true",
        "aria-relevant": "additions text"
      }, G(k.value.join(", ")), 9, _i),
      M("div", {
        id: `${o(l)}removed_tags__`,
        role: "status",
        "aria-live": I.value ? "assertive" : "off",
        "aria-atomic": "true",
        class: "visually-hidden"
      }, " (" + G(e.tagRemovedLabel) + ") " + G(F.value), 9, Ti),
      $(D.$slots, "default", he(Ce(o(Z))), () => [
        M("ul", {
          id: `${o(l)}tag_list__`,
          class: "b-form-tags-list list-unstyled mb-0 d-flex flex-wrap align-items-center"
        }, [
          (f(true), g(oe, null, ve(k.value, (ne, Q) => $(D.$slots, "tag", he(J({ key: Q }, { tag: ne, tagClass: e.tagClass, tagVariant: e.tagVariant, tagPills: o(V), removeTag: R })), () => [
            fe(nn, {
              class: E(e.tagClass),
              tag: "li",
              variant: e.tagVariant,
              pill: e.tagPills,
              onRemove: R
            }, {
              default: H(() => [
                ee(G(ne), 1)
              ]),
              _: 2
            }, 1032, ["class", "variant", "pill"])
          ])), 128)),
          M("li", {
            role: "none",
            "aria-live": "off",
            class: "b-from-tags-field flex-grow-1",
            "aria-controls": `${o(l)}tag_list__`
          }, [
            M("div", Oi, [
              M("input", J({
                id: o(y),
                ref_key: "input",
                ref: w,
                disabled: o(c),
                value: h.value,
                type: e.inputType,
                placeholder: e.placeholder,
                class: "b-form-tags-input w-100 flex-grow-1 p-0 m-0 bg-transparent border-0",
                style: { outline: "currentcolor none 0px", "min-width": "5rem" }
              }, e.inputAttrs, {
                form: e.form,
                required: o(m),
                onInput: pe,
                onChange: ye,
                onKeydown: ge,
                onFocus: me,
                onBlur: ae
              }), null, 16, xi),
              o(te) ? (f(), g("button", {
                key: 0,
                type: "button",
                class: E(["btn b-form-tags-button py-0", [
                  `btn-${e.addButtonVariant}`,
                  {
                    "disabled invisible": h.value.length === 0
                  },
                  e.inputClass
                ]]),
                style: { "font-size": "90%" },
                disabled: o(c) || h.value.length === 0 || o(N),
                onClick: X[0] || (X[0] = (ne) => ie(h.value))
              }, [
                $(D.$slots, "add-button-text", {}, () => [
                  ee(G(e.addButtonText), 1)
                ])
              ], 10, Pi)) : W("", true)
            ])
          ], 8, Ai)
        ], 8, Vi),
        M("div", Ii, [
          o(L) ? (f(), g("div", Fi, G(e.invalidTagText) + ": " + G(h.value), 1)) : W("", true),
          o(C) ? (f(), g("small", Ei, G(e.duplicateTagText) + ": " + G(h.value), 1)) : W("", true),
          k.value.length === e.limit ? (f(), g("small", Li, "Tag limit reached")) : W("", true)
        ])
      ]),
      e.name ? (f(true), g(oe, { key: 0 }, ve(k.value, (ne, Q) => (f(), g("input", {
        key: Q,
        type: "hidden",
        name: e.name,
        value: ne
      }, null, 8, zi))), 128)) : W("", true)
    ], 42, wi));
  }
}), Di = P({
  props: {
    ...Fl,
    noResize: { type: [Boolean, String], default: false },
    rows: { type: [String, Number], required: false, default: 2 },
    wrap: { type: String, default: "soft" }
  },
  emits: ["update:modelValue", "change", "blur", "input"],
  setup(e, { emit: t }) {
    const { input: a, computedId: l, computedAriaInvalid: n, onInput: r, onChange: c, onBlur: d, focus: v, blur: b } = El(e, t), B = u(s(e, "noResize")), m = i(() => ({
      "form-control": !e.plaintext,
      "form-control-plaintext": e.plaintext,
      [`form-control-${e.size}`]: !!e.size,
      "is-valid": e.state === true,
      "is-invalid": e.state === false
    })), p = i(
      () => B.value ? { resize: "none" } : void 0
    );
    return {
      input: a,
      computedId: l,
      computedAriaInvalid: n,
      onInput: r,
      onChange: c,
      onBlur: d,
      focus: v,
      blur: b,
      computedClasses: m,
      computedStyles: p
    };
  }
}), Hi = ["id", "name", "form", "disabled", "placeholder", "required", "autocomplete", "readonly", "aria-required", "aria-invalid", "rows", "wrap"];
function Ri(e, t, a, l, n, r) {
  return f(), g("textarea", J({
    id: e.computedId,
    ref: "input",
    class: e.computedClasses,
    name: e.name || void 0,
    form: e.form || void 0,
    disabled: e.disabled,
    placeholder: e.placeholder,
    required: e.required,
    autocomplete: e.autocomplete || void 0,
    readonly: e.readonly || e.plaintext,
    "aria-required": e.required ? "true" : void 0,
    "aria-invalid": e.computedAriaInvalid,
    rows: e.rows,
    style: e.computedStyles,
    wrap: e.wrap || void 0
  }, e.$attrs, {
    onInput: t[0] || (t[0] = (c) => e.onInput(c)),
    onChange: t[1] || (t[1] = (c) => e.onChange(c)),
    onBlur: t[2] || (t[2] = (c) => e.onBlur(c))
  }), null, 16, Hi);
}
const ji = /* @__PURE__ */ Te(Di, [["render", Ri]]), Mi = {
  key: 0,
  class: "input-group-text"
}, qi = ["innerHTML"], Gi = { key: 1 }, Ui = {
  key: 0,
  class: "input-group-text"
}, Wi = ["innerHTML"], Ki = { key: 1 }, Xi = /* @__PURE__ */ P({
  __name: "BInputGroup",
  props: {
    append: null,
    appendHtml: null,
    id: null,
    prepend: null,
    prependHtml: null,
    size: null,
    tag: { default: "div" }
  },
  setup(e) {
    const t = e, a = i(() => ({
      "input-group-sm": t.size === "sm",
      "input-group-lg": t.size === "lg"
    })), l = i(() => !!t.append || !!t.appendHtml), n = i(() => !!t.prepend || !!t.prependHtml);
    return (r, c) => (f(), z(Y(e.tag), {
      id: e.id,
      class: E(["input-group", o(a)]),
      role: "group"
    }, {
      default: H(() => [
        $(r.$slots, "prepend", {}, () => [
          o(n) ? (f(), g("span", Mi, [
            e.prependHtml ? (f(), g("span", {
              key: 0,
              innerHTML: e.prependHtml
            }, null, 8, qi)) : (f(), g("span", Gi, G(e.prepend), 1))
          ])) : W("", true)
        ]),
        $(r.$slots, "default"),
        $(r.$slots, "append", {}, () => [
          o(l) ? (f(), g("span", Ui, [
            e.appendHtml ? (f(), g("span", {
              key: 0,
              innerHTML: e.appendHtml
            }, null, 8, Wi)) : (f(), g("span", Ki, G(e.append), 1))
          ])) : W("", true)
        ])
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), on = /* @__PURE__ */ P({
  __name: "BInputGroupText",
  props: {
    tag: { default: "div" },
    text: null
  },
  setup(e) {
    return (t, a) => (f(), z(Y(e.tag), { class: "input-group-text" }, {
      default: H(() => [
        $(t.$slots, "default", {}, () => [
          ee(G(e.text), 1)
        ])
      ]),
      _: 3
    }));
  }
}), ua = /* @__PURE__ */ P({
  __name: "BInputGroupAddon",
  props: {
    isText: { default: false }
  },
  setup(e) {
    const a = u(s(e, "isText"));
    return (l, n) => o(a) ? (f(), z(on, { key: 0 }, {
      default: H(() => [
        $(l.$slots, "default")
      ]),
      _: 3
    })) : $(l.$slots, "default", { key: 1 });
  }
}), Ji = /* @__PURE__ */ P({
  __name: "BInputGroupAppend",
  props: {
    isText: { default: false }
  },
  setup(e) {
    return (t, a) => (f(), z(ua, { "is-text": e.isText }, {
      default: H(() => [
        $(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["is-text"]));
  }
}), Qi = /* @__PURE__ */ P({
  __name: "BInputGroupPrepend",
  props: {
    isText: { default: false }
  },
  setup(e) {
    return (t, a) => (f(), z(ua, { "is-text": e.isText }, {
      default: H(() => [
        $(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["is-text"]));
  }
}), sn = Symbol(), Yi = /* @__PURE__ */ P({
  __name: "BListGroup",
  props: {
    flush: { default: false },
    horizontal: { type: [Boolean, String], default: false },
    numbered: { default: false },
    tag: { default: "div" }
  },
  setup(e) {
    const t = e, a = u(s(t, "flush")), l = u(s(t, "numbered")), n = i(() => {
      const c = a.value ? false : t.horizontal;
      return {
        "list-group-flush": a.value,
        "list-group-horizontal": c === true,
        [`list-group-horizontal-${c}`]: typeof c == "string",
        "list-group-numbered": l.value
      };
    }), r = i(() => l.value === true ? "ol" : t.tag);
    return et(sn, {
      numbered: l.value
    }), (c, d) => (f(), z(Y(o(r)), {
      class: E(["list-group", o(n)])
    }, {
      default: H(() => [
        $(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Zi = /* @__PURE__ */ P({
  __name: "BListGroupItem",
  props: {
    action: { default: false },
    active: { default: false },
    button: { default: false },
    disabled: { default: false },
    href: null,
    tag: { default: "div" },
    target: { default: "_self" },
    to: null,
    variant: null
  },
  setup(e) {
    const t = e, a = al(), l = He(sn, null), n = u(s(t, "action")), r = u(s(t, "active")), c = u(s(t, "button")), d = u(s(t, "disabled")), v = i(() => !c.value && (!!t.href || !!t.to)), b = i(
      () => l != null && l.numbered ? "li" : c.value ? "button" : v.value ? Ae : t.tag
    ), B = i(
      () => n.value || v.value || c.value || ["a", "router-link", "button", "b-link"].includes(t.tag)
    ), m = i(() => ({
      [`list-group-item-${t.variant}`]: t.variant !== void 0,
      "list-group-item-action": B.value,
      active: r.value,
      disabled: d.value
    })), p = i(() => {
      const V = {};
      return c.value && ((!a || !a.type) && (V.type = "button"), d.value && (V.disabled = true)), V;
    });
    return (V, w) => (f(), z(Y(o(b)), J({
      class: ["list-group-item", o(m)],
      "aria-current": o(r) ? true : void 0,
      "aria-disabled": o(d) ? true : void 0,
      target: o(v) ? e.target : void 0,
      href: o(c) ? void 0 : e.href,
      to: o(c) ? void 0 : e.to
    }, o(p)), {
      default: H(() => [
        $(V.$slots, "default")
      ]),
      _: 3
    }, 16, ["class", "aria-current", "aria-disabled", "target", "href", "to"]));
  }
}), eu = ["id", "aria-labelledby", "aria-describedby"], tu = ["id"], au = {
  inheritAttrs: false
}, lu = /* @__PURE__ */ P({
  ...au,
  __name: "BModal",
  props: {
    bodyBgVariant: null,
    bodyClass: null,
    bodyTextVariant: null,
    busy: { default: false },
    lazy: { default: false },
    buttonSize: { default: "md" },
    cancelDisabled: { default: false },
    cancelTitle: { default: "Cancel" },
    cancelVariant: { default: "secondary" },
    centered: { default: false },
    contentClass: null,
    dialogClass: null,
    footerBgVariant: null,
    footerBorderVariant: null,
    footerClass: null,
    footerTextVariant: null,
    fullscreen: { type: [Boolean, String], default: false },
    headerBgVariant: null,
    headerBorderVariant: null,
    headerClass: null,
    headerCloseLabel: { default: "Close" },
    headerCloseWhite: { default: false },
    headerTextVariant: null,
    hideBackdrop: { default: false },
    hideFooter: { default: false },
    hideHeader: { default: false },
    hideHeaderClose: { default: false },
    id: null,
    modalClass: null,
    modelValue: { default: false },
    noCloseOnBackdrop: { default: false },
    noCloseOnEsc: { default: false },
    noFade: { default: false },
    noFocus: { default: false },
    okDisabled: { default: false },
    okOnly: { default: false },
    okTitle: { default: "Ok" },
    okVariant: { default: "primary" },
    scrollable: { default: false },
    show: { default: false },
    size: null,
    title: null,
    titleClass: null,
    titleSrOnly: { default: false },
    titleTag: { default: "h5" },
    static: { default: false }
  },
  emits: ["update:modelValue", "show", "shown", "hide", "hidden", "hide-prevented", "show-prevented", "ok", "cancel", "close"],
  setup(e, { emit: t }) {
    const a = e, l = Se(), n = $e(s(a, "id"), "modal"), r = u(s(a, "busy")), c = u(s(a, "lazy")), d = u(s(a, "cancelDisabled")), v = u(s(a, "centered")), b = u(s(a, "hideBackdrop")), B = u(s(a, "hideFooter")), m = u(s(a, "hideHeader")), p = u(s(a, "hideHeaderClose")), V = u(s(a, "modelValue")), w = u(s(a, "noCloseOnBackdrop")), y = u(s(a, "noCloseOnEsc")), k = u(s(a, "noFade")), h = u(s(a, "noFocus")), S = u(s(a, "okDisabled")), I = u(s(a, "okOnly")), F = u(s(a, "scrollable")), x = u(s(a, "titleSrOnly")), T = u(s(a, "static")), O = U(false), A = U(null), C = U(false), L = i(() => [
      a.modalClass,
      {
        fade: !k.value,
        show: O.value
      }
    ]), N = i(() => !Ve(l["header-close"])), te = i(() => [
      a.dialogClass,
      {
        "modal-fullscreen": a.fullscreen === true,
        [`modal-fullscreen-${a.fullscreen}-down`]: typeof a.fullscreen == "string",
        [`modal-${a.size}`]: a.size !== void 0,
        "modal-dialog-centered": v.value,
        "modal-dialog-scrollable": F.value
      }
    ]), Z = i(() => [
      a.bodyClass,
      {
        [`bg-${a.bodyBgVariant}`]: a.bodyBgVariant !== void 0,
        [`text-${a.bodyTextVariant}`]: a.bodyTextVariant !== void 0
      }
    ]), re = i(() => [
      a.headerClass,
      {
        [`bg-${a.headerBgVariant}`]: a.headerBgVariant !== void 0,
        [`border-${a.headerBorderVariant}`]: a.headerBorderVariant !== void 0,
        [`text-${a.headerTextVariant}`]: a.headerTextVariant !== void 0
      }
    ]), K = i(() => [
      a.footerClass,
      {
        [`bg-${a.footerBgVariant}`]: a.footerBgVariant !== void 0,
        [`border-${a.footerBorderVariant}`]: a.footerBorderVariant !== void 0,
        [`text-${a.footerTextVariant}`]: a.footerTextVariant !== void 0
      }
    ]), me = i(() => [
      a.titleClass,
      {
        ["visually-hidden"]: x.value
      }
    ]), ae = i(() => d.value || r.value), pe = i(() => S.value || r.value), ye = (Q, se = {}) => new cl(Q, {
      cancelable: false,
      target: A.value || null,
      relatedTarget: null,
      trigger: null,
      ...se,
      componentId: n.value
    }), ge = (Q = "") => {
      const se = ye("hide", { cancelable: Q !== "", trigger: Q });
      if (Q === "ok" && t(Q, se), Q === "cancel" && t(Q, se), Q === "close" && t(Q, se), t("hide", se), se.defaultPrevented || Q === "backdrop" && w.value || Q === "esc" && y.value) {
        t("update:modelValue", true), t("hide-prevented");
        return;
      }
      t("update:modelValue", false);
    }, ie = () => {
      const Q = ye("show", { cancelable: true });
      if (t("show", Q), Q.defaultPrevented) {
        t("update:modelValue", false), t("show-prevented");
        return;
      }
      t("update:modelValue", true);
    }, R = () => ie(), D = () => {
      O.value = true, t("shown", ye("shown")), c.value === true && (C.value = true);
    }, X = () => {
      O.value = false;
    }, ne = () => {
      t("hidden", ye("hidden")), c.value === true && (C.value = false);
    };
    return de(
      () => V.value,
      (Q) => {
        Q === true && !h.value && Ee(() => {
          A.value !== null && A.value.focus();
        });
      }
    ), (Q, se) => (f(), z(On, {
      to: "body",
      disabled: o(T)
    }, [
      fe(ut, {
        "no-fade": true,
        "trans-props": { enterToClass: "show" },
        onBeforeEnter: R,
        onAfterEnter: D,
        onLeave: X,
        onAfterLeave: ne
      }, {
        default: H(() => [
          tt(M("div", J({
            id: o(n),
            ref_key: "element",
            ref: A,
            class: ["modal", o(L)],
            role: "dialog",
            "aria-labelledby": `${o(n)}-label`,
            "aria-describedby": `${o(n)}-body`,
            tabindex: "-1"
          }, Q.$attrs, {
            onKeyup: se[5] || (se[5] = xn((we) => ge("esc"), ["esc"]))
          }), [
            M("div", {
              class: E(["modal-dialog", o(te)])
            }, [
              !o(c) || o(c) && C.value || o(c) && o(V) === true ? (f(), g("div", {
                key: 0,
                class: E(["modal-content", e.contentClass])
              }, [
                o(m) ? W("", true) : (f(), g("div", {
                  key: 0,
                  class: E(["modal-header", o(re)])
                }, [
                  $(Q.$slots, "header", {}, () => [
                    (f(), z(Y(e.titleTag), {
                      id: `${o(n)}-label`,
                      class: E(["modal-title", o(me)])
                    }, {
                      default: H(() => [
                        $(Q.$slots, "title", {}, () => [
                          ee(G(e.title), 1)
                        ], true)
                      ]),
                      _: 3
                    }, 8, ["id", "class"])),
                    o(p) ? W("", true) : (f(), g(oe, { key: 0 }, [
                      o(N) ? (f(), g("button", {
                        key: 0,
                        type: "button",
                        onClick: se[0] || (se[0] = (we) => ge("close"))
                      }, [
                        $(Q.$slots, "header-close", {}, void 0, true)
                      ])) : (f(), z(at, {
                        key: 1,
                        "aria-label": e.headerCloseLabel,
                        white: e.headerCloseWhite,
                        onClick: se[1] || (se[1] = (we) => ge("close"))
                      }, null, 8, ["aria-label", "white"]))
                    ], 64))
                  ], true)
                ], 2)),
                M("div", {
                  id: `${o(n)}-body`,
                  class: E(["modal-body", o(Z)])
                }, [
                  $(Q.$slots, "default", {}, void 0, true)
                ], 10, tu),
                o(B) ? W("", true) : (f(), g("div", {
                  key: 1,
                  class: E(["modal-footer", o(K)])
                }, [
                  $(Q.$slots, "footer", {}, () => [
                    $(Q.$slots, "cancel", {}, () => [
                      o(I) ? W("", true) : (f(), z(Ye, {
                        key: 0,
                        type: "button",
                        class: "btn",
                        disabled: o(ae),
                        size: e.buttonSize,
                        variant: e.cancelVariant,
                        onClick: se[2] || (se[2] = (we) => ge("cancel"))
                      }, {
                        default: H(() => [
                          ee(G(e.cancelTitle), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled", "size", "variant"]))
                    ], true),
                    $(Q.$slots, "ok", {}, () => [
                      fe(Ye, {
                        type: "button",
                        class: "btn",
                        disabled: o(pe),
                        size: e.buttonSize,
                        variant: e.okVariant,
                        onClick: se[3] || (se[3] = (we) => ge("ok"))
                      }, {
                        default: H(() => [
                          ee(G(e.okTitle), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled", "size", "variant"])
                    ], true)
                  ], true)
                ], 2))
              ], 2)) : W("", true)
            ], 2),
            o(b) ? W("", true) : $(Q.$slots, "backdrop", { key: 0 }, () => [
              M("div", {
                class: "modal-backdrop fade show",
                onClick: se[4] || (se[4] = (we) => ge("backdrop"))
              })
            ], true)
          ], 16, eu), [
            [Pn, o(V)]
          ])
        ]),
        _: 3
      })
    ], 8, ["disabled"]));
  }
});
const nu = /* @__PURE__ */ Te(lu, [["__scopeId", "data-v-116ecd66"]]), ou = /* @__PURE__ */ P({
  __name: "BNav",
  props: {
    align: null,
    cardHeader: { default: false },
    fill: { default: false },
    justified: { default: false },
    pills: { default: false },
    small: { default: false },
    tabs: { default: false },
    tag: { default: "ul" },
    vertical: { default: false }
  },
  setup(e) {
    const t = e, a = u(s(t, "cardHeader")), l = u(s(t, "fill")), n = u(s(t, "justified")), r = u(s(t, "pills")), c = u(s(t, "small")), d = u(s(t, "tabs")), v = u(s(t, "vertical")), b = it(s(t, "align")), B = i(() => ({
      "nav-tabs": d.value,
      "nav-pills": r.value && !d.value,
      "card-header-tabs": !v.value && a.value && d.value,
      "card-header-pills": !v.value && a.value && r.value && !d.value,
      "flex-column": v.value,
      "nav-fill": !v.value && l.value,
      "nav-justified": !v.value && n.value,
      [b.value]: !v.value && t.align !== void 0,
      small: c.value
    }));
    return (m, p) => (f(), z(Y(e.tag), {
      class: E(["nav", o(B)])
    }, {
      default: H(() => [
        $(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), su = /* @__PURE__ */ P({
  __name: "BNavForm",
  props: {
    role: null,
    id: null,
    floating: { default: false },
    novalidate: { default: false },
    validated: { default: false }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const a = e, l = i(() => ({
      floating: a.floating,
      role: a.role,
      id: a.id,
      novalidate: a.novalidate,
      validated: a.validated
    })), n = (r) => t("submit", r);
    return (r, c) => (f(), z(Zl, J(o(l), {
      class: "d-flex",
      onSubmit: ta(n, ["prevent"])
    }), {
      default: H(() => [
        $(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["onSubmit"]));
  }
}), ru = P({
  components: { BLink: Ae },
  props: {
    ...At(We, ["event", "routerTag"])
  },
  setup(e) {
    return { disabledBoolean: u(s(e, "disabled")) };
  }
}), iu = { class: "nav-item" };
function uu(e, t, a, l, n, r) {
  const c = tl("b-link");
  return f(), g("li", iu, [
    fe(c, J({ class: "nav-link" }, e.$props, {
      "active-class": "active",
      tabindex: e.disabledBoolean ? -1 : void 0,
      "aria-disabled": e.disabledBoolean ? true : void 0
    }), {
      default: H(() => [
        $(e.$slots, "default")
      ]),
      _: 3
    }, 16, ["tabindex", "aria-disabled"])
  ]);
}
const du = /* @__PURE__ */ Te(ru, [["render", uu]]), cu = { class: "nav-item dropdown" }, fu = /* @__PURE__ */ P({
  __name: "BNavItemDropdown",
  props: {
    id: null,
    text: null,
    toggleClass: null,
    size: null,
    offset: null,
    autoClose: { type: [Boolean, String], default: true },
    dark: { type: Boolean, default: false },
    dropleft: { type: Boolean, default: false },
    dropright: { type: Boolean, default: false },
    dropup: { type: Boolean, default: false },
    right: { type: Boolean, default: false },
    left: { type: [Boolean, String], default: false },
    split: { type: Boolean, default: false },
    splitVariant: null,
    noCaret: { type: Boolean, default: false },
    variant: { default: "link" }
  },
  setup(e) {
    const t = e;
    return (a, l) => (f(), g("li", cu, [
      fe(Yl, J(t, { "is-nav": "" }), ll({ _: 2 }, [
        ve(a.$slots, (n, r, c) => ({
          name: r,
          fn: H((d) => [
            $(a.$slots, r, he(Ce(d || {})))
          ])
        }))
      ]), 1040)
    ]));
  }
}), vu = { class: "navbar-text" }, mu = /* @__PURE__ */ P({
  __name: "BNavText",
  props: {
    text: null
  },
  setup(e) {
    return (t, a) => (f(), g("li", vu, [
      $(t.$slots, "default", {}, () => [
        ee(G(e.text), 1)
      ])
    ]));
  }
}), bu = /* @__PURE__ */ P({
  __name: "BNavbar",
  props: {
    fixed: null,
    print: { default: false },
    sticky: null,
    tag: { default: "nav" },
    toggleable: { type: [Boolean, String], default: false },
    dark: { default: false },
    variant: null,
    container: { type: [String, Boolean], default: "fluid" }
  },
  setup(e) {
    const t = e, a = u(s(t, "print")), l = u(s(t, "dark")), n = i(
      () => t.tag === "nav" ? void 0 : "navigation"
    ), r = i(
      () => typeof t.toggleable == "string" ? `navbar-expand-${t.toggleable}` : t.toggleable === false ? "navbar-expand" : void 0
    ), c = i(
      () => t.container === true ? "container" : "container-fluid"
    ), d = i(() => ({
      "d-print": a.value,
      [`sticky-${t.sticky}`]: t.sticky !== void 0,
      "navbar-dark": l.value,
      [`bg-${t.variant}`]: t.variant !== void 0,
      [`fixed-${t.fixed}`]: t.fixed !== void 0,
      [`${r.value}`]: r.value !== void 0
    }));
    return (v, b) => (f(), z(Y(e.tag), {
      class: E(["navbar", o(d)]),
      role: o(n)
    }, {
      default: H(() => [
        e.container !== false ? (f(), g("div", {
          key: 0,
          class: E(o(c))
        }, [
          $(v.$slots, "default")
        ], 2)) : $(v.$slots, "default", { key: 1 })
      ]),
      _: 3
    }, 8, ["class", "role"]));
  }
}), Da = At(We, ["event", "routerTag"]), pu = P({
  components: {
    BLink: Ae
  },
  props: {
    tag: { type: String, default: "div" },
    ...Da
  },
  setup(e) {
    const t = i(() => rt(e)), a = i(
      () => t.value ? Ae : e.tag
    );
    return {
      computedLinkProps: i(
        () => t.value ? na(e, Da) : {}
      ),
      computedTag: a
    };
  }
});
function gu(e, t, a, l, n, r) {
  return f(), z(Y(e.computedTag), J({ class: "navbar-brand" }, e.computedLinkProps), {
    default: H(() => [
      $(e.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const hu = /* @__PURE__ */ Te(pu, [["render", gu]]), yu = /* @__PURE__ */ P({
  __name: "BNavbarNav",
  props: {
    align: null,
    fill: { default: false },
    justified: { default: false },
    small: { default: false },
    tag: { default: "ul" }
  },
  setup(e) {
    const t = e, a = u(s(t, "fill")), l = u(s(t, "justified")), n = u(s(t, "small")), r = it(s(t, "align")), c = i(() => ({
      "nav-fill": a.value,
      "nav-justified": l.value,
      [r.value]: t.align !== void 0,
      small: n.value
    }));
    return (d, v) => (f(), g("ul", {
      class: E(["navbar-nav", o(c)])
    }, [
      $(d.$slots, "default")
    ], 2));
  }
}), Bu = /* @__PURE__ */ M("span", { class: "navbar-toggler-icon" }, null, -1), $u = /* @__PURE__ */ P({
  __name: "BNavbarToggle",
  props: {
    disabled: { default: false },
    label: { default: "Toggle navigation" },
    target: null
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const a = e, l = u(s(a, "disabled")), n = i(() => ({
      disabled: l.value,
      "aria-label": a.label
    })), r = i(() => ({
      disabled: l.value
    })), c = (d) => {
      l.value || t("click", d);
    };
    return (d, v) => tt((f(), g("button", J({
      class: ["navbar-toggler", o(r)],
      type: "button"
    }, o(n), { onClick: c }), [
      $(d.$slots, "default", {}, () => [
        Bu
      ])
    ], 16)), [
      [o(sa), o(l) ? void 0 : e.target]
    ]);
  }
}), Su = ["data-bs-backdrop", "data-bs-scroll"], ku = {
  key: 0,
  class: "offcanvas-header"
}, Cu = {
  id: "offcanvasLabel",
  class: "offcanvas-title"
}, wu = { class: "offcanvas-body" }, _u = { key: 1 }, Tu = /* @__PURE__ */ P({
  __name: "BOffcanvas",
  props: {
    dismissLabel: { default: "Close" },
    modelValue: { default: false },
    bodyScrolling: { default: false },
    backdrop: { default: true },
    placement: { default: "start" },
    title: null,
    noHeaderClose: { default: false },
    noHeader: { default: false }
  },
  emits: ["update:modelValue", "show", "shown", "hide", "hidden"],
  setup(e, { emit: t }) {
    const a = e, l = u(s(a, "modelValue")), n = u(s(a, "bodyScrolling")), r = u(s(a, "backdrop")), c = u(s(a, "noHeaderClose")), d = u(s(a, "noHeader")), v = Se(), b = U(), B = U(), m = i(() => !Ve(v.footer)), p = i(() => [`offcanvas-${a.placement}`]), V = () => {
      t("show"), t("update:modelValue", true);
    }, w = () => {
      t("hide"), t("update:modelValue", false);
    };
    return de(
      () => l.value,
      (y) => {
        var k, h;
        y ? (k = B.value) == null || k.show(b.value) : (h = B.value) == null || h.hide();
      }
    ), _e(b, "shown.bs.offcanvas", () => t("shown")), _e(b, "hidden.bs.offcanvas", () => t("hidden")), _e(b, "show.bs.offcanvas", () => {
      V();
    }), _e(b, "hide.bs.offcanvas", () => {
      w();
    }), Be(() => {
      var y;
      B.value = new Offcanvas(b.value), l.value && ((y = B.value) == null || y.show(b.value));
    }), (y, k) => (f(), g("div", {
      ref_key: "element",
      ref: b,
      class: E(["offcanvas", o(p)]),
      tabindex: "-1",
      "aria-labelledby": "offcanvasLabel",
      "data-bs-backdrop": o(r),
      "data-bs-scroll": o(n)
    }, [
      o(d) ? W("", true) : (f(), g("div", ku, [
        $(y.$slots, "header", he(Ce({ visible: o(l), placement: e.placement, hide: w })), () => [
          M("h5", Cu, [
            $(y.$slots, "title", {}, () => [
              ee(G(e.title), 1)
            ])
          ]),
          o(c) ? W("", true) : (f(), z(at, {
            key: 0,
            class: "text-reset",
            "data-bs-dismiss": "offcanvas",
            "aria-label": e.dismissLabel
          }, null, 8, ["aria-label"]))
        ])
      ])),
      M("div", wu, [
        $(y.$slots, "default")
      ]),
      o(m) ? (f(), g("div", _u, [
        $(y.$slots, "footer", he(Ce({ visible: o(l), placement: e.placement, hide: w })))
      ])) : W("", true)
    ], 10, Su));
  }
}), Vu = /* @__PURE__ */ P({
  __name: "BOverlay",
  props: {
    bgColor: null,
    blur: { default: "2px" },
    fixed: { default: false },
    noCenter: { default: false },
    noFade: { default: false },
    noWrap: { default: false },
    opacity: { default: 0.85 },
    overlayTag: { default: "div" },
    rounded: { type: [Boolean, String], default: false },
    show: { default: false },
    spinnerSmall: { default: false },
    spinnerType: { default: "border" },
    spinnerVariant: null,
    variant: { default: "light" },
    wrapTag: { default: "div" },
    zIndex: { default: 10 }
  },
  emits: ["click", "hidden", "shown"],
  setup(e, { emit: t }) {
    const a = e, l = { top: 0, left: 0, bottom: 0, right: 0 }, n = u(s(a, "fixed")), r = u(s(a, "noCenter")), c = u(s(a, "noWrap")), d = u(s(a, "show")), v = u(s(a, "spinnerSmall")), b = i(
      () => a.rounded === true || a.rounded === "" ? "rounded" : a.rounded === false ? "" : `rounded-${a.rounded}`
    ), B = i(
      () => a.variant && !a.bgColor ? `bg-${a.variant}` : ""
    ), m = i(() => d.value ? "true" : null), p = i(() => ({
      type: a.spinnerType || void 0,
      variant: a.spinnerVariant || void 0,
      small: v.value
    })), V = i(() => ({
      ...l,
      zIndex: a.zIndex || 10
    })), w = i(() => [
      "b-overlay",
      {
        "position-absolute": !c.value || !n.value,
        "position-fixed": c.value && n.value
      }
    ]), y = i(() => [B.value, b.value]), k = i(() => ({
      ...l,
      opacity: a.opacity,
      backgroundColor: a.bgColor || void 0,
      backdropFilter: blur ? `blur(${blur})` : void 0
    })), h = i(
      () => r.value ? l : {
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)"
      }
    );
    return (S, I) => (f(), z(Y(e.wrapTag), {
      class: "b-overlay-wrap position-relative",
      "aria-busy": o(m)
    }, {
      default: H(() => [
        $(S.$slots, "default"),
        fe(ut, {
          "no-fade": e.noFade,
          "trans-props": { enterToClass: "show" },
          name: "fade",
          onOnAfterEnter: I[1] || (I[1] = (F) => t("shown")),
          onOnAfterLeave: I[2] || (I[2] = (F) => t("hidden"))
        }, {
          default: H(() => [
            o(d) ? (f(), z(Y(e.overlayTag), {
              key: 0,
              class: E(o(w)),
              style: Ie(o(V)),
              onClick: I[0] || (I[0] = (F) => t("click", F))
            }, {
              default: H(() => [
                M("div", {
                  class: E(["position-absolute", o(y)]),
                  style: Ie(o(k))
                }, null, 6),
                M("div", {
                  class: "position-absolute",
                  style: Ie(o(h))
                }, [
                  $(S.$slots, "overlay", he(Ce(o(p))), () => [
                    fe(Ot, he(Ce(o(p))), null, 16)
                  ])
                ], 4)
              ]),
              _: 3
            }, 8, ["class", "style"])) : W("", true)
          ]),
          _: 3
        }, 8, ["no-fade"])
      ]),
      _: 3
    }, 8, ["aria-busy"]));
  }
}), Au = 5, rn = 20, un = 0, Fe = 3, Ou = "ellipsis-text", xu = "first-text", Pu = "last-text", Iu = "next-text", Fu = "page", Eu = "prev-text", Ha = (e) => Math.max(je(e) || rn, 1), Ra = (e) => Math.max(je(e) || un, 0), Lu = (e, t) => {
  const a = je(e) || 1;
  return a > t ? t : a < 1 ? 1 : a;
}, zu = P({
  name: "BPagination",
  props: {
    align: { type: String, default: "start" },
    ariaControls: { type: String, required: false },
    ariaLabel: { type: String, default: "Pagination" },
    disabled: { type: [Boolean, String], default: false },
    ellipsisClass: { type: [Array, String], default: () => [] },
    ellipsisText: { type: String, default: "…" },
    firstClass: { type: [Array, String], default: () => [] },
    firstNumber: { type: [Boolean, String], default: false },
    firstText: { type: String, default: "«" },
    hideEllipsis: { type: [Boolean, String], default: false },
    hideGotoEndButtons: { type: [Boolean, String], default: false },
    labelFirstPage: { type: String, default: "Go to first page" },
    labelLastPage: { type: String, default: "Go to last page" },
    labelNextPage: { type: String, default: "Go to next page" },
    labelPage: { type: String, default: "Go to page" },
    labelPrevPage: { type: String, default: "Go to previous page" },
    lastClass: { type: [Array, String], default: () => [] },
    lastNumber: { type: [Boolean, String], default: false },
    lastText: { type: String, default: "»" },
    limit: { type: Number, default: Au },
    modelValue: { type: Number, default: 1 },
    nextClass: { type: [Array, String], default: () => [] },
    nextText: { type: String, default: "›" },
    pageClass: { type: [Array, String], default: () => [] },
    perPage: { type: Number, default: rn },
    pills: { type: [Boolean, String], default: false },
    prevClass: { type: [Array, String], default: () => [] },
    prevText: { type: String, default: "‹" },
    size: { type: String, required: false },
    totalRows: { type: Number, default: un }
  },
  emits: ["update:modelValue", "page-click"],
  setup(e, { emit: t, slots: a }) {
    const l = u(s(e, "disabled")), n = u(s(e, "firstNumber")), r = u(s(e, "hideEllipsis")), c = u(s(e, "hideGotoEndButtons")), d = u(s(e, "lastNumber")), v = u(s(e, "pills")), b = i(
      () => e.align === "fill" ? "start" : e.align
    ), B = it(s(b, "value")), m = i(
      () => Math.ceil(Ra(e.totalRows) / Ha(e.perPage))
    ), p = i(() => {
      let x;
      return m.value - e.modelValue + 2 < e.limit && e.limit > Fe ? x = m.value - w.value + 1 : x = e.modelValue - Math.floor(w.value / 2), x < 1 ? x = 1 : x > m.value - w.value && (x = m.value - w.value + 1), e.limit <= Fe && d.value && m.value === x + w.value - 1 && (x = Math.max(x - 1, 1)), x;
    }), V = i(() => {
      const x = m.value - e.modelValue;
      let T = false;
      return x + 2 < e.limit && e.limit > Fe ? e.limit > Fe && (T = true) : e.limit > Fe && (T = !!(!r.value || n.value)), p.value <= 1 && (T = false), T && n.value && p.value < 4 && (T = false), T;
    }), w = i(() => {
      let x = e.limit;
      return m.value <= e.limit ? x = m.value : e.modelValue < e.limit - 1 && e.limit > Fe ? ((!r.value || d.value) && (x = e.limit - (n.value ? 0 : 1)), x = Math.min(x, e.limit)) : m.value - e.modelValue + 2 < e.limit && e.limit > Fe ? (!r.value || n.value) && (x = e.limit - (d.value ? 0 : 1)) : e.limit > Fe && (x = e.limit - (r.value ? 0 : 2)), x;
    }), y = i(() => {
      const x = m.value - w.value;
      let T = false;
      e.modelValue < e.limit - 1 && e.limit > Fe ? (!r.value || d.value) && (T = true) : e.limit > Fe && (T = !!(!r.value || d.value)), p.value > x && (T = false);
      const O = p.value + w.value - 1;
      return T && d.value && O > m.value - 3 && (T = false), T;
    }), k = De({
      pageSize: Ha(e.perPage),
      totalRows: Ra(e.totalRows),
      numberOfPages: m.value
    }), h = (x, T) => {
      if (T === e.modelValue)
        return;
      const { target: O } = x, A = new Ue("page-click", {
        cancelable: true,
        target: O
      });
      t("page-click", A, T), !A.defaultPrevented && t("update:modelValue", T);
    }, S = i(() => e.size ? `pagination-${e.size}` : ""), I = i(() => v.value ? "b-pagination-pills" : "");
    de(
      () => e.modelValue,
      (x) => {
        const T = Lu(x, m.value);
        T !== e.modelValue && t("update:modelValue", T);
      }
    ), de(k, (x, T) => {
      x != null && (T.pageSize !== x.pageSize && T.totalRows === x.totalRows || T.numberOfPages !== x.numberOfPages && e.modelValue > T.numberOfPages) && t("update:modelValue", 1);
    });
    const F = i(() => {
      const x = [];
      for (let T = 0; T < w.value; T++)
        x.push({ number: p.value + T, classes: null });
      return x;
    });
    return () => {
      const x = [], T = F.value.map((K) => K.number), O = (K) => K === e.modelValue, A = e.modelValue < 1, C = e.align === "fill", L = (K, me, ae, pe, ye, ge) => {
        const ie = l.value || O(ge) || A || K < 1 || K > m.value, R = K < 1 ? 1 : K > m.value ? m.value : K, D = { disabled: ie, page: R, index: R - 1 }, X = Pe(ae, D, a) || pe || "";
        return le(
          "li",
          {
            class: [
              "page-item",
              {
                disabled: ie,
                "flex-fill": C,
                "d-flex": C && !ie
              },
              ye
            ]
          },
          le(
            ie ? "span" : "button",
            {
              class: ["page-link", { "flex-grow-1": !ie && C }],
              "aria-label": me,
              "aria-controls": e.ariaControls || null,
              "aria-disabled": ie ? "true" : null,
              role: "menuitem",
              type: ie ? null : "button",
              tabindex: ie ? null : "-1",
              onClick: (ne) => {
                ie || h(ne, R);
              }
            },
            X
          )
        );
      }, N = (K) => le(
        "li",
        {
          class: [
            "page-item",
            "disabled",
            "bv-d-xs-down-none",
            C ? "flex-fill" : "",
            e.ellipsisClass
          ],
          role: "separator",
          key: `ellipsis-${K ? "last" : "first"}`
        },
        [
          le(
            "span",
            { class: ["page-link"] },
            Pe(Ou, {}, a) || e.ellipsisText || "..."
          )
        ]
      ), te = (K, me) => {
        const ae = O(K.number) && !A, pe = l.value ? null : ae || A && me === 0 ? "0" : "-1", ye = {
          active: ae,
          disabled: l.value,
          page: K.number,
          index: K.number - 1,
          content: K.number
        }, ge = Pe(Fu, ye, a) || K.number, ie = le(
          l.value ? "span" : "button",
          {
            class: ["page-link", { "flex-grow-1": !l.value && C }],
            "aria-controls": e.ariaControls || null,
            "aria-disabled": l.value ? "true" : null,
            "aria-label": e.labelPage ? `${e.labelPage} ${K.number}` : null,
            role: "menuitemradio",
            type: l.value ? null : "button",
            tabindex: pe,
            onClick: (R) => {
              l.value || h(R, K.number);
            }
          },
          ge
        );
        return le(
          "li",
          {
            class: [
              "page-item",
              {
                disabled: l.value,
                active: ae,
                "flex-fill": C,
                "d-flex": C && !l.value
              },
              e.pageClass
            ],
            role: "presentation",
            key: `page-${K.number}`
          },
          ie
        );
      };
      if (!c.value && !n.value) {
        const K = L(
          1,
          e.labelFirstPage,
          xu,
          e.firstText,
          e.firstClass,
          1
        );
        x.push(K);
      }
      const Z = L(
        e.modelValue - 1,
        e.labelFirstPage,
        Eu,
        e.prevText,
        e.prevClass,
        1
      );
      x.push(Z), n.value && T[0] !== 1 && x.push(te({ number: 1 }, 0)), V.value && x.push(N(false)), F.value.forEach((K, me) => {
        const ae = V.value && n.value && T[0] !== 1 ? 1 : 0;
        x.push(te(K, me + ae));
      }), y.value && x.push(N(true)), d.value && T[T.length - 1] !== m.value && x.push(te({ number: m.value }, -1));
      const re = L(
        e.modelValue + 1,
        e.labelNextPage,
        Iu,
        e.nextText,
        e.nextClass,
        m.value
      );
      if (x.push(re), !d.value && !c.value) {
        const K = L(
          m.value,
          e.labelLastPage,
          Pu,
          e.lastText,
          e.lastClass,
          m.value
        );
        x.push(K);
      }
      return le(
        "ul",
        {
          class: ["pagination", S.value, B.value, I.value],
          role: "menubar",
          "aria-disabled": l.value,
          "aria-label": e.ariaLabel || null
        },
        x
      );
    };
  }
}), xe = /* @__PURE__ */ P({
  __name: "BPlaceholder",
  props: {
    tag: { default: "span" },
    width: null,
    cols: null,
    variant: null,
    size: null,
    animation: null
  },
  setup(e) {
    const t = e, a = i(
      () => t.width === void 0 ? void 0 : typeof t.width == "number" ? t.width.toString() : t.width.includes("%") ? t.width.replaceAll("%", "") : t.width
    ), l = i(
      () => t.cols === void 0 ? void 0 : typeof t.cols == "number" ? t.cols.toString() : t.cols
    ), n = i(() => ({
      [`col-${l.value}`]: l.value !== void 0 && a.value === void 0,
      [`bg-${t.variant}`]: t.variant !== void 0,
      [`placeholder-${t.size}`]: t.size !== void 0,
      [`placeholder-${t.animation}`]: t.animation !== void 0
    })), r = i(
      () => a.value === void 0 ? void 0 : `width: ${a.value}%;`
    );
    return (c, d) => (f(), z(Y(e.tag), {
      class: E(["placeholder", o(n)]),
      style: Ie(o(r))
    }, null, 8, ["class", "style"]));
  }
}), dn = /* @__PURE__ */ P({
  __name: "BPlaceholderButton",
  props: {
    tag: { default: "div" },
    width: null,
    cols: null,
    variant: { default: "primary" },
    animation: null
  },
  setup(e) {
    const t = e, a = i(() => ["btn", `btn-${t.variant}`, "disabled"]), l = i(() => ({
      animation: t.animation,
      width: t.width,
      cols: t.cols,
      tag: t.tag
    }));
    return (n, r) => (f(), z(xe, J({ class: o(a) }, o(l)), null, 16, ["class"]));
  }
}), Nu = /* @__PURE__ */ P({
  __name: "BPlaceholderCard",
  props: {
    noHeader: { default: false },
    headerWidth: { default: 100 },
    headerVariant: null,
    headerAnimation: null,
    headerSize: null,
    noFooter: { default: false },
    footerWidth: { default: 100 },
    footerVariant: null,
    footerAnimation: null,
    footerSize: null,
    animation: null,
    size: null,
    variant: null,
    noButton: { default: false },
    imgBottom: { default: false },
    imgSrc: null,
    imgBlankColor: { default: "#868e96" },
    imgHeight: { default: 100 },
    noImg: { default: false }
  },
  setup(e) {
    const t = e, a = u(s(t, "noButton")), l = u(s(t, "noHeader")), n = u(s(t, "noFooter")), r = u(s(t, "noImg")), c = i(() => ({
      width: t.headerWidth,
      variant: t.headerVariant,
      animation: t.headerAnimation,
      size: t.headerSize
    })), d = i(() => ({
      width: t.footerWidth,
      animation: t.footerAnimation,
      size: a.value ? t.footerSize : void 0,
      variant: t.footerVariant
    })), v = i(() => ({
      blank: !t.imgSrc,
      blankColor: t.imgBlankColor,
      height: t.imgSrc ? void 0 : t.imgHeight,
      src: t.imgSrc,
      top: !t.imgBottom,
      bottom: t.imgBottom
    }));
    return (b, B) => (f(), z(Wl, { "img-bottom": e.imgBottom }, ll({
      default: H(() => [
        $(b.$slots, "default", {}, () => [
          fe(xe, { cols: "7" }),
          fe(xe, { cols: "4" }),
          fe(xe, { cols: "4" }),
          fe(xe, { cols: "6" }),
          fe(xe, { cols: "8" })
        ])
      ]),
      _: 2
    }, [
      o(r) ? void 0 : {
        name: "img",
        fn: H(() => [
          $(b.$slots, "img", {}, () => [
            fe(Ct, he(Ce(o(v))), null, 16)
          ])
        ]),
        key: "0"
      },
      o(l) ? void 0 : {
        name: "header",
        fn: H(() => [
          $(b.$slots, "header", {}, () => [
            fe(xe, he(Ce(o(c))), null, 16)
          ])
        ]),
        key: "1"
      },
      o(n) ? void 0 : {
        name: "footer",
        fn: H(() => [
          $(b.$slots, "footer", {}, () => [
            o(a) ? (f(), z(xe, he(J({ key: 1 }, o(d))), null, 16)) : (f(), z(dn, he(J({ key: 0 }, o(d))), null, 16))
          ])
        ]),
        key: "2"
      }
    ]), 1032, ["img-bottom"]));
  }
}), xt = /* @__PURE__ */ P({
  __name: "BTableSimple",
  props: {
    bordered: { default: false },
    borderless: { default: false },
    borderVariant: null,
    captionTop: { default: false },
    dark: { default: false },
    hover: { default: false },
    responsive: { type: [Boolean, String], default: false },
    stacked: { type: [Boolean, String], default: false },
    striped: { default: false },
    small: { default: false },
    tableClass: null,
    tableVariant: null,
    stickyHeader: { default: false }
  },
  setup(e) {
    const t = e, a = u(s(t, "captionTop")), l = u(s(t, "borderless")), n = u(s(t, "bordered")), r = u(s(t, "dark")), c = u(s(t, "hover")), d = u(s(t, "small")), v = u(s(t, "striped")), b = u(s(t, "stickyHeader")), B = i(() => [
      "table",
      "b-table",
      {
        "table-bordered": n.value,
        "table-borderless": l.value,
        [`border-${t.borderVariant}`]: t.borderVariant !== void 0,
        "caption-top": a.value,
        "table-dark": r.value,
        "table-hover": c.value,
        "b-table-stacked": typeof t.stacked == "boolean" && t.stacked,
        [`b-table-stacked-${t.stacked}`]: typeof t.stacked == "string",
        "table-striped": v.value,
        "table-sm": d.value,
        [`table-${t.tableVariant}`]: t.tableVariant !== void 0
      },
      t.tableClass
    ]), m = i(() => [
      {
        "table-responsive": t.responsive === true,
        [`table-responsive-${t.responsive}`]: typeof t.responsive == "string",
        "b-table-sticky-header": b.value
      }
    ]);
    return (p, V) => e.responsive ? (f(), g("div", {
      key: 1,
      class: E(o(m))
    }, [
      M("table", {
        role: "table",
        class: E(o(B))
      }, [
        $(p.$slots, "default")
      ], 2)
    ], 2)) : (f(), g("table", {
      key: 0,
      role: "table",
      class: E(o(B))
    }, [
      $(p.$slots, "default")
    ], 2));
  }
}), Du = /* @__PURE__ */ P({
  __name: "BPlaceholderTable",
  props: {
    rows: { default: 3 },
    columns: { default: 5 },
    cellWidth: { default: 100 },
    size: null,
    animation: null,
    variant: null,
    headerColumns: null,
    hideHeader: { default: false },
    headerCellWidth: { default: 100 },
    headerSize: null,
    headerAnimation: null,
    headerVariant: null,
    footerColumns: null,
    showFooter: { default: false },
    footerCellWidth: { default: 100 },
    footerSize: null,
    footerAnimation: null,
    footerVariant: null
  },
  setup(e) {
    const t = e, a = i(
      () => typeof t.columns == "string" ? lt(t.columns, 5) : t.columns
    ), l = i(
      () => typeof t.rows == "string" ? lt(t.rows, 3) : t.rows
    ), n = i(
      () => t.headerColumns === void 0 ? a.value : typeof t.headerColumns == "string" ? lt(t.headerColumns, a.value) : t.headerColumns
    ), r = i(
      () => t.footerColumns === void 0 ? a.value : typeof t.footerColumns == "string" ? lt(t.footerColumns, a.value) : t.footerColumns
    ), c = i(() => ({
      size: t.size,
      variant: t.variant,
      animation: t.animation,
      width: t.cellWidth
    })), d = i(() => ({
      size: t.headerSize,
      variant: t.headerVariant,
      animation: t.headerAnimation,
      width: t.headerCellWidth
    })), v = i(() => ({
      size: t.footerSize,
      variant: t.footerVariant,
      animation: t.footerAnimation,
      width: t.footerCellWidth
    })), b = u(s(t, "hideHeader")), B = u(s(t, "showFooter"));
    return (m, p) => (f(), z(xt, null, {
      default: H(() => [
        o(b) ? W("", true) : $(m.$slots, "thead", { key: 0 }, () => [
          M("thead", null, [
            M("tr", null, [
              (f(true), g(oe, null, ve(o(n), (V, w) => (f(), g("th", { key: w }, [
                fe(xe, he(Ce(o(d))), null, 16)
              ]))), 128))
            ])
          ])
        ]),
        $(m.$slots, "default", {}, () => [
          M("tbody", null, [
            (f(true), g(oe, null, ve(o(l), (V, w) => (f(), g("tr", { key: w }, [
              (f(true), g(oe, null, ve(o(a), (y, k) => (f(), g("td", { key: k }, [
                fe(xe, he(Ce(o(c))), null, 16)
              ]))), 128))
            ]))), 128))
          ])
        ]),
        o(B) ? $(m.$slots, "tfoot", { key: 1 }, () => [
          M("tfoot", null, [
            M("tr", null, [
              (f(true), g(oe, null, ve(o(r), (V, w) => (f(), g("th", { key: w }, [
                fe(xe, he(Ce(o(v))), null, 16)
              ]))), 128))
            ])
          ])
        ]) : W("", true)
      ]),
      _: 3
    }));
  }
}), Hu = /* @__PURE__ */ P({
  __name: "BPlaceholderWrapper",
  props: {
    loading: { default: false }
  },
  setup(e) {
    const a = u(s(e, "loading"));
    return (l, n) => o(a) ? $(l.$slots, "loading", { key: 0 }) : $(l.$slots, "default", { key: 1 });
  }
}), Ru = P({
  props: {
    container: {
      type: [String, Object],
      default: "body"
    },
    content: { type: String },
    id: { type: String },
    customClass: { type: String, default: "" },
    noninteractive: { type: [Boolean, String], default: false },
    placement: { type: String, default: "right" },
    target: {
      type: [String, Object],
      default: void 0
    },
    title: { type: String },
    delay: { type: [Number, Object], default: 0 },
    triggers: { type: String, default: "click" },
    show: { type: [Boolean, String], default: false },
    variant: { type: String, default: void 0 },
    html: { type: [Boolean, String], default: true },
    sanitize: { type: [Boolean, String], default: false },
    offset: { type: String, default: "0" }
  },
  emits: ["show", "shown", "hide", "hidden", "inserted"],
  setup(e, { emit: t, slots: a }) {
    u(s(e, "noninteractive"));
    const l = u(s(e, "show")), n = u(s(e, "html")), r = u(s(e, "sanitize")), c = U(), d = U(), v = U(), b = U(), B = U(), m = i(() => ({
      [`b-popover-${e.variant}`]: e.variant !== void 0
    })), p = (S) => {
      if (typeof S == "string")
        return S;
      if (S instanceof HTMLElement)
        return S;
      if (typeof S < "u")
        return S.$el;
    }, V = (S) => {
      if (!!S) {
        if (typeof S == "string") {
          const I = document.getElementById(S);
          return I || void 0;
        }
        return S;
      }
    }, w = [
      { event: "show.bs.popover", handler: () => t("show") },
      { event: "shown.bs.popover", handler: () => t("shown") },
      { event: "hide.bs.popover", handler: () => t("hide") },
      { event: "hidden.bs.popover", handler: () => t("hidden") },
      { event: "inserted.bs.popover", handler: () => t("inserted") }
    ], y = (S) => {
      for (const I of w)
        S.addEventListener(I.event, I.handler);
    }, k = (S) => {
      for (const I of w)
        S.removeEventListener(I.event, I.handler);
    }, h = (S) => {
      d.value = V(p(S)), d.value && (y(d.value), v.value = new Popover(d.value, {
        customClass: e.customClass,
        container: p(e.container),
        trigger: e.triggers,
        placement: e.placement,
        title: e.title || a.title ? b.value : "",
        content: B.value,
        html: n.value,
        delay: e.delay,
        sanitize: r.value,
        offset: e.offset
      }));
    };
    return de(
      () => e.target,
      (S) => {
        var I;
        (I = v.value) == null || I.dispose(), d.value instanceof HTMLElement && k(d.value), h(S);
      }
    ), de(
      () => l.value,
      (S, I) => {
        var F, x;
        S !== I && (S ? (F = v.value) == null || F.show() : (x = v.value) == null || x.hide());
      }
    ), Be(() => {
      var S, I, F;
      Ee(() => {
        h(e.target);
      }), (I = (S = c.value) == null ? void 0 : S.parentNode) == null || I.removeChild(c.value), l.value && ((F = v.value) == null || F.show());
    }), Zt(() => {
      var S;
      (S = v.value) == null || S.dispose(), d.value instanceof HTMLElement && k(d.value);
    }), {
      element: c,
      titleRef: b,
      contentRef: B,
      computedClasses: m
    };
  }
}), ju = ["id"], Mu = { ref: "titleRef" }, qu = { ref: "contentRef" };
function Gu(e, t, a, l, n, r) {
  return f(), g("div", {
    id: e.id,
    ref: "element",
    class: E(["popover b-popover", e.computedClasses]),
    role: "tooltip",
    tabindex: "-1"
  }, [
    M("div", Mu, [
      $(e.$slots, "title", {}, () => [
        ee(G(e.title), 1)
      ])
    ], 512),
    M("div", qu, [
      $(e.$slots, "default", {}, () => [
        ee(G(e.content), 1)
      ])
    ], 512)
  ], 10, ju);
}
const Uu = /* @__PURE__ */ Te(Ru, [["render", Gu]]), Wu = ["aria-valuenow", "aria-valuemax"], cn = /* @__PURE__ */ P({
  __name: "BProgressBar",
  props: {
    animated: { default: false },
    label: null,
    labelHtml: null,
    max: null,
    precision: { default: 0 },
    showProgress: { default: false },
    showValue: { default: false },
    striped: { default: false },
    value: { default: 0 },
    variant: null
  },
  setup(e) {
    const t = e, a = He(fn2), l = u(s(t, "animated")), n = u(s(t, "showProgress")), r = u(s(t, "showValue")), c = u(s(t, "striped")), d = i(() => ({
      "progress-bar-animated": l.value || (a == null ? void 0 : a.animated),
      "progress-bar-striped": c.value || (a == null ? void 0 : a.striped) || l.value || (a == null ? void 0 : a.animated),
      [`bg-${t.variant}`]: t.variant !== void 0
    })), v = i(
      () => typeof t.precision == "number" ? t.precision : Number.parseFloat(t.precision)
    ), b = i(
      () => typeof t.value == "number" ? t.value : Number.parseFloat(t.value)
    ), B = i(
      () => typeof t.max == "number" ? t.max : t.max === void 0 ? void 0 : Number.parseFloat(t.max)
    ), m = i(
      () => t.labelHtml !== void 0 ? t.labelHtml : r.value || (a == null ? void 0 : a.showValue) ? b.value.toFixed(v.value) : n.value || (a == null ? void 0 : a.showProgress) ? (b.value * 100 / (B.value || 100)).toFixed(v.value) : t.label !== void 0 ? t.label : ""
    ), p = i(
      () => a != null && a.max ? `${b.value * 100 / (typeof a.max == "number" ? a.max : Number.parseInt(a.max))}%` : t.max ? `${b.value * 100 / (typeof t.max == "number" ? t.max : Number.parseInt(t.max))}%` : typeof t.value == "string" ? t.value : `${t.value}%`
    );
    return (V, w) => (f(), g("div", {
      class: E(["progress-bar", o(d)]),
      role: "progressbar",
      "aria-valuenow": e.value,
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      style: Ie({ width: o(p) })
    }, [
      $(V.$slots, "default", {}, () => [
        ee(G(o(m)), 1)
      ])
    ], 14, Wu));
  }
}), fn2 = Symbol(), Ku = /* @__PURE__ */ P({
  __name: "BProgress",
  props: {
    variant: null,
    max: null,
    height: null,
    animated: { default: false },
    precision: { default: 0 },
    showProgress: { default: false },
    showValue: { default: false },
    striped: { default: false },
    value: { default: 0 }
  },
  setup(e) {
    const t = e, a = u(s(t, "animated")), l = u(s(t, "showProgress")), n = u(s(t, "showValue")), r = u(s(t, "striped")), c = i(() => ({
      animated: t.animated,
      max: t.max,
      precision: t.precision,
      showProgress: t.showProgress,
      showValue: t.showValue,
      striped: t.striped,
      value: t.value,
      variant: t.variant
    }));
    return et(fn2, {
      animated: a.value,
      max: t.max,
      showProgress: l.value,
      showValue: n.value,
      striped: r.value
    }), (d, v) => (f(), g("div", {
      class: "progress",
      style: Ie({ height: e.height })
    }, [
      $(d.$slots, "default", {}, () => [
        fe(cn, he(Ce(o(c))), null, 16)
      ])
    ], 4));
  }
}), ja = Tt("cols", [""], { type: [String, Number], default: null }), Xu = P({
  name: "BRow",
  props: {
    tag: { type: String, default: "div" },
    gutterX: { type: String, default: null },
    gutterY: { type: String, default: null },
    noGutters: { type: [Boolean, String], default: false },
    alignV: { type: String, default: null },
    alignH: { type: String, default: null },
    alignContent: { type: String, default: null },
    ...ja
  },
  setup(e) {
    const t = u(s(e, "noGutters")), a = it(s(e, "alignH")), l = i(() => kl(e, ja, "cols", "row-cols"));
    return {
      computedClasses: i(() => [
        l.value,
        {
          [`gx-${e.gutterX}`]: e.gutterX !== null,
          [`gy-${e.gutterY}`]: e.gutterY !== null,
          "g-0": t.value,
          [`align-items-${e.alignV}`]: e.alignV !== null,
          [a.value]: e.alignH !== null,
          [`align-content-${e.alignContent}`]: e.alignContent !== null
        }
      ])
    };
  }
});
function Ju(e, t, a, l, n, r) {
  return f(), z(Y(e.tag), {
    class: E(["row", e.computedClasses])
  }, {
    default: H(() => [
      $(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const Qu = /* @__PURE__ */ Te(Xu, [["render", Ju]]), gt = /* @__PURE__ */ P({
  __name: "BSkeleton",
  props: {
    height: null,
    width: null,
    size: null,
    animation: { default: "wave" },
    type: { default: "text" },
    variant: null
  },
  setup(e) {
    const t = e, a = i(() => [
      `b-skeleton-${t.type}`,
      {
        [`b-skeleton-animate-${t.animation}`]: typeof t.animation == "boolean" ? false : t.animation,
        [`bg-${t.variant}`]: t.variant !== void 0
      }
    ]), l = i(() => ({
      width: t.size || t.width,
      height: t.size || t.height
    }));
    return (n, r) => (f(), g("div", {
      class: E(["b-skeleton", o(a)]),
      style: Ie(o(l))
    }, null, 6));
  }
}), Yu = /* @__PURE__ */ P({
  __name: "BSkeletonIcon",
  props: {
    animation: { default: "wave" }
  },
  setup(e) {
    const t = e, a = i(() => [`b-skeleton-animate-${t.animation}`]);
    return (l, n) => (f(), g("div", {
      class: E(["b-skeleton-icon-wrapper position-relative d-inline-block overflow-hidden", o(a)])
    }, [
      $(l.$slots, "default")
    ], 2));
  }
}), Zu = { key: 0 }, ed = { key: 1 }, td = /* @__PURE__ */ P({
  __name: "BSkeletonTable",
  props: {
    animation: { default: "wave" },
    columns: { default: 5 },
    hideHeader: { default: false },
    rows: { default: 3 },
    showFooter: { default: false },
    tableProps: null
  },
  setup(e) {
    const t = e, a = u(s(t, "hideHeader")), l = u(s(t, "showFooter"));
    return (n, r) => (f(), z(xt, he(Ce(e.tableProps)), {
      default: H(() => [
        o(a) ? W("", true) : (f(), g("thead", Zu, [
          M("tr", null, [
            (f(true), g(oe, null, ve(e.columns, (c, d) => (f(), g("th", { key: d }, [
              fe(gt)
            ]))), 128))
          ])
        ])),
        M("tbody", null, [
          (f(true), g(oe, null, ve(e.rows, (c, d) => (f(), g("tr", { key: d }, [
            (f(true), g(oe, null, ve(e.columns, (v, b) => (f(), g("td", { key: b }, [
              fe(gt, { width: "75%" })
            ]))), 128))
          ]))), 128))
        ]),
        o(l) ? (f(), g("tfoot", ed, [
          M("tr", null, [
            (f(true), g(oe, null, ve(e.columns, (c, d) => (f(), g("th", { key: d }, [
              fe(gt)
            ]))), 128))
          ])
        ])) : W("", true)
      ]),
      _: 1
    }, 16));
  }
}), ad = /* @__PURE__ */ P({
  __name: "BSkeletonWrapper",
  props: {
    loading: { default: false }
  },
  setup(e) {
    const a = u(s(e, "loading"));
    return (l, n) => o(a) ? $(l.$slots, "loading", { key: 0 }) : $(l.$slots, "default", { key: 1 });
  }
}), Ma = [
  "ar",
  "az",
  "ckb",
  "fa",
  "he",
  "ks",
  "lrc",
  "mzn",
  "ps",
  "sd",
  "te",
  "ug",
  "ur",
  "yi"
].map((e) => e.toLowerCase()), ld = (e) => {
  const t = $t(e).toLowerCase().replace(Lo, "").split("-"), a = t.slice(0, 2).join("-"), l = t[0];
  return Ma.includes(a) || Ma.includes(l);
}, nd = (e) => Ro ? jt(e) ? e : { capture: !!e || false } : !!(jt(e) ? e.capture : e), od = (e, t, a, l) => {
  e && e.addEventListener && e.addEventListener(t, a, nd(l));
}, sd = (e, t, a, l) => {
  e && e.removeEventListener && e.removeEventListener(t, a, l);
}, qa = (e, t) => {
  (e ? od : sd)(...t);
}, ft = (e, { preventDefault: t = true, propagation: a = true, immediatePropagation: l = false } = {}) => {
  t && e.preventDefault(), a && e.stopPropagation(), l && e.stopImmediatePropagation();
}, Qt = "ArrowDown", vn = "End", mn = "Home", bn = "PageDown", pn = "PageUp", Yt = "ArrowUp", Ga = 1, Ua = 100, Wa = 1, Ka = 500, Xa = 100, Ja = 10, Qa = 4, Ya = [Yt, Qt, mn, vn, pn, bn], rd = P({
  props: {
    ariaControls: { type: String, required: false },
    ariaLabel: { type: String, required: false },
    labelIncrement: { type: String, default: "Increment" },
    labelDecrement: { type: String, default: "Decrement" },
    modelValue: { type: Number, default: null },
    name: { type: String, default: "BFormSpinbutton" },
    disabled: { type: [Boolean, String], default: false },
    placeholder: { type: String, required: false },
    locale: { type: String, default: "locale" },
    form: { type: String, required: false },
    inline: { type: Boolean, default: false },
    size: { type: String, required: false },
    formatterFn: {
      type: Function
    },
    readonly: { type: Boolean, default: false },
    vertical: { type: Boolean, default: false },
    repeatDelay: {
      type: [String, Number],
      default: Ka
    },
    repeatInterval: {
      type: [String, Number],
      default: Xa
    },
    repeatStepMultiplier: {
      type: [String, Number],
      default: Qa
    },
    repeatThreshold: {
      type: [String, Number],
      default: Ja
    },
    required: { type: [Boolean, String], default: false },
    step: { type: [String, Number], default: Wa },
    min: { type: [String, Number], default: Ga },
    max: { type: [String, Number], default: Ua },
    wrap: { type: Boolean, default: false },
    state: { type: [Boolean, String], default: null }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const a = U(false), l = i(() => 1), n = () => {
      t("change", c.value);
    }, r = U(null), c = i({
      get() {
        return ze(e.modelValue) ? r.value : e.modelValue;
      },
      set(R) {
        ze(e.modelValue) ? r.value = R : t("update:modelValue", R);
      }
    });
    let d, v, b = false;
    const B = i(() => ot(e.step, Wa)), m = i(() => ot(e.min, Ga)), p = i(() => {
      const R = ot(e.max, Ua), D = B.value, X = m.value;
      return Math.floor((R - X) / D) * D + X;
    }), V = i(() => {
      const R = je(e.repeatDelay, 0);
      return R > 0 ? R : Ka;
    }), w = i(() => {
      const R = je(e.repeatInterval, 0);
      return R > 0 ? R : Xa;
    }), y = i(
      () => Math.max(je(e.repeatThreshold, Ja), 1)
    ), k = i(
      () => Math.max(je(e.repeatStepMultiplier, Qa), 1)
    ), h = i(() => {
      const R = B.value;
      return Math.floor(R) === R ? 0 : (R.toString().split(".")[1] || "").length;
    }), S = i(() => Math.pow(10, h.value || 0)), I = i(() => {
      const { value: R } = c;
      return R === null ? "" : R.toFixed(h.value);
    }), F = i(() => {
      const R = [e.locale];
      return new Intl.NumberFormat(R).resolvedOptions().locale;
    }), x = i(
      () => ld(F.value)
    ), T = () => {
      const R = h.value;
      return new Intl.NumberFormat(F.value, {
        style: "decimal",
        useGrouping: false,
        minimumIntegerDigits: 1,
        minimumFractionDigits: R,
        maximumFractionDigits: R,
        notation: "standard"
      }).format;
    }, O = i(
      () => e.formatterFn ? e.formatterFn : T()
    ), A = i(() => ({
      role: "group",
      lang: F.value,
      tabindex: e.disabled ? null : "-1",
      title: e.ariaLabel
    })), C = i(() => !ze(e.modelValue) || !ze(r.value)), L = i(() => ({
      dir: x.value,
      spinId: l.value,
      tabindex: e.disabled ? null : "0",
      role: "spinbutton",
      "aria-live": "off",
      "aria-label": e.ariaLabel || null,
      "aria-controls": e.ariaControls || null,
      "aria-invalid": e.state === false || !C.value && e.required ? "true" : null,
      "aria-required": e.required ? "true" : null,
      "aria-valuemin": m.value,
      "aria-valuemax": p.value,
      "aria-valuenow": ze(c.value) ? null : c.value,
      "aria-valuetext": ze(c.value) ? null : O.value(c.value)
    })), N = (R) => {
      let { value: D } = c;
      if (!e.disabled && !ze(D)) {
        const X = B.value * R, ne = m.value, Q = p.value, se = S.value, { wrap: we } = e;
        D = Math.round((D - ne) / X) * X + ne + X, D = Math.round(D * se) / se, c.value = D > Q ? we ? ne : Q : D < ne ? we ? Q : ne : D;
      }
    }, te = (R = 1) => {
      ze(c.value) ? c.value = m.value : N(1 * R);
    }, Z = (R = 1) => {
      ze(c.value) ? c.value = e.wrap ? p.value : m.value : N(-1 * R);
    }, re = (R) => {
      const { code: D, altKey: X, ctrlKey: ne, metaKey: Q } = R;
      if (!(e.disabled || e.readonly || X || ne || Q) && Ya.includes(D)) {
        if (ft(R, { propagation: false }), b)
          return;
        ge(), [Yt, Qt].includes(D) ? (b = true, D === Yt ? me(R, te) : D === Qt && me(R, Z)) : D === pn ? te(k.value) : D === bn ? Z(k.value) : D === mn ? c.value = m.value : D === vn && (c.value = p.value);
      }
    }, K = (R) => {
      const { code: D, altKey: X, ctrlKey: ne, metaKey: Q } = R;
      e.disabled || e.readonly || X || ne || Q || Ya.includes(D) && (ft(R, { propagation: false }), ge(), b = false, n());
    }, me = (R, D) => {
      const { type: X } = R || {};
      if (!e.disabled && !e.readonly) {
        if (ae(R) && X === "mousedown" && R.button)
          return;
        ge(), D(1);
        const ne = y.value, Q = k.value, se = V.value, we = w.value;
        d = setTimeout(() => {
          let Ke = 0;
          v = setInterval(() => {
            D(Ke < ne ? 1 : Q), Ke++;
          }, we);
        }, se);
      }
    };
    function ae(R) {
      return R.type === "mouseup" || R.type === "mousedown";
    }
    const pe = (R) => {
      ae(R) && R.type === "mouseup" && R.button || (ft(R, { propagation: false }), ge(), ye(false), n());
    }, ye = (R) => {
      try {
        qa(R, [document.body, "mouseup", pe, false]), qa(R, [document.body, "touchend", pe, false]);
      } catch {
        return 0;
      }
    }, ge = () => {
      clearTimeout(d), clearInterval(v), d = void 0, v = void 0;
    }, ie = (R, D, X, ne, Q, se, we) => {
      const Ke = le(X, {
        props: { scale: a.value ? 1.5 : 1.25 },
        attrs: { "aria-hidden": "true" }
      }), Pt = { hasFocus: a.value }, dt = (Re) => {
        !e.disabled && !e.readonly && (ft(Re, { propagation: false }), ye(true), me(Re, R));
      };
      return le(
        "button",
        {
          class: [{ "py-0": !e.vertical }, "btn", "btn-sm", "border-0", "rounded-0"],
          tabindex: "-1",
          type: "button",
          disabled: e.disabled || e.readonly || se,
          "aria-disabled": e.disabled || e.readonly || se ? "true" : null,
          "aria-controls": l.value,
          "aria-label": D || null,
          "aria-keyshortcuts": Q || null,
          onmousedown: dt,
          ontouchstart: dt
        },
        [Pe(we, Pt) || Ke]
      );
    };
    return () => {
      const R = ie(
        te,
        e.labelIncrement,
        le(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            class: "bi bi-plus",
            viewBox: "0 0 16 16"
          },
          le("path", {
            d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
          })
        ),
        "inc",
        "ArrowUp",
        false,
        "increment"
      ), D = ie(
        Z,
        e.labelDecrement,
        le(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            class: "bi bi-dash",
            viewBox: "0 0 16 16"
          },
          le("path", { d: "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" })
        ),
        "dec",
        "ArrowDown",
        false,
        "decrement"
      ), X = [];
      e.name && !e.disabled && X.push(
        le("input", {
          type: "hidden",
          name: e.name,
          form: e.form || null,
          value: I.value,
          key: "hidden"
        })
      );
      const ne = le(
        "output",
        {
          class: [
            { "d-flex": e.vertical },
            { "align-self-center": !e.vertical },
            { "align-items-center": e.vertical },
            { "border-top": e.vertical },
            { "border-bottom": e.vertical },
            { "border-start": !e.vertical },
            { "border-end": !e.vertical },
            "flex-grow-1"
          ],
          ...L.value,
          key: "output"
        },
        [
          le(
            "bdi",
            C.value ? O.value(c.value) : e.placeholder || ""
          )
        ]
      );
      return le(
        "div",
        {
          class: [
            "b-form-spinbutton form-control",
            { disabled: e.disabled },
            { readonly: e.readonly },
            { focus: a },
            { "d-inline-flex": e.inline || e.vertical },
            { "d-flex": !e.inline && !e.vertical },
            { "align-items-stretch": !e.vertical },
            { "flex-column": e.vertical },
            e.size ? `form-control-${e.size}` : null
          ],
          ...A.value,
          onkeydown: re,
          onkeyup: K
        },
        e.vertical ? [R, X, ne, D] : [D, X, ne, R]
      );
    };
  }
}), id = ["TD", "TH", "TR"], ud = [
  "a",
  "a *",
  "button",
  "button *",
  "input:not(.disabled):not([disabled])",
  "select:not(.disabled):not([disabled])",
  "textarea:not(.disabled):not([disabled])",
  '[role="link"]',
  '[role="link"] *',
  '[role="button"]',
  '[role="button"] *',
  "[tabindex]:not(.disabled):not([disabled])"
].join(","), vt = (e) => {
  if (!e || !e.target)
    return false;
  const t = e.target;
  if ("disabled" in t && t.disabled || id.indexOf(t.tagName) !== -1)
    return false;
  if (_a(".dropdown-menu", t))
    return true;
  const a = t.tagName === "LABEL" ? t : _a("label", t);
  if (a) {
    const l = la(a, "for"), n = l ? Qo(l) : $l("input, select, textarea", a);
    if (n && !n.disabled)
      return true;
  }
  return Sl(t, ud);
}, dd = () => {
  const e = (b, B) => {
    const m = [];
    return !(b != null && b.length) && (B == null ? void 0 : B.length) ? (Object.keys(B[0]).forEach((p) => m.push({ key: p, label: ka(p) })), m) : (Array.isArray(b) && b.forEach((p) => {
      typeof p == "string" ? m.push({ key: p, label: ka(p) }) : jt(p) && p.key && typeof p.key == "string" && m.push({ ...p });
    }), m);
  }, t = U([]), a = (b, B, m, p) => (t.value = St(B), "isFilterableTable" in p && p.isFilterableTable.value === true && m.filter && (t.value = r(t.value, m.filter, m.filterable)), "isSortable" in p && p.isSortable.value === true && (t.value = n(
    b,
    t.value,
    {
      key: m.sortBy,
      desc: p.sortDescBoolean.value
    },
    m.sortCompare
  )), t.value), l = U(void 0), n = (b, B, m, p) => {
    if (!m || !m.key)
      return B;
    const V = m.key;
    return B.sort((w, y) => {
      if (p !== void 0)
        return p(w, y, m.key, m.desc);
      const k = (I) => typeof I == "object" ? JSON.stringify(I) : I;
      return k(w[V]) > k(y[V]) ? m.desc ? -1 : 1 : k(y[V]) > k(w[V]) ? m.desc ? 1 : -1 : 0;
    });
  }, r = (b, B, m) => b.filter(
    (p) => Object.entries(p).filter((V) => {
      const [w, y] = V;
      return !y || w[0] === "_" || m.length > 0 && !m.includes(w) ? false : (typeof y == "object" ? JSON.stringify(Object.values(y)) : typeof y == "string" ? y : y.toString()).toLowerCase().includes(B.toLowerCase());
    }).length > 0
  );
  return {
    normaliseFields: e,
    mapItems: a,
    internalItems: t,
    updateInternalItems: async (b) => {
      try {
        return t.value = await qt(b), t.value;
      } catch {
        return;
      }
    },
    filterEvent: l,
    notifyFilteredItems: () => {
      l.value && l.value(t.value);
    },
    formatItem: (b, B) => {
      const m = b[B.key];
      return B.formatter && typeof B.formatter == "function" ? B.formatter(m, B.key, b) : b[B.key];
    }
  };
}, cd = ["title", "abbr", "onClick"], fd = { class: "d-inline-flex flex-nowrap align-items-center gap-1" }, vd = { key: 1 }, md = ["onClick", "onDblclick", "onMouseenter", "onMouseleave"], bd = {
  key: 0,
  class: "b-table-stacked-label"
}, pd = ["colspan"], gd = ["colspan"], hd = { class: "d-flex align-items-center justify-content-center gap-2" }, yd = /* @__PURE__ */ M("strong", null, "Loading...", -1), Bd = {
  key: 1,
  class: "b-table-empty-slot"
}, $d = ["colspan"], Sd = { key: 0 }, kd = ["title", "abbr", "onClick"], Cd = { key: 1 }, wd = { key: 2 }, _d = { key: 3 }, Td = /* @__PURE__ */ P({
  __name: "BTable",
  props: {
    align: null,
    caption: null,
    captionTop: { default: false },
    borderless: { default: false },
    bordered: { default: false },
    borderVariant: null,
    dark: { default: false },
    fields: { default: () => [] },
    footClone: { default: false },
    hover: { default: false },
    items: { default: () => [] },
    provider: null,
    sortCompare: null,
    noProvider: null,
    noProviderPaging: null,
    noProviderSorting: null,
    noProviderFiltering: null,
    responsive: { type: [Boolean, String], default: false },
    small: { default: false },
    striped: { default: false },
    stacked: { type: [Boolean, String], default: false },
    labelStacked: { type: Boolean, default: false },
    variant: null,
    sortBy: null,
    sortDesc: { default: false },
    sortInternal: { default: true },
    selectable: { default: false },
    stickySelect: { default: false },
    selectHead: { type: [Boolean, String], default: true },
    selectMode: { default: "single" },
    selectionVariant: { default: "primary" },
    stickyHeader: { default: false },
    busy: { default: false },
    showEmpty: { default: false },
    perPage: null,
    currentPage: { default: 1 },
    filter: null,
    filterable: null,
    emptyText: { default: "There are no records to show" },
    emptyFilteredText: { default: "There are no records matching your request" }
  },
  emits: ["headClicked", "rowClicked", "rowDblClicked", "rowHovered", "rowUnhovered", "rowSelected", "rowUnselected", "selection", "update:busy", "update:sortBy", "update:sortDesc", "sorted", "filtered"],
  setup(e, { expose: t, emit: a }) {
    const l = e, n = Se(), r = dd(), c = u(s(l, "footClone")), d = u(s(l, "sortDesc")), v = u(s(l, "sortInternal")), b = u(s(l, "selectable")), B = u(s(l, "stickySelect")), m = u(s(l, "labelStacked")), p = u(s(l, "busy")), V = u(s(l, "showEmpty")), w = u(s(l, "noProviderPaging")), y = u(s(l, "noProviderSorting")), k = u(s(l, "noProviderFiltering")), h = U(p.value);
    r.filterEvent.value = async (_) => {
      if (C.value) {
        await D();
        return;
      }
      const q = await qt(_);
      a("filtered", q);
    };
    const S = U(/* @__PURE__ */ new Set([])), I = i(() => S.value.size > 0), F = i(() => ({
      [`align-${l.align}`]: l.align !== void 0,
      "b-table-selectable": b.value,
      [`b-table-select-${l.selectMode}`]: b.value,
      "b-table-selecting user-select-none": b.value && I.value,
      "b-table-busy": h.value,
      "b-table-sortable": N.value,
      "b-table-sort-desc": N.value && d.value === true,
      "b-table-sort-asc": N.value && d.value === false
    })), x = i(() => ({
      bordered: l.bordered,
      borderless: l.borderless,
      borderVariant: l.borderVariant,
      captionTop: l.captionTop,
      dark: l.dark,
      hover: l.hover,
      responsive: l.responsive,
      striped: l.striped,
      stacked: l.stacked,
      small: l.small,
      tableClass: F.value,
      tableVariant: l.variant,
      stickyHeader: l.stickyHeader
    })), T = i(() => r.normaliseFields(l.fields, l.items)), O = i(
      () => T.value.length + (b.value ? 1 : 0)
    ), A = i(() => l.filter !== void 0 && l.filter !== ""), C = i(() => l.provider !== void 0), L = i(
      () => b.value && (!!l.selectHead || n.selectHead !== void 0)
    ), N = i(
      () => l.fields.filter((_) => typeof _ == "string" ? false : _.sortable).length > 0
    ), te = i(() => N.value && v.value === true), Z = i(() => {
      const _ = C.value ? r.internalItems.value : te.value ? r.mapItems(l.fields, l.items, l, {
        isSortable: N,
        isFilterableTable: A,
        sortDescBoolean: d
      }) : l.items;
      if (l.perPage !== void 0) {
        const q = (l.currentPage - 1) * l.perPage;
        return _.splice(q, l.perPage);
      }
      return _;
    }), re = (_) => typeof _ == "string" ? Ca(_) : _.label !== void 0 ? _.label : typeof _.key == "string" ? Ca(_.key) : _.key, K = (_, q, ue = false) => {
      const j = typeof _ == "string" ? _ : _.key;
      a("headClicked", j, _, q, ue), ge(_);
    }, me = (_, q, ue) => {
      a("rowClicked", _, q, ue), R(_, q, ue.shiftKey);
    }, ae = (_, q, ue) => a("rowDblClicked", _, q, ue), pe = (_, q, ue) => a("rowHovered", _, q, ue), ye = (_, q, ue) => a("rowUnhovered", _, q, ue), ge = (_) => {
      if (!N.value)
        return;
      const q = typeof _ == "string" ? _ : _.key, ue = typeof _ == "string" ? false : _.sortable;
      if (N.value === true && ue === true) {
        const j = !d.value;
        q !== l.sortBy && a("update:sortBy", q), a("update:sortDesc", j), a("sorted", q, j);
      }
    }, ie = () => {
      !b.value || a("selection", Array.from(S.value));
    }, R = (_, q, ue = false) => {
      if (!!b.value) {
        if (S.value.has(_))
          S.value.delete(_), a("rowUnselected", _);
        else if (l.selectMode === "single" && S.value.size > 0 && (S.value.forEach((j) => a("rowUnselected", j)), S.value.clear()), l.selectMode === "range" && S.value.size > 0 && ue) {
          const j = Array.from(S.value).pop(), ke = Z.value.findIndex((Me) => Me === j), ce = Math.min(ke, q), It = Math.max(ke, q);
          Z.value.slice(ce, It + 1).forEach((Me) => {
            S.value.has(Me) || (S.value.add(Me), a("rowSelected", Me));
          });
        } else
          S.value.add(_), a("rowSelected", _);
        ie();
      }
    }, D = async () => {
      if (!C.value || !l.provider || h.value)
        return;
      h.value = true;
      const _ = new Proxy(
        {
          currentPage: l.currentPage,
          filter: l.filter,
          sortBy: l.sortBy,
          sortDesc: l.sortDesc,
          perPage: l.perPage
        },
        {
          get(ue, j) {
            return j in ue ? ue[j] : void 0;
          },
          set() {
            return console.error("BTable provider context is a read-only object."), true;
          }
        }
      ), q = l.provider(_, r.updateInternalItems);
      if (q !== void 0) {
        if (q instanceof Promise)
          try {
            const ue = await q;
            return Array.isArray(ue) ? await r.updateInternalItems(ue) : void 0;
          } finally {
            h.value && (h.value = false);
          }
        try {
          return await r.updateInternalItems(q);
        } finally {
          h.value && (h.value = false);
        }
      }
    }, X = (_) => {
      _._showDetails = !_._showDetails;
    }, ne = (_) => [
      _.class,
      _.thClass,
      _.variant ? `table-${_.variant}` : void 0,
      {
        "b-table-sortable-column": N.value && _.sortable,
        "b-table-sticky-column": _.stickyColumn
      }
    ], Q = (_, q) => [
      _.class,
      _.tdClass,
      _.variant ? `table-${_.variant}` : void 0,
      (q == null ? void 0 : q._cellVariants) && (q == null ? void 0 : q._cellVariants[_.key]) ? `table-${q == null ? void 0 : q._cellVariants[_.key]}` : void 0,
      {
        "b-table-sticky-column": _.stickyColumn
      }
    ], se = (_) => [
      _._rowVariant ? `table-${_._rowVariant}` : null,
      _._rowVariant ? `table-${_._rowVariant}` : null,
      b.value && S.value.has(_) ? `selected table-${l.selectionVariant}` : null
    ], we = () => {
      if (!b.value)
        return;
      const _ = S.value.size > 0 ? Array.from(S.value) : [];
      S.value = /* @__PURE__ */ new Set([...Z.value]), S.value.forEach((q) => {
        _.includes(q) || a("rowSelected", q);
      }), ie();
    }, Ke = () => {
      !b.value || (S.value.forEach((_) => {
        a("rowUnselected", _);
      }), S.value = /* @__PURE__ */ new Set([]), ie());
    }, Pt = (_) => {
      if (!b.value)
        return;
      const q = Z.value[_];
      !q || S.value.has(q) || (S.value.add(q), a("rowSelected", q), ie());
    }, dt = (_) => {
      if (!b.value)
        return;
      const q = Z.value[_];
      !q || !S.value.has(q) || (S.value.delete(q), a("rowUnselected", q), ie());
    }, Re = async (_, q, ue) => {
      if (q === ue)
        return;
      const j = (hn) => l.noProvider && l.noProvider.includes(hn), ke = !["currentPage", "perPage"].includes(_), ce = ["currentPage", "perPage"].includes(_) && (j("paging") || w.value === true), It = ["filter"].includes(_) && (j("filtering") || k.value === true), Me = ["sortBy", "sortDesc"].includes(_) && (j("sorting") || y.value === true);
      ce || It || Me || (await D(), ke && r.notifyFilteredItems());
    };
    return de(
      () => l.filter,
      (_, q) => {
        _ === q || C.value || _ || qt(l.items).then((ue) => a("filtered", ue));
      }
    ), de(
      () => h.value,
      () => h.value !== p.value && a("update:busy", h.value)
    ), de(
      () => p.value,
      () => h.value !== p.value && (h.value = p.value)
    ), de(
      () => l.filter,
      (_, q) => Re("filter", _, q)
    ), de(
      () => l.currentPage,
      (_, q) => Re("currentPage", _, q)
    ), de(
      () => l.perPage,
      (_, q) => Re("perPage", _, q)
    ), de(
      () => l.sortBy,
      (_, q) => Re("sortBy", _, q)
    ), de(
      () => l.sortDesc,
      (_, q) => Re("sortDesc", _, q)
    ), Be(() => {
      C.value && D();
    }), t({
      selectAllRows: we,
      clearSelected: Ke,
      selectRow: Pt,
      unselectRow: dt
    }), (_, q) => (f(), z(xt, he(Ce(o(x))), {
      default: H(() => {
        var ue;
        return [
          M("thead", null, [
            _.$slots["thead-top"] ? $(_.$slots, "thead-top", { key: 0 }) : W("", true),
            M("tr", null, [
              o(L) ? (f(), g("th", {
                key: 0,
                class: E(["b-table-selection-column", {
                  "b-table-sticky-column": o(B)
                }])
              }, [
                $(_.$slots, "select-head", {}, () => [
                  ee(G(typeof e.selectHead == "boolean" ? "Selected" : e.selectHead), 1)
                ])
              ], 2)) : W("", true),
              (f(true), g(oe, null, ve(o(T), (j) => (f(), g("th", J({
                key: j.key,
                scope: "col",
                class: ne(j),
                title: j.headerTitle,
                abbr: j.headerAbbr,
                style: j.thStyle
              }, j.thAttr, {
                onClick: (ke) => K(j, ke)
              }), [
                M("div", fd, [
                  $(_.$slots, "sort-icon", {
                    field: j,
                    sortBy: e.sortBy,
                    selected: j.key === e.sortBy,
                    isDesc: o(d),
                    direction: o(d) ? "desc" : "asc"
                  }, () => [
                    o(N) && j.sortable ? (f(), g("span", {
                      key: 0,
                      class: E(["b-table-sort-icon", {
                        sorted: j.key === e.sortBy,
                        [`sorted-${o(d) ? "desc" : "asc"}`]: j.key === e.sortBy
                      }])
                    }, null, 2)) : W("", true)
                  ]),
                  M("div", null, [
                    _.$slots["head(" + j.key + ")"] || _.$slots["head()"] ? $(_.$slots, _.$slots["head(" + j.key + ")"] ? "head(" + j.key + ")" : "head()", {
                      key: 0,
                      label: j.label
                    }) : (f(), g(oe, { key: 1 }, [
                      ee(G(re(j)), 1)
                    ], 64))
                  ])
                ])
              ], 16, cd))), 128))
            ]),
            _.$slots["thead-sub"] ? (f(), g("tr", vd, [
              (f(true), g(oe, null, ve(o(T), (j) => (f(), g("td", {
                key: j.key,
                scope: "col",
                class: E([j.class, j.thClass, j.variant ? `table-${j.variant}` : ""])
              }, [
                _.$slots["thead-sub"] ? $(_.$slots, "thead-sub", J({
                  key: 0,
                  items: o(T)
                }, j)) : (f(), g(oe, { key: 1 }, [
                  ee(G(j.label), 1)
                ], 64))
              ], 2))), 128))
            ])) : W("", true)
          ]),
          M("tbody", null, [
            (f(true), g(oe, null, ve(o(Z), (j, ke) => (f(), g(oe, { key: ke }, [
              M("tr", {
                class: E(se(j)),
                onClick: (ce) => !o(vt)(ce) && me(j, ke, ce),
                onDblclick: (ce) => !o(vt)(ce) && ae(j, ke, ce),
                onMouseenter: (ce) => !o(vt)(ce) && pe(j, ke, ce),
                onMouseleave: (ce) => !o(vt)(ce) && ye(j, ke, ce)
              }, [
                o(L) ? (f(), g("td", {
                  key: 0,
                  class: E(["b-table-selection-column", {
                    "b-table-sticky-column": o(B)
                  }])
                }, [
                  $(_.$slots, "select-cell", {}, () => [
                    M("span", {
                      class: E(S.value.has(j) ? "text-primary" : "")
                    }, "🗹", 2)
                  ])
                ], 2)) : W("", true),
                (f(true), g(oe, null, ve(o(T), (ce) => (f(), g("td", J({
                  key: ce.key
                }, ce.tdAttr, {
                  class: Q(ce, j)
                }), [
                  e.stacked && o(m) ? (f(), g("label", bd, G(re(ce)), 1)) : W("", true),
                  _.$slots["cell(" + ce.key + ")"] || _.$slots["cell()"] ? $(_.$slots, _.$slots["cell(" + ce.key + ")"] ? "cell(" + ce.key + ")" : "cell()", {
                    key: 1,
                    value: j[ce.key],
                    index: ke,
                    item: j,
                    field: ce,
                    items: e.items,
                    toggleDetails: () => X(j),
                    detailsShowing: j._showDetails
                  }) : (f(), g(oe, { key: 2 }, [
                    ee(G(o(r).formatItem(j, ce)), 1)
                  ], 64))
                ], 16))), 128))
              ], 42, md),
              j._showDetails === true && _.$slots["row-details"] ? (f(), g("tr", {
                key: 0,
                class: E(se(j))
              }, [
                M("td", { colspan: o(O) }, [
                  $(_.$slots, "row-details", {
                    item: j,
                    toggleDetails: () => X(j)
                  })
                ], 8, pd)
              ], 2)) : W("", true)
            ], 64))), 128)),
            h.value ? (f(), g("tr", {
              key: 0,
              class: E(["b-table-busy-slot", { "b-table-static-busy": o(Z).length == 0 }])
            }, [
              M("td", { colspan: o(O) }, [
                $(_.$slots, "table-busy", {}, () => [
                  M("div", hd, [
                    fe(Ot, { class: "align-middle" }),
                    yd
                  ])
                ])
              ], 8, gd)
            ], 2)) : W("", true),
            o(V) && o(Z).length === 0 ? (f(), g("tr", Bd, [
              M("td", { colspan: o(O) }, [
                $(_.$slots, "empty", {
                  items: o(Z),
                  filtered: o(A)
                }, () => [
                  ee(G(o(A) ? e.emptyFilteredText : e.emptyText), 1)
                ])
              ], 8, $d)
            ])) : W("", true)
          ]),
          o(c) ? (f(), g("tfoot", Sd, [
            M("tr", null, [
              (f(true), g(oe, null, ve(o(T), (j) => (f(), g("th", J({
                key: j.key
              }, j.thAttr, {
                scope: "col",
                class: [j.class, j.thClass, j.variant ? `table-${j.variant}` : ""],
                title: j.headerTitle,
                abbr: j.headerAbbr,
                style: j.thStyle,
                onClick: (ke) => K(j, ke, true)
              }), G(j.label), 17, kd))), 128))
            ])
          ])) : _.$slots["custom-foot"] ? (f(), g("tfoot", Cd, [
            $(_.$slots, "custom-foot", {
              fields: o(T),
              items: e.items,
              columns: (ue = o(T)) == null ? void 0 : ue.length
            })
          ])) : W("", true),
          _.$slots["table-caption"] ? (f(), g("caption", wd, [
            $(_.$slots, "table-caption")
          ])) : e.caption ? (f(), g("caption", _d, G(e.caption), 1)) : W("", true)
        ];
      }),
      _: 3
    }, 16));
  }
}), Vd = /* @__PURE__ */ P({
  __name: "BTbody",
  props: {
    variant: null
  },
  setup(e) {
    const t = e, a = i(() => ({
      [`thead-${t.variant}`]: t.variant !== void 0
    }));
    return (l, n) => (f(), g("tbody", {
      role: "rowgroup",
      class: E(o(a))
    }, [
      $(l.$slots, "default")
    ], 2));
  }
}), Ad = ["scope", "colspan", "rowspan", "data-label"], Od = { key: 0 }, xd = /* @__PURE__ */ P({
  __name: "BTd",
  props: {
    colspan: null,
    rowspan: null,
    stackedHeading: null,
    stickyColumn: { default: false },
    variant: null
  },
  setup(e) {
    const t = e, a = u(s(t, "stickyColumn")), l = i(() => ({
      [`table-${t.variant}`]: t.variant !== void 0,
      "b-table-sticky-column": a.value,
      "table-b-table-default": a.value && t.variant === void 0
    })), n = i(() => t.colspan ? "colspan" : t.rowspan ? "rowspan" : "col");
    return (r, c) => (f(), g("td", {
      role: "cell",
      scope: o(n),
      class: E(o(l)),
      colspan: e.colspan,
      rowspan: e.rowspan,
      "data-label": e.stackedHeading
    }, [
      e.stackedHeading ? (f(), g("div", Od, [
        $(r.$slots, "default")
      ])) : $(r.$slots, "default", { key: 1 })
    ], 10, Ad));
  }
}), Pd = /* @__PURE__ */ P({
  __name: "BTfoot",
  props: {
    variant: null
  },
  setup(e) {
    const t = e, a = i(() => ({
      [`table-${t.variant}`]: t.variant !== void 0
    }));
    return (l, n) => (f(), g("tfoot", {
      role: "rowgroup",
      class: E(o(a))
    }, [
      $(l.$slots, "default")
    ], 2));
  }
}), Id = ["scope", "colspan", "rowspan", "data-label"], Fd = { key: 0 }, Ed = /* @__PURE__ */ P({
  __name: "BTh",
  props: {
    colspan: null,
    rowspan: null,
    stackedHeading: null,
    stickyColumn: { default: false },
    variant: null
  },
  setup(e) {
    const t = e, a = u(s(t, "stickyColumn")), l = i(() => ({
      [`table-${t.variant}`]: t.variant !== void 0,
      "b-table-sticky-column": a.value,
      "table-b-table-default": a.value && t.variant === void 0
    })), n = i(() => t.colspan ? "colspan" : t.rowspan ? "rowspan" : "col");
    return (r, c) => (f(), g("th", {
      role: "columnheader",
      scope: o(n),
      class: E(o(l)),
      colspan: e.colspan,
      rowspan: e.rowspan,
      "data-label": e.stackedHeading
    }, [
      e.stackedHeading !== void 0 ? (f(), g("div", Fd, [
        $(r.$slots, "default")
      ])) : $(r.$slots, "default", { key: 1 })
    ], 10, Id));
  }
}), Ld = /* @__PURE__ */ P({
  __name: "BThead",
  props: {
    variant: null
  },
  setup(e) {
    const t = e, a = i(() => ({
      [`table-${t.variant}`]: t.variant !== void 0
    }));
    return (l, n) => (f(), g("thead", {
      role: "rowgroup",
      class: E(o(a))
    }, [
      $(l.$slots, "default")
    ], 2));
  }
}), zd = /* @__PURE__ */ P({
  __name: "BTr",
  props: {
    variant: null
  },
  setup(e) {
    const t = e, a = i(() => ({
      [`table-${t.variant}`]: t.variant !== void 0
    }));
    return (l, n) => (f(), g("tr", {
      role: "row",
      class: E(o(a))
    }, [
      $(l.$slots, "default")
    ], 2));
  }
}), Nd = ["id", "data-bs-target", "aria-controls", "aria-selected", "onClick"], gn = Symbol(), Dd = /* @__PURE__ */ P({
  __name: "BTabs",
  props: {
    activeNavItemClass: null,
    activeTabClass: null,
    align: null,
    card: { default: false },
    contentClass: null,
    end: { default: false },
    fill: { default: false },
    id: null,
    justified: { default: false },
    lazy: { default: false },
    navClass: null,
    navWrapperClass: null,
    noFade: { default: false },
    noNavStyle: { default: false },
    pills: { default: false },
    small: { default: false },
    tag: { default: "div" },
    vertical: { default: false },
    modelValue: { default: -1 }
  },
  emits: ["update:modelValue", "activate-tab", "click"],
  setup(e, { emit: t }) {
    const a = e, l = Se(), n = u(s(a, "card")), r = u(s(a, "end")), c = u(s(a, "fill")), d = u(s(a, "justified")), v = u(s(a, "lazy")), b = u(s(a, "noFade")), B = u(s(a, "noNavStyle")), m = u(s(a, "pills")), p = u(s(a, "small")), V = u(s(a, "vertical")), w = U(a.modelValue), y = U(""), k = i({
      get: () => w.value,
      set: (C) => {
        w.value = C, h.value.length > 0 && C >= 0 && C < h.value.length ? y.value = h.value[C].buttonId : y.value = "", t("update:modelValue", C);
      }
    }), h = i(() => {
      let C = [];
      return l.default && (C = A(l).map((L, N) => {
        L.props || (L.props = {});
        const te = L.props["button-id"] || Ne("tab"), Z = L.props.id || Ne(), re = k.value > -1 ? N === k.value : L.props.active === "", K = L.props["title-item-class"], me = L.props["title-link-attributes"];
        return {
          buttonId: te,
          contentId: Z,
          active: re,
          disabled: L.props.disabled === "" || L.props.disabled === true,
          navItemClasses: [
            {
              active: re,
              disabled: L.props.disabled === "" || L.props.disabled === true
            },
            re && a.activeNavItemClass ? a.activeNavItemClass : null,
            L.props["title-link-class"]
          ],
          tabClasses: [
            {
              fade: !b.value
            },
            re && a.activeTabClass ? a.activeTabClass : null
          ],
          target: `#${Z}`,
          title: L.props.title,
          titleItemClass: K,
          titleLinkAttributes: me,
          onClick: L.props.onClick,
          tab: L,
          tabComponent: () => A(l)[N]
        };
      })), C;
    }), S = i(() => !((h == null ? void 0 : h.value) && h.value.length > 0)), I = i(() => ({
      "d-flex": V.value,
      "align-items-start": V.value
    })), F = it(s(a, "align")), x = i(() => ({
      "nav-pills": m.value,
      "flex-column me-3": V.value,
      [F.value]: a.align !== void 0,
      "nav-fill": c.value,
      "card-header-tabs": n.value,
      "nav-justified": d.value,
      "nav-tabs": !B.value && !m.value,
      small: p.value
    })), T = (C) => {
      let L = false;
      if (C !== void 0 && C > -1 && C < h.value.length && !h.value[C].disabled && (k.value < 0 || h.value[C].buttonId !== y.value)) {
        const N = new Ue("activate-tab", { cancelable: true });
        t("activate-tab", C, k.value, N), N.defaultPrevented || (k.value = C, L = true);
      }
      return !L && a.modelValue !== k.value && t("update:modelValue", k.value), L;
    }, O = (C, L) => {
      var N;
      T(L), L >= 0 && !h.value[L].disabled && ((N = h.value[L]) == null ? void 0 : N.onClick) && typeof h.value[L].onClick == "function" && h.value[L].onClick(C);
    }, A = (C) => !C || !C.default ? [] : C.default().reduce((L, N) => (typeof N.type == "symbol" ? L = L.concat(N.children) : L.push(N), L), []).filter((L) => {
      var N;
      return ((N = L.type) == null ? void 0 : N.__name) === "BTab";
    });
    return T(w.value), de(
      () => a.modelValue,
      (C, L) => {
        if (C === L)
          return;
        if (C = Math.max(C, -1), L = Math.max(L, -1), h.value.length <= 0) {
          k.value = -1;
          return;
        }
        const N = C > L;
        let te = C;
        const Z = h.value.length - 1;
        for (; te >= 0 && te <= Z && h.value[te].disabled; )
          te += N ? 1 : -1;
        if (te < 0) {
          T(0);
          return;
        }
        if (te >= h.value.length) {
          T(h.value.length - 1);
          return;
        }
        T(te);
      }
    ), de(
      () => h.value,
      () => {
        let C = h.value.map((L) => L.active && !L.disabled).lastIndexOf(true);
        C < 0 && (k.value >= h.value.length ? C = h.value.map((L) => !L.disabled).lastIndexOf(true) : h.value[k.value] && !h.value[k.value].disabled && (C = k.value)), C < 0 && (C = h.value.map((L) => !L.disabled).indexOf(true)), h.value.forEach((L, N) => L.active = N === C), T(C);
      }
    ), Be(() => {
      if (k.value < 0 && h.value.length > 0 && !h.value.some((C) => C.active)) {
        const C = h.value.map((L) => !L.disabled).indexOf(true);
        T(C >= 0 ? C : -1);
      }
    }), et(gn, {
      lazy: v.value,
      card: n.value
    }), (C, L) => (f(), z(Y(e.tag), {
      id: e.id,
      class: E(["tabs", o(I)])
    }, {
      default: H(() => [
        o(r) ? (f(), g("div", {
          key: 0,
          class: E(["tab-content", e.contentClass])
        }, [
          (f(true), g(oe, null, ve(o(h), ({ tabComponent: N, contentId: te, tabClasses: Z, active: re }, K) => (f(), z(Y(N()), {
            id: te,
            key: K,
            class: E(Z),
            active: re
          }, null, 8, ["id", "class", "active"]))), 128)),
          o(S) ? (f(), g("div", {
            key: "bv-empty-tab",
            class: E(["tab-pane active", { "card-body": o(n) }])
          }, [
            $(C.$slots, "empty")
          ], 2)) : W("", true)
        ], 2)) : W("", true),
        M("div", {
          class: E([e.navWrapperClass, { "card-header": o(n), "ms-auto": e.vertical && o(r) }])
        }, [
          M("ul", {
            class: E(["nav", [o(x), e.navClass]]),
            role: "tablist"
          }, [
            $(C.$slots, "tabs-start"),
            (f(true), g(oe, null, ve(o(h), ({ tab: N, buttonId: te, contentId: Z, navItemClasses: re, active: K, target: me }, ae) => (f(), g("li", {
              key: ae,
              class: E(["nav-item", N.props["title-item-class"]])
            }, [
              M("button", J({
                id: te,
                class: ["nav-link", re],
                "data-bs-toggle": "tab",
                "data-bs-target": me,
                role: "tab",
                "aria-controls": Z,
                "aria-selected": K
              }, N.props["title-link-attributes"], {
                onClick: ta((pe) => O(pe, ae), ["stop", "prevent"])
              }), [
                N.children && N.children.title ? (f(), z(Y(N.children.title), { key: 0 })) : (f(), g(oe, { key: 1 }, [
                  ee(G(N.props.title), 1)
                ], 64))
              ], 16, Nd)
            ], 2))), 128)),
            $(C.$slots, "tabs-end")
          ], 2)
        ], 2),
        o(r) ? W("", true) : (f(), g("div", {
          key: 1,
          class: E(["tab-content", e.contentClass])
        }, [
          (f(true), g(oe, null, ve(o(h), ({ tabComponent: N, contentId: te, tabClasses: Z, active: re }, K) => (f(), z(Y(N()), {
            id: te,
            key: K,
            class: E(Z),
            active: re
          }, null, 8, ["id", "class", "active"]))), 128)),
          o(S) ? (f(), g("div", {
            key: "bv-empty-tab",
            class: E(["tab-pane active", { "card-body": o(n) }])
          }, [
            $(C.$slots, "empty")
          ], 2)) : W("", true)
        ], 2))
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), Hd = /* @__PURE__ */ P({
  __name: "BTab",
  props: {
    id: null,
    title: null,
    active: { default: false },
    buttonId: { default: void 0 },
    disabled: { default: false },
    lazy: { default: void 0 },
    lazyOnce: { default: void 0 },
    noBody: { type: [Boolean, String], default: false },
    tag: { default: "div" },
    titleItemClass: null,
    titleLinkAttributes: { default: void 0 },
    titleLinkClass: null
  },
  setup(e) {
    const t = e, a = He(gn, null), l = u(s(t, "active")), n = u(s(t, "disabled")), r = u(s(t, t.lazyOnce !== void 0 ? "lazyOnce" : "lazy")), c = U(false), d = i(() => !!((a == null ? void 0 : a.lazy) || r.value)), v = i(() => t.lazyOnce !== void 0), b = i(() => l.value && !n.value), B = i(() => {
      const p = d.value && v.value && c.value;
      return b.value || !d.value || p;
    }), m = i(() => ({
      active: l.value,
      show: l.value,
      "card-body": (a == null ? void 0 : a.card) && t.noBody === false
    }));
    return de(
      () => B.value,
      (p) => {
        p && !c.value && (c.value = true);
      }
    ), (p, V) => (f(), z(Y(e.tag), {
      id: e.id,
      class: E(["tab-pane", o(m)]),
      role: "tabpanel",
      "aria-labelledby": "profile-tab"
    }, {
      default: H(() => [
        o(B) ? $(p.$slots, "default", { key: 0 }) : W("", true)
      ]),
      _: 3
    }, 8, ["id", "class"]));
  }
}), Rd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BAccordion: ss,
  BAccordionItem: $s,
  BAlert: As,
  BAvatar: Fs,
  BAvatarGroup: Os,
  BBadge: zs,
  BBreadcrumb: js,
  BBreadcrumbItem: Hl,
  BButton: Ye,
  BButtonGroup: Ms,
  BButtonToolbar: Gs,
  BCloseButton: at,
  BCard: Wl,
  BCardBody: Gl,
  BCardFooter: Ul,
  BCardGroup: Ws,
  BCardHeader: jl,
  BCardImg: Ct,
  BCardSubtitle: ql,
  BCardText: Ks,
  BCardTitle: Ml,
  BCarousel: or,
  BCarouselSlide: cr,
  BCol: nt,
  BCollapse: zl,
  BContainer: yr,
  BDropdown: Yl,
  BDropdownDivider: kr,
  BDropdownForm: Vr,
  BDropdownGroup: Pr,
  BDropdownHeader: Lr,
  BDropdownItem: Nr,
  BDropdownItemButton: Rr,
  BDropdownText: qr,
  BForm: Zl,
  BFormFloatingLabel: Kr,
  BFormInvalidFeedback: Kt,
  BFormRow: pt,
  BFormText: Xt,
  BFormValidFeedback: Jt,
  BFormCheckbox: en,
  BFormCheckboxGroup: ti,
  BFormGroup: ui,
  BFormInput: vi,
  BFormRadio: an,
  BFormRadioGroup: yi,
  BFormSelect: ki,
  BFormSelectOption: ia,
  BFormSelectOptionGroup: ln,
  BFormTag: nn,
  BFormTags: Ni,
  BFormTextarea: ji,
  BImg: ra,
  BInputGroup: Xi,
  BInputGroupAddon: ua,
  BInputGroupAppend: Ji,
  BInputGroupPrepend: Qi,
  BInputGroupText: on,
  BLink: Ae,
  BListGroup: Yi,
  BListGroupItem: Zi,
  BModal: nu,
  BNav: ou,
  BNavForm: su,
  BNavItem: du,
  BNavItemDropdown: fu,
  BNavText: mu,
  BNavbar: bu,
  BNavbarBrand: hu,
  BNavbarNav: yu,
  BNavbarToggle: $u,
  BOffcanvas: Tu,
  BOverlay: Vu,
  BPagination: zu,
  BPlaceholder: xe,
  BPlaceholderButton: dn,
  BPlaceholderCard: Nu,
  BPlaceholderTable: Du,
  BPlaceholderWrapper: Hu,
  BPopover: Uu,
  BProgress: Ku,
  BProgressBar: cn,
  BRow: Qu,
  BSkeleton: gt,
  BSkeletonIcon: Yu,
  BSkeletonTable: td,
  BSkeletonWrapper: ad,
  BSpinner: Ot,
  BFormSpinButton: rd,
  BTable: Td,
  BTableSimple: xt,
  BTbody: Vd,
  BTd: xd,
  BTfoot: Pd,
  BTh: Ed,
  BThead: Ld,
  BTr: zd,
  BTab: Hd,
  BTabs: Dd,
  BToastContainer: Wt,
  BTransition: ut,
  BToast: Ql,
  BToaster: Wt,
  BToastPlugin: gr
}, Symbol.toStringTag, { value: "Module" })), jd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  vBColorMode: rs,
  vBPopover: is,
  vBToggle: sa,
  vBTooltip: ms,
  vBVisible: ps
}, Symbol.toStringTag, { value: "Module" })), Xd = {
  install(e, t = {}) {
    Object.entries(Rd).forEach(([a, l]) => {
      e.component(a, l);
    }), Object.entries(jd).forEach(([a, l]) => {
      e.directive(a, l);
    }), ls(e);
  }
};
const { createApp } = await importShared("vue");
const app = createApp(App);
app.use(Xd);
app.use(router).mount("#app");
