function main (){
    var hamburger = document.querySelector('.iconRwd')
    hamburger.addEventListener('click', function(e){  
       changeDisplay(e)
    })
    var a = document.querySelectorAll('.topnav a')
    
    var close = document.querySelector('.close')
    close.addEventListener('click', function(e){
        e.preventDefault()
        var removeNode = e.target.parentElement.querySelector('.modalGallery')
        console.log(removeNode)
        e.target.parentElement.removeChild(removeNode)
        e.target.parentElement.classList.add('hidden')
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
        img.setAttribute('src', './images/' + productName + '/' + productName + d + '_.jpg')
        div.appendChild(img)    
    }
    modal.appendChild(div)
    var smallImages = div.querySelectorAll('img')
    for (var i = 0; i<smallImages.length; i++){
        smallImages[i].addEventListener('click', function(e){
            e.preventDefault()
            var temp = e.target.parentElement.querySelector('.mainImage').getAttribute('src')
            var thisAttribute = e.target.getAttribute('src')
            console.log(temp)
            e.target.setAttribute('src', temp)
            e.target.parentElement.querySelector('.mainImage').setAttribute('src', thisAttribute)
        })
    }
    modal.classList.remove('hidden')
}



document.addEventListener("DOMContentLoaded", main())


/* smallImages[z].addEventListener('click' function(e){
            e.preventDefault()
            var temp = e.target.parentElement.querySelector('.mainImage').getAttribute('src')
            var thisAttribute = e.target.getAttribute('src')
            e.target.setAttribute('src', temp)
            e.target.setAttribute('src' thisAttribute)
        })*/