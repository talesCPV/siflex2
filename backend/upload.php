<?php

  $out = 0;
  if (IsSet($_FILES["up_file"]) && IsSet($_POST["path"])&& IsSet($_POST["filename"])){ 
    $file = $_FILES["up_file"]["tmp_name"];
    $ext = pathinfo($_FILES["up_file"]["name"], PATHINFO_EXTENSION);    
    $filename = $_POST["filename"]=="" ? $_FILES["up_file"]["name"] : $_POST["filename"].'.'.strtolower($ext=='jpeg'?'jpg':$ext);
    $path = getcwd().'/../'.$_POST["path"];    

    if (!is_dir($path)){
      mkdir($path, 0777, true);
    }

    $url = $path.$filename;   
    if (file_exists($file)){             
      if(move_uploaded_file($file, $url)){      
        $out = $filename;
      }
    }
  }
  print $out;

?>