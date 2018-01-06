$(function() {
    var navPage=$("#navPage");
    var slider = $("#slider");
    var modalBoxPdf= $(".modal-box-pdf");

    navPage.sticky({ zIndex:5});
    slider.flexslider({
        customDirectionNav: $(".slider__direction-nav a")
    });

    modalBoxPdf. fancybox({
        type: "iframe",
        overlayColor: "#FFF",
        overlayOpacity: 0.1,
    });
});

// SDK facebook
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.11';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));