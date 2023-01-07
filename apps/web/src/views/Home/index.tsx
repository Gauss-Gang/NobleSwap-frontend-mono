import { useTranslation } from '@pancakeswap/localization'
import { ChainId } from '@pancakeswap/sdk'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import PageSection from 'components/PageSection'
import { useActiveChainId } from 'hooks/useActiveChainId'
import styled from 'styled-components'
import { useAccount } from 'wagmi'
import Hero from './components/Hero'
import UserBanner from './components/UserBanner'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }

  background: transparent;
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC<React.PropsWithChildren> = () => {
  const { address: account } = useAccount()
  const { chainId } = useActiveChainId()

  const { t } = useTranslation()

  return (
    <>
      <PageMeta />
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        containerProps={{
          id: 'home-1',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        {account && chainId === ChainId.BSC && (
          <UserBannerWrapper>
            <UserBanner />
          </UserBannerWrapper>
        )}
        <Hero />
      </StyledHeroSection>
    </>
  )
}

export default Home
