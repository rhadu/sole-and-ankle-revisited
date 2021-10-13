/* eslint-disable no-unused-vars */
import React from 'react'
import styled, { keyframes } from 'styled-components/macro'
import { DialogOverlay, DialogContent } from '@reach/dialog'

import { QUERIES, WEIGHTS } from '../../constants'

import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null
  }

  return (
    <Wrapper onClick={onDismiss}>
      <Backdrop />
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id='close' strokeWidth={2} />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Navigation>
          <NavLink index='1' href='/sale'>
            Sale
          </NavLink>
          <NavLink index='2' href='/new'>
            New&nbsp;Releases
          </NavLink>
          <NavLink index='3' href='/men'>
            Men
          </NavLink>
          <NavLink index='4' href='/women'>
            Women
          </NavLink>
          <NavLink index='5' href='/kids'>
            Kids
          </NavLink>
          <NavLink index='6' href='/collections'>
            Collections
          </NavLink>
        </Navigation>
        <Footer>
          <NavLink index='8' href='/terms'>Terms and Conditions</NavLink>
          <NavLink index='10' href='/privacy'>Privacy Policy</NavLink>
          <NavLink index='12' href='/contact'>Contact Us</NavLink>
        </Footer>
      </Content>
    </Wrapper>
  )
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  60%{
    transform: translateX(0px);
  }
  100% {
    transform: translateX(0px);
  }
`

const moveVertically = keyframes`
    0% {
        transform : translateX(calc(50% + 300px));
        opacity: 0;
    }
    100% {
        opacity: 1;
        transform : translateX(0px);
    }
`

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
`

const Backdrop = styled.div`
  position:absolute;
  height: 100%;
  width: 100%;
  background: hsl(220deg 5% 30% / 0.8);
  animation: ${fadeIn} 500ms ease both;
`

const Content = styled(DialogContent)`
  background-color: #ffffff;
  height: 100%;
  width: 300px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  animation: ${slideIn} 500ms ease both;

  @media ${QUERIES.laptopAndDown} {
    padding-right: 32px;
  }
  @media ${QUERIES.phoneAndDown} {
    padding-right: 16px;
  }
`

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  right: 16px;
  top: 26px;
`

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;

  & a {
    text-transform: uppercase;
    text-decoration: none;
    font-weight: ${WEIGHTS.medium};
    color: var(--color-gray-900);
    font-size: ${18 / 16}rem;
    line-height: 2.5;
  }
`

const NavLink = styled.a`
  animation: ${moveVertically} 200ms ease both;
  animation-delay: ${(props) => props.index * 50}ms;
`

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  /* animation: ${fadeIn} 400ms ease both;
  animation-delay: 500ms; */

  & a {
    text-decoration: none;
    color: var(--color-gray-700);
    font-size: ${14 / 16}rem;
    line-height: 2;
  }
`
const Filler = styled.div`
  flex: 1;
`

export default MobileMenu
