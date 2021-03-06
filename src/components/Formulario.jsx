import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({ guardarCategoria }) => {

    //El value es como debe de pasarse a la api, el label es como lo va a ver el usuario
    const OPCIONES = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Negocios'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sports', label: 'Deportes'},
        { value: 'technology', label: 'Tecnologia'},
    ]

    //Utilizar custom hook
    const [ categoria, SelectNoticias ] = useSelect('general', OPCIONES);

    //Al dar submit
    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }

    return ( 
        <div className={ `${styles.buscador} row` }>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={ buscarNoticias }
                >
                    <h2 className={ styles.heading }>Encuentra Noticias por Categoria</h2>
                    <SelectNoticias/>
                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={ `${styles['btn-block']} btn-large amber darken-2` } 
                            //Puedes usar simplemente '_', ya que el '-' no es valido en js y por eso va con corchetes
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}

Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}

export default Formulario;