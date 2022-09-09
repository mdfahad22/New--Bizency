$(function (){


//jquery--code

let navbar= $(`.navs`)

$(window).scroll(function(){
  let scrtop= $(window).scrollTop()

  if (scrtop>180) 
  {navbar.addClass(`menuFixed`)}

  else {navbar.removeClass(`menuFixed`)}


})


$(window).ready(function(){

let preloader= $(`.preloader`)
preloader.fadeOut(1500)

})


//aossssssssssssss


AOS.init();




// slickkkk

 $('.slider1').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:false,
    autoplaySpeed:500,
    dots:false,
    adaptiveHeight:false,
    centerMode:false,
    arrows:true,
prevArrow:`.prev1`,
nextArrow:`.next1`,

 })



 $('.slider2').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay:false,
  autoplaySpeed:500,
  dots:false,
  adaptiveHeight:false,
  centerMode:false,
  arrows:true,
prevArrow:`.prev2`,
nextArrow:`.next2`,

})



$('.slider3').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:false,
  autoplaySpeed:500,
  dots:false,
  adaptiveHeight:false,
  centerMode:false,
  arrows:true,
prevArrow:`.prev3`,
nextArrow:`.next3`,

})






// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Line(pbar1, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 12000,
  color: '#294795',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      left: '80px',
      top: '-16px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar.animate(1.0);  // Number from 0.0 to 1.0




// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Line(pbar2, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 13000,
  color: '#5d3b15',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      left: '80px',
      top: '-16px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar.animate(1.0);  // Number from 0.0 to 1.0




// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Line(pbar3, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 14000,
  color: '#33491f',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      left: '80px',
      top: '-16px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar.animate(1.0);  // Number from 0.0 to 1.0




// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Line(pbar4, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 15000,
  color: '#39295f',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      position: 'absolute',
      left: '80px',
      top: '-16px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar.animate(1.0);  // Number from 0.0 to 1.0




})

