import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import Logo from "./Logo";
import MainNav from "./MainNav";
import logout from "../../public/HomeIcons/logout.png";

const StyledSidebar = styled.aside`
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;

  background-color: var(--color-background-sidebar);
  justify-content: space-between;
`;

const StyledLogout = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
`;

function Sidebar() {
  const navigate = useNavigate();

  return (
    <StyledSidebar>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        <Logo />
        <MainNav />
      </div>
      <StyledLogout>
        <p>Logout</p>
        <span>
          <button onClick={() => navigate("/")}>
            <img src={logout} alt="logout" />
          </button>
        </span>
      </StyledLogout>
    </StyledSidebar>
  );
}

export default Sidebar;
