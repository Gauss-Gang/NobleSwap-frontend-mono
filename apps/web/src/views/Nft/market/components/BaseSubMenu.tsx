import { SubMenuItems } from '@pancakeswap/uikit'
import styled from 'styled-components'

const BaseSubMenu = styled(SubMenuItems)`
  background-color: transparent;
  border-bottom: 1px ${({ theme }) => theme.colors.nobleLightBlue} solid;
`

export default BaseSubMenu
