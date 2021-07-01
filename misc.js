// https://monc.se/kitchen/152/avoiding-flickering-in-jquery/
// This makes pages load significantly slower, but fixes navbar flickering on load
document.write('<style type="text/css">body{display:none}</style>');
jQuery(function($) {
$('body').css('display','block');
});


// https://stackoverflow.com/questions/44502243/single-navigation-bar-across-website
$(function() {
    $("#SiteNavigation").load("menu.html");
    
    // https://stackoverflow.com/questions/39447411/how-to-load-nav-menu-from-an-external-file-no-wamp-all-code-must-be-browser
    function activeNav() {
        var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
         $("#SiteNavigation a").each(function(){
              if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
              $(this).addClass("active");
         });
    }
    setTimeout(function() {
        activeNav();
    }, 100);
    
});
