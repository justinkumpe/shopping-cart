/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [
  {
    name: 'cherry',
    basePrice: 1, // basePrice added to assist in currency conversion.
    price: 1,
    quantity: 0,
    productId: 1,
    image: 'images/cherry.jpg'
  },
  {
    name: 'orange',
    basePrice: 5,
    price: 5,
    quantity: 0,
    productId: 2,
    image: 'images/orange.jpg'
  },
  {
    name: 'strawberry',
    basePrice: 2,
    price: 2,
    quantity: 0,
    productId: 3,
    image: 'images/strawberry.jpg'
  }
]

/* Exchange Rates array for converting currency */
const exchangeRates = {
  AED: 3.67308,
  AFN: 73.375223,
  ALL: 100.082361,
  AMD: 385.790098,
  ANG: 1.802021,
  AOA: 825.022496,
  ARS: 350.029875,
  AUD: 1.548227,
  AWG: 1.8,
  AZN: 1.697384,
  BAM: 1.809904,
  BBD: 2.01886,
  BDT: 109.923664,
  BGN: 1.812809,
  BHD: 0.376936,
  BIF: 2839.137154,
  BMD: 1,
  BND: 1.353217,
  BOB: 6.909061,
  BRL: 4.913696,
  BSD: 0.999898,
  BTC: 3.8725158e-05,
  BTN: 82.672194,
  BWP: 13.575666,
  BYN: 2.524315,
  BYR: 19600,
  BZD: 2.015436,
  CAD: 1.359625,
  CDF: 2485.000191,
  CHF: 0.884285,
  CLF: 0.031057,
  CLP: 856.959774,
  CNY: 7.273103,
  COP: 4056.09,
  CRC: 536.913994,
  CUC: 1,
  CUP: 26.5,
  CVE: 102.026371,
  CZK: 22.341899,
  DJF: 178.029076,
  DKK: 6.903698,
  DOP: 56.930281,
  DZD: 136.702024,
  EGP: 30.898698,
  ERN: 15,
  ETB: 55.253884,
  EUR: 0.92638,
  FJD: 2.26045,
  FKP: 0.794126,
  GBP: 0.792164,
  GEL: 2.634973,
  GGP: 0.794126,
  GHS: 11.398192,
  GIP: 0.794126,
  GMD: 60.850262,
  GNF: 8584.779089,
  GTQ: 7.874183,
  GYD: 209.353976,
  HKD: 7.834155,
  HNL: 24.62313,
  HRK: 6.8828,
  HTG: 135.423511,
  HUF: 354.530501,
  IDR: 15224.65,
  ILS: 3.81395,
  IMP: 0.794126,
  INR: 82.732597,
  IQD: 1309.445591,
  IRR: 42275.000392,
  ISK: 133.310202,
  JEP: 0.794126,
  JMD: 154.292483,
  JOD: 0.708103,
  JPY: 146.490997,
  KES: 145.798743,
  KGS: 88.254603,
  KHR: 4171.717826,
  KMF: 455.000036,
  KPW: 899.995566,
  KRW: 1318.649726,
  KWD: 0.30837,
  KYD: 0.833233,
  KZT: 458.500292,
  LAK: 19719.417736,
  LBP: 15028.085988,
  LKR: 319.967426,
  LRD: 185.999922,
  LSL: 18.510235,
  LTL: 2.95274,
  LVL: 0.60489,
  LYD: 4.815175,
  MAD: 10.171292,
  MDL: 17.847327,
  MGA: 4509.49001,
  MKD: 56.959916,
  MMK: 2099.739962,
  MNT: 3474.158681,
  MOP: 8.069054,
  MRO: 356.999828,
  MUR: 46.620022,
  MVR: 15.400789,
  MWK: 1066.434699,
  MXN: 17.176802,
  MYR: 4.655033,
  MZN: 63.24995,
  NAD: 18.509717,
  NGN: 756.879767,
  NIO: 36.58119,
  NOK: 10.659415,
  NPR: 132.275289,
  NZD: 1.684012,
  OMR: 0.385002,
  PAB: 0.999898,
  PEN: 3.701486,
  PGK: 3.65997,
  PHP: 56.781502,
  PKR: 306.333864,
  PLN: 4.14435,
  PYG: 7270.893292,
  QAR: 3.640971,
  RON: 4.582103,
  RSD: 108.648049,
  RUB: 96.625005,
  RWF: 1193.862726,
  SAR: 3.751047,
  SBD: 8.36952,
  SCR: 13.288455,
  SDG: 600.753858,
  SEK: 11.018015,
  SGD: 1.354597,
  SHP: 1.21675,
  SLE: 22.280078,
  SLL: 19749.999735,
  SOS: 568.494104,
  SSP: 601.503061,
  SRD: 38.596503,
  STD: 20697.981008,
  SYP: 13001.615103,
  SZL: 18.893033,
  THB: 35.260345,
  TJS: 10.983611,
  TMT: 3.51,
  TND: 3.092502,
  TOP: 2.387101,
  TRY: 26.771402,
  TTD: 6.775803,
  TWD: 31.914957,
  TZS: 2504.696001,
  UAH: 36.926921,
  UGX: 3719.195639,
  USD: 1,
  UYU: 37.594263,
  UZS: 12114.735138,
  VEF: 3272526.660879,
  VES: 32.138323,
  VND: 24085,
  VUV: 120.931765,
  WST: 2.73571,
  XAF: 607.024736,
  XAG: 0.041671,
  XAU: 0.000516,
  XCD: 2.70255,
  XDR: 0.751798,
  XOF: 606.946102,
  XPF: 110.72036,
  YER: 250.34987,
  ZAR: 19.054099,
  ZMK: 9001.20292,
  ZMW: 20.322781,
  ZWL: 321.999592
}

