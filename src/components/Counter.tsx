import { IonText } from "@ionic/react";

interface ContainerProps {
  clickCounter: number;
}

const Counter: React.FC<ContainerProps> = ({ clickCounter }) => {
  return (
    <div className="container">
      <IonText color="primary">
        <h1>
          <strong>{clickCounter}</strong>
        </h1>
      </IonText>
      <p>{clickCounter === 1 ? "Click" : "Clicks"}</p>
    </div>
  );
};

export default Counter;
