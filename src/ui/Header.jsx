import styled from "styled-components";
import circle from "../../public/HomeIcons/circle.png";
import alarm from "../../public/HomeIcons/alarm.png";

const StyledHeader = styled.header`
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  background: rgba(255, 255, 255, 1);

  display: flex;
  text-align: center;
  justify-content: space-between;
`;

function Header() {
  return (
    <StyledHeader>
      <p>
        <img src={circle} alt="circle" />
      </p>

      <span>
        <img src={alarm} alt="circle" />
      </span>
    </StyledHeader>
  );
}

export default Header;
