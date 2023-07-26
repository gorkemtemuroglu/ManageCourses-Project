import { NavLink } from "react-router-dom";

import styled from "styled-components";

import course from "../../public/SidebarIcons/course.png";
import home from "../../public/SidebarIcons/home.png";
import graduationCap from "../../public/SidebarIcons/graduationCap.png";
import report from "../../public/SidebarIcons/report.png";
import usdSquarePayment from "../../public/SidebarIcons/usdSquarePayment.png";
import settings from "../../public/SidebarIcons/settings.png";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    border-radius: var(--border-radius-sm);
    background: rgba(254, 175, 0, 1);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <img src={home} alt="Course" />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/bookings">
            <img src={course} alt="Course" />
            <span>Course</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users">
            <img src={graduationCap} alt="Course" />
            <span>Students</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/payments">
            <img src={usdSquarePayment} alt="Course" />
            <span>Payment</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <img src={report} alt="Course" />
            <span>Report</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <img src={settings} alt="Course" />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
