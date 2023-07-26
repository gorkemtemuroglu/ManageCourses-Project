import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";
import Logo from "../../public/HomeIcons/Logo.png";

import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(71.17deg, #feaf00 19.35%, #f8d442 90.12%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Montserrat;
`;

const FormInside = styled.form`
  width: 475px;
  height: 550px;
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 2px 5px 10px 0px #0000001a;
`;

const Inputdiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 415px;
  height: 71px;
  top: 404px;
  left: 513px;
  border-radius: 4px;
  border: 1px;
`;

const SignIn = styled.p`
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;

  width: 87px;
  height: 27px;
  top: 301px;
  left: 677px;
  color: #000000;
`;

const StyledInput = styled.input`
  width: 415px;
  height: 44px;
  top: 431px;
  left: 513px;
  border-radius: 4px;
  border: 1px;
  border: 1px solid #e5e5e5;
  padding: 1rem;
`;

const StyledImg = styled.img`
  width: 240px;
  height: 30px;
`;

function Login() {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <FormInside>
          <StyledImg
            src={Logo}
            alt="Logo"
            style={{
              marginTop: "3rem",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <SignIn>SIGN IN</SignIn>
            <p>Enter your credentials to access your account</p>
          </div>
          <Inputdiv>
            <label>Email</label>
            <StyledInput
              type="text"
              placeholder="Enter your email"
              required
              defaultValue="Görkem@gmail.com"
            />
          </Inputdiv>

          <Inputdiv>
            <label>Password</label>
            <StyledInput
              type="text"
              placeholder="Enter your password"
              required
              defaultValue="****"
            />
          </Inputdiv>

          <Button
            onClick={(e) => {
              e.preventDefault();
              navigate("dashboard");
            }}
          >
            SIGN IN
          </Button>

          <div>
            <p>
              Forgot your password?{" "}
              <span
                style={{
                  color: "rgba(254, 175, 0, 1)",
                }}
              >
                Reset Password
              </span>
            </p>
          </div>
        </FormInside>
      </Container>
    </>
  );
}

export default Login;
