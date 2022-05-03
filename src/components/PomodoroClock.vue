<template>
  <v-card>
    <v-tabs
      @change="changeCurrentTimer"
      class="mt-8"
      v-model="currentTimer"
      grow
    >
      <v-tab v-for="timer in timers" :key="timer.name">
        {{ timer.name }}
      </v-tab>
    </v-tabs>
    <v-card class="pa-5 d-flex flex-column justify-center align-center" flat>
      <h1 class="time">{{ displayMinutes }}:{{ displaySeconds }}</h1>

      <div class="button-group">
        <v-btn @click="start" color="primary">
          <v-icon left small>mdi-play-circle-outline</v-icon>
          Start
        </v-btn>
        <v-btn @click="stop" color="error">
          <v-icon left small>mdi-stop-circle-outline</v-icon>
          Stop
        </v-btn>
        <v-btn
          @click="reset(timers[currentTimer].minutes)"
          :disabled="isRunning"
        >
          <v-icon left small>mdi-restart</v-icon>
          Reset
        </v-btn>
      </div>
    </v-card>
    <UserSettings
      :dialog="dialog"
      :closeDialog="closeDialog"
      :timers="timers"
      :save="save"
    />
  </v-card>
</template>

<script>
import UserSettings from "./UserSettings";
import { formatTime } from "../utils/formatTime.js";
import { start } from "../utils/start.js";
import { stop } from "../utils/stop.js";
import { reset } from "../utils/reset.js";
import { changeCurrentTimer } from "../utils/changeCurrentTimer.js";
import { save } from "../utils/save.js";

export default {
  components: {
    UserSettings,
  },
  props: {
    dialog: {
      type: Boolean,
      required: true,
    },
    closeDialog: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      isRunning: false,
      timerInstance: null,
      totalSeconds: 25 * 60,
      currentTimer: 0,
      timers: [
        {
          name: "Pomodoro",
          minutes: 25,
        },
        {
          name: "Short Break",
          minutes: 5,
        },
        {
          name: "Long Break",
          minutes: 10,
        },
      ],
    };
  },
  computed: {
    displayMinutes() {
      const minutes = Math.floor(this.totalSeconds / 60);
      return this.formatTime(minutes);
    },
    displaySeconds() {
      const seconds = this.totalSeconds % 60;
      return this.formatTime(seconds);
    },
  },
  watch: {
    timers: function () {
      this.totalSeconds = this.timers[this.currentTimer].minutes * 60;
    },
  },
  methods: {
    formatTime,
    start,
    stop,
    reset,
    changeCurrentTimer,
    save,
  },
};
</script>

<style lang="sass" scoped>
@import '../assets/styles/styles.sass'
</style>
