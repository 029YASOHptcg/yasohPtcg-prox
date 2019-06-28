var deck = [];
var subDeck = [];
var side = [];
var counter=0;
var isDroppable=false;

/**
 * デッキのシャッフル
 */
function shuffle(){
	for(i = deck.length - 1; i > 0; i--) {
	    var j = Math.floor(Math.random() * (i + 1));
	    var tmp = deck[i];
	    deck[i] = deck[j];
	    deck[j] = tmp;
	}
	window.alert('デッキをシャッフルしました');
}

function osouji(){
	$('#showCardsArea p').each(function(index, element){
		  deck.push($(element).find("img").attr("src"));
	});
	$('#showCardsArea').empty();
	let deckNum = deck.length;
	$('#numOfDeck').html(deckNum);
}

function osouji2(){
	$('#showSideArea p').each(function(index, element){
		  side.push($(element).find("img").attr("src"));
	});
	let Snum = side.length; 
	$('#numOfSide').html(Snum);
	$('#showSideArea').empty();
	if(isDroppable){
		isDroppable=false;
		$('#showSideArea').droppable("destroy");
	}
}

/**
 * 盤面のリセット
 */
function reset(){
	//盤面のカードを全て取り除く、いらないのっ！！
	$('#bench1').empty();
	$('#bench2').empty();
	$('#bench3').empty();
	$('#bench4').empty();
	$('#bench5').empty();
	$('#stadium').empty();
	$('#battle').empty();
	$('#free1').empty();
	$('#free2').empty();
	$('#hand').empty();
	$('#drawedCard').empty();
	$('#trash').empty();
	$('#lost').empty();
	
	//サイドを空にしてデッキを控えから代入
	side = [];
	deck = [];
	deck = subDeck.concat();
	
	//デッキのシャッフル(アラート非表示にしたいため関数化せず)
	for(i = deck.length - 1; i > 0; i--) {
	    var j = Math.floor(Math.random() * (i + 1));
	    var tmp = deck[i];
	    deck[i] = deck[j];
	    deck[j] = tmp;
	}
	
	//先にサイドにカードを置く(ルールに従うのめんどかった)
	for(i = 0; i <= 5; i++) {
		side.unshift(deck[0]);
		deck.shift();
	}
	let Snum = side.length; 
	$('#numOfSide').html(Snum);
	
	//僕は優しいので手札も7枚引いておいてあげる(ハート)
	for(i = 0; i <= 6; i++){
  		var $srcObj = $('<p style="position: absolute"><img src="'+deck[0]+'"width="63" height="88"></p>').appendTo('#hand');
  		deck.shift();
  	}
	$('#hand p').each(function(index, element){
    	  var obj = {};
  	    	obj.left = $('#hand').offset().left + (index)*40;//何も言うことがないわ！
  	    	obj.top = $('#hand').offset().top+6;//ここまで細かく気遣ってるのよ！！
  	      $(element).offset(obj);
    	});
	let deckNum = deck.length;
	$('#numOfDeck').html(deckNum);
	$('#hand p').draggable({revert: "invalid"});
	
	//お知らせもしてあげる、えらい！！
	window.alert('盤面をリセットしました');
}

