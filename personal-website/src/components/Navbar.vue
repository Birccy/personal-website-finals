<template>
  <div>
    <nav class="navbar" :class="{'navbar-move': isMoved, 'mobile-open': isMobileOpen}">
      <div class="container">
        <a href="#" class="logo" @click="scrollToTop">RB</a>
        
        <!-- Hamburger menu button for mobile -->
        <button class="hamburger" @click="toggleMobileMenu">
          <span :class="{'open': isMobileOpen}"></span>
          <span :class="{'open': isMobileOpen}"></span>
          <span :class="{'open': isMobileOpen}"></span>
        </button>
        
        <ul class="nav-menu" :class="{'mobile-show': isMobileOpen}">
          <li><a @click="smoothScroll('#about')">About</a></li>
          <li><a @click="smoothScroll('#education')">Education</a></li>
          <li><a @click="smoothScroll('#portfolio')">Experience</a></li>
          <li><a @click="smoothScroll('#goals')">Goals</a></li>
          <li><a @click="smoothScroll('#gallery')">Gallery</a></li>
          <li><a @click="smoothScroll('#comments')">Comments</a></li>
        </ul>
      </div>
    </nav>

    <!-- Button to toggle navbar position -->
    <button class="toggle-btn" @click="toggleNavbar">
      <span v-if="!isMoved">⬆️</span>
      <span v-if="isMoved">⬇️</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMoved: false,
      isMobileOpen: false
    };
  },
  methods: {
    smoothScroll(target) {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      this.isMobileOpen = false;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
      this.isMobileOpen = false;
    },
    toggleNavbar() {
      this.isMoved = !this.isMoved;
    },
    toggleMobileMenu() {
      this.isMobileOpen = !this.isMobileOpen;
    }
  }
};
</script>

<style scoped>
.navbar {
  background: linear-gradient(90deg, #121212, #1a1a1a);
  padding: 20px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: top 0.6s ease-in-out, transform 0.6s ease-in-out;
}

.navbar-move {
  top: -100%;
  transform: translateY(-100px);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  font-size: 2.5em;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  letter-spacing: 2px;
  transition: color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
}

.logo:hover {
  color: #1db954;
  transform: scale(1.1);
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 30px;
}

.nav-menu a {
  font-size: 1.1em;
  color: #ddd;
  text-decoration: none;
  padding: 10px;
  transition: color 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
  border-radius: 5px;
}

.nav-menu a:hover {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

/* Toggle button */
.toggle-btn {
  background-color: #137fd8;
  color: #fff;
  border: none;
  padding: 12px 18px;
  font-size: 1.2em;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.3s ease, background-color 0.3s ease;
  position: fixed;
  bottom: 100px;
  right: 20px;
  z-index: 1000;
}

.toggle-btn:hover {
  transform: scale(1.1);
  background-color: #1aaf47;
}

/* Mobile Menu */
.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;
}

.hamburger span {
  display: block;
  width: 30px;
  height: 3px;
  background: white;
  transition: transform 0.4s ease-in-out;
}

.hamburger .open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger .open:nth-child(2) {
  opacity: 0;
}

.hamburger .open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }
  .nav-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: #1a1a1a;
    padding: 20px;
  }
  .nav-menu.mobile-show {
    display: flex;
  }
}
</style>
