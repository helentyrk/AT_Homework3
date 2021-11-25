import { createStore } from "vuex";

export default createStore({
  state: {
    
      postsList: [
        {
           "id":1,
           "img": "https://i.imgur.com/NedYPgU.png",
           "avatar": "https://i.imgur.com/C46EtWD.jpg",
           "date_time":new Date().toISOString().substr(0,16),
           "user":"Gordon",
           "text":"I think it's going to rain.",
           "likes": 0
        },
        {
           "id":2,
           "img": "https://i.imgur.com/GH0O7IB.jpg",
           "avatar": "https://i.imgur.com/UgzQ73P.png",
           "date_time":new Date().toISOString().substr(0,16),
           "user":"Lucas",
           "text":"Which weighs more, a pound of feathers or a pound of bricks?",
           "likes": 0
        },
        {
           "id":3,
           "img": "https://i.imgur.com/v2VblqK.png",
           "avatar": "https://i.imgur.com/wa3hoMs.jpg",
           "date_time":new Date().toISOString().substr(0,16),
           "user":"Robert",
           "text":"Felt cute, might delete later.",
           "likes": 0
        },
            {
           "id":4,
           "img": "https://i.imgur.com/obu1UVC.jpg",
           "avatar": "https://i.imgur.com/AAu3udk.jpg",
           "date_time":new Date().toISOString().substr(0,16),
           "user":"Alex",
           "text":"Random picture",
           "likes": 0
        },
        {
           "id":5,
           "img": "https://i.imgur.com/yFdPgDf.jpg",
           "avatar": "https://i.imgur.com/AAu3udk.jpg",
           "date_time":new Date().toISOString().substr(0,16),
           "user":"Martin",
           "text":"Join my Discord channel",
           "likes": 0
        },
        {
           "id":6,
           "img": "https://i.imgur.com/bkt4onR.jpg",
           "avatar": "https://i.imgur.com/Nz5v2o7.png",
           "date_time":new Date().toISOString().substr(0,16),
           "user":"Steve",
           "text":"How to chop a tree in Minecraft???.",
           "likes": 0
        },
            {
           "id":7,
           "img": "https://i.imgur.com/jmZ5c29.png",
           "avatar": "https://i.imgur.com/uxZ3HVv.jpg",
           "date_time":new Date().toISOString().substr(0,16),
           "user":"Gustavo",
           "text":"The finest ingredients are brought together with love and care, then slow cooked to perfection. Yes, the old ways are still best at Los Pollos Hermanos. But don't take my word for it. One taste, and you'll know.",
           "likes": 0
        },
        {
           "id":8,
           "img": "https://i.imgur.com/SoTU9rS.jpg",
           "avatar": "https://i.imgur.com/AAu3udk.jpg",
           "date_time":new Date().toISOString().substr(0,16),
           "user":"Eric",
           "text":"Happy Birthday, Mark!!!",
           "likes": 0
        },
        {
           "id":9,
           "img": "https://i.imgur.com/VEXzqbv.png",
           "avatar": "https://i.imgur.com/KXkaipL.jpg",
           "date_time":new Date().toISOString().substr(0,16),
           "user":"Sandra",
           "text":"I hate dairy products.",
           "likes": 0
        },
        {
           "id":10,
           "img": "https://i.imgur.com/HNB0NA1.jpg",
           "avatar": "https://i.imgur.com/MFK0x1X.png",
           "date_time":new Date(),
           "user":"Edgar",
           "text":"It's Wednesday my dudes.",
           "likes": 0
        }
     ]
  },
  mutations: {
     likesReset: state=>{
        state.postsList.forEach(post => {
           post.likes = 0; /* resets the number of likes to 0 */
        })
     },
     IncreaseLikes: state => {
        state.postsList.forEach(post =>{
           post.likes += 1;
        })
     },
     
     
  },
  /* getters: {
   numberOfLikes: state =>{
      var numberOfLikes=state.postsList.map(post =>{
         return{
            img: post.img,
            avatar: post.avatar,
            date_time: post.date_time,
            user: post.user,
            text: post.text,
            likes: post.likes=0
         }

      });
      return numberOfLikes
   }
  }, */
  
  actions: {
     likesResetAct: act => {
        setTimeout(function(){
           act.commit("likesReset")
        }, 1000)
     },
     IncreaseLikesAct: act => {
      setTimeout(function(){
         act.commit("IncreaseLikes")
      }, 1000)
   }
  },
  modules: {},
});
