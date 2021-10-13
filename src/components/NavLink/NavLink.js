import React from 'react'
import styled from 'styled-components/macro'
import { WEIGHTS } from '../../constants'

const NavLink = ({ href, children }) => {
  return (
    <Wrapper href={href}>
      <Text>{children}</Text>
      <FlippedText>{children}</FlippedText>
    </Wrapper>
  )
}

const Wrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  &:first-of-type {
    color: var(--color-secondary);
  }
`

const Text = styled.span`
  display:block;
  transition: transform 350ms;

  ${Wrapper}:hover & {
    transform: translateY(-100%);
    transition: transform 200ms;
  }
`
const FlippedText = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  font-weight: ${WEIGHTS.bold};
  transform: translateY(100%);
  transition: transform 350ms;

  ${Wrapper}:hover & {
    transform: translateY(0);
    transition: transform 200ms;
  }
`

export default NavLink
