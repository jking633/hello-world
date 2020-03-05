(window["webpackJsonpnike"] = window["webpackJsonpnike"] || []).push([["npm.history"],{

/***/ "LhCv":
/*!*********************************************!*\
  !*** ./node_modules/history/esm/history.js ***!
  \*********************************************/
/*! exports provided: createBrowserHistory, createHashHistory, createMemoryHistory, createLocation, locationsAreEqual, parsePath, createPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBrowserHistory\", function() { return createBrowserHistory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createHashHistory\", function() { return createHashHistory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createMemoryHistory\", function() { return createMemoryHistory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLocation\", function() { return createLocation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"locationsAreEqual\", function() { return locationsAreEqual; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parsePath\", function() { return parsePath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPath\", function() { return createPath; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"wx14\");\n/* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resolve-pathname */ \"Rh1G\");\n/* harmony import */ var value_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! value-equal */ \"w6Ft\");\n/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-warning */ \"LUQC\");\n/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tiny-invariant */ \"9R94\");\n\n\n\n\n\n\nfunction addLeadingSlash(path) {\n  return path.charAt(0) === '/' ? path : '/' + path;\n}\nfunction stripLeadingSlash(path) {\n  return path.charAt(0) === '/' ? path.substr(1) : path;\n}\nfunction hasBasename(path, prefix) {\n  return new RegExp('^' + prefix + '(\\\\/|\\\\?|#|$)', 'i').test(path);\n}\nfunction stripBasename(path, prefix) {\n  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;\n}\nfunction stripTrailingSlash(path) {\n  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;\n}\nfunction parsePath(path) {\n  var pathname = path || '/';\n  var search = '';\n  var hash = '';\n  var hashIndex = pathname.indexOf('#');\n\n  if (hashIndex !== -1) {\n    hash = pathname.substr(hashIndex);\n    pathname = pathname.substr(0, hashIndex);\n  }\n\n  var searchIndex = pathname.indexOf('?');\n\n  if (searchIndex !== -1) {\n    search = pathname.substr(searchIndex);\n    pathname = pathname.substr(0, searchIndex);\n  }\n\n  return {\n    pathname: pathname,\n    search: search === '?' ? '' : search,\n    hash: hash === '#' ? '' : hash\n  };\n}\nfunction createPath(location) {\n  var pathname = location.pathname,\n      search = location.search,\n      hash = location.hash;\n  var path = pathname || '/';\n  if (search && search !== '?') path += search.charAt(0) === '?' ? search : \"?\" + search;\n  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : \"#\" + hash;\n  return path;\n}\n\nfunction createLocation(path, state, key, currentLocation) {\n  var location;\n\n  if (typeof path === 'string') {\n    // Two-arg form: push(path, state)\n    location = parsePath(path);\n    location.state = state;\n  } else {\n    // One-arg form: push(location)\n    location = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, path);\n    if (location.pathname === undefined) location.pathname = '';\n\n    if (location.search) {\n      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;\n    } else {\n      location.search = '';\n    }\n\n    if (location.hash) {\n      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;\n    } else {\n      location.hash = '';\n    }\n\n    if (state !== undefined && location.state === undefined) location.state = state;\n  }\n\n  try {\n    location.pathname = decodeURI(location.pathname);\n  } catch (e) {\n    if (e instanceof URIError) {\n      throw new URIError('Pathname \"' + location.pathname + '\" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');\n    } else {\n      throw e;\n    }\n  }\n\n  if (key) location.key = key;\n\n  if (currentLocation) {\n    // Resolve incomplete/relative pathname relative to current location.\n    if (!location.pathname) {\n      location.pathname = currentLocation.pathname;\n    } else if (location.pathname.charAt(0) !== '/') {\n      location.pathname = Object(resolve_pathname__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(location.pathname, currentLocation.pathname);\n    }\n  } else {\n    // When there is no prior location and pathname is empty, set it to /\n    if (!location.pathname) {\n      location.pathname = '/';\n    }\n  }\n\n  return location;\n}\nfunction locationsAreEqual(a, b) {\n  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && Object(value_equal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(a.state, b.state);\n}\n\nfunction createTransitionManager() {\n  var prompt = null;\n\n  function setPrompt(nextPrompt) {\n     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(prompt == null, 'A history supports only one prompt at a time') : undefined;\n    prompt = nextPrompt;\n    return function () {\n      if (prompt === nextPrompt) prompt = null;\n    };\n  }\n\n  function confirmTransitionTo(location, action, getUserConfirmation, callback) {\n    // TODO: If another transition starts while we're still confirming\n    // the previous one, we may end up in a weird state. Figure out the\n    // best way to handle this.\n    if (prompt != null) {\n      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;\n\n      if (typeof result === 'string') {\n        if (typeof getUserConfirmation === 'function') {\n          getUserConfirmation(result, callback);\n        } else {\n           true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : undefined;\n          callback(true);\n        }\n      } else {\n        // Return false from a transition hook to cancel the transition.\n        callback(result !== false);\n      }\n    } else {\n      callback(true);\n    }\n  }\n\n  var listeners = [];\n\n  function appendListener(fn) {\n    var isActive = true;\n\n    function listener() {\n      if (isActive) fn.apply(void 0, arguments);\n    }\n\n    listeners.push(listener);\n    return function () {\n      isActive = false;\n      listeners = listeners.filter(function (item) {\n        return item !== listener;\n      });\n    };\n  }\n\n  function notifyListeners() {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    listeners.forEach(function (listener) {\n      return listener.apply(void 0, args);\n    });\n  }\n\n  return {\n    setPrompt: setPrompt,\n    confirmTransitionTo: confirmTransitionTo,\n    appendListener: appendListener,\n    notifyListeners: notifyListeners\n  };\n}\n\nvar canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);\nfunction getConfirmation(message, callback) {\n  callback(window.confirm(message)); // eslint-disable-line no-alert\n}\n/**\n * Returns true if the HTML5 history API is supported. Taken from Modernizr.\n *\n * https://github.com/Modernizr/Modernizr/blob/master/LICENSE\n * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js\n * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586\n */\n\nfunction supportsHistory() {\n  var ua = window.navigator.userAgent;\n  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;\n  return window.history && 'pushState' in window.history;\n}\n/**\n * Returns true if browser fires popstate on hash change.\n * IE10 and IE11 do not.\n */\n\nfunction supportsPopStateOnHashChange() {\n  return window.navigator.userAgent.indexOf('Trident') === -1;\n}\n/**\n * Returns false if using go(n) with hash history causes a full page reload.\n */\n\nfunction supportsGoWithoutReloadUsingHash() {\n  return window.navigator.userAgent.indexOf('Firefox') === -1;\n}\n/**\n * Returns true if a given popstate event is an extraneous WebKit event.\n * Accounts for the fact that Chrome on iOS fires real popstate events\n * containing undefined state when pressing the back button.\n */\n\nfunction isExtraneousPopstateEvent(event) {\n  event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;\n}\n\nvar PopStateEvent = 'popstate';\nvar HashChangeEvent = 'hashchange';\n\nfunction getHistoryState() {\n  try {\n    return window.history.state || {};\n  } catch (e) {\n    // IE 11 sometimes throws when accessing window.history.state\n    // See https://github.com/ReactTraining/history/pull/289\n    return {};\n  }\n}\n/**\n * Creates a history object that uses the HTML5 history API including\n * pushState, replaceState, and the popstate event.\n */\n\n\nfunction createBrowserHistory(props) {\n  if (props === void 0) {\n    props = {};\n  }\n\n  !canUseDOM ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(false, 'Browser history needs a DOM') : undefined : void 0;\n  var globalHistory = window.history;\n  var canUseHistory = supportsHistory();\n  var needsHashChangeListener = !supportsPopStateOnHashChange();\n  var _props = props,\n      _props$forceRefresh = _props.forceRefresh,\n      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,\n      _props$getUserConfirm = _props.getUserConfirmation,\n      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,\n      _props$keyLength = _props.keyLength,\n      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;\n  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';\n\n  function getDOMLocation(historyState) {\n    var _ref = historyState || {},\n        key = _ref.key,\n        state = _ref.state;\n\n    var _window$location = window.location,\n        pathname = _window$location.pathname,\n        search = _window$location.search,\n        hash = _window$location.hash;\n    var path = pathname + search + hash;\n     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path \"' + path + '\" to begin with \"' + basename + '\".') : undefined;\n    if (basename) path = stripBasename(path, basename);\n    return createLocation(path, state, key);\n  }\n\n  function createKey() {\n    return Math.random().toString(36).substr(2, keyLength);\n  }\n\n  var transitionManager = createTransitionManager();\n\n  function setState(nextState) {\n    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(history, nextState);\n\n    history.length = globalHistory.length;\n    transitionManager.notifyListeners(history.location, history.action);\n  }\n\n  function handlePopState(event) {\n    // Ignore extraneous popstate events in WebKit.\n    if (isExtraneousPopstateEvent(event)) return;\n    handlePop(getDOMLocation(event.state));\n  }\n\n  function handleHashChange() {\n    handlePop(getDOMLocation(getHistoryState()));\n  }\n\n  var forceNextPop = false;\n\n  function handlePop(location) {\n    if (forceNextPop) {\n      forceNextPop = false;\n      setState();\n    } else {\n      var action = 'POP';\n      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\n        if (ok) {\n          setState({\n            action: action,\n            location: location\n          });\n        } else {\n          revertPop(location);\n        }\n      });\n    }\n  }\n\n  function revertPop(fromLocation) {\n    var toLocation = history.location; // TODO: We could probably make this more reliable by\n    // keeping a list of keys we've seen in sessionStorage.\n    // Instead, we just default to 0 for keys we don't know.\n\n    var toIndex = allKeys.indexOf(toLocation.key);\n    if (toIndex === -1) toIndex = 0;\n    var fromIndex = allKeys.indexOf(fromLocation.key);\n    if (fromIndex === -1) fromIndex = 0;\n    var delta = toIndex - fromIndex;\n\n    if (delta) {\n      forceNextPop = true;\n      go(delta);\n    }\n  }\n\n  var initialLocation = getDOMLocation(getHistoryState());\n  var allKeys = [initialLocation.key]; // Public interface\n\n  function createHref(location) {\n    return basename + createPath(location);\n  }\n\n  function push(path, state) {\n     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;\n    var action = 'PUSH';\n    var location = createLocation(path, state, createKey(), history.location);\n    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\n      if (!ok) return;\n      var href = createHref(location);\n      var key = location.key,\n          state = location.state;\n\n      if (canUseHistory) {\n        globalHistory.pushState({\n          key: key,\n          state: state\n        }, null, href);\n\n        if (forceRefresh) {\n          window.location.href = href;\n        } else {\n          var prevIndex = allKeys.indexOf(history.location.key);\n          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);\n          nextKeys.push(location.key);\n          allKeys = nextKeys;\n          setState({\n            action: action,\n            location: location\n          });\n        }\n      } else {\n         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : undefined;\n        window.location.href = href;\n      }\n    });\n  }\n\n  function replace(path, state) {\n     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;\n    var action = 'REPLACE';\n    var location = createLocation(path, state, createKey(), history.location);\n    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\n      if (!ok) return;\n      var href = createHref(location);\n      var key = location.key,\n          state = location.state;\n\n      if (canUseHistory) {\n        globalHistory.replaceState({\n          key: key,\n          state: state\n        }, null, href);\n\n        if (forceRefresh) {\n          window.location.replace(href);\n        } else {\n          var prevIndex = allKeys.indexOf(history.location.key);\n          if (prevIndex !== -1) allKeys[prevIndex] = location.key;\n          setState({\n            action: action,\n            location: location\n          });\n        }\n      } else {\n         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : undefined;\n        window.location.replace(href);\n      }\n    });\n  }\n\n  function go(n) {\n    globalHistory.go(n);\n  }\n\n  function goBack() {\n    go(-1);\n  }\n\n  function goForward() {\n    go(1);\n  }\n\n  var listenerCount = 0;\n\n  function checkDOMListeners(delta) {\n    listenerCount += delta;\n\n    if (listenerCount === 1 && delta === 1) {\n      window.addEventListener(PopStateEvent, handlePopState);\n      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);\n    } else if (listenerCount === 0) {\n      window.removeEventListener(PopStateEvent, handlePopState);\n      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);\n    }\n  }\n\n  var isBlocked = false;\n\n  function block(prompt) {\n    if (prompt === void 0) {\n      prompt = false;\n    }\n\n    var unblock = transitionManager.setPrompt(prompt);\n\n    if (!isBlocked) {\n      checkDOMListeners(1);\n      isBlocked = true;\n    }\n\n    return function () {\n      if (isBlocked) {\n        isBlocked = false;\n        checkDOMListeners(-1);\n      }\n\n      return unblock();\n    };\n  }\n\n  function listen(listener) {\n    var unlisten = transitionManager.appendListener(listener);\n    checkDOMListeners(1);\n    return function () {\n      checkDOMListeners(-1);\n      unlisten();\n    };\n  }\n\n  var history = {\n    length: globalHistory.length,\n    action: 'POP',\n    location: initialLocation,\n    createHref: createHref,\n    push: push,\n    replace: replace,\n    go: go,\n    goBack: goBack,\n    goForward: goForward,\n    block: block,\n    listen: listen\n  };\n  return history;\n}\n\nvar HashChangeEvent$1 = 'hashchange';\nvar HashPathCoders = {\n  hashbang: {\n    encodePath: function encodePath(path) {\n      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);\n    },\n    decodePath: function decodePath(path) {\n      return path.charAt(0) === '!' ? path.substr(1) : path;\n    }\n  },\n  noslash: {\n    encodePath: stripLeadingSlash,\n    decodePath: addLeadingSlash\n  },\n  slash: {\n    encodePath: addLeadingSlash,\n    decodePath: addLeadingSlash\n  }\n};\n\nfunction getHashPath() {\n  // We can't use window.location.hash here because it's not\n  // consistent across browsers - Firefox will pre-decode it!\n  var href = window.location.href;\n  var hashIndex = href.indexOf('#');\n  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);\n}\n\nfunction pushHashPath(path) {\n  window.location.hash = path;\n}\n\nfunction replaceHashPath(path) {\n  var hashIndex = window.location.href.indexOf('#');\n  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);\n}\n\nfunction createHashHistory(props) {\n  if (props === void 0) {\n    props = {};\n  }\n\n  !canUseDOM ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(false, 'Hash history needs a DOM') : undefined : void 0;\n  var globalHistory = window.history;\n  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();\n  var _props = props,\n      _props$getUserConfirm = _props.getUserConfirmation,\n      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,\n      _props$hashType = _props.hashType,\n      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;\n  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';\n  var _HashPathCoders$hashT = HashPathCoders[hashType],\n      encodePath = _HashPathCoders$hashT.encodePath,\n      decodePath = _HashPathCoders$hashT.decodePath;\n\n  function getDOMLocation() {\n    var path = decodePath(getHashPath());\n     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path \"' + path + '\" to begin with \"' + basename + '\".') : undefined;\n    if (basename) path = stripBasename(path, basename);\n    return createLocation(path);\n  }\n\n  var transitionManager = createTransitionManager();\n\n  function setState(nextState) {\n    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(history, nextState);\n\n    history.length = globalHistory.length;\n    transitionManager.notifyListeners(history.location, history.action);\n  }\n\n  var forceNextPop = false;\n  var ignorePath = null;\n\n  function handleHashChange() {\n    var path = getHashPath();\n    var encodedPath = encodePath(path);\n\n    if (path !== encodedPath) {\n      // Ensure we always have a properly-encoded hash.\n      replaceHashPath(encodedPath);\n    } else {\n      var location = getDOMLocation();\n      var prevLocation = history.location;\n      if (!forceNextPop && locationsAreEqual(prevLocation, location)) return; // A hashchange doesn't always == location change.\n\n      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.\n\n      ignorePath = null;\n      handlePop(location);\n    }\n  }\n\n  function handlePop(location) {\n    if (forceNextPop) {\n      forceNextPop = false;\n      setState();\n    } else {\n      var action = 'POP';\n      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\n        if (ok) {\n          setState({\n            action: action,\n            location: location\n          });\n        } else {\n          revertPop(location);\n        }\n      });\n    }\n  }\n\n  function revertPop(fromLocation) {\n    var toLocation = history.location; // TODO: We could probably make this more reliable by\n    // keeping a list of paths we've seen in sessionStorage.\n    // Instead, we just default to 0 for paths we don't know.\n\n    var toIndex = allPaths.lastIndexOf(createPath(toLocation));\n    if (toIndex === -1) toIndex = 0;\n    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));\n    if (fromIndex === -1) fromIndex = 0;\n    var delta = toIndex - fromIndex;\n\n    if (delta) {\n      forceNextPop = true;\n      go(delta);\n    }\n  } // Ensure the hash is encoded properly before doing anything else.\n\n\n  var path = getHashPath();\n  var encodedPath = encodePath(path);\n  if (path !== encodedPath) replaceHashPath(encodedPath);\n  var initialLocation = getDOMLocation();\n  var allPaths = [createPath(initialLocation)]; // Public interface\n\n  function createHref(location) {\n    return '#' + encodePath(basename + createPath(location));\n  }\n\n  function push(path, state) {\n     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(state === undefined, 'Hash history cannot push state; it is ignored') : undefined;\n    var action = 'PUSH';\n    var location = createLocation(path, undefined, undefined, history.location);\n    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\n      if (!ok) return;\n      var path = createPath(location);\n      var encodedPath = encodePath(basename + path);\n      var hashChanged = getHashPath() !== encodedPath;\n\n      if (hashChanged) {\n        // We cannot tell if a hashchange was caused by a PUSH, so we'd\n        // rather setState here and ignore the hashchange. The caveat here\n        // is that other hash histories in the page will consider it a POP.\n        ignorePath = path;\n        pushHashPath(encodedPath);\n        var prevIndex = allPaths.lastIndexOf(createPath(history.location));\n        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);\n        nextPaths.push(path);\n        allPaths = nextPaths;\n        setState({\n          action: action,\n          location: location\n        });\n      } else {\n         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : undefined;\n        setState();\n      }\n    });\n  }\n\n  function replace(path, state) {\n     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(state === undefined, 'Hash history cannot replace state; it is ignored') : undefined;\n    var action = 'REPLACE';\n    var location = createLocation(path, undefined, undefined, history.location);\n    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\n      if (!ok) return;\n      var path = createPath(location);\n      var encodedPath = encodePath(basename + path);\n      var hashChanged = getHashPath() !== encodedPath;\n\n      if (hashChanged) {\n        // We cannot tell if a hashchange was caused by a REPLACE, so we'd\n        // rather setState here and ignore the hashchange. The caveat here\n        // is that other hash histories in the page will consider it a POP.\n        ignorePath = path;\n        replaceHashPath(encodedPath);\n      }\n\n      var prevIndex = allPaths.indexOf(createPath(history.location));\n      if (prevIndex !== -1) allPaths[prevIndex] = path;\n      setState({\n        action: action,\n        location: location\n      });\n    });\n  }\n\n  function go(n) {\n     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;\n    globalHistory.go(n);\n  }\n\n  function goBack() {\n    go(-1);\n  }\n\n  function goForward() {\n    go(1);\n  }\n\n  var listenerCount = 0;\n\n  function checkDOMListeners(delta) {\n    listenerCount += delta;\n\n    if (listenerCount === 1 && delta === 1) {\n      window.addEventListener(HashChangeEvent$1, handleHashChange);\n    } else if (listenerCount === 0) {\n      window.removeEventListener(HashChangeEvent$1, handleHashChange);\n    }\n  }\n\n  var isBlocked = false;\n\n  function block(prompt) {\n    if (prompt === void 0) {\n      prompt = false;\n    }\n\n    var unblock = transitionManager.setPrompt(prompt);\n\n    if (!isBlocked) {\n      checkDOMListeners(1);\n      isBlocked = true;\n    }\n\n    return function () {\n      if (isBlocked) {\n        isBlocked = false;\n        checkDOMListeners(-1);\n      }\n\n      return unblock();\n    };\n  }\n\n  function listen(listener) {\n    var unlisten = transitionManager.appendListener(listener);\n    checkDOMListeners(1);\n    return function () {\n      checkDOMListeners(-1);\n      unlisten();\n    };\n  }\n\n  var history = {\n    length: globalHistory.length,\n    action: 'POP',\n    location: initialLocation,\n    createHref: createHref,\n    push: push,\n    replace: replace,\n    go: go,\n    goBack: goBack,\n    goForward: goForward,\n    block: block,\n    listen: listen\n  };\n  return history;\n}\n\nfunction clamp(n, lowerBound, upperBound) {\n  return Math.min(Math.max(n, lowerBound), upperBound);\n}\n/**\n * Creates a history object that stores locations in memory.\n */\n\n\nfunction createMemoryHistory(props) {\n  if (props === void 0) {\n    props = {};\n  }\n\n  var _props = props,\n      getUserConfirmation = _props.getUserConfirmation,\n      _props$initialEntries = _props.initialEntries,\n      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,\n      _props$initialIndex = _props.initialIndex,\n      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,\n      _props$keyLength = _props.keyLength,\n      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;\n  var transitionManager = createTransitionManager();\n\n  function setState(nextState) {\n    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(history, nextState);\n\n    history.length = history.entries.length;\n    transitionManager.notifyListeners(history.location, history.action);\n  }\n\n  function createKey() {\n    return Math.random().toString(36).substr(2, keyLength);\n  }\n\n  var index = clamp(initialIndex, 0, initialEntries.length - 1);\n  var entries = initialEntries.map(function (entry) {\n    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());\n  }); // Public interface\n\n  var createHref = createPath;\n\n  function push(path, state) {\n     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;\n    var action = 'PUSH';\n    var location = createLocation(path, state, createKey(), history.location);\n    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\n      if (!ok) return;\n      var prevIndex = history.index;\n      var nextIndex = prevIndex + 1;\n      var nextEntries = history.entries.slice(0);\n\n      if (nextEntries.length > nextIndex) {\n        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);\n      } else {\n        nextEntries.push(location);\n      }\n\n      setState({\n        action: action,\n        location: location,\n        index: nextIndex,\n        entries: nextEntries\n      });\n    });\n  }\n\n  function replace(path, state) {\n     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;\n    var action = 'REPLACE';\n    var location = createLocation(path, state, createKey(), history.location);\n    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\n      if (!ok) return;\n      history.entries[history.index] = location;\n      setState({\n        action: action,\n        location: location\n      });\n    });\n  }\n\n  function go(n) {\n    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);\n    var action = 'POP';\n    var location = history.entries[nextIndex];\n    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\n      if (ok) {\n        setState({\n          action: action,\n          location: location,\n          index: nextIndex\n        });\n      } else {\n        // Mimic the behavior of DOM histories by\n        // causing a render after a cancelled POP.\n        setState();\n      }\n    });\n  }\n\n  function goBack() {\n    go(-1);\n  }\n\n  function goForward() {\n    go(1);\n  }\n\n  function canGo(n) {\n    var nextIndex = history.index + n;\n    return nextIndex >= 0 && nextIndex < history.entries.length;\n  }\n\n  function block(prompt) {\n    if (prompt === void 0) {\n      prompt = false;\n    }\n\n    return transitionManager.setPrompt(prompt);\n  }\n\n  function listen(listener) {\n    return transitionManager.appendListener(listener);\n  }\n\n  var history = {\n    length: entries.length,\n    action: 'POP',\n    location: entries[index],\n    index: index,\n    entries: entries,\n    createHref: createHref,\n    push: push,\n    replace: replace,\n    go: go,\n    goBack: goBack,\n    goForward: goForward,\n    canGo: canGo,\n    block: block,\n    listen: listen\n  };\n  return history;\n}\n\n\n\n\n//# sourceURL=webpack://nike/./node_modules/history/esm/history.js?");

/***/ })

}]);