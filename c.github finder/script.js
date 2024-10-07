document.getElementById('search-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const url = `https://api.github.com/users/${username}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            return response.json();
        })
        .then(data => {
            const results = `
                <h2>${data.login}</h2>
                <img src="${data.avatar_url}" alt="${data.login}" width="100"/>
                <p>Followers: ${data.followers}</p>
                <p>Following: ${data.following}</p>
                <p>Public Repos: ${data.public_repos}</p>
                <a href="${data.html_url}" target="_blank">View Profile</a>
            `;
            document.getElementById('results').innerHTML = results;
        })
        .catch(error => {
            document.getElementById('results').innerHTML = `<p>${error.message}</p>`;
        });
});
