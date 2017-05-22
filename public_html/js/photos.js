var imageLib = new Array();
var imageindex = 0;

/*
 * Not yet full implemented for images from the server
 */
imageslib.prototype.loadImagesServerSide = function (arr) {

};

/*
 * load images on a folder in the client side
 */
imageslib.prototype.loadImagesClientSide = function () {

    var image2 = new Image();

    eventsHandler.ghacof = document.getElementById('ghacof').value;
    eventsHandler.parameter = document.getElementById('parameter').value;
    
    var filename;
    filename = eventsHandler.ghacof + "_" + eventsHandler.parameter;

    var filepath = filename + '.png';
    image2.src = 'photos/' + filepath;

    console.log("Filename : " + filename);

    //Call function to update caption
    eventsHandler.updateImageCaption(filename);

    //get image element
    var imgElement = document.images['img0'];
    imgElement.src = image2.src;

};

/*
 *Object Constructor 
 */
function imageslib() {

}

/*
 * object is created here
 */
function photos() {
    img = new imageslib();
    img.loadImagesClientSide();

}