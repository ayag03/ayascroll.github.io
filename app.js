$(".item").each(function(i, item){
  let rowline = i+1;

  $(item).css("grid-row", rowline);
  if(rowline % 2 ==0)
  {
    //even
    $(item).css("grid-column",2);
    $(item).css('justify-self','start');
  }
  else {
    //odds
    $(item).css("grid-column",1);
    $(item).css('justify-self','end');
    $(item).click(function() {
      $(item).text("hello, I'm row"+rowline)
    })
  }
})
AOS. init();
