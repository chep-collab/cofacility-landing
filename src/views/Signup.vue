<template>
  <section style="max-width: 450px; margin: 3rem auto; padding: 2rem; border-radius: 12px; box-shadow: 0 2px 16px rgba(0,0,0,0.08); background: #fff;">
    <button style="width: 100%; margin-bottom: 1.5rem; background: #f5f5f5; color: #007bff; border: none; border-radius: 4px; padding: 0.75rem; font-weight: bold; cursor: pointer;">
      Are you a facility user? Click here to signup
    </button>
    <h2 style="text-align: center; margin-bottom: 1rem;">Facility Admin Signup</h2>
    <p style="text-align: center; margin-bottom: 2rem;">Create an account to manage your facility</p>
    <form>
      <input type="text" placeholder="Company/Facility Name" style="width: 100%; margin-bottom: 1rem; padding: 0.75rem; border-radius: 4px; border: 1px solid #ccc;" />
      <input type="text" placeholder="Enter your facility name" style="width: 100%; margin-bottom: 1rem; padding: 0.75rem; border-radius: 4px; border: 1px solid #ccc;" />
      <label style="display: flex; align-items: center; margin-bottom: 1rem;">
        <input type="checkbox" style="margin-right: 0.5rem;" />
        My company is registered
      </label>
      <input type="text" placeholder="Select facility Type" style="width: 100%; margin-bottom: 1rem; padding: 0.75rem; border-radius: 4px; border: 1px solid #ccc;" />
      <input type="text" placeholder="Search..." style="width: 100%; margin-bottom: 1rem; padding: 0.75rem; border-radius: 4px; border: 1px solid #ccc;" />
      <input type="email" placeholder="Email Address" style="width: 100%; margin-bottom: 1rem; padding: 0.75rem; border-radius: 4px; border: 1px solid #ccc;" />
      <input type="text" placeholder="Business Address" style="width: 100%; margin-bottom: 1rem; padding: 0.75rem; border-radius: 4px; border: 1px solid #ccc;" />
      <input type="text" placeholder="Phone Number" style="width: 100%; margin-bottom: 1rem; padding: 0.75rem; border-radius: 4px; border: 1px solid #ccc;" />
      <input type="password" placeholder="Password" style="width: 100%; margin-bottom: 1.5rem; padding: 0.75rem; border-radius: 4px; border: 1px solid #ccc;" />
      <button type="submit" style="width: 100%; background: #007bff; color: #fff; border: none; border-radius: 4px; padding: 0.75rem; font-weight: bold; margin-bottom: 1rem;">
        Signup
      </button>
    </form>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
      <router-link to="/login" style="color: #007bff;">Already have an account? Login</router-link>
    </div>
    <router-link to="/" style="display: block; text-align: center; background: #f5f5f5; color: #222; border-radius: 4px; padding: 0.75rem; font-weight: bold; text-decoration: none;">
      Back to Home
    </router-link>
  </section>
</template>