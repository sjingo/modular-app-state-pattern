var Helpers = {
    mobile: 500,
    tablet: 768,
    desktop: 992,
    large: 1200,
    sideNav: 1321,
    numToBool: num =>{
        return !!Number(num)
    },
    boolToNum: bool =>{
        return Number(bool);
    }

};

var setupSessionStorage = () => {

    var ss = window.sessionStorage;

    var publicAPI = {
        sideMenu : 1,
        search : 0,
        title : "Nice app"
    }

    return publicAPI;
}

 var setupUI = () => {
    const body = document.body;
    /* add data attributes to body tag for CSS toggle show hide purposes */
    const setupBodyData = attributes => attributes.forEach(([attribute, value]) => body.dataset[attribute] = value);

    const setSideNav = (element,val) => element.dataset.sideMenu = val

    const attachHandler = (fn, handler, nodes) => {
        var els = [...nodes];
        return els.forEach(el => el.addEventListener(handler, fn));
    }

    const init = () => {

        var sideMenuToggle = document.querySelector('[data-toggle="side-menu"]');
        var searchBarToggle = document.querySelector('[data-toggle="search"]');
        var overlay = document.querySelector('#page-overlay');
 
        sideMenuToggle.addEventListener('click', toggleSideMenuAttr)

    }
     function toggleSideMenuAttr() {
         var currentState= Helpers.boolToNum(App.getSideNav());
         var nextState = Helpers.boolToNum(!currentState);
         App.setSideNav(nextState);
         setSideNav(body,nextState);
     }


    var publicAPI = {
        init,
        setupBodyData
    }

    return publicAPI;


    // handleSideMenuClick = evt =>{

    // }



}

var setupApp = (UI, ss) => {

    const setSideNav = bool => showSideNav = bool;
    const getSideNav = () => showSideNav;

    var showOverlay = false;
    var showSearch = false;
    var showSideNav = false;

    const toggleOverlay = num => {
        // coerce to boolean and toggle if different
        showOverlay = Number(num) === Number(showOverlay) ? showOverlay : !showOverlay;
    }

    var publicAPI = {
        setSideNav,
        getSideNav
    };

    return publicAPI;

}

// use promise or async call here
var ss = setupSessionStorage();
var UI = setupUI();
    UI.init();
var App = setupApp(UI, ss);
