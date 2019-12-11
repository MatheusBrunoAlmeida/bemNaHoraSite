<?php

    if(isset($_POST['email']) && !empty($_POST['email'])){


    $nome = addslashes($_POST['nome']);
    $telefone = addslashes($_POST['telefone']);
    $email = addslashes($_POST['email']);
    $valor = addslashes($_POST['valor']);

    $to = "contato@dinheirobemnahora.com.br";
    $subject = "Siumulação - $nome";
    $body = "Nome: ".$nome."\r\n".
            "email: ".$email."\r\n".
            "telefone: ".$telefone."\r\n".
            "valor: ".$valor."\r\n".
          
            $header = "From:manancialsup@hotmail.com"."\r\n".
                      "Reply-To:".$email."\e\n".
                      "X-Mailer:PHP/".phpversion();

if(mail($to,$subject,$body,$header)){
        echo("Insciçção realizada com sucesso! Entre em contato com o escritório para realizar o pagamento!");
      


}else{
    echo('Não rolou');
}

}
?>