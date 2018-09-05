(function(){
"use strict";
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

            document.body.appendChild(overlay);

            console.log(e.target.tagName);

        }

    });



}());
