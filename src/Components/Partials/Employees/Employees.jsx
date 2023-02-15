import React from "react";
import useGetListItemsByEndpoint from "../../Hooks/useGetListItemsByEndPoint";
import { EmployeesStyled } from "./EmployeesStyled";

const Employees = () => {
  const { state: staff } = useGetListItemsByEndpoint("staff");

  return (
    <EmployeesStyled>
      <h3>Mød vores ansatte:</h3>

      <article>
        {staff.items?.map((emp, i) => (
          <figure key={i}>
            <picture>
              <img src={emp.image} alt={emp.firstname} />
            </picture>

            <figcaption>
              <h5>
                {emp.firstname} {emp.lastname}
              </h5>
              <p>Partner, {emp.position}</p>
            </figcaption>
          </figure>
        ))}
      </article>
    </EmployeesStyled>
  );
};

export default Employees;
