$(function changeBlueShoeOnHover(){
  $("#blue-shoe").on({
   mouseenter: function(){
    $(this).attr('src','https://res.cloudinary.com/lynn-de-souza/image/upload/v1546532713/GoldenShoes/Screen_Shot_2019-01-03_at_16.24.58.png');
  },
  mouseleave: function(){
    $(this).attr('src','https://res.cloudinary.com/lynn-de-souza/image/upload/v1546532713/GoldenShoes/Screen_Shot_2019-01-03_at_16.24.48.png');
  }
  });

});

export { changeBlueShoeOnHover };


$(function changeSilverShoeOnHover(){
  $("#silver-shoe").on({
   mouseenter: function(){
    $(this).attr('src','https://res.cloudinary.com/lynn-de-souza/image/upload/v1546532524/GoldenShoes/Screen_Shot_2019-01-03_at_16.21.41.png');
  },
  mouseleave: function(){
    $(this).attr('src','https://res.cloudinary.com/lynn-de-souza/image/upload/v1546532524/GoldenShoes/Screen_Shot_2019-01-03_at_16.21.29.png');
  }
  });

});

export { changeSilverShoeOnHover };


$(function changeBootShoeOnHover(){
  $("#boot-shoe").on({
   mouseenter: function(){
    $(this).attr('src','https://res.cloudinary.com/lynn-de-souza/image/upload/v1546532616/GoldenShoes/Screen_Shot_2019-01-03_at_16.23.16.png');
  },
  mouseleave: function(){
    $(this).attr('src','https://res.cloudinary.com/lynn-de-souza/image/upload/v1546532614/GoldenShoes/Screen_Shot_2019-01-03_at_16.23.11.png');
  }
  });

});

export { changeBootShoeOnHover };
