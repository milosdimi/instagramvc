let posts = [
  {
    profileimg: "img/prof1.png",
    author: "Tagesschau",
    image: "img/1.jpg",
    description: "Text 123, test test",
    location: "London",
    comments: [],
  },
  {
    profileimg: "img/prof2.png",
    author: "Jesse Pinkman",
    image: "img/2.jpg",
    description: "Text 123, test test",
    location: "Kufstein",
    comments: [],
  },
  {
    profileimg: "img/prof3.png",
    author: "Heisenberg",
    image: "img/3.jpg",
    description: "Text 123, test test",
    location: "Austria",
    comments: [],
  },
  {
    profileimg: "img/prof4.png",
    author: "Hector Salamanca",
    image: "img/4.jpg",
    description: "Text 123, test test",
    location: "Venezuela",
    comments: [],
  },
  {
    profileimg: "img/prof5.png",
    author: "News",
    image: "img/5.jpg",
    description: "Text 123, test test",
    location: "",
    comments: [],
  },
  {
    profileimg: "img/prof6.png",
    author: "Chuck Norris",
    image: "img/6.jpg",
    description: "Text 123, test test",
    location: "Mexico",
    comments: [],
  },
];

function render() {
  document.getElementById("postcontainer").innerHTML = "";

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    document.getElementById("postcontainer").innerHTML += /*html*/ `
         <div class="post">
             <div class="author-info">
                 <img class="profile-img" src="${post["profileimg"]}" alt="Profile Image">
                 <div>
                    <div class="author">${post["author"]}</div>
                    <div class="location">${post["location"]}</div>
                 </div>
             </div>
             <img class="post-img" src="${post["image"]}" alt="Post Image">
             <div class="lcss">
              <div>
                <img src="img/nolike.png">
                <img src="img/coment.png">
                <img src="img/send.png">
              </div>
              <div>
                <img src="img/save-instagram.png">
              </div>
             </div>
             <div class="description">${post["description"]}</div>
             <div class="comments-section">
                ${post.comments.map(comment => `<div class="comment">${comment}</div>`).join('')}
             </div>
             <div style="display:flex;">
               <div style="width: 100%;"><textarea id="textarea${i}" placeholder="Dein Kommentar hier..." class="comments"></textarea></div> 
               <div><button onclick="newComments(${i})" id="button${i}" class="comment-button">Posten</button></div>
              </div>
         </div>
    `;
  }
}

function newComments(i) {
  let comment = document.getElementById(`textarea${i}`);
  if (comment.value.trim() === '') {
    alert("Bitte füll den Feld aus!")
    return;
  }
  posts[i].comments.push(comment.value);

  comment.value = '';

  render();
}

