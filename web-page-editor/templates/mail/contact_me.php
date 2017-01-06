<?php

// Check for empty fields
if (empty($_POST['name']) ||
        empty($_POST['email']) ||
        empty($_POST['message']) ||
        !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    echo 'UPS! No arguments Provided!';

    return false;
}

$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$ip = $_SERVER['REMOTE_ADDR'];

// Create the email and send the message
$to = 'contacto@empireweb.com.ar'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Consulta sobre el Editor de Empire Web | Realizada por: $name ";
$email_body = "Nuevo mensaje recibido, desde el formulario de contacto Empire Web.\n\n"."Detalle de la consulta:\n\nIP: $ip\n\nNombre: $name\n\nEmail: $email_address\n\nTeléfono: $phone\n\nMensaje:\n\n$message";
$headers = "From: contacto@empireweb.com.ar\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to, $email_subject, $email_body, $headers);

return true;
