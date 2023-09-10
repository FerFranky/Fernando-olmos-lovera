import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import FormLogin from "../../components/FormLogin";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { obtenerLocalStorage } from "../../components/utils/LocalStorage";

const Login: React.FC = () => {
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>App movies</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">App movies</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <FormLogin />
            </IonContent>
        </IonPage>
    );
};

export default Login;