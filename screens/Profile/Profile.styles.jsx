import styled from "styled-components/native";
import { colors } from "../../styles/styleGuide";

export const Page = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  padding: 42px 16px 16px 16px;
  background-color: ${colors.forestBlues};
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.View`
  width: 100%;
  padding: 16px 16px 8px 16px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.forestBlues};
  border-radius: 8px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 5px;
  elevation: 5;
  margin-bottom: 8px;
`;

export const SettingRow = styled.View`
  width: 100%;
  padding: 8px 16px;
  margin-top: 8px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${colors.forestBlues};
  border-radius: 8px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 5px;
  elevation: 5;
`;

export const InfoRow = styled.View`
  width: 100%;
  margin-bottom: 8px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const SettingsContainer = styled.View`
  flex-direction: column;
  flex: 1;
  background-color: ${colors.goodSamaritan};
  align-items: center;
  padding: 16px;
`;

export const HeaderTitle = styled.Text`
  font-size: 24px;
  color: ${colors.white};
  font-family: "montserrat-bold";
`;

export const SettingLabel = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  font-family: "montserrat-regular";
`;

export const InfoLabel = styled.Text`
  font-size: 14px;
  color: ${colors.white};
  font-family: "montserrat-regular";
`;