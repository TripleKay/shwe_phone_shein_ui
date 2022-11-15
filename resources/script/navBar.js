/* -------------------------------start nav slider-------------------------------------   */
let screenHeight = $(window).height();
    // console.log(screenHeight);
    $(window).scroll(function () {
        let currentPosition = $(this).scrollTop();
        // console.log(currentPosition);
        if(currentPosition > screenHeight-90){
            $(".site-nav").addClass("site-nav-scroll");
        }else{
            $(".site-nav").removeClass("site-nav-scroll");
        }
    });
/* -------------------------------end nav slider-------------------------------------   */