$(function(){
  /**
   * カードをドローする
   * 山札があれば配列の最上部を取得し、直後にシフトを行う
   */
  $('#drawButton').click(function () {
	  	if(deck.length > 0){
	  		var $srcObj = $('<p style="position: absolute"><img src="'+deck[0]+'"width="63" height="88"></p>').appendTo('#drawedCard');
	  		deck.shift();
	  		var obj = {};
  	  			obj.left = $('#drawedCard').offset().left + ($('#drawedCard p').length-1)*20;	
  	  			obj.top = $('#drawedCard').offset().top;
  	  			$srcObj.offset(obj);
			let deckNum = deck.length;
			$('#numOfDeck').html(deckNum);
  	  		$('#drawedCard p').draggable({revert: "invalid"});
	  	}else{
	  		window.alert('デッキが0枚です');
	  	}
  });
  
  $('#drawBottomButton').click(function () {
	  	if(deck.length > 0){
	  		var $srcObj = $('<p style="position: absolute"><img src="'+deck[deck.length-1]+'"width="63" height="88"></p>').appendTo('#drawedCard');
	  		deck.pop();
	  		var obj = {};
	  			obj.left = $('#drawedCard').offset().left + ($('#drawedCard p').length-1)*20;	
	  			obj.top = $('#drawedCard').offset().top;
	  			$srcObj.offset(obj);
			let deckNum = deck.length;
			$('#numOfDeck').html(deckNum);
	  		$('#drawedCard p').draggable({revert: "invalid"});
	  	}else{
	  		window.alert('デッキが0枚です');
	  	}
});
  
  /**
   * カードをデッキの上に戻します
   */
  $('#returnToDeckTop').droppable({
      over: function(e,ui) {
        $(this).css('background', '#4a63a0');
      },
      out: function(e,ui) {
        $(this).css('background', '#558fa8');
      },
      drop: function(e,ui) {
    	  $(this).css('background', '#558fa8');
    	  $(ui.draggable).appendTo('#returnToDeckTop');
    	  deck.unshift(ui.draggable.find("img").attr("src"));
    	  $('#returnToDeckTop p').remove();
	  let deckNum = deck.length;
	  $('#numOfDeck').html(deckNum);
      }
  });
  
  /**
   * カードをデッキの下に戻します
   */
  $('#returnToDeckBottom').droppable({
      over: function(e,ui) {
        $(this).css('background', '#e5cdd0');
      },
      out: function(e,ui) {
        $(this).css('background', '#c99da3');
      },
      drop: function(e,ui) {
    	  $(this).css('background', '#c99da3');
    	  $(ui.draggable).appendTo('#returnToDeckBottom');
    	  deck.push(ui.draggable.find("img").attr("src"));
    	  $('#returnToDeckBottom p').remove();
	  let deckNum = deck.length;
	  $('#numOfDeck').html(deckNum);
      }
  });
  
  $('#showDeckButton').click(function () {
	  $('#showCardsArea p').each(function(index, element){
		  deck.push($(element).find("img").attr("src"));
	  });
	  $('#showCardsArea').empty();
	  for(i = 0; i <= 5; i++){
	  		if(i+counter <= deck.length-1){
	  			//var $srcObj = $('<p style="position: absolute"><img src="'+deck[i+counter]+'"width="63" height="88"></p>').appendTo('#showCardsArea');
	  			var $srcObj = $('<p style="position: absolute"><img src="'+deck[0]+'"width="63" height="88"></p>').appendTo('#showCardsArea');
	  			deck.shift();
	  		}
	  }
	  counter+=6;
	  if(counter > deck.length-1) counter=0;
	  $('#showCardsArea p').each(function(index, element){
		  var obj = {};
		      obj.left = $('#showCardsArea').offset().left + (index)*45;//何も言うことがないわ！
	  	      obj.top = $('#showCardsArea').offset().top;//ここまで細かく気遣ってるのよ！！
	  	      $(element).offset(obj);
	  });
	  $('#showCardsArea p').draggable({revert: "invalid"});
  });
  
  $('#shuffleButton').click(function () {
	  if(window.confirm('デッキをシャッフルしますか？')){
		  if(deck.length > 0){
			  shuffle();
		  }else{
			  window.alert('デッキが0枚です');
		  }
	  }
  });
  
  $('#side').click(function () {
	  if(window.confirm('サイドを取りますか？')){
		  if(side.length > 0){
		  		var $srcObj = $('<p style="position: absolute"><img src="'+side[0]+'"width="63" height="88"></p>').appendTo('#drawedCard');
		  		side.shift();
		  		let Snum = side.length; 
		  		$('#numOfSide').html(Snum);
		  		var obj = {};
	  	  			obj.left = $('#drawedCard').offset().left + ($('#drawedCard p').length-1)*20;	
	  	  			obj.top = $('#drawedCard').offset().top;
	  	  			$srcObj.offset(obj);
	  	  			$('#drawedCard p').draggable({revert: "invalid"});
		  	}else{
		  		window.alert('サイドが0枚です');
		  	}
	  }
  });
  
  $('#showSideButton').click(function () {
	  if(window.confirm('サイドを見ますか？')){
		  osouji2();
		  if(side.length > 0){
			  let sLength = side.length;
			  for(a = 0; a <= sLength-1; a++){
			  	var $srcObj = $('<p style="position: absolute"><img src="'+side[0]+'"width="63" height="88"></p>').appendTo('#showSideArea');
			  	side.shift();
			  }
			  $('#showSideArea p').each(function(index, element){
				  var obj = {};
				      obj.left = $('#showSideArea').offset().left + (index)*35;
			  	      obj.top = $('#showSideArea').offset().top;
			  	      $(element).offset(obj);
			  });
			  $('#showSideArea p').draggable({revert: "invalid"});
			  
			  $('#showSideArea').droppable({
			      over: function(e,ui) {
			        $(this)
			          .css('background', '#a2e8a0')
			          .find('#lost p')
			      },
			      out: function(e,ui) {
			        $(this)
			          .css('background', '#80c47a')
			          .find('#lost p')
			      },
			      drop: function(e,ui) {
			    	  $(this).css('background', '#80c47a')
			    	  var $srcObj = $(ui.draggable[0]).appendTo('#showSideArea');
			    	  $('#showSideArea p').each(function(index, element){
						  var obj = {};
						      obj.left = $('#showSideArea').offset().left + (index)*35;
					  	      obj.top = $('#showSideArea').offset().top;
					  	      $(element).offset(obj);
					  });
			    	  $('#showSideArea p').draggable({revert: "invalid"});
			      }
			  });
			  isDroppable = true;
		  	}else{
		  		window.alert('サイドが0枚です');
		  	}
	  }
  });
  
  $('#resetButton').click(function () {
	  if(window.confirm('リセットしますか？')){
		  if(subDeck.length > 0){
			  reset();
		  }else{
		  		window.alert('デッキがセットされていません');
		  }
	  }
  });
  
  $('#coinTossButton').click(function () {
	  if(Math.floor(Math.random()*2+1) == 1){
		  window.alert('コイントス: オモテ');
	  }else{
		  window.alert('コイントス: ウラ');
	  }
  });
  
  $('#diceButton').click(function () {
	  window.alert('サイコロ: '+Math.floor(Math.random()*6+1));
  });
});
