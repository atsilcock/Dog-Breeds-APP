const form = document.getElementById("form"); 

document.addEventListener("DOMContentLoaded", () => {
    fetchInformation();
    
});

    function resetForm ()  {
        const resetButton = document.getElementById("reset-button");
        console.log(resetButton);
        resetButton.addEventListener("click", (e) => { 
            e.preventDefault(); 
            form.reset()
            
        });
    }


    function commentForm(){
        const textForm = document.getElementById("text")
        console.log(textForm)
        textForm.addEventListener("keydown", (e) => {
            console.log(e)
            if(e.key === "Enter"){
                //e.preventDefault()
                alert("Your message has been recieved!")
            }
        })
        
    }
    
    commentForm()
          



function fetchInformation() {
    fetch("http://localhost:3000/dogBreeds") 
    .then(response => response.json()) 
    .then(data => {
        data.forEach(breed => {
            const tableBody = document.getElementById("data-table");
            const row = document.createElement("tr"); 
            
            
            row.addEventListener("click", () => {
                row.style.color = "red";
                tableBody.innerHTML =  ""
                tableBody.appendChild(row.cloneNode(true))
                

             
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



