<template>
    <footer class="footer">
      <div class="container">
        <div class="contact-info">
          <a href="https://www.linkedin.com/in/ric-brian-boado/" target="_blank" class="footer-link">
            <i class="fab fa-linkedin"></i> LinkedIn
          </a> 
          <span class="divider">|</span>
          <a href="https://github.com/birccy" target="_blank" class="footer-link">
            <i class="fab fa-github"></i> GitHub
          </a>
          <span class="divider">|</span>
          <a href="mailto:ricbrian1234@gmail.com" class="footer-link">
            <i class="fas fa-envelope"></i> Email
          </a>
          <span class="divider">|</span>
          <a href="tel:+639953008727" class="footer-link">
            <i class="fas fa-phone"></i> +63 995 300 8727
          </a>
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
  /* Footer Section */
  .footer {
    background: linear-gradient(to right, #0a192f, #020c1b); /* Smooth dark gradient */
    color: #ffffff;
    padding: 40px 0;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    width: 100%;
    margin: 0; /* Remove any unwanted margin */
    padding-top: 0; /* Remove top padding */
    position: relative;
    overflow: hidden;
  }
  
  /* Footer Container */
  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  /* Contact Info */
  .contact-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    align-items: center;
    margin-bottom: 15px;
  }
  
  /* Footer Links */
  .footer-link {
    color: #64ffda;
    text-decoration: none;
    font-size: 1.1em;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  
  .footer-link i {
    font-size: 1.2em;
  }
  
  /* Hover Effect */
  .footer-link:hover {
    color: #ffffff;
    text-shadow: 0 0 10px rgba(100, 255, 218, 0.8);
  }
  
  /* Divider */
  .divider {
    color: rgba(255, 255, 255, 0.3);
    font-size: 1.2em;
  }
  
  /* Footer Text */
  .footer-text {
    font-size: 0.9em;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 15px;
  }
  
  /* Fix unwanted spacing before footer */
  body {
    margin-bottom: 0;
    padding-bottom: 0;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .contact-info {
      flex-direction: column;
      gap: 10px;
    }
  
    .divider {
      display: none;
    }
  }
  </style>
  