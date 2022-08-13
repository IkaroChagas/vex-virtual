function OnOff() {
    let NavToggleOn = document.querySelector('.nav-area')
    if (NavToggleOn.style.display === 'none'){
        NavToggleOn.style.display = 'block';
    } else {
        NavToggleOn.style.display = 'none';
    }

   if(NavToggleOn.style.display === 'block') {
       setTimeout(function() {
            NavToggleOn.style.opacity = 1;
        }, 400);
    } else {
        setTimeout(function() {
            NavToggleOn.style.display === 'none';
            NavToggleOn.style.opacity = 0;
    }, 400);
   
}}

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