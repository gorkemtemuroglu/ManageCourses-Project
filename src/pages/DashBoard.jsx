import bookmark from "../../public/HomeIcons/bookmark.png";
import graduation from "../../public/HomeIcons/graduation.png";
import useSquare from "../../public/HomeIcons/use-square.png";
import vector from "../../public/HomeIcons/vector.png";

import Rectangle from "../ui/Rectangle";

import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 5rem;
  justify-content: space-around;
  justify-content: stretch;
  margin-left: 15rem;
  margin-top: 2rem;
`;

function DashBoard() {
  return (
    <Container>
      <Rectangle
        name="Student"
        number="243"
        bgColor="rgba(240, 249, 255, 1)"
        logos={graduation}
      />
      <Rectangle
        name="Course"
        number="13"
        bgColor="rgba(254, 246, 251, 1)"
        logos={bookmark}
      />

      <Rectangle
        name="Payments"
        number="556,000₺"
        bgColor="rgba(254, 251, 236, 1)"
        logos={useSquare}
      />
      <Rectangle
        name="Users"
        number="3"
        bgColor="linear-gradient(110.42deg, #FEAF00 18.27%, #F8D442 91.84%)"
        logos={vector}
      />
    </Container>
  );
}

export default DashBoard;
