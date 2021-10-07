import React from 'react'
import styled from 'styled-components/macro'

import { COLORS, QUERIES, WEIGHTS } from '../../constants'
import Logo from '../Logo'
import SuperHeader from '../SuperHeader'
import MobileMenu from '../MobileMenu'
import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

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
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </DesktopNav>

        <MobileActions>
          <ShoppingBagButton>
            <Icon id='shopping-bag' strokeWidth={2} />
            <VisuallyHidden>Cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id='search' strokeWidth={2} />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
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
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.tableAndDown} {
    border-top: 4px solid ${COLORS.gray[900]};
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
  gap: 48px;
  margin: 0px 48px;

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

  @media ${QUERIES.tableAndDown} {
    flex: revert;
  }
`

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tableAndDown} {
    display: none;
  }
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`

export default Header
