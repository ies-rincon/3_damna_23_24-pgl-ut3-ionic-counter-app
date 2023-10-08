# 3DAMNA - PGL > UT3 > Counter App

Esta es una aplicación de contador simple desarrollada en Ionic. La aplicación muestra un contador y permite al usuario aumentar o disminuir el valor del contador haciendo clic en botones.

## Características

- Muestra un contador en pantalla.
- Permite al usuario aumentar o disminuir el contador haciendo clic en botones.
- La aplicación no utiliza un manejo de estados avanzado, es una versión básica para principiantes.

## Interacción y Componentes

La aplicación utiliza algunos conceptos clave de interacción y componentes en Ionic:

- Utiliza botones (`IonFab`) de [DOCS de Ionic](https://ionicframework.com/docs/api/fab) para permitir al usuario interactuar con la aplicación y modificar el contador.
- Los componentes de texto (`IonText`) se utilizan para mostrar el valor actual del contador en la pantalla.

Para obtener más información sobre cómo agregar interactividad a las aplicaciones de ionic y aprender sobre los componentes disponibles, consulta la [documentación oficial de ionic](https://ionicframework.com/docs/).

## Navegación por Pestañas

Si deseas explorar la navegación por pestañas en Ionic, puedes consultar la documentación de [Tabs de Ionic](https://ionicframework.com/docs/api/tabs).

## Ejemplo de Uso

```javascript
import React, { useState } from 'react';
import {
  IonContent,
  IonButton,
  IonText,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';

const CounterApp: React.FC = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Counter App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className="ion-text-center">
          <IonRow>
            <IonCol>
              <IonText className="counter-text">{count}</IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                expand="full"
                color="primary"
                onClick={incrementCount}
              >
                Increment
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                expand="full"
                color="danger"
                onClick={decrementCount}
              >
                Decrement
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default CounterApp;
