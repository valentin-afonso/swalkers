export async function getGeneralDestination(item) {
    const response = await fetch(`${process.env.PUBLIC_URL}/data//generalDestination.json`)
    const addressJson = await response.json();
  
    // Calculer la distance entre les coordonnées de l'élément et chaque adresse
    const sortedDestinations = addressJson.map(address => {
      const distance = calculateDistance(item.coord.lat, item.coord.lon, address.coord.lat, address.coord.lon);
      return { ...address, distance };
    });
  
    // Trier les adresses en fonction de la distance croissante
    sortedDestinations.sort((a, b) => a.distance - b.distance);
  
    return sortedDestinations;
  }
  
  // Fonction pour calculer la distance entre deux coordonnées (latitude et longitude) en utilisant la formule de Haversine
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Rayon de la Terre en kilomètres
  
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
  
    return distance;
  }
  
  // Fonction utilitaire pour convertir des degrés en radians
  function toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }