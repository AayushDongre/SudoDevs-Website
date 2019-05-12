$(window).on("load", function() {
    var preloaderFadeOutTime = 500;
    function hidePreloader() {
    var preloader = $('.preloader-wrapper');
    preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});

$(document).ready(function(){
    
    $(".counter .outof").text($(".wrapper").length);

    var current = $("#p1");
    
    if($(window).outerWidth()<=600)
        current.children("div.title").delay(1200).css({opacity:"0",top:"-50px"}).animate({top:"6vh",opacity:"1"});
    else
        current.children("div.title").delay(1200).css({opacity:"0",top:"-50px"}).animate({top:"35.29%",opacity:"1"});
    
        current.children("div.infobox").children("div.head").children("h2.info-title").delay(900).css({opacity:"0",top:"-50px"}).animate({top:"",opacity:"1"});
    current.children("div.infobox").css({opacity:"0"}).delay(700).animate({opacity:"1"});
    $("div.imgbox").css({opacity:"0"}).delay(700).animate({opacity:"1"},200);
    $("div.counter").css({opacity:"0"}).delay(700).animate({opacity:"1"},200);
    current.children("div.infobox").children("div.head").children("p.info-des").css({opacity:"0",top:"-50px"}).delay(800).animate({top:"",opacity:"1"}); 
    current.children("div.infobox").children("div.description").children("p.what-des").css({opacity:"0",top:"-50px"}).delay(800).animate({top:"",opacity:"1"});
    

    var i = 0;
    var back =  i + ".png";

    $(".imgbox").css({background:"url(img/projects/"+back+")","background-size":"cover"});
    var prevtime = new Date().getTime();
    prevtime = 0;
    $(".page").css("color",$("#p1 .title").css("color"));

    function scrolldown()
    {
        i=i+1;
        if(i==$(".wrapper").length)
         i = 0;
        back =  i + ".png";
        //CHANGE COUNTER COLOR AND COUNT
        $(".counter .page").text(i+1);
        var color = $("#p"+(i+1)+" .title").css("color");
        $(".page").css("color",color);
        //CHANGE IMGBOX IMAGE
        if($(window).outerWidth()>600)
        {
            $(".imgbox").animate({width:0,left:"81.45%"},650).queue(function(){
                $(this).css({background:"url(img/projects/"+back+")","background-size":"cover"});
                $(this).dequeue();
            }).delay(500).animate({width:"20.57%",left:"60.88%"},650);
        }
        else if($(window).outerWidth()<=600)
        {
            $(".imgbox").animate({width:0,left:"90vw"},650).queue(function(){
                $(this).css({background:"url(img/projects/"+back+")","background-size":"cover"});
                $(this).dequeue();
            }).delay(500).animate({width:"90vw",left:"1rem"},650);
        }

        //ERASE CURRENT ELEMENTS
        current.children("div.title").delay(800).animate({top:"-50px",opacity:"0"});
        current.children("div.infobox").children("div.head").children("h2.info-title").delay(600).animate({top:"-50px",opacity:"0"});
        current.children("div.infobox").children("div.head").children("p.info-des").delay(500).animate({top:"-50px",opacity:"0"});
        current.children("div.infobox").children("div.description").children("p.what-des").delay(600).animate({top:"-50px",opacity:"0"});
            
        current.delay(700).animate({opacity:0},500);
        //CHECK IF LAST ELEMENT
        // console.log(current.attr("id").substring(1));
        if(current.attr("id").substring(1)!=$(".wrapper").length.toString()){
            current = current.next();
            if(current.attr("class")=="imgbox")
                current=current.next();
        }
        else if(current.attr("id").substring(1)==$(".wrapper").length.toString()){
            current = $("#p1");
        }
        
        current.delay(1400).animate({opacity:1},500);
        
        //SPAWN CURRENT ELEMENTS
        current.children("div.title").delay(2000).css({opacity:"0",top:"100%"}).animate({top:"35.29%",opacity:"1"});
        current.children("div.infobox").children("div.head").children("h2.info-title").delay(1700).css({opacity:"0",top:"100%"}).animate({top:"",opacity:"1"});
        current.children("div.infobox").children("div.head").children("p.info-des").delay(1600).css({opacity:"0",top:"100%"}).animate({top:"",opacity:"1"}); 
        current.children("div.infobox").children("div.description").children("p.what-des").delay(1600).css({opacity:"0",top:"100%"}).animate({top:"",opacity:"1"}); 
    }
    function scrollup()
    {
        i=i-1;
        if(i==-1)
        i = $(".wrapper").length-1;
        back =  i + ".png";

        //CHANGE COUNTER COLOR AND COUNT
        $(".counter .page").text(i+1);
        var color = $("#p"+(i+1)+" .title").css("color");
        $(".page").css("color",color);

        
        //CHANGE IMGBOX IMAGE
        if($(window).outerWidth()>600)
        {
            $(".imgbox").animate({width:0,left:"81.45%"},650).queue(function(){
                $(this).css({background:"url(img/projects/"+back+")","background-size":"cover"});
                $(this).dequeue();
            }).delay(500).animate({width:"20.57%",left:"60.88%"},650);
        }
        else if($(window).outerWidth()<=600)
        {
            $(".imgbox").animate({width:0,left:"90vw"},650).queue(function(){
                $(this).css({background:"url(img/projects/"+back+")","background-size":"cover"});
                $(this).dequeue();
            }).delay(500).animate({width:"90vw",left:"1rem"},650);
        }
        //ERASE CURRENT ELEMENTS
        current.children("div.title").delay(800).animate({opacity:"0",top:"100%"});
        current.children("div.infobox").children("div.head").children("h2.info-title").delay(600).animate({opacity:"0",top:"50px"});
        current.children("div.infobox").children("div.head").children("p.info-des").delay(500).animate({opacity:"0",top:"50px"}); 
        current.children("div.infobox").children("div.description").children("p.what-des").delay(600).animate({opacity:"0",top:"50px"});
        current.delay(700).animate({opacity:0},500);
        
        //CHECK IF FIRST ELEMENT        
         if(current.attr("id")!="p1"){
            current = current.prev();
            if(current.attr("class")=="imgbox")
                current=current.prev();
        }
        else if(current.attr("id")=="p1"){
            current = $("#p"+$(".wrapper").length.toString());
        }      
        
        current.delay(1400).animate({opacity:1},500);
        
        //SPAWN CURRENT ELEMENTS
        current.children("div.title").delay(2000).css({opacity:"0",top:"-50px"}).animate({top:"35.29%",opacity:"1"});
        current.children("div.infobox").children("div.head").children("h2.info-title").delay(1700).css({opacity:"0",top:"-50px"}).animate({top:"",opacity:"1"});
        current.children("div.infobox").children("div.head").children("p.info-des").delay(1600).css({opacity:"0",top:"-50px"}).animate({top:"",opacity:"1"}); 
        current.children("div.infobox").children("div.description").children("p.what-des").delay(1600).css({opacity:"0",top:"-50px"}).animate({top:"",opacity:"1"});

    }
//SCROLL ANIMATION    
document.addEventListener("wheel", function (e) {
    
    var currenttime = new Date().getTime();
     var difference = currenttime - prevtime;

    // console.log(e.deltaY + " " + difference + " " + back);
    
    //MOUSE SCROLLED DOWN
    if(e.deltaY>=0 && difference > 2700 && navopen==false)
    {
        scrolldown();
        prevtime = currenttime;
    }//SCROLL DOWN END

    //MOUSE SCROLLED UP
    else if(e.deltaY<=0  && difference > 2700 && navopen==false)
    {
        scrollup();
        prevtime = currenttime;
    }//SCROLL UP END
    
},true);//SCROLL ANIMATION END

//ARROW CLICK ANIMATION

//IF RIGHT ARROW PRESSED
$(".rightarrow").click(function(){
    var currenttime = new Date().getTime();
    var difference = currenttime - prevtime;
    if(difference >= 2700)
    {
        scrolldown();
        prevtime = currenttime;
    }
});//RIGHT ARROW CLICK END

//IF LEFT ARROW PRESSED
$(".leftarrow").click(function(){
    var currenttime = new Date().getTime();
    var difference = currenttime - prevtime;
    if(difference >= 2700)
    {
        scrollup();
        prevtime = currenttime;
    } 
});//LEFT ARROW CLICK END


//INFOBOX MOUSE ANIMATION
var card = $(".infobox");
card.on("mousemove",function(e) {  
    
  var ax = -($(window).innerWidth()/2 -e.pageX)/20;
  var ay = ($(window).innerHeight()/2- e.pageY)/20;
    card.css({ transform: "rotateY("+ax+"deg) rotateX("+ay+"deg)","-webkit-transform": "rotateY("+ax+"deg) rotateX("+ay+"deg)","-moz-transform": "rotateY("+ax+"deg) rotateX("+ay+"deg)"});
});
card.on("mouseleave",function(e) {  
    card.css({ transform: "rotateY("+0+"deg) rotateX("+0+"deg)","-webkit-transform": "rotateY("+0+"deg) rotateX("+0+"deg)","-moz-transform": "rotateY("+0+"deg) rotateX("+0+"deg)"});
});
    
        
var h = $(window).outerHeight();
var w = $(window).outerWidth();
$(".wrapper").css({height:h,width:w})
$(".wrapper").css({height:h,width:w});
// $(".imgbox").css({height:.7408*h,width:.2057*w})    
$(".info").css({height:.4162*h,width:.2916*w})   
    
$(window).resize(function(){
var h = $(window).outerHeight();
var w = $(window).outerWidth();
// console.log(w + " " + h);
    
    
$(".wrapper").css({height:h,width:w});
// $(".imgbox").css({height:.7408*h,width:.2057*w})    
$(".info").css({height:.4162*h,width:.2916*w})    
    
});


//NAVBAR MENU    
var navopen = false;
    //IF OPEN BUTTON IS PRESSED
    $("#openmenu").click(function(){
       $("#navmain").fadeIn(800); 
        $("#openmenu").animate({left:"-20vw"});
        $("#closemenu").animate({left:"90%"});

        if($(window).outerWidth()<=600)
        $("#closemenu").css({display:"block"});
        
        $(".rightarrow,.leftarrow").css("display","none");
          $("#left").css({background:"url('img/navbk3.webp')","background-position":"top 100vh left 0"});
          if($(window).outerWidth()<=600)
            {
                $("#left").css({"background-position":"top -10vh left 0vw"})
            }


        navopen = true;
    });
    //IF CLOSE BUTTON IS PRESSED
    $("#closemenu").click(function(){
       $("#navmain").fadeOut(800); 
        $("#openmenu").animate({left:"3%"});
        $("#closemenu").animate({left:"110%"});
        $(".current").removeClass("current");
        $(".currentleft").removeClass("currentleft").css({display:"none"});
        $("#logo").addClass("currentleft").css({display:"block"});
        if($(window).outerWidth()<=600)
        $("#closemenu").css({display:"none"});
        $(".rightarrow,.leftarrow").css("display","block");
        
        $("#left").css({background:"url('img/navbk3.webp')"});
        

        navopen = false;
    });

    $(".gotoprojects").click(function(){
        $("#navmain").fadeOut(800); 
        $("#openmenu").animate({left:"3%"});
        $("#closemenu").animate({left:"110%"});
        $(".current").removeClass("current");
        $(".currentleft").removeClass("currentleft").css({display:"none"});
        $("#logo").addClass("currentleft").css({display:"block"});
        if($(window).outerWidth()<=600)
        $("#closemenu").css({display:"none"});
        $(".rightarrow,.leftarrow").css("display","block");
        
        $("#left").css({background:"url('img/navbk3.webp')"});
        
        navopen = false
    });

//NAVMENU RIGHT WIDTH ANIMATION    
$("#right ul li").click(function(){  
        $(".current").toggleClass("current");
        $(this).children(".menu").toggleClass("current");
        
        var id =$(this).children(".menu").attr("id");
        var idleft = "#"+id + "left";
        
        var currentl = $(".currentleft");
        var futurel = $(idleft);
        
        if(currentl != futurel)
        {
            currentl.fadeOut(500);
            futurel.fadeIn(500).addClass("currentleft");
        } 
        // var current_navBk = $("#left").css("background").substring(47,57);

        // console.log($(".current").length);
        // console.log("lmao " + current_navBk);
        

        if($("#services").hasClass("current"))
        {
            $("#left").css({background:"","background-position":"top 115vh left 10vw"});
            if($(window).outerWidth()<600)
            {
                $("#left").css({"background-position":"top 0vh left -20vw","background-repeat":"no-repeat","background-size":"cover"})
            }
        }

        else if($("#about").hasClass("current"))
        {
            $("#left").css({background:"url('img/navbk2.webp')","background-position":"top 0 left -15vw"});
        }
         else if($("#contact").hasClass("current"))
        {
            $("#left").css({background:"","background-position":"top 115vh left 10vw"});
            if($(window).outerWidth()<600)
            {
                $("#left").css({"background-position":"top 0vh left -20vw","background-repeat":"no-repeat","background-size":"cover"})
            }
        }
        else if($("#logo").hasClass("current"))
        {
            $("#left").css({background:"url('img/navbk3.webp')"});
        }
});   

//CONTACT US MAIN MENU CLICK ANIMATION
$("#ContactUsIcon").click(function(){
    $("#navmain").fadeIn(200); 
    $("#openmenu").animate({left:"-20vw"});
    $("#closemenu").animate({left:"90%"});

    if($(window).outerWidth()<=600)
    $("#closemenu").css({display:"block"});
    
    $(".rightarrow,.leftarrow").css("display","none");
    navopen = true;

    $(".current").removeClass("current");
    $("#contact").addClass("current");
    $(".currentleft").fadeOut(200).removeClass("currentleft");
    $("#contactleft").fadeIn(200).addClass("currentleft");
}); 
$(".gotocontact").click(function(){
    $("#navmain").fadeIn(200); 
    $("#openmenu").animate({left:"-20vw"});
    $("#closemenu").animate({left:"90%"});

    if($(window).outerWidth()<=600)
    $("#closemenu").css({display:"block"});
    
    $(".rightarrow,.leftarrow").css("display","none");
    navopen = true;

    $(".current").removeClass("current");
    $("#contact").addClass("current");
    $(".currentleft").fadeOut(200).removeClass("currentleft");
    $("#contactleft").fadeIn(200).addClass("currentleft");
}); 

//PLUGIN INITIALIZATIONS    
$('select').formSelect(); //contact form select

//Preloader

});
