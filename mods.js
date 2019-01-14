var Helpers={
        mobile:500,
        tablet:768,
        desktop: 992,
        large: 1200,
        sideNav: 1321,

};

var UI = setupUI();
var App = setupApp(UI);

var setupUI= () =>{
    
    /* add data attributes to body tag for CSS toggle show hide purposes */
    setupBodyData = attributes =>  attributes.forEach( ([attribute, value] ) =>  body.dataset[attribute] = value);
    
    initUI=()=>{
        
        var sideMenuToggle = document.querySelectorAll('[data-toggle-side-menu]');
        var searchBarToggle = document.querySelector('[data-toggle="search"]');
        var overlay = document.querySelector('#page-overlay');
        var body = document.body;
        
        sideMenuToggle.addEventListener('click', toggleSideMenuAttr.bind(this))

    }

    toggleSideMenuAttr = () =>{

        console.log(this);
        var val = this.dataset.toggleSideMenu;
        // coerce value to number and then toggle 
        // UI toggle
        App.toggleOverlay(val)
        
    }

    attachHandler = (fn, handler, nodes) => {
        var els = [...nodes];
        return els.forEach(el => el.addEventListener(handler, fn));
    }

    var publicAPI = {
        initUI,
        setupBodyData
    }
    
    return publicAPI;
    

    // handleSideMenuClick = evt =>{

    // }



}

var setUpApp = UI=>{

    var showOverlay = false;
    var showSearch = false;
    var showSideNav = false;

    toggleOverlay = num => {
        // coerce to boolean and toggle if different
        showOverlay = Number(num) === Number(showOverlay) ? showOverlay : !showOverlay;
    }

    var publicAPI = {

    };
    return publicAPI;

}

// function Element(selector){

// }
