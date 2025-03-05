<template>
  <section id="goals" class="section fade-in dark-section">
    <div class="container">
      <h2>Current Life Goals</h2>
      <div class="timeline">
        <div v-for="goal in goals" :key="goal.date" class="timeline-item">
          <div class="timeline-date">{{ goal.date }}</div>
          <div class="timeline-content">
            <h3>{{ goal.title }}</h3>
            <p>{{ goal.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      goals: [
        {
          date: "2025",
          title: "🏅 PMA Cadet",
          description:
            "Join the Philippine Military Academy's ranking of 350 to continue at Fort Del Pilar, Baguio."
        },
        {
          date: "2027",
          title: "🎓 Graduate with Honors",
          description:
            "If not accepted into the PMA, graduate with honors from Asia Pacific College (APC) with a BS in Computer Science (Cybersecurity & Forensics)."
        },
        {
          date: "2030+",
          title: "🔒 Cybersecurity Specialist",
          description:
            "Secure a position in the cybersecurity field, focusing on threat analysis and ethical hacking."
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Goals Section */
#goals {
  background: #0a192f; /* Dark navy blue */
  padding: 80px 0;
  text-align: center;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

/* Title Styling */
h2 {
  font-family: 'Poppins', sans-serif;
  font-size: 2.5em;
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

/* Timeline */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  width: 4px;
  height: 100%;
  background: rgba(100, 255, 218, 0.5);
  transform: translateX(-50%);
}

/* Timeline Items */
.timeline-item {
  background: rgba(255, 255, 255, 0.1);
  color: #ccd6f6;
  padding: 20px;
  border-radius: 8px;
  width: 45%;
  position: relative;
  text-align: left;
  transition: transform 0.3s ease, background 0.3s ease;
}

.timeline-item:nth-child(odd) {
  align-self: flex-start;
}

.timeline-item:nth-child(even) {
  align-self: flex-end;
}

.timeline-item:hover {
  background: rgba(100, 255, 218, 0.15);
  transform: scale(1.05);
}

/* Timeline Date */
.timeline-date {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5em;
  font-weight: 700;
  color: #64ffda;
  margin-bottom: 10px;
}

/* Timeline Content */
.timeline-content h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.6em;
  color: #fff;
  margin-bottom: 10px;
}

.timeline-content p {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.1em;
  color: #ccd6f6;
}

/* Dotted Connector */
.timeline-item::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 100%;
  width: 16px;
  height: 16px;
  background: #64ffda;
  border-radius: 50%;
  transform: translateY(-50%);
}

.timeline-item:nth-child(even)::before {
  left: -20px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    width: 100%;
    align-self: center !important;
    text-align: left;
    padding-left: 40px;
  }

  .timeline-item::before {
    left: 10px;
  }
}
</style>
