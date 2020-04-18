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

let headerCon = document.querySelector(".header-container")

function HeaderCreator(date, h1, temp) {

    let headerDiv = document.createElement("div");
    headerDiv.classList.add("header");
    
    let dateSpan = document.createElement("span");
    dateSpan.classList.add("date");
    dateSpan.textContent= date;
    
    
    let lambdaText = document.createElement("h1");
    lambdaText.textContent= h1;
    
    
    let tempSpan = document.createElement("span");
    tempSpan.classList.add("temp");
    tempSpan.textContent= temp;
    
    headerCon.appendChild(headerDiv);
    headerDiv.appendChild(dateSpan);
    headerDiv.appendChild(lambdaText);
    headerDiv.appendChild(tempSpan);
}



HeaderCreator('SMARCH 28, 2019', 'Lambda Times', '98°');


