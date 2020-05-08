// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

let headContainer = document.querySelector(".header-container");

function Header(date, temp, h1) {
    
    // Creating components
    let divHeader = document.createElement("div");
    let spanDate = document.createElement("span");
    let ltH1 = document.createElement("h1");
    let tempSpan = document.createElement("span");
    
    // Adding Classes
    divHeader.classList.add("header");
    spanDate.classList.add("date");
    tempSpan.classList.add("temp");

    // Assigning text context based off arguments
    tempSpan.textContent = temp;
    spanDate.textContent = date;
    ltH1.textContent= h1;
    
    

    // Appending the children
    divHeader.appendChild(spanDate);
    divHeader.appendChild(ltH1);
    divHeader.appendChild(tempSpan);
    headContainer.appendChild(divHeader);

}

Header("SMARCH 28, 2019", "98°", "Lambda Times");