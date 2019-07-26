<template>
  <div>
    <div class="header">
      <div class="header__icon">
        <img class="header__icon-image" :src="user.profilePicture" />
      </div>
      <div class="header__wrap">
        <p class="header__user-name">{{user.name}}</p>
      </div>
      <div class="header__divider" />
    </div>
    <nav>
      <router-link to="/artists">Artists</router-link>
      <router-link to="/albums">Albums</router-link>
    </nav>
  </div>
</template>

<script>
import { getUserInfo } from "../services/user";
import { userInfo } from "../utils/spotifyResponseParsers";

export default {
  name: "Header",
  data() {
    return {
      user: []
    };
  },
  mounted() {
    getUserInfo().then(response => {
      const userData = userInfo(response);
      this.user = userData;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 100px;
  width: 100%;
  position: fixed;
  top: 0px;
  padding-top: 35px;
  padding-left: 20px;
  display: flex;
  z-index: 3;
  margin-bottom: 100px;
  background: rgb(216, 215, 215);
}

.header__icon {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: block;
  position: relative;
  overflow: hidden;
}

.header__icon-image {
  background: white;
  border-radius: 50%;
  height: 100%;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  width: 100%;
}

.header__user-name {
  font-size: 16px;
  font-weight: 900;
  padding: 5px 0 0 4px;
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.header__user-profile {
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 2px;
  padding-left: 4px;
  text-decoration: none;
}

.header__wrap {
  margin-left: 20px;
  display: block;
  position: relative;
}

.header__divider {
  width: 2px;
  height: 40px;
  background-color: var(--theme-divider);
}
</style>
