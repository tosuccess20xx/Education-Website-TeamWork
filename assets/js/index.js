// Ahmed hajagg Work

class Loader {


    // element of our operation
    static loader = document.querySelector(".loader") //loader
    static loaderText = document.querySelector(".wise"); //wise
    static icon = document.querySelector(".loader-icon"); // icon in loader

    // remove loader after 4s
    static removeLoader() {
        setTimeout(() => {
            this.loader.classList.add("remove");
        }, 4000)
    }

    // write wise in loader
    static load(text, counter) {
        text = "علم باحسان اترك اثر";
        counter = 0;
        let int = setInterval(() => {
            if (counter < text.length) this.loaderText.innerHTML += text[counter++];
            else clearInterval(int)
        }, 100)
    }

    // remove the wise and add loader icon after 2 second || after remove the wise
    static addLoaderIcon() {
        setTimeout(() => {
            this.loaderText.classList.add('remove');
            this.icon.classList.add("active")
        }, 2000)
    }

}

//  return our class functions 
Loader.removeLoader();
Loader.load();
Loader.addLoaderIcon();

// play video

// ########################################### ERROR 
// ################################
// #######################
// Fix Please


// class Video {

//     static playvideo() {
//         let video = document.querySelector("video");
//         let playerVideo = document.querySelector(".play-video");
//         playerVideo.addEventListener("click", () => {
//             // remove  screen of play video
//             playerVideo.parentElement.classList.add("disapled");
//             // play video after half second
//             setTimeout(() => {
//                 video.play()
//             }, 500)
//         })
//     }

// }

// turn play 
// Video.playvideo()

// drop down
class VideosDropDown {

    static showproids(lesson) {
        lesson = document.querySelectorAll(".lesson-btn")
        //show drop down when press in lesson button
        lesson.forEach(el => {
            el.addEventListener("click", (x) => {
                x.target.nextElementSibling.classList.toggle("active")
            })
        })
    }

}

// return show proids
VideosDropDown.showproids();

// ====================================================


// ---------------- Omar Ahmed work ---------------

$(document).ready(function () {
    $(".sign-icon").on("click", function () {
        $(".for-form").css("display", "block")
    });
    $(".close-form").on("click", function () {
        $(".for-form").css("display", "none")
    });

    $(".sign").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(".sign1").on("click", function () {
        $(".sign-up-form").slideUp(400)
        $(".sign-form").delay(500).slideDown(500);
    });
    $(".sign2").on("click", function () {
        $(".sign-form").slideUp(400);
        $(".sign-up-form").delay(500).slideDown(500);
    });
})




// Mohamed El Nagar

 new WOW().init();

     // ---------------- Mohamed Elnagar ---------------
// ---------------- Start Courses ---------------
   
$('.courses-nav ul li').click( function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('.courses-shuffle .col-md').addClass('show');
    $('.courses-shuffle .col-md.fade').css('display','flex');
    if($(this).data('class')==='graphic')
    {   
        $('.courses-shuffle .col-md').show();
    }else{
        $('.courses-shuffle .col-md').hide();
        $($(this).data('class')).parent().show();
    }
} );
// ---------------- End Courses ---------------
// ---------------- Start feedbacks owl-carousel---------------
$('.owl-one').owlCarousel({
    loop:true,
    margin:30,
    dotsEach:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
});

$('.owl-two').owlCarousel({
    loop:true,
    margin:30,
    dotsEach:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});

$('.owl-three').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
 