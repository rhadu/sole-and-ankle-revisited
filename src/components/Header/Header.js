import React from 'react'
import styled from 'styled-components/macro'

import { QUERIES, WEIGHTS } from '../../constants'
import Logo from '../Logo'
import SuperHeader from '../SuperHeader'
import MobileMenu from '../MobileMenu'
import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'
import NavLink from '../NavLink/NavLink'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>

        <DesktopNav>
          <NavLink href='/sale'>Sales </NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </DesktopNav>

        {/* <DesktopNav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </DesktopNav> */}

        <MobileActions>
          <ShoppingBagButton>
            <Icon id='shopping-bag' strokeWidth={2} />
            <VisuallyHidden>Cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id='search' strokeWidth={2} />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id='menu' strokeWidth={2} />
            <VisuallyHidden>Menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>

        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  )
}

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.laptopAndDown} {
    /* overflow-y: clip;
    overflow-x: auto; */
  }

  @media ${QUERIES.tableAndDown} {
    border-top: 4px solid var(--color-gray-900);
    align-items: center;
    justify-content: space-between;
  }

  @media ${QUERIES.phoneAndDown} {
    padding-left: 16px;
    padding-right: 16px;
  }
`

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 10vw - 5.75rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.laptopAndDown} {
    /* margin-right: 0; */
  }

  @media ${QUERIES.tableAndDown} {
    display: none;
  }
`

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tableAndDown} {
    display: flex;
    gap: clamp(1rem, 10vw - 2.75rem, 2.5rem);
  }
`

const LogoWrapper = styled.div`
  flex: 1;
  @media ${QUERIES.laptopAndDown} {
  }
  @media ${QUERIES.tableAndDown} {
    flex: revert;
  }
`

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`

const Filler = styled.div`
  flex: 1;
  @media ${QUERIES.laptopAndDown} {
    /* flex: 0 9999999 0; */
  }

  @media ${QUERIES.tableAndDown} {
    display: none;
  }
`

const NavLinkBorder = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  white-space: nowrap;
  position: relative;

  &:first-of-type {
    color: var(--color-secondary);
  }

 

  &::after {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin: auto;
    width: 4px;
    height: 1px;
    background: var(--color-gray-700);
    content: '';
    opacity: 0;
    transition: width 0.2s, height 0.4s, opacity 0.4s, transform 0.4s;
    transform: translateY(10px);
  }
  &:first-of-type::after {
    background: var(--color-secondary);
  }
  &:hover::after {
    height: 0.15em;
    width: calc(100% + 4px);
    left:-2px;
    opacity: 1;
    transform: translateY(0px);
    transition: width 0.2s, height 0.2s, opacity 0.2s, transform 0.2s;
  }
`

export default Header
