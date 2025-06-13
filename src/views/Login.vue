<template>
  <section style="max-width: 400px; margin: 3rem auto; padding: 2rem; border-radius: 12px; box-shadow: 0 2px 16px rgba(0,0,0,0.08); background: #fff;">
    <button style="width: 100%; margin-bottom: 1.5rem; background: #f5f5f5; color: #007bff; border: none; border-radius: 4px; padding: 0.75rem; font-weight: bold; cursor: pointer;">
      Are you a facility user? Click here to login
    </button>
    <h2 style="text-align: center; margin-bottom: 1.5rem;">Facility Admin Login</h2>
    <form>
      <input type="email" placeholder="Email" style="width: 100%; margin-bottom: 1rem; padding: 0.75rem; border-radius: 4px; border: 1px solid #ccc;" />
      <input type="password" placeholder="Password" style="width: 100%; margin-bottom: 1rem; padding: 0.75rem; border-radius: 4px; border: 1px solid #ccc;" />
      <button type="submit" style="width: 100%; background: #007bff; color: #fff; border: none; border-radius: 4px; padding: 0.75rem; font-weight: bold; margin-bottom: 1rem;">
        Login
      </button>
    </form>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
      <router-link to="/signup" style="color: #007bff;">Signup</router-link>
      <a href="#" style="color: #007bff;">Forgot password?</a>
    </div>
    <router-link to="/" style="display: block; text-align: center; background: #f5f5f5; color: #222; border-radius: 4px; padding: 0.75rem; font-weight: bold; text-decoration: none;">
      Back Home
    </router-link>
  </section>
</template>