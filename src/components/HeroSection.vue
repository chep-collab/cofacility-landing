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
<!-- filepath: c:\Users\Admin\cofacility-landing\src\components\HeroSection.vue -->
<!-- ...existing template code... -->

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

/* Responsive styles */
@media (max-width: 900px) {
  .hero-section {
    flex-direction: column !important;
    text-align: center;
    padding: 1.2rem;
  }
  .hero-content, .hero-image {
    max-width: 100% !important;
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
  .hero-buttons button {
    width: 100%;
    margin-bottom: 0.5rem;
  }
}
@media (max-width: 600px) {
  .hero-section {
    padding: 1rem 0.2rem 2rem 0.2rem;
    gap: 1rem;
  }
  .hero-content {
    padding: 0;
  }
  .hero-image img {
    max-width: 100vw;
    height: auto;
  }
}
</style>