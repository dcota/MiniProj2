<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <section class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <section class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nb">ANIMAIS</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nb">QUIZZES</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nb">CONTACTOS</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Main" class="nb">ADMIN</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nb">LOGOUT</router-link>
        </li>
      </ul>
    </section>
  </section>
</nav>
</template>

<style scoped>
  .navbar{
    position:fixed;
    margin-top: 120px;
    height: auto;
  }
  .nav{
    border-color:white;
    border-width: 2px !important;
    text-decoration: none !important;
    padding: 10px;
    
  }
  .nav-item{
    color: #2b589f !important;
    text-decoration: none !important;
    color:red!important;
    padding-top: 20px;
    padding-bottom: 20px;
    
  }
  .nb{
    color: #2b589f !important;
    font-weight: bold;
    text-decoration: none !important;
    border-right: #2b589f;
    border-right-style: solid;
    border-right-width: 3px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .nb-l{
    color: #2b589f !important;
    font-weight: bold;
    text-decoration: none !important;
    border-right: #2b589f;
    border-right-style: solid;
    border-right-width: 3px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .nb:hover{
    color:#6a8ec8 !important
  }

  .nb1:hover{
    color:#6a8ec8 !important
  }

</style>


