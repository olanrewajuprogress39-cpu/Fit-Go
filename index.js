
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

    /* copy function */

    const copybtn = document.querySelector('.copy-btn');
    const accno = document.querySelector('.accno').innerText;

    copybtn.addEventListener('click', function(){
      navigator.clipboard.writeText(accno)
    })

    /* purchase */

    const purchase = document.querySelector('.purchase');
    const purchasepremuim = document.getElementById('purchase-premuim');
    const purchasediamond = document.getElementById('purchase-diamond');
    const paymentmodal = document.querySelector('.paymentmodal');
    const payclosebtn = document.querySelector('.pay-close-btn');

    purchase.addEventListener('click', function(){
      paymentmodal.style.display = 'flex';
    })
    payclosebtn.addEventListener('click', function(){
      paymentmodal.style.display = 'none';
    })

    purchasepremuim.addEventListener('click', function(){
      paymentmodal.style.display = 'flex';
    })
    payclosebtn.addEventListener('click', function(){
      paymentmodal.style.display = 'none';
    })

    purchasediamond.addEventListener('click', function(){
      paymentmodal.style.display = 'flex';
    })
    payclosebtn.addEventListener('click', function(){
      paymentmodal.style.display = 'none';
    })



    







