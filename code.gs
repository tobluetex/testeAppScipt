/**
  On the getAccess function I'm creating a tonken to be used at the next function. 
**/

async function getAccess(){
 
  var urlToken = 'https://.........../auth/token'
  
  var accesData = {
    "cliente": "client_name",
    "password": "client_password"
  }
  
  var options = {
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify(accesData)    
  }
 
  var tokenStr = await JSON.parse(UrlFetchApp.fetch(urlToken, options)).token
   
  var token = await UrlFetchApp.fetch(urlToken, options)
  
  return tokenStr
   
}


/**
  This function was designed for getting the data. It can't reconize the token.

**/



async function getData(){
  
  var token = await getAccess()
    
  var urlData = 'https://........./v2/pull/paged'
  
  var payload = { 
    "id": 22, 
    "page" : 0,
    "parameters" : { 
        "dataini" : "20/09/2020 00:00:00", 
        "datafim" : "20/09/2020 23:59:59",
        "unidade" : "",
        "equipamento" : "",
        "operacao" : "",
        "operador" : "", 
        "talhao" : "",
        "ordemservico" : ""
        }   
  } 
  
  var headers = {
      "X-Auth-Token": token

    } 
  
  var options2 = {
    "method": "POST",
    "contentType": "application/json",
    "headers": headers,
    "payload": payload
  }
       
  var data = await UrlFetchApp.fetch(urlData, options2)
  
  Logger.log(data)
  
}
