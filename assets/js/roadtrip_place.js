
        $(document).ready(function () {
            $(window).scroll(function () {
                $("nav").toggleClass("scrolled", $(this).scrollTop() > 100);
                $("w3-sidebar").toggleClass("w3-sidebarab", $(this).scrollTop() > 300);
            });
            // $('.active').click(function () {
            //     $('.datacard').collapse('toggle');
            // });

            if (screen.width >= 776) {
                $(".card_price").addClass("fixedposition");
                $(".card_container").addClass("card_container_pc");
                $(".for_trip").addClass("for_trip_pc");
            } else {
                $(".card_container").addClass("card_container_mobile");

                $(".route")[0].style.display = "none";
            }

            $(".activity .plan").on('click', function () {
                $(this).siblings().removeClass('active2');
                $(this).siblings().removeClass('active2');
                $(this).addClass('active2');
            });
            $(".itinerary .Visa").on('click', function () {
                $(this).siblings().removeClass('active2');
                $(this).siblings().removeClass('active2');
                $(this).addClass('active2');

            });

            $("#visa1").on("click", function () {
                $(".cardboxbody").css("display", "block");
                $(".activity").css("display", "flex");
                $("#policy").css("display", "none");
                $("#similar").css("display", "none");
                $("#flig").css("display", "none");
                $("#flig1").css("display", "none");
                $("#flig2").css("display", "none");
                $("#flig3").css("display", "none");
                $("#flig4").css("display", "none");


            })
            $("#flight6").on("click", function () {
                $(".cardboxbody").css("display", "block");

                $("#policy").css("display", "none");


            })
            $("#visa2").on("click", function () {
                $(".cardboxbody").css("display", "none");
                $(".activity").css("display", "none");
                $("#policy").css("display", "block");
                $("#similar").css("display", "none");
                $("#flig").css("display", "none");
                $("#flig1").css("display", "none");
                $("#flig2").css("display", "none");
                $("#flig3").css("display", "none");
                $("#flig4").css("display", "none");

            })
            $("#visa3").on("click", function () {
                $(".cardboxbody").css("display", "none");
                $(".activity").css("display", "none");
                $("#policy").css("display", "none");
                $("#similar").css("display", "block");
                $("#flig").css("display", "none");
                $("#flig1").css("display", "none");
                $("#flig2").css("display", "none");
                $("#flig3").css("display", "none");
                $("#flig4").css("display", "none");

            })

            $("#flight").on("click", function () {
                $(".cardboxbody").css("display", "none");
                $("#similar").css("display", "none");
                $("#flig").css("display", "block");
                $("#flig1").css("display", "none");
                $("#flig1").css("display", "none");
                $("#flig2").css("display", "none");
                $("#flig3").css("display", "none");
                $("#flig4").css("display", "none");

            })
            $("#flight2").on("click", function () {
                $(".cardboxbody").css("display", "none");
                $("#flig").css("display", "none");
                $("#flig1").css("display", "block");
                $("#flig2").css("display", "none");
                $("#flig3").css("display", "none");
                $("#flig4").css("display", "none");
                $("#similar").css("display", "none");
            })
            $("#flight6").on("click", function () {
                $(".cardboxbody").css("display", "block");
                $("#flig").css("display", "none");
                $("#flig1").css("display", "none");
                $("#flig2").css("display", "none");
                $("#flig3").css("display", "none");
                $("#flig4").css("display", "none");
                $("#similar").css("display", "none");

            })
            $("#flight3").on("click", function () {
                $(".cardboxbody").css("display", "none");
                $("#flig").css("display", "none");
                $("#flig1").css("display", "none");
                $("#flig2").css("display", "block");
                $("#flig3").css("display", "none");
                $("#flig4").css("display", "none");
                $("#similar").css("display", "none");

            })
            $("#flight4").on("click", function () {
                $(".cardboxbody").css("display", "none");
                $("#flig").css("display", "none");
                $("#flig1").css("display", "none");
                $("#flig2").css("display", "none");
                $("#flig3").css("display", "block");
                $("#flig4").css("display", "none");
                $("#similar").css("display", "none");

            })
            $("#flight5").on("click", function () {
                $(".cardboxbody").css("display", "none");
                $("#flig").css("display", "none");
                $("#flig1").css("display", "none");
                $("#flig2").css("display", "none");
                $("#flig3").css("display", "none");
                $("#flig4").css("display", "block");
                $("#similar").css("display", "none");

            })

        });
        function savesubcat() {
            return null;
        }

        function hovereffect() {
            let dis = document.getElementsByClassName("onhover1");

            for (let i = 0; i < dis.length; i++) {
                dis[i].style.display = "inline";


            }



        }
        function hoverout() {
            dis = document.getElementsByClassName("onhover1");

            for (let i = 0; i < dis.length; i++) {
                dis[i].style.display = "none";

            }
        }

        

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("headr");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > 425) {
    header.classList.add("sticky");
    $('.datacard').css({
        'margin-top': '148px'
     
    });

  } else {
    header.classList.remove("sticky");
    $('.datacard').css({
        'margin-top': '0px'
    });
 }
}