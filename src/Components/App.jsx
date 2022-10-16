import React from 'react'
import { Card } from './Card'
import '../Sass/App.sass'

export const App = () => {
  return (
    <div className='Prueba' style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
      <Card title={'Professional'} value={24.99} storage={1} memory={10} users={5}/>
      <Card title={'Professional'} value={24.99} storage={1} memory={10} users={5}/>
      <Card title={'Professional'} value={24.99} storage={1} memory={10} users={5}/>
    </div>
  )
}
