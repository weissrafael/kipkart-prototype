import React from "react";
import {ButtonsContainer, MenuContainer, Spacing, UserContainer} from "./Menu.styles";
import MenuItem from "./MenuItem/MenuItem";
import {RegularText, Title} from "../../../styles/common.styles";

function Menu({ options, setLoginModal }) {
  const user = {
    firstName: "Maria de Fatima",
  }
  return (
    <MenuContainer>
      <ButtonsContainer>
        <MenuItem user={user} {...options[0]} />
        <Spacing />
        <MenuItem user={user} {...options[1]} />
      </ButtonsContainer>
      <ButtonsContainer>
        <MenuItem user={user} {...options[2]} />
        <Spacing />
        <MenuItem user={user} {...options[3]} />
      </ButtonsContainer>
      <UserContainer>
        <Title>
          Conectado como Maria de Fatima
        </Title>
        <Spacing />
        <RegularText>
          Ultima compra feita no dia  12 / 12 / 2020
        </RegularText>
      </UserContainer>
    </MenuContainer>
  );
}
export default Menu;
