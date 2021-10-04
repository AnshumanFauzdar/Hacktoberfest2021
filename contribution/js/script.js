// Preloader Animation

$(window).on('load', function() { // makes sure the whole site is loaded
    $('#status').delay(2500).fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(2500).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(2600).css({'overflow':'visible'});
    const name_card = document.querySelectorAll('.about-flip-card-inner');
    name_card.forEach(card_item =>{
    card_item.addEventListener('click', ()=>
    card_item.classList.toggle('is-flipped'))});
  })
//   const loader = document.querySelector('.bg')
// const content = document.querySelector('.content')

// window.addEventListener('load', function() {
//     // loader.parentElement.appendChild(fade)
//     loader.parentElement.removeChild(loader)
// })
