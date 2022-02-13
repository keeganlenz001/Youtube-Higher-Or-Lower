var playing = false;
var clicked = 0;
var score = 0;
var isCorrect = false;
var count = 0;

var vid_views1 = "";
var view_num1 = 0;
var vid_title1 = "";
var vid_thumbnail1 = "";

var vid_views2 = "";
var view_num2 = 0;
var vid_title2 = "";
var vid_thumbnail2 = "";

var slider_views = "";
var slider_view_num = 0;
var slider_title = "";
var slider_thumbnail = "";


var videos = [
    ["10,166,751,485", "Baby Shark Dance | #babyshark Most Viewed Video | Animal Songs | PINKFONG Songs for Children", "XqZsoesa55w"],
    ["7,735,183,650", "Luis Fonsi - Despacito ft. Daddy Yankee", "kJQP7kiw5Fk"],
    ["6,160,774,444", "Johny Johny Yes Papa 👶 THE BEST Song for Children | LooLoo Kids", "F4tHL8reNCs"]
]


window.setInterval(function() {
    if (playing) {
        var title1_height = document.getElementById('vid-title1').offsetHeight;
        var title2_height = document.getElementById('vid-title2').offsetHeight;

        if (title1_height != title2_height) {
            if (title1_height > title2_height) {
                document.getElementById('vid-title2').style.height = String(title1_height) + "px";
            }else{
                document.getElementById('vid-title1').style.height = String(title2_height) + "px";
            }
        }
    }
});

function newGame() {
    score = 0;

    document.getElementById('start-game').style.zIndex = -1;
    document.getElementById('game-wrapper').style.marginTop = "0vh";
    document.getElementById('game-over-wrapper').style.zIndex = "-3"
    
    setTimeout(() => {document.getElementById('start-game').innerHTML = ""}, 1000)
    initVideos();
}
function initVideos() {
    var random1 = Math.floor(Math.random() * videos.length);
    var random2 = Math.floor(Math.random() * videos.length);
    var random3 = Math.floor(Math.random() * videos.length); 

    if (random1 != random2 && random2 != random3 && random1 != random3) {
        vid_views1 = videos[random1][0];
        view_num1 = parseInt(vid_views1.replace(/,/g, ''));
        vid_title1 = videos[random1][1];
        vid_thumbnail1 = videos[random1][2];
    
        vid_views2 = videos[random2][0];
        view_num2 = parseInt(vid_views2.replace(/,/g, ''));
        vid_title2 = videos[random2][1];
        vid_thumbnail2 = videos[random2][2];
    
        slider_views = videos[random3][0];
        slider_view_num = parseInt(slider_views.replace(/,/g, ''));
        slider_title = videos[random3][1];
        slider_thumbnail = videos[random3][2];
    }else {
        initVideos();
    }

    setUp();
}
function setUp() {
    playing = true;
    document.getElementById("game-wrapper").innerHTML = "<img id='background-img1' src='https://img.youtube.com/vi/" + vid_thumbnail1 + "/maxresdefault.jpg' alt='first-background-img'><img id='background-img2' src='https://img.youtube.com/vi/" + vid_thumbnail2 + "/maxresdefault.jpg' alt='second-background-img'><img id='slider-background' src='https://img.youtube.com/vi/" + slider_thumbnail + "/maxresdefault.jpg' alt='slider-background-img'><div id='container1'><div id='vid1' onclick='lower()'><img src='https://img.youtube.com/vi/" + vid_thumbnail1 + "/maxresdefault.jpg' alt='first-img'><div id='vid-title1'><p>" + vid_title1 + "</p></div></div><h2 id='vid-views1'>" + vid_views1 + "</h2></div><div id='container2'><div id='vid2' onclick='higher()'><img src='https://img.youtube.com/vi/" + vid_thumbnail2 + "/maxresdefault.jpg' alt='second-img'><div id='vid-title2'><p>" + vid_title2 + "</p></div></div><div id='output'></div></div><div id='slider'><div id='slider-vid' onclick='higher()'><img src='https://img.youtube.com/vi/" + slider_thumbnail + "/maxresdefault.jpg' alt='second-img'><div id='slider-title'><p>" + slider_title + "</p></div></div></div><div id='output-circle'>VS</div><div id='game-cover'></div>"
    clicked = 0;
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
    score++;
    counter(0);
}

