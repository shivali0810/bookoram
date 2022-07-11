// alert('hello world');
// let a=1;
// let namee='shivali';
// console.log(a, namee);
//var/let can change values in the program 
//const cannot change value once defined

// console.log('hello, world');
// let fn='shivali';
// let ln='gupta';
// let fulln=fn+' '+ln;
// console.log(fulln);
// console.log(fulln[0]);
// console.log(fulln[1]);
// console.log(fulln[2]);
// console.log(fulln.length);
// console.log(fulln.toUpperCase());

// let ind=fulln.indexOf('s');
// console.log(ind);
// let lastInd=fulln.lastIndexOf('a');
// console.log(lastInd);
// let slc=fulln.slice(3,9);//takes starting index and ending index
// let ns=fulln.substr(2,2);//takes starting index and length
// let rep=fulln.replace('v', 'b');//replaces first occurence of v with w
// console.log(slc);
// console.log(ns);
// console.log(rep);

// let a=10;
// console.log(a**2);// double star used for power
//uses BODMAS
//NaN -not a number

// console.log(5*'hello');//gives NaN
// console.log(5/'hello');//gives NaN

// let likes=100;
// let auth='Maria';
// // let res='the blog has '+likes+' likes';
// let res= `the blog by ${auth} has ${likes} likes`;
// console.log(res);

//creating html templates

// let title= 'the monk that sold his ferrari';
// let auth= 'jk rowling';
// let likes= 1000;
// let html= `
// <h2> ${title} </h2>
// <p> By ${auth} </p>
// <span>This blog has ${likes} likes</span>
// `;
// console.log(html);

//arrays

// let arr=['shi','va','li'];
// let res=arr.join('--');
// console.log(res);

//to add elements in arr
// let mor=arr.concat(['gup','ta']);//doesnt alter value of arr
// console.log(mor);
// let res=arr.push('jijiji');
// let les=arr.pop('jijiji');
// console.log(arr);

// let torf=arr.includes('li');
// console.log(torf);

// let pi=3;
// console.log(pi==3);
// console.log(pi<2);

// let score='100';
// console.log(score+1);//will act as string
// //  score=Number(score);
//  console.log(score+1);//will act as number

// console.log(typeof(score));

// let nm='shivali';
// nm=Number(nm);
// console.log(nm);//NaN

// let num=50;
// num=String(num);
// console.log(num+1);//act as string

// let haha=150;//any non-zero value
// haha=Boolean(haha)
// console.log(haha)
// haha=0
// haha=Boolean(haha)
// console.log(haha)
// haha='0';
// haha=Boolean(haha)
// console.log(haha)
// haha='';
// haha=Boolean(haha)
// console.log(haha)

// function greet(){
//     console.log("hello");
// }
// greet();

// const speak=function (name,time){
//     console.log(`good ${time} ${name}`);
// };
// speak('shivali', 'night');
// speak('shivali', 'morning');
// speak('shivali', 'afternoon');

// const bolo=()=>{
//     console.log('hi shivali')
// };
// bolo();

//function of function(s)

// const myfunc=(fun)=>{
//     let num=5;
//        fun(num);
// }

// const fun=function (num){
//     console.log(num+1);
//     }

// myfunc(fun(2));

// myfunc(function(num){
// console.log(num+1);
// });

// let ar =['a','bb','cc'];
// ar.forEach(function(hehe){
//     console.log(hehe);
// })

// ar.forEach((hehe, nhehe)=>{//element,index
//     console.log(nhehe,hehe);
// })

// const callOut=(inelt,elt)=>{
//     console.log(`hi ${inelt} you are ${elt}`);
// }

// ar.forEach(callOut);

// const people=['mario','jack','rocky','jane'];

// const ul=document.querySelector('.ppl');

// let html=``;

// people.forEach(function(elt){
//     html+=`<li style="color: red">${elt}</li>`;
// })

// ul.innerHTML=html;


///////////////////
//OBJECT LITERALS//
///////////////////

// let user={
//     name:'shivali',
//     age:19,
//     email:'ss@g.com',
//     location:'india',
//     blogs:['how i met him!','where do i go wrong?'],
//     login:function(nm){
//         console.log(`${nm} logged in`);
//     },
//     logout:function(nm){
//         console.log(`${nm} logged out`);
//     },
//     logblogs:function(){//logblogs(){}--aesa bhi likh skte
//         console.log(`${this.name} has written these blogs:`)
//         this.blogs.forEach(blog=>{
//             console.log(blog);
//         })
//     }
// };

// console.log(user);
// console.log(user.location);
// user.location='ranchi';
// console.log(user.location);

// console.log(user['email']);
// console.log(user['age']);

// const key='name';
// user[key]='sss';
// console.log(user.name);

// user.login(user.name);
// user.logout(user.name);
// user.logblogs();

//arrays can also store objects in them

// const blogs=[
//     {name:'shivali',age:19},
//     {name:'suyash',age:20}
// ];

// console.log(blogs);

//MATH OBJECT 

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E)

// const a=7.7
// console.log(Math.round(a));
// console.log(Math.floor(a));
// console.log(Math.ceil(a));
// console.log(Math.trunc(a));

// const ran=Math.random();//generates random number
// console.log(ran);
// console.log(Math.round(ran*100));//to generate random integers


//Primitive type
//number string bool etc. 
// let a=50;//we use let so that we can change in future
// let b=a;
// console.log(a,b);
// a=20;
// console.log(a,b);
//here a and b stored in different locations so change in a does not affect b;

//Reference type  
//array,function,object etc 
// let ua={name:'shivali',age:20};
// let ub=ua;
// console.log(ua,ub);
// ua.name='suyash';
// console.log(ua,ub);
//here ua and ub stored in same locations so change in ua affects ub;








