let posts = [
  {
    profileimg: "img/prof1.png",
    author: "Tagesschau",
    image: "img/1.jpg",
    description: "Text 123, test test",
    location: "London",
  },
  {
    profileimg: "img/prof2.png",
    author: "Jesse Pinkman",
    image: "img/2.jpg",
    description: "Text 123, test test",
    location: "Kufstein",
  },
  {
    profileimg: "img/prof3.png",
    author: "Heisenberg",
    image: "img/3.jpg",
    description: "Text 123, test test",
    location: "Austria",
  },
  {
    profileimg: "img/prof4.png",
    author: "Hector Salamanca",
    image: "img/4.jpg",
    description: "Text 123, test test",
    location: "Venezuela",
  },
  {
    profileimg: "img/prof5.png",
    author: "News",
    image: "img/5.jpg",
    description: "Text 123, test test",
    location: "",
  },
  {
    profileimg: "img/prof6.png",
    author: "Chuck Norris",
    image: "img/6.jpg",
    description: "Text 123, test test",
    location: "Mexico",
  },
];
function show() {
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
         </div>
    `;
  }
}
