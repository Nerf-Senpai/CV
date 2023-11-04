// ScrollReveal({
//     origin: 'top',
//     distance: '30px',
//     duration: 2000,
//     reset: true,
// }).reveal('.headline',{
//     interval: 200
// });

$(document).ready(function() {
    $('#pagepiling').pagepiling({
        menu: '#myMenu',
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: ['index.html', 'about', 'potofolio','contact'],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#f6f6f6',
            'bulletsColor':'#ffcb74',
            'position': 'right',
            'tooltips': ['home', 'about', 'potofolio','contact']
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 4,
        touchSensitivity: 4,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

//events
        onLeave: function(index, nextIndex, direction){
//after leaving section 2
// if(index == 2 && direction =='down'){
//     alert("Going to section 3!");
// }
//
// else if(index == 2 && direction == 'up'){
//     alert("Going to section 1!");
// }
        },

        afterLoad: function(anchorLink, index){
//using index
// if(index == 3){
//     // document.querySelector(".ohp").classList.add("bg-danger")
//     // alert("Section 3 ended loading");
// }else{
//     // document.querySelector(".ohp").classList.remove("bg-danger")
// }

//using anchorLink
// if(anchorLink == 'secondPage'){
//     alert("Section 2 ended loading");
// }
        },
        afterRender: function(){},
    });
});

// pofolio page
const gallerylists = document.querySelectorAll('.gallerylists');
const filterslandingpage = document.querySelectorAll('.filters.landingpage');
const flitersdashboard = document.querySelectorAll('.filters.dashboard')
const filtersredesignwebsite = document.querySelectorAll('.filters.redesignwebsite')

gallerylists.forEach((gallerylist)=>{
    let datafilter = gallerylist.getAttribute('data-filter');
    // console.log(datafilter)
    gallerylist.addEventListener('click',(e)=>{
        if(datafilter === "all"){
            removeractiveitem();
            e.target.classList.add('activeitmes')
            filterslandingpage.forEach(filterslandingpage=>{
                filterslandingpage.style.display="inline-block";
            });
            flitersdashboard.forEach(flitersdashboard=>{
                flitersdashboard.style.display="inline-block";
            });
            filtersredesignwebsite.forEach(filtersredesignwebsite=>{
                filtersredesignwebsite.style.display="inline-block";
            });
        }else if(datafilter === "landingpage"){
            removeractiveitem();
            e.target.classList.add('activeitmes')
            filterslandingpage.forEach(filterslandingpage=>{
                filterslandingpage.style.display="inline-block";
            });
            flitersdashboard.forEach(flitersdashboard=>{
                flitersdashboard.style.display="none";
            });
            filtersredesignwebsite.forEach(filtersredesignwebsite=>{
                filtersredesignwebsite.style.display="none";
            });
        }else if(datafilter === "dashboard"){
            removeractiveitem();
            e.target.classList.add('activeitmes')
            filterslandingpage.forEach(filterslandingpage=>{
                filterslandingpage.style.display="none";
            });
            flitersdashboard.forEach(flitersdashboard=>{
                flitersdashboard.style.display="inline-block";
            });
            filtersredesignwebsite.forEach(filtersredesignwebsite=>{
                filtersredesignwebsite.style.display="none";
            });
        }else if(datafilter === "redesignwebsite"){
            removeractiveitem();
            e.target.classList.add('activeitmes')
            filterslandingpage.forEach(filterslandingpage=>{
                filterslandingpage.style.display="none";
            });
            flitersdashboard.forEach(flitersdashboard=>{
                flitersdashboard.style.display="none";
            });
            filtersredesignwebsite.forEach(filtersredesignwebsite=>{
                filtersredesignwebsite.style.display="inline-block";
            });
        }
    })
})
function removeractiveitem(){
    gallerylists.forEach((gallerylist)=> {
        gallerylist.classList.remove('activeitems');
});
}