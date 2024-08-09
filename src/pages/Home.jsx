import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {

    const API_URL = "https://fakestoreapi.com/products"
    const[loading , setloading] = useState(false);
    const[posts , setPosts] = useState([])

    async function fetchProductData()  {
        setloading(true)
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setPosts(data)
        } catch (error) {
            console.log(error)
            setPosts([])
        }

        setloading(false)
    }

    useEffect(() => {
        fetchProductData();
    },[]) 


  return (
    <div>
       {
        loading ? <Spinner className='flex justify-center items-center'/> : 
        posts.length > 0 ? 
        (
            <div className='grid grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
                {posts.map((post) => (
                    <Product key={post.id} post={post}/>
                ))}
            </div>
        ) : 
        (
            <div className='w-screen h-screen flex justify-center items-center'>
                <p className="font-bold">No data found</p>
            </div>
        )
       }
    </div>
  )
}

export default Home
