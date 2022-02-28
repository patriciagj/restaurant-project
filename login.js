'use strict';

// 4- Create a way for user to login, register or logout in the website. At this
// stage use localStorage to keep user logged in

let userList = JSON.parse(localStorage.getItem('userList') || '[]');

// console.log(userList);

//btns
const btnLogin = document.querySelector('.btn__login');
const btnRegister = document.querySelector('.btn__register');
//inputs
const emailLogin = document.getElementById('email__login');
const emailRegister = document.getElementById('email__register');

const passwordLogin = document.getElementById('password__login');
const passwordRegister = document.getElementById('password__register');

btnLogin.addEventListener('click', function () {
  //prevent registration without filling anything
  if (emailLogin.value === '' || passwordLogin.value === '') {
    alert('Please enter your information');
  } else {
    //find in all users if its already registred
    const findUser = userList.find(user => user.userEmail === emailLogin.value);
    alert('Welcome to your account!');
    if (findUser !== null) {
      localStorage.setItem('userAccount', JSON.stringify(findUser));
    }
    //when logged, redirect the page
    window.location.href = 'restaurant.html';
  }
});

btnRegister.addEventListener('click', function () {
  if (emailRegister.value === '' || passwordRegister.value === '') {
    alert('Please enter your information');
  } else {
    //when user clicks add to the localStorage (register a new user)
    userList.push({
      userEmail: emailRegister.value,
      userPin: passwordRegister.value,
      order: [],
    });
    localStorage.setItem('userList', JSON.stringify(userList));
  }
});
