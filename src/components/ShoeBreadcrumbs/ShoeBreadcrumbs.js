import React from 'react'
import styled from 'styled-components/macro'

import Breadcrumbs from '../Breadcrumbs'

const ShoeBreadcrumbs = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Breadcrumbs>
        <Breadcrumbs.Crumb href='/'>Home</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb href='/sale'>Sale</Breadcrumbs.Crumb>
        <Breadcrumbs.Crumb href='/sale/shoes'>Shoes</Breadcrumbs.Crumb>
      </Breadcrumbs>
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default ShoeBreadcrumbs
