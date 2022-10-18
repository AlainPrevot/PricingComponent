import React from 'react'
import { Card } from './Card'
import '../Sass/App.sass'

export const App = () => {
  return (
    <div className='Prueba' style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
      <Card title={'Basic'} value={19.99} storage={500} memory={3} users={2}/>
      <Card title={'Professional'} value={24.99} storage={1} memory={10} users={5}/>
      <Card title={'Master'} value={39.99} storage={2} memory={20} users={10}/>
    </div>
  )
}
