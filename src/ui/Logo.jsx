import styled from "styled-components";
import profile from "../../public/HomeIcons/Profil.png";
import logo from "../../public/HomeIcons/Logo.png";

const StyledLogo = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
  margin-bottom: 3rem;
`;

const ProfileDiv = styled.div``;

function Logo() {
  return (
    <StyledLogo>
      <Img
        src={logo}
        alt="logo"
        style={{
          width: "auto",
          height: "auto",
        }}
      />
      <ProfileDiv>
        <Img
          src={profile}
          alt="profile"
          style={{
            borderRadius: "50%",
            width: "135px",
            height: "135px",
          }}
        />
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: "17px",
              fontWeight: "700",
              fontHeight: "21px",
            }}
          >
            John Doe
          </p>
          <p
            style={{
              color: "rgba(254, 175, 0, 1)",
            }}
          >
            Admin
          </p>
        </div>
      </ProfileDiv>
    </StyledLogo>
  );
}

export default Logo;
