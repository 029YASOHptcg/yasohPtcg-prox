/**
 * デッキ作成フォームに関する動作
 */
$(function(){
	/*
	 * 入力フォームを追加します
	 */
	$('#addCardButton').click(function(){
		$('#deckList').append('<li class="cardUrl">'
								+'<b>画像URL: </b>'
								+'<input type="text" class="deckCodeText" size="15">'
								+'<b> 枚数: </b>'
								+'<input type="text" class="cardNums" size="2">'
								+'</li>'
							);
	});
	
	/*
	 * フォームに入力された内容からデッキデータを生成します
	 */
	$('#buildDeckButton').click(function(){
		var arrayCards = [];
		$('#deckList li').each(function(num) {
			for (var i=1; i<=$('.cardNums').eq(num).val(); i++) {
				arrayCards.push($('.deckCodeText').eq(num).val());
				arrayCards.push('\n');
			}
		});
		if(arrayCards[arrayCards.length-1]='\n') arrayCards.pop();
		var result = arrayCards.join('')
		$('#deckData').val(result);
	});
	
	/*
	 * 格納されたデッキデータを配列に格納します
	 */
	$('#setDeckButton').click(function(){
		subDeck = $('#deckData').val().split("\n");
		deck = subDeck.concat(); //リセット用の控え
		$('#deckListImages').empty();
		for (var i=0; i<=deck.length-1; i++){
			$('#deckListImages').append('<img src="'+deck[i]+'"width="35" height="48.85">');
			if((i+1)%10==0) $('#deckListImages').append('<br>');
		}
		if(deck.length!=0) window.alert('デッキが設定されました');
	});
	
	/**
	 * デッキデータをクリップボードに保存
	 */
	$('#copyTextButton').click(function(){
		$('#deckData').select();
		document.execCommand("Copy");
		window.alert('クリップボードにコピーしました');
	});
	
	$('#selectButton').click(function(){
		subDeck = deck1.concat();
		deck = subDeck.concat(); //リセット用の控え
		if(deck.length!=0) window.alert('デッキが設定されました');
	});
});
