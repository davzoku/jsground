<template>
  <div class="home">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ heading }}</h1>
          <div class="is-two-thirds column is-paddingless">
            <h2 class="subtitle is-4">{{ subheading }}</h2>
          </div>
          <a class="button is-large is-primary" id="learn">Learn more</a>
        </div>

      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- pd is a custom class-->
        <div class="columns pd is-desktop">
          <div class="column is-1 has-text-centered">
            <i class="fa fa-cog is-primary"></i>
          </div>
          <div class="column is-one-third-desktop">
            <p class="title"><strong>Fusce sollicitudin, neque sed posuere accumsan, ligula augue ultricies neque, id mattis dolor metus vel nisl.</strong></p>
          </div>
          <div class="column">
            <p> Suspendisse id diam in nisl convallis scelerisque eu et arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </div>
        </div>
      </div>
      <div class="columns pd">
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">"Vivamus vitae consequat erat. Vivamus vitae elit lectus. Nullam at placerat velit, lacinia vulputate libero."</p>
                <p class="subtitle">- Tom Jerry</p>
            </div>
          </div>
        </div>

          <div class="column">
            <div class="card">
              <div class="card-content">
                <p class="title">"Vivamus vitae consequat erat. Vivamus vitae elit lectus. Nullam at placerat velit, lacinia vulputate libero."</p>
                  <p class="subtitle">- Tom Jerry</p>
              </div>
            </div>
          </div>

            <div class="column">
              <div class="card">
                <div class="card-content">
                  <p class="title">"Vivamus vitae consequat erat. Vivamus vitae elit lectus. Nullam at placerat velit, lacinia vulputate libero."</p>
                    <p class="subtitle">- Tom Jerry</p>
                </div>
              </div>
            </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return {
      heading: 'This is heading',
      subheading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'

.hero
  background: url('../assets/hero.jpeg')
  background-size: cover

  .title
    +mobile
      font-size: 2.5rem
    +tablet
      font-size: 2.5rem
    +desktop
      font-size: 4rem
      margin-top: 2rem
h2
  margin: 1.5rem 0 2rem 0 !important

.fa-cog
  font-size: 40px

#learn
  +desktop
    margin-bottom:  2.5rem

.pd
    padding: 2em 0

</style>
