import React from 'react';
import { useParams , useHistory } from 'react-router-dom';
import useFetch from './useFetch'

// using a hook to get route parameters into url's


const BlogDetails = () => {
    
    const history = useHistory()
    const { id } = useParams();
    //routing parameters
    const {data:blog ,error,isPending}= useFetch('http://localhost:3001/blogs/' + id);
  
    //deleting the blog
    const handleDel =()=>{
        fetch('http://localhost:3001/blogs/' +blog.id, {
            method:'DELETE'
        }).then(()=>{
            history.push('/') //redirectiong to the homepage
        })
    }

  

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>  }
            {error &&  <div>{error}</div> }
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>
                    <p>Genre: {blog.genre}</p>
                    <div class='frame'>
                        <img  id='newImage'src={blog.image} alt={blog.image} /> 
                    </div>
                    <div> {blog.body} </div>
                    <button onClick={handleDel} >Delete Blog</button>
                </article>
             )}
        </div>
     
    );
}

export default BlogDetails;
