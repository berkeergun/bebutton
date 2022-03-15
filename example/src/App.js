import React from 'react'

import { Button } from 'bebutton'
// import { Button } from '@berkeergun/bebutton'

import 'bebutton/dist/index.css'
// import '@berkeergun/bebutton/dist/index.css'
import './index.css'

const App = () => {
  return (
    <div style={{display:"flex" , flexDirection:"row"}}>
      <Button text='Button Shadow Type' type='shadow' />
      <Button text='Button Inset Shadow Type' type='insetShadow' />
      <Button text='Button Text Shadow Type' type='textShadow' />
      <Button text='Button Text Border Shadow Type' type='textBorderShadow' />
      <Button text='Button Dotted Type' type='dotted' />
      <Button text='Button Double Type' type='double' />
      <Button text='Button Dashed Type' type='dashed' />
    </div>
  )
}

export default App
