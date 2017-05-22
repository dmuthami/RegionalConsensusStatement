

/*
 *create the body element
 */
createElement.prototype.createDivElements = function () {
    var b = document.getElementsByTagName('body');
    b[0].setAttribute('id', 'mybody');
    //var b=document.getElementById('mybody');
    var dcontainer = document.createElement('div');
    dcontainer.setAttribute('id', 'dcont');
    dcontainer.setAttribute('align', 'center');
    //nested elements
    var d0 = document.createElement('div');
    d0.setAttribute('id', 'div0');
    d0.setAttribute('height', '30px');
    d0.setAttribute('border', 1);
    //second div element
    var d1 = document.createElement('div');
    d1.setAttribute('id', 'div1');

    //third div element for the optional elements for div0 aka buttons header
    var d2 = document.createElement('div');
    d2.setAttribute('id', 'div2');

    //append div elements 
    dcontainer.appendChild(d0);
    dcontainer.appendChild(d2);
    dcontainer.appendChild(d1);

    b[0].appendChild(dcontainer);

}

/*
 *create the image element
 */
createElement.prototype.createImageTag = function () {
    var d1 = document.getElementById('idImgDiv');
    var img = document.createElement('img');
    img.setAttribute('id', 'img0');
    //img.setAttribute('width', '682.5px');
    //img.setAttribute('height', '512px');
    img.setAttribute('border', 0);
    img.setAttribute('alt', "The Specific Regional Consensus Statement requested is not available");
    
    //append div elements 
    var imageCaptionDiv = document.getElementById('imageCaptionDiv');
    
    d1.insertBefore(img,imageCaptionDiv);
    //d1.appendChild(img);

    //Responsive images
    var classesArr = ["img-responsive", "img-rounded"];
    //Create and append the classes
    for (var i = 0; i < classesArr.length; i++) {
        d1.classList.add(classesArr[i]);
    }
};

/*
 *create button
 */
createElement.prototype.createButton = function (id, par, val) {
    var i = document.createElement('input');
    i.setAttribute('id', id);
    i.setAttribute('type', 'button');
    //i.setAttribute('disabled', false);
    i.setAttribute('value', val);
    i.setAttribute('width', '20px');
    par.appendChild(i);
};

/*
 *create Period Select
 */
createElement.prototype.createSelect = function (id, par, arr) {
    var select = document.createElement('select');
    select.setAttribute('id', id);
    par.appendChild(select);

    //Create and append the options
    for (var i = 0; i < arr.length; i++) {
        var option = document.createElement("option");
        option.value = arr[i];
        option.text = arr[i];
        select.appendChild(option);
    }
};

/*
 *create buttons
 */
createElement.prototype.createButtons = function () {

    /*Form in div0*/
    var div0 = document.getElementById('div0');
    //create form element
    var f = document.createElement('form');
    div0.appendChild(f);

    /*Form in div2*/

    var div2 = document.getElementById('div2');
    //create form element
    var f2 = document.createElement('form');
    div2.appendChild(f2);

    //create GCM Select
    //Create array of options to be added
    arr = [
        "GHACOF 44 Statement"
                , "GHACOF 43 Statement"
                , "GHACOF 42 Statement"
                , "GHACOF 41 Statement"
                , "GHACOF 40 Statement"
                , "GHACOF 39 Statement"
                , "GHACOF 38 Statement"
                , "GHACOF 37 Statement"
                , "GHACOF 36 Statement"
                , "GHACOF 35 Statement"
                , "GHACOF 33 Statement"
                , "GHACOF 32 Statement"
                , "GHACOF 31 Statement"
                , "GHACOF 30 Statement"
                , "GHACOF 29 Statement"
                , "GHACOF 28 Statement"
                , "GHACOF 27 Statement"
                , "GHACOF 26 Statement"
                , "GHACOF 25 Statement"
                , "GHACOF 23 Statement"
    ];
    ce.createSelect('ghacof', f, arr);


    //create Forecast Select
    //Create array of options to be added
    arr = ["Precipitation"
                , "Temperature"
    ];
    ce.createSelect('parameter', f, arr);//parameter

    //create Last button
    ce.createButton('btnRefresh', f, 'Plot');

};

createElement.prototype.title = function () {
    var h = document.getElementsByTagName('head');
    var t = document.createElement('title');
    t.innerHTML = 'Regional Consensus Statement';
    h[0].appendChild(t);
};
/*
 *Object Constructor
 */
function createElement() {
}

/*
 * Adds elements to the dom
 */
init.prototype.domCreator = function () {
    //create the object
    ce = new createElement();
    //create title element
    ce.title();
    //create the div elements
    //ce.createDivElements();
    
    //create image tag
    ce.createImageTag();
    //create buttons
    //ce.createButtons();
};

/*
 *
 */
//Object Constructor 
function init() {

}

/*
 *
 */
function start() {
    try {
        //create elements on the dom
        var initialize = new init();
        initialize.domCreator();

        //events
        eventsHandler.addEvents();

        //photos
        photos();

    } catch (exception) {
        alert(exception);
    }

}