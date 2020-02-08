const testimonials = [
  {
    id: 'testimonial1',
    imageUrl: 'https://assets.bombas.com/image/fetch/f_auto,q_auto/https://cdn.shopify.com/s/files/1/1119/5850/products/navy-cream-layflat-product_9915ee42-f6ab-4bb5-8315-9f56aae0ebe8_1600x1600.jpg%3Fv%3D1576081488',
    name: 'Joe',
    testimonial: 'This site is the BEST!  I love it'
  },
  {
    id: 'testimonial2',
    imageUrl: 'https://whitecompany.scene7.com/is/image/whitecompany/Cashmere-Bed-Socks/CSCBS_79_MAIN_P?$D_PDP_824x1050$',
    name: 'Jane',
    testimonial: 'Sole Mates helped me find the PERFECT pair - even better than the original.'
  },
  {
    id: 'testimonial3',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0104/0030/1120/products/HXW30002I_001_UPC_047852282215_UPC_Black_2000x.png?v=1578521422',
    name: 'Bethanie',
    testimonial: 'Sole Mates helped me find my soul mate!'
  }
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buildTestimonials = (arr) => {
  let domString = '';
  for(let i = 0; i < arr.length; i++){
    domString += '<div class="col-3">';
    domString += `  <img src="${arr[i].imageUrl}" alt=""/>`;
    domString += '</div>';
    domString += '<div class="col-9">';
    domString += `  <h3 class="align-middle">${arr[i].testimonial}</h3>`;
    domString += `  <h4 class="align-middle">- ${arr[i].name}</h4>`;
    domString += '</div>';
  }
  printToDom('testimonials', domString);
};

const footerBuilder = () => {
  let domstring = '';
  const date = new Date().getFullYear();
  domstring += `<p class="col-xs-1 text-center">&copy${date}</p>`;
  printToDom('footer-text', domstring)
}


const init = () => {
  buildTestimonials(testimonials);
  footerBuilder();
};

init();
