//app to add event listeners to the three h3 components in index.html

//query the h3 elements and get a collection of them
const headersCollection = document.querySelectorAll("h3")


//loop through the collection of h3 elements
headersCollection.forEach(header => {

    //for each one add an event listener
    header.addEventListener("click", event => {

        //that grabs the text content of the target and logs it to the console
        console.log(event.target.textContent)
        
    })
})
