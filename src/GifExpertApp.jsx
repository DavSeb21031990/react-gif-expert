import {useState} from "react";
import {AddCategory, GifGrid} from "./components/index";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto']);

    const onAddCategory = (newCategory) => {
        //include() -> Busca si el texto ya existe en la listas
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>

            {/*Titulo*/}
            <h1>GifExpertApp</h1>

            {/*Input*/}
            <AddCategory onNewCategory={(event) => onAddCategory(event)}/>

            {/*Listado de Gif*/}

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

        </>
    );

}