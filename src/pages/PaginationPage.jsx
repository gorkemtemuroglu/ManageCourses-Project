import { styled } from "styled-components";

import left from "../../public/SidebarIcons/left.png";
import right from "../../public/SidebarIcons/right.png";

import { useNavigate } from "react-router-dom";

const Pagination = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 20px;
`;

const PaginationInfo = styled.div`
  display: flex;
  align-items: center;
`;

const PaginationButtons = styled.div`
  margin-left: 10px;
`;

function PaginationPage({
  setPage,
  setRender,
  page,
  selectedValue,
  handleChange,
}) {
  const navigate = useNavigate();
  return (
    <Pagination
      style={{
        display: "flex",
        gap: "5rem",
      }}
    >
      <PaginationInfo
        className="pagination-info"
        style={{
          display: "flex",
          gap: "5rem",
        }}
      >
        <div>
          <span>Rows per page:</span>
          <select value={selectedValue} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <span>1-6 of {selectedValue}</span>
      </PaginationInfo>
      <PaginationButtons>
        <span
          style={{
            marginRight: "2rem",
          }}
        >
          Page : {page + 1}
        </span>

        <button
          onClick={() => {
            if (page === 0) return;
            navigate(`?size=${selectedValue}&page=${page}`);
            setPage((curValue) => curValue - 1);
            setRender((cur) => !cur);
          }}
          style={{
            background: "rgba(248, 248, 248, 1)",
            border: "none",
          }}
        >
          <img src={left} alt="leftArrow" />
        </button>
        <button
          onClick={() => {
            navigate(`?size=${selectedValue}&page=${page}`);
            setPage((curValue) => curValue + 1);
          }}
          style={{
            background: "rgba(248, 248, 248, 1)",
            border: "none",
          }}
        >
          <img src={right} alt="leftArrow" />
        </button>
      </PaginationButtons>
    </Pagination>
  );
}

export default PaginationPage;