function incorrect() {
    isCorrect = false;
    counter(0);
}

function transition() {
    if (isCorrect) {
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

        nextVid();
        function nextVid() {
            random3 = Math.floor(Math.random() * videos.length);

            if (videos[random3][0] != vid_views1 && videos[random3][0] != vid_views2) {
                slider_views = videos[random3][0];
                slider_view_num = parseInt(slider_views.replace(/,/g, ''));
                slider_title = videos[random3][1];
                slider_thumbnail = videos[random3][2];
            }else{
                nextVid();
            }
        }

        setTimeout(function() {circleClose();}, 500);
    }else{
        var outputCircle = document.getElementById("output-circle");
        outputCircle.innerHTML = "&#10006;";
        outputCircle.style.backgroundColor = "red";
        outputCircle.style.color = "white";
        outputCircle.style.fontSize = "5vw";

        document.getElementById('game-over-wrapper').innerHTML = "<div class='game-over'><h3>You Scored:</h3><h2>" + score + "</h2><p id='ending-text'></p><button onclick='newGame()'>Play again</button></div>"
        
        document.getElementById('game-over-wrapper').style.backgroundSize = "100vw 100vh";
        document.getElementById('game-over-wrapper').style.backgroundRepeat = "no-repeat";
        document.getElementById('game-over-wrapper').style.backgroundRepeat = "center center";

        if (score == 0) {
            document.getElementById('game-over-wrapper').style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('gifs/score_0.gif')";
            document.getElementById('ending-text').innerHTML = "I don't think I have to say much here..."
        }else if (score == 1) {
            document.getElementById('game-over-wrapper').style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('gifs/score_1.gif')";
            document.getElementById('game-over-wrapper').style.backgroundSize = "cover";
            document.getElementById('ending-text').innerHTML = "Well, you did slightly better than the worst you could have possibly done, so hooray?"
        }else if (score == 2) {
            document.getElementById('game-over-wrapper').style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('gifs/score_2.gif')";
            document.getElementById('ending-text').innerHTML = "Overall, a pretty mediocre performance."
        }else if (score == 3) {
            document.getElementById('game-over-wrapper').style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('gifs/score_3.gif')";
            document.getElementById('ending-text').innerHTML = "Average... painfully average."
        }else if (score == 4) {
            document.getElementById('game-over-wrapper').style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('gifs/score_4.gif')";
            document.getElementById('ending-text').innerHTML = "Not bad. Not good either, but not bad."
        }else if (score == 5) {
            document.getElementById('game-over-wrapper').style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('gifs/score_5.gif')";
            document.getElementById('ending-text').innerHTML = "Pretty good honestly. 10 is better though... 2 times better."
        }
        setTimeout(function() {circleClose();}, 500);
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

    if (isCorrect == true) {
        setTimeout(function() {correctAnimation();}, 500);
    }else{
        setTimeout(function() {incorrectAnimation();}, 500);
    }
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
    slider_background.style.marginLeft = "50vw";

    container1.style.marginLeft = "calc(-50vw - 4px)";
    container2.style.marginLeft = "0vw";
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

function incorrectAnimation() {
    document.getElementById('game-wrapper').style.marginTop = "calc(-100vh - 10px)";
    setTimeout(() => {document.getElementById('game-over-wrapper').style.zIndex = "1"}, 1000);
}

function higher() {
    clicked++;
    if (clicked == 1) {
        if (view_num2 > view_num1) {
            correct();
        }else{
            incorrect();
        }
    }
}
function lower() {
    clicked++;
    if (clicked == 1) {
        if (view_num1 > view_num2) {
            correct();
        }else{
            incorrect();
        }
    }   
}