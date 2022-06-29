import React from 'react'
import './CardUbicaciones.css'

const CardUbicaciones = (props) => {
    const {name, type, dimension} = props;
  return (
    <div className="card mb-3" style={{width: "18rem"}}>
        <div className="card-body">
            <h5 className="card-title">Nombre: {name}</h5>
            <p className="card-text mb-1">Tipo: {type}</p>
            <p className="card-text mb-1">Dimension: {dimension}</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
    </div>
  )
}

export default CardUbicaciones