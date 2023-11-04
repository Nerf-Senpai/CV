// UI
// Start Navbar
const navbuttons = document.querySelector('.navbuttons');
// console.log(navbuttons);
navbuttons.addEventListener('click', () => navbuttons.classList.toggle('changes'));

// for Navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
    const getScrolly = window.screenY;
    //console.log(getScrolly);

    if(getScrolly >= 200){
        navbar.classList.add('navmenus');
    }
    else{
        navbar.classList.remove('navmenus');
    }
})

//End Navbar



























// Start Garllary Section
const gallarylists= doucment.querySelectorAll('.gallarylists');
const fliternew = doucment.querySelectorAll('.filter.new');
        fliterfree = doucment.querySelectorAll('.filter.new');
        filterpro   = doucment.querySelectorAll('.filter.pro');

gallarylists.forEach((gallarylists) => {
    // console.log(gallarylists);

    gallarylists.addEventlistener('click',(e)=>{
        let datafilter = gallarylists.getAttribute('data-filter');
        
     if(datafilter === "all"){
        removeactiveitem();
         e.target.classlist.add('activeitems');

        filterfree.foreach(filterfree=>{
            filterfree.style.display="inline-block";
        });

        filterpro.foreach(filterpro=>{
            filterpro.style.display="inline-block";
        });

        fiternew.foreach(filternew=>{
            filternew.style.dispaly ="inline-block";
        });


    }   else if(datafilter === "new"){
        removeactiveitem();
        e.target.classlist.add('activeitems');


        filterfree.foreach(filterfree=>{
            filterfree.style.display="none";
        });

        filterpro.foreach(filterpro=>{
            filterpro.style.display="none";
        });

        fiternew.foreach(filternew=>{
            filternew.style.dispaly ="inline-block";
        });




    }else if (datafilter === "free"){
        removeactiveitem();
        e.target.classlist.add('activeitems');

        filterfrees.foreach(filterfree=>{
            filterfree.style.display="inline-block";
        });

        filterpro.foreach(filterpro=>{
            filterpro.style.display="none";
        });

        fiternew.foreach(filternew=>{
            filternew.style.dispaly ="none";
        });












    }else{
        removeactiveitem();
        e.target.classlist.add('activeitems');

                filterfree.foreach(filterfree=>{
            filterfree.style.display="none";
        });

        filterpro.foreach(filterpro=>{
            filterpro.style.display="inline-block";
        });

        fiternew.foreach(filternew=>{
            filternew.style.dispaly ="none";
        });

        



    }
        })
});

// restore current active item
function removeactiveitem() {
    gallarylists.foreach(gallarylists => {
        gallarylist.classlist.remove('activeitems');
    })
}



// End Gallary Section
