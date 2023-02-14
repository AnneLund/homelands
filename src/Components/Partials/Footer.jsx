import React from "react";
import styled from "styled-components";

const MainFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.backgroundHeadNFoot};
  padding: 1em;
`;

const Footer = () => {
  return <MainFooter>Footer</MainFooter>;
};

export default Footer;
