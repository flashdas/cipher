
//https://stackoverflow.com/questions/39447411/how-to-load-nav-menu-from-an-external-file-no-wamp-all-code-must-be-browser
// IDK how to get this to work
function loadNav() {
    console.log("js started asdf");
    //window.onload = function(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        console.log("A");

        if(this.readyState == 4 && this.status == 200){
                document.getElementById('SiteNavigation').innerHTML= '<object type="text/html" data="menu.html"></object>';
                console.log("B");

            }
    }

    xhttp.open('POST', 'menu.html', true); // method, location, async
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.send(); //}
    console.log("js finshed");

}

// https://stackoverflow.com/questions/44502243/single-navigation-bar-across-website
$(function() {
    console.log("if #navigation exists, look for menu.html");
    $("#navigation").load("menu.html", function( response, status, xhr ) {
        if ( status == "error" ) {
            alert( "Sorry but there was an error: " + xhr.status + " " + xhr.statusText );
        }
    });
    debugger;
});

// https://stackoverflow.com/questions/39447411/how-to-load-nav-menu-from-an-external-file-no-wamp-all-code-must-be-browser
$(function() {

    $("#nav").load("menu.html");

    function activeNav() {
        var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
         $("#nav ul li a").each(function(){
              if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
              $(this).addClass("active");
         });
    }

    setTimeout(function() {
        activeNav();
    }, 100);

});