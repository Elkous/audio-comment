// جلب العناصر
const img = document.querySelector('.c-img img');
const colorBtns = document.querySelectorAll('.item-div div');

// مصفوفة ديال الصور حسب اللون
// بدّل أسماء الصور باش يكونو نفس الأسماء لي عندك
const beltImages = [
  "3.png", // اللون الأول
  "2.png", // اللون الثاني
  "4.png"  // اللون الثالث
];

// إضافة الحدث لكل زر
colorBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    img.src = beltImages[index];
  });
});
