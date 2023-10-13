import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  IconContainer,
  ModalHeaderContainer,
  ModalHeaderTitle,
} from "./ModalHeader.styles";
import Colors from "../../../constants/Colors";
import { colors } from "../../../styles/styleGuide";

const ModalHeader = ({ setModalVisible, children, dark }) => (
  <ModalHeaderContainer dark={dark}>
    <IconContainer dark={dark} onPress={() => setModalVisible(false)}>
      <AntDesign
        name="arrowleft"
        size={26}
        color={dark ? colors.white : colors.secondary}
      />
    </IconContainer>
    <ModalHeaderTitle dark={dark}>{children}</ModalHeaderTitle>
  </ModalHeaderContainer>
);
export default ModalHeader;
