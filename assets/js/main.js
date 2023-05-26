/**
* Template Name: SoftLand
* Updated: Mar 10 2023 with Bootstrap v5.2.3
* Template URL: https://bootstrapmade.com/softland-bootstrap-app-landing-page-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
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
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()



// list  

$(document).ready(function() {
  $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
  $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
});




// add comments ?
function starsReducer(state, action) {
  switch (action.type) {
    case 'HOVER_STAR':{
        return {
          starsHover: action.value,
          starsSet: state.starsSet };

      }
    case 'CLICK_STAR':{
        return {
          starsHover: state.starsHover,
          starsSet: action.value };

      }
      break;
    default:
      return state;}

}

var StarContainer = document.getElementById('rating');
var StarComponents = StarContainer.children;

var state = {
  starsHover: 0,
  starsSet: 4 };


function render(value) {
  for (var i = 0; i < StarComponents.length; i++) {
    StarComponents[i].style.fill = i < value ? '#f39c12' : '#808080';
  }
}

for (var i = 0; i < StarComponents.length; i++) {
  StarComponents[i].addEventListener('mouseenter', function () {
    state = starsReducer(state, {
      type: 'HOVER_STAR',
      value: this.id });

    render(state.starsHover);
  });

  StarComponents[i].addEventListener('click', function () {
    state = starsReducer(state, {
      type: 'CLICK_STAR',
      value: this.id });

    render(state.starsHover);
  });
}

StarContainer.addEventListener('mouseleave', function () {
  render(state.starsSet);
});

var review = document.getElementById('review');
var remaining = document.getElementById('remaining');
review.addEventListener('input', function (e) {
  review.value = e.target.value.slice(0, 999);
  remaining.innerHTML = 999 - e.target.value.length;
});

var form = document.getElementById("review-form");

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let post = {
    stars: state.starsSet,
    review: form['review'].value,
    name: form['name'].value,
    city: form['city'].value,
    email: form['email'].value };


  console.log(post);
});

document.getElementById('submit').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('submitForm').click();
});

var reviews = {
  reviews: [
  {
    stars: 3,
    name: 'bob',
    city: 'Noosk',
    review: '1 Thompson Greenspon is so grateful to have worked with CPASiteSolutions on our' },
  {
    stars: 4,
    name: 'bobbo',
    city: 'WinNoosk',
    review: '2 Thompson Greenspon is so grateful to have worked with CPASiteSolutions on our' },
  {
    stars: 2,
    name: 'bobster',
    city: 'NooSKI',
    review: '3 Thompson Greenspon is so grateful to have worked with CPASiteSolutions on our' }] };




function ReviewStarContainer(stars) {
  var div = document.createElement('div');
  div.className = "stars-container";
  for (var i = 0; i < 5; i++) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('viewBox', "0 12.705 512 486.59");
    svg.setAttribute('x', "0px");
    svg.setAttribute('y', "0px");
    svg.setAttribute('xml:space', "preserve");
    svg.setAttribute('class', "star");
    var svgNS = svg.namespaceURI;
    var star = document.createElementNS(svgNS, 'polygon');
    star.setAttribute('points', '256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566');
    star.setAttribute('fill', i < stars ? '#f39c12' : '#808080');
    svg.appendChild(star);
    div.appendChild(svg);
  }
  return div;
}

function ReviewContentContainer(name, city, review) {

  var reviewee = document.createElement('div');
  reviewee.className = "reviewee footer";
  reviewee.innerHTML = '- ' + name + ', ' + city;

  var comment = document.createElement('p');
  comment.innerHTML = review;

  var div = document.createElement('div');
  div.className = "review-content";
  div.appendChild(comment);
  div.appendChild(reviewee);

  return div;
}

function ReviewsContainer(review) {
  var div = document.createElement('blockquote');
  div.className = "review";
  div.appendChild(ReviewStarContainer(review.stars));
  div.appendChild(ReviewContentContainer(review.name, review.city, review.review));
  return div;
}

for (var i = 0; i < reviews.reviews.length; i++) {
  document.getElementById('review-container').appendChild(ReviewsContainer(reviews.reviews[i]));
}


// carosil 
class WeeSlider extends HTMLElement {
  constructor() {
    super();
    this.loopSlides = this.dataset.loop === 'true';
    this.slides = [...this.querySelectorAll('.wee-slider__slide')];
    this.navDots = [...this.querySelectorAll('.wee-slider__navdot')];
    this.buttons = [...this.querySelectorAll('.wee-slider__buttons button')];
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.buttons.forEach(button => button.addEventListener('click', this.handleButtonClick));
    this.navDots.forEach((navDot, index) => navDot.addEventListener('click', () => {
      this.handleSlideChange(index);
    }));

    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ target, isIntersecting }) => {
        const slideIndex = this.slides.indexOf(target);
        target.classList.toggle('visible', isIntersecting);
        this.navDots[slideIndex].classList.toggle('visible', isIntersecting);
        if (!this.loopSlides) this.handleSlideButtonActive();
      });
    }, { threshold: 0.9 });
    this.slides.forEach(slide => observer.observe(slide));
    this.classList.add('loaded');
  }

  handleButtonClick(event) {
    const { classList } = event.currentTarget;
    const isNext = classList.contains('wee-slider__button-next');
    const modifier = isNext ? 1 : -1;
    const condition = slide => slide.classList.contains('visible');
    let index = isNext ? this.slides.findLastIndex(condition) : this.slides.findIndex(condition);
    index = index !== -1 ? index + modifier : (isNext ? 0 : this.slides.length - 1);
    if (this.loopSlides) index = (index + this.slides.length) % this.slides.length;
    this.handleSlideChange(index);
  }

  handleSlideChange(index) {
    this.slides.forEach((slide, i) => {
      if (i === index) slide.scrollIntoView();
    });
    this.navDots.forEach((navDot, i) => {
      navDot.classList.toggle('active', i === index);
    });
  }

  handleSlideButtonActive() {
    this.buttons.forEach(button => {
      const isNext = button.classList.contains('wee-slider__button-next');
      const slide = isNext ? this.slides[this.slides.length - 1] : this.slides[0]
      button.disabled = slide.classList.contains('visible');
    });
  }
}

customElements.define('wee-slider', WeeSlider);