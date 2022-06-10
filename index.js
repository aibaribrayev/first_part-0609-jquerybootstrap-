// const varr = document.getElementById("char");
// console.log(varr.value); 

// function displaytext(varr){
//     console.log(varr.target);
// }

// varr.addEventListener("input", x => console.log(x.target.value))
$(document).ready(function(){
    $('button').on('click', function(){
        let [name, chrtr, adv, adj] = Object.values($('input')).map((el) => el.value);
        console.log(name, chrtr)
        console.log(Object.values($('input')).map((el) => el.value)); 
        let answer = `${name} was standing on ${chrtr}'s head outside of cinema, ${adv} eating a ${adj} banana`;
        console.log(answer);
        $( '.result' ).text(answer);
    })
})
