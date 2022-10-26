import React from 'react'; 
import Header from '../Header/Header.jsx';
import styles from './About.module.css';




export default function About() {
    return (
        <div className={styles.DivContainerAbout}>
            <Header />
            <div className={styles.AboutDiv}>
                <div >
                <h1>PROYECTO INDIVIDUAL DE HENRY</h1>
                <h2>Single page aplication de razas de perros</h2>
                <h3>Leandro Ariel Bustamante</h3>
                </div>
                <div >
                <p>En ésta página se plasman los conocimientos visto hasta el momento.
                    Para la creación de ésta página se utilizaron diverzas tecnologías
                    las cuales las podemos dividir en dos grandes grupos que serán el 
                    back-end y el front-end con la base de Javascript, html y css.
                </p>
                <p>
                    Dentro de las tecnologías que utilicé en éste proyecto individual son
                    Sequalice para la base de datos y Express para realizar las rutas. El back-end
                    nos permite generar un crud para poder correr nuestras páginas en un servidor local.
                    Hacemos las conecciones pertinentes con un proveedor externo llamado API y configuramos 
                    los filtros para filtrar los contenidos que luego serán mostrados en front, del cúal hablaremos
                    acontinuación.
                </p>
                <p>
                    En el front-end que es la parte visible de nuestro proyecto encontramos varias técnologias 
                    entre ellas encontramos React, Redux, React-Dom, Redux-Thunk o React-Router-DOM entre otras.
                    Ellas nos permitirán generár una single-page-aplication funcional que séa asincrónica. Con éstas técnologias
                    darémos un entorno generádo por estados que sean flexibles e interáctivos con los usuarios.
                    El UI está desarrollado con CSS puro y una báse de html, básicos, pero completamente funcionales 
                    para cualquiera que quiera crear una Raza a través de un formulario destinado y conectado con una 
                    base de datos que guardará la informacíon permanente y buscar dentro de la Single Page Aplication.
                    En el front-end también daremos la posibilidad de filtrar por raza, peso o alfabeticamente. 
                </p>
                </div>
            </div>
        </div>
    )
}

    