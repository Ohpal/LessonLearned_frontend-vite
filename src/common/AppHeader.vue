<template>
  <nav class="sb-topnav navbar navbar-expand navbar-light bg-light shadow-sm p-3 bg-white rounded">
    <router-link class="navbar-brand ps-3" to="/lessonlearned">
      <!-- <img src="../assets/image/ship_icon.png" /> -->
      시운전 통합 관제 서비스&nbsp;</router-link
    >
    <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0 mlml" id="sidebarToggle">
      <i class="bi bi-justify">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
      </i>
    </button>
    <div class="d-md-inline-block ms-auto me-0 me-md-3 my-md-0">
      <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li class="nav-item">
          <a class="nav-link" href="#" role="button" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
.navbar .navbar-brand {
  --bs-navbar-brand-font-size: 1.1rem;
}
.mlml {
  margin-left: 1rem;
}
</style>
