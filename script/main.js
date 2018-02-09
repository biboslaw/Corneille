function main (){
    var hamburger = document.querySelector('.iconRwd')
    hamburger.addEventListener('click', function(e){  
       changeDisplay(e)
    })
    var a = document.querySelectorAll('.topnav a')
    console.log(a)
      
    
    var images = document.querySelectorAll('#products img')
    for (var j = 0; j<images.length; j++){
        images[j].addEventListener('click', function(e){
            openModal(e)
        })
        images[j].addEventListener('touchcenter', function(e){
            e.stopPropagation()
            openModal(e)
        })
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

function openModal(e){
    var modal = document.querySelector('.modal')
    modal.style.display = 'block'
    var cloneImg = e.target.cloneNode()
    modal.appendChild(cloneImg)
    
}

document.addEventListener("DOMContentLoaded", main())