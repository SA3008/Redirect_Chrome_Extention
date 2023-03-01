
console.log('object;');


window.addEventListener("scroll", ()=>{

    let links = document.getElementsByTagName('a');

    for(let  i = 0 ; i < links.length; i++){
        links[i].href = "https://www.wikipedia.org/";
        links[i].style.color = "#89b3f5";
    }


})


