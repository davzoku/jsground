<template>
  <div id="app">
    <div class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <router-link to="/">Vue App</router-link>
          <button class="button navbar-burger" v-on:click="toggleNav" v-bind:class="{'is-active': isActive}">
            <span></span>
            <span></span>
            <span></span>
          </button>
          </div>

          <div class="navbar-end navbar-menu" v-bind:class="{'is-active': isActive}">
            <!-- specific to vue, else ul -->
            <router-link to="/" class="navbar-item">Home</router-link>
            <router-link to="faq" class="navbar-item">Features</router-link>
            <router-link to="faq" class="navbar-item">About</router-link>
            <router-link to="faq" class="navbar-item">FAQ</router-link>

            <div class="navbar-item">
              <p class="control">
                <a class="button is-primary is-outlined">
                  <span class="icon">
                    <i class="fa fa-download"></i>
                  </span>
                  <span>Join Now </span>
                </a>
              </p>
            </div>

          </div>
        </div>
      </div>
      <!-- router-view render components for nested paths from index.js-->
      <router-view/>
      <footer class = "footer is-primary">
        <div class="container">
          <div class="columns">
            <div class="column">
              <p>&copy Copyright 2018</p>
              <div class="column has-text-right">
                <a class="icon" href="#"><i class="fa fa-facebook"></i></a>
                <a class="icon" href="#"><i class="fa fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>

  </div>
</template>

<script>
export default {
  name: 'app',
  data: function(){
    return {
      isActive:false
    }
  },
  methods: {
    toggleNav:function(){
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import 'mq'

.navbar
  background-color: #383838
  color: #fff
  a:hover
    color: $primary

.navbar-brand a
    color: #fff
    padding: 0.5rem 1.75rem
    font-weight: bold

.navbar-end a
  color: #fff

a.navbar-item
  font-weight: bold
  padding: 0.5rem 1.75rem
  +mobile
    color: #383838

footer
  background-color: $primary !important
  color: #fff

  .icon
    color: #fff
    margin-left: 20px


</style>
