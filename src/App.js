import React, {useEffect,useState,Fragment} from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Informacion from './components/Informacion';

function App() {
    // Utilizar useState con tres states diferentes
    const [artista,setArtista] = useState('');
    const [letra, setLetra]    = useState([]);
    const [info, setInfo]      = useState({});

    // Metodo para consultar la API de letras de canciones
    const consultarApiLetra = async busqueda => {
        const {artista, cancion} = busqueda;
        const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
        
        // consultar la api
        const request   = await fetch(url);
        const respuesta = await request.json();

        // Almacenar el artista que se buscó
        setArtista(artista);
        
        // actualizar estado
        setLetra(respuesta.lyrics);
    };

    // Metodo para consultar la api de informacion
    const consultarApiInfo = async () => {
        if (artista) {
            const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

            // Consultar la api
            const request   = await fetch(url);
            const respuesta = await request.json();

            setInfo(respuesta.artists[0]);    
        }
    }

    useEffect(
        () => {
            consultarApiInfo();
        }, [artista]
    )

    
    return (
        <Fragment>
            <Formulario
                consultarApiLetra={consultarApiLetra}
            />

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <Informacion 
                            info = {info}
                        />
                    </div>
                    <div className="col-md-6">
                        <Cancion 
                            letra={letra}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default App
