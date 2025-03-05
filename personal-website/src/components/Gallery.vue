<template>
    <section id="gallery" class="section fade-in dark-section">
      <div class="container">
        <h2>Some of My Memorable Moments</h2>
        <div class="gallery-grid">
          <div v-for="image in images" :key="image.id" class="gallery-item" @click="openLightbox(image)">
            <img :src="image.url" :alt="image.caption" class="gallery-img">
            <div class="image-caption">{{ image.caption }}</div>
          </div>
        </div>
  
        <!-- Lightbox -->
        <div v-if="showLightbox" class="lightbox" @click.self="showLightbox = false">
          <div class="lightbox-content">
            <span class="close" @click="showLightbox = false" @mouseover="hoverClose" @mouseleave="leaveClose">&times;</span>
            <img :src="selectedImage.url" :alt="selectedImage.caption" class="lightbox-image">
            <p class="lightbox-caption">{{ selectedImage.caption }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          { id: 1, url: '/images/firstlaptop.jpg', caption: 'Buying My First Own Laptop' },
          { id: 2, url: '/images/golfingphoto.jpg', caption: 'First Time Golfing' },
          { id: 3, url: '/images/max.jpg', caption: 'In Remembrance of Max' },
          { id: 4, url: '/images/ictclub.jpg', caption: 'First Project as an ICT Club in JHS' },
          { id: 5, url: '/images/properfamilyphoto.jpg', caption: 'First Proper Family Photo' },
          { id: 6, url: '/images/onlygoodphotoasakid.jpg', caption: 'My Actually Only Cute Looking Photo' }
        ],
        showLightbox: false,
        selectedImage: null
      }
    },
    methods: {
      openLightbox(image) {
        this.selectedImage = image;
        this.showLightbox = true;
      },
      hoverClose(event) {
        event.target.style.transform = 'scale(1.2)';
        event.target.style.transition = 'transform 0.2s ease-in-out';
      },
      leaveClose(event) {
        event.target.style.transform = 'scale(1)';
      }
    }
  }
  </script>
  
  <style scoped>
  /* Dark Theme Background */
  #gallery {
    background: #0a192f;
    padding: 80px 0;
    text-align: center;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  /* Title Styling */
  h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 3em;
    color: #64ffda;
    margin-bottom: 40px;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
  }
  
  h2::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: #64ffda;
    margin: 10px auto 0;
  }
  
  /* Gallery Grid */
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
  }
  
  /* Gallery Item */
  .gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
  }
  
  .gallery-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  .gallery-item:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
  }
  
  /* Image Caption */
  .image-caption {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 12px;
    font-size: 1.1em;
    font-weight: 600;
    text-align: center;
  }
  
  /* Lightbox */
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    padding: 20px;
  }
  
  .lightbox-content {
    position: relative;
    max-width: 80%;
    max-height: 80%;
    background: #121212;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
  }
  
  /* Close Button */
  .close {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 3em;
    color: #ff6b6b;
    cursor: pointer;
    font-weight: bold;
    z-index: 1100;
    background: rgba(0, 0, 0, 0.7);
    padding: 5px 10px;
    border-radius: 5px;
    transition: transform 0.2s ease-in-out;
  }
  
  .close:hover {
    color: #ff4040;
    transform: scale(1.2);
  }
  
  .lightbox-image {
    max-width: 90%;
    max-height: 80vh;
    object-fit: contain;
  }
  </style>