/* Create 3 or more product objects using object literal notation
 Each product should include five properties
 - name: name of product (string)
 - price: price of product (number)
 - quantity: quantity in cart should start at zero (number)
 - productId: unique id for the product (number)
 - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
 - cherry.jpg by Mae Mu
 - orange.jpg by Mae Mu
 - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = []
/* Create a function named addProductToCart that takes in the product productId as an argument
- addProductToCart should get the correct product based on the productId
- addProductToCart should then increase the product's quantity
- if the product is not already in the cart, add it to the cart
*/

function addProductToCart (productId) {
  const product = getProduct(productId, products)

  if (!cart.includes(product)) {
    cart.push(product)
    cart[cart.length - 1].quantity++
  } else {
    increaseQuantity(productId)
  }

  return product
}
/* Create a function named increaseQuantity that takes in the productId as an argument
- increaseQuantity should get the correct product based on the productId
- increaseQuantity should then increase the product's quantity
*/
function increaseQuantity (productId) {
  const product = getProduct(productId, cart)

  product.quantity++
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
- decreaseQuantity should get the correct product based on the productId
- decreaseQuantity should decrease the quantity of the product
- if the function decreases the quantity to 0, the product is removed from the cart
*/
/* getProduct function to get product from products/cart list by productID */
function getProduct (productId, productList) {
  return productList.find((product) => product.productId === productId)
}

function decreaseQuantity (productId) {
  const product = getProduct(productId, cart)
  product.quantity -= 1

  if (product.quantity === 0) {
    removeProductFromCart(productId)
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
- removeProductFromCart should get the correct product based on the productId
- removeProductFromCart should update the product quantity to 0
- removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart (productId) {
  const product = getProduct(productId, cart)

  product.quantity = 0

  cart.splice(cart.indexOf(product), 1)
}
/* Create a function named cartTotal that has no parameters
- cartTotal should iterate through the cart to get the total of all products
- cartTotal should return the sum of the products in the cart
*/

function cartTotal () {
  let totalPrice = 0

  cart.forEach((item) => {
    totalPrice += item.price * item.quantity
  })

  return parseFloat(totalPrice.toFixed(2))
}
/* Create a function called emptyCart that empties the products from the cart */

function emptyCart () {
  cart.length = 0
}
/* Create a function named pay that takes in an amount as an argument
- pay will return a negative number if there is a remaining balance
- pay will return a positive number if money should be returned to customer
*/
let totalPaid = 0

function pay (amount) {
  totalPaid += amount

  const remaining = totalPaid - cartTotal()

  if (remaining >= 0) {
    totalPaid = 0
  }
  return remaining
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.) */

/* currency function for converting currency from USD to selected currency */
function currency (selectedCurrency) {
  let exchangerate = 1
  switch (selectedCurrency) {
    case 'EUR':
      exchangerate = exchangeRates.EUR
      break
    case 'YEN':
      exchangerate = exchangeRates.JPY
      break
    default:
      exchangerate = exchangeRates.USD
      break
  }
  products.forEach((item) => {
    const newPrice = item.basePrice * exchangerate
    if (selectedCurrency === 'YEN') {
      item.price = parseFloat(newPrice.toFixed(0))
    } else {
      item.price = parseFloat(newPrice.toFixed(2))
    }
  })
}

/* The following is for running unit tests.
 To fully complete this project, it is expected that all tests pass.
 Run the following command in terminal to run tests
 npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart
/* Uncomment the following line if completing the currency converter bonus */
// currency
}
