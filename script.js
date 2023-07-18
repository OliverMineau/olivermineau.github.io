

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu");

function opentab(e, tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    e.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function openMenu(){
    sidemenu.style.right = "0";
}

function closeMenu(){
    sidemenu.style.right = "-170px";
}

const observer = new IntersectionObserver( (entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            //Else remove class show to animate multiple times
            //entry.target.classList.remove("show");
        }
        
    });
}, 
{rootMargin: "0px 0px -200px 0px"});

var hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function openApps(btn){
    var hiddenApps = document.querySelectorAll(".hidden-app");
    var shownApps = document.querySelectorAll(".shown-app");

    if(btn.classList.contains("showApp")){
        hiddenApps.forEach((el) =>{
            el.classList.remove("hidden-app");
            el.classList.add("shown-app");
        });
        btn.classList.remove("showApp");
        btn.textContent="See Less"
    }else{
        shownApps.forEach((el) =>{
            el.classList.remove("shown-app");
            el.classList.add("hidden-app");
        });
        btn.classList.add("showApp");
        btn.textContent="See More";
    }
}

function openGames(btn){
    var hiddenApps = document.querySelectorAll(".hidden-game");
    var shownApps = document.querySelectorAll(".shown-game");

    if(btn.classList.contains("showGame")){
        hiddenApps.forEach((el) =>{
            el.classList.remove("hidden-game");
            el.classList.add("shown-game");
        });
        btn.classList.remove("showGame");
        btn.textContent="See Less"
    }else{
        shownApps.forEach((el) =>{
            el.classList.remove("shown-game");
            el.classList.add("hidden-game");
        });
        btn.classList.add("showGame");
        btn.textContent="See More";
    }
}

function initSizesUni(){
    var screenWidth = window.innerWidth;
    var secondWorkElement = document.querySelectorAll('.work')[2];
    var secondGameElement = document.querySelectorAll('.game')[2];

    if (screenWidth <= 1000) {
        secondWorkElement.classList.add('hidden-app');
        secondGameElement.classList.add('hidden-game');
    }else{
        secondWorkElement.classList.remove('hidden-app');
        secondGameElement.classList.remove('hidden-game');
    }
}

window.addEventListener('resize', function() {
  initSizesUni();
});


initSizesUni();