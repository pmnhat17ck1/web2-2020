$(document).ready(function () {
  
   var pathname = window.location.pathname;
   var br = $('#br');
   var br1 = $('#br1');
   $('#btnhuy').click(function() {
    $('.huy1').val("");
    $('.huy2').val("");
    $('.huy3').val("");
    $('#nd_gd').val("");
  
  });
    if (pathname=='/home/accountmanagement/transaction-history'){
        br.html("Quản lý tài khoản");
        br1.html("Liệt kê giao dịch");
        $('#pageSubmenu').addClass('show');
        $('#menu1').addClass('active');
        $('#item2').addClass('active1');
        $('#pageSubmenu1').removeClass('show');
        $('#item3').removeClass('active1');
        $('#item4').removeClass('active1');
        $('#pageSubmenu2').removeClass('show');
        $('#item5').removeClass('active1');
        $('#item6').removeClass('active1');
       
    }
    if (pathname=='/home/accountmanagement/profile'){
     
        br.html("Quản lý tài khoản");
        br1.html("Thông tin tài khoản");
        $('#collapseOne').addClass('show');
        $('#pageSubmenu').addClass('show');
        $('#menu1').addClass('active');
        $('#item1').addClass('active1');
        $('#item2').removeClass('active1');
        $('#pageSubmenu1').removeClass('show');
        $('#item3').removeClass('active1');
        $('#item4').removeClass('active1');
        $('#pageSubmenu2').removeClass('show');
        $('#item5').removeClass('active1');
        $('#item6').removeClass('active1');
       
    }
    if (pathname=='/home/tranfer/in-the-bank'){
     
        br.html("Chuyển tiền");
        br1.html("Chuyển tiền trong Bank");
       
        $('#pageSubmenu1').addClass('show');
        $('#menu2').addClass('active');
        $('#item3').addClass('active1');
        $('#item4').removeClass('active1');
        $('#pageSubmenu').removeClass('show');
        $('#item1').removeClass('active1');
        $('#item2').removeClass('active1');
        $('#pageSubmenu2').removeClass('show');
        $('#item5').removeClass('active1');
        $('#item6').removeClass('active1');
       
    }
 
           $('#menu1').on('click', ()=>{
            $('#menu1').addClass('active');
            $('#menu2').removeClass('active');
            $('#menu3').removeClass('active');
            $('#pageSubmenu1').removeClass('show');
            $('#pageSubmenu2').removeClass('show');
            $('#item4').removeClass('active1');
            $('#item5').removeClass('active1');
            $('#item5').removeClass('active1');
            $('#item6').removeClass('active1');
        });
        $('#menu2').on('click', ()=>{
            $('#menu2').addClass('active');
            $('#menu1').removeClass('active');
            $('#menu3').removeClass('active');
            $('#pageSubmenu').removeClass('show');
            $('#pageSubmenu2').removeClass('show');
            $('#item1').removeClass('active1');
            $('#item2').removeClass('active1');
            $('#item5').removeClass('active1');
            $('#item6').removeClass('active1');
        });
        $('#menu3').on('click', ()=>{
            $('#menu3').addClass('active');
            $('#menu1').removeClass('active');
            $('#menu2').removeClass('active');
            $('#pageSubmenu').removeClass('show');
            $('#pageSubmenu1').removeClass('show');
            $('#item1').removeClass('active1');
            $('#item2').removeClass('active1');
            $('#item3').removeClass('active1');
            $('#item4').removeClass('active1');
        });
   
});