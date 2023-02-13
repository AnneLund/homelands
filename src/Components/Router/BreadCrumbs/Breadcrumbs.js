import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";
import { AiOutlineArrowRight } from "react-icons/ai";

const StyledBreadCrumbs = styled.ul`
  display: flex;
  padding: 1em;
  margin: auto;
  list-style-type: none;
  span {
    margin: 0 0.5em;
    color: black;
  }

  .breadcrumb-not-active {
    color: #cccccc;
  }

  .breadcrumb-active {
    color: #000000;
  }

  .breadcrumb-arrow {
    margin-left: 10px;
    margin-right: 10px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Breadcrumbs = () => {
  const crumbs = useReactRouterBreadcrumbs();

  return (
    <nav>
      <StyledBreadCrumbs>
        {crumbs.map(({ breadcrumb }, i) => {
          return (
            <li key={i}>
              <Link to={breadcrumb.key}>{breadcrumb}</Link>
              <span>
                <AiOutlineArrowRight size={10} />
              </span>
            </li>
          );
        })}
      </StyledBreadCrumbs>
    </nav>
  );
};

export default Breadcrumbs;
