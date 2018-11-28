//esto hace la conexion
  var cb = new Codebird;
  cb.setConsumerKey("iMIqsnJdYAhHWtxAEqxIK5H0r", "TaCjzIaK8AsVnPdzBhRfBWX5rzZUMu2Ss1Lqk4EmSbjngVBCor");
  var params = {
    q: "skyrim",
    lang:'es'
  };
  var comentariosFront = document.getElementById('comentario--front');
  var comentariosBack = document.getElementById('comentario--back');
  var twitts;

  cb.__call(
    "search_tweets",
    params,
    function(reply) {
      // aca salen los tweets
      twitts = reply;
      // console.log(reply['statuses'][0]['lang']);
    },
    true // this parameter required
  );

  var card = document.getElementById('comentarios');
  function setTwits(){
    for (var i = 0; i < twitts['statuses'].length-5; i++) {
      comentariosFront.innerHTML += '<div class="comentario"><img class="comentario-pic" src="'+twitts['statuses'][i]['user']['profile_image_url']+'"/><div class="comentario-content"><span class="comentario-name">'+twitts['statuses'][i]['user']['name']+'</span><span class="comentario-text">'+twitts['statuses'][i]['text']+'</span></div></div>';
      comentariosBack.innerHTML += '<div class="comentario"><img class="comentario-pic" src="'+twitts['statuses'][i]['user']['profile_image_url']+'"/><div class="comentario-content"><span class="comentario-name">'+twitts['statuses'][i]['user']['name']+'</span><span class="comentario-text">'+twitts['statuses'][i]['text']+'</span></div></div>';
    }
    document.getElementById('gifCargando').style.display = 'none';
    setInterval(function(){
      card.classList.toggle('is-flipped');
    },6000);
    clearInterval(intervalComentarios);
  }

  var intervalComentarios = setInterval(function(){if (twitts) {setTwits();}},1000);
