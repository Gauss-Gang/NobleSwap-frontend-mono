import styled from 'styled-components'

const StyledBannerImageWrapper = styled.div`
  background: ${({ theme }) => theme.colors.nobleDarkBlue};
  flex: none;
  position: relative;
  width: 100%;
  border-radius: 20px 0;
  height: 123px;
  overflow: hidden;

  ${({ theme }) => theme.mediaQueries.sm} {
    height: 192px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    height: 256px;
  }
`

export default StyledBannerImageWrapper
