import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Page } from "../../Layout/Page";
import AppService from "../../Components/Appservices/Appservice";

const Categories = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await AppService.GetList("categories");
        if (response.data) {
          setCats(response.data.items);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, [cats]);

  return (
    <Page>
      <h1>Produkter</h1>
      <ul>
        {cats.map((cat, i) => {
          return (
            <li key={i}>
              <Link key={cat.id} to={`/products/${cat.id}`}>
                {cat.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </Page>
  );
};

export default Categories;
