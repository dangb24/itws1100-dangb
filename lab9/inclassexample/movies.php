<?php 
  include('includes/init.inc.php'); // include the DOCTYPE and opening tags
  include('includes/functions.inc.php'); // functions
?>
<title>PHP &amp; MySQL - ITWS</title>   

<?php include('includes/head.inc.php'); ?>

<h1>PHP &amp; MySQL</h1>
      
<?php include('includes/menubody.inc.php'); ?>

<p>Build the movie forms and output here.</p>

<<<<<<< Updated upstream
<?php include('includes/foot.inc.php'); 
=======
    echo '<tr><th>Title:</th><th>Year:</th><th></th></tr>';
    for ($i=0; $i < $numRecords; $i++) {
      $record = $result->fetch_assoc();
      if ($i % 2 == 0) {
        echo "\n".'<tr id="actor-' . $record['movieid'] . '"><td>';
      } else {
        echo "\n".'<tr class="odd" id="actor-' . $record['movieid'] . '"><td>';
      }
      echo htmlspecialchars($record['title']);
      echo '</td><td>';
      echo htmlspecialchars($record['year']);
      echo '</td><td>';
      echo '<img src="resources/delete.png" class="deleteActor" width="16" height="16" alt="delete movie"/>';
      echo '</td></tr>';
      // Uncomment the following three lines to see the underlying
      // associative array for each record.
      // echo '<tr><td colspan="3" style="white-space: pre;">';
      // print_r($record);
      // echo '</td></tr>';
    }

    $result->free();

    // Finally, let's close the database
    $db->close();
  }

?>
</table>

<?php include('includes/foot.inc.php');
>>>>>>> Stashed changes
  // footer info and closing tags
?>
