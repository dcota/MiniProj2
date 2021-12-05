<template>
    <div class="container-fluid">
        <div class="row footer"> 
            <div class="col-sm-6 text-center">
                <ul class="social-media">
                    <li>
                        <a href="#"><i class="fa fa-facebook " aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-twitter " aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-envelope " aria-hidden="true"></i></a>
                    </li>
                </ul>
            </div>
            <div class="col-sm-6 text-center text-white">
                <p>© Copyright 2021 Animalec - todos os direitos reservados</p>
                       
            </div>        
        </div> 
    </div>  
</template>

<style scoped>
.footer a {
    color: white;
}
.footer a:hover {
    opacity: .5;
}
.footer {
    position:fixed;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: .2em;
    bottom:0px;
    background-color: #2b589f;
    overflow: visible;
}
.footer li {
    display: inline;
    padding-right: .5em;
    font-size:2em;
}
ul.social-media {
    padding: 0;
}
@media (min-width: 768px) {
    .footer {
        flex-direction: row;
        justify-content: center;
    }           
    .footer li {
        font-size:2em;
    }
}
</style>