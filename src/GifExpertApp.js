import React,{useState} from "react";
import {AddCategory} from './Components/AddCategory';
import { GifGrid } from "./Components/GifGrid";

export const GifExpertApp = ()=>{

    // const categories = ['Futbol','Musica','Anime'];
    const [categories, setCategories] = useState(['Futbol']);


    // const handleAdd=()=>{
    //     setCategories([...categories,'kjsdhf']);
    // }
    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories}/>
            
            <hr></hr>

            <ol>
                {
                    categories.map((category,key)=>(
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}