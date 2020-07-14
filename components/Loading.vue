<template>
  <div v-if="loading">
    <div class="overlay"></div>
    <div class="loader-container">
      <p class="loader"></p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: rgba($color: #fff, $alpha: 0.8);
}

.loader-container {
  position: absolute;
  left: 50%;
  top: 50%;
  height: calc(1.5em + 160px);
  width: calc(1.5em + 160px);
  z-index: 6;
  transform: translate(-50%, calc(-50% - 1em));
}

.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
  animation-fill-mode: both;
  animation: load 1.8s infinite ease-in-out;
}
.loader {
  color: #ddc96c;
  font-size: 10px;
  margin: 80px auto;
  position: relative;
  transform: translateZ(0);
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
.loader:before {
  left: -2.5em;
  animation-delay: -0.32s;
}
.loader:after {
  left: 2.5em;
}

@keyframes load {
  0%,
  80%,
  100% {
    box-shadow: 0 1.5em 0 -1.5em;
  }
  40% {
    box-shadow: 0 1.5em 0 0;
  }
}
</style>
