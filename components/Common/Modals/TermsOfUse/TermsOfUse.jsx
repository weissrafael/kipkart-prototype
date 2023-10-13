import React from "react";
import {
  TermsContainer,
  Title,
  TermsList,
  TermsText,
  Section,
} from "./TermsOfUse.styles";
import FullScreenModal from "../../FullScreenModal/FullScreenModal";
import { colors } from "../../../../styles/styleGuide";
import GradientButton from "../../GradientButton/GradientButton";
import {
  privacyPolicy,
  termsOfUse,
} from "../../../../utils/termsOfUseAndPrivacyPolicy";

function TermsOfUse({ isOpen, setIsOpen, content }) {
  let contentArr;
  if (content === "terms") {
    contentArr = termsOfUse;
  } else {
    contentArr = privacyPolicy;
  }
  return (
    <FullScreenModal
      styles={{ maxHeight: 600 }}
      height="80%"
      backdrop
      modalVisible={isOpen}
    >
      <TermsContainer>
        <TermsList>
          {contentArr.map((section) => (
            <Section key={section.title}>
              <Title>{section.title}</Title>
              {section.text !== "" && <TermsText>{section.text}</TermsText>}
            </Section>
          ))}
        </TermsList>
        <GradientButton
          onPress={() => setIsOpen({ open: false, content: "" })}
          loadingColor={colors.secondary}
          style={{ width: "100%" }}
        >
          OK
        </GradientButton>
      </TermsContainer>
    </FullScreenModal>
  );
}

export default TermsOfUse;
