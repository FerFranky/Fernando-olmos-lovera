import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonInput, IonItem, IonLabel, IonList, IonSearchbar, IonThumbnail } from '@ionic/react';
import './ExploreContainer.css';
import { useMovies } from '../hooks/useMovies';
import { logout } from './utils/Session';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const { movies, setQ } = useMovies()
  const defaultImg = "https://ionicframework.com/docs/img/demos/thumbnail.svg"

  return (
    <div className='container'>
      <div className='logout-div'>
        <IonButton className='logout-btn' onClick={logout} fill="outline" color="dark">Log out</IonButton>
      </div>
      <IonSearchbar onIonInput={(event: any) => setQ(event.target.value)} animated={true} placeholder="Buscar por titulo"></IonSearchbar>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Api Movies</IonCardTitle>
          <IonCardSubtitle>Listado de peliculas</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonList>
            {movies.length === 0 ? (
              <IonItem key={`item-movie-00`}>
                <IonThumbnail slot="start">
                  <img alt="Silhouette of mountains" src={'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXhkdXZibHMwa3QycmYyd3FuMHJtNTZtMnBpcXhla2FycmU4cGRidyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/NgEAblIYpqSlwpj15O/giphy.gif'} />
                </IonThumbnail>
                <IonLabel>Cargando...</IonLabel>
              </IonItem>
            ) : (
              <>
                {movies.map((movie: any, index: Number) => (
                  <IonItem key={`item-movie-${index}`}>
                    <IonThumbnail slot="start">
                      <img alt="Silhouette of mountains" src={movie?.image?.medium ? movie?.image?.medium : defaultImg} />
                    </IonThumbnail>
                    <IonLabel>{movie.name || movie.show.name}</IonLabel>
                  </IonItem>
                ))}
              </>
            )}
          </IonList>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default ExploreContainer;
