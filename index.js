$(document).ready(function(){
    $(".icon").hide();
    $('button').on('click', function(){
        let [h, w, nclr] = Object.values($('input')).map((el) => el.value);
        let size = h*w*nclr;
        let ok = size < 20000 ? true : false;
        answer = `File is ${size}KB which is` + (ok ? ' ok' : ' not good');
        $( '.result' ).text(answer);
        if(!ok)
            $('.icon').attr("src", "icons/thumb-down.png"); 
        $(".icon").show();
    })
})
