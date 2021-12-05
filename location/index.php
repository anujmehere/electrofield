<?php
include 'DBController.php';
$db_handle = new DBController();
$stateResult = $db_handle->runQuery("SELECT DISTINCT State FROM tbl_user ORDER BY State ASC");
?>
<html>
<head>
<link href="style.css" type="text/css" rel="stylesheet" />
<title>Multiselect Dropdown Filter</title>
</head>
<body>
    <h2>Multiselect Dropdown Filter</h2>
    <form method="POST" name="search" action="index.php">
        <div id="demo-grid">
            <div class="search-box">
                <select id="Place" name="state[]" multiple="multiple">
                    <option value="0" selected="selected">Select State</option>
                        <?php
                        if (! empty($stateResult)) {
                            foreach ($stateResult as $key => $value) {
                                echo '<option value="' . $stateResult[$key]['State'] . '">' . $stateResult[$key]['State'] . '</option>';
                            }
                        }
                        ?>
                </select><br> <br>
                <button id="Filter">Search</button>
            </div>
            
                <?php
                if (! empty($_POST['state'])) {
                    ?>
                    <table cellpadding="10" cellspacing="1">

                <thead>
                    <tr>
                        <th><strong>Name</strong></th>
                        <th><strong>City</strong></th>
                        <th><strong>State</strong></th>
                    </tr>
                </thead>
                <tbody>
                <?php
                    $query = "SELECT * from tbl_user";
                    $i = 0;
                    $selectedOptionCount = count($_POST['state']);
                    $selectedOption = "";
                    while ($i < $selectedOptionCount) {
                        $selectedOption = $selectedOption . "'" . $_POST['state'][$i] . "'";
                        if ($i < $selectedOptionCount - 1) {
                            $selectedOption = $selectedOption . ", ";
                        }
                        
                        $i ++;
                    }
                    $query = $query . " WHERE state in (" . $selectedOption . ")";
                    
                    $result = $db_handle->runQuery($query);
                }
                if (! empty($result)) {
                    foreach ($result as $key => $value) {
                        ?>
                <tr>
                        <td><div class="col" id="user_data_1"><?php echo $result[$key]['Name']; ?></div></td>
                        <td><div class="col" id="user_data_2"><?php echo $result[$key]['City']; ?> </div></td>
                        <td><div class="col" id="user_data_3"><?php echo $result[$key]['State']; ?> </div></td>
                    </tr>
                <?php
                    }
                    ?>
                    
                </tbody>
            </table>
            <?php
                }
                ?>  
        </div>
    </form>
</body>
</html>