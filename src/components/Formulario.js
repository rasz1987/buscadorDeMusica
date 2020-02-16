import React, {useState} from 'react';

function Formulario({consultarApiLetra}) {

    const [busqueda, setBusqueda] = useState({
        artista:'',
        cancion:''
    });
    
    const actualizarState = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        })
    };

    const enviarInformacion = e => {
        e.preventDefault();

        consultarApiLetra(busqueda);
    }
    

    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form 
                    onSubmit={enviarInformacion}
                    className="col card text-white bg-transparent  mb-5 pt-5 pb-2">
                        <fieldset>
                            <legend className="text-center">Buscador Letras Canciones</legend>
                            <div className="row">
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artista</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="artista" 
                                        placeholder="Nombre Artista" 
                                        onChange={actualizarState}
                                        required
                                    />
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label>Canción</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="cancion" 
                                        placeholder="Nombre Canción" 
                                        onChange={actualizarState}
                                        required
                                    />
                                </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary float-right">Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formulario
