import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2) {
            //Si quiere añadir al final se puede usar de esta manera
            //setCategories( cats => [...cats, inputValue]);
            //Si quiere añadir al inicio se puede usar de esta manera
            setCategories(cats => [ inputValue, ...cats ]);
            setInputValue('');
        }
    }

    /*const handleAdd = () => {
        //Si queremos que el valor agregado quede de último se hace de la siguiente manera
        //setcategories([ ...categories, 'Naruto' ]);
        //Si queremos que el valor agregado quede de primero se hace de la siguiente manera
        //setcategories([ 'Naruto', ...categories ]);

        //Se puede realizar de la siguiente manera tambien.
        setcategories( cats => [...categories, 'Naruto']);
    }*/
 
    return (
        //En el caso de los form no es necesario usar un fragment
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
