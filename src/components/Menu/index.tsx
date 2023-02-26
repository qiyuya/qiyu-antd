import { FC } from 'react'
import Menu, { MenuProps } from './menu'
import SubMenu, { SbuMenuProps } from './subMenu'
import MenuItem, { MenuItemProps } from './menuitem'

export type ImenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>
  SubMenu: FC<SbuMenuProps>
}
const TransMenu = Menu as ImenuComponent
TransMenu.Item = MenuItem
TransMenu.SubMenu = SubMenu

export default TransMenu
