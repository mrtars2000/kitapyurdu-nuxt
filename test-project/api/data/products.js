let products = [
  {
    id: 0,
    title: 'Pekicik',
    src: 'https://img.kitapyurdu.com/v1/getImage/fn:11469224/wi:120/wh:true',
    price: 10
  },
  {
    id: 1,
    title: '101 Atasözü',
    src: 'https://img.kitapyurdu.com/v1/getImage/fn:11473202/wi:120/wh:true',
    price: 15
  },
  {
    id: 2,
    title: '101 Deyim',
    src: 'https://img.kitapyurdu.com/v1/getImage/fn:11473058/wi:120/wh:true',
    price: 20
  },
  {
    id: 3,
    title: 'Delifişek',
    src: 'https://img.kitapyurdu.com/v1/getImage/fn:11482568/wi:120/wh:true',
    price: 22
  },
  {
    id: 4,
    title: 'Benim Zürafam',
    src: 'https://img.kitapyurdu.com/v1/getImage/fn:11467805/wi:120/wh:true',
    price: 17
  },
  {
    id: 5,
    title: 'Dahacık',
    src: 'https://img.kitapyurdu.com/v1/getImage/fn:11469225/wi:120/wh:true',
    price: 16
  },
  {
    id: 6,
    title: 'Hıhıcık',
    src: 'https://img.kitapyurdu.com/v1/getImage/fn:11469223/wi:120/wh:true',
    price: 13
  },
  {
    id: 7,
    title: 'Güneşi Uyandıralım',
    src: 'https://img.kitapyurdu.com/v1/getImage/fn:11261075/wi:120/wh:true',
    price: 11
  },
  {
    id: 8,
    title: 'Inci',
    src: 'https://img.kitapyurdu.com/v1/getImage/fn:11296928/wi:120/wh:true',
    price: 14
  },
  {
    id: 9,
    title: 'Nohut Adam',
    src: 'https://img.kitapyurdu.com/v1/getImage/fn:11467783/wi:120/wh:true',
    price: 17
  }
]

const addProduct = (name, description) => {
  const id = products[products.length - 1].id + 1
  const newProduct = { id, name, description }
  products = [...products, newProduct]
  return { ...newProduct }
}

const getProducts = () => {
  return products
}

module.exports = {
  getProducts,
  addProduct
}
