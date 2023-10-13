import React from "react";
import { Backdrop, MenuContainer, UserContainer } from "./Menu.styles";
import MenuItem from "./MenuItem/MenuItem";
import { Title } from "../../../styles/common.styles";

function Menu({ options, user, setLoginModal }) {
  return (
    <MenuContainer>
      {!user && <Backdrop onPress={() => setLoginModal(true)} />}
      {options.map((option, index) => (
        <MenuItem user={user} index={index} key={option.id} {...option} />
      ))}
      {user && (
        <UserContainer>
          <Title>
            Conectado como
            {` ${user && user.firstName ? user.firstName : " - "}`}
          </Title>
        </UserContainer>
      )}
    </MenuContainer>
  );
}
export default Menu;
