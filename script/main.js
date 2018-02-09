function main (){
    var a = document.querySelector('.iconRwd')
    a.addEventListener('click', function(e){  
       changeDisplay(e)
    })   
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