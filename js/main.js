$(function () {
  $(".layout-tabbar").load("./component/footer.html");
});


window.rotate = () => {
  var t = document.getElementById('refresh');
  t.classList.add('refresh--active');
  setTimeout(function () {
    t.classList.remove('refresh--active');
  }, 3000);
};
window.iconrotate = () => {
  var t = document.getElementById('iconrefresh');
  t.classList.add('icon-refresh--active');
  setTimeout(function () {
    t.classList.remove('icon-refresh--active');
  }, 400);
};
// window.addEventListener('load', function () {
//   window.innerWidth < 576 && investmentListShow()
//   window.innerWidth > 576 && investmentListHide()
//   window.addEventListener('resize', function () {
//     console.log(window.innerWidth)
//     window.innerWidth < 576 && investmentListShow()
//     window.innerWidth > 576 && investmentListHide()
//   })
// })