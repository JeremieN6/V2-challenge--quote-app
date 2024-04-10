var sentense = document.getElementById("sentense");
var contentAuthor = document.getElementById("contentAuthor");
var tag = document.getElementById("category");
var contentTag = document.getElementById("contentCategory");

fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {

    var randomAuthor = `${data.author}`;
    var randomContent = `${data.content}`;
    contentAuthor.textContent = randomAuthor;
    sentense.textContent = `"${randomContent}"`;

    var randomTags = data.tags;

    contentTag.innerHTML = "";

    if (randomTags && randomTags.length > 0) {
      randomTags.forEach(function(tag) {
        var newSpan = document.createElement("span");
        newSpan.textContent = tag;
        newSpan.classList.add("category");
        contentTag.appendChild(newSpan);
      });
    }

  })
  .catch(error => {
    console.log(error)
  })
  

  function refresh(){

  }

  var refreshButton = document.getElementById("refreshButton");
  // Add an event tool detector to detect the clic on the button
  refreshButton.addEventListener("click", function() {
    // Reload the page
    location.reload();
  });

  // Sélectionnez le bouton de copie par son ID
  var copyButton = document.getElementById("copyButton");

  // Add an event handler to detect button clicks
  copyButton.addEventListener("click", function() {
      // Retrieve the ID of the target element to be copied
      var targetId = copyButton.getAttribute("data-copy-target");

      // Select the target element to copy by its ID
      var targetElement = document.getElementById(targetId);

      // Check if the target element exists
      if (targetElement) {
          // Create a temporary text box
          var tempTextArea = document.createElement("textarea");
          
          // Use the contents of the target element as the value of the temporary text box
          tempTextArea.value = targetElement.textContent || targetElement.innerText; // Use innerText if textContent is empty

          // Add the temporary text box to the page to be able to execute the copy command
          document.body.appendChild(tempTextArea);

          // Select the text in the temporary text box
          tempTextArea.select();

          // Run the copy command
          document.execCommand("copy");

          // Delete the temporary text zone from the page
          document.body.removeChild(tempTextArea);

          // Optional: Display a message to indicate that the copy has been made
          swal({
            title: "Copied! ✅",
            text: "Quote successfully copied to clipboard. 🫡",
            type: "success",
            timer: 2500,
            buttons: false
            });
          // swal("Good job!", "Quote copied to clipboard. 🫡", "success");
      } else {
          // Display an error message if the target element does not exist
          console.error(" Target element with specific ID hasn't been find !");
      }
  });
