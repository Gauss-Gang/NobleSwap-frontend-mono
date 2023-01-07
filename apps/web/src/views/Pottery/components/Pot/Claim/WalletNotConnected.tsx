import { Flex, NobleSwapPlaceholder, Text } from '@pancakeswap/uikit'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useTranslation } from '@pancakeswap/localization'

const WalletNotConnected: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()
  return (
    <Flex flexDirection="column" padding="16px">
      <NobleSwapPlaceholder width={80} height={80} />
      <Text m="16px 0" bold textAlign="center">
        {t('Wallet not connected')}
      </Text>
      <ConnectWalletButton variant="gradientRedGrape" />
    </Flex>
  )
}

export default WalletNotConnected
