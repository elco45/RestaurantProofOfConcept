$(document).ready( function() {
    $("#btn-gps").on("click", function() {
        $("#container-body").load("VIEWS/gps.html");
    });
});

$(document).ready( function() {
    $("#btn-buscar").on("click", function() {
        $("#container-body").load("VIEWS/buscar.html");
    });
});

function loadHomeView(){
    $(document).ready( function() {
        $('#container-body').removeClass('hidden');
        $('#map').removeClass('hidden');
        $("#container-body").load("VIEWS/home.html");
        $(function () {
            $('#form1').addClass('hidden');
            $('#form2').addClass('hidden');
            $("#selectUni").val("n0");
            $("#radio1").attr('checked', 'checked');
            $('#extra-body2').addClass('hidden');
        });
    });
};

$(document).ready( function() {
    $("#container-body").load("VIEWS/home.html");
});

function loadGpsView(){
    $(function () {
        $('#form1').removeClass('hidden');
        $('#container-body').addClass('hidden');
    });
};

function loadBuscarView(){
    $(function () {
        $('#form2').removeClass('hidden');
        $('#container-body').addClass('hidden');
        $('#map').addClass('hidden');
    });
};


