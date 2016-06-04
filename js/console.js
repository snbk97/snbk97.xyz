var Util = {
    message: function () {
        "use strict";
        if (typeof console === "object") {
            console.log(`

             _______ __   _ _______  _     _       __  ____
             |       |    | |     ] |     /      /  |     /
             |______ | \\  | |-----. |____/       \\_/|    /   
             ______| |  \\_| |_____] |    \\_         |   /
                                                    |  /
                    `);
            console.log("Hey! What are you looking under here for?\nDeveloped by Sayan Bhowmik \nEmail: snbk97@gmail.com");
        }
    }
}

// call on page load
Util.message();