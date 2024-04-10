//DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", () => {
    fetchInformation()
});

//handle fetch information below

function fetchInformation() {
    fetch("http://localhost:3000/dogBreeds")
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById("data-table")
        
        // Iterating over data from fetch
        data.forEach(breed => {
            const row = document.createElement("tr")
            row.className = "table-row";
            
            const nameCell = document.createElement("td")
            nameCell.textContent = breed.dogName;
            row.appendChild(nameCell);
            
            const descriptionCell = document.createElement("td")
            descriptionCell.textContent = breed.description;
            row.appendChild(descriptionCell);
            
            const typeCell = document.createElement("td")
            typeCell.textContent = breed.dogType;
            row.appendChild(typeCell);
            
            tableBody.appendChild(row);

            // Click event listener
            row.addEventListener("click", () => {
                row.style.color = "blue";
            });
        });

        // Calling function
        resetForm();
        commentForm();
    })
    .catch(error => {
        console.error('Error fetching information:', error);
        alert('Failed to fetch information. Please try again later.');
    });
}



function resetForm ()  {
    const resetButton = document.getElementById("reset-button");
    console.log(resetButton);
    //click listener 
    resetButton.addEventListener("click", () => { 
        rows = document.querySelectorAll("tr")
        rows.forEach(row => row.style.color = "")
    });
}


function commentForm(){
    
    const commentList = document.getElementById("comment-list")
    
    const textForm = document.getElementById("text")
    console.log(textForm)
    //key event listener 
    textForm.addEventListener("keydown", (e) => {
        console.log(e)
        if(e.key === "Enter"){
            e.preventDefault()
            alert("Your message has been recieved!")
            console.log(commentList)
            const li = document.createElement("li")
            li.textContent = textForm.value
            commentList.appendChild(li)
            textForm.value = ""
        }

    
    })
    
}

          

