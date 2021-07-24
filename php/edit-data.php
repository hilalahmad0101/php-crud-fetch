<?php

include "config.php";
// $input = file_get_contents("php://input");
// $decode = json_decode($input, true);

// if (isset($_GET["id"])) {
$id = $_GET["id"];
$sql = "SELECT * FROM student WHERE id='{$id}'";
$run_sql = mysqli_query($conn, $sql);
$output = [];

if (mysqli_num_rows($run_sql) > 0) {
    while ($row = mysqli_fetch_assoc($run_sql)) {
        $output[] = $row;
    }
}
mysqli_close($conn);
// }
echo json_encode($output);