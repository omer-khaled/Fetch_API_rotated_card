var ajax=new XMLHttpRequest();
ajax.open("GET","https://reqres.in/api/users?page=2");
ajax.send();
var user_data;
ajax.onreadystatechange=function(){
    if(ajax.readyState==4&&ajax.status==200)
    {
        user_data=JSON.parse(ajax.response).data;
        // console.log(user_data[0].first_name);
        var str='';
        for(var i=0;i<user_data.length;i++){
            str+='<div class="card"><div class="front"> <img src="'+user_data[i].avatar+'" alt=""></div><div class="back"><div class="text1"><i class="fa-regular fa-user"></i><h1>'+user_data[i].first_name+' '+user_data[i].last_name+'</h1></div><div class="text2"><i class="fa-regular fa-envelope"></i><h1>'+user_data[i].email+'</h1></div></div></div>';
        }
        document.getElementById("res").innerHTML=str;
    }
};