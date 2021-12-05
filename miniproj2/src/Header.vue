<template>
<nav class="navbar navbar-expand-sm fixed-top">
    <div class="container-fluid">
        <div class="navbar-collapse collapse">
            <ul class="navbar-nav" style="margin-left:100px;position:sticky;">
                <li class="nav-item active">
                    <router-link to="/" class="nav-link" style="margin-right:100px; font-size: 30px;">
                    <img src="./assets/logo.png" alt=""></router-link>
                </li>              
            </ul>
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <router-link to="/" class="nav-link" style="margin-right:100px; font-size: 30px;">Animalec</router-link>
                </li>
            </ul>
        </div>
    </div>
</nav>

</template>

<style scoped>
    .nav-link{
        color:white!important;
    }
    .navbar{
        background-color: #2b589f;
        height: 120px;
    }
</style>