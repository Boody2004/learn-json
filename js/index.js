const container = document.querySelector(".blogs");
const serchForm = document.querySelector(".serch");

const renderPosts = async (term) => {
  // let url = "http://localhost:3000/posts?_sort=likes&_order=desc";
  let url = "http://localhost:3000/posts";

  if (term) {
    url += `?&q=${term}`;
  }

  const res = await fetch(url);
  const posts = await res.json();

  let template = "";
  posts.forEach((post) => {
    template += `
    <div class="post">
    <h2>${post.title}</h2>
    <p><small>${post.likes} Likes</small></p>
    <p>${post.body.slice(0, 200)}</p>
    <a href="/details.html?id=${post.id}">read more...</a>
    </div>
    `;
  });
  container.innerHTML = template;
};

serchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  renderPosts(serchForm.term.value.trim());
});

window.addEventListener("DOMContentLoaded", () => renderPosts());
