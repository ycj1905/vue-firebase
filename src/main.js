// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyB0J7MtK1NyTTrXuyug6tTr4AbZHddhNqo",
  authDomain: "vue-firebase-auth-65527.firebaseapp.com",
  databaseURL: "https://vue-firebase-auth-65527.firebaseio.com",
  projectId: "vue-firebase-auth-65527",
  storageBucket: "vue-firebase-auth-65527.appspot.com",
  messagingSenderId: "666228406900"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user){
  if(!app) {
    app = new Vue({
      el: '#app',
      template: '<App/>',
      comments: { App },
      router
    })
  }

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
