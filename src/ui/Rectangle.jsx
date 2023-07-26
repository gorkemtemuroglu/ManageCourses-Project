import { styled } from "styled-components";

const Container = styled.div`
  width: 255px;
  height: 157px;

  border-radius: 8px;
  background-color: antiquewhite;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
`;

const IconDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
`;

const Span = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 2rem;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: right;
`;

function Rectangle({ name, number, bgColor, logos }) {
  const containerStyle = {
    background: bgColor,
    // Diğer stil özellikleri
  };

  return (
    <>
      <Container style={containerStyle}>
        <IconDiv>
          <p>
            <img src={logos} alt="LOGO" />
          </p>
          <p>{name}</p>
        </IconDiv>
        <Span>{number}</Span>
      </Container>
    </>
  );
}

export default Rectangle;
