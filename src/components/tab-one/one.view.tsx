import {
  IonContent,
  IonFab,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add, remove, refresh } from "ionicons/icons";
import Counter from "../Counter";
import { CustomButton } from "./one.components";

const TabOneView: React.FC<TabOneViewProps> = ({
  clickCounter,
  handleRefresh,
  handleIncrement,
  handleDecrement,
}) => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>
          Tab 1{" "}
          <IonIcon
            icon={refresh}
            className="ion-float-right"
            color="primary"
            onClick={handleRefresh}
          ></IonIcon>
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen className="ion-padding">
      <Counter clickCounter={clickCounter} />
      <IonFab color="primary" slot="fixed" vertical="bottom" horizontal="end">
        <CustomButton icon={refresh} onPress={handleRefresh} />
        <CustomButton icon={add} onPress={handleIncrement} />
        <CustomButton
          icon={remove}
          onPress={handleDecrement}
          disabled={clickCounter === 0}
        />
      </IonFab>
    </IonContent>
  </IonPage>
);
export default TabOneView;
