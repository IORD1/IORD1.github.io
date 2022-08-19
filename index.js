window.onload = function() {
    func();
  };


function func(){

    var theme = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("App").style.backgroundColor = theme;
    document.getElementById("")

    
    fetch('https://api.quotable.io/random')
      .then(function (response) {
      // The API call was successful!
      return response.json();
  })
      .then(function (data) {
      // This is the JSON from our response
      document.getElementById("text").innerHTML = data.content;
      document.getElementById("author").innerHTML = data.author;
  }).catch(function (err) {
      // There was an error
      console.warn('Something went wrong.', err);
  });
  
  
  
    
  }