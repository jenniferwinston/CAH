
    // $('form').submit(function(){
      // socket.on('chat message', function(msg){
        // console.log(msg)
      // });
      // $('#m').val('');
      // return false;
    // });
    
  // socket.on('news', function (data) {
  //   console.log(data);
  //   socket.emit('my other event', { my: 'data' });
  // });
  var socket = io()
  var home = io.connect('http://localhost:3000/home')
  
     
function newPerson (user) {
  console.log('yo' + user)
  home.on('connect', function () {
    home.emit('hi!', 'yoyoyo');
  });
  home.on('a message', function(data) {
    console.log("OMG")
  })
        
          // socket.emit('chat message', user);
          // $('#m').val('');
          // return false;
        
        // socket.on('stupid', function(msg){
          // console.log('HMMMMMMMM')
          // $('#users').append($('<li>').text(msg));
        // });
        // socket.on('message', function (msg) {
        //     console.log("HEYOOOOO")
        //     console.log(msg)
        //     });
    // socket.on('new user', function(data) {
    //   console.log("USER: " + data)
    // });
    // socket.on('chat message', function(msg) {

    //   console.log(msg)
    // var li = $("<li></li>").text("Text.");
      // $('#users').append(li);
    // })
    
  };

      

  // socket.on('chat message', function(msg){
  //   $('#messages').append($('<li>').text(msg));
  // });
      function emit (user){
        // console.log('******************** AYYEEE ******')
              // socket.emit('new user', { username: user.name });
              return false;
            }

      function saveData () {

            user = {
              name: $("#name").val(),
              password: $("#pass").val()
            };
            // emit(user);
            
  // // });
  //           for (var key in user) {
  //                         console.log("html: " + key);
  //           };
            // socket.emit('new user', user);
            var currentURL = window.location.origin;
            // console.log(currentURL + "/player/" + user.name);
              $.post(currentURL + "/player/" + user.name, user, function (data) {
              // console.log(data)

              window.location = data.redirectUrl
              newPerson(data.name);
            });
            }
            

          

  //     function ajax () {
  //           var currentURL = window.location.origin;
  //           $.post(currentURL + "/player/" + user.name, user, function (data) {
  //             console.log(data)
  //             window.location = data.redirectUrl;
  //           });
  //         }
      $("#register").on('click', function () {
        $("#resultsModal").modal('toggle');
      })


      $("#submitUser").on('click', function () {
        
        var isValid = true;
        $('.form-control').each(function() {
          if ( $(this).val() === '' )
            isValid = false;
        });
          // If all required fields are filled
        if (isValid == true) {
          // Create an object for the user's data
          
          
          saveData()
          // Grab the URL of the website
          
          // AJAX post the data to the friends API. 
          
        }else{
            alert("Please fill out all fields before submitting!");
        }
            
        return false;
      });

      
      

  //     $("#login").on('click', function(){
  //     })
