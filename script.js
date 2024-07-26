let posts = [
  {
    profileimg: "img/prof1.png",
    author: "Tagesschau",
    image: "img/1.jpg",
    like: 52,
    saved: false,
    liked: true,
    description: "Ein Test Post für Alle BadUsers",
    location: "London",
    comments: [],
  },
  {
    profileimg: "img/prof2.png",
    author: "Jesse Pinkman",
    image: "img/2.jpg",
    like: 22,
    saved: true,
    liked: false,
    description: "Hallo, ich bin neu hier :D",
    location: "Kufstein",
    comments: [],
  },
  {
    profileimg: "img/prof3.png",
    author: "Heisenberg",
    image: "img/3.jpg",
    like: 19,
    saved: true,
    liked: true,
    description: "Das hier wird unsere neue Labor sein",
    location: "Austria",
    comments: [],
  },
  {
    profileimg: "img/prof4.png",
    author: "Hector Salamanca",
    image: "img/4.jpg",
    like: 46,
    saved: false,
    liked: false,
    description: "Ding Ding DIng",
    location: "Venezuela",
    comments: [],
  },
  {
    profileimg: "img/prof5.png",
    author: "News",
    image: "img/5.jpg",
    like: 15,
    saved: false,
    liked: false,
    description: "Neue Funktionen bei Instagram....",
    location: "",
    comments: [],
  },
  {
    profileimg: "img/prof6.png",
    author: "Chuck Norris",
    image: "img/6.jpg",
    like: 32,
    saved: false,
    liked: false,
    description: "Woas...",
    location: "Mexico",
    comments: [],
  },
];

let friends = [
  {
    image: "img/prof1.png",
    name: "Hector",
  },
  {
    image: "img/prof2.png",
    name: "Jessi",
  },
  {
    image: "img/prof3.png",
    name: "Heisenberg",
  },
  {
    image: "img/prof4.png",
    name: "Walter",
  },
  {
    image: "img/prof5.png",
    name: "Salamanka",
  },
  {
    image: "img/prof6.png",
    name: "Gus",
  },
  {
    image: "img/prof3.png",
    name: "skyla",
  },
  {
    image: "img/prof2.png",
    name: "Soll",
  },
];

load()

function renderFriends() {
  document.getElementById("frends").innerHTML = "";

  for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];

    document.getElementById("frends").innerHTML += /*html*/ `
      <div class="friend" onclick="friendClicked('${friend.name}')">
        <div class="friend-img-container">
          <img class="friend-img" src="${friend.image}" alt="Friend Image">
        </div>
        <div class="friend-name">${friend.name}</div>
      </div>
    `;
  }
}

function friendClicked(name) {
  alert(`Friend ${name} ist ausgewelt!`);
}

function save() {
  let postsAsText = JSON.stringify(posts);
  localStorage.setItem('posts', postsAsText);
}

function load() {
  let postsAsText = localStorage.getItem('posts');

  if (postsAsText) {
    posts = JSON.parse(postsAsText);
  }
}

function render() {
  document.getElementById("postcontainer").innerHTML = "";

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    document.getElementById("postcontainer").innerHTML += /*html*/ `
      <div class="post">
        <div class="author-info">
          <img class="friend-img" src="${post.profileimg}" alt="Profile Image">
          <div>
            <div class="author">${post.author}</div>
            <div class="location">${post.location}</div>
          </div>
        </div>
        <img class="post-img" src="${post.image}" alt="Post Image">
        <div class="lcss">
          <div>
            <img src="${post.liked ? 'img/redlike.png' : 'img/nolike.png'}" class="like-icon" onclick="toggleLike(this, ${i})">
            <img src="img/coment.png">
            <img src="img/send.png">
          </div>
          <div>
            <img src="${post.saved ? 'img/save-instagram-black.png' : 'img/save-instagram.png'}" class="save-icon" onclick="toggleSave(this, ${i})">
          </div>
        </div>
        <div class="like">
          <p id="likes${i}">Gefällt ${post.like} Mal</p>
        </div>
        <div class="description">${post.description}</div>
        <div class="description">
          ${post.comments.map(comment => `<div class="comment">${comment}</div>`).join('')}
        </div>
        <div class="commentplace">
          <div style="width: 100%;">
            <textarea id="textarea${i}" placeholder="Dein Kommentar hier..." class="comments"></textarea>
          </div>
          <div>
            <button onclick="newComments(${i})" id="button${i}" class="comment-button">Posten</button>
          </div>
        </div>

      </div>
    `;
  }
}

function toggleLike(element, postIndex) {
  const likedSrc = "img/redlike.png";  // Path to the red like icon
  const unlikedSrc = "img/nolike.png"; // Path to the original like icon

  if (posts[postIndex].liked) {
    element.src = unlikedSrc;
    posts[postIndex].like -= 1;
  } else {
    element.src = likedSrc;
    posts[postIndex].like += 1;
  }

  posts[postIndex].liked = !posts[postIndex].liked;
  document.getElementById(`likes${postIndex}`).textContent = `Gefällt ${posts[postIndex].like} Mal`;
}

function toggleSave(element, postIndex) {
  posts[postIndex].saved = !posts[postIndex].saved;
  const savedSrc = 'img/save-instagram-black.png'; // Path to the saved icon
  const unsavedSrc = 'img/save-instagram.png'; // Path to the original save icon

  element.src = posts[postIndex].saved ? savedSrc : unsavedSrc;
}

function newComments(postIndex) {
  let comment = document.getElementById(`textarea${postIndex}`);
  if (comment.value.trim() === '') {
    alert("Bitte füll den Feld aus!");
    return;
  }
  posts[postIndex].comments.push(comment.value);
  comment.value = '';
  render();
  save();
}