function main (){
    var hamburger = document.querySelector('.iconRwd')
    hamburger.addEventListener('click', function(e){  
       changeDisplay(e)
    })
    var a = document.querySelectorAll('.topnav a')
    
    var close = document.querySelector('.close')
    close.addEventListener('click', function(e){
        e.target.parentElement
    })
    var images = document.querySelectorAll('#products .product img')
    console.log(images)
    for (var j = 0; j<images.length; j++){
        images[j].addEventListener('click', function(e){
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
    var div = document.createElement('div')
    div.classList.add('modalGallery')
    var cloneImg = e.target.cloneNode()
    cloneImg.classList.add('mainImage')
    var productName = e.target.parentElement.dataset.product
    div.appendChild(cloneImg)
    for (var d = 1; d<4; d++){
        var img = document.createElement('img')
        img.setAttribute('src', '../images/'+productName+d+'_.jpg')
        div.appendChild(img)
        
    }
    modal.appendChild(div)
    
    
    
    modal.style.display = 'block'
    console.log(productName)
    
    
}

document.addEventListener("DOMContentLoaded", main())