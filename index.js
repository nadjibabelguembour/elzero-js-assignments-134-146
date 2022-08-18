//Task 1
console.log(`%cTask 1---------------------`,`color:red ;`);
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let reg1=/\d{4}:\w+\d{1}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/ig; //1st method
//2nd method:
//let reg1=/(\w+|\D+)+/ig; 
console.log(ip.match(reg1));

//Task 2
console.log(`%cTask 2---------------------`,`color:red ;`);
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let reg2=/Os\d*O/gi;
console.log(specialNames.match(reg2));
// Output
// ['Os10O', 'OsO', 'Os100O']

//Task 3
console.log(`%cTask 3---------------------`,`color:red ;`);
let phone = "+(995)-123 (4567)";
//strict solution
console.log("the first solution is :",phone.match(/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig));
// another solution:
console.log("the second solution is :",phone.match(/\D*\d+\D*\d+\s*\D*\d+\D*/ig));

//Task 4
console.log(`%cTask 4---------------------`,`color:red ;`);
let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
/*
 /https?/          =>   any url starting with https or http
 :\/\/             =>   followed by      ://
 (?:[-\w]+\.)?     => possibility of having -character and a word character or more and a . character (or not)
 i                 => ignoring case insensitive


*/

//Task 5
console.log(`%cTask 5---------------------`,`color:red ;`);
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re5 = /\d{2}\s*-*\s*\/*\d{2}\s*-*\s*\/*\d{2,}/g; // Write Pattern Here

console.log(date1.match(re5)); // "25/10/1982"
console.log(date2.match(re5)); // "25 - 10 - 1982"
console.log(date3.match(re5)); // "25 10 1982"
console.log(date4.match(re5)); // "25 10 82"


//Task 6
console.log(`%cTask 6---------------------`,`color:red ;`);

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re6 = /((https?):?(\/\/)?(www.))?\w+\.\w*/; // Write Your Pattern Here

console.log(url1.match(re6));
console.log(url2.match(re6));
console.log(url3.match(re6));
console.log(url4.match(re6));
console.log(url5.match(re6));