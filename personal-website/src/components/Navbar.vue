<template>
    <div>
      <nav class="navbar" :class="{'navbar-move': isMoved}">
        <div class="container">
          <a href="#" class="logo">RB</a>
          <ul class="nav-menu">
            <li><a @click="smoothScroll('#about')">About</a></li>
            <li><a @click="smoothScroll('#education')">Education</a></li>
            <li><a @click="smoothScroll('#experience')">Experience</a></li>
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
        isMoved: false, // Keeps track of the navbar position
      };
    },
    methods: {
      smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      },
      toggleNavbar() {
        this.isMoved = !this.isMoved; // Toggle the navbar movement
      },
    },
  };
  </script>
  
  <style scoped>
  /* Navbar styling */
  .navbar {
    background-color: #121212; /* Dark background for the navbar */
    padding: 20px 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 999;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    transition: top 0.6s ease-in-out, transform 0.6s ease-in-out; /* Smooth transition for movement */
    will-change: top, transform;
  }
  
  .navbar-move {
    top: -100%; /* Move navbar completely out of view */
    transform: translateY(-100px); /* Adds a subtle sliding effect */
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
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5em;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    letter-spacing: 2px;
    transition: color 0.3s ease, transform 0.3s ease;
  }
  
  .logo:hover {
    color: #1db954; /* Green color on hover */
    transform: scale(1.1);
  }
  
  .nav-menu {
    list-style: none;
    display: flex;
    gap: 30px;
  }
  
  .nav-menu li {
    display: inline-block;
  }
  
  .nav-menu a {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.1em;
    color: #ddd;
    text-decoration: none;
    padding: 10px;
    transition: color 0.3s ease, transform 0.3s ease;
  }
  
  .nav-menu a:hover {
    color: #fff;
    transform: translateY(-3px); /* Slight upward movement on hover */
  }
  
  .nav-menu a.active {
    color: #1db954; /* Green color for active link */
  }
  
  /* Button to toggle navbar position */
  .toggle-btn {
    background-color: #1db954; /* Green button color */
    color: #fff;
    border: none;
    padding: 12px 18px;
    font-size: 1.2em;
    cursor: pointer;
    border-radius: 8px;
    transition: transform 0.3s ease, background-color 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    position: fixed;
    bottom: 20px;
    right: 20px; /* Position the button at the bottom right of the screen */
  }
  
  .toggle-btn:hover {
    transform: scale(1.1);
    background-color: #1aaf47; /* Darker green on hover */
  }
  
  .toggle-btn:focus {
    outline: none;
  }
  </style>
  