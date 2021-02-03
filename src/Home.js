import Bloglist from './blogList';
import useFetch from './useFetch'

const Home = () => {
    const {data:blogs , isPending ,error}= useFetch('http://localhost:3001/blogs');
       
    return ( 
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <div> Wait A Sec To Load... </div>}
         {blogs && < Bloglist blogs={blogs} title="All Blogs!"/> } {/*used props*/}

        </div>

     );
}
 
export default Home;