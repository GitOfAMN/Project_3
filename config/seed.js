require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function () {

  await Category.deleteMany({});
  const categories = await Category.create([
    { name: 'Alcohol', sortOrder: 10 },
    { name: 'Food', sortOrder: 20 },
    { name: 'Health', sortOrder: 40 },
    { name: 'Cleaning', sortOrder: 50 },
    { name: 'Baby', sortOrder: 60 },
    { name: 'Pets', sortOrder: 70 },
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    { name: 'Casamigos Triple Threat', img: 'https://i.imgur.com/EGDw8qi.jpg', category: categories[0], price: 150.00 },
    { name: 'Casamigos Reposado', img: 'https://i.imgur.com/2bdYcQz.jpg', category: categories[0], price: 57.99 },
    { name: 'Casamigos Blanco', img: 'https://i.imgur.com/l03teVi.jpg', category: categories[0], price: 39.99 },
    {name: 'Casamigos Añejo', img: 'https://i.imgur.com/vnIsLPE.jpg', category: categories[0], price: 61.99},
    {name: 'Ben & Jerry\'s Pistachio Ice Cream ', img: 'https://i.imgur.com/qvixQ23.jpg', category: categories[1], price: 6.99},
    {name: 'Skinny Pop', img: 'https://i.imgur.com/pHwJdgA.jpg', category: categories[1], price: 5.49},
    {name: 'PopCorners', img: 'https://i.imgur.com/h7kl7Pk.jpg', category: categories[1], price: 4.49},
    {name: 'Oero Cookies', img: 'https://i.imgur.com/NpIndoA.jpg', category: categories[1], price: 4.95},
    // {name: '', img: '', category: categories[3], price: 3.95},
    // {name: '', img: '', category: categories[3], price: 7.95},
    // {name: '', img: '', category: categories[3], price: 1.95},
    // {name: '', img: '', category: categories[4], price: 2.95},
    // {name: '', img: '', category: categories[4], price: 3.95},
    // {name: '', img: '', category: categories[5], price: 1.95},
    // {name: '', img: '', category: categories[5], price: 0.95},
    // {name: '', img: '', category: categories[5], price: 2.95},
    // {name: '', img: '', category: categories[5], price: 3.95},
    // {name: '', img: '', category: categories[6], price: 0.95},
    // {name: '', img: '', category: categories[6], price: 0.95},
    // {name: '', img: '', category: categories[6], price: 8.95},
    // {name: '', img: '', category: categories[6], price: 3.95},
    // {name: '', img: '', category: categories[6], price: 7.95},
  ]);

  console.log(items)

  process.exit();

})();