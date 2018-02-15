function main (){
    var hamburger = document.querySelector('.iconRwd')
    hamburger.addEventListener('click', function(e){  
       changeDisplay(e)
    })
    var a = document.querySelectorAll('.topnav a')
    
    var modal = document.querySelector('.modal')
    modal.addEventListener('click', function(e){
        closeModal(e)
        })
    var images = document.querySelectorAll('#products .product img')
    console.log(images)
    for (var j = 0; j<images.length; j++){
        images[j].addEventListener('click', addModal)
    }
}

function addModal(e){
    openModal(e)
}

function closeModal (e){
    var removeNode = e.target.querySelector('.modalGallery')
    console.log(removeNode)
    e.target.removeChild(removeNode)
    e.target.classList.add('hidden')
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
    var mainImage = document.createElement('img')
    var mainImageSrc = e.target.getAttribute('src')
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    var productName = e.target.parentElement.dataset.product
    console.log(width, mainImageSrc)
    if (width>600 && productName === 'cora') {
        mainImageSrc = insert(mainImageSrc, '_big', 11)
        console.log('bla')
    } else if (width > 600 && productName === 'dorica') {
        mainImageSrc = insert(mainImageSrc, '_big', 13)
    }
    mainImage.setAttribute('src', mainImageSrc)
    mainImage.classList.add('mainImage')
    div.appendChild(mainImage)
    mainImage.addEventListener('click', function(e){
        e.stopPropagation()
    })
    for (var d = 1; d<4; d++){
        var img = document.createElement('img')
        img.setAttribute('src', './images/' + productName + '/' + productName + d + '_.jpg')
        div.appendChild(img)    
    }
    modal.appendChild(div)
    var smallImages = div.querySelectorAll('img')
    for (var i = 1; i<smallImages.length; i++){
        smallImages[i].addEventListener('click', function(e){
            e.stopPropagation()
            e.preventDefault()
           // var temp = e.target.parentElement.querySelector('.mainImage').getAttribute('src')
            var thisAttribute = e.target.getAttribute('src')
            if (width>600 && productName==='cora'){
                thisAttribute = insert(thisAttribute,'_big',13)
                e.target.parentElement.querySelector('.mainImage').setAttribute('src', thisAttribute) 
            } else if (width>600 && productName==='dorica') {
                thisAttribute = insert(thisAttribute,'_big',15)
                e.target.parentElement.querySelector('.mainImage').setAttribute('src', thisAttribute) 
            } else if (width<600){
                e.target.parentElement.querySelector('.mainImage').setAttribute('src', thisAttribute) 
            }
            console.log(thisAttribute)
              
                //console.log(insert(thisAttribute,'_big',15))
           // e.target.setAttribute('src', temp)
            
        })
    }
    modal.classList.remove('hidden')
    
}

function insert(original, string, place) {
    var array = original.split('');
    array.splice(place, 0, string);
    return array.join('');
}

document.addEventListener("DOMContentLoaded", main())


/* smallImages[z].addEventListener('click' function(e){
            e.preventDefault()
            var temp = e.target.parentElement.querySelector('.mainImage').getAttribute('src')
            var thisAttribute = e.target.getAttribute('src')
            e.target.setAttribute('src', temp)
            e.target.setAttribute('src' thisAttribute)
        })*/