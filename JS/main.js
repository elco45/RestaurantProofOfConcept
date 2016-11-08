var form_id = "jquery_form";

var data = {
    "access_token": "na78g0yf5xke8ez68ewkigx7"
};

function onSuccess() {
    // remove this to avoid redirect
    //window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
    alert("meow")
}

function onError(error) {
    // remove this to avoid redirect
    alert(error)
    //window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
}

var sendButton = $("#" + form_id + " [name='send']");

function send() {
    //sendButton.val('Sending…');
    //sendButton.prop('disabled',true);

    var subject = $("#" + form_id + " [name='subject']").val();
    var message = "Email: "+$("#" + form_id + " [name='email']").val()+"\nNúmero Celular: "+$("#" + form_id + " [name='cell']").val()+ "\n"+$("#" + form_id + " [name='text']").val();
    data['subject'] = subject;
    data['text'] = message;

    $.post('https://postmail.invotes.com/send',
        data,
        onSuccess()
    ).fail( function(xhr, textStatus, errorThrown) {
        alert(xhr.responseText);
    }).done(sent);
    return false;
}

sendButton.on('click', send);

var $form = $("#" + form_id);
$form.submit(function( event ) {
    event.preventDefault();
});
  
function sent(){
    $('#form1').addClass('hidden');
    $('#form2').addClass('hidden');
    $('#container-body').addClass('hidden');
    $('#map').addClass('hidden');
    $('#extra-body2').removeClass('hidden');
    $('#jquery_form').trigger("reset");
}
