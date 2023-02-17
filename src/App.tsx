import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>按钮0</Button>
        <Button disabled>按钮1</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.large}>
          按钮2
        </Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>
          按钮3
        </Button>
        <Button
          btnType={ButtonType.Link}
          href="http://www.baidu.com"
          target="_blank"
        >
          按钮4
        </Button>

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
