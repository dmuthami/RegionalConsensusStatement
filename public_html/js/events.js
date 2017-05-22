
/*
 * filename properties
 */
events.prototype.periodArrayInitialize = function () {
    this.periodArray = [];
};

/*
 * filename properties
 */
events.prototype.getPeriodArray = function () {
    return this.periodArray;
};

/*
 * filename properties
 */
events.prototype.clearDropDown = function (id) {
    var el = document.getElementById(id);
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
};

/*
 * 
 * @returns {undefined}
 **/
events.prototype.populateParameterDropDownArray = function () {
    //Get value of Ghacof Select drop down
    var ghacof = document.getElementById('ghacof');
    var selectedText = ghacof.value;

    //Split filename
    //Example "GHACOF 44 Statement_Precipitation"
    var splitString = selectedText.split(" ");

    var str = splitString[0] + "_" + splitString[1];

    var objArr;
    $.each(parameterJSON, function (key0, valueGHACOF) {
        if (key0 === str) {//Say Oct
            Object.keys(valueGHACOF).forEach(function (key1) {
                objArr = valueGHACOF[key1];
                Object.keys(objArr).forEach(function (key2) {
                    eventsHandler.getPeriodArray().push(key2);
                    console.log(key2);
                });

            });
        }
        ;
    });
};

/*
 *move to the next image in the array
 */
events.prototype.populateParameter = function () {

    //clear period dropdown
    eventsHandler.clearDropDown("parameter");

    //Clear period drop down
    eventsHandler.periodArrayInitialize();

    //populate parameter drop down
    eventsHandler.populateParameterDropDownArray();

    //Create and append the options
    var select = document.getElementById("parameter");
    var arr = eventsHandler.getPeriodArray();
    for (var i = 0; i < arr.length; i++) {
        var option = document.createElement("option");
        option.value = arr[i];
        option.text = arr[i];
        select.appendChild(option);
    }
    ;

    //Ensure the global variable for parameter is updated
    eventsHandler.parameterOnChange();
};

/*
 * move to the previous image
 */
events.prototype.filename = function () {
    this.ghacof = "GHACOF 44 Statement";
    this.parameter = "Precipitation";
};


/*
 *move to the last image in the array
 */
events.prototype.showImage = function () {
    eventsHandler.showText();
};



/*
 *Model click event
 */
events.prototype.ghacofOnChange = function () {
    //get selexted text
    var selText = "";
    var ghacofSelect = document.getElementById('ghacof');
    selText = ghacofSelect.value;
    //update filename object
    eventsHandler.ghacof = selText;

    //Populate Period
    eventsHandler.populateParameter();

    //console.log("Model : " + eventsHandler.ghacof);

};


/*
 *RCM click event
 */
events.prototype.parameterOnChange = function () {
    //get selexted text
    var selText = "";
    var parameterSelect = document.getElementById('parameter');
    selText = parameterSelect.value;
    //update filename object
    eventsHandler.parameter = selText;

    //console.log("Forecast : " + eventsHandler.parameter);

};

/*
 *Update Image Caption
 */
events.prototype.updateImageCaption = function (filename) {
    //Split filename
    //Example "GHACOF 44 Statement_Precipitation"
    var splitString = filename.split(" ");


    //Build key to pass to the javacript object
    var key = splitString[2].split('_')[1] + "_" + splitString[1];

    //Get the string to display and update the respective div
    var imageCaptionDiv = document.getElementById('imageCaptionDiv');
    imageCaptionDiv.innerHTML = ghacofStatementCaption[key].toString();
    //console.log(ghacofStatementCaption[key]);
};


events.prototype.showText = function (index, total) {
    var image2 = new Image();

    var filename;
    filename = eventsHandler.ghacof + "_" + eventsHandler.parameter;

    var filepath = filename + '.png';
    image2.src = 'photos/' + filepath;

    console.log("Filename : " + image2.src);

    //Call function to update caption
    eventsHandler.updateImageCaption(filename);

    //get image element
    var imgElement = document.images['img0'];
    imgElement.src = image2.src;
};

/*
 *add event listeners to the buttons
 */
events.prototype.addEvents = function () {

    //add event to the Refresh button
    b1 = document.getElementById('btnRefresh');
    b1.onclick = eventsHandler.showImage;

    //add event to the id period select

    //initialize filename properties object
    eventsHandler.filename();

    var ghacofSelect = document.getElementById('ghacof');
    ghacofSelect.onchange = eventsHandler.ghacofOnChange;


    var gcmSelect = document.getElementById('parameter');
    gcmSelect.onchange = eventsHandler.parameterOnChange;
};

/*
 *Object constructor
 */
function events() {
}

eventsHandler = new events();