$(function(){
  $('.nav a[href="'+document.location.pathname+'"]').parent('li').attr('class', 'active');
  $('#coderstats').submit(function(e){
    e.preventDefault();
    if (user = $('#id_username').val().trim())
        document.location.href='http://coderstats.net/github/' + user;
    else
        alert('Please enter a GitHub username to show statistics for.');
  });
});