import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GifApp = () => {

    const [categories, setCategories] = useState(['Goku'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }
    return (
        <>
            {/* Title */}
            <h1>
                GifApp
            </h1>
            {/* Input */}
            <AddCategory 
                // setCategories={setCategories} 
                onNewCategory={onAddCategory}
                />
            {/* Gifs list */}
            
                { categories.map( c => (<GifGrid key={c} category={c}/>))}
                {/* Gif item */}
        </>
    )
}
