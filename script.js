fetch('data/posts.json')
  .then(response => response.json())
  .then(data => {
    const gallery = document.getElementById('gallery');
    data.posts.forEach(post => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <a href="detail.html?id=${post.id}">
          <img src="${post.image}" alt="${post.title}">
        </a>
        <h3>${post.title}</h3>
        <p>${post.location}</p>
      `;
      gallery.appendChild(card);
    });
  });