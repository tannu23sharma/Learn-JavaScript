document.getElementsByClassName('heading')
document.getElementById('title')
//<h1 id=​"title" class=​"heading">​Document Object Model Learning​</h1>​
document.getElementById('title').id
//'title'
document.getElementById('title').className
//'heading'
document.getElementById('title').getAttribute('id')
//'title'
document.getElementById('title').getAttribute('class')
//'heading'
document.getElementById('title').setAttribute('class', 'test')
//overwrites class 
document.getElementById('title').className
//'test'
document.getElementById('title').setAttribute('class', 'test heading')
// sets two class names
document.getElementById('title').className
//'test heading'

const title = document.getElementById('title')
//<h1 id=​"title" class=​"heading">​…​</h1>​"Document Object Model Learning "<span style=​"display:​ none;​">​Hidden Text​</span>​</h1>​

//title.style.backgroundColor = "blue"
//title.style.padding = "10px"
//title.style.margin = "10px"

title.innerText
//'Document Object Model Learning'
title.textContent
//'Document Object Model Learning Hidden Text'
title.innerHTML
//'Document Object Model Learning <span style="display: none;">Hidden Text</span>'

//Added 3 more h2 headings in html
document.querySelector('h2') //only selects the first h2
document.querySelectorAll('h2') //selects all h2

document.querySelector('#title') //selects by ID
//<h1 id=​"title" class=​"heading">​"Document Object Model Learning "<span style=​"display:​ none;​">​Hidden Text​</span>​</h1>​
document.querySelector('.heading') //selects by class
//<h1 id=​"title" class=​"heading">​"Document Object Model Learning "<span style=​"display:​ none;​">​Hidden Text​</span>​</h1>​

document.querySelector('input[type="password"]') //selects input of any type

//Added 3 list items
const firstList = document.querySelector('li')
firstList.style.backgroundColor = "pink"

const tempLiList =  document.querySelectorAll('li') //selects all li items
//NodeList(3) [li, li, li]
tempLiList[0].style.backgroundColor = "red"//selects first li item 
//Iterate in nodelist
tempLiList.forEach((li)=>{
    li.style.color="red"
})