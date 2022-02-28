'use strict';

// Final Exercise– Build a restaurant website
// 1- Build a HTML page that has a Top Bar, when a user click in any of the
// elements of the top bar the page must scroll to it

// 2- Build a About section, where you will talk about the restaurant

// 3- Build a Menu section, where you are going to display the plates list for the
// week. The data that will feed this section can change so the plates part
// must be built in JavaScript (the plates object is provided in the next page)

// 4- Create a way for user to login, register or logout in the website. At this
// stage use localStorage to keep user logged in

// 5 -In case user is logged in, a new section is available which is a Schedule
// section, there the user can book one or several days of the week and
// choose if he wants the meat or the fish plate. At the end of the section he
// can see the total price. The options selected by the user must be saved in
// localStorage

let plates = [
  {
    Name: 'Salmon',
    Day: 'Monday',
    Type: 'Fish',
    Price: 8,
    img: 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
  },
  {
    Name: 'Lasagna',
    Day: 'Monday',
    Type: 'Meat',
    Price: 7,
    img: 'https://cdn.pixabay.com/photo/2016/12/11/22/41/lasagna-1900529_960_720.jpg',
  },
  {
    Name: 'Sardines',
    Day: 'Tuesday',
    Type: 'Fish',
    Price: 6,
    img: 'https://cdn.pixabay.com/photo/2016/06/30/18/49/sardines-1489626_960_720.jpg',
  },
  {
    Name: 'Chicken',
    Day: 'Tuesday',
    Type: 'Meat',
    Price: 5,
    img: 'https://cdn.pixabay.com/photo/2016/11/18/17/42/barbecue-1836053_960_720.jpg',
  },
  {
    Name: 'Fish And Chips',
    Day: 'Wednesday',
    Type: 'Fish',
    Price: 5,
    img: 'https://cdn.pixabay.com/photo/2019/11/05/00/07/fish-and-chips-4602434_960_720.jpg',
  },
  {
    Name: 'Hamburguer',
    Day: 'Wednesday',
    Type: 'Meat',
    Price: 4,
    img: 'https://cdn.pixabay.com/photo/2016/03/05/19/37/appetite-1238459_960_720.jpg',
  },
  {
    Name: 'Sushi',
    Day: 'Thursday',
    Type: 'Fish',
    Price: 10,
    img: 'https://cdn.pixabay.com/photo/2016/11/25/16/08/sushi-1858696_960_720.jpg',
  },
  {
    Name: 'Spaghetti bolognese',
    Day: 'Thursday',
    Type: 'Meat',
    Price: 7,
    img: 'https://image.freepik.com/free-photo/plate-basil-cherry-gourmet-menu_1220-1184.jpg',
  },
  {
    Name: 'Chicken',
    Day: 'Friday',
    Type: 'Meat',
    Price: 6,
    img: 'https://cdn.pixabay.com/photo/2016/11/18/17/42/barbecue-1836053_960_720.jpg',
  },
  {
    Name: 'Fish Soup',
    Day: 'Friday',
    Type: 'Fish',
    Price: 7,
    img: 'https://cdn.pixabay.com/photo/2018/01/01/17/57/fish-soup-3054627_960_720.jpg',
  },
];

const itemsMenu = document.querySelector('.menu__items');
//btns
const btnOrderOnline = document.querySelector('.btn');
const btnOut = document.querySelector('.btnLogOut');

const getCurrentDay = function () {
  const dayNumber = new Date().getDay();

  if (dayNumber === 0) return 'Sunday';
  else if (dayNumber === 1) return 'Monday';
  else if (dayNumber === 2) return 'Tuesday';
  else if (dayNumber === 3) return 'Wednesday';
  else if (dayNumber === 4) return 'Thursday';
  else if (dayNumber === 5) return 'Friday';
  else return 'Saturday';
};

plates.forEach(function (element) {
  const html = `  <img
    class="plates__image"
    src="${element.img}"
    alt="plates"
  />
  <div>${element.Name}</div>
  <div>Price: € ${element.Price}</div>`;

  const newDiv = document.createElement('div');
  newDiv.className = 'plate';
  newDiv.innerHTML = html;

  const today = getCurrentDay();

  if (element.Day === today) {
    itemsMenu.appendChild(newDiv);
  }
});

//find on localStorage which person is logged in

const userAccount = JSON.parse(localStorage.getItem('userAccount') || null);

if (userAccount !== null) {
  btnOut.classList.remove('hidden');
  btnOrderOnline.classList.add('hidden');
}

//remove userAccount from localStorage

btnOut.addEventListener('click', function () {
  localStorage.removeItem('userAccount');
});
