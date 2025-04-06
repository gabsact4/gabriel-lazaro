<!-- modal upload de imagens -->
<div class="modal fade" id="upload" data-backdrop="static">
	<div class="modal-dialog modal-md">
		<div class="modal-content">
			<form method="post" enctype="multipart/form-data" class="form-group">
				<div class="modal-header">
					Upload Imagem
				</div>
				<div class="modal-body">
					<input 
						type="file" 
						name="imagem" 
						class="form-control">
					<br>
					<textarea 
						name="descricao" 
						class="form-control" 
						rows="5" 
						placeholder="descrição"></textarea>
					<br>
					<select name="status" class="form-control">
						<option value="1">ativo</option>
						<option value="0">inativo</option>
					</select>
				</div>
				<div class="modal-footer">
					<button 
						class="btn btn-secondary" 
						data-dismiss="modal">
						Fechar
					</button>
					<input 
						type="submit" 
						class="btn btn-primary" 
						name="action" 
						value="Cadastrar">
				</div>
			</form>
		</div>
	</div>
</div>

<!-- modal editar  -->
<div class="modal fade" id="edit" data-backdrop="static">
	<div class="modal-dialog modal-md">
		<div class="modal-content">
			<form method="post" enctype="multipart/form-data" class="form-group">
				<div class="modal-header">
					Editar
				</div>
				<div class="modal-body">
					<input 
						type="text" 
						name="cd"
						id="cd" 
						class="form-control">
					<br>
					<textarea 
						name="descricao" 
						id="descricao" 
						class="form-control" 
						rows="5" 
						placeholder="descrição"></textarea>
					<br>
					<select name="status" id="status" class="form-control">
						<option value="1">ativo</option>
						<option value="0">inativo</option>
					</select>
				</div>
				<div class="modal-footer">
					<button 
						class="btn btn-secondary" 
						data-dismiss="modal">
						Fechar
					</button>
					<input 
						type="submit" 
						class="btn btn-info" 
						name="action" 
						value="Alterar">
				</div>
			</form>
		</div>
	</div>
</div>

<!-- modal delete -->
<div class="modal fade" id="delete" data-backdrop="static">
	<div class="modal-dialog modal-md">
		<div class="modal-content">
			<form method="post" enctype="multipart/form-data" class="form-group">
				<div class="modal-header">
					Excluir
				</div>
				<div class="modal-body">
					<input 
						type="text" 
						name="cd"
						id="cd" 
						class="form-control">
						<input 
						type="text" 
						name="imagem"
						id="imagem" 
						class="form-control">
					<h4 class="text-danger font-weight-bolder">
						Deseja realmente excluir este item?
					</h4>
				</div>
				<div class="modal-footer">
					<button 
						class="btn btn-secondary" 
						data-dismiss="modal">
						Fechar
					</button>
					<input 
						type="submit" 
						class="btn btn-danger" 
						name="action" 
						value="Excluir">
				</div>
			</form>
		</div>
	</div>
</div>