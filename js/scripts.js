'use strict';
(function(){
    var carimages = document.querySelector('.carimages');

    carimages.addEventListener('click', function(e){
        if(e.target.tagName === 'IMG'){

            var overlay = document.createElement('div');
            overlay.id = 'overlay';

            //Set some styles for the overlay
            overlay.style.position = 'absolute';
            overlay.style.top = 0;
            overlay.style.background = 'rgba(0,0,0,0.7)';
            overlay.style.cursor = 'pointer';

            //Set some sizes for the overlay
            overlay.style.width = window.innerWidth + "px";
            overlay.style.height = window.innerHeight + "px";

            //append the overlay to the body
            document.body.appendChild(overlay);

            //building the image (get image source); clicking on an image triggers the overlay for
            //the entire screen and not for the targetted image
            var imageSrc = e.target.src;

            //creating the image
            var popUpImage = document.createElement('img');
            popUpImage.id = 'popimage';
            popUpImage.src = imageSrc;

            //style the image
            popUpImage.style.display = 'block';
            popUpImage.style.width = '50';
            popUpImage.style.margin = '0 auto';
            popUpImage.style.marginTop = '10%';

            //append the image to the overlay
            overlay.appendChild(popUpImage);
            popUpImage.addEventListener('click', function(){
                if(overlay){
                    overlay.parentElement.removeChild(overlay);
                }
            });

            //set the image to follow windows/display scroll
            window.addEventListener('scroll', function(){
                if(overlay){
                    overlay.style.top = window.pageYOffset + 'px';
                    overlay.style.left = window.pageXOffset + 'px';
                }
            });

            //set overlay to resize when the window is resized
            window.addEventListener('resize', function(){
                overlay.style.width = window.innerWidth + 'px';
                overlay.style.height = window.innerHeight + 'px';
            });

            //console.log(popUpImage);

        }   //check the image is being clicked

    });     //Event listener for the div with the calls of carimages



}());//enables the document to load first
