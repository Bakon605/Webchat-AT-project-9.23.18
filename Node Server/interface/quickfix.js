function start(){
	
	//set title of window to Username
	var username = "Web Chat";
	username = document.getElementById("handle").value;
	
	document.title = username + " Is connected";
	
	//attempt to remove duplicates in online list
	
	var liText = '', liList = $('#Users li'), listForRemove = [];
	
	$(liList).each(function(){
		var text = $(this).text();
		
		if (liText.indexOf('|' + text + '|') == -1){
			liText += '|' + text + '|';
		}
		else{
			listForRemove.push($(this));
		}
		
	});
	
	$(listForRemove).each(function(){
		$(this).remove();
	});
		
	
}

setInterval(start, 100);