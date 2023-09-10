import { IonAlert, IonButton, IonInput, IonItem, IonList } from '@ionic/react';
import './FormLogin.css';
import { useLogin } from '../../hooks/useLogin';

interface ContainerProps { }

const alertInitial = {
  isOpen: false,
  subHeader: 'Error al iniciar sesion',
  message: 'Las credenciales enviadas no son correctas'
}

const FormLogin: React.FC<ContainerProps> = () => {

  const { alert, setAlert, username, password, login, setUserToLogin } = useLogin(alertInitial)

  return (
    <div id="container" className='container'>
      <IonAlert
        isOpen={alert.isOpen}
        header="Notificacion"
        subHeader={alert.subHeader}
        message={alert.message}
        buttons={['OK']}
        onDidDismiss={() => setAlert(alertInitial)}
      ></IonAlert>
      <IonList>
        <IonItem>
          <IonInput type='text' name='username' onKeyUp={setUserToLogin} value={username} placeholder="User"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput type='password' name='password' onKeyUp={setUserToLogin} value={password} placeholder="Password"></IonInput>
        </IonItem>
        <IonButton onClick={login} fill="outline" expand="block" color="dark">Login</IonButton>
        <IonButton routerLink="/signup" fill="clear" expand="block" color="medium">Sign up</IonButton>
      </IonList>
    </div>
  );
};

export default FormLogin;
