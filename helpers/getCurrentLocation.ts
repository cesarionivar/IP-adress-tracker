export const getCurrentLocation = async (): Promise<[number, number]> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve([coords.longitude, coords.latitude]);
      },
      () => {
        alert('Geolocation is not available');
        reject();
      }
    );
  });
};
