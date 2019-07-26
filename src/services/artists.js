import { spotifyInstance, createHeader } from './axiosInstances';

function getArtistsAlbums(artistId) {
  return spotifyInstance
    .get(`artists/${artistId}/albums`, createHeader())
    .then((response) => response.data.items );
}

export {
  getArtistsAlbums
};
