
// DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", () => {
    searchButton = document.getElementById("reset-button")
    console.log(searchButton)

    searchButton.addEventListener("click", fetchInformation)

    comment()

});

//handle fetch information below

function fetchInformation() {
    fetch("http://localhost:3000/dogBreeds")
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById("data-body")

        const textField = document.getElementById("searchField")
        textField.textContent = ""
        console.log(textField.value)
        
        const filteredData = data.filter(animal => animal.dogType.toLowerCase().includes(textField.value.toLowerCase()))
        console.log(filteredData)


            
        filteredData.forEach(breed => {
            const list = document.getElementById("dog-list")
            const listItem = document.createElement("li")
            
            const dogName = document.createElement("div")
            dogName.textContent = `Dog Name: ${breed.dogName}`
            
            const dogDescription = document.createElement("div")
            dogDescription.textContent = `Description: ${breed.description}`

            const dogImage = document.createElement("img")
            dogImage.src = breed.dogImage
            dogImage.alt = `Image of ${breed.dogName}`
            

            listItem.appendChild(dogName)
            listItem.appendChild(dogDescription)
            listItem.appendChild(dogImage)

            list.appendChild(listItem)
    
                
                
        })
    }
)}

// 1) Grab comment-section from DOM 
// 2) create un ordered list within the comment section 
// 3) append list to the comments section 

const h5 = document.getElementById("comments-section")  
console.log(h5) 
const list = document.createElement("ul")
h5.append(list)

//

function comment(){


  const input =  document.getElementById("practice-text")
  const list = document.getElementById("comment-list")

  input.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        e.preventDefault()
        const li = document.createElement("li")
        li.textContent = input.value
        list.appendChild(li)

       input.value = ""

       alert("Thanks for leaving us a message")
    }

})

input.pre
}




    

            


            
            
            // Iterating over data from fetch
            // data.forEach(breed => {
            //     const row = document.createElement("tr");
            //     row.className = "table-row";
                
            //     const nameCell = document.createElement("td");
            //     nameCell.textContent = breed.dogName;
            //     row.appendChild(nameCell);
                
            //     const descriptionCell = document.createElement("td");
            //     descriptionCell.textContent = breed.description;
            //     row.appendChild(descriptionCell);
                
            //     const typeCell = document.createElement("td");
            //     typeCell.textContent = breed.dogType;
            //     row.appendChild(typeCell);
                
            //     tableBody.appendChild(row);
            
            //     // Click event listener
            //     row.addEventListener("click", () => {
            //         row.style.color = "blue";
            //     });
            // });
            
    
