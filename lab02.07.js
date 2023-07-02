function fcheck(a){
    a.style.backgroundColor ='#fff'
    age = a.value
if(isNaN(age)||age >120||age<0){
    alert(age+ ' nie jest wikiem czlowieka! Podaj poprawna wartosc.')
}
else{
    console.log(a.value)
}
}
function ffocus(a){
    a.style.backgroundColor ='#afa'
}
function over(b){
y = document.getElementsByClassName('i')
// console.log(y)
for(x=0;x<y.length; x++){
    y[x].style.visibility='hidden'
}

iId = b.nextElementSibling.getAttribute('id')
console.log(iId)
i = document.getElementById(iId)
i.style.visibility= 'visible'
}
function out(c){
c.style.visibility = 'hidden'
}