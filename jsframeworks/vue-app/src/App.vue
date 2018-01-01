<template>
  <div id="app">
    <div class="navbar">
      <div class="container">
        <div class="navbar-menu navbar-start">
          <a class="navbar-item">CompanyName</a>
          </div>

          <button class="button navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div class="navbar-end navbar-menu">
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
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import 'mq'

.navbar
  background-color: #383838
  a:hover
    color: gray

.navbar-start a
  color: #fff
  font-weight: bold

a.navbar-item
  color: #fff
  padding: 0.5rem 1.75rem
  +mobile
    color: gray
    &:hover
      background-color: #f1f1f1

</style>
