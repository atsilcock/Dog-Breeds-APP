document.addEventListener("DomContentLoaded", function(){
     const form = document.getElementById("form") //grabing the form element from the index.html
})


function hanldeForm(){

    form.addEventListener("submit", (e) => { // passing an event as the parameter
        e.preventDefault(); // this event is preventing the default action of the form - whic is to reset
        
            fetch("http://localhost:3000/dogBreeds") // fetching animal data from local server
            .then(response => response.json()) // taking the response from the local server and converting it into a json file - Java Script Object Notation
            .then(data => {  // taking the data from the converted JSON file itterating 
               const tableBody = document.getElementById("data-body")
               console.log(tableBody)
               tableBody.innerHTML = "" // clears the previous results

                data.forEach(breed => {
                    const row = document.createElement("tr")
                
                //create and append the dog name cell
                    const nameCell = document.createElement("td")
                    nameCell.textContent = breed.DogName
                    row.appendChild(nameCell)

                    const descriptionCell = document.createElement("td")
                    descriptionCell.textContent = breed.description
                    row.appendChild(descriptionCell)

                    const typeCell = document.createElement("td")
                    typeCell.textContent = breed.dogType
                    row.appendChild(typeCell)

                    tableBody.appendChild(row)
                })
                
            })
     })
 }

        hanldeForm()

document.addEventListener("click",() =>
 hanldeForm)


        






