<template>

  <div>
    <PlusMinusField v-if="!running" :min="2" :max="12" :value="durationInMinutes" @input="minutes"></PlusMinusField>

    <div @click="stop" v-if="running" class="time">
      {{ formattedElapsedTime }}
    </div>

    <div class="button">

      <span v-if="!running">
        <button @click="start">Continue</button>
      </span>

      <span v-if="!running">
      <button @click="restart">Restart</button>
    </span>
    </div>


  </div>
</template>

<script>

import PlusMinusField from "./PlusMinusField";

const startSoundFile = require("@/assets/start_end.mp3");
const oneMinSoundFile = require("@/assets/onemin.mp3");

export default {
  name: 'CountDown',
  components: {
    PlusMinusField
  },
  data: function () {
    return {
      durationInMinutes: 0,
      running: false,
      elapsedTime: 0,
      startSoundFile,
      oneMinSoundFile,
    }
  },

  computed: {
    formattedElapsedTime() {
      let sec = this.elapsedTime;
      let hours = Math.floor(this.elapsedTime / 3600);
      (hours >= 1) ? sec = sec - (hours * 3600) : hours = '00';
      let min = Math.floor(sec / 60);
      (min >= 1) ? sec = sec - (min * 60) : min = '00';
      (sec < 1) ? sec = '00' : void 0;

      (min.toString().length === 1) ? min = '0' + min : void 0;
      (sec.toString().length === 1) ? sec = '0' + sec : void 0;

      return min + ":" + sec;
    },

  },

  methods: {

    minutes(minutes) {
      this.durationInMinutes = minutes;
    },

    start() {
      this.running = true;
      this.startSound();
      this.timer = setInterval(() => {
        this.elapsedTime--;
      }, 1000);
    },

    stop() {
      clearInterval(this.timer);
      this.running = false;
    },

    restart() {
      //this.durationInMinutes = 8;
      this.elapsedTime = this.durationInMinutes * 60
      this.start();
    },

    startSound() {
      if (this.running) {
        let audio = new Audio(this.startSoundFile);
        audio.play();
      }
    },

    oneMinSound() {
      if (this.running) {
        let audio = new Audio(this.oneMinSoundFile);
        audio.play();
      }
    }

  },

  created() {
    this.durationInMinutes = 8;
  },


  watch: {

    elapsedTime: {
      handler(value) {
        if (value === 60) {
          this.oneMinSound();
        }
      }

    },

    durationInMinutes: {
      handler(value) {
        this.elapsedTime = value * 60
      }
    },

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

* {
  color: chartreuse;
}

.button {
  margin: auto;
  text-align: center;
}

button {
  font-family: DS-Digital, sans-serif;
  background-color: chartreuse;
  color: black;
  font-size: 2vw;
  margin-left: 10px;
  margin-right: 10px;
  border: 0;
  padding: 10px;
}

button:focus {outline:0;}


.time {

  font-size: 44vw;
  font-weight: bold;

  text-align: left;
  font-family: DS-Digital, sans-serif;


}


</style>
