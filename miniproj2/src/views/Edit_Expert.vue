<template>
<div class="scrolling-component" ref="scrollcomponent">
	<div class="container my-body">
		<h1 class="text-center">EDITAR EXPERT</h1>
		<div class="row">		
		</div>
		<form action="">
			<div class="row mt-3">
    		<div class="col-md-6">
						<div class="row">
							<input type="text" class="form-control" id="name" placeholder="Lisa Garcia">
						</div>
						<div class="row">
							<select class="form-select mt-3" aria-label="Default select example">
							<option value="" selected disabled>Escolher tipo...</option>
							<option value="1">Particular</option>
							<option value="2">Empresa</option>
							</select>
						</div>
						<div class="row">
							<input type="text" class="form-control mt-3" id="address" placeholder="Rua Y">
							<input type="text" class="form-control mt-3" id="local" placeholder="Oeiras">
							<input type="text" class="form-control mt-3" id="city" placeholder="Lisboa">
							<input type="text" class="form-control mt-3" id="postal" placeholder="XXXX-XXX Oeiras">
							<label class="mt-3">Data nascimento:</label>
							<input type="date" class="form-control mt-3" id="birth_date">
							<input type="text" class="form-control mt-3" id="email" placeholder="lisa@gmail.com">
						</div>		
    		</div>
				<div class="col-md-6">
					<select class="form-select" id="animal" aria-label="Default select example">
						<option value="" selected disabled>Escolher espécies...</option>
						<option value="1">Espécie / família 3</option>
						<option value="2">Espécie / família 4</option>
					</select>				
					<table class="table mt-3" id="animal_list">
						<thead>
							<tr>
							<th scope="col">Espécies/famílias de animais:</th>
							</tr>
						</thead>
						<tbody class="mt-3">
							<tr>
								<td>Espécie / família 1</td>
							</tr>
							<tr>
								<td>Espécie / família 2</td>
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
				<button type="button" class="btn btn-secondary mt-4 me-4">ADICIONAR</button>
				<button v-on:click="gotoMain" type="button" class="btn btn-secondary mt-4">CANCELAR</button>	
			</div>
		<div class="spacer"></div>
	</div>  
</div>
</template>

<style scoped>
	.my-button{
		width: 80px;
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
      this.$router.push('/MainExperts');
		}
	}
}
</script>