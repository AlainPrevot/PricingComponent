import React from 'react'
import { Card } from './Card'

export const App = () => {
  return (
    <div style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
      <Card title={'Professional'} value={24.99} storage={1} memory={10} users={5}/>
      {/* <Card title={'Professional'} value={24.99} storage={1} memory={10} users={5}/> */}
      {/* <Card title={'Professional'} value={24.99} storage={1} memory={10} users={5}/> */}
    </div>
  )
}
