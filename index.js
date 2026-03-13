
    /* const menuicon = document.querySelector('.menu-icon');
    const menulink = document.querySelector('.menu-link');

    function showmenu() {
      menulink.toggle("open")
    }

    menuicon.addEventListener('click', showmenu);
 *  /      

       /*  HERO BUTTON */

    const startbtn = document.querySelector('.started-btn');
    const contactbtn = document.querySelector('.contact-btn');


    startbtn.addEventListener('click', ()=>{
      document.getElementById('plan').scrollIntoView({
        behavior:'smooth'
      });
    });
    contactbtn.addEventListener('click', ()=>{
      document.getElementById('contactme').scrollIntoView({
        behavior:'smooth'
      });
    });

    /* schedule modal */

    const scheduleModal = document.getElementById('scheduleModal');
    const openSchedule = document.getElementById("openSchedule");
    const closeSchedule = document.getElementById("closeSchedule");


    openSchedule.addEventListener('click', ()=> {
      scheduleModal.style.display = 'flex';
    });
    closeSchedule.addEventListener('click', ()=> {
      scheduleModal.style.display = 'none';
    });




  const sidebarmenu = document.querySelector('.sidebar-menu');
  const closebtn = document.querySelector('.close-btn');
  const openbtn = document.querySelector('#menu-icon');

  openbtn.addEventListener('click', function(){
    sidebarmenu.style.display = 'flex'
  })

  closebtn.addEventListener('click', function(){
    sidebarmenu.style.display = 'none'

  })
