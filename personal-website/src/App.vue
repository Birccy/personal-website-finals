<template>
  <div>
    <Navbar />
    <Hero />
    <About />
    <Education />
    <Experience />
    <Goals />
    <Gallery />
    <Comments />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Education from './components/Education.vue';
import Experience from './components/Experience.vue';
import Goals from './components/Goals.vue';
import Gallery from './components/Gallery.vue';
import Comments from './components/Comments.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Hero,
    About,
    Education,
    Experience,
    Goals,
    Gallery,
    Comments,
    Footer
  }
}
</script>

<style>
@import './assets/css/styles.css';
</style>