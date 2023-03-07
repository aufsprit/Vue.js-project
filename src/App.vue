<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/dataBinding">text</router-link> |
    <router-link to="/dataBindingHtml">rawHTML</router-link> |
    <router-link to="/dataBindingFormInput">Form</router-link> |
    <router-link to="/dataBindingFormNumber">Form-number</router-link> |
    <router-link to="/dataBindingTextarea">Textarea</router-link> |
    <router-link to="/dataBindingSelect">Select</router-link> |
    <router-link to="/dataBindingCheck">checkbox</router-link>
    <br>
    <router-link to="/dataBindingRadio">Radio</router-link> |
    <router-link to="/dataBindingImg">ImgSrc</router-link> |
    <router-link to="/dataBindingButton">Button</router-link> |
    <router-link to="/dataBindingClass">Class</router-link> |
    <router-link to="/dataBindingClass2">Class2</router-link> |
    <router-link to="/dataBindingStyle">Style</router-link> |
    <router-link to="/dataBindingStyle2">Style2</router-link> |
    <router-link to="/dataBindingList">v-for</router-link> |
    <router-link to="/dataBindingIf">v-if</router-link> |
    <router-link to="/dataBindingShow">v-show</router-link>
    <br>
    <router-link to="/EventOn">v-on</router-link> |
    <router-link to="/EventChange">v-change</router-link> |
    <router-link to="/EventKey">v-key</router-link> |
    <router-link to="/DataComputed">computed</router-link> |
    <router-link to="/DataWatch">watch</router-link> |
    <router-link to="/dataBindingList2">List2</router-link> |
    <router-link to="/NestedComponent">Nested</router-link>
    <br>
    <router-link to="/ParentComponent">child-parent</router-link> |
    <router-link to="/ParentComponent2">child-parent2</router-link> |
    <router-link to="/ParentComponent3">child-parent3</router-link> |
    <router-link to="/ParentComponent4">child-parent4</router-link> |
    <router-link to="/ParentComponent5">child-parent5</router-link>
    <br>
    <router-link to="/SlotUseModalLayout">slot</router-link> |
    <router-link to="/ProvideInject">Provide-Inject</router-link>

  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
