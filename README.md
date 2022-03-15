# bebutton

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/bebutton.svg)](https://www.npmjs.com/package/@berkeergun/bebutton) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save bebutton
```

## Usage

```jsx
import React from 'react'

import { Button } from 'bebutton'

import 'bebutton/dist/index.css'
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
```

## License

MIT © [berkeergun](https://github.com/berkeergun)
