import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
// reusing these navbar links
const Links =()=>{
    return(
        <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" className='blog-btn'>New Blog</Link>
    </div>
    )
}

// hamburger for the mobile menu
const Hamburger =()=>{
    const [active, setactive] = useState(false);
    return(
        <div>
          
                    <div className='hamburger' onClick={()=>setactive(!active)}>
                        {active && <div className="toggle-button__line"></div>}
                        {active && <div className="toggle-button__line"></div>}
                        {active && <div className="toggle-button__line"></div>}
                    </div> 
           {active&& <Links/>}
        </div>
        
    )
}

// making navbar responsive.
const Navbar = () => {
    const [ismobile, setIsmobile] = useState(window.matchMedia('(max-width:768px)').matches);
    useEffect(() => {
        window.addEventListener('resize',()=>{
            setIsmobile(window.matchMedia('(max-width:768px)').matches)
        })
    })


    return (
        <nav className="navbar">
            <h1>LifeHack Blogs</h1>
            {ismobile? <Hamburger/> : <Links/>}

           
        </nav>

      );
}
 
export default Navbar;