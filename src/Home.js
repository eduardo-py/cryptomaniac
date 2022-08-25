//import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
   
    //if we put data: blogs we can call the variable as data or as blogs
   const { error, isPending, data: blogs} = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {/* If there's an error show this message (stateless component with the message) */}
            {error && <div>{error}</div>}
            {/*Showing loading message before fetching data from server*/}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} />}
        </div>
    );
}

export default Home;