<template>
    <section id="gallery" class="section fade-in dark-section">
      <div class="container">
        <h2>Memorable Moments</h2>
        <div class="gallery-grid">
          <div v-for="image in images" :key="image.id" class="gallery-item" @click="openLightbox(image)">
            <img :src="image.url" :alt="image.caption">
            <div class="image-caption">{{ image.caption }}</div>
          </div>
        </div>
  
        <!-- Lightbox -->
        <div v-if="showLightbox" class="lightbox" @click.self="showLightbox = false">
          <div class="lightbox-content">
            <span class="close" @click="showLightbox = false">&times;</span>
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
          { id: 1, url: 'https://i.postimg.cc/dZRKCzfc/mphoto1.jpg', caption: 'Learning to Drive' },
          { id: 2, url: 'https://i.postimg.cc/9rV22Q4m/mphoto2.jpg', caption: 'First Time Golfing' },
          { id: 3, url: 'https://i.postimg.cc/Dm1hRXwp/mphoto3.jpg', caption: 'Christmas Aftering Breaking up </3' },
          { id: 4, url: 'https://i.postimg.cc/CBq0hZH1/mphoto4.jpg', caption: 'Buying My First Own Laptop' }
        ],
        showLightbox: false,
        selectedImage: null
      }
    },
    methods: {
      openLightbox(image) {
        this.selectedImage = image;
        this.showLightbox = true;
      }
    }
  }
  </script>
  
  <style scoped>
  /* Gallery Section */
  #gallery {
    background-color: #f4f4f4;
    padding: 60px 0;
    text-align: center;
  }
  
  .container {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 20px;
    border-radius: 8px;
  }
  
  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5em;
    color: #fff;
    margin-bottom: 30px;
  }
  
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 0 10px;
  }
  
  .gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .gallery-item:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  
  .image-caption {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    padding: 10px;
    font-size: 1.2em;
    text-align: center;
    border-radius: 0 0 8px 8px;
  }
  
  /* Lightbox */
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .lightbox-content {
    position: relative;
    max-width: 90%;
    max-height: 80%;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 2em;
    color: #fff;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  
  .close:hover {
    color: #ff6b6b;
  }
  
  .lightbox-image {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
  }
  
  .lightbox-caption {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2em;
    padding: 20px;
    text-align: center;
    color: #333;
  }
  </style>
  