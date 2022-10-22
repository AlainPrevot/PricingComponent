import React from 'react'
import { Card } from './Card'
import '../Sass/App.sass'
import { Title } from './Title'
import { Checkbox } from './Checkbox'

export const App = () => {
  return (
      <div style={{display: 'flex', alignItems:'center',height:'76vh', justifyContent:'space-around', flexDirection:'column'}}>
        <Title title={'Our Pricing'}/>
        <Checkbox/>
        <div style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
          <Card title={'Basic'} value={19.99} storage={500} memory={3} users={2} theme={'lala'}/>
          <Card title={'Professional'} value={24.99} storage={1} memory={10} users={5} theme={"center"}/>
          <Card title={'Master'} value={39.99} storage={2} memory={20} users={10} theme={'lala'}/>
        </div>
      </div>
  )
}