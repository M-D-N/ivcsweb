document.body.onload = function(){
    setTimeout(function(){

        var preloader = document.querySelector('#pagePreloader');
        if( !preloader.classList.contains('done') ) {
            preloader.classList.add('done')
        }

    }, 1000)
}