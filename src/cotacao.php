<?php

header('Content-type: application/json');
$status = true;

// chamada da classe phpmailer
require('phpmailer/class.phpmailer.php');

// faço a chamada da classe
$Email = new PHPMailer();



//define os dados do servidor e tipo de conexão
$Email->IsSMTP();            // set mailer to use SMTP
$Email->SMTPDebug = 0;
$Email->Port = 587; //Utilize obrigatoriamente a porta 587.
$Email->Host = "smtp.grupon7.com.br"; //servidor SMTP
$Email->SMTPAuth = true;     // turn on SMTP authentication
$Email->Username = "sac@grupon7.com.br";
$Email->Password = "A7Pw@t1#Pvqsl";

// resgatando os dados passados pelo form
$nomeusuario = $_POST['name'];
$emailusuario = $_POST['email'];
$phoneusuario = $_POST['phone'];
$productselect = $_POST['product'];

//define remetente
$Email->From = "sac@grupon7.com.br"; // email do remetente da mensagem
$Email->FromName = "Formulário Cotação Grupo N7"; // nome do remetente do email

//define destinatário
$Email->AddAddress("sac@grupon7.com.br", "Grupo N7");// Endereço de destino do email
// $Email->AddAddress('e-mail@destino2.com.br');
// $Email->AddCC('copia@dominio.com.br', 'Copia');
// $Email->AddBCC('CopiaOculta@dominio.com.br', 'Copia Oculta');
$Email->IsHTML(true); // Define que o e-mail será enviado como HTML
$Email->CharSet = 'UTF-8'; // Charset da mensagem (opcional)

//texto e assunto
$Email->Subject = "Cotação recebida pelo formulário do site Grupo N7"; // informando no email, o assunto da mensagem
// Define o texto da mensagem (aceita HTML)
$Email->Body .= "E-mail de solicitação de cotação pelo site Grupo N7<BR><BR>";
$Email->Body .= "Dados do solicitante:<BR>";
$Email->Body .= "Nome: <i>$nomeusuario</i><BR>";
$Email->Body .= "E-mail: <i>$emailusuario</i><BR>";
$Email->Body .= "Telefone: <i>$phoneusuario</i><BR>";
$Email->Body .= "Produto: <i>$productselect</i><BR>";
//$Email->AddAttachment("e:\home\login\web\documento.pdf", "novo_nome.pdf"); //envio de anexo (opcional)

//limpa os destinatários e os anexos
//$Email->ClearAllRecipients(); 
//$Email->ClearAttachments(); 

//exibe mensagem de resultado
if(!$Email->Send())   {
	$status = false;
}else{
  $status = true;
}

echo json_encode($status);

?>