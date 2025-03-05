<template>
  <section id="goals" class="section fade-in dark-section">
    <div class="container">
      <h2>Life Goals</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-date">2025</div>
          <div class="timeline-content">
            <h3>🏅 PMA Cadet</h3>
            <p>Join the Philippine Military Academy's ranking of 350 to continue at Fort Del Pilar, Baguio.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">2027</div>
          <div class="timeline-content">
            <h3>🎓 Graduate with Honors</h3>
            <p>If not accepted into the PMA, graduate with honors from Asia Pacific College (APC) with a BS in Computer Science (Cybersecurity & Forensics).</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">2030+</div>
          <div class="timeline-content">
            <h3>🔒 Cybersecurity Specialist</h3>
            <p>Secure a position in the cybersecurity field, focusing on threat analysis and ethical hacking.</p>
          </div>
        </div>
        <!-- Add more timeline items as necessary -->
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
/* Goals section styles */
#goals {
  background-color: #ffffff; /* White background */
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
  margin-bottom: 30px;
  color: #000000; /* Black color for Life Goals text */
  text-align: center;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.timeline-item {
  background-color: rgba(255, 255, 255, 0.8);
  color: #333;
  padding: 20px;
  border-radius: 8px;
}

.timeline-date {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5em;
  font-weight: 700;
  color: #4caf50; /* Green for the year */
  margin-bottom: 10px;
}

.timeline-content h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.6em;
  color: #333;
  margin-bottom: 10px;
}

.timeline-content p {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.1em;
  color: #333;
}

.timeline-item:hover {
  background-color: #f4f4f4;
  transition: background-color 0.3s;
}

.timeline-item:hover .timeline-date {
  color: #2ecc71; /* Change color on hover */
}

.timeline-item:hover .timeline-content h3 {
  color: #2c3e50; /* Dark color on hover */
}
</style>
