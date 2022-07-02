function OnOff() {
   
    if (document.querySelector(".nav-area").style.width === '200px') {
        document.querySelector(".nav-area").style.width ='0px';
    } 
     else {
        document.querySelector(".nav-area").style.width = '200px';
    } 
}

let count = 1

document.getElementById('slide1').checked = true;

setInterval(function() {
    nextImage() 
}, 3000)

function nextImage() {
    count++
    if (count>3) {
        count = 1
    }

    document.getElementById('slide'+count).checked = true;
}


