  // To pass the tests, don't forget to return your fetch!
  function fetchBooks() {
    return fetch('https://anapioficeandfire.com/api/books')
      .then(response => response.json())
      .then(data =>{renderBooks(data)});
  }
  function renderBooks(books){
    let main =document.querySelector("main");
    books.forEach(element => {
      let li=document.createElement("li");
      li.innerHTML=element.name;
      main.appendChild(li);
    });
  }
      