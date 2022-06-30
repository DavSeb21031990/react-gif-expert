import {getGifs} from "../helpers/getGifs";
import {useEffect, useState} from "react";
import {GifItem} from "./GifItem";
import {useFetchGifs} from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    //
    // /*
    // * useEffect(funcion, arreglo) -> Dispara un efecto secundario
    // *                             -> La funcion no debe ser asyn dado que esta devuelve una promesa
    // *                             -> [] si el segundo argumento de declara vacio se ejecuta solo al inicio
    // * */
    // const getImages = async () => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }
    //
    // useEffect(() => {
    //     getImages();
    // }, []);

    const {images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {
                //isLoading ? (<h2>Cargando</h2>) : null
                isLoading && (<h2>Cargando</h2>)
            }

            <div className="card-grid">
                {
                    // images.map((img) => (
                    //    <li key={img.id}>
                    //        <figure>
                    //            <img src={img.url} alt={img.title}/>
                    //            <figcaption>{img.title}</figcaption>
                    //        </figure>
                    //    </li>
                    // ))

                    /*
                    * {...image} -> Se reparte todas las propiedades de images
                    * */

                    images.map((image) => (
                        <GifItem key={image.id}
                            {...image}/>
                    ))
                }
            </div>
        </>
    )

}