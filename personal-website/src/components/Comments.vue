<template>
    <section id="comments" class="section fade-in dark-section">
      <div class="container">
        <h2>Leave a Message</h2>
        <div class="comment-form">
          <form @submit.prevent="submitComment">
            <input type="text" v-model="formData.name" placeholder="Your Name" required />
            <textarea v-model="formData.comment" placeholder="Your Message" required></textarea>
            <button type="submit" :disabled="loading">
              {{ loading ? "Posting..." : "Post Comment" }}
            </button>
          </form>
        </div>
  
        <div class="comment-list">
          <div v-for="comment in comments" :key="comment.id" class="comment-card">
            <h3>{{ comment.name }}</h3>
            <p class="comment-date">{{ formatDate(comment.created_at) }}</p>
            <p>{{ comment.comment }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { supabase } from "../supabase"; // Import Supabase instance
  
  export default {
    data() {
      return {
        formData: { name: "", comment: "" },
        comments: [],
        loading: false,
      };
    },
    methods: {
      // Fetch comments from Supabase
      async fetchComments() {
        const { data, error } = await supabase
          .from("comments")
          .select("*")
          .order("created_at", { ascending: false });
  
        if (error) {
          console.error("Error fetching comments:", error);
        } else {
          this.comments = data;
        }
      },
  
      // Submit a new comment to Supabase
      async submitComment() {
        if (!this.formData.name || !this.formData.comment) return;
  
        this.loading = true;
  
        const { error } = await supabase
          .from("comments")
          .insert([
            { 
              name: this.formData.name, 
              comment: this.formData.comment 
            }
          ]);
  
        if (error) {
          console.error("Error adding comment:", error);
        } else {
          this.formData = { name: "", comment: "" };
          this.fetchComments(); // Refresh the comment list
        }
  
        this.loading = false;
      },
  
      // Format date for display
      formatDate(dateString) {
        return new Date(dateString).toLocaleString();
      },
  
      // Listen for real-time changes in Supabase
      async listenForComments() {
        supabase
          .channel("comments")
          .on("postgres_changes", { event: "*", schema: "public", table: "comments" }, () => {
            this.fetchComments();
          })
          .subscribe();
      }
    },
    async mounted() {
      this.fetchComments();
      this.listenForComments();
    }
  };
  </script>
  
  <style scoped>
  /* Dark Themed Comment Section */
  #comments {
    background-color: #121212;
    padding: 60px 0;
  }
  
  .container {
    background: rgba(255, 255, 255, 0.05);
    padding: 30px;
    border-radius: 12px;
    backdrop-filter: blur(8px);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  }
  
  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #fff;
    text-align: center;
  }
  
  /* Comment Form */
  .comment-form {
    background-color: rgba(255, 255, 255, 0.08);
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 30px;
    transition: all 0.3s ease;
  }
  
  .comment-form input,
  .comment-form textarea {
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    border-radius: 8px;
    border: none;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.1em;
    transition: background 0.3s ease, transform 0.2s ease;
  }
  
  .comment-form input:focus,
  .comment-form textarea:focus {
    background: rgba(255, 255, 255, 0.15);
    transform: scale(1.02);
  }
  
  .comment-form button {
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    color: white;
    border: none;
    padding: 12px 20px;
    font-size: 1.1em;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: block;
    width: 100%;
  }
  
  .comment-form button:hover {
    background: linear-gradient(135deg, #2575fc, #6a11cb);
    transform: scale(1.02);
  }
  
  .comment-form button:disabled {
    background: rgba(255, 255, 255, 0.3);
    cursor: not-allowed;
  }
  
  /* Comment List */
  .comment-list {
    margin-top: 30px;
  }
  
  .comment-card {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    transition: transform 0.3s ease, background 0.3s ease;
  }
  
  .comment-card:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: scale(1.02);
  }
  
  .comment-card h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4em;
    margin-bottom: 10px;
  }
  
  .comment-card .comment-date {
    font-family: 'Open Sans', sans-serif;
    font-size: 0.9em;
    color: #aaa;
    margin-bottom: 10px;
  }
  
  .comment-card p {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.1em;
    line-height: 1.6;
  }
  </style>
  