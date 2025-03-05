<template>
    <footer class="footer">
      <div class="container">
        <div class="contact-info">
          <a href="https://www.linkedin.com/in/ric-brian-boado/" target="_blank" class="footer-link">LinkedIn</a> | 
          <a href="https://github.com/birccy" target="_blank" class="footer-link">GitHub</a> | 
          <a href="mailto:ricbrian1234@gmail.com" class="footer-link">ricbrian1234@gmail.com</a> | 
          <a href="tel:+639953008727" class="footer-link">+63 995 300 8727</a>
        </div>
        <p class="footer-text">© 2024 Ric Brian P. Boado. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
    export default {
      name: "Footer",
    };
  </script>
  
  <style scoped>
  /* Footer Styles */
  .footer {
    background-color: #222222;
    color: #fff;
    padding: 40px 0;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
  
  .contact-info {
    margin-bottom: 20px;
  }
  
  .footer-link {
    color: #fff;
    text-decoration: none;
    font-size: 1.1em;
    transition: color 0.3s ease;
  }
  
  .footer-link:hover {
    color: #ff6b6b; /* Adding hover color to make it pop */
  }
  
  .footer-text {
    font-size: 0.9em;
    color: #bbb;
    margin-top: 10px;
  }
  </style>
  