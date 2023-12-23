let codecapcha=['a','b','8','k','y','s','h','6','t','k','e','l','7','q','v','z','z','6','f','w','r','a','0','n','n']

let TdElem=document.querySelectorAll('td')
let relod=document.getElementById('reload')
let form=document.querySelector('form')
let InpEle=document.getElementById('InpEle')
let peymayesh=""

TdElem.forEach((i)=>{
   let m=Math.random()*codecapcha.length
   let round=Math.floor(m)
   i.innerHTML=codecapcha[round].toUpperCase()
   peymayesh+=i.innerHTML
})

relod.addEventListener('click',()=>{
   peymayesh=""
   TdElem.forEach((i)=>{
      let m=Math.random()*codecapcha.length
      let round=Math.floor(m)
      i.innerHTML=codecapcha[round].toUpperCase()
      peymayesh+=i.innerHTML
   })
})


form.addEventListener("submit",()=>{
   if(InpEle.value.toUpperCase()==peymayesh){
      peymayesh=""
      alert(true)
      TdElem.forEach((i)=>{
         let m=Math.random()*codecapcha.length
         let round=Math.floor(m)
         i.innerHTML=codecapcha[round].toUpperCase()
         InpEle.value=""
         peymayesh+=i.innerHTML
      })

   }else{
      alert(false);
      InpEle.value=""
      console.log(peymayesh);
   }


})


let openlist=document.getElementById('open-list')
let ulelem=document.querySelectorAll('.ulelem')
let close=document.getElementById('close')


openlist.addEventListener('click',(ev)=>{
   ev.preventDefault()
   ulelem[0].setAttribute('style','left:0;')
})

close.addEventListener('click',(ev)=>{
   ev.preventDefault()
   ulelem[0].setAttribute('style','left:-200px;')
})



let textarea1=document.getElementById('textarea1')
let btn=document.getElementById('btn')

btn.addEventListener('click',()=>{
   const utternace=new SpeechSynthesisUtterance(textarea1.value)
   const synth=window.speechSynthesis;
   synth.speak(utternace)
   
})


const search=document.getElementById('search')
const jokeElem=document.getElementById('jokeElem')
const url='https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'

async function SearchJoke(){
const fetchapi=await fetch(url)
const response=await fetchapi.json()
 console.log(response);


 jokeElem.innerHTML=response.joke

}

search.addEventListener('click',()=>{
   SearchJoke()
})






let searchcountry=document.getElementById('search-country')
let searchvalue=document.getElementById('search-value')
let flagimg=document.getElementById('flag-img')
let nameh1=document.getElementById('name-h1')

let Info=document.querySelectorAll('.info')
let countryspan=document.querySelectorAll('.country-span')

let addp=document.getElementById('add-p')
let creatH3=document.createElement('h3')
creatH3.innerHTML='Nothing is defined about this'
creatH3.setAttribute('style','text-align:center; color:red; text-decoration: underline 2px;')


Info[0].style.display='none'


async function asynccountry(){
   let data=0
   let inpvalue=searchvalue.value;
   console.log(inpvalue);
   let urlcountry=`https://restcountries.com/v3.1/name/${inpvalue}?fullText=true`
   let getRespons=await fetch(urlcountry)
   let response=await getRespons.json()
    data=response
    console.log(data);

   if(data.status==404 || inpvalue=="" ){     
      addp.appendChild(creatH3)
      Info[0].style.display='none'
   }else{
      Info[0].style.display='block'
      creatH3.remove()
   }

   flagimg.src=data[0].flags.png
   flagimg.alt=data[0].flags.alt
   nameh1.innerHTML=inpvalue
   
   countryspan[0].innerHTML=data[0].capital
   countryspan[1].innerHTML=data[0].region
   countryspan[2].innerHTML=data[0].population
   countryspan[3].innerHTML=Object.keys(data[0].currencies)[0]
   countryspan[4].innerHTML=Object.values(data[0].languages).toString().split(",").join(",")

}

searchcountry.addEventListener('submit',(ev)=>{
   ev.preventDefault()
   asynccountry()
   searchvalue.value=""
   
   
})


let city=document.getElementById('city')
let result=document.getElementById('result')
let formsearch=document.querySelector('.form-search')

let getweater= ()=>{

   let cityvalue=city.value

   if(cityvalue.length==0){
      result.innerHTML=`<h3 style="text-align:center; color:red;  padding-top: 10px;">please enter a city name</h3>`

   }else{
   let urlweaterapp=`https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=${'335c0d03cd5bc702684588b1f8e17b1b'}&units=metric`

 fetch(urlweaterapp)
 .then((fetchWeater)=>fetchWeater.json())
 .then((responsweater)=>{
 console.log(responsweater)

 if(responsweater.cod==404){
   result.innerHTML=`<h3 style="text-align:center; color:red;  padding-top: 10px;">Please enter your city name correctly</h3>`
 }

 result.innerHTML=`<h2>${responsweater.name}</h2>
<h4>${responsweater.weather[0].description}</h4>

<img src="https://openweathermap.org/img/w/${responsweater.weather[0].icon}.png" alt="">
<h1>${responsweater.main.temp} &#176;</h1>

<div class="min-max">

<div class="min">
<h5>min</h5>
<h4>${responsweater.main.temp_min}&#176</h4>
</div>

<div class='center-border'></div>

<div class="max">
<h5>max</h5>
<h4>${responsweater.main.temp_max}&#176</h4>
</div>

</div>`
})

 }


}


window.addEventListener('load',()=>{
   getweater()
})

formsearch.addEventListener('submit',(ev)=>{
   ev.preventDefault()
   getweater()
})

let o=0


