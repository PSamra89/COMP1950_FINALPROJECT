$(document).ready(function() {
    window.onresize = displayWindowSize;
    window.onload = displayWindowSize;

    function displayWindowSize() {
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;
        // your size calculation code here

        if (myWidth < 980) {
            {
                var btn = document.getElementsByClassName("entypo-menu")[0];
                btn.addEventListener("click", function() {
                    var temp = $(".mobile-nav").css("display");
                    console.log(temp);
                    if (temp == "block") {
                        console.log("changin to none");
                        $(".mobile-nav").css("display", "none");
                    } else if (temp == "none") {
                        console.log("changin to block");
                        $(".mobile-nav").css("display", "block");
                    }
                });
            }
        } else {
            $(".mobile-nav").css("display", "none");
        }
    }
});