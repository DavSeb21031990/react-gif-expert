
/*
* customHook => Tienen la misma estructura que un componente pero devuelve un objeto
* */

import {getGifs} from "../helpers/getGifs";
import {useEffect, useState} from "react";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images: images,
        isLoading
    };

}