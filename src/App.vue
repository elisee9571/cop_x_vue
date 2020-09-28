<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<style>
body{
  background-color: #131313 !important;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


div .row{
  padding: 0 !important;
  margin: 0 !important;
  box-sizing: border-box;
} 
.bg-light{
  background-color: transparent !important;
}


/* scroll bar */
::-webkit-scrollbar{
  width: 12px;
}
::-webkit-scrollbar-thumb{
  background: linear-gradient(transparent, rgba(151, 120, 255, 255), rgba(104, 68, 255, 255));
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover{
  background: linear-gradient(transparent,#6844ff);
}
</style>
