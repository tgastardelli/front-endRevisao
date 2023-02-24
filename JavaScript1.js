function Enviar() { 
    var nome = document.getElementById("nomeid");
    var fone = document.getElementById("foneid");
    var email = document.getElementById("emailid");   
    if (nome.value != "" || fone.value != "" || email.value != "") { 
    alert('Obrigado! Seu dados foram encaminhados com sucesso: Nome: ' + nome.value + ' / Fone: ' + fone.value + ' / email: ' + email.value); 
    }
    }
    