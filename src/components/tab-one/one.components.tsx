import React from "react";
import { IonFabButton, IonIcon } from "@ionic/react";

export const CustomButton: React.FC<CustomButtonProps> = ({
  icon,
  onPress,
  disabled,
}) => (
  <IonFabButton disabled={disabled} onClick={onPress} style={{ margin: 10 }}>
    <IonIcon icon={icon}></IonIcon>
  </IonFabButton>
);
