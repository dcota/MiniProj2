<template>
	<section class="container my-body">
		<section class="row mt-5">
			<section class="col-sm-8">
				<h1 class="text-center">GESTÃO DE EXPERTS</h1>
			</section>
			<section class="col-sm-4">
				<button v-on:click="newExpert" type="button" class="btn btn-outline-primary top-btn me-3"><i class="fas fa-plus-square me-1" aria-hidden="true"></i>Adicionar</button>
				<button v-on:click="gotoMain" type="button" class="btn btn-outline-primary top-btn"><i class="fas fa-edit me-1" aria-hidden="true"></i>Voltar</button>
			</section>
		</section>
		<section class="card mt-5">
			<section class="card-body">
				<table class="table mt-5">
					<thead>
						<tr>
						<th>Nome</th>
							<th>Tipo</th>
							<th>Data Associação</th>
							<th class="text-center">Ação</th>
						</tr>
					</thead>
						<tbody>
							<tr>
								<td>{{name}}</td>
								<td>{{type}}</td>
								<td>{{assoc_date}}</td>
								<td class="text-center">
									<button v-on:click="editExpert" type="button" class="btn btn-warning btn-sm me-2 ac-btn"><i class="fas fa-edit me-1" aria-hidden="true"></i>Editar
									</button>
									<button type="button" data-bs-toggle="modal" data-bs-target="#ver" class="btn btn-success btn-sm me-2 ac-btn"><i class="fas fa-search me-1" aria-hidden="true"></i>Ver</button>
									<button type="button" data-bs-toggle="modal" data-bs-target="#remover" class="btn btn-danger btn-sm me-2 ac-btn"><i class="far fa-trash-alt me-1" aria-hidden="true"></i>Remover</button>
								</td>
							</tr>
						</tbody>
					</table>
					<!-- Modal detalhe sponsor-->
					<section  class="modal fade" id="ver" tabindex="-1" aria-labelledby="verLabel" aria-hidden="true"> 
						<section class="modal-dialog modal-dialog-centered">
							<section class="modal-content">
									<section class="modal-header">
											<h5 class="modal-title" id="verLabel">DETALHE DO SPONSOR</h5>
									</section>
									<section class="modal-body text-start">
										<img class="mb-2" src="../assets/lisa.jpg" alt="">
										<p class="mb-2">Nome: {{name}}</p>
										<p class="mb-2">Tipo: {{type}}</p>
										<p class="mb-2">Data associação: {{assoc_date}}</p>
										<p class="mb-2">Data nascimento: {{birth_date}}</p>
										<p class="mb-2">Cidade: {{city}}</p>
										<p class="mb-2">Espécies: {{species}}</p>
									</section>
									<section class="modal-footer justify-content-center">
										<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">VOLTAR</button>
									</section>
							</section>
						</section>
					</section>
					<!-- Modal remover-->
					<section  class="modal fade" id="remover" tabindex="-1" aria-labelledby="removerLabel" aria-hidden="true"> 
						<section class="modal-dialog modal-dialog-centered">
							<section class="modal-content">
									<section class="modal-header justify-content-center">
											<h5 class="modal-title my-color" id="removerLabel"><i class="fas fa-exclamation-triangle fa-5x me-1" aria-hidden="true"></i></h5>
									</section>
									<section class="modal-body text-center">
										<h1 class="my-color">Deseja remover o expert {{name}}?</h1>
									</section>
									<section class="modal-footer justify-content-center">
										<button type="button" class="btn btn-secondary me-5" >CONFIRMAR</button>
										<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CANCELAR</button>
									</section>
							</section>
						</section>
					</section>
			</section>
		</section>
	</section>
</template>

<style scoped>
	.my-color{
		color: red;
	}
	.ac-btn{
		width: 105px;
		color: white;
		font-weight: bold;
	}
	.top-btn{
		font-weight: bold;
		width: 130px;
		color: #2b589f;
		border-color:  #2b589f
	}
	.top-btn:hover{
		background-color: #2b589f;
		color:white;
	}
	img{
		max-width: 20%;
		height: auto;
	}
	.my-body{
    	margin-top: 250px
  	}
</style>

<script>
	export default {
		data() {
				//mais tarde serão valores da base de dados
				let name = 'Lisa Garcia'
				let type = 'Particular'
				let	assoc_date = '2020-03-23'
				let	birth_date = '1974-12-23'
				let city = 'Lisboa'
				let country = 'Portugal'
				let species = 'Cães, gatos'
				return {
					name: name,
					type: type,
					assoc_date: assoc_date,
					birth_date: birth_date,
					city: city,
					country: country,
					species: species
				}			
			},
		methods: {	
			gotoMain(){	
				this.$router.push('/Main');
			},
			newExpert(){
				this.$router.push('/NewExpert');
			},
			editExpert(){
				this.$router.push('/EditExpert');
			}

		}
	}
</script>