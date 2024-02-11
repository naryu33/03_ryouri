// おみくじの画像を配列に入れて、ランダムに表示させる
const imgArr = [
    'images/breaded pork on rice.png',
    'images/chukadon.png',
    'images/curry.png',
    'images/doria.png',
    'images/fried rice.png',
    'images/gratin.png',
    'images/Minced rice bowl.png',
    'images/omurice.png',
    'images/parent and child bowl of rice.png',
    'images/pilaf.png',
    'images/spaghetti.png',
    'images/stew.png'
];

// スタートボタン
const startBtn = document.getElementById('start-btn');
// おみくじの画像
const omikujiImg = document.getElementById('omikuji-img');

// スタートボタンを押したらこの関数が実行される
startBtn.onclick = function() {
    // ランダムな数値を生成
    const random = Math.floor(Math.random() * imgArr.length);
    // おみくじの画像をランダムに表示させる
    omikujiImg.src = imgArr[random];
}