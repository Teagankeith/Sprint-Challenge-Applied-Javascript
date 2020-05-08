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
    let divHeader = document.createElement("div");
    divHeader.classList.add("header");

    let spanDate = document.createElement("span");
    spanDate.classList.add("date");
    spanDate.textContent = date;

    let ltH1 = document.createElement("h1");
    ltH1.textContent= h1;


    let tempSpan = document.createElement("span");
    tempSpan.classList.add("temp");
    tempSpan.textContent = temp;


    divHeader.appendChild(spanDate);
    divHeader.appendChild(ltH1);
    divHeader.appendChild(tempSpan);

    headContainer.appendChild(divHeader);
    return headContainer;
}

Header("SMARCH 28, 2019", "98°", "Lambda Times");