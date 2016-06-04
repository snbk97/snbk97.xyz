// main animation
var right = document.getElementById("right-wing");
var left = document.getElementById("left-wing");
var up = document.getElementById("up");
var down = document.getElementById("down");
right.style.display = "";
left.style.display = "";
var counter = 1;

function magic_counter() {
    "use strict";
    counter++;
    if (counter % 2 === 0) {
        left.style.display = "none";
        right.style.display = "";
    } else {
        right.style.display = "none";
        left.style.display = "";
    }
}

function widener() {
    "use strict";
    var width = window.innerWidth;

    if (width < 1080) {
        left.style.width = "100%";
        right.style.width = "100%";
        up.onclick = function () {
            magic_counter();
        };
        down.onclick = function () {
            magic_counter();
        };

    } else {
        right.style.display = "";
        left.style.display = "";

        left.style.width = "50%";
        right.style.width = "50%";
        if (right.scrollTop > 250) {
            left.style.width = "20%";
            left.style.WebkitTransition = 'linear 0.3s';
            left.style.MozTransition = 'linear 0.3s';
            right.style.width = "80%";
            right.style.WebkitTransition = 'linear 0.3s';
            right.style.MozTransition = 'linear 0.3s';

        } else {
            left.style.width = "50%";
            left.style.WebkitTransition = 'linear 0.3s';
            left.style.MozTransition = 'linear 0.3s';
            right.style.width = "50%";
            right.style.WebkitTransition = 'linear 0.3s';
            right.style.MozTransition = 'linear 0.3s';
        }
    }
}

right.onscroll = function () {
    "use strict";
    widener();
};
window.onresize = function () {
    "use strict";
    widener();
};
window.onload = function () {
    "use strict";
    widener();
};
