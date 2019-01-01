const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

/*
function createPost(post) {
    setTimeout(() => {
        posts.push(post);
    }, 2000);
};

getPosts();
createPost({ title: 'Post Three', body: 'This is post three'});

*/


/**
 * Expected output
 * Post One
 * Post Two
 * Post Three
 * 
 * reason createpost took longer to create posts and that time of span getPosts printed i.e
 * our server return in 1 sec & create post taking 2 sec for that i.e dom is already painted
 * this is where asynchronous programming come in mind
 * We solve using callback 
 */

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
};

createPost({ title: 'Post Three', body: 'This is post three'}, getPosts);


// i.e. had to wait to create the post beofre it actually called the callback so it had
// to push on to it and then call a callback and this whole thing took 2 secs but add the
// extra post okay  i.e good example how callback works and why you would use