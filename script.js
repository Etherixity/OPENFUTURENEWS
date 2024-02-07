fetch('post.txt')
  .then(response => response.text())
  .then(data => {
    document.getElementById('post-content').innerText = data;
  });


const updatePostContent = () => {
  fetch('post.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById('post-content').innerText = data;
    });
};

setInterval(updatePostContent, 5000);

