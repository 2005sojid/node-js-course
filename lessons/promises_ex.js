function fetchUser()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({userId: 2});
            reject({userId: -1});
        });
    });
}

function fetchPost(id)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{postId: id, content: "Hello World"}]);
            reject({postId:-1});
        })
    });
}

fetchUser()
    .then(user => fetchPost(user.userId))
    .then(post => console.log("Posts: ", post))
    .catch(error => console.error("ERRORRR"));