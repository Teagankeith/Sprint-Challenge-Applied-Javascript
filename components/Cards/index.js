// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

let cardContainer = document.querySelector('.cards-container');

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        let articleObject = response.data.articles;  
        console.log(articleObject);
             for (topic in articleObject) {
                 articleObject[topic].forEach(item =>
                    {
                    cardContainer.appendChild(cardMaker(item));
                    });
             }


    })
    .catch(err => {
        console.log(err);
    });



    function cardMaker(object) {
        //Creating Components
        let cardDiv = document.createElement("div");
        let headlineDiv = document.createElement("div");
        let authorDiv = document.createElement("div");
        let imgCont = document.createElement("div");    
        let authorImg = document.createElement("img");
        let nameSpan = document.createElement("span");

        // Adding Classes
        cardDiv.classList.add("card");
        headlineDiv.classList.add("headline");
        authorDiv.classList.add("author");
        imgCont.classList.add("img-container");

        //Assigning textContent based of object
        headlineDiv.textContent = object.headline;
        authorImg.src = object.authorPhoto;
        nameSpan.textContent = object.authorName;

        //Appending Children
        cardDiv.appendChild(headlineDiv);
        imgCont.appendChild(authorImg);
        authorDiv.appendChild(imgCont);
        cardDiv.appendChild(authorDiv);
        cardDiv.appendChild(nameSpan);

        return cardDiv;

    }