$(document).ready(function(){
  $("form#quiz").submit(function(event){
    var traits = $("select#traits").val();
    var genre = $("select#genre").val();
      if (genre === 'action' && traits === 'kind') {
        $('#samwell').show();
        $("#cersei, #claire, #stephen").hide();
      } else if (genre === 'action' && traits === 'cruel') {
        $('#cersei').show();
        $("#samwell, #claire, #stephen").hide();
      } else if (genre === 'romance' && traits === 'cruel') {
        $('#stephen').show();
        $("#samwell, #claire, #cersei").hide();
      } else if (genre === 'romance' && traits === 'kind') {
        $('#claire').show();
        $("#samwell, #cersei, #stephen").hide();
      }
    event.preventDefault();
  });
});
