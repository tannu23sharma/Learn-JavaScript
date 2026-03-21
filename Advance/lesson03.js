const div = document.createElement('div')

div.style.backgroundColor = "white"
div.style.padding = "30px"
div.style.width = "300px"
div.style.height = "400px"
div.style.color = "black"

div.className = "main"
div.id = Math.round(Math.random() * 10 + 1)

div.setAttribute("title", "text")

const heading = document.createElement('h1')
heading.innerText = "Heyy"
heading.innerText = "Hello" //overwrites
div.appendChild(heading)

//another way
let text = document.createTextNode("sample text")
div.appendChild(text)

const body = document.querySelector('body')
body.appendChild(div)
//another way
//document.body.appendChild(div)

let ul = document.querySelector('.language')
div.appendChild(ul)

//Adding an element
function addLang(name){
    let li = document.createElement('li')
    li.innerHTML = `${name}`
    document.querySelector('.language').appendChild(li)
}
addLang("java")
addLang("python")

//addLang function optimized way
function addLangOpti(name){
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(name))
    document.querySelector('.language').appendChild(li)
}
addLangOpti("C++")
addLangOpti("Ruby")


//Edit elements
const secondLang = document.querySelector("li:nth-child(2)")
//secondLang.innerHTML = "Swift"
//another way
const newli = document.createElement('li')
newli.textContent = "Swift"
secondLang.replaceWith(newli)

//another way
const firstLang = document.querySelector("li:first-child")
firstLang.outerHTML = '<li>TypeScript</li>'


//Remove element
const lastLang = document.querySelector("li:last-child")
lastLang.remove()