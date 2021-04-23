import React from 'react';
import styles from './Formulario.module.css';

const Formulario = () => {
    return ( 
        <div className={ `${styles.buscador} row` }>
            <div className="col s12 m8 offset-m2">
                <form>
                    <h2 className={ styles.heading }>Encuentra Noticias por Categoria</h2>

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
 
export default Formulario;