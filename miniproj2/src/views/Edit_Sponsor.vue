<template>
<div class="scrolling-component" ref="scrollcomponent">
	<div class="container my-body">
		<h1 class="text-center">EDITAR SPONSOR</h1>
		<div class="row">		
		</div>
		<form action="">
			<div class="row mt-3">
    		<div class="col-md-6">
						<div class="row">
							<input type="text" class="form-control" id="name" placeholder="Duarte Cota">
						</div>
						<div class="row">
							<select class="form-select mt-3" aria-label="Default select example">
							<option value="" selected disabled>Escolher tipo...</option>
							<option value="1">Particular</option>
							<option value="2">Empresa</option>
							</select>
						</div>
						<div class="row">
							<input type="text" class="form-control mt-3" id="address" placeholder="Rua X">
							<input type="text" class="form-control mt-3" id="local" placeholder="Ponta Delgada">
							<input type="text" class="form-control mt-3" id="city" placeholder="Ponta Delgada">
							<input type="text" class="form-control mt-3" id="postal" placeholder="9500-XXX Ponta Delgada">
							<label class="mt-3">Data nascimento:</label>
							<input type="date" class="form-control mt-3" id="birth_date">
							<input type="text" class="form-control mt-3" id="email" placeholder="duartecota@gmail.com">
						</div>		
    		</div>
				<div class="col-md-6">
					<select class="form-select" id="animal" aria-label="Default select example">
						<option value="" selected disabled>Adicionar animal...</option>
						<option value="1">Animal 3</option>
						<option value="2">Animal 4</option>
					</select>				
					<table class="table mt-3" id="animal_list">
						<thead>
							<tr>
							<th scope="col">Animais que patrocina:</th>
							</tr>
						</thead>
						<tbody class="mt-3">
							<tr>
								<td>Animal 1</td>
							</tr>
							<tr>
								<td>Animal 2</td>
							</tr>
						</tbody>
					</table>
					<div class="col-sm-12 text-end">
						<button v-on:click="newSponsor" type="button" class="btn btn-outline-secondary top-btn me-3">
							<i class="fas fa-plus-square me-1" aria-hidden="true"></i></button>
						<button v-on:click="gotoMain" type="button" class="btn btn-outline-secondary top-btn">
							<i class="fas fa-minus-square me-1" aria-hidden="true"></i></button>
					</div>
					<input type="file" class="form-control mt-3" id="foto">
				</div>
  		</div>
		</form>
		<div class="text-center">
				<button type="button" class="btn btn-secondary mt-4 me-4 my-button">GRAVAR</button>
				<button v-on:click="gotoMain" type="button" class="btn btn-secondary mt-4 my-button">CANCELAR</button>	
			</div>
		<div class="spacer"></div>
	</div>  
</div>
</template>

<style scoped>
	.my-button{
		width: 120px;
	}
	select option[disabled]:first-child {
		display: none;
	}
	.my-body{
    margin-top: 250px
  }
	.spacer{
		height: 200px;
	}
	.top-btn{
			font-weight: bold;
			width: 100px;
	}
</style>

<script>
export default {
	methods: {
		gotoMain(){
      this.$router.push('/MainSponsors');
		}
	}
}
</script>