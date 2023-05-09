'use strict';

// **** GLOBAL VARIABLES ****
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const cookieSalesArray = [];

// *** STEP 1: Grab the window into the DOM ***
let cookieSection = document.getElementById('cookie-profiles');

// console.dir(cookieSection);


// **** HELPER FUNCTION / UTILITIES ****
function renderAll(){
  for(let i = 0; i < cookieSalesArray.length; i++){
    cookieSalesArray[i].render();
  }
}

// **** CONSTRUCTOR FUNCTION ****
function CookieShop(name, minCust, maxCust, avgCookieBought) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieBought = avgCookieBought;
  this.cookiesSoldPerHour = [];
  this.numCust = 0;
  this.numSales = 0;

  this.cookiesSoldPerHourArray();
}

// **** PROTOTYPE METHODS ****

function randomNumCustGenerator (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

CookieShop.prototype.getNumCust = function () {
  this.numCust = randomNumCustGenerator(this.minCust, this.maxCust);
};

CookieShop.prototype.cookiesSoldPerHourArray = function() {
  for (let i = 0; i < hours.length; i++) {
    this.getNumCust();
    let avgCookieSold = Math.round(this.avgCookieBought * this.numCust);
    console.log(avgCookieSold);
    this.numSales += avgCookieSold;
    this.cookiesSoldPerHour.push(avgCookieSold);
  }
};

CookieShop.prototype.render = function () {

  let articleEle = document.createElement('article');
  cookieSection.appendChild(articleEle);

  let cookieHeading = document.createElement('h2');
  cookieHeading.innerText = this.name;
  articleEle.appendChild(cookieHeading);

  let cookieUL = document.createElement('ul');
  articleEle.appendChild(cookieUL);

  for (let i = 0; i < hours.length; i++) {
    let storeHours = document.createElement('li');
    storeHours.innerText = `${hours[i]} : ${this.cookiesSoldPerHour[i]} cookies`;
    cookieUL.appendChild(storeHours);

  }
  let cookieTotal = document.createElement('li');
  cookieTotal.textContent = `Total Sales: ${this.numSales}`;
  cookieUL.appendChild(cookieTotal);
};

// *** EXECUTABLE (executes on page load) CODE ***
let seattle = new CookieShop('Seattle', 23, 65, 6.3);
let tokyo = new CookieShop('Tokyo', 3, 24, 1.2);
let dubai = new CookieShop('Dubai', 11, 38, 3.7);
let paris = new CookieShop('Paris', 20, 38, 2.3);
let lima = new CookieShop('Lima', 2, 16, 4.6);


cookieSalesArray.push(seattle, tokyo, dubai, paris, lima);

console.log(seattle);
renderAll();

// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieBought: 6.3,
//   numCust: 0,
//   numSales: 0,
//   avgCookieSales: [], // per hour
//   randomNumCustGenerator: function (min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   },

//   getNumCust: function () {
//     this.numCust = this.randomNumCustGenerator(this.minCust, this.maxCust);
//     return this.numCust;
//   },


//   render: function () {
//     for (let i = 0; i < hours.length; i++) {
//       // this.getNumCust();
//       let avgCookieSold = Math.round(this.avgCookieBought * this.getNumCust());
//       console.log(avgCookieSold);
//       this.numSales += avgCookieSold;
//       this.avgCookieSales.push(avgCookieSold); // .toFixed from MDN

//     }

//     let articleEle = document.createElement('article');
//     cookieSection.appendChild(articleEle);

//     let cookieHeading = document.createElement('h2');
//     cookieHeading.innerText = this.name;
//     articleEle.appendChild(cookieHeading);

//     let cookieUL = document.createElement('ul');
//     articleEle.appendChild(cookieUL);

//     for (let i = 0; i < hours.length; i++) {
//       let storeHours = document.createElement('li');
//       storeHours.innerText = `${hours[i]} : ${this.avgCookieSales[i]} cookies`;
//       cookieUL.appendChild(storeHours);

//     }
//     let cookieTotal = document.createElement('li');
//     cookieTotal.textContent = `Total Sales: ${this.numSales}`;
//     cookieUL.appendChild(cookieTotal);
//   },
// };



// let tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieBought: 1.2,
//   numCust: 0,
//   numSales: 0,
//   avgCookieSales: [],
//   randomNumCustGenerator: function (min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   },

//   getNumCust: function () {
//     this.numCust = this.randomNumCustGenerator(this.minCust, this.maxCust);
//     return this.numCust;
//   },


//   render: function () {
//     for (let i = 0; i < hours.length; i++) {
//       // this.getNumCust();
//       let avgCookieSold = Math.round(this.avgCookieBought * this.getNumCust());
//       console.log(avgCookieSold);
//       this.numSales += avgCookieSold;
//       this.avgCookieSales.push(avgCookieSold); // .toFixed from MDN

//     }

//     let articleEle = document.createElement('article');
//     cookieSection.appendChild(articleEle);

//     let cookieHeading = document.createElement('h2');
//     cookieHeading.innerText = this.name;
//     articleEle.appendChild(cookieHeading);

//     let cookieUL = document.createElement('ul');
//     articleEle.appendChild(cookieUL);

//     for (let i = 0; i < hours.length; i++) {
//       let storeHours = document.createElement('li');
//       storeHours.innerText = `${hours[i]} : ${this.avgCookieSales[i]} cookies`;
//       cookieUL.appendChild(storeHours);

//     }
//     let cookieTotal = document.createElement('li');
//     cookieTotal.textContent = `Total Sales: ${this.numSales}`;
//     cookieUL.appendChild(cookieTotal);
//   },
// };

// let dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieBought: 3.7,
//   numCust: 0,
//   numSales: 0,
//   avgCookieSales: [],
//   randomNumCustGenerator: function (min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   },

//   getNumCust: function () {
//     this.numCust = this.randomNumCustGenerator(this.minCust, this.maxCust);
//     return this.numCust;
//   },


//   render: function () {
//     for (let i = 0; i < hours.length; i++) {
//       // this.getNumCust();
//       let avgCookieSold = Math.round(this.avgCookieBought * this.getNumCust());
//       console.log(avgCookieSold);
//       this.numSales += avgCookieSold;
//       this.avgCookieSales.push(avgCookieSold); // .toFixed from MDN

//     }

//     let articleEle = document.createElement('article');
//     cookieSection.appendChild(articleEle);

//     let cookieHeading = document.createElement('h2');
//     cookieHeading.innerText = this.name;
//     articleEle.appendChild(cookieHeading);

//     let cookieUL = document.createElement('ul');
//     articleEle.appendChild(cookieUL);

//     for (let i = 0; i < hours.length; i++) {
//       let storeHours = document.createElement('li');
//       storeHours.innerText = `${hours[i]} : ${this.avgCookieSales[i]} cookies`;
//       cookieUL.appendChild(storeHours);

//     }
//     let cookieTotal = document.createElement('li');
//     cookieTotal.textContent = `Total Sales: ${this.numSales}`;
//     cookieUL.appendChild(cookieTotal);
//   },
// };

// let paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieBought: 2.3,
//   numCust: 0,
//   numSales: 0,
//   avgCookieSales: [],
//   randomNumCustGenerator: function (min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   },

//   getNumCust: function () {
//     this.numCust = this.randomNumCustGenerator(this.minCust, this.maxCust);
//     return this.numCust;
//   },


//   render: function () {
//     for (let i = 0; i < hours.length; i++) {
//       // this.getNumCust();
//       let avgCookieSold = Math.round(this.avgCookieBought * this.getNumCust());
//       console.log(avgCookieSold);
//       this.numSales += avgCookieSold;
//       this.avgCookieSales.push(avgCookieSold); // .toFixed from MDN

//     }

//     let articleEle = document.createElement('article');
//     cookieSection.appendChild(articleEle);

//     let cookieHeading = document.createElement('h2');
//     cookieHeading.innerText = this.name;
//     articleEle.appendChild(cookieHeading);

//     let cookieUL = document.createElement('ul');
//     articleEle.appendChild(cookieUL);

//     for (let i = 0; i < hours.length; i++) {
//       let storeHours = document.createElement('li');
//       storeHours.innerText = `${hours[i]} : ${this.avgCookieSales[i]} cookies`;
//       cookieUL.appendChild(storeHours);

//     }
//     let cookieTotal = document.createElement('li');
//     cookieTotal.textContent = `Total Sales: ${this.numSales}`;
//     cookieUL.appendChild(cookieTotal);
//   },
// };

// let lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieBought: 4.6,
//   numCust: 0,
//   numSales: 0,
//   avgCookieSales: [],
//   randomNumCustGenerator: function (min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   },

//   getNumCust: function () {
//     this.numCust = this.randomNumCustGenerator(this.minCust, this.maxCust);
//     return this.numCust;
//   },


//   render: function () {
//     for (let i = 0; i < hours.length; i++) {
//       // this.getNumCust();
//       let avgCookieSold = Math.round(this.avgCookieBought * this.getNumCust());
//       console.log(avgCookieSold);
//       this.numSales += avgCookieSold;
//       this.avgCookieSales.push(avgCookieSold); // .toFixed from MDN

//     }

//     let articleEle = document.createElement('article');
//     cookieSection.appendChild(articleEle);

//     let cookieHeading = document.createElement('h2');
//     cookieHeading.innerText = this.name;
//     articleEle.appendChild(cookieHeading);

//     let cookieUL = document.createElement('ul');
//     articleEle.appendChild(cookieUL);

//     for (let i = 0; i < hours.length; i++) {
//       let storeHours = document.createElement('li');
//       storeHours.innerText = `${hours[i]} : ${this.avgCookieSales[i]} cookies`;
//       cookieUL.appendChild(storeHours);

//     }
//     let cookieTotal = document.createElement('li');
//     cookieTotal.textContent = `Total Sales: ${this.numSales}`;
//     cookieUL.appendChild(cookieTotal);
//   },
// };


// seattle.render();
// // console.log(seattle.avgCookieSales);
// tokyo.render();
// // console.log(tokyo.avgCookieSales);
// dubai.render();
// // console.log(dubai.avgCookieSales);
// paris.render();
// // console.log(paris.avgCookieSales);
// lima.render();
// // console.log(lima.avgCookieSales);
