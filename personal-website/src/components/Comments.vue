<template>
    <section id="comments" class="section fade-in dark-section">
      <div class="container">
        <h2>Leave a Message</h2>
        <div class="comment-form">
          <form @submit.prevent="submitComment">
            <input type="text" v-model="formData.name" placeholder="Your Name" required />
            <textarea v-model="formData.comment" placeholder="Your Message" required></textarea>
            <button type="submit">Post Comment</button>
          </form>
        </div>
  
        <div class="comment-list">
          <div v-for="(comment, index) in comments" :key="index" class="comment-card">
            <h3>{{ comment.name }}</h3>
            <p class="comment-date">{{ comment.date }}</p>
            <p>{{ comment.comment }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: { name: '', comment: '' },
        comments: [],
      };
    },
    methods: {
      submitComment() {
        if (this.formData.name && this.formData.comment) {
          this.comments.unshift({
            name: this.formData.name,
            comment: this.formData.comment,
            date: new Date().toLocaleString(),
          });
          localStorage.setItem('comments', JSON.stringify(this.comments));
          this.formData = { name: '', comment: '' };
        }
      },
    },
    mounted() {
      if (localStorage.getItem('comments')) {
        this.comments = JSON.parse(localStorage.getItem('comments'));
      }
    },
  };
  </script>
  
  <style scoped>
  /* General comment section styles */
  #comments {
    background-color: #f4f4f4;
    padding: 60px 0;
  }
  
  .container {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 20px;
    border-radius: 8px;
  }
  
  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #fff;
    text-align: center;
  }
  
  .comment-form {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 30px;
  }
  
  .comment-form input,
  .comment-form textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 8px;
    border: 1px solid #ddd;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.1em;
  }
  
  .comment-form button {
    background-color: #5cb85c;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1.1em;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .comment-form button:hover {
    background-color: #4cae4c;
  }
  
  /* Comment list and individual comment styling */
  .comment-list {
    margin-top: 30px;
  }
  
  .comment-card {
    background-color: rgba(255, 255, 255, 0.8);
    color: #333;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
  }
  
  .comment-card h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6em;
    margin-bottom: 10px;
    color: #333;
  }
  
  .comment-card .comment-date {
    font-family: 'Open Sans', sans-serif;
    font-size: 0.9em;
    color: #999;
    margin-bottom: 10px;
  }
  
  .comment-card p {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.1em;
    line-height: 1.6;
    color: #333;
  }
  </style>
  