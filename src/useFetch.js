// making of custom hook to avoid the rewriting the same hook components
import {useState,useEffect} from 'react';

const useFetch  = (url)=>{
    const [data,setData] =useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);
        // deleting the blog
    // const handleDelete = (id)=>{
    //     const newBlogs  = blogs.filter(blog =>blog.id !==id);
    //     setBlogs(newBlogs);
    //     }

    // fetching data 
    useEffect(()=>{
        const abortCont = new AbortController(); //this can be associated with fetch() to abort the fetch 
        // console.log('useEffect ran!') //it runs every render
        // console.log(blogs); //this as well but changing state may fall in infinity loop  
        //fetching the data from json server
            setTimeout(()=>{  // settime is used to view the conditional messanging (ispending)
        fetch(url,{signal:abortCont.signal})
        .then(res=>{
            if(!res.ok){
                throw Error('Hey! Could Not Fetch Data,Please Check Connection/Url');
            }
            return res.json();
        })
            .then(data=>{
                setData(data);// updating the states with the fetched json data
               
        
                setisPending(false)  ;
                setError(null)
            })
            .catch(err=>{
                if(err.name === 'AbortError')
                {
                    console.log('fetch aborted')
                }
                else{
                    setisPending(false)
                    setError(err.message) 
                     }
                
            })
            },500)
                return()=>abortCont.abort(); 


    },[url]) // outputting the lists
    // [] are used to only run the function after first render //we can use it for certain states. eg[name]
    return { data , isPending , error}

}
export default useFetch;