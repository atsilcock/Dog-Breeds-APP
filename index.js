const form = document.getElementById("form"); 



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
        const tableBody = document.getElementById("data-table");
        
        // Clear existing rows to prevent duplicate entries on subsequent calls
        tableBody.innerHTML = ''; 
        
        data.forEach(breed => {
            const row = document.createElement("tr");
            row.className = "table-row";
            
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
        
        // Add a single event listener to the table body
        tableBody.addEventListener("click", (e) => {
            // Check if the clicked element is a row

                e.target.parentNode.style.color = "blue"
            
        });
    });
}




document.addEventListener("DOMContentLoaded", () => {
    fetchInformation();
});