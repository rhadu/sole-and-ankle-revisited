/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components/macro'
import { DialogOverlay, DialogContent } from '@reach/dialog'

import { COLORS, QUERIES, WEIGHTS } from '../../constants'

import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null
  }

  return (
    <Overlay onClick={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id='close' strokeWidth={2} />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Navigation>
          <a href='/sale'>Sale</a>
          <a href='/new'>New&nbsp;Releases</a>
          <a href='/men'>Men</a>
          <a href='/women'>Women</a>
          <a href='/kids'>Kids</a>
          <a href='/collections'>Collections</a>
        </Navigation>
        <Footer>
          <a href='/terms'>Terms and Conditions</a>
          <a href='/privacy'>Privacy Policy</a>
          <a href='/contact'>Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  )
}

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(220deg 5% 40% / 0.8);
  display: flex;
  justify-content: flex-end;
`

const Content = styled(DialogContent)`
  background-color: #ffffff;
  height: 100%;
  width: 300px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${QUERIES.laptopAndDown} {
    padding-right: 32px;
  }
  @media ${QUERIES.phoneAndDown} {
    padding-right: 16px;
  }
`

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  right:16px;
  top:26px;
`

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;

  & a {
    text-transform: uppercase;
    text-decoration: none;
    font-weight: ${WEIGHTS.medium};
    color: ${COLORS.gray[900]};
    font-size: ${18 / 16}rem;
    line-height: 2.5;
  }
`

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  & a {
    text-decoration: none;
    color: ${COLORS.gray[700]};
    font-size: ${14 / 16}rem;
    line-height: 2;
  }
`
const Filler = styled.div`
  flex: 1;
`

export default MobileMenu
