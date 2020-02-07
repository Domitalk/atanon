// Fetch adaptor 

const API = 'https://atanon-api.herokuapp.com/'

function loadOnStartup() {
    return fetch(API + '/posts')
    .then(r => r.json())
}

function loadMorePosts(id) {
    return fetch(API + '/posts/' + id)
    .then(r => r.json())
}

function createReaction(newComment) {
    fetch(API + `/reactions`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newComment)
    })
    .then(r => r.json())
}

const Adaptor = {
    loadOnStartup: loadOnStartup,
    loadMorePosts: loadMorePosts,
    createReaction: createReaction
}