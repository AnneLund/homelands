import React from "react";
import { useEffect } from "react";
import { PageContainer } from "./PageContainer";

const Page = (props) => {
  const { children, title, description, subtitle } = props;

  useEffect(() => {
    document.title = title;
    if (description) {
      document.querySelector('meta[name="description"]').setAttribute("content", description);
    }
  }, [title, description]);

  return (
    <>
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
};

const ContentWrapper = (props) => {
  return <PageContainer>{props.children}</PageContainer>;
};

export { Page, ContentWrapper };
