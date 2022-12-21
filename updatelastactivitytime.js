createPost(){
 return new promise(() => {
  // update lastactivitytime
 })
}

seensomeoneMessage(){
 return new promise(() => {
  // update lastactivitytime
 })
}

updateprofilephoto(){
 return new promoise(() => {
  // update lastactivitytime
 })
}

const user = {
 username: 'satish',
 lastactivitytime: '21th of Dec'
}

updatelastactivitytime = {
 return new Promise((resolve, reject) = {
  setTimeOut(()=>{
   User.lastactivitytime = new Date().getTime();
   resolve(user.lastactivitytime)
  }, 1000)
 })
} 

userupdatesapost(){
 Promise.all([createPost, updatelastactivitytime])
 .then(([createPostresolves, updatelastactivitytimeresolves]) => {
  console.log(updatelastactivitytimeresolves)
 })
 .catch(err => console.log(err))
}
