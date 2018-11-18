<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="kadai2.css">
    <link rel="stylesheet" href="reset.css">
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="kadai2.js"></script>

<?php
function h($val){
    return htmlspecialchars($val,ENT_QUOTES);
}

$name=$_POST["name"];
// $old=$_POST["old"];
// $mail=$_POST["mail"];
// $sex=$_POST["sex"];
?>


<html>
<head>
    <meta charset="UTF-8">
</head>
<body>
    <!-- <p><?=h($mail);?></p> -->
  <div class="main">
   　<img src="image/bg_house.jpg" alt="" class="haikei">
  <div class="object"></div>　　　<!-- 人物 -->
    <img src="image/serihuwaku.png" alt="" class="serihu" ><!-- セリフ枠 -->
      <div class="bg">
         <div class="text2">
          <p class="button" onclick="text()"></p>
          <p class="told">今日もつまらない一日が始まる。<br><br>そんな風にしか思ってなかった。</p>
          <p class="name1"><?=h($name);?></p>
         </div>
      </div>
  </div>
  
</body>
</html>