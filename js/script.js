var calculator;

document.addEventListener("DOMContentLoaded", function () {
  // Inisialisasi kalkulator Desmos
  calculator = Desmos.GraphingCalculator(document.getElementById("calculator"));
});

function hitungDanTampilkanGrafik() {
  // Ambil nilai a, b, c, dan d dari input
  var a = parseFloat(document.getElementById("inputA").value);
  var b = parseFloat(document.getElementById("inputB").value);
  var c = parseFloat(document.getElementById("inputC").value);
  var d = parseFloat(document.getElementById("inputD").value);

  // Validasi input
  if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
    alert("Masukkan nilai a, b, c, dan d yang valid!");
    return;
  }

  // Hapus grafik sebelumnya
  calculator.clearExpressions();

  // Tambahkan fungsi kubik ke Desmos
  calculator.setExpression({
    id: "graph1",
    latex: `4 + x^3+ + 3 + x^2+ + 2 + x+ + 1`,
    color: "#FF5733",
  });
}
