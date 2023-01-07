import { useCallback } from 'react'
import styled from 'styled-components'
import { ListViewIcon, CardViewIcon, IconButton } from '@pancakeswap/uikit'
import { ViewMode } from 'state/user'

interface ToggleViewProps {
  idPrefix: string
  viewMode: ViewMode
  onToggle: (mode: ViewMode) => void
}

const StyledIconButton = styled(IconButton)`
  background: ${({ theme, isActive }) => isActive && theme.colors.noblePurple};
`

const Container = styled.div`
  margin-left: -8px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 0;
  }
`

const ToggleView: React.FunctionComponent<React.PropsWithChildren<ToggleViewProps>> = ({
  idPrefix,
  viewMode,
  onToggle,
}) => {
  const handleToggleCard = useCallback(() => {
    if (viewMode !== ViewMode.CARD) {
      onToggle(ViewMode.CARD)
    }
  }, [onToggle, viewMode])

  const handleToggleTable = useCallback(() => {
    if (viewMode !== ViewMode.TABLE) {
      onToggle(ViewMode.TABLE)
    }
  }, [onToggle, viewMode])

  return (
    <Container>
      <StyledIconButton
        isActive={viewMode === ViewMode.CARD}
        variant="text"
        scale="sm"
        id={`${idPrefix}CardView`}
        onClick={handleToggleCard}
      >
        <CardViewIcon color={viewMode === ViewMode.CARD ? 'secondary' : 'textDisabled'} />
      </StyledIconButton>
      <StyledIconButton
        isActive={viewMode === ViewMode.TABLE}
        variant="text"
        scale="sm"
        id={`${idPrefix}TableView`}
        onClick={handleToggleTable}
      >
        <ListViewIcon color={viewMode === ViewMode.TABLE ? 'secondary' : 'textDisabled'} />
      </StyledIconButton>

      {/* <IconButton variant="text" scale="sm" id={`${idPrefix}CardView`} onClick={handleToggleCard}>
        <CardViewIcon color={viewMode === ViewMode.CARD ? 'primary' : 'textDisabled'} />
      </IconButton>
      <IconButton variant="text" scale="sm" id={`${idPrefix}TableView`} onClick={handleToggleTable}>
        <ListViewIcon color={viewMode === ViewMode.TABLE ? 'primary' : 'textDisabled'} />
      </IconButton> */}
    </Container>
  )
}

export default ToggleView
