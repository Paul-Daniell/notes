const getAuthor = async function () {
  const response = await fetch("https://randomuser.me/api/?results=10");
  const data = await response.json();
  console.log(response);

  return data.results;
};

const getHumanName = function (userData) {
  const nameJSON = userData.name;
  const humanName = nameJSON.title + " " + nameJSON.first + " " + nameJSON.last;

  return humanName;
};

// Takes a user and adds it to the dom
const addAuthorToDom = function (author) {
  // create html elements
  const authorList = document.querySelector("#author-list");
  const listItem = document.createElement("li");
  const nameElement = document.createElement("h3");

  // Get name and make textnode
  const authorName = getHumanName(author);
  const textnode = document.createTextNode(authorName);

  const imgUrl = author.picture.large;
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", imgUrl);

  //   Blend it toghetter

  nameElement.appendChild(textnode);
  listItem.appendChild(imgElement);
  listItem.appendChild(nameElement);
  authorList.appendChild(listItem);
};

const showAuthor = async function () {
  const author = await getAuthor();

  //   const humanName = getHumanName(author);
  //   addAuthorToDom(author[0]);
  author.map((author) => addAuthorToDom(author));
};

showAuthor();
