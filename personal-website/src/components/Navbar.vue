<template>
  <div>
    <nav class="navbar" :class="{'navbar-move': isMoved, 'mobile-open': isMobileOpen}">
      <div class="container">
        <a href="#" class="logo" @click.prevent="scrollToTop">RB</a>
        
        <!-- Hamburger menu button for mobile -->
        <button class="hamburger" @click="toggleMobileMenu" aria-label="Toggle menu">
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
    <button class="toggle-btn" @click="toggleNavbar" aria-label="Toggle navigation">
      <span v-if="!isMoved">⬆️</span>
      <span v-else>⬇️</span>
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
        const offset = 80; // Navbar height
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
      this.isMobileOpen = false;
    },
    scrollToTop() {
      this.isMoved = false; // Reset navbar position
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      });
      this.isMobileOpen = false;
    },
    toggleNavbar() {
      this.isMoved = !this.isMoved;
    },
    toggleMobileMenu() {
      this.isMobileOpen = !this.isMobileOpen;
      if (this.isMobileOpen) {
        document.addEventListener('click', this.handleClickOutside);
      } else {
        document.removeEventListener('click', this.handleClickOutside);
      }
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isMobileOpen = false;
        document.removeEventListener('click', this.handleClickOutside);
      }
    },
    handleResize() {
      if (window.innerWidth > 768) {
        this.isMobileOpen = false;
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
    document.removeEventListener('click', this.handleClickOutside);
  }
};
</script>

<style scoped>
:root {
  --nav-height: 80px;
  --bg-color: #121212;
  --accent-color: #1db954;
}

html {
  scroll-padding-top: var(--nav-height);
}

.navbar {
  background: linear-gradient(90deg, var(--bg-color), #1a1a1a);
  height: var(--nav-height);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}

.navbar-move {
  transform: translateY(-100%);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
}

.logo {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  letter-spacing: 2px;
  transition: color 0.3s ease;
}

.logo:hover {
  color: var(--accent-color);
}

.nav-menu {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-menu a {
  color: #ddd;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.nav-menu a:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.toggle-btn {
  background: #137fd8;
  color: #fff;
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  position: fixed;
  bottom: 100px;
  right: 20px;
  z-index: 1000;
  cursor: pointer;
  transition: all 0.3s ease;
}

.toggle-btn:hover {
  background: #1aaf47;
  transform: scale(1.1);
}

.hamburger {
  display: none;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 1000;
}

.hamburger span {
  display: block;
  width: 30px;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger span:not(:last-child) {
  margin-bottom: 5px;
}

.hamburger .open:first-child {
  transform: translateY(8px) rotate(45deg);
}

.hamburger .open:nth-child(2) {
  opacity: 0;
}

.hamburger .open:last-child {
  transform: translateY(-8px) rotate(-45deg);
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
  
  .nav-menu {
    position: fixed;
    top: var(--nav-height);
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    background: var(--bg-color);
    padding: 2rem;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    overflow-y: auto;
  }
  
  .nav-menu.mobile-show {
    transform: translateX(0);
  }
}
</style>