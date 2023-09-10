import { IonAlert, IonButton, IonInput, IonItem, IonList } from '@ionic/react';
import './FormSignUp.css';
import { useUsers } from '../../hooks/useUsers';

interface ContainerProps { }

const FormSignUp: React.FC<ContainerProps> = () => {

  const { isOpen, setIsOpen, name, username, password, registered, setUserValue, onSubmit } = useUsers()
  
  return (
    <div id="container" className='container'>
      <IonAlert
        isOpen={isOpen}
        header="Notificacion"
        subHeader="Registro de usuario"
        message={`El usuario ${username} fue registrado exitosamente`}
        buttons={['OK']}
        onDidDismiss={() => setIsOpen(false)}
      ></IonAlert>
      <IonList>
        <IonItem>
          <IonInput label="Name:" type='text' name='name' onKeyUp={setUserValue} value={name} placeholder="Nombre completo"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput label="Username:" type='text' name='username' onKeyUp={setUserValue} value={username} placeholder="Usuario"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput label="Password:" type='text' name='password' onKeyUp={setUserValue} value={password} placeholder="Password"></IonInput>
        </IonItem>
        <IonItem>
          <IonInput label="Date:" type='date' name='registered' onKeyUp={setUserValue} value={registered} placeholder="Password"></IonInput>
        </IonItem>
        <IonButton onClick={onSubmit} fill="outline" expand="block" color="dark">Register</IonButton>
        <IonButton routerLink="/login" fill="clear" expand="block" color="medium">{'< Volver'}</IonButton>
      </IonList>
    </div>
  );
};

export default FormSignUp;
