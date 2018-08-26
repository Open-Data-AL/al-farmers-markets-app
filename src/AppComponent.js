import Vue from 'vue';

export default {
  data() {
    return {
      cordova: Vue.cordova,
      drawer: null,
    };
  },
  created() {
    const self = this;
    this.cordova.on('deviceready', () => {
      self.onDeviceReady();
    });
  },
  methods: {
    onDeviceReady() {
      // Handle the device ready event.
      this.cordova.on('pause', this.onPause, false);
      this.cordova.on('resume', this.onResume, false);
      if (this.cordova.device.platform === 'Android') {
        document.addEventListener('backbutton', this.onBackKeyDown, false);
      }
    },
    onPause() {
      // Handle the pause lifecycle event.
      console.log('pause');
    },
    onResume() {
      // Handle the resume lifecycle event.
      // SetTimeout required for iOS.
      setTimeout(() => {
        console.log('resume');
      }, 0);
    },
    onBackKeyDown() {
      // Handle the back-button event on Android. By default it will exit the app.
      navigator.app.exitApp();
    },
  },
};
