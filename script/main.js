function main (){
    var hamburger = document.querySelector('.iconRwd')
    hamburger.addEventListener('click', function(e){  
       changeDisplay(e)
    })
    var a = document.querySelectorAll('.topnav a')
    console.log(a)
        for(var j=0; j<a.length; j++){
            a[j].addEventListener('click', function(){
                bla() 
            })
                               
        }
}

function bla (){
    for (var k = 0; k < a.length; k++) {
                  if (k === a.length - 1) {
                      a[k].classList.toggle('iconRwd2')
                  } else {
                      a[k].classList.toggle('topnavRwd')
                  }
              }
}
                               
function changeDisplay(e) {
    e.preventDefault();
    var a = e.target.parentElement.querySelectorAll('a')
    for (var i = 0; i<a.length; i++){
        e.target.parentElement.style.position = 'relative'
        if (i===a.length-1){
            a[i].classList.toggle('iconRwd2')
        } else {
            a[i].classList.toggle('topnavRwd')
        }
    }
}

document.addEventListener("DOMContentLoaded", main())