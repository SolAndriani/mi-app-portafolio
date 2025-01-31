




import { useState } from 'react';
import { AddCategory, GifGrid } from './Components';


export const GifExpertApp = () => {



    const [ categories, setCategories ] = useState(['Sol' ]);

  

        const onAddCategory = (newCategory)=>{

            if(categories.includes(newCategory)) return;
            
            console.log(newCategory);
            setCategories([newCategory,...categories]);
           
            
        }


  return (
    <>

    {/*titulo*/}
    <h1>GifExpertApp</h1>

    {/*input*/}

    <AddCategory

     onNewCategory={ (value) =>onAddCategory(value)}
    

    />

    
        { 
                 categories.map( (category) => (
                 <GifGrid
                 key={category}
                 category={category}/>
                ))
                
            }
      


    </>
  );
};
