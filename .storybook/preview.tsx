import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import '../src/styles/index.scss'

const styles: React.CSSProperties = {
  padding: '20px 40px',
}

const storyWrapper = (storyFn: any) => (
  <div style={styles}>
    <h3>组件演示</h3>
    {storyFn()}
  </div>
)

addDecorator(storyWrapper)
addDecorator(withInfo)
addParameters({
  info: { inline: true, header: false },
})

// const loaderFn = () => {
//   return [
//     require('../src/components/Button/button.stories.tsx'),
//     require('../src/components/Menu/menu.stories.tsx'),
//     require('../src/components/Input/input.stories.tsx'),
//   ]
// }

// // automatically import all files ending in *.stories.js
// configure(loaderFn, module)
