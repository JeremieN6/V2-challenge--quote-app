function randomQuote(){
    var sentense = document.getElementById("sentense");
    var contentAuthor = document.getElementById("contentAuthor");
}

var randomTags = document.getElementById("category");

fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    console.log(`${data.content} —${data.author}`)

    for(var i=0; i<`${data.tags}`.length; i++){
        console.log(i);
    }

    var randomAuthor = `${data.author}`;
    var randomContent = `${data.content}`;
    contentAuthor.textContent = randomAuthor;
    sentense.textContent = randomContent;
  })
  .catch(error => {
    console.log(error)
  })