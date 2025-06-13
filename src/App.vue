<template>
  <nav class="main-nav">
    <div class="nav-brand">
      Facility Hub
    </div>
    <div class="nav-links">
      <a href="#about">About Us</a>
      <a href="#features">Features</a>
      <a
        href="https://wa.me/yourwhatsappphonenumber"
        target="_blank"
        rel="noopener"
      >Contact</a>
      <span class="nav-space"></span>
      <router-link to="/login" class="login-btn">Login</router-link>
      <router-link to="/signup" class="signup-btn">Signup</router-link>
    </div>
  </nav>
  <router-view />
</template>

<script setup>
// No script needed
</script>

<style>
body {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
  background: #fff;
}
.nav-brand {
  font-weight: bold;
  font-size: 1.3rem;
  letter-spacing: 1px;
}
.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}
.nav-links .nav-space {
  display: inline-block;
  width: 2rem;
}
.nav-links a,
.nav-links .router-link-active,
.nav-links .router-link-exact-active {
  text-decoration: none;
  color: #333;
  font-size: 1rem;
}
.login-btn {
  background: none;
  color: #333 !important;
  padding: 0.5rem 1.2rem;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
  border: 1px solid #ccc;
  transition: background 0.2s, border 0.2s;
}
.login-btn:hover {
  background: #f3f3f3;
  border: 1px solid #888;
}
.signup-btn {
  background: #00c853;
  color: #fff !important;
  padding: 0.5rem 1.2rem;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.2s;
  border: none;
  margin-left: 0.5rem;
}
.signup-btn:hover {
  background: #009e3c;
  color: #fff !important;
}
/* Responsive Navbar */
@media (max-width: 700px) {
  .main-nav {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem 0.5rem;
  }
  .nav-brand {
    margin-bottom: 0.5rem;
  }
  .nav-links {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
  .nav-links .nav-space {
    display: none;
  }
  .nav-links a,
  .nav-links .router-link-active,
  .nav-links .router-link-exact-active,
  .login-btn,
  .signup-btn {
    font-size: 1.1rem;
    padding: 0.5rem 0;
    display: block;
    margin-left: 0;
  }
}
</style>