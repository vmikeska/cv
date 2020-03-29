<template>
  <div>
    <div class="head-info">
      <div class="l">
        <div class="photo-cont">
          <img src="./assets/profile-photo-small.png" />
        </div>
      </div>
      <div class="r">
        <div class="title-name">Václav Mikeska</div>
        <div>Age 37, located in the area of Prague</div>
      </div>
    </div>

    <div class="middle-tbl">
      <div class="l">
        <h1>Me</h1>
        <div class="info-block">
          I'm a professional software developer and consultant with over 25 years of total experience.
          I do it as a hobby and passion and at least last 16 years for a living.
          Besides that, I'm a father of one, an enthusiastic traveler and I do a lot of sports.
        </div>

        <h1>My skills</h1>
        <div class="info-block">
          I'm a full-stack software developer, in recent years I work almost exclusively on frontend.
          I work and live in the area of Prague, formerly lived and worked for about 10 years in Germany, England, Indonesia, United Arab Emirates and Israel.
        </div>
      </div>
      <div class="r"></div>
    </div>

    <!-- <div v-for="item in items" :key="item">{{item}}</div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import moment from "moment";
import Chart from "chart.js";

@Component({
  components: {}
})
export default class App extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@font-face {
  font-family: remachine;
  src: url(./assets/fonts/RemachineScript_Personal_Use.ttf);
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 18px;
}

$dark-blue: #29658a;

.head-info {
  display: table;
  .l {
    display: table-cell;

    .photo-cont {
      display: inline-block;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 300px;
        margin: 0;
        vertical-align: middle;
      }
    }
  }

  .r {
    display: table-cell;
    vertical-align: middle;
    padding-left: 2rem;
    text-align: left;

    .title-name {
      font-size: 3rem;
      color: $dark-blue;

      // font-family: remachine;
    }
  }
}

.middle-tbl {
  display: table;
  width: 100%;

  .l {
    display: table-cell;

    h1 {

    }

    .info-block {

    }
  }

  .r {
    display: table-cell;
  }
}

// @import "./styles/_variables.scss";

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
