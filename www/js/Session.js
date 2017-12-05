$(function(){
    var intervalTime = 3600000;//3600000
    var intervalStatus = false;
    var myTimer;
    myTimer = setInterval(intervalCallback, intervalTime);

    $('body').bind('touchstart',function() {
        console.log('touchstart');
        clearInterval(myTimer);
    });

    $('body').bind('touchend', function() {
        console.log('touchend');
        myTimer = setInterval(intervalCallback, intervalTime);
    });
    // $('footer').hide()/;
   // document.addEventListener('resume',onResumeCallback, false);
});

$(document).ready(function() {
    $('#tab-kso').remove();
    var footer1 = $('footer').children().length;
    var footer2 = $('footer .regular').children().length;
	
	console.log(footer1, footer2);
	if(footer1>2){
		if(footer1<=4){
			console.log(11);
			$('.regular .col-xs-2 a img').css('width','48%');
		}else if(footer1>=5){
			console.log(12);
			$('.regular .col-xs-2 a img').css('width','65%');
		}
	}
	
	if(footer2>2){
		if(footer2<=4){
			console.log(21);
			$('footer .col-xs-2 a img').css('width','48%');
		}else if(footer2>=5){
			console.log(22);
			$('footer .col-xs-2 a img').css('width','65%');
		}
	}
});

function intervalCallback(){
             // alert('log');
    console.log('interval ');
    window.location.href = 'index_login2.html';
}

function setParam(company, bulan=null, tahun=null){
  console.log('setParam');
  sessionStorage.setItem('opco', company);
  if (sessionStorage.getItem('_com')!='ALL') {
    sessionStorage.setItem('opco', sessionStorage.getItem('_com'));
  }
  sessionStorage.setItem('bln', bulan);
  sessionStorage.setItem('thn', tahun);
}

function gotoPage(company=null, bulan=null, tahun=null, url){
  // setParam(company,bulan, tahun);
  window.location.href = url+".html";
}

function getParamFull(){
  var properties = [];  
  if (sessionStorage.getItem('opco')!=null) {
   var data = (
    sessionStorage.getItem('_com')!='ALL' ||  sessionStorage.getItem('_com')!=null)?
    sessionStorage.getItem('opco'):sessionStorage.getItem('_com');
    // var data = sessionStorage.getItem('opco');
   properties['opco'] = data;
  }
  if (sessionStorage.getItem('bln')!=null) {
   var data = sessionStorage.getItem('bln');
   properties['bln'] = data;
  }
  if (sessionStorage.getItem('thn')!=null) {
   var data = sessionStorage.getItem('thn');
   properties['thn'] = data;
  }
  if (sessionStorage.getItem('_com')!=null) {
   var data = sessionStorage.getItem('_com');
   properties['_com'] = data;
  }
  console.log(properties);
  return properties;    
}
function getParam(tag){
  var properties ;  
  // if (sessionStorage.getItem('_com')=='ALL') {
    if (sessionStorage.getItem(tag)!=null) {
     var data = sessionStorage.getItem(tag);
     properties = data;
    }
  // }else{
  //   properties = sessionStorage.getItem('_com');
  // }
  

  return properties;    
}

function setUserData(){
  var data = sessionStorage.getItem('userData');
  var jsonData = JSON.parse(data);
  
  if (jsonData.JABATAN==10||jsonData.JABATAN==15) {
    sessionStorage.setItem('_com', 'ALL');
    sessionStorage.setItem('opco', '7000');

    sessionStorage.setItem('_jbt', 'ALL');
    sessionStorage.setItem('_lvl', 'ALL');
  } else {
    sessionStorage.setItem('_com', jsonData.OPCO);
    sessionStorage.setItem('opco', jsonData.OPCO);

    sessionStorage.setItem('_jbt', jsonData.JABATAN);
    sessionStorage.setItem('_lvl', jsonData.MENU_LEVEL);
  }
  console.log('typeof'+(typeof jsonData.MENU_LEVEL));
  if (jsonData.OPCO==null || jsonData.MENU_LEVEL==1) {
    sessionStorage.setItem('_com', 'ALL');
    sessionStorage.setItem('opco', '7000');
  } 


  // sessionStorage.setItem('_com', jsonData.OPCO);
  // if (jsonData.OPCO==null) {
  //   sessionStorage.setItem('_com', 'ALL');
  // }

  // sessionStorage.setItem('_jbt', jsonData.JABATAN);
  // if (jsonData.JABATAN==null) {
  //   sessionStorage.setItem('_jbt', 'ALL');
  // }

  // sessionStorage.setItem('_lvl', jsonData.MENU_LEVEL);
  // if (jsonData.MENU_LEVEL==null) {
  //   sessionStorage.setItem('_lvl', 'ALL');
  // }



}

function getSession(){
  var properties = [];  
  if (sessionStorage.getItem('userData')!=null) {
   var data = sessionStorage.getItem('userData');
   var dataJson = JSON.parse(data);
   console.log('typeof'+(typeof dataJson.MENU_LEVEL));

   if (dataJson.MENU_LEVEL != 1) {
      $.each(dataJson, function(index, el){
        properties[index] = el;

     });
   }else{
    properties = false;
   }
   


  }
 

  return properties;    
}
// function onResumeCallback(){
//   alert('welcome home!!');
// }