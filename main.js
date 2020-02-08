const testimonials = [
  {
    id: 'testimonial1',
    imageUrl: 'https://assets.bombas.com/image/fetch/f_auto,q_auto/https://cdn.shopify.com/s/files/1/1119/5850/products/navy-cream-layflat-product_9915ee42-f6ab-4bb5-8315-9f56aae0ebe8_1600x1600.jpg%3Fv%3D1576081488',
    name: 'Joe',
    testimonial: 'This site is the BEST!  I love it'
  },
  {
    id: 'testimonial2',
    imageUrl: 'https://assets.bombas.com/image/fetch/f_auto,q_auto/https://cdn.shopify.com/s/files/1/1119/5850/products/navy-cream-layflat-product_9915ee42-f6ab-4bb5-8315-9f56aae0ebe8_1600x1600.jpg%3Fv%3D1576081488',
    name: 'Jane',
    testimonial: 'Sole Mates helped me find the PERFECT pair - even better than the original.'
  },
  {
    id: 'testimonial3',
    imageUrl: 'https://assets.bombas.com/image/fetch/f_auto,q_auto/https://cdn.shopify.com/s/files/1/1119/5850/products/navy-cream-layflat-product_9915ee42-f6ab-4bb5-8315-9f56aae0ebe8_1600x1600.jpg%3Fv%3D1576081488',
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
  for(let i = 0; i < arr.length; ){

  }
  printToDom('testimonials', domString);
};

buildTestimonials(testimonials);