  //section-5
  $(document).ready(function () {

    document.write('KKKKKKKKKKKKKKKKKKKKK')

    $(".slideEventImg i:eq(1)").click(function () { 
        if( $(".slideEventImg p.activeImg").is(":last-of-type"))
            $(".slideEventImg p:first-of-type").addClass("activeImg").siblings().removeClass("activeImg");
        else
        $(".slideEventImg p.activeImg").removeClass("activeImg").next().addClass("activeImg");
        });
    
      
      
    $(".slideEventImg i:eq(0)").click(function () { 
        if( $(".slideEventImg p.activeImg").is(":first-of-type"))
            $(".slideEventImg p:last-of-type").addClass("activeImg").siblings().removeClass("activeImg");
        else
        $(".slideEventImg p.activeImg").removeClass("activeImg").prev().addClass("activeImg");
    
    });
    
       
    
    });//ready