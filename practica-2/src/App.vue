<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">

      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand :to="{name:'Home'}">home</b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>

          <b-navbar-nav>
            <b-nav-item :to="{name:'Home'}" exact>home</b-nav-item>
            <b-nav-item :to="{name:'About'}">About</b-nav-item>
            <b-nav-item :to="{name:'Fotos'}">Fotos</b-nav-item>
          </b-navbar-nav>

        </b-collapse>
      </b-container>

    </b-navbar>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/otra">Otra</router-link> |
        <router-link to="/fotos">Fotos</router-link>
      </div>
    <router-view/>
  </div>
</template>
