import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import FormSignUp from "../../components/FormSignUp";

const Register: React.FC = () => {
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
                <FormSignUp />
            </IonContent>
        </IonPage>
    );
};

export default Register;