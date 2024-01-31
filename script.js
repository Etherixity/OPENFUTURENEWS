// Assuming you have a form with id "blog-form", input with id "password-input" and textarea with id "blog-text"
document.getElementById('blog-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var password = document.getElementById('password-input').value;
  if (password === 'qwerty') {
    var post = document.getElementById('blog-text').value;
    document.getElementById('news-content').innerText = post;
  } else {
    alert('Incorrect password');
  }
});
