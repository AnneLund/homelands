import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AppService from "../../Components/Appservices/Appservice";

const Products = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const renderProducts = async () => {
      try {
        const response = await AppService.GetList(`categories/${id}`);
        if (response.data) {
          console.log(response.data);
          setItems(response.data.items);
        }
      } catch (error) {
        console.error(error);
      }
    };

    renderProducts();
  }, [items, id]);

  return <div>Products</div>;
};

export default Products;
