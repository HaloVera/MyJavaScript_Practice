// 2022/3/16
// HaloVera

const posts = [
    {title: 'Post One', body: 'This is post 1 body'},
    {title: 'Post Two', body: 'This is post 2 body'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        console.log(output);
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
       posts.push(post);
       callback();
       console.log(posts); 
    }, 2000);
}


createPost({title: 'Post Three', body: 'This is post 3 body'}, getPosts);