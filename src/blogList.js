import {Link } from 'react-router-dom'
const Bloglist = ({blogs,title}) => {   // instead placing  (props) we can destructure it as ({blogs,title})

    return ( 
        <div className="home">
            <h1 style={{color:" #f1356d"}}>{title}</h1>
        {blogs.map((blog)=>(
            <div className="blog-preview">
                {/* as the route is dynamic we provide path using template string */}
                <Link to = {`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p> Blog written by {blog.author}</p>
                    <p>Blog is written on {blog.genre}</p>
                    <div class='home-frame'>
                        <img  id='newImage'src={blog.image} alt={blog.image} /> 
                    </div>
                    
                </Link>
                
                
            </div>

        ))}
    </div>

     );
}
 
export default Bloglist ;