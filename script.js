let main=document.getElementById('main');
let arr=["https://i.pinimg.com/236x/5d/6d/23/5d6d23fd7adb44baba20a60c252da339.jpg",
"https://i.pinimg.com/236x/96/d2/1d/96d21d738561947f96255e6f12f1754a.jpg",
'https://i.pinimg.com/236x/ac/36/51/ac3651e64257475dff8596d312eb3d88.jpg',
"https://i.pinimg.com/236x/85/d4/13/85d4138f8ee087d83349ddcca4ee9830.jpg"];
let s='';
for(let i=0;i<=64;i++)
{
    let r=Math.floor(Math.random()*arr.length);
    s+=`<div class='card'><img src= ${arr[r]}> </div>`;
}
main.innerHTML=s;

