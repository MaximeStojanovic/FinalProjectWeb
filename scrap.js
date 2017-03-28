var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var rs = getJson("https://www.ldlc.com/navigation/gc702vm-gc073d");

function getJson(url)
{
	var title,prix,r,res;
	request(url, function(error,response,body){
		if(error)
		{
			console.log("Error" + error);
		}
		//console.log("Status code"+response.statusCode);
		var $ = cheerio.load(body);

		$('section.adview').each(function (index)
		{

			if(($(this).find('div.id').text())=="ctl00_ucHeaderControl_ucMiniHeaderProduct_ctl00")	
			{


			if(($(this).find('span.property').text())=="miniPrice")	
			{
				prix = $(this).find('span.value').text().trim();
			}
			if(($(this).find('span.property').text())=="miniDgn")
			{
				title = $(this).find('span.value').text().trim();
			}

			}
		});
		console.log("title" + title);
		console.log("url" + url);

		r = parseData(title,prix)
		});	
	res= JSON.stringify(r);
	return res;
}
