<?php
include "config.php";

$sql = "SELECT * FROM student";
$run_sql = mysqli_query($conn, $sql) or die("SQL faild");
$output=mysqli_num_rows($run_sql);
mysqli_close($conn);
echo json_encode($output);