import { additionalColors } from '@pancakeswap/ui/tokens/colors'
import CardBody from './CardBody'
import { StyledCollectibleCard } from './styles'
import { CollectibleCardProps } from './types'

const CollectibleActionCard: React.FC<React.PropsWithChildren<CollectibleCardProps>> = ({
  nft,
  nftLocation,
  currentAskPrice,
  isUserNft,
  ...props
}) => {
  return (
    <StyledCollectibleCard {...props} borderBackground="none" background={additionalColors.nobleDarkBlue}>
      <CardBody nft={nft} nftLocation={nftLocation} currentAskPrice={currentAskPrice} isUserNft={isUserNft} />
    </StyledCollectibleCard>
  )
}

export default CollectibleActionCard
