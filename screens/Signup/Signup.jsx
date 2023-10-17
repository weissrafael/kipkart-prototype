import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  Page,
  DarkLayer,
  FakeInput,
  InputText,
  KipLogo,
  NumpadContainer,
  SignupCellphoneImage,
  Subtitle,
  SuccessContainer,
  SuccessImage,
  SuccessTitle,
} from "./Signup.styles";
import { BoldTitle, BoldTitleSMS } from "../../styles/common.styles";
import Colors from "../../constants/Colors";
import GradientButton from "../../components/Common/GradientButton/GradientButton";
import { colors } from "../../styles/styleGuide";
import useKeyboardIsOpen from "../../hooks/useKeyboardIsOpen";
import NameInputModalContent from "../../components/Signup/SignupCellphoneModal/NameInputModalContent/NameInputModalContent";
import TokenInput from "../../components/Common/TokenInput/TokenInput";
import Numpad from "../../components/Common/Keyboard/Numpad/Numpad";
import BackButton from "../../components/Common/BackButton/BackButton";
import api from "../../api/api";
import GenericErrorModal from "../../components/Common/Modals/GenericErrorModal/GenericErrorModal";
import { ErrorMessageWrapper, ErrorSmallMessage } from "../Login/Login.styles";
import { login } from "../../store/actions/user";

const signupImage = require("../../assets/signupImage.png");
const successImage = require("../../assets/illustrations/signup-complete.jpg");
const kipLogoImage = require("../../assets/logokip.png");

const smallDevice = Dimensions.get("window").width < 380;

