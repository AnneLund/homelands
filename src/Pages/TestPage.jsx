import React from "react";
import useGetListItemsByEndPoint from "../Components/Hooks/useGetListItemsByEndPoint";

const TestPage = () => {
  //Axios get-request til api'et vha en hook
  const { state: categories } = useGetListItemsByEndPoint("categories", "items");
  //   console.log(categories);

  return <div>TestPage</div>;
};

export default TestPage;
