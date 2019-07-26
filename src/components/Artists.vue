<template>
  <div>
    <Header />
    <div class="card-container">
      <div class="card" v-for="artist in artists" v-bind:key="artist.id">
        <img :src="artist.imgSrc" alt />
        <p>{{ artist.title }}</p>
        <p>Músicas: {{ artist.songsAmount }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import { getArtistsAlbums } from "../services/artists";
import { savedAlbums } from "../utils/spotifyResponseParsers";

export default {
  name: "Artists",
  components: {
    Header
  },
  data() {
    return {
      artists: []
    };
  },
  mounted() {
    getArtistsAlbums("2jku7tDXc6XoB6MO2hFuqg").then(response => {
      const artistsInfo = savedAlbums(response);
      this.artists = artistsInfo;
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
