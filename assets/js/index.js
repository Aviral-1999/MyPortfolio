window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("movetop").style.display = "block";
    } else {
        document.getElementById("movetop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//stats-number-counter-->
$('.counter').countUp();
//end-number-counter-->

//brands

        $(document).ready(function() {
            $("#owl-demo").owlCarousel({
                loop: true,
                autoplay: true,
                autoplaySpeed: 1500,
                nav: false,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 2,
                        nav: false
                    },
                    568: {
                        items: 3,
                        nav: false
                    },
                    768: {
                        items: 4,
                        nav: false
                    }
                }
            })
        })

//brands
//typig-text

    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    const textArray = ["Web Designer", "Web Developer", "Software Engineer", "Freelancer"];
    const typingDelay = 200;
    const erasingDelay = 10;
    const newTextDelay = 100; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            // add class 'typing' if there's none
            if (!cursorSpan.classList.contains("typing")) {
                cursorSpan.classList.add("typing");
            }
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, 0);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay);
        }
    }

    document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
        if (textArray.length) setTimeout(type, newTextDelay + 250);
    });
 //typig-text
//MENU-JS 
     $(window).on("scroll", function () {
         var scroll = $(window).scrollTop();

         if (scroll >= 80) {
             $("#site-header").addClass("nav-fixed");
         } else {
             $("#site-header").removeClass("nav-fixed");
         }
     });

     //Main navigation Active Class Add Remove
     $(".navbar-toggler").on("click", function () {
         $("header").toggleClass("active");
     });
     $(document).on("ready", function () {
         if ($(window).width() > 991) {
             $("header").removeClass("active");
         }
         $(window).on("resize", function () {
             if ($(window).width() > 991) {
                 $("header").removeClass("active");
             }
         });
     });
 //MENU-JS 

// disable body scroll which navbar is in active 

        $(function () {
            $('.navbar-toggler').click(function () {
                $('body').toggleClass('noscroll');
            })
        });
//disable body scroll which navbar is in active -->

 // JavaScript functions to open and close the modal
 function openResumeModal() {
    // Fetch the content of the HTML page
    fetch('/starter/portfolio.html')
      .then(response => response.text())
      .then(html => {
        // Insert the content into the modal
        document.getElementById('modalContent').innerHTML = html;
      })
      .catch(error => {
        console.error('Error loading HTML page:', error);
      });
    // Get the modal element
    var modal = document.getElementById('resumeModal');
    // Display the modal
    modal.style.display = 'block';

    
  }

  function closeResumeModal() {
    // Get the modal element
    var modal = document.getElementById('resumeModal');
    // Hide the modal
    modal.style.display = 'none';
    $("#resumeModal").hide()
  }