import React, { useState } from 'react'
import classNames from 'classnames'

export type AlertType = 'success' | 'default' | 'danger' | 'warning'

interface AlertProps {
  className?: string
  title?: string
  description?: string
  type?: AlertType
  onClose?: React.MouseEventHandler<HTMLButtonElement>
  closable?: Boolean
}

const Alert: React.FC<AlertProps> = (props) => {
  const {
    className,
    title,
    description = '默认描述',
    type,
    onClose,
    closable,
  } = props

  const [closed, setClosed] = useState(true)

  const classes = classNames('alert', className, {
    [`alert-${type}`]: type,
  })
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (onClose) {
      onClose(e)
    }
    setClosed(false)
  }
  const closeIcon = closable ? (
    <button className="alert-close" onClick={handleClose}>
      关
    </button>
  ) : null
  return closed ? (
    <div className={classes}>
      <span className="alert-title">{title}</span>
      <span className="alert-desc">{description}</span>
      {closeIcon}
    </div>
  ) : null
}

Alert.defaultProps = {
  type: 'default',
  closable: false,
}

export default Alert
