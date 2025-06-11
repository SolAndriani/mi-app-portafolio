import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState([ 'One Punch' ]);
    
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }
    
    

    const onClearCategories =  () => {
        setCategories([]);
    };



    return (
        <>

            <h1>Buscador de GIFs  </h1>

    
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            

            <button onClick={onClearCategories}>
                Borrar 
            </button>



            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ))
            }




        </>
    )
}