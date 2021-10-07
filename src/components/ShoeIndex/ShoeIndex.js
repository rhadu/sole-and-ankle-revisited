import React from 'react'
import styled from 'styled-components/macro'

import { WEIGHTS, QUERIES, COLORS } from '../../constants'

import ShoeBreadcrumbs from '../ShoeBreadcrumbs'
import Select from '../Select'
import Spacer from '../Spacer'
import ShoeSidebar from '../ShoeSidebar'
import ShoeGrid from '../ShoeGrid'

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <div>
            <MobileShoeBreadcrumbs />
            <Title>Running</Title>
          </div>
          <SelectWrapper
            label='Sort'
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value='newest'>Newest Releases</option>
            <option value='price'>Price</option>
          </SelectWrapper>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <ShoeBreadcrumbs />
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
  
`

const LeftColumn = styled.div`
  flex-basis: 248px;
  @media ${QUERIES.tableAndDown} {
    display: none;
  }
`

const MainColumn = styled.div`
  flex: 1;
`

const MobileShoeBreadcrumbs = styled(ShoeBreadcrumbs)`
  display: none;
  @media ${QUERIES.tableAndDown} {
    display: block;
    margin-bottom: 5px;
  }
`

const SelectWrapper = styled(Select)`
  @media ${QUERIES.phoneAndDown} {
    display: none;
  }
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media ${QUERIES.tableAndDown} {
    align-items: flex-end;
  }
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.gray[900]};
  @media ${QUERIES.tableAndDown} {
    line-height: 1;
  }
`

export default ShoeIndex
