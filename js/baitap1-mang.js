// biến chung
var numArray = []; /// mảng lưu giá trị khi lấy từ  form
var mangDuocNhap = document.getElementById("txtResult2"); // biến hiển thị kết quả

function addEle() {
  ////// hàm lấy số từ form
  var num = parseFloat(document.querySelector("#inputNum2").value) || 0;
  // if (!num) {
  //   alert("Chưa nhập số!");
  //   return;
  // }
  numArray.push(num);

  mangDuocNhap.innerHTML = "các số được nhập: " + numArray;
}

function sum() {
  // hàm này vừa đếm số dương , vừa tính tổng số dương
  var count = 0;
  var sum = 0;
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      sum += numArray[i];
      count++;
    }
    // return numArray;
  }
  mangDuocNhap.innerHTML =
    "Các số được nhập: " +
    numArray +
    "<br> Có " +
    count +
    " số dương" +
    "<br> Tổng các số dương: " +
    sum;
}

function min() {
  // hàm tìm số nhỏ nhất
  var min = numArray[0];
  for (var i = 1; i < numArray.length; i++) {
    if (min > numArray[i]) {
      min = numArray[i];
    }
  }
  mangDuocNhap.innerHTML =
    "Các số được nhập: " + numArray + "<br> Số nhỏ nhất:" + min;
}

function timSoDuongNhoNhat() {
  /////////// hàm tìm số dương nhỏ nhất
  var mangSoDuong = [];
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      mangSoDuong.push(numArray[i]);
    }
    mangSoDuong.sort((a, b) => a - b);
  }
  if (mangSoDuong.length == 0) {
    mangDuocNhap.innerHTML =
      "Các số được nhập: " + numArray + " <br>Không có số dương";
    return;
  }
  mangDuocNhap.innerHTML =
    "Các số được nhập: " +
    numArray +
    "<br> Số dương nhỏ nhất: " +
    mangSoDuong[0];
}

function soChanCuoiCung() {
  ///////////// hàm tìm số chẵn cuối cùng
  var mangSoChan = [];
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 == 0) {
      mangSoChan.push(numArray[i]);
    }
  }
  if (mangSoChan.length == 0) {
    alert("Không có số chẵn");
    return;
  }
  mangDuocNhap.innerHTML =
    "Các số được nhập: " +
    numArray +
    "<br> Số chẵn cuối cùng: " +
    mangSoChan[mangSoChan.length - 1];
}

function tangDan() {
  /////////////// hàm sắp xếp các số tăng dần
  var soTangDan = [];
  soTangDan = numArray.sort((a, b) => a - b);
  mangDuocNhap.innerHTML =
    "Các số được nhập: " + numArray + "<br>Tăng dần: " + soTangDan;
}

function isPrime(n) {
  ////////// hàm kiểm tra số nguyên
  if (n < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

function firstPrimeNum() {
  /////////// in ra số nguyên đầu tiên và dừng hàm
  for (let i = 0; i < numArray.length; i++) {
    if (isPrime(numArray[i])) {
      mangDuocNhap.innerHTML =
        "Các số được nhập: " +
        numArray +
        "<br>Số nguyên tố đầu tiên: " +
        numArray[i];
      return;
    }
  }
}

function demSoAmDuong() {
  /////////////////// hàm so sánh số lượng số âm số dương
  var soDuong = 0;
  var soAm = 0;

  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      soDuong++;
    } else {
      soAm++;
    }
  }
  if (soDuong > soAm) {
    mangDuocNhap.innerHTML =
      "Các số được nhập: " + numArray + "<br>Số dương > Số âm";
  } else if (soDuong < soAm) {
    mangDuocNhap.innerHTML =
      "Các số được nhập: " + numArray + "<br>Số dương < Số âm";
  } else {
    mangDuocNhap.innerHTML =
      "Các số được nhập: " + numArray + "<br>Số dương = Số âm";
  }
}

function resetAll() {
  document.getElementById("form1").reset();
  mangDuocNhap.innerHTML = "Kết quả";
}
