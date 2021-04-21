<template>
<div>
  <div class="content-container">
    <div class="header">
    <h1 class="head">BKTM PartyService</h1>
    <!--<img>-->
    <h3>by Moritz, Marvin</h3>
  </div>
  <div class="main-content">
    <div class="PartyService">
      <PartyService/>
    </div>
  </div>
  </div>
  <div class="lower-content-container">
    <div style="margin-bottom:10em">
      <PartyCreate/>
    </div>
    <div style="max-width: 100%">
      <PartyHistory/>
    </div>
  </div>
</div>
</template>
<script>
import PartyCreate from './components/PartyCreate.vue'
import PartyService from './components/PartyService'
import PartyHistory from './components/PartyHistory'
export default {
  name: 'App',
  components: {
    PartyService,
    PartyCreate,
    PartyHistory
  }
}
</script>

<style>
body{
  margin: 0;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.content-container{
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0 auto;
  background-image: url("https://www.wallpapertip.com/wmimgs/71-713207_concert-wallpapers-party-wallpaper-hd.jpg");
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  height: 57em;
  bottom: 0;
}

.header {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  text-align: center;
  margin:2em auto 2em auto;
  padding: 1em;
  color: white;
  opacity: 1;
  
}
.head {
    font-size: 3em;
    font-weight: bold;
    font-family: 'Shadows Into Light', cursive;
    text-shadow: 1px 1px 1px #121212,
        1px 2px 1px #121212,
        1px 3px 1px #121212,
        1px 4px 1px #121212,
        1px 5px 1px #121212,
        1px 6px 1px #121212,
        1px 7px 1px #121212,
        1px 8px 1px #121212,
        1px 9px 1px #121212,
        1px 10px 1px #121212,
    1px 18px 6px rgba(16,16,16,0.4),
    1px 22px 10px rgba(16,16,16,0.2),
    1px 25px 35px rgba(16,16,16,0.2),
    1px 30px 60px rgba(16,16,16,0.4);
}
.head2 {
    font-size: 3em;
    font-weight: bold;
}

.main-content {
  margin: 0 auto;
  text-align: center;
  border-radius: 0.8em;
  padding: 2em;
  max-width: 70%;
  background: white;
  font-family: 'Montserrat', sans-serif;
  bottom: 0;
}
.PartyService {
  margin: 0 auto;
  max-height: 25em;
  overflow: scroll;
  scrollbar-width: none;
  -webkit-scrollbar-width: none;
}

::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
    background: gray;
}

.lower-content-container{
  margin: 0 auto;
  text-align: center;
  top: 0;
  background-color: #2b3b3b;
  padding-top: 2em;
  height: 50em;
}


@media screen and (max-width: 10px) {
  .lower-content-container{
    padding: 0;
  }
}

</style>
