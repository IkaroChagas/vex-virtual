function OnOff() {
   
    let Navtoggle = document.querySelector('.nav-area');
    
    if (Navtoggle.style.width === '200px') {
        Navtoggle.style.width = '0px';
    } 
     else {
        Navtoggle.style.width = '200px';
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


