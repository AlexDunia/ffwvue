 <?php 
   include_once "dbconn.php";
//    if (!$conn) {
//   die("Connection failed: " . mysqli_connect_error());
// }
// echo "Connected successfullyy indeed";
//    // now that we have included, lets set our link and just have that down. 
   $action = '';
   if(isset($_GET['action'])){
      $action = $_GET['action'];
   };
   
   // our link is set, now we need to fetch data. 
   // first thing we must do would be to set the link if link is get then trigger this block of code. 
   if($action == 'read'){
      $myquery = $conn->query("SELECT * FROM allstudents");
      $mynewarray = array();
      // so usually after doing this you want to fetch all the data 
      while($mystore = $myquery->fetch_assoc()){
         $finalarray = array_push($mynewarray, $mystore);
      }
       $results = $finalarray;
   }

   echo json_encode($results)

   ?>