<?php
include "config.php";

$sql = "SELECT * FROM student";
$run_sql = mysqli_query($conn, $sql) or die("SQL faild");
$output = [];
if (mysqli_num_rows($run_sql) > 0) {
    while ($row = mysqli_fetch_assoc($run_sql)) {
        $output[] = $row;
    }
} else {
    $output["empty"] = ["empty"];
}

mysqli_close($conn);
echo json_encode($output);