import {useState} from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('Naruto');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        //preventDefault() -> Evita que recargue la pantalla
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        //onAddCategory(categories => [inputValue, ...categories]);
        onNewCategory(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    );

}