function toggleTheme() {
    var body = document.body;
    body.classList.toggle("light-theme");
}
let header = document.querySelector('header');
let upButton = document.querySelector('.up-button');

window.onscroll = function() {
  scrollFunc();
  UpButton();
};

function scrollFunc() {
  if (document.documentElement.scrollTop > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

function UpButton() {
  if (document.documentElement.scrollTop > 200) {
    upButton.classList.add('shown');
  } else {
    upButton.classList.remove('shown');
  }
}

upButton.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const links = document.querySelectorAll('a[href^="#"]')
for (let item of links) {
  item.addEventListener('click', (e)=> {
    e.preventDefault()
    let href = item.getAttribute('href')
    let result = document.querySelector(href)
    result.scrollIntoView({
      behavior: 'smooth'
    })
  })
}

const slider = document.querySelector('.slider');
const slidesContainer = slider.querySelector('.slides-container');
const slides = slider.querySelectorAll('.slide');
const prevBtn = slider.querySelector('.prev-btn');
const nextBtn = slider.querySelector('.next-btn');

let slideIndex = 0;
const slideWidth = slides[0].clientWidth;

function goToSlide(index) {
  slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
  slideIndex = index;
}

function goToPrevSlide() {
  if (slideIndex === 0) {
    goToSlide(slides.length - 1);
  } else {
    goToSlide(slideIndex - 1);
  }
}

function goToNextSlide() {
  if (slideIndex === slides.length - 1) {
    goToSlide(0);
  } else {
    goToSlide(slideIndex + 1);
  }
}

prevBtn.addEventListener('click', goToPrevSlide);
nextBtn.addEventListener('click', goToNextSlide);

$(document).ready(function() {
  $('.button').click(function() {
    $('.cookies-agreement').hide();
  });
});

if (window.matchMedia("(max-width: 1023px)").matches) {
  $(document).ready(function() {
    $('.img').mouseenter(function() {
      $('.slide_text').slideDown("slow");
    });
    $('.img').mouseleave(function() {
      $('.slide_text').slideUp("slow");
    });
  });
}

const toggleButton = document.querySelector('.abouttoggle');
const text = document.querySelector('.text');

toggleButton.addEventListener('click', function() {
  text.classList.toggle('expanded');
  if (text.classList.contains('expanded')) {
    toggleButton.textContent = 'Close';
  } else {
    toggleButton.textContent = 'Read all';
  }
});

const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.block');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0.5) {
          const sectionId = `#${entry.target.getAttribute('id')}`;
          navLinks.forEach(navLink => navLink.classList.remove('active'));
          const activeLink = document.querySelector(`a[href='${sectionId}']`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    }, { threshold: 0.5 });
    sections.forEach(section => {
      observer.observe(section);
    });

    function sendEmail() {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;

      Email.send({
        To: "kerzyukd@gmail.com",
        From: email,
        Subject: "Нове повідомлення від " + name,
        Body: "Ім'я: " + name + "<br><br>Email: " + email + "<br><br>Повідомлення: " + message,
      });
    }
    document.querySelector('.burger').addEventListener('click', function() {
      document.querySelector('.menu').classList.toggle('burgeract');
  });