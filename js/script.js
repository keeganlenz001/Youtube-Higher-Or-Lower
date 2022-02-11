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


function setUp() {
    document.getElementById("page-wrapper").innerHTML = "<img class='background-img1' src='https://img.youtube.com/vi/" + vid_thumbnail1 + "/maxresdefault.jpg' alt='first-background-img'><img class='background-img2' src='https://img.youtube.com/vi/" + vid_thumbnail2 + "/maxresdefault.jpg' alt='second-background-img'><img class='slider-background' src='https://img.youtube.com/vi/" + slider_thumbnail + "/maxresdefault.jpg' alt='slider-background-img'><div class='container1'><div class='vid1' onclick='lower()'><img src='https://img.youtube.com/vi/" + vid_thumbnail1 + "/maxresdefault.jpg' alt='first-img'><div class='vid-title1'><p>" + vid_title1 + "</p></div></div><h2 class='vid-view2'>" + vid_views1 + "</h2></div><div class='container2'><div class='vid2' onclick='higher()'><img src='https://img.youtube.com/vi/" + vid_thumbnail2 + "/maxresdefault.jpg' alt='second-img'><div class='vid-title2'><p>" + vid_title2 + "</p></div></div><div id='output'></div></div><div class='slider'><div class='slider-vid' onclick='higher()'><img src='https://img.youtube.com/vi/" + slider_thumbnail + "/maxresdefault.jpg' alt='second-img'><div class='slider-title'><p>" + slider_title + "</p></div></div></div><div id='output-circle'>VS</div>"
}

function correct() {
    var outputCircle = document.getElementById("output-circle");
    outputCircle.innerHTML = "&#10004;";
    outputCircle.style.backgroundColor = "green";
    outputCircle.style.color = "white";
    outputCircle.style.fontSize = "4vw";

    vid_views1 = vid_views2;
    view_num1 = view_num2;
    vid_title1 = vid_title2;
    vid_thumbnail1 = vid_thumbnail2;
    console.log(vid_views1, view_num1, vid_title1, vid_thumbnail1)

    vid_views2 = slider_views;
    view_num2 = slider_view_num;
    vid_title2 = slider_title;
    vid_thumbnail2 = slider_thumbnail;

    document.getElementById("output").innerHTML = "<h2>" + vid_views2 + "</h2>";
    setUp();
}
function incorrect() {
    document.getElementById("output").innerHTML = "<h2>" + vid_views2 + "</h2>";
    var outputCircle = document.getElementById("output-circle");
    outputCircle.innerHTML = "&#10006;";
    outputCircle.style.backgroundColor = "red";
    outputCircle.style.color = "white";
    outputCircle.style.fontSize = "4vw";
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