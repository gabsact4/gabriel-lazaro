<!-- Modal de Upload!-->
<div class="modal fade" id="upload" data-backdrop="static">
    <div class="modal-dialog modal-md div modal-content">
        <form method="post" enctype="multipart/form-data" class="form-group">
            <div class="modal-header">
                Upload Serviço
            </div>
            <div class="modal-body">
                <input type="file" name="imagem" class="form-control">
                <br>
                <input type='text' name='nome' class="form-control" placeholder="Nome do Serviço">
                <br>
                <input type='text' name="descricao" class="form-control" placeholder="Descrição do Serviço">
                <br>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" data-dimiss="modal">
                    Fechar
                </button>
                <input type="submit" class="btn btn-primary" name="action" value="Cadastrar">
            </div>
        </form>
    </div>
</div>

<!-- Modal de edit!-->
<div class="modal fade" id="edit" data-backdrop="static">
    <div class="modal-dialog modal-md div modal-content">
        <form method="post" enctype="multipart/form-data" class="form-group">
            <div class="modal-header">
                Editar Serviço
            </div>
            <div class="modal-body">
                <input type="text" name="cd" id="cd" class="form-control" placeholder="Código do Serviço"readonly="readonly"></Textarea>
                <br>
                <input type='text' name="nome" id="nome" class="form-control" placeholder="Nome do Serviço"></Textarea>
                <br>
                <Textarea name="descricao" id="descricao" class="form-control" rows="3" placeholder="Descrição"></Textarea>
                <br>    
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" data-dimiss="modal">
                    Fechar
                </button>
                <input type="submit" class="btn btn-info" name="action" value="Alterar">
            </div>
        </form>
    </div>
</div>

<!-- Modal de delete!-->
<div class="modal fade" id="delete" data-backdrop="static">
    <div class="modal-dialog modal-md div modal-content">
        <form method="post" enctype="multipart/form-data" class="form-group">
            <div class="modal-header">
                Exlcuir 
            </div>
            <div class="modal-body">
                <input type="text" name="cd" class="form-control" id="cd" readonly="readonly">
                <br>
                <input type="text" name="imagem" id="imagem" class="form-control">
                    <h4 class="text-danger font-weight-bolder">
                        Deseja realmente exlcuir este item?
                    </h4>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" data-dimiss="modal">
                    Fechar
                </button>
                <input type="submit" class="btn btn-danger" name="action" value="Excluir">
            </div>
        </form>
    </div>
</div>

<!-- Modal de editimagem!-->
<div class="modal fade" id="editimg" data-backdrop="static">
    <div class="modal-dialog modal-md div modal-content">
        <form method="post" enctype="multipart/form-data" class="form-group">
            <div class="modal-header">
                Editar Imagem do Serviço
            </div>
            <div class="modal-body">
                <Textarea name="cd" id="cd" class="form-control" rows="1" placeholder="Código do pacote" readonly="readonly"></Textarea>
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

<!-- Modal de editimagem!-->
<div class="modal fade" id="editimg" data-backdrop="static">
    <div class="modal-dialog modal-md div modal-content">
        <form method="post" enctype="multipart/form-data" class="form-group">
            <div class="modal-header">
                Editar Imagem do Serviço
            </div>
            <div class="modal-body">
                <Textarea name="cd" id="cd" class="form-control" rows="1" placeholder="Código do pacote" readonly="readonly"></Textarea>
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