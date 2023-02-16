import React from "react";
import { Details, DetailsHeader } from "./DetailsStyled";
import { useModalStore } from "../../Components/Modal/useModalStore";
import { useParams } from "react-router-dom";
import useGetListItemsByEndPoint from "../../Components/Hooks/useGetListItemsByEndPoint";
import { AiFillCamera } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { FiHeart } from "react-icons/fi";
import { TbMapSearch } from "react-icons/tb";
import Gallery from "./Gallery";
import Transitions from "../../Styles/Transition";
import Plan from "./Plan";

const HouseDetails = () => {
  const { id } = useParams();
  const { state: homes } = useGetListItemsByEndPoint("homes/" + id);

  const showGallery = () => {
    setModalPayload(<Gallery images={homes.item.images} />);
  };

  const showPlan = () => {
    setModalPayload(<Plan />);
  };

  const { setModalPayload } = useModalStore();

  return (
    <Transitions>
      {homes && homes.item ? (
        <>
          <DetailsHeader
            style={{
              backgroundImage: `url(${homes.item.images[2].filename.medium})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}></DetailsHeader>

          <Details>
            <article>
              <header>
                <div>
                  <h3>{homes.item.address}</h3>
                  <p>
                    {homes.item.zipcode} {homes.item.city}
                  </p>
                  <p>
                    {homes.item.type} {homes.item.floor_space}m&#178; {homes.item.num_rooms} vær.
                  </p>
                  <p>Set {homes.item.num_clicks} gange</p>
                </div>

                <div className="icons">
                  <span onClick={showGallery}>
                    <AiFillCamera size={30} />
                  </span>

                  <ImLocation2 size={30} />
                  <span onClick={showPlan}>
                    <TbMapSearch size={30} />
                  </span>

                  <FiHeart size={30} />
                </div>

                <div>
                  <p>Kontantpris: {homes.item.price}</p>
                  <p>Udbetaling: {homes.item.payout}</p>
                  <p>Ejerudgift pr måned: {homes.item.net}</p>
                </div>
              </header>

              <div className="artDetails">
                <figure>
                  <div>
                    <p>Sagsnr.</p>
                    <p>Boligareal</p>
                    <p>Grundareal</p>
                    <p>Antal rum</p>
                    <p>Antal plan</p>
                  </div>
                  <div>
                    <p>{homes.item.id}</p>
                    <p>{homes.item.floor_space}</p>
                    <p>{homes.item.ground_space}</p>
                    <p>{homes.item.num_rooms}</p>
                    <p>{homes.item.num_floors}</p>
                  </div>
                </figure>
                <figure>
                  <div>
                    <p>Kælder</p>
                    <p>Byggeår</p>
                    <p>Ombygget</p>
                    <p>Energimærke</p>
                    <p>Liggetid</p>
                  </div>
                  <div>
                    <p>{homes.item.basement_space}</p>
                    <p>{homes.item.year_construction}</p>
                    <p>{homes.item.year_rebuilt}</p>
                    <p>{homes.item.energy_label_name}</p>
                    <p>Dage</p>
                  </div>
                </figure>

                <figure>
                  <div>
                    <p>Kontantpris:</p>
                    <p>Udbetaling: </p>
                    <p>Brutto ex. ejerudgift </p>
                    <p>Netto ex. ejerudgift </p>
                    <p>Ejerudgift: </p>
                  </div>
                  <div>
                    <p> {homes.item.price}</p>
                    <p>{homes.item.payout}</p>
                    <p>{homes.item.cost}</p>
                    <p>{homes.item.net}</p>
                    <p>{homes.item.net}</p>
                  </div>
                </figure>
              </div>

              <footer>
                <div>
                  <p>{homes.item.description}</p>
                </div>
                <figure>
                  <h5>Kontakt</h5>
                  <img src={homes.item.staff.image} alt={homes.item.staff.firstname} />
                  <figcaption>
                    <h6>
                      {homes.item.staff.firstname} {homes.item.staff.lastname}
                    </h6>
                    <p>Partner, {homes.item.staff.position}</p>
                    <p>Mobil: {homes.item.staff.email}</p>
                    <p>Email: {homes.item.staff.phone}</p>
                  </figcaption>
                </figure>
              </footer>
            </article>
          </Details>
        </>
      ) : (
        <p>Kunne ikke indlæse data</p>
      )}
    </Transitions>
  );
};

export default HouseDetails;
