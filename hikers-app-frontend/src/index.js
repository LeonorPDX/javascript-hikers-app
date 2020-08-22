
fetch("http://localhost:3000/test")
  .then(response => response.json())
  .then(parsedResponse => console.log(parsedResponse));