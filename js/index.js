$(document).ready(function(){
    $.ajax({
        url: "https://pg-app-t024acr8t0y45v0wg0ic2giyd2dbur.scalabl.cloud/1/classes/ServiceGroup",
        "headers": { 
            'X-Parse-Application-Id':"IxocNeQBKvwMHTBIkF3lvc8xHURMUPbmgcOKoEQ8",
            "X-Parse-REST-API-Key":"1rUVcTc1PHi5OtOiacNGBt7FBcVMmzgoHPUUQKjR",
            "Content-Type":"application/json"
        },
        "method": "GET",
        success: function(res){
           var totalCategories = res['results'];
           $("#categories").text(totalCategories.length);
        },
        error: function(error){
            alert(error);
        }
    });
    $.ajax({
        url: "https://pg-app-t024acr8t0y45v0wg0ic2giyd2dbur.scalabl.cloud/1/classes/Service",
        "headers": { 
            'X-Parse-Application-Id':"IxocNeQBKvwMHTBIkF3lvc8xHURMUPbmgcOKoEQ8",
            "X-Parse-REST-API-Key":"1rUVcTc1PHi5OtOiacNGBt7FBcVMmzgoHPUUQKjR",
            "Content-Type":"application/json"
        },
        "method": "GET",
        success: function(res){
           var totalServices = res['results'];
           var activeServices = (totalServices).filter(function (service) {
               return service["active"] === true;
           });
            var inActiveServices = (totalServices).filter(function (service) {
                return !service["active"];
            });
           $("#activeServices").text(activeServices.length);
           $("#inActiveServices").text(inActiveServices.length);
           $("#services").text(totalServices.length);
        },
        error: function(error){
            alert(error);
        }
    });
});