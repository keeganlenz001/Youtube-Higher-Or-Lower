vid_views1 = "10,166,751,485";
view_num1 = parseInt(vid_views1.replace(/,/g, ''));

vid_title1 = "Baby Shark Dance | #babyshark Most Viewed Video | Animal Songs | PINKFONG Songs for Children";
vid_thumbnail1 = "test-img1.jpg";

vid_views2 = "7,735,183,650";
view_num2 = parseInt(vid_views2.replace(/,/g, ''));

vid_title2 = "Luis Fonsi - Despacito ft. Daddy Yankee";
vid_thumbnail2 = "test-img2.jpg";

function startGame() {
    document.getElementById("page-wrapper").innerHTML = ""
}

function lower() {
    document.getElementById("output").innerHTML = "<h2>" + vid_views2 + "</h2>"
    var outputCircle = document.getElementById("output-circle")
    if (view_num1 > view_num2) {
        outputCircle.innerHTML = "&#10004;"
        outputCircle.style.backgroundColor = "green";
    }else{
        outputCircle.innerHTML = "&#10006;"
        outputCircle.style.backgroundColor = "red";
    }
}

function higher() {
    document.getElementById("output").innerHTML = "<h2>" + vid_views2 + "</h2>"
    var outputCircle = document.getElementById("output-circle")
    if (view_num2 > view_num1) {
        outputCircle.innerHTML = "&#10004;"
        outputCircle.style.backgroundColor = "green";
    }else{
        outputCircle.innerHTML = "&#10006;"
        outputCircle.style.backgroundColor = "red";
    }
}