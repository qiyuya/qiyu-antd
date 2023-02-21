import React from 'react'
import Button from './components/Button/button'
import Alert from './components/Alert/alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuitem'
import SubMenu from './components/Menu/subMenu'

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          <Alert closable onClose={(e) => alert(e)}></Alert>
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
            onSelect={(index) => {
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
      </header>
    </div>
  )
}

export default App
