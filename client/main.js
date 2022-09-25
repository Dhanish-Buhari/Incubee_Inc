/**
* Template Name: Yummy - v1.2.0
* Template URL: https://bootstrapmade.com/yummy-bootstrap-restaurant-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll('#navbar a');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function (event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function (event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Gallery Slider
   */
  new Swiper('.gallery-slider', {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});


async function download_images() {
  download_images1();
  download_images2();
  download_images3();
  download_images4();
  download_images5();
  download_images6();
  download_images7();
  download_images8();
  download_images9();
  download_images10();
  download_images11();
  download_images12();
  download_images13();
  download_images14();
  download_images15();
  download_images16();
  download_images17();
  download_images18();
  download_images19();
  download_images20();
  download_images21();
  download_images22();
  download_images23();
  download_images24();
  download_images25();
  download_images26();
  download_images27();
  download_images28();
  download_images29();
  download_images30();
  download_images31();
  download_images32();
  download_images33();
}

async function download_images1() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011227);
  var file = folder.fileId(3184000000011244);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("villa1")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}

async function download_images2() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011227);
  var file = folder.fileId(3184000000011249);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("villa2")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}

async function download_images3() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011227);
  var file = folder.fileId(3184000000011254);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("villa3")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images4() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011227);
  var file = folder.fileId(3184000000011259);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("villa4")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images5() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011227);
  var file = folder.fileId(3184000000011264);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("villa5")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images6() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011227);
  var file = folder.fileId(3184000000011269);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("villa6")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images7() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011274);
  var file = folder.fileId(3184000000011291);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("apt1")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images8() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011274);
  var file = folder.fileId(3184000000011296);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("apt2")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images9() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011274);
  var file = folder.fileId(3184000000011301);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("apt3")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images10() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011274);
  var file = folder.fileId(	3184000000011306);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("apt4")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images11() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011274);
  var file = folder.fileId(3184000000011311);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("apt5")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images12() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011274);
  var file = folder.fileId(3184000000011316);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("apt6")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images13() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011321);
  var file = folder.fileId(3184000000011406);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("pg1")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images14() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011321);
  var file = folder.fileId(3184000000011411);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("pg2")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images15() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011321);
  var file = folder.fileId(3184000000011416);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("pg3")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images16() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011321);
  var file = folder.fileId(3184000000011421);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("pg4")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images17() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011321);
  var file = folder.fileId(3184000000011426);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("pg5")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images18() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011321);
  var file = folder.fileId(3184000000011431);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("pg6")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}

async function download_images19() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011338);
  var file = folder.fileId(3184000000011436);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("room1")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}

async function download_images20() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011338);
  var file = folder.fileId(3184000000011441);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("room2")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images21() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011338);
  var file = folder.fileId(3184000000011446);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("room3")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images22() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011338);
  var file = folder.fileId(3184000000011451);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("room4")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images23() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011338);
  var file = folder.fileId(3184000000011456);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("room5")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images24() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011338);
  var file = folder.fileId(3184000000011461);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("room6")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images25() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011227);
  var file = folder.fileId(3184000000011254);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("test3")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images26() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011227);
  var file = folder.fileId(3184000000011254);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("test3")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images27() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011227);
  var file = folder.fileId(3184000000011254);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("test3")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images28() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011227);
  var file = folder.fileId(3184000000011254);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("test3")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images29() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011227);
  var file = folder.fileId(3184000000011254);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("test3")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images30() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011227);
  var file = folder.fileId(3184000000011254);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("test3")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images31() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011227);
  var file = folder.fileId(3184000000011254);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("test3")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images32() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011227);
  var file = folder.fileId(3184000000011254);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("test3")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}
async function download_images33() {
  var filestore = catalyst.file;
  var folder = filestore.folderId(3184000000011227);
  var file = folder.fileId(3184000000011254);
  var downloadPromise = file.getDownloadLink();
  downloadPromise
    .then((response) => {
      console.log(response.content);
      let img = document.getElementById("test3")
      img.src = "https://console.catalyst.zoho.in" + response.content.download_url;
    })
    .catch((err) => {
      console.log(err);
    });
}

const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

