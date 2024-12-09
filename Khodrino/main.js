let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active')
}
//carmove
let imgCar=document.getElementById("carMove");
document.addEventListener('mousemove',eCar);
var XN=0
function eCar(e){
  var X = e.clientX;
  if(X>XN){
    imgCar.style.transform = "scaleX(-1)";
  }
  else{
    imgCar.style.transform = "scaleX(1)";
  }
  XN=X;
  imgCar.style.left=X-25+"px";
  console.log(X+"px");
}
// //swiper 
// $('.owl-carousel').owlCarousel({
//   rtl:true,
//   loop:true,
//   margin:10,
//   nav:true,
//   responsive:{
//       0:{
//           items:1
//       },
//       600:{
//           items:3
//       },
//       1000:{
//           items:5
//       }
//   }
// })

// var swiper = new Swiper(".mySwiper", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });
//carousel swiper
// class Carousel {
//   constructor(el) {
//     this.el = el;
//     this.carouselOptions = ['previous', 'add', 'play', 'next'];
//     this.carouselData = [
//       {
//         'id': '1',
//         'src': 'http://fakeimg.pl/300/?text=1',
//       },
//       {
//         'id': '2',
//         'src': 'http://fakeimg.pl/300/?text=2',
//       },
//       {
//         'id': '3',
//         'src': 'http://fakeimg.pl/300/?text=3',
//       },
//       {
//         'id': '4',
//         'src': 'http://fakeimg.pl/300/?text=4',
//       },
//       {
//         'id': '5',
//         'src': 'http://fakeimg.pl/300/?text=5',
//       }
//     ];
//     this.carouselInView = [1, 2, 3, 4, 5];
//     this.carouselContainer;
//     this.carouselPlayState;
//   }

//   mounted() {
//     this.setupCarousel();
//   }

//   // Build carousel html
//   setupCarousel() {
//     const container = document.createElement('div');
//     const controls = document.createElement('div');

//     // Add container for carousel items and controls
//     this.el.append(container, controls);
//     container.className = 'carousel-container';
//     controls.className = 'carousel-controls';

//     // Take dataset array and append items to container
//     this.carouselData.forEach((item, index) => {
//       const carouselItem = item.src ? document.createElement('img') : document.createElement('div');

//       container.append(carouselItem);
      
//       // Add item attributes
//       carouselItem.className = `carousel-item carousel-item-${index + 1}`;
//       carouselItem.src = item.src;
//       carouselItem.setAttribute('loading', 'lazy');
//       // Used to keep track of carousel items, infinite items possible in carousel however min 5 items required
//       carouselItem.setAttribute('data-index', `${index + 1}`);
//     });

//     this.carouselOptions.forEach((option) => {
//       const btn = document.createElement('button');
//       const axSpan = document.createElement('span');

//       // Add accessibilty spans to button
//       axSpan.innerText = option;
//       axSpan.className = 'ax-hidden';
//       btn.append(axSpan);

//       // Add button attributes
//       btn.className = `carousel-control carousel-control-${option}`;
//       btn.setAttribute('data-name', option);

//       // Add carousel control options
//       controls.append(btn);
//     });

//     // After rendering carousel to our DOM, setup carousel controls' event listeners
//     this.setControls([...controls.children]);

//     // Set container property
//     this.carouselContainer = container;
//   }

//   setControls(controls) {
//     controls.forEach(control => {
//       control.onclick = (event) => {
//         event.preventDefault();

//         // Manage control actions, update our carousel data first then with a callback update our DOM
//         this.controlManager(control.dataset.name);
//       };
//     });
//   }

//   controlManager(control) {
//     if (control === 'previous') return this.previous();
//     if (control === 'next') return this.next();
//     if (control === 'add') return this.add();
//     if (control === 'play') return this.play();

//     return;
//   }

//   previous() {
//     // Update order of items in data array to be shown in carousel
//     this.carouselData.unshift(this.carouselData.pop());

//     // Push the first item to the end of the array so that the previous item is front and center
//     this.carouselInView.push(this.carouselInView.shift());

//     // Update the css class for each carousel item in view
//     this.carouselInView.forEach((item, index) => {
//       this.carouselContainer.children[index].className = `carousel-item carousel-item-${item}`;
//     });

//     // Using the first 5 items in data array update content of carousel items in view
//     this.carouselData.slice(0, 5).forEach((data, index) => {
//       document.querySelector(`.carousel-item-${index + 1}`).src = data.src;
//     });
//   }

//   next() {
//     // Update order of items in data array to be shown in carousel
//     this.carouselData.push(this.carouselData.shift());

//     // Take the last item and add it to the beginning of the array so that the next item is front and center
//     this.carouselInView.unshift(this.carouselInView.pop());

//     // Update the css class for each carousel item in view
//     this.carouselInView.forEach((item, index) => {
//       this.carouselContainer.children[index].className = `carousel-item carousel-item-${item}`;
//     });

//     // Using the first 5 items in data array update content of carousel items in view
//     this.carouselData.slice(0, 5).forEach((data, index) => {
//       document.querySelector(`.carousel-item-${index + 1}`).src = data.src;
//     });
//   }

//   add() {
//     const newItem = {
//       'id': '',
//       'src': '',
//     };
//     const lastItem = this.carouselData.length;
//     const lastIndex = this.carouselData.findIndex(item => item.id == lastItem);
    
//     // Assign properties for new carousel item
//     Object.assign(newItem, {
//       id: `${lastItem + 1}`,
//       src: `http://fakeimg.pl/300/?text=${lastItem + 1}`
//     });

//     // Then add it to the "last" item in our carouselData
//     this.carouselData.splice(lastIndex + 1, 0, newItem);

//     // Shift carousel to display new item
//     this.next();
//   }

//   play() {
//     const playBtn = document.querySelector('.carousel-control-play');
//     const startPlaying = () => this.next();

//     if (playBtn.classList.contains('playing')) {
//       // Remove class to return to play button state/appearance
//       playBtn.classList.remove('playing');

//       // Remove setInterval
//       clearInterval(this.carouselPlayState); 
//       this.carouselPlayState = null; 
//     } else {
//       // Add class to change to pause button state/appearance
//       playBtn.classList.add('playing');

//       // First run initial next method
//       this.next();

//       // Use play state prop to store interval ID and run next method on a 1.5 second interval
//       this.carouselPlayState = setInterval(startPlaying, 1500);
//     };
//   }

// }

// // Refers to the carousel root element you want to target, use specific class selectors if using multiple carousels
// const el = document.querySelector('.carousel');
// // Create a new carousel object
// const exampleCarousel = new Carousel(el);
// // Setup carousel and methods
// exampleCarousel.mounted();
// var swiper = new Swiper(".vehicles-slider", {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     loop:true,
//     autoplay: {
//         delay: 9500,
//         disableOnInteraction: false,
//       },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       991: {
//         slidesPerView: 3,
//       },
//     },
//   });