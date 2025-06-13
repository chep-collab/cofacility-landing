<template>
  <nav style="display: flex; justify-content: space-between; align-items: center; padding: 1rem;">
    <div style="font-weight: bold; font-size: 1.3rem; letter-spacing: 1px;">
      Facility Hub
    </div>
    <div style="display: flex; gap: 1.5rem;">
      <a href="#about" style="text-decoration: none; color: #333;">About</a>
      <a href="#features" style="text-decoration: none; color: #333;">Features</a>
      <router-link to="/login" style="text-decoration: none; color: #333;">Login</router-link>
      <router-link to="/signup" style="text-decoration: none; color: #333;">Signup</router-link>
      <a
        href="https://wa.me/07000000000"
        target="_blank"
        rel="noopener"
        style="text-decoration: none; color: #25d366; font-weight: bold;"
      >Contact Us</a>
    </div>
  </nav>
  <div style="text-align: center; margin-top: 3rem;">
    <h2>Contact Us</h2>
    <p>Reach us directly on WhatsApp for support or inquiries.</p>
    <a
      href="https://wa.me/07000000000"
      target="_blank"
      rel="noopener"
      style="display: inline-block; margin: 1rem 0; padding: 0.75rem 2rem; background: #25d366; color: #fff; border-radius: 4px; font-size: 1.1rem; font-weight: bold; text-decoration: none;"
    >Chat on WhatsApp</a>
    <br />
    <router-link
      to="/"
      style="display: inline-block; margin-top: 1.5rem; padding: 0.75rem 2rem; background: #222; color: #fff; border-radius: 4px; font-size: 1.1rem; font-weight: bold; text-decoration: none;"
    >Back Home</router-link>
  </div>
</template>