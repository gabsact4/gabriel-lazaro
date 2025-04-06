<?php  
	function UploadImagemServicos($imagem, $descricao, $nome, $pagina){
		$sql = 'insert into tb_servico set
				url_imagem_servico = "'.$imagem.'",
				nm_servico = "'.$nome.'",
          				ds_servico = "'.$descricao.'"';
		$res = $GLOBALS['con']->query($sql);
		if($res){
			Confirma("Cadastrado com sucesso!", $pagina);
		}
		else{
			Erro("Ops! Imagem não foi cadastrada!");
		}
	}

	function ListarImagem(){
		$sql = 'select cd_servico, nm_servico, ds_servico, url_imagem_servico from tb_servico';
		$res = $GLOBALS['con']->query($sql);
		if($res->num_rows > 0){
			return $res;
		}
		else{
			echo 'sem imagens cadastradas';
		}
	}

	function Editar($item,  $nome, $descricao, $pagina){
		$sql = 'update tb_servico set
				nm_servico = "'.$nome.'",
				ds_servico = "'.$descricao.'"
				where
				cd_servico = '.$item;
		DML($sql, "Alterado com sucesso!", "Ops! Não foi alterado!", $pagina);
	}

	function EditarStatus( $item, $status, $pagina){
		$sql = 'update tb_pacote set
				st_pacote = "'.$status.'"
				where
				cd_pacote = '.$item;
				DML ($sql, "Alterado com sucesso!", "Ops! Não foi alterado!", $pagina);
	  }
	
	function EditarImagem($item, $imagem, $pagina){
		$sql = 'select url_imagem_servico from tb_servico where cd_servico =' .$item;
		$smt = $GLOBALS['con']->query($sql);
		$r = $smt->fetch_assoc();
	
		$dir = "../img/servicos/".$r['url_imagem_servico'];
		chmod($dir, 0777);
		unlink($dir);
		$sql = 'update tb_servico set
				url_imagem_servico = "'.$imagem.'"
				where
				cd_servico = '.$item;
				DML($sql, "Imagem alterada com sucesso!", "Ops! Não foi alterado!", $pagina);
	
	}

	function Delete($item, $imagem, $pagina){
		$dir = "../img/servicos/".$imagem;
		unlink($dir);
		$sql = 'delete from tb_servico
				where
				cd_servico = '.$item;
		  DML($sql, "Excluido com sucesso!", "Ops! Não foi excluído!", $pagina);
	}
?>