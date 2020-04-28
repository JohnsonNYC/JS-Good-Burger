// CUSTOM BURGER 
let nameInput = document.querySelector('input[name=name]')
// console.log(nameInput)
let descriptionInput = document.querySelector('input[name=description]')
// console.log(descriptionInput)
let imageInput = document.querySelector('input[name=url]')
// console.log(imageInput)
let submitButton = document.querySelector('input[value="Submit Order"]')
// console.log(submitButton)

let apiUrl = `http://localhost:3000/burgers`
let menuDiv = document.getElementById('burger-menu')

document.addEventListener("DOMContentLoaded", (event) => {
  // E X P O R T I N G  I N F O 
  fetch(apiUrl)
    .then(resp => resp.json())
    .then(json => importTODOM(json))
  // NEW INFO
  submitButton.addEventListener('click', event => {
    event.preventDefault()
    fetch(apiUrl, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        'accept': 'application.json'
      },
      body: JSON.stringify({
        name: nameInput.value,
        description: descriptionInput.value,
        image: imageInput.value
      })
    })
      .then(resp => resp.json())
      .then(json => {
        console.log(json)
        importNewToDOM(json)
        // NOW APPEND TO ORDER LIST [Done]
      })
  })

})

function importTODOM(array) {

  array.forEach(element => {
    let burgerDiv = document.createElement('div')
    let attClass = document.createAttribute('class')

    attClass.value = 'burger'
    burgerDiv.setAttributeNode(attClass)
    menuDiv.appendChild(burgerDiv)
    // name
    let nameEl = document.createElement('h3')
    let nameClass = document.createAttribute('class')
    nameClass.value = 'burger_title'
    nameEl.setAttributeNode(nameClass)
    let nameId = document.createAttribute('bid')
    nameId.value = element.id
    nameEl.setAttributeNode(nameId)
    nameEl.innerText = `${element.name}`
    burgerDiv.appendChild(nameEl)

    //image 
    let image = document.createElement('img')
    let source = document.createAttribute('src')
    source.value = `${element.image}`
    image.setAttributeNode(source)
    burgerDiv.appendChild(image)

    // description 
    let bioEl = document.createElement('p')
    let pClass = document.createAttribute('class')
    pClass.value = 'burger_description'
    bioEl.setAttributeNode(pClass)
    bioEl.innerText = `${element.description}`
    burgerDiv.appendChild(bioEl)
    //add button 
    let button = document.createElement('button')
    let bClass = document.createAttribute('class')
    bClass.value = 'button'
    button.setAttributeNode(bClass)
    button.innerText = `Add to Order`
    burgerDiv.appendChild(button)
  });
  // ADD BUTTON FUNCTIONALITY 
  let addButton = document.querySelectorAll('button.button')
  let orderContainer = document.querySelector('ul#order-list')

  addButton.forEach(element => {
    element.addEventListener('click', event => {
      let list = document.createElement('li')
      let parentElement = element.parentElement
      let burgerName = parentElement.querySelector('h3')
      list.innerText = burgerName.innerText
      orderContainer.appendChild(list)
    })
  })
}

function importNewToDOM(element) { // element is a hash
  let burgerDiv = document.createElement('div')
  let attClass = document.createAttribute('class')

  attClass.value = 'burger'
  burgerDiv.setAttributeNode(attClass)
  menuDiv.appendChild(burgerDiv)
  // name
  let nameEl = document.createElement('h3')
  let nameClass = document.createAttribute('class')
  nameClass.value = 'burger_title'
  nameEl.setAttributeNode(nameClass)
  let nameId = document.createAttribute('bid')
  nameId.value = element.id
  nameEl.setAttributeNode(nameId)
  nameEl.innerText = `${element.name}`
  burgerDiv.appendChild(nameEl)

  //image 
  let image = document.createElement('img')
  let source = document.createAttribute('src')
  source.value = `${element.image}`
  image.setAttributeNode(source)
  burgerDiv.appendChild(image)

  // description 
  let bioEl = document.createElement('p')
  let pClass = document.createAttribute('class')
  pClass.value = 'burger_description'
  bioEl.setAttributeNode(pClass)
  bioEl.innerText = `${element.description}`
  burgerDiv.appendChild(bioEl)
  //add button 
  let button = document.createElement('button')
  let bClass = document.createAttribute('class')
  bClass.value = 'button'
  button.setAttributeNode(bClass)
  button.innerText = `Add to Order`
  burgerDiv.appendChild(button)

  // ADD BUTTON LOGIC
  let addButton = document.querySelectorAll('button.button')
  let orderContainer = document.querySelector('ul#order-list')

  addButton.forEach(element => {
    element.addEventListener('click', event => {
      let list = document.createElement('li')
      let parentElement = element.parentElement
      let burgerName = parentElement.querySelector('h3')
      list.innerText = burgerName.innerText
      orderContainer.appendChild(list)
    })
  })

  let list = document.createElement('li')
  list.innerText = element.name
  orderContainer.appendChild(list)
}
