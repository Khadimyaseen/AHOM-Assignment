// Dropdowns
function dropdownFirst() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }
function dropdownSecond() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
function dropdownThird() {
    document.getElementById("myDropdown3").classList.toggle("show");
  }

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// Mobile Menu & Humburger
  const btn = document.getElementById('menu-btn');
  const menubar = document.getElementById('menu')
  
  function navToggle() {
      btn.classList.toggle('open'); 
      menubar.classList.toggle('hidden');  
      document.body.classList.toggle('no-scroll')  
  }
  
  
  btn.addEventListener('click', navToggle);


// Slick Slider
$('.responsive').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});