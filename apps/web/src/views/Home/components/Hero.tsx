import { useTranslation } from '@pancakeswap/localization'
import { Button, Flex, NextLinkFromReactRouter } from '@pancakeswap/uikit'
import ConnectWalletButton from 'components/ConnectWalletButton'
import SkewedBox from 'components/SkewedBox'
import Image from 'next/legacy/image'
import styled from 'styled-components'
import { useAccount } from 'wagmi'
import FloatingCoints from '../../../../public/images/home/floating_coins.png'

const FloatingCoinsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: center;
`

const Hero = () => {
  const { t } = useTranslation()
  const { address: account } = useAccount()

  return (
    <>
      <style jsx global>
        {`
          .slide-svg-dark {
            display: none;
          }
          .slide-svg-light {
            display: block;
          }
          [data-theme='dark'] .slide-svg-dark {
            display: block;
          }
          [data-theme='dark'] .slide-svg-light {
            display: none;
          }
        `}
      </style>
      <Flex>
        <Flex flex="1" flexDirection="column">
          <SkewedBox minHeight="185px">
            <Flex flex="1" justifyContent="end" alignItems="flex-end" minHeight="140px">
              <FloatingCoinsWrapper>
                <Image src={FloatingCoints} />
              </FloatingCoinsWrapper>
              {!account ? (
                <ConnectWalletButton variant="gradientRedGrape" mr="8px" />
              ) : (
                <NextLinkFromReactRouter to="/swap">
                  <Button variant={!account ? 'secondary' : 'primary'}>{t('Trade Now')}</Button>
                </NextLinkFromReactRouter>
              )}
            </Flex>
          </SkewedBox>
        </Flex>
      </Flex>
    </>
  )
}

export default Hero
