$(document).ready(function() {
    $.ajax({
        url: "https://pg-app-t024acr8t0y45v0wg0ic2giyd2dbur.scalabl.cloud/1/classes/ServiceGroup",
        "headers": { 
            'X-Parse-Application-Id':"IxocNeQBKvwMHTBIkF3lvc8xHURMUPbmgcOKoEQ8",
            "X-Parse-REST-API-Key":"1rUVcTc1PHi5OtOiacNGBt7FBcVMmzgoHPUUQKjR"
        },
        success: function(res){
            $.each(res["results"], function(key,val) {
                // console.log(val);
                $("#serviceGroup").append("<div class='checkbox'><label><input type='checkbox' value='"+val['objectId']+"'>"+val['name']+"</label></div>")
            });
        }
      });
      $.ajax({
        url: "https://pg-app-t024acr8t0y45v0wg0ic2giyd2dbur.scalabl.cloud/1/classes/Area",
        "headers": { 
            'X-Parse-Application-Id':"IxocNeQBKvwMHTBIkF3lvc8xHURMUPbmgcOKoEQ8",
            "X-Parse-REST-API-Key":"1rUVcTc1PHi5OtOiacNGBt7FBcVMmzgoHPUUQKjR"
        },
        success: function(res){
            $.each(res["results"], function(key,val) {
                // console.log(val);
                $("#serviceArea").append("<option val ='"+val["objectId"]+"'>"+val['name']+"</option>")
            });
        }
      });
});