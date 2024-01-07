


let sections = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('header nav ul li a')

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick =()=>{
  // menuIcon.classList.toggle('')
  navbar.classList.toggle('active');
}

console.log(sections)
window.onscroll = function() {

  sections.forEach(sec=>{
    let top = window.scrollY
    let offset =  sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id')

    if(top>offset && top < offset + height){
      navlinks.forEach(links=>{
        // console.log(links)
        links.classList.remove('active');
        document.querySelector('header nav ul li a[href*=' + id +']').classList.add('active')
      })
    }
  })
    var navbar = document.getElementById('header');
    
    // Get the current scroll position
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Toggle the class based on the scroll position
    if (scrollPosition > 10) {
      navbar.classList.remove('transparent');
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.add('transparent');
    }
  };




  let currentIndex = 0;

// function showSlide(index) {
//     const slider = document.querySelector('.slider');
//     const slides = document.querySelectorAll('.slide');
//     const slidesToShow = getSlidesToShow(); // Dynamically determine the number of slides to show
    
//     if (index < 0) {
//         index = slides.length - slidesToShow;
//     } else if (index >= slides.length - slidesToShow + 1) {
//         index = 0;
//     }

//     currentIndex = index;

//     const translateValue = -index * (100 / slidesToShow) + '%';
//     slider.style.transform = 'translateX(' + translateValue + ')';
// }

// function changeSlide(direction) {
//     showSlide(currentIndex + direction);
// }

// function getSlidesToShow() {
//     const screenWidth = window.innerWidth;

//     if (screenWidth >= 1200) {
//         return 3;
//     } else if (screenWidth >= 992) {
//         return 2;
//     }  else if (screenWidth >= 768) {
//       return 2;
//   } else {
//         return 1;
//     }
// }


// window.addEventListener('resize', function() {
//     showSlide(currentIndex);
// });


// showSlide(currentIndex);


// window.addEventListener("load", function() {
//   var loaderWrapper = document.querySelector(".loader-wrapper");
//   loaderWrapper.style.display = "none";
// });
 // Add JavaScript to hide the loader after a delay
 document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      var loaderWrapper = document.querySelector(".loader-wrapper");
      loaderWrapper.style.display = "none";
  }, 3000); // Adjust the delay in milliseconds (e.g., 3000 for 3 seconds)
});
function submitContactForm(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  // Perform basic validation
  if (name === "" || email === "" || subject === "" || message === "") {
      alert("Please fill in all fields");
      return;
  }

  // Prepare the email parameters
  // var emailParams = {
  //     name: name,
  //     email: email,
  //     message: message
  // };
//  console.log(emailParams)

 var subject = "Contact Form Submission";
 var mailtoLink = "mailto:tyresemorgan.dr@gmail.com" + 
                  "?subject=" + encodeURIComponent(subject) +
                  "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message);

 // Open the default email client with the pre-filled email
 window.location.href = mailtoLink;
}




















// Get all buttons that open modals
var openButtons = document.querySelectorAll('.open-btn');

// Attach click event to each button
openButtons.forEach(function(btn) {
  btn.onclick = function() {
    var modalId = btn.getAttribute('data-modal-id');
    var modal = document.getElementById(modalId);
    modal.style.display = 'block';
  };
});

// Get all close buttons
var closeButtons = document.querySelectorAll('.close');

// Attach click event to each close button
closeButtons.forEach(function(closeBtn) {
  closeBtn.onclick = function() {
    var modalId = closeBtn.getAttribute('data-modal-id');
    var modal = document.getElementById(modalId);
    modal.style.display = 'none';
  };
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
};

