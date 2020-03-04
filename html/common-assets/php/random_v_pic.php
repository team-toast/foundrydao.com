<?php
function getRandomVPicPubSrc() {
    $dir = scandir($_SERVER['DOCUMENT_ROOT'] . "/common-assets/img/vpics/");
    $picFileNames = array_slice($dir, 2);
    $randPicSrc = $picFileNames[array_rand($picFileNames)];
    return "/common-assets/img/vpics/" . $randPicSrc;
}
?>