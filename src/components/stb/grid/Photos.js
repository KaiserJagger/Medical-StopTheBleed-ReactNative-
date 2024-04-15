
const images = [
  'https://s3.amazonaws.com/thread-to-gold-assets/RAhrIoImybk7hnkV.jpg',
  'https://s3.amazonaws.com/thread-to-gold-assets/a_LC9nL5odp9ajPc.jpg',
  'https://s3.amazonaws.com/thread-to-gold-assets/RxE3voDUCU1kmc4p.jpg',
  'https://s3.amazonaws.com/thread-to-gold-assets/eHEvVVG4YWj2hFMp.jpg',
  'https://s3.amazonaws.com/thread-to-gold-assets/D_8H0kVYnF26xVjo.jpg',
  'https://s3.amazonaws.com/thread-to-gold-assets/HddTgiRNH0_xaYEC.jpg',
  'https://s3.amazonaws.com/thread-to-gold-assets/psPmV3igQ-Blsoq4.jpg',
  'https://s3.amazonaws.com/thread-to-gold-assets/9TY_8Ed-dVoIoXgh.jpg',
  'https://s3.amazonaws.com/thread-to-gold-assets/8uo-yeyekrta3j4j.jpg',
];

function getImages(num) {
  const array = [];
  for (let i = 0; i < num; i += 1) {
    const url = images[Math.round(Math.random() * (images.length - 1))];
    array.push({ url });
  }
  return array;
}

function generate(num) {
  return getImages(num);
}

export default {
  getImages,
  generate,
};
