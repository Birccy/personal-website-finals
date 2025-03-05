<template>
  <div id="app">
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
/* Global Styles */
html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Prevent horizontal overflow */
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #2A2A2A;
}

/* Ensure all containers are constrained */
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box; /* Include padding in width calculation */
}

/* Responsive Images */
img {
  max-width: 100%;
  height: auto;
}

/* Navbar Fix */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  z-index: 1000;
  padding: 10px 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Hero Fix */
.hero {
  position: relative;
  height: 100vh; /* Full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 100%);
  color: white;
  padding: 20px; /* Add padding */
  box-sizing: border-box; /* Include padding in height calculation */
}

/* Footer Fix */
.footer {
  background: #1A1A1A;
  color: white;
  padding: 20px;
  text-align: center;
  position: relative; /* Stick to the bottom */
  bottom: 0;
  left: 0;
  right: 0;
}

/* Responsive Typography */
@media (max-width: 768px) {
  body {
    font-size: 14px; /* Smaller font size for mobile */
  }
}
</style>