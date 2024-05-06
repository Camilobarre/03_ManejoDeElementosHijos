const main = document.querySelector("main");
const btnExecuteExample = document.getElementById("btn-execute-example")

btnExecuteExample.addEventListener("click", () => {
    
    //Add
    // const btnResponse = createButtonSuccess()
    // main.appendChild(btnResponse) //Se acumulan automaticamente
    // main.innerHTML += `<button type="button" class="btn btn-success">Hello</button>` //Con InnerHTML toca ponerle + para que se vayan acumulando

    //Remove
    // const btnForDelete = selectOneButton()
    // main.removeChild(btnForDelete)

    //Replace
    // const newButton= createButtonSuccess()
    // const existenButton=selectInfoButton()

    // main.replaceChild(newButton, existenButton)

    //Insert Before
    const newButton=createButtonSuccess()
    const btnReference=selectInfoButton()

    main.insertBefore(newButton,btnReference).0

})

function createButtonSuccess() {
    const button = document.createElement("button")
    button.setAttribute("type", "button")
    button.type = "button" //Otra forma de añadir un atributo

    button.classList.add("btn")
    button.classList.add("btn-success")

    button.classList.add("btn", "btn-success") //Otra forma de añadir 

    button.textContent = "Hello"

    return button
}

function selectInfoButton() {
    const btnFound = document.querySelector(".btn-info")
    return btnFound
}

selectOneButton()
