require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function () {

  await Category.deleteMany({});
  const categories = await Category.create([
    { name: 'Spirits', sortOrder: 10 },
    { name: 'Beer', sortOrder: 20 },
    { name: 'Wine', sortOrder: 40 },
    { name: 'Accessories', sortOrder: 50 },
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    { name: 'Casamigos Triple Threat', img: 'https://i.imgur.com/EGDw8qi.jpg', category: categories[0], price: 150.00 },
    { name: 'Casamigos Reposado', img: 'https://i.imgur.com/2bdYcQz.jpg', category: categories[0], price: 57.99 },
    { name: 'Casamigos Blanco', img: 'https://i.imgur.com/l03teVi.jpg', category: categories[0], price: 39.99 },
    {name: 'Casamigos Añejo', img: 'https://i.imgur.com/vnIsLPE.jpg', category: categories[0], price: 61.99},
    {name: 'Blue Moon', img: 'https://i.imgur.com/XjJdZC5.png', category: categories[1], price: 9.99},
    {name: 'La Rubia', img: 'https://i.imgur.com/VkmfR45.png', category: categories[1], price: 12.99},
    {name: 'Peroni', img: 'https://i.imgur.com/Ecntv3J.jpg', category: categories[1], price: 13.99},
    {name: 'Duvel', img: 'https://i.imgur.com/7LS9EOz.png', category: categories[1], price: 14.99},
    {name: 'Belle Glos', img: 'https://i.imgur.com/sHxwB1r.jpg', category: categories[2], price: 59.99},
    {name: 'Caymus', img: 'https://i.imgur.com/c6txK0f.gif', category: categories[2], price: 79.99},
    {name: 'Whispering Angel', img: 'https://i.imgur.com/pbsXcwd.jpg', category: categories[2], price: 17.95},
    {name: 'Miraval', img: 'https://i.imgur.com/rhmP4Hh.jpg', category: categories[2], price: 19.99},
    {name: 'Houdini Electric Cork Screw', img: 'https://i.imgur.com/E8aAmzl.jpg', category: categories[3], price: 21.99},
    {name: 'Decanter', img: 'https://i.imgur.com/yB0w84L.jpg', category: categories[3], price: 99.99},
    {name: 'Drinkware Set', img: 'https://i.imgur.com/Aqnyp0I.jpg', category: categories[3], price: 89.99},
  ]);

  console.log(items)

  process.exit();

})();