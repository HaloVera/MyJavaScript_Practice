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
        //console.log(output);
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            
            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Something goes wrong');
            }
        }, 2000);
    });  
}

//createPost({title: 'Post Three', body: 'This is post 3 body'})
//    .then(getPosts)
//    .catch(error => console.log(error));

// Async Await
async function init() {
    await createPost({title: 'Post Three', body: 'This is post 3 body'});

    getPosts();
}

init();

// promise.all
/*const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye');
});


Promise.all([promise1,promise2,promise3]).then((values)=> {console.log(values)});*/