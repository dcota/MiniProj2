<template>
  <div class="container my-body">
    <div class="row mt-5">
      <div class="col-sm-4">
        <div class="d-grid gap-2 col-6 mx-auto">
          <button 
            class="btn btn-primary my-btn" 
            type="button">
            <i class="fas fa-users fa-5x" aria-hidden="true"></i><br><br>UTILIZADORES
          </button>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="d-grid gap-2 col-6 mx-auto">
            <button 
              class="btn btn-primary my-btn" 
              type="button">
              <i class="fas fa-dog fa-5x" aria-hidden="true"></i><br><br>ANIMAIS
            </button>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="d-grid gap-2 col-6 mx-auto">
          <button v-on:click="sponsors"
              class="btn btn-primary my-btn" 
              type="button">
              <i class="fas fa-hand-holding-heart fa-5x" aria-hidden="true"></i><br><br>SPONSORS
          </button>
        </div>
      </div>
    </div>    
    <div class="row mt-5">
      <div class="col-sm-4">
        <div class="d-grid gap-2 col-6 mx-auto">
          <button 
              class="btn btn-primary my-btn" 
              type="button">
              <i class="fab fa-wpforms fa-5x" aria-hidden="true"></i><br><br>QUIZZES
          </button>
        </div>
      </div>
      <div class="col-sm-4">
          <div class="d-grid gap-2 col-6 mx-auto">
          <button 
              class="btn btn-primary my-btn" 
              type="button">
              <i class="fas fa-question-circle fa-5x" aria-hidden="true"></i><br><br>QUESTÕES
          </button>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="d-grid gap-2 col-6 mx-auto">
          <button v-on:click="experts"
              class="btn btn-primary my-btn" 
              type="button">
              <i class="far fa-lightbulb fa-5x" aria-hidden="true"></i><br><br>EXPERTS
          </button>
        </div>
      </div>
    </div>    
  </div>  
</template>

<style scoped>
  .my-btn{
    height: 200px !important;
    background-color: #2b589f !important;
    border-radius: 50px;
  }
  .my-body{
    margin-top: 250px
  }
</style>

<script>
export default {
  methods: {
    sponsors(){
      this.$router.push('/MainSponsors');
    },
    experts(){
      this.$router.push('/MainExperts');
    }
  }
}
</script>