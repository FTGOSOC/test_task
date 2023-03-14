<template>
  <div id="app">
    <h1 class="title">
      Test Task
    </h1>
    <div class="card">
      <nav>
        <router-link to="/select" :class="{active : $route.path.includes('select') }">Component: BaseSelect</router-link>
        <router-link to="/tooltip" :class="{active : $route.path.includes('tooltip') }">Component: BaseTooltip</router-link>
      </nav>
      <router-view/>
    </div>


  </div>
</template>

<style lang="scss">
#app {
  padding: 30px;
}
h1 {
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
}
.card {
  height: 320px;
  margin-top: 15px;
  padding: 30px 40px;
  background: #FFFFFF;
  border: 1px solid #F2F3F6;
  box-shadow: 0 2px 6px rgba(0, 44, 92, 0.1);
  border-radius: 2px;
}
nav {
  display: flex;
  gap: 50px;
  a {
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
    line-height: 20px;
    font-weight: 500;
    color: var(--dark-grey);
    text-decoration: none;
  }
}
.active {
  color: var(--blue);
}
</style>
