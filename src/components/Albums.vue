<template>
  <div>
    <Header />
    <div class="card-container">
      <div class="card" v-for="album in albums" v-bind:key="album.id">
        <img :src="album.imgSrc" alt />
        <p>{{ album.title }}</p>
        <p>Músicas: {{ album.songsAmount }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import { getSavedAlbums } from "../services/albums";
import { savedAlbums } from "../utils/spotifyResponseParsers";

export default {
  name: "Albums",
  components: {
    Header
  },
  data() {
    return {
      albums: []
    };
  },
  mounted() {
    getSavedAlbums().then(response => {
      const albumsInfo = savedAlbums(response);
      this.albums = albumsInfo;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card {
  height: 300px;
  width: 200px;
}

.card img {
  width: 100%;
  border-radius: 10px;
}
</style>
