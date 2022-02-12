var isCorrect = false;
var count = 0;

var vid_views1 = "10,166,751,485";
var view_num1 = parseInt(vid_views1.replace(/,/g, ''));
var vid_title1 = "Baby Shark Dance | #babyshark Most Viewed Video | Animal Songs | PINKFONG Songs for Children";
var vid_thumbnail1 = "XqZsoesa55w";

var vid_views2 = "7,735,183,650";
var view_num2 = parseInt(vid_views2.replace(/,/g, ''));
var vid_title2 = "Luis Fonsi - Despacito ft. Daddy Yankee";
var vid_thumbnail2 = "kJQP7kiw5Fk";

var slider_views = "6,160,774,444";
var slider_view_num = parseInt(slider_views.replace(/,/g, ''));
var slider_title = "Johny Johny Yes Papa 👶 THE BEST Song for Children | LooLoo Kids";
var slider_thumbnail = "F4tHL8reNCs";


window.setInterval(function() {
    var title1_height = document.getElementById('vid-title1').offsetHeight;
    var title2_height = document.getElementById('vid-title2').offsetHeight;

    if (title1_height != title2_height) {
        if (title1_height > title2_height) {
            document.getElementById('vid-title2').style.height = String(title1_height) + "px";
        }else{
            document.getElementById('vid-title1').style.height = String(title2_height) + "px";
        }
    }
});


function setUp() {
    document.getElementById("page-wrapper").innerHTML = "<img id='background-img1' src='https://img.youtube.com/vi/" + vid_thumbnail1 + "/maxresdefault.jpg' alt='first-background-img'><img id='background-img2' src='https://img.youtube.com/vi/" + vid_thumbnail2 + "/maxresdefault.jpg' alt='second-background-img'><img id='slider-background' src='https://img.youtube.com/vi/" + slider_thumbnail + "/maxresdefault.jpg' alt='slider-background-img'><div id='container1'><div id='vid1' onclick='lower()'><img src='https://img.youtube.com/vi/" + vid_thumbnail1 + "/maxresdefault.jpg' alt='first-img'><div id='vid-title1'><p>" + vid_title1 + "</p></div></div><h2 id='vid-views1'>" + vid_views1 + "</h2></div><div id='container2'><div id='vid2' onclick='higher()'><img src='https://img.youtube.com/vi/" + vid_thumbnail2 + "/maxresdefault.jpg' alt='second-img'><div id='vid-title2'><p>" + vid_title2 + "</p></div></div><div id='output'></div></div><div id='slider'><div id='slider-vid' onclick='higher()'><img src='https://img.youtube.com/vi/" + slider_thumbnail + "/maxresdefault.jpg' alt='second-img'><div id='slider-title'><p>" + slider_title + "</p></div></div></div><div id='output-circle'>VS</div>"
}

function counter(count) {
    if (count < view_num2) {
        output = document.getElementById('output');

        count = count + (Math.ceil(view_num2 * 0.01));
        output.innerHTML = "<h2>" + count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</h2>";
        setTimeout(function() {counter(count);}, 1);
    }else{
        count = view_num2
        output.innerHTML = "<h2>" + count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</h2>";
        transition();
    }
}

function correct() {
    isCorrect = true;
    counter(0);
}

function incorrect() {
    isCorrect = false;
    counter(0);
}

function transition() {
    if (isCorrect == true) {
        var outputCircle = document.getElementById("output-circle");
        outputCircle.innerHTML = "&#10004;";
        outputCircle.style.backgroundColor = "green";
        outputCircle.style.color = "white";
        outputCircle.style.fontSize = "4vw";

        vid_views1 = vid_views2;
        view_num1 = view_num2;
        vid_title1 = vid_title2;
        vid_thumbnail1 = vid_thumbnail2;

        vid_views2 = slider_views;
        view_num2 = slider_view_num;
        vid_title2 = slider_title;
        vid_thumbnail2 = slider_thumbnail;

        setTimeout(function() {circleClose();}, 500);
    }else{
        document.getElementById("output").innerHTML = "<h2>" + vid_views2 + "</h2>";
        var outputCircle = document.getElementById("output-circle");
        outputCircle.innerHTML = "&#10006;";
        outputCircle.style.backgroundColor = "red";
        outputCircle.style.color = "white";
        outputCircle.style.fontSize = "5vw";
    }
    
}

function circleClose() {
    var outputCircle = document.getElementById("output-circle");
    outputCircle.style.width = "0vw";
    outputCircle.style.height = "0vw";
    outputCircle.style.marginLeft = "calc(50vw - 0px)";
    outputCircle.style.marginTop = "30vh";
    outputCircle.style.border = "0px solid rgb(40, 40, 40)";
    outputCircle.style.fontSize = "0vw";
    outputCircle.style.lineHeight = "0vw";

    setTimeout(function() {correctAnimation();}, 500);
}
function correctAnimation() {
    var background_img1 = document.getElementById("background-img1");
    var background_img2 = document.getElementById("background-img2");
    var slider_background = document.getElementById("slider-background");

    var container1 = document.getElementById("container1");
    var container2 = document.getElementById("container2");
    var slider = document.getElementById("slider");

    background_img1.style.marginLeft = "calc(-50vw - 4px)";
    background_img2.style.marginLeft = "0";
    slider_background.style.marginLeft = "calc(50vw + 8px)";

    container1.style.marginLeft = "calc(-50vw - 4px)";
    container2.style.marginLeft = "0";
    slider.style.marginLeft = "50vw";

    container1.style.borderRight = "8px solid rgb(40, 40, 40)";
    container2.style.borderLeft = "none";
    container2.style.borderRight = "4px solid rgb(40, 40, 40)";

    setTimeout(function() {circleOpen();}, 2000);
    setTimeout(function() {setUp();}, 2500);
}
function circleOpen() {
    var outputCircle = document.getElementById("output-circle");
    outputCircle.innerHTML = "VS";
    outputCircle.style.backgroundColor = "white";
    outputCircle.style.color = "rgb(40, 40, 40)";

    outputCircle.style.width = "7vw";
    outputCircle.style.height = "7vw";
    outputCircle.style.marginLeft = "calc(46.5vw - 8px)";
    outputCircle.style.marginTop = "23vh";
    outputCircle.style.border = "8px solid rgb(40, 40, 40)";
    outputCircle.style.fontSize = "2vw";
    outputCircle.style.lineHeight = "7vw";
}

function higher() {
    if (view_num2 > view_num1) {
        correct();
    }else{
        incorrect();
    }
}
function lower() {
    if (view_num1 > view_num2) {
        correct();
    }else{
        incorrect();
    }
}