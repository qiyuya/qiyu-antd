import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { withInfo } from '@storybook/addon-info'
import Button from './button'

// const styles: React.CSSProperties = {
//   textAlign: 'center',
// }

// const CenterDecorator =   (storyFn: any) => <div style={styles}>{storyFn()}</div>

const defaultButton = () => (
  <Button onClick={action('clicked')}>default button</Button>
)

const buttonWithSize = () => (
  <>
    <Button size="lg">large button</Button>
    <Button size="sm">small button</Button>
  </>
)
const buttonWithType = () => (
  <div>
    <Button btnType="danger">danger button</Button>
    <Button btnType="primary">primary button</Button>
    <Button btnType="link" target="_blank" href="https://www.baidu.com/">
      link button
    </Button>
  </div>
)

storiesOf('Button Component', module)
  // .addDecorator(CenterDecorator) // 可以加载共用的style样式
  // .addDecorator(withInfo) // 单独引用
  // .addParameters({ // 给全部的add添加共同的属性
  //   info: {
  //     inline: true,
  //   },
  // })
  .add('默认 Button', defaultButton)
  .add(
    '不同尺寸的 Button',
    buttonWithSize
    // { // 单独给一项添加配置
    //   info: {
    //     inline: false,
    //   },
    // }
  )
  .add('不同类型的 Button', buttonWithType)
