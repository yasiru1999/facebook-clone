import React, {useEffect,useState} from "react";
import "./feed.css";
import StroryReel from "./storyReel.js";
import MessageSender from "./messangeSender.js";
import Post from "./post.js"
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      db.collection("posts")
      .orderBy("timestamp","desc")
      .onSnapshot((snapshot) => 
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
   

    return (
        <div className="feed">
            {/*story reel*/}
            <StroryReel />
            <MessageSender />


            {posts.map((post) => (
              <Post
                key={post.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}
                />
            ))}


        </div>
    )
}

export default Feed;
