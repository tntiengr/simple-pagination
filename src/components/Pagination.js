import React from "react";
import styled from "@emotion/styled";

function Pagination({ postPerPage, totalPost, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <span>
      <PagiNav>
        {pageNumbers.map((item) => {
          return (
            <li key={item}>
              <a
                onClick={() => {
                  paginate(item);
                }}
              >
                {item}
              </a>
            </li>
          );
        })}
      </PagiNav>
    </span>
  );
}

export default Pagination;
const PagiNav = styled.ul`
  display: flex;
  list-style-type: none;
  li a {
    text-decoration: none;
    color: #ffffff;
    padding: 0.5rem;
    border: 1px solid #ffffff;
    margin: 0.5rem;
  }
`;
