import { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import './Post.css'

function UseEffectEx2() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

                setPosts(response.data.slice(0, 10));

            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        }
        fetchPosts();
    },[]);

    return (
        <>
            <h1>Top Posts</h1>
            <div className="posts">
                {posts.map((post) => (
                    <div className="post">
                        <Post body={post.body} title={post.title}
                    /></div>

                ))}
            </div>
        </>
    )

}


export default UseEffectEx2;