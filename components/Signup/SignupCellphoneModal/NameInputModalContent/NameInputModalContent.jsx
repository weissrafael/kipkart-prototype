import { Formik } from "formik";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import {
  InputRow,
  NameModalContainer,
  NameModalText,
  SignupCellphoneImage,
} from "./NameInputModalContent.styles";
import Colors from "../../../../constants/Colors";
import Input from "../../../Common/Input/Input";
import { colors } from "../../../../styles/styleGuide";
import {
  ErrorSmallMessage,
  LargeTitle,
  MainTextTitle,
} from "../../../../styles/common.styles";
import GradientButton from "../../../Common/GradientButton/GradientButton";
import {
  ButtonsRow,
  ButtonText,
  Subtitle,
  TermsButton,
} from "../../../../screens/Signup/Signup.styles";
import TermsOfUse from "../../../Common/Modals/TermsOfUse/TermsOfUse";

function NameInputModalContent({
  setUserName,
  setConfirmUserName,
  signupImage,
  keyboardShown,
}) {
  const [terms, setTerms] = useState({ open: false, content: "" });

  return (
    <NameModalContainer keyboardShown={keyboardShown}>
      <StatusBar />
      <TermsOfUse
        isOpen={terms.open}
        setIsOpen={setTerms}
        content={terms.content}
      />
      <SignupCellphoneImage
        keyboardShown={keyboardShown}
        source={signupImage}
        resizeMode="contain"
      />
      {!keyboardShown && (
        <NameModalText color={Colors.secondary}>
          Digite por favor:
        </NameModalText>
      )}
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
        }}
        onSubmit={(values) => {
          setUserName({
            firstName: values.firstName,
            lastName: values.lastName,
          });
          setConfirmUserName(true);
        }}
        validate={(values) => {
          const errors = {};
          // NAME VALIDATION
          if (!values.firstName) {
            errors.firstName = "requerido";
          }
          if (!values.lastName) {
            errors.lastName = "requerido";
          }
          return errors;
        }}
      >
        {({ errors, touched, handleChange, handleSubmit, values }) => (
          <>
            <InputRow>
              <Input
                value={values.firstName}
                label="Nome"
                labelColor={colors.secondary}
                inputBgColor="white"
                textColor={colors.secondary}
                onChangeText={handleChange("firstName")}
                style={{ borderColor: colors.secondary }}
              />
              <ErrorSmallMessage>
                {errors.firstName && touched.firstName && errors.firstName}
              </ErrorSmallMessage>
              <Input
                value={values.lastName}
                label="Sobrenome"
                labelColor={colors.secondary}
                inputBgColor="white"
                textColor={colors.secondary}
                onChangeText={handleChange("lastName")}
                style={{ borderColor: colors.secondary }}
              />
              <ErrorSmallMessage>
                {errors.lastName && touched.lastName && errors.lastName}
              </ErrorSmallMessage>
            </InputRow>
            <Subtitle>Ao confirmar você concorda com os</Subtitle>
            <ButtonsRow>
              <TermsButton
                onPress={() => setTerms({ open: true, content: "terms" })}
              >
                <ButtonText>termos de uso</ButtonText>
              </TermsButton>
              <MainTextTitle style={{ marginHorizontal: 3 }}>e</MainTextTitle>
              <TermsButton
                onPress={() => setTerms({ open: true, content: "privacy" })}
              >
                <ButtonText>politica de privacidade</ButtonText>
              </TermsButton>
            </ButtonsRow>

            <GradientButton
              onPress={handleSubmit}
              loadingColor={colors.secondary}
              style={{ width: "100%" }}
            >
              Confirmar
            </GradientButton>
          </>
        )}
      </Formik>
    </NameModalContainer>
  );
}

export default NameInputModalContent;
