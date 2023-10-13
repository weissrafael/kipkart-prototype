import React from "react";
import { BoldTitle, ErrorSubtitle } from "../../../../styles/common.styles";
import Colors from "../../../../constants/Colors";
import Button from "../../Button/Button";
import FullScreenModal from "../../FullScreenModal/FullScreenModal";
import {
  ErrorImage,
  ErrorContainer,
  ErrorWrapper,
} from "./GenericErrorModal.styles";

const genericErrorImage = require("../../../../assets/illustrations/generic-error.jpg");

function GenericErrorModal({ show, setGenericError }) {
  return (
    <FullScreenModal
      height="500px"
      styles={{
        padding: 16,
        justifyContent: "space-between",
      }}
      backdrop
      modalVisible={show}
      setModalVisible={setGenericError}
    >
      <ErrorContainer>
        <ErrorWrapper>
          <ErrorImage source={genericErrorImage} resizeMode="contain" />
          <BoldTitle color={Colors.tertiary}>
            Ops, Não foi possível se conectar
          </BoldTitle>
          <ErrorSubtitle color={Colors.secondary}>
            Por favor verifique sua conexão com a internet e tente novamente
          </ErrorSubtitle>
          <Button
            styles={{
              width: "100%",
            }}
            onPress={() => setGenericError(false)}
          >
            Ok
          </Button>
        </ErrorWrapper>
      </ErrorContainer>
    </FullScreenModal>
  );
}

export default GenericErrorModal;
