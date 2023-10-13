import React from "react";

import { Page } from "./SelectMarket.styles";

import InsideMarketPage from "../../components/SelectMarket/InsideMarketPage/InsideMarketPage";

function SelectMarket() {
  const marketBazinhoBarra = {
    address: "R. Benedito Valadares",
    cityId: "3143906",
    complement: "Barra",
    createdAt: "01/05/2021",
    frontImage:
      "https://kipkart-images.s3-sa-east-1.amazonaws.com/fachadabazinhobarra.png",
    id: "48462f2a-7f72-45df-9ba4-1b111414404b",
    logoImage:
      "https://kipkart-images.s3-sa-east-1.amazonaws.com/bazinlogo.png",
    name: "Bazinho Barra",
    number: "242",
    stateId: "31",
    updatedAt: "01/05/2021",
    zipCode: "36884084",
    wifiName: "wifi: GB-Clientes",
    wifiPassword: "senha: bemvindo",
  };
  return (
    <Page>
      <InsideMarketPage market={marketBazinhoBarra} />
    </Page>
  );
}

export default SelectMarket;
