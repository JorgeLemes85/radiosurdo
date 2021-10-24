function cadastrar() {
    var formulario = document.register;
    var nome = formulario.nome;
    var cpf = formulario.cpf;
    var endereco = formulario.endereco;
    var numero = formulario.numero;
    var telefoneCelular = formulario.telefoneCelular;
    
    if (nome.value == "") {
       alert('Favor preencher o campo');
       nome.focus();
       return false;
    }

    if (cpf.value == "") {
       alert('Favor preencher o campo');
        cpf.focus();
       return false; 
    }

    if (endereco.value == "") {
       alert('Favor preencher o campo');
       endereco.focus();
       return false;
    }

    if (numero.value == "") {
       alert('Favor preencher o campo');
       numero.focus();
       return false;
    }

    if (telefoneCelular.value == "") {
       alert('Favor preencher o campo');
       telefoneCelular.focus();
       return false; 
    }
    alert('Obrigado sr(a) ' + nome.value + ',' + ' Cadastrado com sucesso');
    return true;
} 




