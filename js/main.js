/**
 * このスクリプトではメインページのUIに関する動作を記述する
 */
$(function(){
/**
 * 事前処理
 */
  $("#trash").toggle();
  var trash = false;
  $("#deck").toggle();
  var deck = false;
  $("#lost").toggle();
  var lost = false;
  $("#sideCards").toggle();
  var sideCards = false;
  //$("#setting").toggle();
  var setting = true;
  $("#settingButton").css('background-color', '#92b0b7');
  $("#homeButton").css('background-color', '#92b0b7');
  
  $("#homeButton").click(function(){
	  $("#home").css('display', 'block');
	  $("#mainBody").css('display', 'none');
	  $("#deckBuild").css('display', 'none');
	  
	  $("#homeButton").css('background-color', '#92b0b7');
	  $("#mainBodyButton").css('background-color', '#5b6d71');
	  $("#kouchikuButton").css('background-color', '#5b6d71');
  });
  
  $("#mainBodyButton").click(function(){
	  $("#home").css('display', 'none');
	  $("#mainBody").css('display', 'block');
	  $("#deckBuild").css('display', 'none');
	  
	  $("#homeButton").css('background-color', '#5b6d71');
	  $("#mainBodyButton").css('background-color', '#92b0b7');
	  $("#kouchikuButton").css('background-color', '#5b6d71');
  });
  
  $("#kouchikuButton").click(function(){
	  $("#home").css('display', 'none');
	  $("#mainBody").css('display', 'none');
	  $("#deckBuild").css('display', 'block');
	  
	  $("#homeButton").css('background-color', '#5b6d71');
	  $("#mainBodyButton").css('background-color', '#5b6d71');
	  $("#kouchikuButton").css('background-color', '#92b0b7');
  });
  
  $("#trashButton").click(function(){
	  if(deck){
		  osouji();
		  counter = 0;
		  $("#deckButton").css('background-color', '#5b6d71');
		  $("#deck").toggle("blind");
		  deck = false;
	  }
	  if(lost){
		  $("#lost").toggle("blind");
		  $("#lostButton").css('background-color', '#5b6d71');
		  lost = false;
	  }
	  if(setting){
		  $("#setting").toggle("blind");
		  $("#settingButton").css('background-color', '#5b6d71');
		  setting = false;
	  }
	  if(sideCards){
		  $("#sideCards").toggle("blind");
		  $("#sideButton").css('background-color', '#5b6d71');
		  sideCards = false;
	  }
	  
	  $("#trash").toggle("blind");
	  if(!trash){
		  $("#trashButton").css('background-color', '#92b0b7');
		  trash = true;
	  }else{
		  $("#trashButton").css('background-color', '#5b6d71');
		  trash = false;
	  }
  });
  
  $("#deckButton").click(function(){
	  if(trash){
		  $("#trash").toggle("blind");
		  $("#trashButton").css('background-color', '#5b6d71');
		  trash = false;
	  }
	  if(lost){
		  $("#lost").toggle("blind");
		  $("#lostButton").css('background-color', '#5b6d71');
		  lost = false;
	  }
	  if(setting){
		  $("#setting").toggle("blind");
		  $("#settingButton").css('background-color', '#5b6d71');
		  setting = false;
	  }
	  if(sideCards){
		  osouji2();
		  $("#sideCards").toggle("blind");
		  $("#sideButton").css('background-color', '#5b6d71');
		  sideCards = false;
	  }

	  osouji();
	  counter = 0;
	  $("#deck").toggle("blind");
	  if(!deck){
		  $("#deckButton").css('background-color', '#92b0b7');
		  deck = true;
	  }else{
		  $("#deckButton").css('background-color', '#5b6d71');
		  deck = false;
	  }
  });
  
  $("#lostButton").click(function(){
	  if(trash){
		  $("#trash").toggle("blind");
		  $("#trashButton").css('background-color', '#5b6d71');
		  trash = false;
	  }
	  if(deck){
		  osouji();
		  counter = 0;
		  $("#deck").toggle("blind");
		  $("#deckButton").css('background-color', '#5b6d71');
		  deck = false;
	  }
	  if(setting){
		  $("#setting").toggle("blind");
		  $("#settingButton").css('background-color', '#5b6d71');
		  setting = false;
	  }
	  if(sideCards){
		  osouji2();
		  $("#sideCards").toggle("blind");
		  $("#sideButton").css('background-color', '#5b6d71');
		  sideCards = false;
	  }
	  
	  $("#lost").toggle("blind");
	  if(!lost){
		  $("#lostButton").css('background-color', '#92b0b7');
		  lost = true;
	  }else{
		  $("#lostButton").css('background-color', '#5b6d71');
		  lost = false;
	  }  
  });
  
  $("#settingButton").click(function(){
	  if(trash){
		  $("#trash").toggle("blind");
		  $("#trashButton").css('background-color', '#5b6d71');
		  trash = false;
	  }
	  if(deck){
		  osouji();
		  counter = 0;
		  $("#deck").toggle("blind");
		  $("#deckButton").css('background-color', '#5b6d71');
		  deck = false;
	  }
	  if(lost){
		  $("#lost").toggle("blind");
		  $("#lostButton").css('background-color', '#5b6d71');
		  lost = false;
	  }
	  if(sideCards){
		  osouji2();
		  $("#sideCards").toggle("blind");
		  $("#sideButton").css('background-color', '#5b6d71');
		  sideCards = false;
	  }
	  
	  $("#setting").toggle("blind");
	  if(!setting){
		  $("#settingButton").css('background-color', '#92b0b7');
		  setting = true;
	  }else{
		  $("#settingButton").css('background-color', '#5b6d71');
		  setting = false;
	  }  
  });
  
  $("#sideButton").click(function(){
	  if(trash){
		  $("#trash").toggle("blind");
		  $("#trashButton").css('background-color', '#5b6d71');
		  trash = false;
	  }
	  if(deck){
		  osouji();
		  counter = 0;
		  $("#deck").toggle("blind");
		  $("#deckButton").css('background-color', '#5b6d71');
		  deck = false;
	  }
	  if(lost){
		  $("#lost").toggle("blind");
		  $("#lostButton").css('background-color', '#5b6d71');
		  lost = false;
	  }
	  if(setting){
		  $("#setting").toggle("blind");
		  $("#settingButton").css('background-color', '#5b6d71');
		  setting = false;
	  }
	  
	  osouji2();
	  $("#sideCards").toggle("blind");
	  if(!sideCards){
		  $("#sideButton").css('background-color', '#92b0b7');
		  sideCards = true;
	  }else{
		  $("#sideButton").css('background-color', '#5b6d71');
		  sideCards = false;
	  }  
  });
  
  $("#putCardBottomButton").click(function (){
	  putCardBottom = true;
	  $("#putCardBottomButton").css('background-color', '#6f332d');
	  $("#putCardTopButton").css('background-color', '#5784c5');
	  window.alert("下に重なるようにしました");
  });
  
  $("#putCardTopButton").click(function (){
	  putCardBottom = false;
	  $("#putCardBottomButton").css('background-color', '#ce5e54');
	  $("#putCardTopButton").css('background-color', '#2f496e');
	  window.alert("上に重なるようにしました");
  });
});
