console.log('Fetching LInks')

let text='lec_19';
let links=document.links;
let href=links.href;

Array.from(links).forEach(function(element){
    href=element.href;
    if(href.includes(text)){
        console.log(href)
    }
});

