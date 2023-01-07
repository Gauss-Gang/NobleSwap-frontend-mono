import { Box } from '@pancakeswap/uikit'
import styled from 'styled-components'

export const StyledPriceChart = styled(Box)<{
  $isDark: boolean
  $isExpanded: boolean
  $isFullWidthContainer?: boolean
}>`
  border: none;
  border-radius: 20px 0;
  width: 100%;
  padding-top: 36px;
  background: ${({ theme }) => theme.colors.nobleDarkBlue};
  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 8px;
    border: ${({ theme }) => `1px solid ${theme.colors.nobleLightBlue}`};
    width: ${({ $isExpanded, $isFullWidthContainer }) => ($isFullWidthContainer || $isExpanded ? '100%' : '50%')};
    height: ${({ $isExpanded }) => ($isExpanded ? '100%' : '516px')};
  }
`

StyledPriceChart.defaultProps = {
  height: '70%',
}
