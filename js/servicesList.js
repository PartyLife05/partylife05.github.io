// {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> */}

$(document).ready(function(){
    $('#allServices').DataTable({
        "processing" : true,
        "ajax" : {
            "url" : "https://pg-app-t024acr8t0y45v0wg0ic2giyd2dbur.scalabl.cloud/1/functions/getServicesListAdmin",
            "method": "POST",
            "headers": { 
                        'X-Parse-Application-Id':"IxocNeQBKvwMHTBIkF3lvc8xHURMUPbmgcOKoEQ8",
                        "X-Parse-REST-API-Key":"1rUVcTc1PHi5OtOiacNGBt7FBcVMmzgoHPUUQKjR"
                    },
            dataSrc : 'result'
        },
        "columns" : [{
            "title": "Name",
            "data" : "name",
        },{
            "title": "isOpenNow",
            "data" : "isOpenNow"
        },{
            "title": "Active",
            "data" : "active"
        },
        {
            "title": "Categories",
            "data" : "categoriesStr"
        },]
    });

    $.ajax({
        url: "https://pg-app-t024acr8t0y45v0wg0ic2giyd2dbur.scalabl.cloud/1/classes/ServiceGroup",
        "headers": { 
            'X-Parse-Application-Id':"IxocNeQBKvwMHTBIkF3lvc8xHURMUPbmgcOKoEQ8",
            "X-Parse-REST-API-Key":"1rUVcTc1PHi5OtOiacNGBt7FBcVMmzgoHPUUQKjR",
            "Content-Type":"application/json"
        },
        "method": "GET",
        success: function(res){
            console.log(res);
        },
        error: function(error){
            alert(error);
        }
    });
});






