<template>
  <div id="app">
    <main>
      <div class="search-box">
        <input type="text" class="search-bar" placeholder="Search...">
      </div>
      <div class="weather-wrap">
        <div class="location-box">
          <div class="location">London, GB</div>
          <div class="date">Wednesday 29 January 2020</div>
        </div>
        <div class="weather-box">
          <div class="temp">4℃</div>
          <div class="weather">clear</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "app",
  data(){
    return {
      url_api:""
    }
  }
};
</script>

<style>
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: 'montserrat', sans-serif;
}

#app{
  height:100vh;
  background-image: url('./assets/cold-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

main{
  height: inherit;
  background: rgba(0, 0, 0, .3);
  overflow: hidden;
}
/* -----------search-box----------------- */
.search-box{
  margin: 20px auto 20px;
  width:22rem;
  height:3.5rem;
}
.search-box >input{
  display: block;
  padding: 1rem;

  width: 100%;
  height:100%;
  background:rgba(255, 255, 255, .6);
  border:none;
  outline: none;
  font-size: 2rem;
  border-radius: 0 1rem 0 1rem;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, .3);
  transition: .6s ease-in-out;
}

.search-box >input:focus{
  border-radius: 1rem 0 1rem 0;
}
/* -----------x-  search-box-x----------- */


/* ----------weather-warp ------------- */
.weather-wrap{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.weather-wrap .location-box{
  margin: 10px;
  padding: 10px;
  color: white;
  /* text-shadow:  */
}

.weather-wrap .location-box .location{
  padding:.6rem;
  text-align: center;
  font-size: 2rem;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, .3);
}

.weather-wrap .location-box .date{
  /* font-family:  */
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  font-style: italic;
}

/* ----------weather-box--------- */
.weather-wrap .weather-box{
  margin: 1rem;
  padding:.5rem;
  color:white;
}

.weather-wrap .weather-box .temp{
  padding: 2rem;
  text-align: center;
  font-size: 5rem;
  background-color: rgba(255, 255, 255, .1);
  border-radius: 5px;
  box-shadow: 5px 5px 1px rgba(0, 0, 0, .3);
}

.weather-wrap .weather-box .weather{
  text-transform: capitalize;
  margin: 2rem;
  font-size: 3.8rem;
  font-weight: 800;
  font-style: italic;
  text-align: center;
  text-shadow: 1px 3px 2px rgba(0, 0, 0, .3)
}
/* -----x----weather-box-----x---- */

/* ------x----weather-warp -----x-------- */
</style>
