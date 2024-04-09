document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form"); // Grabbing the form element from the index.html
    fetchInformation();
    
    function resetForm ()  {
        const resetButton = document.getElementById("reset-button");
        console.log(resetButton);
        resetButton.addEventListener("click", (e) => { // Passing a click event listener as the parameter
            e.preventDefault(); // This event is preventing the default action of the button - which is to submit/reset
            form.reset()
            
        });
    }

});

function fetchInformation() {
    fetch("http://localhost:3000/dogBreeds") // Fetching animal data from local server
    .then(response => response.json()) // Taking the response from the local server and converting it into a json file - JavaScript Object Notation
    .then(data => {
        data.forEach(breed => {
            const tableBody = document.getElementById("data-table");
            const row = document.createElement("tr"); // Creating a new element called row
            
            //Click event listener - this is to click on element which takes the row and clones it to the table body, while at removing the elements in the table
            row.addEventListener("click", () => {
                row.style.color = "red";
                tableBody.innerHTML = ""
                tableBody.appendChild(row.cloneNode(true))
                

            // On the event listener - click, this is meant to show the image of that specific breed    
                const postImage = document.getElementById("picture-body")
                console.log(postImage)
                const animalImage = document.createElement("img")
                console.log(animalImage)
                animalImage.src = breed.dogImage
                postImage.append(animalImage)
                
                
            });
            
            const nameCell = document.createElement("td");
            nameCell.textContent = breed.dogName;
            row.appendChild(nameCell);
            
            const descriptionCell = document.createElement("td");
            descriptionCell.textContent = breed.description;
            row.appendChild(descriptionCell);
            
            const typeCell = document.createElement("td");
            typeCell.textContent = breed.dogType;
            row.appendChild(typeCell);
            
            tableBody.appendChild(row);
        });
    });
}


