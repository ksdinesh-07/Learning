//local storage

localStorage.setItem('name','dinesh')
localStorage.setItem('age',21)

user={name:'dinesh',age:'20'};
localStorage.setItem('user_obj',JSON.stringify(user))

user.name="dinesh ks";
localStorage.setItem('user_obj',JSON.stringify(user))

let user_obj=JSON.parse(localStorage.getItem('user_obj'));
console.log(user_obj.name);

localStorage.removeItem('user_obj');
console.log(localStorage);

console.log(localStorage.key(0));
localStorage.clear();

//sessionstorage

sessionStorage.setItem('name','dinesh')
sessionStorage.setItem('age',21)


console.log(sessionStorage);

console.log(sessionStorage.key(0));

sessionStorage.setItem('id',Math.random())

localStorage.setItem('name','dinesh')
localStorage.setItem('age',21)

//coookies

document.cookie ="Username=dinesh ks; expires=Fri, 31 Dec 2024 GMT; path=/";
console.log(document.cookie);