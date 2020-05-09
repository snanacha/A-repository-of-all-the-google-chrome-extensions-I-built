chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
//alert(request)
	const regularexpression = new RegExp('the','gi')
	const matches = document.documentElement.innerHTML.match(regularexpression)
	sendResponse({count:matches.length})
})
