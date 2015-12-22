
var gourls = 'http://regex.info/exif.cgi?dummy=on&imgurl=';

chrome.contextMenus.create({"title": "show exif", "contexts":["image"], "onclick": search});

function search(info, tab){
	var url=info["srcUrl"];
	if(/sinaimg\.cn\/.*\//.test(url)){
		url = url.replace(/sinaimg\.cn\/.*\//, 'sinaimg.cn/large/');
		console.log(url);
	}
	console.log(url);
	chrome.tabs.create({"url": gourls+url});
}