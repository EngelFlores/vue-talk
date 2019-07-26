<template>
  <div class="content-background">
    <div class="content-background__content-login">
      <div class="content-login__container-title">
        <h1 class="container-title__phrase">Login</h1>
        <button class="container-title__button" @click="authenticate">Login with Spotify</button>
      </div>
      <a
        class="content-login__first-link"
        href="https://www.spotify.com/br/password-reset/"
      >Remember Password?</a>
      <div class="content-login__container-text">
        <p class="content-login__container-text--alignment">didn’t do this YET?</p>
        <a
          class="content-login__second-link"
          href="https://www.spotify.com/br/signup/?forward_url=https%3A%2F%2Fwww.spotify.com%2Fbr%2Faccount%2Foverview%2F"
        >Sign up</a>
      </div>
    </div>
  </div>
</template>

<script>
import { spotifyLogin } from '../services/spotifyLogin';
import { authenticate } from '../services/spotify';
import { getHashParams } from '../utils/getHashParams';

export default {
  name: "Login",
  methods: {
      authenticate: authenticate,
      spotifyLogin: spotifyLogin,
      getHashParams: getHashParams
  }
};

const access_token_test = localStorage.getItem('access_token');

if (!access_token_test) {
  const params = getHashParams();
  if (params.access_token) {
    spotifyLogin(params);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-background {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  height: 100%;
  width: 100%;
}

.content-background__content-login {
  margin-top: 15%;
  width: 400px;
}

.content-login__container-title {
  text-align: center;
  margin-bottom: 10px;
}

.container-title__phrase {
  color: var(--white);
  padding-bottom: 10px;
}

.container-title__button {
  border-radius: 15px;
  width: 400px;
  height: 40px;
  cursor: pointer;
  font-size: 15px;
  border-width: 0;
  color: var(--white);
}

.content-login__container-text {
  display: flex;
  margin-top: 10px;
}

.content-login__first-link {
  color: var(--white);
  font-size: 15px;
  text-decoration: none;
  margin-bottom: 10px;
}

.content-login__container-text--alignment {
  text-transform: uppercase;
  font-size: 12px;
  color: var(--gray);
  margin: 0;
  text-decoration: none;
}

.content-login__second-link {
  margin-left: 10px;
  color: grey;
  text-transform: uppercase;
  font-size: 12px;
}

@media (max-width: 400px) {
  .container-title__button {
    max-width: 300px;
  }

  .content-login {
    max-width: 300px;
  }

  .content-background__content-login {
    width: 90%;
  }
}
</style>
