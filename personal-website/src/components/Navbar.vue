<template>
  <div>
    <nav class="navbar" :class="{ 'navbar-move': isMoved, 'navbar-expanded': isExpanded }">
      <div class="container">
        <a href="#" class="logo">RB</a>

        <!-- Hamburger Menu Button -->
        <button class="hamburger" @click="toggleMenu">
          <span :class="{ 'open': isExpanded }"></span>
          <span :class="{ 'open': isExpanded }"></span>
          <span :class="{ 'open': isExpanded }"></span>
        </button>

        <ul class="nav-menu" :class="{ 'show': isExpanded }">
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
      isMoved: false, // Tracks navbar position
      isExpanded: false // Tracks menu expansion on mobile
    };
  },
  methods: {
    smoothScroll(target) {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.isExpanded = false; // Close menu after clicking
      }
    },
    toggleNavbar() {
      this.isMoved = !this.isMoved; // Toggle navbar movement
    },
    toggleMenu() {
      this.isExpanded = !this.isExpanded; // Toggle mobile menu
    }
  }
};
</script>

<style scoped>
/* Navbar styling */
.navbar {
  background: linear-gradient(90deg, #121212, #1a1a1a);
  padding: 20px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.6s ease-in-out; /* Smooth transition */
}

.navbar-move {
  transform: translateY(-100%); /* Moves navbar out of view */
}

/* Hamburger Menu for Mobile */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  gap: 5px;
  z-index: 1001;
  position: absolute;
  right: 20px;
  top: 25px;
}

.hamburger span {
  width: 30px;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease;
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

/* Nav Menu */
.nav-menu {
  list-style: none;
  display: flex;
  gap: 30px;
}

.nav-menu a {
  color: #ddd;
  text-decoration: none;
  padding: 10px;
  transition: color 0.3s ease;
}

.nav-menu a:hover {
  color: #fff;
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 80px;
    right: 20px;
    background: rgba(0, 0, 0, 0.9);
    padding: 15px;
    border-radius: 10px;
    text-align: right;
  }

  .nav-menu.show {
    display: flex;
  }
}

/* Toggle Button */
.toggle-btn {
  position: fixed;
  bottom: 100px;
  right: 20px;
  z-index: 1000;
}
</style>