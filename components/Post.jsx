import React, {useEffect, useState} from 'react'

{
    post: data
}

function PostCard({post}){
    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default function Post() {
    const [posts, setPost] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode,com/posts')
        .then((response) => response.json())
        .then((json) => setPosts(json));
    }) 
        
    return(
        <div className='flex flex-col space'>
            {post.map(post => <PostCard key={post.id} post={post} />)}
        </div>
    )
}
   
