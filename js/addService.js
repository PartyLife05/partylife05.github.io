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
                $("#serviceGroup").append("<div class='checkbox'><label><input type='checkbox' name='serviceGroup' value='"+val['objectId']+"'>"+val['name']+"</label></div>")
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
                $("#serviceArea").append("<option val ='"+val["objectId"]+"' name='te'>"+val['name']+"</option>")
            });
        }
      });
    
    $("#submitData").click(function(e){
        e.preventDefault();
        var inputs = $('#addServiceForm').serializeArray();
        var data = {};
        var errors = [];

        $.map(inputs, function(n, i){
            if(n['name'] != "serviceGroup"){
                data[n['name']] = n['value'];
            }
        });
        console.log(data);
        
        var sGroups = [];
        $("input:checkbox[name=serviceGroup]:checked").each(function(){
            var sGroup = {
                    "__type":"Pointer",
                    "className":"ServiceGroup",
                    "objectId":$(this).val()
            }
            sGroups.push(sGroup);
        });
        
        if(!data['name']){
            errors.push("Please Enter Valid Name\n");
        }
        if(!data['landMark']){
            errors.push("Please Enter Valid landMark\n");
        }
        if(!data['latitude']){
            errors.push("Please Enter valid latitude\n");
        }
        if(!data['longitude']){
            errors.push("Please Enter valid longitude\n");
        }
        if(!data['imageURL']){
            errors.push("Please Enter valid imageURL\n");
        }
        if(!data['active']){
            errors.push("Please Select active\n");
        }
        if(!sGroups.length){
            errors.push("Please Select atleast one service Group\n");
        }

        if(errors.length){
            alert("Please Check Errors")
            $("#panelHead").addClass("hidden");
            $("#errors").append(errors.toString());
            $("#errors").addClass("text-danger");
            $("#errors").removeClass("hidden");
        }else{
            var serviceGroups = "";
            var requestData = {
                "name": data['name'],
                "isOpenNow": Boolean(data['isOpenNow']),
                "image": data["imageURL"],
                "serviceGroup": sGroups,
                "active": Boolean(data['active'])
            }
            $.ajax({
                url: "https://pg-app-t024acr8t0y45v0wg0ic2giyd2dbur.scalabl.cloud/1/classes/Service",
                "headers": { 
                    'X-Parse-Application-Id':"IxocNeQBKvwMHTBIkF3lvc8xHURMUPbmgcOKoEQ8",
                    "X-Parse-REST-API-Key":"1rUVcTc1PHi5OtOiacNGBt7FBcVMmzgoHPUUQKjR",
                    "Content-Type":"application/json"
                },
                "method": "POST",
                "data": JSON.stringify(requestData),
                success: function(res){
                    window.location.href = "https://partylife05.github.io/servicesList.html";
                },
                error: function(error){
                    alert(error);
                }
            });
        }
    });
});