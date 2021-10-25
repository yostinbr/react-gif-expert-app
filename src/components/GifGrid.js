import React, { Fragment, 
    //useState, useEffect 
} from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    //Sin destructuración
    //const state = useFetchGifs();

    //Con destructuración
    const { data: images, loading } = useFetchGifs( category );

    console.log(loading);

    /*const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs( category )
            //.then( imgs => setImages( imgs ))//Puede funcionar de esta forma
            .then( setImages)//Puede funcionar de esta forma tambien
    }, [ category ])
*/
    return (
        <Fragment>
            <h3>{ category }</h3>
            
            { loading && 
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            }
            

            <div className="card-grid">
            
                { 
                    //Sin destructuración
                    /*images.map(img => ( 
                        <li key={ img.id }> { img.title } </li>
                    ))*/
                    //Con destructuración
                    /*images.map( ({ id, title }) => (
                        <li key={ id }> { title }</li>
                    ))*/

                    //Usando otro componente
                    images.map( img  => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            
            </div>
        </Fragment>
    )
}
