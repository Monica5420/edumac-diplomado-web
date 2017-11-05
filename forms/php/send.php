<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    $name           = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
    $tel            = filter_input(INPUT_POST, 'tel', FILTER_SANITIZE_SPECIAL_CHARS);
    $message        = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS);
    $comments       = '<div>  Nombre: '               . $name
                    . '<br /> Teléfono: '             . $tel
                    . '<br /> Mensaje: '              . $message
                    . '</div>';

    require_once 'PHPMailerAutoload.php';
    $phpmailer = new PHPMailer();

    $phpmailer->IsHTML( TRUE );
    $phpmailer->ClearAddresses();
    $phpmailer->AddAddress( 'sergio_design@msn.com', 'Sergio Pérez' );  // Correo del destinatario y nombre
    $phpmailer->addBCC( '' );                                           // Correo CC
    //$phpmailer->IsSMTP();
    $phpmailer->SMTPDebug  = 0;
    $phpmailer->CharSet    = 'UTF-8';
    $phpmailer->SMTPAuth   = true;
    $phpmailer->SMTPSecure = 'ssl';
    $phpmailer->Host       = 'server103.neubox.net';                    // Servidor de correo saliente SMTP
    $phpmailer->Port       = 465;                                       // Puerto de correo saliente SMTP
    $phpmailer->Username   = 'edumac@sfumino.mx';                       // Usuario del correo electrónico
    $phpmailer->Password   = 'edumac-01';                               // Contraseña del correo electrónico
    $phpmailer->From       = 'edumac@sfumino.mx';                       // From
    $phpmailer->FromName   = 'Sfumino MX';                              // From Name
    $phpmailer->Subject    = 'Contacto';                                // Subject
    $phpmailer->MsgHTML( $comments ); ?>

    <?php if ( $phpmailer->Send() ): ?>
        <p>El correo electrónico se ha enviado</p><!-- HTML que se mostrará cuando el correo se envíe correctamente. -->
    <?php else: ?>
        <p class="error">Ocurrio un error al enviar los datos</p><!-- HTML en caso de error de envío. -->
    <?php endif; ?>
