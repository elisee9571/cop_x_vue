<template>
  <div id="app">
    <router-view />
  </div>
</template>


<style>
  #app {
    min-height: 100vh !important;
  }

  body {
    position: relative;
    /* background-color: #dde1e7  !important;
    background-color: #0f111A  !important; */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* user-select: none; // a mettre une fois le projet fini */
  }

  button:focus {
    outline: none !important;
  }


  div .row {
    padding: 0 !important;
    margin: 0 !important;
    box-sizing: border-box;
  }

  .bg-light {
    background-color: transparent !important;
  }


  /* scroll bar */
  ::-webkit-scrollbar {
    width: 0.5em;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, rgba(151, 120, 255, 255), rgba(104, 68, 255, 255));
    border-radius: 50px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(transparent, #6844ff);
  }
</style>