"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Helpers = {
  mobile: 500,
  tablet: 768,
  desktop: 992,
  large: 1200,
  sideNav: 1321,
  numToBool: function numToBool(num) {
    return !!Number(num);
  },
  boolToNum: function boolToNum(bool) {
    return Number(bool);
  }
};

var setupSessionStorage = function setupSessionStorage() {
  var ss = window.sessionStorage;
  var publicAPI = {
    sideMenu: 1,
    search: 0,
    title: "Nice app"
  };
  return publicAPI;
};

var setupUI = function setupUI() {
  var body = document.body;
  /* add data attributes to body tag for CSS toggle show hide purposes */

  var setupBodyData = function setupBodyData(attributes) {
    return attributes.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          attribute = _ref2[0],
          value = _ref2[1];

      return body.dataset[attribute] = value;
    });
  };

  var setSideNav = function setSideNav(element, val) {
    return element.dataset.sideMenu = val;
  };

  var attachHandler = function attachHandler(fn, handler, nodes) {
    var els = _toConsumableArray(nodes);

    return els.forEach(function (el) {
      return el.addEventListener(handler, fn);
    });
  };

  var init = function init() {
    var sideMenuToggle = document.querySelector('[data-toggle="side-menu"]');
    var searchBarToggle = document.querySelector('[data-toggle="search"]');
    var overlay = document.querySelector('#page-overlay');
    sideMenuToggle.addEventListener('click', toggleSideMenuAttr);
  };

  function toggleSideMenuAttr() {
    var currentState = Helpers.boolToNum(App.getSideNav());
    var nextState = Helpers.boolToNum(!currentState);
    App.setSideNav(nextState);
    setSideNav(body, nextState);
  }

  var publicAPI = {
    init: init,
    setupBodyData: setupBodyData
  };
  return publicAPI; // handleSideMenuClick = evt =>{
  // }
};

var setupApp = function setupApp(UI, ss) {
  var setSideNav = function setSideNav(bool) {
    return showSideNav = bool;
  };

  var getSideNav = function getSideNav() {
    return showSideNav;
  };

  var showOverlay = false;
  var showSearch = false;
  var showSideNav = false;

  var toggleOverlay = function toggleOverlay(num) {
    // coerce to boolean and toggle if different
    showOverlay = Number(num) === Number(showOverlay) ? showOverlay : !showOverlay;
  };

  var publicAPI = {
    setSideNav: setSideNav,
    getSideNav: getSideNav
  };
  return publicAPI;
}; // use promise or async call here


var ss = setupSessionStorage();
var UI = setupUI();
UI.init();
var App = setupApp(UI, ss);