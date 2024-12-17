<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Email settings
    $to = "fredripet@bfk.no"; // Replace with your email
    $subject = "Ny henvendelse fra kontaktskjema";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Combine message content
    $body = "Du har mottatt en ny melding fra kontaktskjemaet på nettsiden din:\n\n";
    $body .= "Navn: $name\n";
    $body .= "E-post: $email\n\n";
    $body .= "Melding:\n$message\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Takk for at du tok kontakt! Vi svarer så fort som mulig.";
    } else {
        echo "Beklager, noe gikk galt. Prøv igjen senere.";
    }
} else {
    echo "Ugyldig forespørsel.";
}
?>
