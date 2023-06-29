<?php

//GET - donnees entrees par l'utilisateur, avec Ajax
//POST - si le navigateur de l'utilisateur ne supporte pas le js on utilisera post a la place
$name = ($_GET['name']) ? $_GET['name'] : $_POST['name'];
$email = ($_GET['email']) ?$_GET['email'] : $_POST['email'];
$comment = ($_GET['comment']) ?$_GET['comment'] : $_POST['comment'];

//flag pr savoir quelle methode utiliser (post = 1)

if ($_POST) $post=1;

//validation des donnees recues
if (!$name) $errors[count($errors)] = 'Merci d\'entrer votre nom';
if (!$email) $errors[count($errors)] = 'Merci d\'entrer votre email.';
if (!$comment) $errors[count($errors)] = 'Merci d\'entrer un message';

//si le tableau d'erreurs est vide, on envoie le mail
if (!$errors) {

    //destinataire
    $to = 'quentinlacpro@gmail.com';
    //expéditeur
    $from = $name . ' <' . $email . '>';

    //sujet et contenu du message en html
    $subject = 'Message via le portfolio de ' . $name;
    $message = 'Nom: ' . $name . '<br/><br/>
		       Email: ' . $email . '<br/><br/>
		       Message: ' . nl2br($comment) . '<br/>';

    //Envoyer le mail
    $result = sendmail($to, $subject, $message, $from);

    //Si on a utilisé post, affichage de message
    if ($_POST) {
        if ($result) echo 'Merci ! Votre message m\'est bien parvenu.';
        else echo 'Une erreur s\'est produite. Veuillez réessayer.';

        //si GET a été utilisé, on renvoie un booleen pour que le script Ajax s'execute
    } else {
        echo $result;
    }

//si le tableau d'erreurs est rempli
} else {
    //affichage des erreurs
    for ($i=0; $i<count($errors); $i++) echo $errors[$i] . '<br/>';
    echo '<a href="index.html">Retour</a>';
    exit;
}


//Fonction pour generer l'email en html
function sendmail($to, $subject, $message, $from) {
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
    $headers .= 'De: ' . $from . "\r\n";

    $result = mail($to,$subject,$message,$headers);

    if ($result) return 1;
    else return 0;
}

?>