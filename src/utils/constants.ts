export const images = {
  logo: 'https://firebasestorage.googleapis.com/v0/b/buscape-90a48.appspot.com/o/images%2Flogo_branco.png?alt=media&token=25d7c796-c69b-4c35-8e36-49c3ad8c0913',
  landing:
    'https://firebasestorage.googleapis.com/v0/b/buscape-90a48.appspot.com/o/images%2Fimagem_signup.png?alt=media&token=707c198c-c15d-4690-8730-bb53c86a6291',
  login:
    'https://firebasestorage.googleapis.com/v0/b/buscape-90a48.appspot.com/o/images%2Fimagem_login.png?alt=media&token=26138ad2-8ca2-4720-85af-397d505e350c',
  houseIcon:
    'https://firebasestorage.googleapis.com/v0/b/buscape-90a48.appspot.com/o/images%2Fhouse.png?alt=media&token=f6ed8883-bfab-4af3-816b-a26c122836a8',
};

export const iconsName = (commoditie: String) => {
  const comparision = commoditie.toLowerCase();

  if (comparision.includes('quartos') || comparision.includes('quartos')) {
    return 'bed';
  } else if (comparision.includes('suíte') || comparision.includes('suítes')) {
    return 'bed';
  } else if (comparision.includes('banheiro')) {
    return 'toilet';
  } else if (comparision.includes('área')) {
    return 'expand-arrows-alt';
  } else if (comparision.includes('pet')) {
    return 'dog';
  } else if (comparision.includes('vaga')) {
    return 'car';
  } else {
    return 'info-circle';
  }
};

export const API_MAPS_KEY = 'AIzaSyAJ9TKIMyEFz0YzZPCWwdTZxm6GaFIhipM';
