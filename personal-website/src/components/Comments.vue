<template>
  <section id="comments" class="section fade-in dark-section">
    <div class="container">
      <h2>Leave a Message</h2>

      <div class="comment-form">
        <form @submit.prevent="submitComment">
          <input 
            type="text" 
            v-model="formData.name" 
            placeholder="Your Name" 
            required 
          />
          <textarea 
            v-model="formData.comment" 
            placeholder="Your Message" 
            required
          ></textarea>
          <button type="submit" :disabled="loading">
            {{ loading ? "Posting..." : "Post Comment" }}
          </button>
        </form>
      </div>

      <div class="comment-list">
        <div v-if="commentsLoading" class="loading">Loading comments...</div>
        <div v-else>
          <div v-for="comment in comments" :key="comment.id" class="comment-card">
            <h3>{{ comment.name }}</h3>
            <p class="comment-date">{{ formatDate(comment.date) }}</p>
            <p class="comment-content">{{ comment.comment }}</p>
          </div>
          <div v-if="comments.length === 0" class="no-comments">
            No comments yet. Be the first to share your thoughts!
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { supabase } from "../supabase";

export default {
  data() {
    return {
      formData: { name: "", comment: "" },
      comments: [],
      loading: false,
      commentsLoading: true,
      error: null
    };
  },
  methods: {
    async fetchComments() {
      this.commentsLoading = true;
      try {
        const { data, error } = await supabase
          .from("comments")
          .select("*")
          .order("date", { ascending: false });

        if (error) throw error;
        console.log("✅ Comments fetched:", data); // Debugging log
        this.comments = data;
      } catch (error) {
        console.error("❌ Error fetching comments:", error.message);
        this.error = "Failed to load comments. Please try again later.";
      } finally {
        this.commentsLoading = false;
      }
    },

    async submitComment() {
      if (!this.formData.name || !this.formData.comment) return;

      this.loading = true;
      try {
        const { error } = await supabase.from("comments").insert([{
          name: this.formData.name,
          comment: this.formData.comment,
        }]);

        if (error) throw error;

        this.formData = { name: "", comment: "" };
        await this.fetchComments(); // Refresh comments after submission
      } catch (error) {
        console.error("❌ Error adding comment:", error.message);
        this.error = "Failed to post comment. Please try again.";
      } finally {
        this.loading = false;
      }
    },

    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    },

    listenForComments() {
      supabase
        .channel('comments-channel')
        .on('postgres_changes', {
          event: '*',
          schema: 'public',
          table: 'comments',
        }, () => this.fetchComments())
        .subscribe();
    }
  },
  async mounted() {
    await this.fetchComments();
    this.listenForComments();
  },
};
</script>

<style scoped>
/* Dark theme styling */
#comments {
  background-color: #1a1a1a;
  padding: 4rem 0;
  min-height: 100vh;
}

/* Container */
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(25, 25, 25, 0.95);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  overflow: hidden; /* Prevent content from expanding outside */
}

/* Title */
h2 {
  color: #fff;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 500;
}

/* Form styling */
.comment-form {
  margin-bottom: 3rem;
}

/* Input and Textarea */
input, textarea {
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  transition: all 0.2s ease;
  box-sizing: border-box; /* Prevents width from overflowing */
}

/* Animation for focus */
input:focus, textarea:focus {
  outline: none;
  border-color: #646cff;
  background: rgba(100, 108, 255, 0.05);
  box-shadow: 0 0 10px rgba(100, 108, 255, 0.5);
  transform: scale(1.01); /* Slight scale without overflowing */
}

/* Button */
button {
  background: linear-gradient(45deg, #646cff, #9b4dff);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: transform 0.2s ease;
}

button:hover {
  transform: translateY(-2px);
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Comments list */
.comment-list {
  margin-top: 2rem;
}

/* Comment card */
.comment-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
}

.comment-card h3 {
  color: #fff;
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
}

/* Date styling */
.comment-date {
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

/* Comment content */
.comment-content {
  color: #ccc;
  line-height: 1.6;
  margin: 0;
}

/* Loading & No Comments */
.loading, .no-comments {
  color: #888;
  text-align: center;
  padding: 2rem;
  font-style: italic;
}

/* Error message */
.error {
  color: #ff4444;
  text-align: center;
  padding: 1rem;
}
</style>
