<template>
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-animate hero-title">
        Effortless<br />
        Training Center<br />
        Management
      </h1>
      <p style="font-size: 1.2rem; margin-bottom: 2rem;">
        Manage your facilities (workspaces, gyms, etc.), users, subscriptions, and services in one place.
      </p>
      <div class="hero-buttons">
        <button class="get-started-btn">
          Get Started
        </button>
        <button class="demo-btn">
          Book A Demo
        </button>
      </div>
    </div>
    <div class="hero-image">
      <img src="@/assets/hero-image.png" alt="Training Center Management" />
    </div>
  </section>

  <!-- Features Section -->
  <section id="features">
    <h1 class="features-title">
      All Your Facility Needs in a Unified Solution
    </h1>
    <div class="features-cards">
      <div class="feature-card">
        <div class="feature-icon">🛠️</div>
        <h3>Service Management</h3>
        <p>Easily add, update, activate, or deactivate services like shared workspaces, gym services, etc. and set prices—all in one place.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">👥</div>
        <h3>User Onboarding & App Access</h3>
        <p>Invite users to your facility for instant access to services and streamlined onboarding. They also get a web app for easy service access.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">📊</div>
        <h3>Subscription Tracking</h3>
        <p>Track all user subscriptions to your services, helping you manage engagement and renewals.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">⏰</div>
        <h3>Automated Renewal Reminders</h3>
        <p>Automatic reminders notify users when subscriptions are about to expire, ensuring seamless renewals.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h3>Quick Booking <span style="color: #007bff;">(Coming Soon)</span></h3>
        <p>Users can scan a QR code to instantly book services, making facility access fast and easy.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">📋</div>
        <h3>Centralized Management Dashboard <span style="color: #007bff;">(Coming Soon)</span></h3>
        <p>Access all your management tools in one intuitive dashboard—no more juggling multiple apps.</p>
      </div>
    </div>
  </section>

  <!-- Revolutionize Section -->
  <div class="revolutionize-section">
    <h2>
      Revolutionize Your Facility Experience with Satisfaction
    </h2>
    <p>
      Facility Hub provides the tools you need to manage and connect your spaces efficiently. Schedule a demo to learn more.
    </p>
    <button class="revolutionize-btn">
      Book a Demo
    </button>
  </div>

  <!-- About Section -->
  <section id="about" class="about-section">
    <div>
      <h2 class="about-title">
        Who We Are
      </h2>
      <p>
        Facility Hub is a comprehensive platform for workspace owners and users. Workspace owners can list and manage their available services, invite users to join and subscribe to their services, and manage subscriptions in one app.
      </p>
      <p>
        Users benefit from a streamlined subscription experience and access to personalized dashboards, making it easy to find and book spaces that suit their needs.
      </p>
    </div>
    <div style="flex: 1; min-width: 260px; display: flex; flex-direction: column; align-items: center;">
      <img
        src="@/assets/image.png"
        alt="About Facility Hub"
        style="max-width: 350px; width: 100%; border-radius: 12px; box-shadow: 0 2px 16px rgba(0,0,0,0.08); margin-bottom: 1rem;"
      />
    </div>
  </section>

  <!-- Start Managing Section -->
  <section class="start-managing-section">
    <h2>Start Managing Your Facilities Now</h2>
    <router-link to="/signup" class="start-now-btn">Start Now</router-link>
  </section>

  <!-- Footer -->
  <footer style="text-align: center; padding: 2rem 0 1rem 0; color: #888;">
    © Copyright 2024, All Rights Reserved by FacilityHub
  </footer>
</template>

<style>
.hero-section {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding: 2rem 0 3rem 0;
  flex-wrap: wrap;
}
.hero-content {
  flex: 1;
  min-width: 260px;
}
.hero-image {
  flex: 1;
  min-width: 260px;
  display: flex;
  justify-content: center;
}
.hero-image img {
  max-width: 400px;
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
}
.hero-title {
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.1;
  color: #222;
}
.hero-animate {
  animation: fadeInUp 1.2s cubic-bezier(0.23, 1, 0.32, 1);
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.get-started-btn {
  padding: 0.75rem 2rem;
  background: #00c853;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}
.demo-btn {
  padding: 0.75rem 2rem;
  background: #fff;
  color: #222;
  border: 1px solid #222;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}
.features-title {
  text-align: center;
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 2.5rem;
}
.features-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 3rem;
}
.feature-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  padding: 2rem;
  flex: 1 1 280px;
  max-width: 320px;
  min-width: 260px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.revolutionize-section {
  margin-top: 3rem;
  padding: 2rem;
  background: #e6f9ed;
  border-radius: 8px;
  text-align: center;
}
.revolutionize-section h2 {
  font-size: 2.2rem;
  font-weight: bold;
  color: #222;
}
.revolutionize-section p {
  margin: 1rem 0;
  color: #222;
}
.revolutionize-btn {
  padding: 0.75rem 2rem;
  background: #222;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
}
.about-section {
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  justify-content: center;
}
.about-title {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
  letter-spacing: 1px;
}
.start-managing-section {
  background: #1976d2;
  color: #fff;
  text-align: center;
  padding: 3rem 1rem 3rem 1rem;
  margin: 0;
}
.start-managing-section h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  letter-spacing: 1px;
}
.start-now-btn {
  background: #fff;
  color: #1976d2 !important;
  padding: 1rem 2.5rem;
  border-radius: 4px;
  font-size: 1.3rem;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  border: none;
  cursor: pointer;
  display: inline-block;
}
.start-now-btn:hover {
  background: #e3e3e3;
  color: #0d47a1 !important;
}
footer {
  word-break: break-word;
}

/* Responsive styles */
@media (max-width: 1200px) {
  .features-cards {
    gap: 1.2rem;
  }
  .feature-card {
    padding: 1.2rem;
  }
}

@media (max-width: 900px) {
  .hero-section {
    flex-direction: column !important;
    text-align: center;
    padding: 1.2rem;
  }
  .hero-content, .hero-image {
    max-width: 100% !important;
  }
  .about-section {
    flex-direction: column !important;
    text-align: center;
    padding: 1.2rem;
  }
  .about-section > div {
    max-width: 100% !important;
  }
  .about-title {
    font-size: 2.2rem;
  }
  .features-cards {
    flex-direction: column;
    gap: 1.5rem;
  }
  .feature-card {
    max-width: 100%;
    min-width: 0;
  }
  .hero-title {
    font-size: 2rem;
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 1.3rem;
    padding: 0 0.5rem;
  }
  .features-title {
    font-size: 1.5rem;
    padding: 0 0.5rem;
  }
  .feature-card {
    padding: 1rem;
  }
  .about-title {
    font-size: 1.5rem;
    padding: 0 0.5rem;
  }
  .revolutionize-section {
    padding: 1rem;
  }
  .start-managing-section h2 {
    font-size: 1.3rem;
  }
  .start-now-btn {
    font-size: 1rem;
    padding: 0.7rem 1.2rem;
  }
  footer {
    padding: 1rem 0 0.5rem 0;
    font-size: 0.95rem;
  }
}
</style>