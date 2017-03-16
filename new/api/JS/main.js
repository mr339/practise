  function myfunction(){
  var x = document.getElementById("myInput").value;
  var ghapi1 = "https://api.github.com/users/" + x;
  var ghapi2= "https://api.github.com/users/"+x+"/repos";
  var ghoptions = {
    'client_id': '60b9f23dedffbdfc476c',
    'client_secret' : 'd1c186c6373f96571c0bfcf76b84e4dc6fd0c15a',
  };
  $.getJSON(ghapi1, ghoptions, displayinfo1);
  $.getJSON(ghapi2, ghoptions, displayinfo2);
}

  //function for displaying userinformation
  function displayinfo1(data1){
     var display1 = '<div>';
     display1 += '<h1>'+'<strong>'+'<font color ="#8cb3f2">'+data1.login+'</font>'+'</strong>'+'</h1>'+ '<hr size="10" color="red">';
     display1 += '<img src= ' + data1.avatar_url + ' width = "200" height = "200" alt="Profile pic">'+ '<hr>';
     display1 += '<form action= "'+ data1.html_url +'">' + '<input type="submit" value="View Profile" />' + '</form>';
     display1 += '<h5>'+'<font size ="3">' +'<font size = "4">USERNAME : </font>'+data1.login+'</font>'+'</h5>'+ '<hr>';
     display1 += '<h5>'+'<font size ="3">' +'<font size = "4">EMAIL : </font>'+data1.email+'</font>'+'</h5>'+ '<hr>';
     display1 += '<h5>'+'<font size ="3">' +'<font size = "4">MEMBER SINCE : </font>'+data1.created_at+'</font>'+'</h5>'+ '<hr>';
     display1 += '<h5>'+'<font size ="3">' +'<font size = "4">USER_ID : </font>'+data1.id+'</font>'+'</h5>'+ '<hr>';
     display1 += '<h5>'+'<font size ="3">' +'<font size = "4">FOLLOWERS : </font>'+data1.followers+'</font>'+'</h5>'+ '<hr>';
     display1 += '<h5>'+'<font size ="3">' +'<font size = "4">FOLLOWING : </font>'+data1.following+'</font>'+'</h5>'+ '<hr>';
     display1 += '</div>';
     $('#ghapidata1').html(display1);
  }


  //function for displaying repos
  function displayinfo2(data2){
    var x = document.getElementById("myInput").value;
    var display2 = '<div>';
    display2 += '<h1>'+'<strong>'+'<font color ="#8cb3f2">'+ "REPOS" +'</font>'+'</strong>'+'</h1>'+ '<hr>';
    $.each(data2, function(i, data) {
      display2 += '<h5>'+'<font size ="3">' +'<font size = "4">REPO_ID : </font>'+data.id+'</font>'+'</h5>';
      display2 += '<h5>'+'<font size ="3">' +'<font size = "4">REPO NAME : </font>'+'<a href ="' + data.html_url + '">' + data.name +'</a>'+'</font>'+'</h5>'+'<hr>';
     });
    display2 += '</div>';
    $('#ghapidata2').html(display2);
  }
  
 
   
  	

    


