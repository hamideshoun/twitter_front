import {
  _getUsers,
  _getTweets,
  _saveLikeToggle,
  _saveTweet,
} from './_DATA.js'

export let getInitialData = async () => {
  let promise = new Promise((resolve, reject)=>{
    Promise.all([
      _getUsers(),
      _getTweets(),
    ]).then(([users, tweets]) => {
      console.log("users:", users, "tweets:", tweets);
      resolve({users, tweets})  
    }).catch(err => {
      reject(err);
    })
  })
  return await promise;
}

export function saveLikeToggle (info) {
  return _saveLikeToggle(info)
}

export function saveTweet (info) {
  return _saveTweet(info)
}