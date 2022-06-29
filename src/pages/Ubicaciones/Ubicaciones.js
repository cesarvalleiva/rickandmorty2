import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardUbicaciones from '../../components/CardUbicaciones'
import './Ubicaciones.css'

const Ubicaciones = () => {
    const [ubicaciones, setUbicaciones] = useState([])

    const obtenerUbicaciones = async () => {
      const response = await axios.get('https://rickandmortyapi.com/api/location')
      setUbicaciones(response.data.results)
    }
  
    useEffect(() => {
        obtenerUbicaciones()
    }, [])
    
    return (
      <div className='container'>
        <h2>Ubicaciones</h2>
        <div className='d-flex flex-wrap justify-content-between'>
          {
            ubicaciones.map(ubicacion => (
              <CardUbicaciones key={ubicacion.id} {...ubicacion} />
            ))
          }
        </div>
      </div>
    )
}

export default Ubicaciones