import { useState } from "react";
import { useHistory } from 'react-router-dom'
const CreateBlog = () => {
    const[title ,setitle] = useState('');
    const [body, setbody] = useState('');
    const [author, setauthor] = useState('');
    const [genre, setgenre] = useState('');
    const [image,setImage] =useState('');
    const [ispending,setispending] = useState(false);

    const history = useHistory();

    //getting image 
    const handleImageAsFile = (e) => {
        e.preventDefault()
        const image = e.target.value
        console.log('image',image)
        setImage(image)
        
    }
    //submit function   
    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = {title,genre, body , author, image }
        setispending(true)
        //adding blog to the json server
        fetch('http://localhost:3001/blogs',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(blog),
        }).then(()=>{
            setispending(false)
            history.push('/')  //this will redirect to the homepage
        })
    }
    return ( 
        <div className='create' >
            <h2>Create Your Own Blog!</h2>

            <form onSubmit={handleSubmit}>
                {/* Give Title */}
                <label >Blog Title:  </label>
                <input  
                    type='text'
                    required
                    value= {title}
                    onChange={(e)=>setitle(e.target.value)} />


                {/* Blog Genre */}
                <label >Blog Genre:  </label>
                <input  
                    type='text'
                    required
                    value= {genre}
                    onChange={(e)=>setgenre(e.target.value)} />

                {/* Body */}
                <label > Type Blog: </label>
                <textarea
                 required
                 value = {body}
                 onChange={(e)=>setbody(e.target.value)} >    
                </textarea>

                {/* Choose Author */}
                <label > Blog Author </label>
                <select 
                    value={author}
                    onChange={(e)=>setauthor(e.target.value)}>
                    <option value="">Choose Author</option>
                    <option value="Radhi">Radhi</option>
                    <option value="Omita">Omita</option>
                    <option value="Namrata">Namrata</option>
                    <option value="Omkar">Omkar</option>
                </select>

                {/* Upload Image */}
                <label >Blog Image  </label>
                <input  
                    type='file'
                    required
                    value= {image}
                    id='newImage'
                    onChange={handleImageAsFile}
                     />

                {!ispending && <button>Create Now</button>}
                {ispending && <button disabled>Creating...</button>}

            </form>

        </div>
     );
}
 
export default CreateBlog;