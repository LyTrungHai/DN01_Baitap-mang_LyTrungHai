var mangSoNguyen = [];
var getEle = document.getElementById("txtInt");
function themSoNguyen() {
  var num = Number(document.getElementById("inputInt").value);
  mangSoNguyen.push(num);
  //   console.log(mangSoNguyen);
  getEle.innerHTML = "Các số đã nhập: " + mangSoNguyen;
}

function demSoNguyen() {
  var count = 0;
  for (var i = 0; i < mangSoNguyen.length; i++) {
    if (Number.isInteger(mangSoNguyen[i])) {
      count++;
    }
  }
  getEle.innerHTML =
    "Các số đã nhập: " + mangSoNguyen + "<br>Có " + count + " số nguyên";
}
