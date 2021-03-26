function myFunction(msg) {
  var para = document.createElement("div1");
  para.innerHTML = '<div class="onecomm"><div class="commheader"><a class="img"><div></div></a><a><span class="a">By</span><span class="b">PEET KUMAR GHOSH</span></br><span class="c">ex-CEO,Planex</span></a></div><div class="maincomm"><p>'+msg+'</p></div><div class="commfooter"><div><i class="fa fa-cloud-download"></i></div><div><i class="fa fa-plus"></i></div><div><i class="fa fa-smile-o"></i></div><div><i class="fa fa-rss"></i></div></div></div>';
  document.getElementById("comments").appendChild(para);
}
