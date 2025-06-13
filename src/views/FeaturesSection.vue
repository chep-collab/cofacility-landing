<template>
  <!-- Hero Section -->
  <section style="display: flex; align-items: center; gap: 2.5rem; padding: 2rem 0 3rem 0;">
    <div style="flex: 1;">
      <h1 class="hero-animate" style="font-size: 2.8rem; font-weight: bold; margin-bottom: 1rem; line-height: 1.1;">
        Effortless<br />
        Training Center<br />
        Management
      </h1>
      <p style="font-size: 1.2rem; margin-bottom: 2rem;">
        Manage your facilities (workspaces, gyms, etc.), users, subscriptions, and services in one place.
      </p>
      <div style="display: flex; gap: 1rem;">
        <button style="padding: 0.75rem 2rem; background: #00c853; color: #fff; border: none; border-radius: 4px; font-size: 1rem; font-weight: bold; cursor: pointer;">
          Get Started
        </button>
        <button style="padding: 0.75rem 2rem; background: #fff; color: #222; border: 1px solid #222; border-radius: 4px; font-size: 1rem; font-weight: bold; cursor: pointer;">
          Book A Demo
        </button>
      </div>
    </div>
    <img src="@/assets/hero-image.png" alt="Training Center Management" style="max-width: 400px; border-radius: 16px; box-shadow: 0 2px 16px rgba(0,0,0,0.08);" />
  </section>

  <!-- Features Title -->
  <h1 style="text-align:center; font-size: 2.8rem; font-weight: bold; margin-bottom: 2.5rem;">
    All Your Facility Needs in a Unified Solution
  </h1>

  <!-- Features Cards -->
  <div style="display: flex; flex-wrap: wrap; gap: 2rem; justify-content: center; margin-bottom: 3rem;">
    <div style="background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); padding: 2rem; flex: 1 1 280px; max-width: 320px; min-width: 260px;">
      <h3 style="font-weight: bold;">Service Management</h3>
      <p>
        Easily add, update, activate, or deactivate services like shared workspaces, gym services, etc. and set prices—all in one place.
      </p>
    </div>
    <div style="background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); padding: 2rem; flex: 1 1 280px; max-width: 320px; min-width: 260px;">
      <h3 style="font-weight: bold;">User Onboarding & App Access</h3>
      <p>
        Invite users to your facility for instant access to services and streamlined onboarding. They also get a web app for easy service access.
      </p>
    </div>
    <div style="background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); padding: 2rem; flex: 1 1 280px; max-width: 320px; min-width: 260px;">
      <h3 style="font-weight: bold;">Subscription Tracking</h3>
      <p>
        Track all user subscriptions to your services, helping you manage engagement and renewals.
      </p>
    </div>
    <div style="background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); padding: 2rem; flex: 1 1 280px; max-width: 320px; min-width: 260px;">
      <h3 style="font-weight: bold;">Automated Renewal Reminders</h3>
      <p>
        Automatic reminders notify users when subscriptions are about to expire, ensuring seamless renewals.
      </p>
    </div>
    <div style="background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); padding: 2rem; flex: 1 1 280px; max-width: 320px; min-width: 260px;">
      <h3 style="font-weight: bold;">Quick Booking <span style="color: #007bff;">(Coming Soon)</span></h3>
      <p>
        Users can scan a QR code to instantly book services, making facility access fast and easy.
      </p>
    </div>
    <div style="background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); padding: 2rem; flex: 1 1 280px; max-width: 320px; min-width: 260px;">
      <h3 style="font-weight: bold;">Centralized Management Dashboard <span style="color: #007bff;">(Coming Soon)</span></h3>
      <p>
        Access all your management tools in one intuitive dashboard—no more juggling multiple apps.
      </p>
    </div>
  </div>

  <!-- Revolutionize Section -->
  <div style="margin-top: 3rem; padding: 2rem; background: #e6f9ed; border-radius: 8px; text-align: center;">
    <h2 style="font-size: 2.2rem; font-weight: bold; color: #222;">
      Revolutionize Your Facility Experience with Satisfaction
    </h2>
    <p style="margin: 1rem 0; color: #222;">
      Facility Hub provides the tools you need to manage and connect your spaces efficiently. Schedule a demo to learn more.
    </p>
    <button style="padding: 0.75rem 2rem; background: #222; color: #fff; border: none; border-radius: 4px; font-size: 1rem; cursor: pointer;">
      Book a Demo
    </button>
  </div>

  <!-- About Section (anchor target) -->
  <section id="about" style="padding: 2rem; display: flex; align-items: center; gap: 2rem;">
    <div style="flex: 1;">
      <h1>Who We Are</h1>
      <p>
        Facility Hub is a comprehensive platform for workspace owners and users. Workspace owners can list and manage their available services, invite users to join and subscribe to their services, and manage subscriptions in one app.
      </p>
      <p>
        Users benefit from a streamlined subscription experience and access to personalized dashboards, making it easy to find and book spaces that suit their needs.
      </p>
    </div>
    <img src="@/assets/image.png" alt="About Facility Hub" style="max-width: 350px; border-radius: 12px; box-shadow: 0 2px 16px rgba(0,0,0,0.08);" />
  </section>
</template>

<style>
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
</style>