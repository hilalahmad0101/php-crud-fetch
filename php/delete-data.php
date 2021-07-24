<?php


include "config.php";

if (isset($_GET["id"])) {
    $id = $_GET["id"];
    $sql = "DELETE FROM student WHERE id='{$id}'";
    if (mysqli_query($conn, $sql)) {
        echo json_encode(array("delete" => "success"));
    } else {
        echo json_encode(array("delete" => "faild"));
    }
}
mysqli_close($conn);