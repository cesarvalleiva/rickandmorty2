import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardPersonaje from '../../components/CardPersonaje/CardPersonaje'
import './Personajes.css'

const Personajes = () => {
  const [personajes, setPersonajes] = useState([])

  const obtenerPersonajes = async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character')
    setPersonajes(response.data.results)
  }

  useEffect(() => {
    obtenerPersonajes()
  }, [])
  
  return (
    <div className='container'>
      <h1>Este es nuestro proyecto de R&M</h1>
      <div className='border d-flex flex-wrap justify-content-between'>
        {
          personajes.length > 0 ?
            personajes.map(personaje => (
              <CardPersonaje key={personaje.id} {...personaje} />
            ))
          :
              <p>Cargando...</p>
        }
      </div>
    </div>
  )
}

export default Personajes