<template>
  <section
    id="about"
    class="about-section"
  >
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
</template>

<style>
.about-section {
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  justify-content: center;
}
.about-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
  letter-spacing: 1px;
}
@media (max-width: 900px) {
  .about-section {
    flex-direction: column !important;
    text-align: center;
  }
  .about-section > div {
    max-width: 100% !important;
  }
  .about-title {
    font-size: 2.2rem;
  }
}
</style>
