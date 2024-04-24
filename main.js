// const title = document.createElement("h1")
// const text = document.createTextNode("Hello Mars")
// title.appendChild(text)
// console.log(title);

// const mainCode = document.querySelector("body")
// mainCode.appendChild(title)



// const changeTitle = () => {
//     const title = document.querySelector("h1")
//     title.innerHTML = "Hello Mars"
//     title.style.color = "blue"
// }


let text = document.getElementById('red');
let text_background = prompt("Enter body backraundColor")
let text_color = prompt("Enter text color")


text.style.backgroundColor = text_background
text.style.color = text_color