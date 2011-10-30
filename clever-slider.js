/*
* jQuery Clever Slider
* Copyright(c) 2011, Arnaud Marquis
*
* jQuery "on mouse move" effect for sliding DIVs
* 
* Licensed under the MIT License
*/

// Set up and down limit (in percent of container width)
// Slider will align right or left over or below these values
// Set upLimit at 100 and downLimit at 0 to cancel this effect

var upLimit = 95;
var downLimit = 5;

// cleverSlider function :: see demo.html for more information

function cleverSlider(container, slider) {
                    
    $('#' + container).mousemove(function(e) {

        // Get container width and left position
        var containerWidth = $(this).width();
        var containerLeft = $(this).position().left;

        // Get slider width
        var sliderWidth = $('#' + slider).width();

        // Get mouse position in percent of container width
        var percent = parseInt((100 * (e.pageX - containerLeft)) / containerWidth);

        // Set percent to use up and down limits
        if (percent >= upLimit) {
            percent = 100;
        } else if (percent <= downLimit) {
            percent = 0;
        }

        // Get width difference between container and slider
        var x = sliderWidth - containerWidth;

        // If slider needs to slide
        if (x > 0) {

            // Set slider left offset in pixels
            var offset = (x * percent) / 100;
            $('#' + slider).css('left', '-' + offset + 'px');
        }
    });
}