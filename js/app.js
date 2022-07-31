let myAgeLable = document.querySelector("#age");

const birthYear = 1991;
let time = new Date();
let thisYear = time.getFullYear();
myAgeLable.innerText = thisYear - birthYear;

