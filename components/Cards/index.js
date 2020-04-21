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


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then( response => {
        let articleObj = response.data.articles;  
        console.log(articleObj);
             let cardContainer = document.querySelector('.cards-container');
             for (topic in articleObj) {
                 articleObj[topic].forEach(item =>
                    {
                    cardContainer.appendChild(cardCreator(item));
                    });
             }
             //  articleObj.map((item) => {
            //  let createCard = cardCreator(item);
            // return cardContainer.appendChild(createCard);  

            // }); 

            // let cardCreate = cardCreator(articleObj);
            // cardContainer[0].appendChild(cardCreate);


        
    })
    .catch( err => {
        console.log('Error Happened', err);
    });


function cardCreator(object) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    
    let headlineDiv = document.createElement("div");
    headlineDiv.classList.add("healine");
    headlineDiv.textContent = `${object.headline}`;
    cardDiv.appendChild(headlineDiv);
    //author
    let authorDiv = document.createElement("div");
    authorDiv.classList.add('author');
    

    let imgcDiv = document.createElement("div"); 
    imgcDiv.classList.add("img-container");


    let imgEl = document.createElement("img");
    imgEl.src = `${object.authorPhoto}`;
    imgcDiv.appendChild(imgEl);
    authorDiv.appendChild(imgcDiv);
    cardDiv.appendChild(authorDiv);


    let authorSpan = document.createElement("span");
    authorSpan.textContent = `By: ${object.authorName}`;
    cardDiv.appendChild(authorSpan);

    return cardDiv;

}
