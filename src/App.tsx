import React, { useState } from 'react'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Button from './components/Button/button'
import Alert from './components/Alert/alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuitem'
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'
import Transition from './components/Transition/transition'
import Upload, { UploadFile } from './components/Upload/upload'
library.add(fas)
function App() {
  const [show, setShow] = useState(false)
  const defaultFileList: UploadFile[] = [
    {
      uid: '123',
      size: 1234,
      name: 'hello.md',
      status: 'uploading',
      percent: 30
    },
    { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
    { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ marginTop: 20, width: 500 }}>
          {/* <Upload
            action="https://jsonplaceholder.typicode.com/posts"
            onProgress={(data, file) => {
              console.log('onP', data)
            }}
            onSuccess={(res, file) => {
              console.log('onS', res)
            }}
            onError={(err, file) => {
              console.log('onE', err)
            }}
          /> */}
          <Upload
            action="https://jsonplaceholder.typicode.com/posts"
            onChange={file => {
              console.log('file', file)
            }}
            name="fileName"
            data={{ key: 'value' }}
            headers={{ 'X-powered-By': 'qiyuya' }}
            defaultFileList={defaultFileList}
            accept=".jpg"
            multiple
            drag
            // beforeUpload={(file: File) => {
            //   // 处理boolean的可能
            //   // if (Math.round(file.size / 1024) > 50) {
            //   //   alert('file too big')
            //   //   return false
            //   // }
            //   // return true
            //   const newFile = new File([file], 'new_name.md', {
            //     type: file.type
            //   })
            //   return Promise.resolve(newFile)
            // }}
          >
            <Icon icon="upload" size="5x" theme="secondary" />
            <br />
            <p>Drag file over to upload</p>
          </Upload>
        </div>
        <div style={{ marginTop: 20, width: 400 }}>
          {/* <FontAwesomeIcon icon={faCoffee} size="6x" /> */}
          <Icon icon="coffee" theme="danger" size="lg" />
          <Icon icon="arrow-down" theme="primary" size="lg" />
        </div>

        <Button className="custom">默认按钮</Button>
        <Button disabled>禁用</Button>
        <Button size="lg" btnType="primary">
          大按钮
        </Button>
        <Button size="sm">小按钮</Button>
        <Button btnType="link" target="_blank" href="https://www.baidu.com/">
          按钮链接
        </Button>
        <Button btnType="link" href="https://www.baidu.com/" disabled>
          禁用按钮链接
        </Button>

        <div style={{ marginTop: 20, width: 400 }}>
          <Alert closable onClose={e => alert(e)}></Alert>
          <hr />
          <Alert type="success" closable description="成功"></Alert>
          <hr />
          <Alert type="danger" closable description="失败"></Alert>
          <hr />
          <Alert type="warning" description="警告"></Alert>
          <hr />
          <Alert closable title="标题" description="自定义描述"></Alert>
        </div>

        <div style={{ marginTop: 20 }}>
          <Menu
            defaultIndex="0"
            onSelect={index => {
              alert(index)
            }}
            mode="vertical"
            defaultOpenSubMenus={['3']}
          >
            <MenuItem>cllo link</MenuItem>
            <MenuItem disabled>cllo link 2</MenuItem>
            <MenuItem>cllo link 3</MenuItem>
            <SubMenu title="dropdown">
              <MenuItem>dropdown 1</MenuItem>
              <MenuItem>dropdown 2</MenuItem>
              <MenuItem>dropdown 3</MenuItem>
            </SubMenu>
          </Menu>
        </div>
        <div style={{ marginTop: 20, width: 400, height: 600 }}>
          <Icon icon="coffee" theme="success" size="10x"></Icon>

          <Button
            size="lg"
            onClick={() => {
              setShow(!show)
            }}
          >
            切换动画
          </Button>
          <Transition in={show} timeout={300} animation="zoom-in-left">
            <div>
              <p>家居</p>
              <p>甲氨基</p>
              <p>商城</p>
            </div>
          </Transition>
          <Transition wrapper in={show} timeout={3000} animation="zoom-in-top">
            <Button size="lg">答案呢</Button>
          </Transition>
        </div>
      </header>
    </div>
  )
}

export default App
