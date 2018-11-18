var num = 0; // numを0から始める
function text() { 
  num++; // 次にnumに1を足す
  if (num==1) { 
    view="高校生活が始まり6ヶ月が経とうとしていた。<br/><br/>だが、キラキラした学園生活なんて妄想で代り映えのない、いつも通りな朝学校に行くところだ。"
    hidari_object='<img src= "image/schoolboy_walk2.png" height="500px">'
    var audio = new Audio("sounds/believe.wav"); //bgm
    audio.play();
  } else if(num==2){ 
    view="いつもの日課である、スマホの確認っと…。<br/><br/>おお！やっぱ、チーズアカデミーの講習受けてみたいなー<br/><br/>いつか、チーズの専門家になってみたいものだ。"   
  } else if(num==3){ 
    view="伝え忘れたが、俺はプログラマーを目指すしがない高校生だ。<br/><br/>そして、最近気になる女の子がいるんだ"
} else if(num==4){ 
    view="お、だれかこっち来るな。<br/><br/>あ、あれは…。"
    　var audio = new Audio("sounds/dash-gravel1.mp3"); //bgm
    　audio.play();
  }else if(num==5){ 
    view="おはよう！そんなに焦ってどうしたんだよ。<br/><br/>ところで、じゃんけんしない？？"
    hidari_object='<img src= "image/pckun.png" height="400px">'
    var audio = new Audio("sounds/jk.mp3"); //bgm
    　audio.play();
  }else if(num==6){ 
    view="学校に向かう途中で話しかけてきたこいつは、ぱそこん君。<br/><br/>隣の席で、しきりにじゃんけんをしたがる、頭のいかれたやつだ。<br/><br/>（※詳しくは第二回のJavaScript課題参照）"
  }else if(num==7){ 
    view="まさか、こいつと一緒に登校するとは…。あ、あっちに見えるのは…。"
  }else if(num==8){ 
    view="このおばさん達はお隣の佐藤さん達だ。<br/><br/>何やら井戸端会議をしているらしい。"
    hidari_object='<img src= "image/gun_syufu.png" height="400px">'
  }else if(num==9){ 
    view="おはようございます、おばさん。今日もいい天気ですね。"
  }else if(num==10){ 
    view="あら、こんな時間に珍しいわね。<br/><br/>最近、物騒な事件が多いから気を付けるのよ"
  }else if(num==11){ 
    view="大丈夫ですよ、こう見えても俺、強いですから！<br/><br/>じゃあ、学校向かいますね。"
  }else if(num==12){ 
　　view="なんか銃を発砲する人がうろついてるらしいぜ<br/><br/>おばさんたちがいて安心だが、俺たちも気を付けないと！"
　　hidari_object='<img src= "image/pckun.png" height="400px">'
  }else if(num==13){
    view="たしかに気を付けないとな…。<br/><br/>って、目の前にいかにもガラの悪い男がしゃがんでるぞ"
  }else if(num==14){
    view="なんだ、お前ら！！！！<br/><br/>俺はただ壁を叩いてるだけだぞ！！！<br/><br/>特にそのじゃんけんが好きそうな青い服のやつ！！！！じろじろ見るんじゃねぇ！！！！"
    hidari_object='<img src= "image/kabedon.png" height="400px">'
    var audio = new Audio("sounds/kabedon.mp3"); //bgm
    　audio.play();
  }else if(num==15){
    view="なんだと赤い服のお前！！<br/><br/>じゃんけん好きの何が悪いんだよ！！！！！"
  }else if(num==16){
    view="お前の服が気に入らねぇ！！！しかも、じゃんけんばかりでうるせぇんだよ！！！"
    hidari_object='<img src= "image/kenka2.png" height="400px">'
    var audio = new Audio("sounds/naguru.wav"); //bgm
    audio.play();
  }else if(num==17){
　　view="やばい！！！ぱそこん君が赤い服の男に殴られてる！おれも…やるしかない！！"
　　var audio = new Audio("sounds/naguru.wav"); //bgm
    audio.play();
  }else if(num==18){
    view="<br/><br/>待て！！！赤い服のお前！！！！！！！"
    hidari_object='<img src= "image/energy.png" height="400px">'
  }else if(num==19){
    view="まさか、お前！！その構えは！！！！！！"
    hidari_object='<img src= "image/bikkuri.png" height="400px">'
  }else if(num==20){
    view="くらえ！！！！波〇拳だ！！！！"
    hidari_object='<img src= "image/energy_huhatu.png" height="400px">'
    var audio = new Audio("sounds/poka.mp3"); //bgm
    audio.play();
  }else if(num==21){
    view="不発じゃねーか！驚いて損したぜ<br/><br/>このまま、こいつはぼこぼこにしてやるよ！"
    hidari_object='<img src= "image/kenka2.png" height="400px">'
    var audio = new Audio("sounds/naguru.wav"); //bgm
    audio.play();
  }else if(num==22){
    view="このままじゃ、ぱそこん君が死んじゃう！<br/><br/>どうすれば…。だが、波動拳はもう打てない…。"
  }else if(num==23){
    view="<br/><br/>？？？「あきらめちゃ、だめだーーーーーーーー！！！！！」"
  }else if(num==24){
    view="こ、この声は！？、み、みんなの声だ！！！！"
    hidari_object='<img src= "image/group.png" height="400px">'    
  }else if(num==25){
    view="みんなの思いが伝わってきたぜ！！！！！！！うおおおおおおおおおおおおおおおおおおお<br/><br/>力がたまってきたぜ！！！！！！くらえ！赤い服のおっさん！"
    hidari_object='<img src= "image/supuer.png" height="400px">'
  }else if(num==26){
    view="<br/><br/>か〇はめ波！！！！！！！！！！！！！！！！！！！！！！！！！！！"
    hidari_object='<img src= "image/energy_ha.png" height="400px">'
    var audio = new Audio("sounds/kamehameha.mp3"); //bgm
    audio.play();
  }else if(num==27){
    view="ぐわーーーーーーーーーーー！！"
    hidari_object='<img src= "image/energy_ha_kurau.png" height="400px">'
  }else if(num==28){
    view="やった！！！！ぱそこん君！！！！！大丈夫か？"
    hidari_object='<img src= "image/energy.png" height="400px">'
  }else if(num==29){
    view="あっ、一緒に吹っ飛ばされて死んでた。"
    hidari_object='<img src= "image/ohaka.png" height="400px">'
    var audio = new Audio("sounds/tin.mp3"); //bgm
    audio.play();
  }else if(num==30){
    view="やべぇ、すまぬ。"
    hidari_object='<img src= "image/hakamairi.png" height="400px">'
  }else if(num==31){
    view= "<br/><br/>めでたし、めでたし。"
    hidari_object='<img src= "image/end.png"   height="500px">'
  }
    $(".told").html(view);
$(".object").html(hidari_object);
// $(".right_object").html(migi_object);
// $(".back").html(usiro);

}