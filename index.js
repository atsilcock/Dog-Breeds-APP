document.addEventListener("DomContentLoaded", function(){
     const form = document.getElementById("form") //grabing the form element from the index.html
})


function hanldeForm(){

    form.addEventListener("submit", (e) => { // passing an event as the parameter
        e.preventDefault(); // this event is preventing the default action of the form - whic is to reset
        
            fetch("http://localhost:3000/dogBreeds") // fetching animal data from local server
            .then(response => response.json()) // taking the response from the local server and converting it into a json file - Java Script Object Notation
            .then(data => {  // taking the data from the converted JSON file itterating 
               
        
                const tableBody = document.getElementById("data-body") // grabbing the ID data-body form the DOM
                console.log(tableBody) //console logging to make sure it was grabbed
                tableBody.innerHTML = "" // clears the previous results

                data.forEach(breed => { // taking the data, that was converted into a JSON, and using a forEach loop to itterate through the array of objects)
                    const row = document.createElement("tr") // creating a new element called row so that it can be appending to the tableBody element - this is where all of the appended elements will be stored
                
                //create and append the dog name cell
                    const nameCell = document.createElement("td") // creating a new element that holds the table data (td)
                    nameCell.textContent = breed.DogName // changing the text of the created element to the data that we have in our array of objects and using dot notation(chain method) to acccess the DogName index
                    row.appendChild(nameCell) // appending the nameCell element, that was just created, to the row element that we created, within our forLoop

                    const descriptionCell = document.createElement("td") 
                    descriptionCell.textContent = breed.description
                    row.appendChild(descriptionCell)

                    const typeCell = document.createElement("td")
                    typeCell.textContent = breed.dogType
                    row.appendChild(typeCell)

                    tableBody.appendChild(row)

                //Input
                
                
                })
                
            })
     })
 }

hanldeForm()