// fistForm.addEventListener("submit", (e) => e.preventDefault());
// secondForm.addEventListener("submit", (e) => e.preventDefault());

$(document).ready(function(){

    $('#form1').on('submit', function(){
        var itemVal= $("#item").val();
        var itemVal2= $("#item2").val();
        var itemVal3= $("#item3").val();
        var todo= {item:itemVal,item2:itemVal2,item3:itemVal3};
        $.ajax({
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            url: '/server/incubee_function/todo', //Ensure that 'to_do_list_function' is the package name of your function
            data: JSON.stringify(todo),
            success: function(data){
                location.reload(); //Reloads the page on success
            }
        });
        return false;
    });


    $('#form2').on('submit', function(){
        var itemVal= $("#item4").val();
        var itemVal2= $("#item5").val();

        var todo= {item4:itemVal,item5:itemVal2};
        $.ajax({
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            url: '/server/incubee_function/todo', //Ensure that 'to_do_list_function' is the package name of your function
            data: JSON.stringify(todo),
            success: function(data){
                location.reload(); //Reloads the page on success
            }
        });
        return false;
    });

  
  });


  async function displayFileDetails() {
    const response = await fetch("/server/file_operations/getFileDetails", { method: "GET" })
    const fileData = await response.json();
    if (fileData.length > 0) {
        for (const data of fileData) {
            data.Download = `<a href="/server/file_operations/downloadFile/${data['File ID']}?fileName=${data['File Name']}">&#x21e9;</a>`;
            data.Update = `<label for=${data['File ID']} style="cursor: pointer;"> <span class="glyphicon glyphicon-folder-open" aria-hidden="true">&#x270E;</span>
                        <input type="file" id=${data['File ID']} onchange="updateFile(${data['File ID']})" style="display:none"> </label>`
            data.Delete = `<button onclick="deleteFile(${data['File ID']},'${data['File Name']}')">&#128465;</button>`
        }
        renderTable(fileData);
    } else {
        var divContainer = document.getElementById("tableData");
        divContainer.innerHTML = "No Files have been Uploaded Yet";
    }
}

async function uploadfile() {

    try {
        document.getElementById("status").innerHTML = "Uploading ... &#10227;"
        var file = document.getElementById("customFile").files[0];
        let fileObj = new FormData();
        fileObj.append("data", file);
        const response = await fetch("/server/file_operations/uploadFile", { method: "POST", body: fileObj })
        const data = await response.json();
        if (response.status === 200) {
            document.getElementById("status").innerHTML = data.message;
            alert(data.message)
            setTimeout(function () {
                window.location.reload();
            }, 2000);
        }
    } catch (e) {
        console.log(e);
        alert("Error. Please try again after sometime.");
    }
}

async function updateFile(fileId) {

    try {
        var file = document.getElementById(fileId).files[0];
        let fileObj = new FormData();
        fileObj.append("data", file);
        const response = await fetch("/server/file_operations/updateFile/" + fileId, { method: "PUT", body: fileObj })
        const data = await response.json();
        if (response.status === 200) {
            alert(data.message)
            setTimeout(function () {
                window.location.reload();
            }, 2000);
        }
    } catch (e) {
        console.log(e);
        alert("Error. Please try again after sometime.");
    }
}

async function deleteFile(fileId, fileName) {

    try {
        if (confirm('Are you sure you want to delete ' + fileName + '?')) {
            const response = await fetch("/server/file_operations/deleteFile/" + fileId, { method: "DELETE" })
            const data = await response.json();
            if (response.status === 200) {
                alert(data.message);
                setTimeout(function () {
                    window.location.reload();
                }, 2000);
            }
        }
    } catch (e) {
        console.log(e);
        alert("Error. Please try again after sometime.");
    }
}

function renderTable(respData) {
    var col = [];
    for (var i = 0; i < respData.length; i++) {
        for (var key in respData[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    var table = document.createElement("table");
    table.classList.add("ca-table-view");
    table.setAttribute('id', 'dataTable');
    var tr = table.insertRow(-1);
    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
    }
    for (var i = 0; i < respData.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = respData[i][col[j]];
        }
    }
    var divContainer = document.getElementById("tableData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}

