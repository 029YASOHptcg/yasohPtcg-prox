//このスクリプトではカードの移動に関する動作を記述する
const C_BRANK = -10;
var putCardBottom = true;

$(function(){
  $('#bench1').droppable({
      over: function(e,ui) {
        $(this)
          .css('background', '#e0ffff')
          .css('border', '3px solid #00bfff')
          .find('#bench1 p')
      },
      out: function(e,ui) {
        $(this)
          .css('background', '#81bbe3')
          .css('border', '3px solid #FFFFFF')
          .css('border-style', 'dashed')
          .find('#bench1 p')
      },
      drop: function(e,ui) {
    	  $(this)
    	  	.css('background', '#81bbe3')
    	  	.css('border', '3px solid #FFFFFF')
    	  	.css('border-style', 'dashed')
    	  	.find('#bench1 p');
    	  var $preObj = $(ui.draggable[0]);
    	  if(putCardBottom){
    		  var $srcObj = $($preObj).appendTo(this);
    	  }else{
    		  var $srcObj = $($preObj).prependTo(this);
    	  }
    	  var obj = {};
  	    	obj.left = $(this).offset().left;
  	    	obj.top = $(this).offset().top + ($('#bench1 p').length-1)*C_BRANK;
  	      $srcObj.offset(obj);
    	  $('#bench1 p').draggable({
  		    revert: "invalid",
  		    stop: function(e,ui) { 		    	
		    	$('#bench1 p').each(function(index, element){
		    	  var obj = {};
		  	    	obj.left = $('#bench1').offset().left;
		  	    	obj.top = $('#bench1').offset().top + (index)*C_BRANK;
		  	      $(element).offset(obj);
		  	      $(element).css('z-index', $('#bench1 p').length - index);
		    	});		    	
		    }
  	      });
    	  return false;
      }
  });
  
  $('#bench2').droppable({
      over: function(e,ui) {
        $(this)
          .css('background', '#e0ffff')
          .css('border', '3px solid #00bfff')
          .find('#bench2 p')
      },
      out: function(e,ui) {
        $(this)
          .css('background', '#81bbe3')
          .css('border', '3px solid #FFFFFF')
          .css('border-style', 'dashed')
          .find('#bench2 p')
      },
      drop: function(e,ui) {
    	  $(this)
    	  	.css('background', '#81bbe3')
    	  	.css('border', '3px solid #FFFFFF')
    	  	.css('border-style', 'dashed')
    	  	.find('#bench2 p');
    	  var $preObj = $(ui.draggable[0]);
    	  if(putCardBottom){
    		  var $srcObj = $($preObj).appendTo(this);
    	  }else{
    		  var $srcObj = $($preObj).prependTo(this);
    	  }
    	  var obj = {};
  	    	obj.left = $(this).offset().left;
  	    	obj.top = $(this).offset().top + ($('#bench2 p').length-1)*C_BRANK;
  	      $srcObj.offset(obj);
    	  $('#bench2 p').draggable({
  		    revert: "invalid",  		    
  		    stop: function(e,ui) {
  		    	$('#bench2 p').each(function(index, element){
  		    	  var obj = {};
  		  	    	obj.left = $('#bench2').offset().left;
  		  	    	obj.top = $('#bench2').offset().top + (index)*C_BRANK;
  		  	      $(element).offset(obj);
  		  	      $(element).css('z-index', $('#bench2 p').length - index);
  		    	});
  		    }
  	      });
    	  return false;
      }
  });
  
  $('#bench3').droppable({
      over: function(e,ui) {
        $(this)
          .css('background', '#e0ffff')
          .css('border', '3px solid #00bfff')
          .find('#bench3 p')
      },
      out: function(e,ui) {
        $(this)
          .css('background', '#81bbe3')
          .css('border', '3px solid #FFFFFF')
          .css('border-style', 'dashed')
          .find('#bench3 p')
      },
      drop: function(e,ui) {
    	  $(this)
    	  	.css('background', '#81bbe3')
    	  	.css('border', '3px solid #FFFFFF')
    	  	.css('border-style', 'dashed')
    	  	.find('#bench3 p');
    	  var $preObj = $(ui.draggable[0]);
    	  if(putCardBottom){
    		  var $srcObj = $($preObj).appendTo(this);
    	  }else{
    		  var $srcObj = $($preObj).prependTo(this);
    	  }
    	  var obj = {};
  	    	obj.left = $(this).offset().left;
  	    	obj.top = $(this).offset().top + ($('#bench3 p').length-1)*C_BRANK;
  	      $srcObj.offset(obj);
    	  $('#bench3 p').draggable({
  		    revert: "invalid",  		    
  		    stop: function(e,ui) {
  		    	$('#bench3 p').each(function(index, element){
  		    	  var obj = {};
  		  	    	obj.left = $('#bench3').offset().left;
  		  	    	obj.top = $('#bench3').offset().top + (index)*C_BRANK;
  		  	      $(element).offset(obj);
  		  	      $(element).css('z-index', $('#bench3 p').length - index);
  		    	});
  		    }
  	      });
    	  return false;
      }
  });
  
  $('#bench4').droppable({
      over: function(e,ui) {
        $(this)
          .css('background', '#e0ffff')
          .css('border', '3px solid #00bfff')
          .find('#bench4 p')
      },
      out: function(e,ui) {
        $(this)
          .css('background', '#81bbe3')
          .css('border', '3px solid #FFFFFF')
          .css('border-style', 'dashed')
          .find('#bench4 p')
      },
      drop: function(e,ui) {
    	  $(this)
    	  	.css('background', '#81bbe3')
    	  	.css('border', '3px solid #FFFFFF')
    	  	.css('border-style', 'dashed')
    	  	.find('#bench4 p');
    	  var $preObj = $(ui.draggable[0]);
    	  if(putCardBottom){
    		  var $srcObj = $($preObj).appendTo(this);
    	  }else{
    		  var $srcObj = $($preObj).prependTo(this);
    	  }
    	  var obj = {};
  	    	obj.left = $(this).offset().left;
  	    	obj.top = $(this).offset().top + ($('#bench4 p').length-1)*C_BRANK;
  	      $srcObj.offset(obj);
    	  $('#bench4 p').draggable({
  		    revert: "invalid",  		    
  		    stop: function(e,ui) {
  		    	$('#bench4 p').each(function(index, element){
  		    	  var obj = {};
  		  	    	obj.left = $('#bench4').offset().left;
  		  	    	obj.top = $('#bench4').offset().top + (index)*C_BRANK;
  		  	      $(element).offset(obj);
  		  	      $(element).css('z-index', $('#bench4 p').length - index);
  		    	});
  		    }
  	      });
    	  return false;
      }
  });
  
  $('#bench5').droppable({
      over: function(e,ui) {
        $(this)
          .css('background', '#e0ffff')
          .css('border', '3px solid #00bfff')
          .find('#bench5 p')
      },
      out: function(e,ui) {
        $(this)
          .css('background', '#81bbe3')
          .css('border', '3px solid #FFFFFF')
          .css('border-style', 'dashed')
          .find('#bench5 p')
      },
      drop: function(e,ui) {
    	  $(this)
    	  	.css('background', '#81bbe3')
    	  	.css('border', '3px solid #FFFFFF')
    	  	.css('border-style', 'dashed')
    	  	.find('#bench5 p');
    	  var $preObj = $(ui.draggable[0]);
    	  if(putCardBottom){
    		  var $srcObj = $($preObj).appendTo(this);
    	  }else{
    		  var $srcObj = $($preObj).prependTo(this);
    	  }
    	  var obj = {};
  	    	obj.left = $(this).offset().left;
  	    	obj.top = $(this).offset().top + ($('#bench5 p').length-1)*C_BRANK;
  	      $srcObj.offset(obj);
    	  $('#bench5 p').draggable({
  		    revert: "invalid",  		    
  		    stop: function(e,ui) {
  		    	$('#bench5 p').each(function(index, element){
  		    	  var obj = {};
  		  	    	obj.left = $('#bench5').offset().left;
  		  	    	obj.top = $('#bench5').offset().top + (index)*C_BRANK;
  		  	      $(element).offset(obj);
  		  	      $(element).css('z-index', $('#bench5 p').length - index);
  		    	});
  		    }
  	      });
    	  return false;
      }
  });
  
  $('#stadium').droppable({
      over: function(e,ui) {
        $(this)
          .css('background', '#e0ffff')
          .css('border', '3px solid #00bfff')
          .find('#stadium p')
      },
      out: function(e,ui) {
        $(this)
          .css('background', '#81bbe3')
          .css('border', '3px solid #FFFFFF')
          .css('border-style', 'dashed')
          .find('#stadium p')
      },
      drop: function(e,ui) {
    	  $(this)
    	  	.css('background', '#81bbe3')
    	  	.css('border', '3px solid #FFFFFF')
    	  	.css('border-style', 'dashed')
    	  	.find('#stadium p');
    	  var $preObj = $(ui.draggable[0]);
    	  if(putCardBottom){
    		  var $srcObj = $($preObj).appendTo(this);
    	  }else{
    		  var $srcObj = $($preObj).prependTo(this);
    	  }
    	  var obj = {};
  	    	obj.left = $(this).offset().left;
  	    	obj.top = $(this).offset().top + ($('#stadium p').length-1)*C_BRANK;
  	      $srcObj.offset(obj);
    	  $('#stadium p').draggable({
  		    revert: "invalid",  		    
  		    stop: function(e,ui) {
  		    	$('#stadium p').each(function(index, element){
  		    	  var obj = {};
  		  	    	obj.left = $('#stadium').offset().left;
  		  	    	obj.top = $('#stadium').offset().top + (index)*C_BRANK;
  		  	      $(element).offset(obj);
  		  	      $(element).css('z-index', $('#stadium p').length - index);
  		    	});
  		    }
  	      });
    	  return false;
      }
  });
  
  $('#free1').droppable({
      over: function(e,ui) {
        $(this)
          .css('background', '#e0ffff')
          .css('border', '3px solid #00bfff')
          .find('#free1 p')
      },
      out: function(e,ui) {
        $(this)
          .css('background', '#81bbe3')
          .css('border', '3px solid #FFFFFF')
          .css('border-style', 'dashed')
          .find('#free1 p')
      },
      drop: function(e,ui) {
    	  $(this)
    	  	.css('background', '#81bbe3')
    	  	.css('border', '3px solid #FFFFFF')
    	  	.css('border-style', 'dashed')
    	  	.find('#free1 p');
    	  var $preObj = $(ui.draggable[0]);
    	  if(putCardBottom){
    		  var $srcObj = $($preObj).appendTo(this);
    	  }else{
    		  var $srcObj = $($preObj).prependTo(this);
    	  }
    	  var obj = {};
  	    	obj.left = $(this).offset().left;
  	    	obj.top = $(this).offset().top + ($('#free1 p').length-1)*C_BRANK;
  	      $srcObj.offset(obj);
    	  $('#free1 p').draggable({
  		    revert: "invalid",  		    
  		    stop: function(e,ui) {
  		    	$('#free1 p').each(function(index, element){
  		    	  var obj = {};
  		  	    	obj.left = $('#free1').offset().left;
  		  	    	obj.top = $('#free1').offset().top + (index)*C_BRANK;
  		  	      $(element).offset(obj);
  		  	      $(element).css('z-index', $('#free1 p').length - index);
  		    	});
  		    }
  	      });
    	  return false;
      }
  });
  
  $('#battle').droppable({
      over: function(e,ui) {
        $(this)
          .css('background', '#e0ffff')
          .css('border', '3px solid #00bfff')
          .find('#battle p')
      },
      out: function(e,ui) {
        $(this)
          .css('background', '#81bbe3')
          .css('border', '3px solid #FFFFFF')
          .css('border-style', 'dashed')
          .find('#battle p')
      },
      drop: function(e,ui) {
    	  $(this)
    	  	.css('background', '#81bbe3')
    	  	.css('border', '3px solid #FFFFFF')
    	  	.css('border-style', 'dashed')
    	  	.find('#battle p');
    	  var $preObj = $(ui.draggable[0]);
    	  if(putCardBottom){
    		  var $srcObj = $($preObj).appendTo(this);
    	  }else{
    		  var $srcObj = $($preObj).prependTo(this);
    	  }
    	  var obj = {};
  	    	obj.left = $(this).offset().left;
  	    	obj.top = $(this).offset().top + ($('#battle p').length-1)*C_BRANK;
  	      $srcObj.offset(obj);
    	  $('#battle p').draggable({
  		    revert: "invalid",  		    
  		    stop: function(e,ui) {
  		    	$('#battle p').each(function(index, element){
  		    	  var obj = {};
  		  	    	obj.left = $('#battle').offset().left;
  		  	    	obj.top = $('#battle').offset().top + (index)*C_BRANK;
  		  	      $(element).offset(obj);
  		  	      $(element).css('z-index', $('#battle p').length - index);
  		    	});
  		    }
  	      });
    	  return false;
      }
  });
  
  $('#free2').droppable({
      over: function(e,ui) {
        $(this)
          .css('background', '#e0ffff')
          .css('border', '3px solid #00bfff')
          .find('#free2 p')
      },
      out: function(e,ui) {
        $(this)
          .css('background', '#81bbe3')
          .css('border', '3px solid #FFFFFF')
          .css('border-style', 'dashed')
          .find('#free2 p')
      },
      drop: function(e,ui) {
    	  $(this)
    	  	.css('background', '#81bbe3')
    	  	.css('border', '3px solid #FFFFFF')
    	  	.css('border-style', 'dashed')
    	  	.find('#free2 p');
    	  var $preObj = $(ui.draggable[0]);
    	  if(putCardBottom){
    		  var $srcObj = $($preObj).appendTo(this);
    	  }else{
    		  var $srcObj = $($preObj).prependTo(this);
    	  }
    	  var obj = {};
  	    	obj.left = $(this).offset().left;
  	    	obj.top = $(this).offset().top + ($('#free2 p').length-1)*C_BRANK;
  	      $srcObj.offset(obj);
    	  $('#free2 p').draggable({
  		    revert: "invalid",  		    
  		    stop: function(e,ui) {
  		    	$('#free2 p').each(function(index, element){
  		    	  var obj = {};
  		  	    	obj.left = $('#free2').offset().left;
  		  	    	obj.top = $('#free2').offset().top + (index)*C_BRANK;
  		  	      $(element).offset(obj);
  		  	      $(element).css('z-index', $('#free2 p').length - index);
  		    	});
  		    }
  	      });
    	  return false;
      }
  });
  
  $('#hand').droppable({
      over: function(e,ui) {
        $(this)
          .css('background', '#48658c')
          .find('#hand p')
      },
      out: function(e,ui) {
        $(this)
          .css('background', '#2a4e7c')
          .find('#hand p')
      },
      drop: function(e,ui) {
    	  $(this).css('background', '#2a4e7c')
    	  var $preObj = $(ui.draggable[0]);
    	  var $srcObj = $($preObj).appendTo('#hand');
    	  $('#hand p').draggable({revert: "invalid"});
      }
  });
  
  $('#trash').droppable({
      over: function(e,ui) {
        $(this)
          .css('background', '#fd8e9f')
          .find('#trash p')
      },
      out: function(e,ui) {
        $(this)
          .css('background', '#f57e86')
          .find('#trash p')
      },
      drop: function(e,ui) {
    	  trash = trash + 1;
    	  $(this).css('background', '#f57e86')
    	  var $srcObj = $(ui.draggable[0]).appendTo('#trash');
    	  $('#trash p').draggable({
  		    revert: "invalid",
  	      });
    	  return false;
      }
  });
  
  $('#sendToTrash').droppable({
      over: function(e,ui) {
        $(this)
          .css('background', '#f5c1ca')
          .find('#trash p')
      },
      out: function(e,ui) {
        $(this)
          .css('background', '#c99da3')
          .find('#trash p')
      },
      drop: function(e,ui) {
    	  trash = trash + 1;
    	  $(this).css('background', '#c99da3')
    	  var $srcObj = $(ui.draggable[0]).appendTo('#trash');
    	  $('#trash p').draggable({
  		    revert: "invalid",
  	      });
    	  return false;
      }
  });
  
  $('#lost').droppable({
      over: function(e,ui) {
        $(this)
          .css('background', '#b7adff')
          .find('#lost p')
      },
      out: function(e,ui) {
        $(this)
          .css('background', '#a392f5')
          .find('#lost p')
      },
      drop: function(e,ui) {
    	  $(this).css('background', '#a392f5')
    	  var $srcObj = $(ui.draggable[0]).appendTo('#lost');
    	  $('#lost p').draggable({
  		    revert: "invalid",
  	      });
    	  return false;
      }
  });
});