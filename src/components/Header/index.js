import React from "react";
import styled from "styled-components";
function Header({ className }) {
  return (
    <header
      className={className}
      style={{ position: `sticky`, top: 0, zIndex: 999999 }}
    >
      <div className="layout">
        <h1>Animals.</h1>
        <div className="search"></div>
      </div>
    </header>
  );
}
export default styled(Header)`
  background: var(--primary);
  height: 70px;
  h1 {
    margin: 0;
    font-size: 36px;
    color: white;
  }
  > div {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-between;
  }
  .search {
    input {
      width: 30vw;
      min-width: 250px;
    }
  }
`;
