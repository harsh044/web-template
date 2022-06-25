// for Slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous button Control
function Slide(n) {
    showSlides(slideIndex += n)
}

// Image Control
function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slide = document.getElementsByClassName("mySlide");
    if (n > slide.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slide.length}
    for(i=0;i<slide.length;i++){
        slide[i].style.display = "none";
    }
    slide[slideIndex-1].style.display= "block";
}

// For Search Tabs
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContent = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContent.forEach(tabContent=>{
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab=>{
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})

// Resoponsive Navbar Function
function myNavbar(){
    let x = document.getElementById("mynav");
    if(x.style.display == "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
}

// Responsive search tabs
const tabcontent = document.querySelectorAll('.tabcontent');
const tablinks = document.querySelectorAll('.tablink');

function openTab(event,tabName){
    // Remove TabContents
    tabcontent.forEach((tabcontent)=>{
        tabcontent.style.display = "none"
    });
    // Remove Active Tab Links
    tablinks.forEach((tablink)=>{
        tablink.classList.remove("active")
    });

    // add active class in tab link And Open tabcontent
    event.currentTarget.classList.add("active");
    document.getElementById(tabName).style.display = "block";
}

