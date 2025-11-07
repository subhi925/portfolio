<?php
// Allow from any origin
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET,POST,OPTIONS");

// Database connection details
$host="sql211.infinityfree.com";
$username="if0_38563667";
$pass="SQ08mKBZOewETW2";
$dbname="if0_38563667_projects";
// Create connection
$con = mysqli_connect($host,$username,$pass,$dbname);
mysqli_set_charset($con, "utf8");
// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}
// SQL query to fetch all projects ordered by id in descending order
$sql = "SELECT * FROM projects ORDER BY id DESC";
$res = mysqli_query($con, $sql);
if(mysqli_num_rows($res) > 0){
    $projects = array();
    while($row = mysqli_fetch_assoc($res)){
        $projects[] = $row;
    }
    // Return the projects as a JSON response
    echo json_encode($projects);
} else {
    echo json_encode(array("message" => "No projects found."));
}
// Close the database connection
mysqli_close($con); 

?>