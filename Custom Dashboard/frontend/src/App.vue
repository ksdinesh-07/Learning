<template>
  <div class="app-container">
    <!-- Sidebar Navigation -->
    <aside class="sidebar">
      <div class="logo">
        <h2>Halleyx App</h2>
      </div>
      
      <nav class="nav-menu">
        <router-link to="/dashboards" class="nav-item">
          📊 Dashboards
        </router-link>
        <router-link to="/orders" class="nav-item">
          🛒 Orders
        </router-link>
      </nav>
    </aside>

    <!-- Main Content Area -->
    <main class="main-content">
      <!-- This is where the pages (DashboardList, OrdersView) will render -->
      <router-view />
    </main>
  </div>
</template>

<style>
/* Global reset */
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background-color: #f3f4f6;
}

.app-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

/* Sidebar Styling */
.sidebar {
  width: 250px;
  background-color: white;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
}

.logo {
  padding: 24px;
  border-bottom: 1px solid #e5e7eb;
}

.logo h2 {
  margin: 0;
  font-size: 20px;
  color: #111827;
}

.nav-menu {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  display: block;
  padding: 12px 16px;
  text-decoration: none;
  color: #4b5563;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s;
}

.nav-item:hover {
  background-color: #f3f4f6;
}

/* Active route styling */
.router-link-active {
  background-color: #10b981;
  color: white;
}

.router-link-active:hover {
  background-color: #059669;
}

/* Main Content Area */
.main-content {
  flex: 1;
  overflow-y: auto;
}
</style>