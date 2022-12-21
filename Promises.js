const posts = [
 {title:'Post One', body:'This is post one', createdAt: new Date().getTime()},
 {title:'Post Two', body:'This is post two', createdAt: new Date().getTime()}
];

function getPosts(){
 setTimeout(() => {
  let output = '';
  posts.forEach((post,index) => {
   output += `<li>${post.title}</li>`;
  });
  document.body.innerHTML = output;
 },1000);
}

function createPost(post){
 return new Promise((resolve,reject) => {
  setTimeout(() => {
   posts.push(post);

   //const error = false;
   const error = true;

   if(!error){
    resolve();
   }
   else
   {
    reject('Error:Something went wrong')
   }
  },2000);
 });
}

createPost({title : 'Post Three' , body : 'This is post three'})
.then(getPosts)
.catch(err => console.log(err));

function deletePost(){
 return new Promise ((resolve, reject) => {
  setTimeout(() => {
   if(posts.length>0){
    resolve(posts.pop());
   }
   else{
    reject('Array is empty now');
   }
  },1000);
 });
}
