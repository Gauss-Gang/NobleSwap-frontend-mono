import styled from 'styled-components'
import { Card } from '@pancakeswap/uikit'

export const BodyWrapper = styled(Card)<{ maxWidth?: number }>`
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : '436px')};
  width: 100%;
  z-index: 1;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children, maxWidth }: { children: React.ReactNode; maxWidth?: number }) {
  return <BodyWrapper maxWidth={maxWidth}>{children}</BodyWrapper>
}
