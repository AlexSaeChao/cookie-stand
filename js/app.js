'use strict';

let cookieSection = document.getElementById('cookie-profiles');

console.dir(cookieSection);

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  numCust: 0,
  numSales: 0,
  avgCookieSales: [],
  randomNumCustGenerator: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  getNumCust: function () {
    this.numCust = this.randomNumCustGenerator(this.minCust, this.maxCust);
  },


  render: function () {
    for (let i = 0; i < hours.length; i++) {
      this.getNumCust();
      let avgCookieSold = this.avgCookieBought * this.numCust;
      this.avgCookieSales.push(avgCookieSold.toFixed()); // .toFixed from MDN
    }

    let articleEle = document.createElement('article');
    cookieSection.appendChild(articleEle);

    let cookieHeading = document.createElement('h2');
    cookieHeading.innerText = this.name;
    articleEle.appendChild(cookieHeading);

    let cookieUL = document.createElement('ul');
    articleEle.appendChild(cookieUL);

    for (let i = 0; i < hours.length; i++) {
      let storeHours = document.createElement('li');
      storeHours.innerText = `${hours[i]} : ${this.avgCookieSales[i]} cookies`;
      cookieUL.appendChild(storeHours);

    }
  },
};



let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieBought: 1.2,
  numCust: 0,
  numSales: 0,
  avgCookieSales: [],
  randomNumCustGenerator: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  getNumCust: function () {
    this.numCust = this.randomNumCustGenerator(this.minCust, this.maxCust);
  },


  render: function () {
    for (let i = 0; i < hours.length; i++) {
      this.getNumCust();
      let avgCookieSold = this.avgCookieBought * this.numCust;
      this.avgCookieSales.push(avgCookieSold.toFixed());
    }

    let articleEle = document.createElement('article');
    cookieSection.appendChild(articleEle);

    let cookieHeading = document.createElement('h2');
    cookieHeading.innerText = this.name;
    articleEle.appendChild(cookieHeading);

    let cookieUL = document.createElement('ul');
    articleEle.appendChild(cookieUL);

    for (let i = 0; i < hours.length; i++) {
      let storeHours = document.createElement('li');
      storeHours.innerText = `${hours[i]} : ${this.avgCookieSales[i]} cookies`;
      cookieUL.appendChild(storeHours);

    }
  },
};

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieBought: 3.7,
  numCust: 0,
  numSales: 0,
  avgCookieSales: [],
  randomNumCustGenerator: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  getNumCust: function () {
    this.numCust = this.randomNumCustGenerator(this.minCust, this.maxCust);
  },


  render: function () {
    for (let i = 0; i < hours.length; i++) {
      this.getNumCust();
      let avgCookieSold = this.avgCookieBought * this.numCust;
      this.avgCookieSales.push(avgCookieSold.toFixed());
    }

    let articleEle = document.createElement('article');
    cookieSection.appendChild(articleEle);

    let cookieHeading = document.createElement('h2');
    cookieHeading.innerText = this.name;
    articleEle.appendChild(cookieHeading);

    let cookieUL = document.createElement('ul');
    articleEle.appendChild(cookieUL);

    for (let i = 0; i < hours.length; i++) {
      let storeHours = document.createElement('li');
      storeHours.innerText = `${hours[i]} : ${this.avgCookieSales[i]} cookies`;
      cookieUL.appendChild(storeHours);

    }
  },
};

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieBought: 2.3,
  numCust: 0,
  numSales: 0,
  avgCookieSales: [],
  randomNumCustGenerator: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  getNumCust: function () {
    this.numCust = this.randomNumCustGenerator(this.minCust, this.maxCust);
  },


  render: function () {
    for (let i = 0; i < hours.length; i++) {
      this.getNumCust();
      let avgCookieSold = this.avgCookieBought * this.numCust;
      this.avgCookieSales.push(avgCookieSold.toFixed());
    }

    let articleEle = document.createElement('article');
    cookieSection.appendChild(articleEle);

    let cookieHeading = document.createElement('h2');
    cookieHeading.innerText = this.name;
    articleEle.appendChild(cookieHeading);

    let cookieUL = document.createElement('ul');
    articleEle.appendChild(cookieUL);

    for (let i = 0; i < hours.length; i++) {
      let storeHours = document.createElement('li');
      storeHours.innerText = `${hours[i]} : ${this.avgCookieSales[i]} cookies`;
      cookieUL.appendChild(storeHours);

    }
  },
};

let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieBought: 4.6,
  numCust: 0,
  numSales: 0,
  avgCookieSales: [],
  randomNumCustGenerator: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  getNumCust: function () {
    this.numCust = this.randomNumCustGenerator(this.minCust, this.maxCust);
  },


  render: function () {
    for (let i = 0; i < hours.length; i++) {
      this.getNumCust();
      let avgCookieSold = this.avgCookieBought * this.numCust;
      this.avgCookieSales.push(avgCookieSold.toFixed());
    }

    let articleEle = document.createElement('article');
    cookieSection.appendChild(articleEle);

    let cookieHeading = document.createElement('h2');
    cookieHeading.innerText = this.name;
    articleEle.appendChild(cookieHeading);

    let cookieUL = document.createElement('ul');
    articleEle.appendChild(cookieUL);

    for (let i = 0; i < hours.length; i++) {
      let storeHours = document.createElement('li');
      storeHours.innerText = `${hours[i]} : ${this.avgCookieSales[i]} cookies`;
      cookieUL.appendChild(storeHours);

    }
  },
};


seattle.render();
console.log(seattle.avgCookieSales);
tokyo.render();
console.log(tokyo.avgCookieSales);
dubai.render();
console.log(dubai.avgCookieSales);
paris.render();
console.log(paris.avgCookieSales);
lima.render();
console.log(lima.avgCookieSales);
