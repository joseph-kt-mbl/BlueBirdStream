
let myPosters = document.querySelectorAll(".Genres .posters-container .poster");

for(let i=0;i<myPosters.length ;i++){
    myPosters[i].onmouseenter = _ =>{
        myPosters[i].style.cssText = "animation: scaleUp 0.6s ease forwards;";
        for(let j=0;j<myPosters.length;j++){
            if(j !== i){
                myPosters[j].style.cssText = " filter: blur(0.5px) grayscale(100%);opacity:0.6";
            }
        }
    }
    myPosters[i].onmouseleave = _ =>{
        myPosters[i].style.setProperty("animation","scaleDown 0.4s ease forwards");
        for(let j=0;j<myPosters.length;j++){
            if(j !== i){
                myPosters[j].style.removeProperty("filter")
                myPosters[j].style.removeProperty("opacity");
            }
        }
    }
}

//let postersContainer = document.querySelector(".posters-container");
for(let i=0;i<myPosters.length;i++){
    let imgPoster  = document.createElement("img");
    
    imgPoster.src = `Images/poster${i+1}.jpg`;
    imgPoster.alt = `poster ${i+1}`;
myPosters[i].appendChild(imgPoster);
}





let suggestions = document.querySelectorAll(".content .suggestions .row button");

for(let i=0;i<suggestions.length;i++){
    suggestions[i].addEventListener("click",_ =>{
        suggestions[i].style.backgroundColor = "#9733a7";
        for(let j=0;j<suggestions.length;j++){
            if(i!==j){
                suggestions[j].style.backgroundColor = "#1e283a";
                suggestions[j].style.color = '#fff';
            }
        }
    })
}

suggestions[0].click();




let bar = document.getElementById("bar");


bar.addEventListener("click", _ =>{
    let sideBar = document.querySelector(".side-bar");
    if(sideBar.style.display === "none"){
        sideBar.style.display = "block";
    }
    else{
        sideBar.style.display = "none";
    }
})