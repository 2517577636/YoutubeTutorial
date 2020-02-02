<template>
  <div id="app">
    <header>
      <h1>My Music</h1>
    </header>
    <main>
      <section class="current">
        <div class="song-title">
          {{current.title}}&nbsp;-&nbsp;
          <span>{{current.artist}}</span>
        </div>
        <div class="control">
          <button class="prev" @click="pre()">Prev</button>
          <button class="play" @click="play" v-if="!isPlaying">Play</button>
          <button class="pause" @click="pause" v-else>Pause</button>
          <button class="next" @click="next()">Next</button>
        </div>
      </section>
      <section class="playlist">
        <h3>The Playlist</h3>
        <div class="btn">
          <button :class="current.title == song.title ? 'song playing' : 'song'" v-for="(song,index) in this.songs" :key="song.src" @click="selectSong(song, index)">{{song.title}}</button>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      current: {},
      index: 0,
      isPlaying: false,
      songs: [
        {
          title: "時雨",
          artist: "川嶋あい ",
          src: require("./assets/川嶋あい - 時雨.mp3")
        },
        {
          title: "βίος",
          artist: "小林未郁",
          src: require("./assets/小林未郁 - βίος.mp3")
        }
      ],
      player: new Audio()
    };
  },
  created() {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
  },
  methods: {
    play() {
      this.player.src = this.current.src;
      this.isPlaying = true;
      this.player.play();
    },
    pause() {
      this.isPlaying = false;
      this.player.pause();
    },
    pre() {
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.length - 1;
      }
      this.current = this.songs[this.index];
      this.play();
    },
    next() {
      this.index++;
      if (this.index > this.songs.length - 1) {
        this.index = 0;
      }
      this.current = this.songs[this.index];
      this.play();
    },
    selectSong(song, index){
      this.isPlaying = true;
      this.index = index;
      this.current = song;
      this.player.src = this.current.src;
      this.play();
    }
  }
};
</script>

<style>
/* --------------common-class----------------- */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button{
  padding: .5rem .8rem;
  background: none;
  border:none;
  outline: none;  
  border-radius: .3rem;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, .3);
  cursor: pointer;
}
/* ------x--------common-class------------x----- */

#app {
  font-family: sans-serif;
}

/* ---------------Header--------------- */
header {
  color: #fff;
}
header h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem 1rem;
  background: #2c3e50;
  font-weight: 700;
}
/* ------x---------Header---------x------ */

/* ---------------Main--------------- */
.current{
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
}

.current .song-title{
  padding: .8rem 1rem;
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  color: #7f8c8d;
}

.current .song-title > span{
  font-style: italic;
  color: #bdc3c7;
}

.current .control{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .5rem 1rem;
  margin: .3rem auto;
  color: #fff;
  /* height: 3rem; */
}

.current .control button{
  margin: 0 .5rem; 
  color: inherit;
}

.current .control button:hover{
  opacity: .9;
}

.current .control .play,.pause{
  width: 6rem;
  font-size: 1.5rem;
  background: #CC2E5D;
}

.current .control .prev,.next{
  width: 4rem;
  padding: .3rem .5rem;
  font-size: 1rem;
  background: #FF5858;
}

.playlist{
  display: flex;
  flex-direction: column;
  align-items: center;
   color: #7f8c8d;
}

.playlist h3{
  padding:.6rem 1rem; 
}

.playlist .btn{
  width: 100%;
  padding: 1rem 2rem;
}

.playlist .btn .song{
  display: block;
  width:80%;  
  margin: 0 auto;
  color:#7f8c8d;
  transition: .6s ease-in-out;
}

.playlist .btn .song:nth-child(2){
  margin-top: 2.2rem;
}

.playlist .btn .song.playing{
 background-image: linear-gradient(to right, #CC2E5D, #FF5858);
 color: #fff;
}

/* ------x---------Main---------x------ */
</style>