function Signup({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [smsSent, setSmsSent] = useState(false);
  const [cellphone, setCellphone] = useState("");
  const [maskedCellphone, setMaskedCellphone] = useState("");
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [confirmName, setConfirmName] = useState(false);
  const [cellphoneAlreadyExists, setCellphoneAlreadyExists] = useState(false);
  const [invalidNumber, setInvalidNumber] = useState(false);
  const [token, setToken] = useState([]);
  const [success, setSuccess] = useState(false);
  const [invalidToken, setInvalidToken] = useState(false);

  const keyboardShown = useKeyboardIsOpen();
  const dispatch = useDispatch();
  const marketSelected = useSelector((state) => state.cartReducer.market);

  function validateAndSendSMS() {
    if (
      /\(?\b([0-9]{2,3}|0((x|[0-9]){2,3}[0-9]{2}))\)?\s*[0-9]{4,5}[- ]*[0-9]{4}\b/.test(
        cellphone
      )
    ) {
      setInvalidNumber(false);
      setLoading(true);
      api
        .post("/api/v1/users/sign-up", {
          firstName: name.firstName,
          lastName: name.lastName,
          phoneNumber: cellphone,
        })
        .then(() => {
          setSmsSent(true);
          setLoading(false);
        })
        .catch((err) => {
          if (
            err.response.data.result ===
            "Already exist a identity with this phone number"
          ) {
            setCellphoneAlreadyExists(true);
          } else {
            setError(true);
          }
          setLoading(false);
        });
    } else {
      setInvalidNumber(true);
    }
  }

  function getUserInfo(accessToken) {
    api
      .get("/api/v1/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((resp) => {
        dispatch(login(resp.data.result, accessToken));
        setLoading(false);
        setSuccess(true);
        if (marketSelected) {
          return setTimeout(() => navigation.navigate("Scanner"), 2000);
        }
        return setTimeout(() => navigation.navigate("SelectMarket"), 2000);
      })
      .catch((e) => {
        console.log("error after login: \n", e.response.data);
      });
  }

  function verifyAndSignIn() {
    setLoading(true);
    api
      .post("/api/v1/users/sign-in", {
        phoneNumber: cellphone,
        token: token.join(""),
      })
      .then(({ data }) => {
        getUserInfo(data.result.access_token);
      })
      .catch((err) => {
        if (err.response.data.result === "Invalid Token") {
          setInvalidToken(true);
        } else {
          setError(true);
        }
        setLoading(false);
      });
  }

  const characters = [
    { char: 1, key: "1" },
    { char: 2, key: "2" },
    { char: 3, key: "3" },
    { char: 4, key: "4" },
    { char: 5, key: "5" },
    { char: 6, key: "6" },
    { char: 7, key: "7" },
    { char: 8, key: "8" },
    { char: 9, key: "9" },
    { char: "", key: "10" },
    { char: 0, key: "11" },
    {
      char: (
        <Ionicons name="backspace-outline" size={32} color={colors.secondary} />
      ),
      key: "12",
    },
  ];

  function maskPhone() {
    let newCellphone = cellphone.replace(/\D/g, "");
    newCellphone = newCellphone.replace(/^(\d{2})(\d)/g, "($1)$2");
    newCellphone = newCellphone.replace(/(\d)(\d{4})$/, "$1-$2");
    newCellphone = newCellphone.replace(/(\d)(\d{4})$/, "$1-$2");
    setMaskedCellphone(newCellphone);
  }

  function handleBackButton() {
    if (!confirmName) navigation.pop();
    if (confirmName && !smsSent) {
      setConfirmName(false);
    }
    if (smsSent) {
      setSmsSent(false);
    }
  }

  function cellphoneKeyboardActions(backspace, num) {
    if (backspace) {
      setCellphone((state) => state.slice(0, -1));
      return;
    }
    if (cellphone.length >= 11) {
      return;
    }
    setCellphone((state) => state + num.toString());
  }

  function tokenKeyboardActions(backspace, num) {
    if (backspace) {
      setToken((tokenArr) => tokenArr.slice(0, -1));
      return;
    }
    if (token.length >= 4) {
      return;
    }
    setToken((tokenArr) => {
      const newTokenArr = [...tokenArr];
      return newTokenArr.concat(num.toString());
    });
  }

  function onNumberPress(index, num) {
    const blankButton = index === 9;
    const backspace = index === 11;
    if (blankButton) {
      return;
    }
    if (!smsSent) {
      cellphoneKeyboardActions(backspace, num);
      return;
    }
    tokenKeyboardActions(backspace, num);
  }

  useEffect(() => {
    maskPhone();
  }, [cellphone, maskPhone]);

  return (
    <Page>
      <DarkLayer center={!confirmName}>
        <BackButton styles={{ left: 20, top: 20 }} onPress={handleBackButton} />
        {!confirmName && (
          <NameInputModalContent
            setUserName={setName}
            setConfirmUserName={setConfirmName}
            signupImage={signupImage}
            keyboardShown={keyboardShown}
          />
        )}
        {confirmName && !smsSent && !success && (
          <>
            {!smallDevice && (
              <SignupCellphoneImage
                keyboardShown={keyboardShown}
                source={signupImage}
                resizeMode="contain"
              />
            )}
            <BoldTitle color={Colors.secondary}>
              Digite o seu celular:
            </BoldTitle>
            <FakeInput>
              <InputText
                editable={false}
                placeholder="(32)98999-9999"
                value={maskedCellphone}
              />
              <ErrorSmallMessage show={cellphoneAlreadyExists}>
                {invalidNumber
                  ? "Numero de celular inválido"
                  : cellphoneAlreadyExists
                  ? "Este celular já está cadastrado."
                  : ""}
              </ErrorSmallMessage>
            </FakeInput>
            <Subtitle>
              Ao confimar, será enviado um SMS com o código de confirmação
            </Subtitle>
            <GradientButton
              onPress={validateAndSendSMS}
              loading={loading}
              loadingColor={colors.secondary}
              style={{ width: 260 }}
            >
              Confirmar
            </GradientButton>
          </>
        )}
        {smsSent && !success && (
          <>
            <BoldTitleSMS color={Colors.secondary} style={{ width: "90%" }}>
              Digite o código de SMS enviado para seu telefone:
            </BoldTitleSMS>
            <TokenInput tokenArr={token} />
            <ErrorMessageWrapper>
              <ErrorSmallMessage center show={invalidToken}>
                Código incorreto, por favor verifique e tente de novo
              </ErrorSmallMessage>
            </ErrorMessageWrapper>
            <GradientButton
              onPress={verifyAndSignIn}
              loading={loading}
              loadingColor={colors.secondary}
              style={{
                marginTop: smallDevice ? 25 : 40,
                marginBottom: smallDevice ? 0 : 50,
              }}
            >
              Confirmar
            </GradientButton>
          </>
        )}
        {confirmName && !success && (
          <NumpadContainer>
            {characters.map(({ char, key }, index) => (
              <Numpad
                key={key}
                index={index}
                num={char}
                onNumberPress={onNumberPress}
              />
            ))}
          </NumpadContainer>
        )}
        {/* SUCCESS SIGNUP MESSAGE */}
        {success && (
          <SuccessContainer>
            <KipLogo source={kipLogoImage} resizeMode="contain" />
            <SuccessTitle>Bem vindo a comunidade!</SuccessTitle>
            <SuccessImage source={successImage} resizeMode="contain" />
          </SuccessContainer>
        )}
        <GenericErrorModal show={error} setGenericError={setError} />
      </DarkLayer>
    </Page>
  );
}

export default Signup;
