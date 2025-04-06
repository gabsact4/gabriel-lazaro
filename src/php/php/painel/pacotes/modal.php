<!-- modal upload de imagens -->
<div class="modal fade" id="upload" data-backdrop="static">
	<div class="modal-dialog modal-md">
		<div class="modal-content">
			<form method="post" enctype="multipart/form-data" class="form-group">
				<div class="modal-header">
					Upload Pacote
				</div>
				<div class="modal-body">
					<input type="file" name="imagem" class="form-control">
					<br>
					<input type='text' name='destino' class="form-control" placeholder="Nome do Destino">
					<br>
					<input type='text' name="periodo" class="form-control" placeholder="Periodo">
					<br>
					<Textarea name="acomodacao" class="form-control" rows="3" placeholder="Descrição da Acomodação"></Textarea>
					<br>
					<input type='text' name="valor" class="form-control" placeholder="Valor do Pacote">
					<br>
					<label> Parcelas do Pacote</label>
					<select name="parcela" class="form-control" placeholder="Quantidade de Parcelas">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						<option>6</option>
						<option>7</option>
						<option>8</option>
						<option>9</option>
						<option>10</option>
					</select>
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
					Editar Pacote
				</div>

				<div class="modal-body">
					<input type='text' name="cd" id="cd" class="form-control" rows="1" placeholder="Código do pacote" readonly="readonly">
					<br>
					<input type='text' name="destino" id="destino" class="form-control" placeholder="Nome do Destino">
					<br>
					<input type='text' name="periodo" id="periodo" class="form-control" placeholder="Periodo">
					<br>
					<Textarea name="acomodacao" id="acomodacao" class="form-control" rows="3" placeholder="Descrição da Acomodação"></Textarea>
					<br>
					<input type='text' name="valor" id="valor" class="form-control" placeholder="Valor do Pacote">
					<br>
					<label>Parcelas do Pacote</label>
					<select name="parcela" id="parcela" class="form-control" placeholder="Quantidade de Parcelas">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						<option>6</option>
						<option>7</option>
						<option>8</option>
						<option>9</option>
						<option>10</option>
					</select>
					<br>
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
						class="form-control"
						readonly="readonly">
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

<!-- Modal de editimagem!-->
<div class="modal fade" id="editimg" data-backdrop="static">
    <div class="modal-dialog modal-md div modal-content">
        <form method="post" enctype="multipart/form-data" class="form-group">
            <div class="modal-header">
                Editar Imagem do Pacote
            </div>
            <div class="modal-body">
                <input type='text' name="cd" id="cd" class="form-control" rows="1" placeholder="Código do pacote" readonly="readonly">
                <br>
                <input type="file" name="imagem" class="form-control">
                <br>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" data-dimiss="modal">
                    Fechar
                </button>
                <input type="submit" class="btn btn-info" name="action" value="Alterar Imagem">
            </div>
        </form>
    </div>
</div>

<!-- Modal de editstatus!-->
<div class="modal fade" id="editst" data-backdrop="static">
    <div class="modal-dialog modal-md div modal-content">
        <form method="post" enctype="multipart/form-data" class="form-group">
            <div class="modal-header">
                Editar Status do Pacote
            </div>
            <div class="modal-body">
                <input type='text' name="cd" id="cd" class="form-control" rows="1" placeholder="Código do pacote" readonly="readonly">
                <br>
                <select name="status" id="status" class="form-control">
                    <option value="1">ativo</option>
                    <option value="0">inativo</option>
                </select>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" data-dimiss="modal">
                    Fechar
                </button>
                <input type="submit" class="btn btn-info" name="action" value="Alterar Status">
            </div>
        </form>
    </div>
</div>