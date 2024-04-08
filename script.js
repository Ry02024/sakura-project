function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('sakura-petal');
    document.body.appendChild(petal);

    // 花びらの初期位置とサイズをランダムに設定
    petal.style.left = Math.random() * window.innerWidth + 'px';
    petal.style.width = Math.random() * 10 + 5 + 'px';
    petal.style.height = petal.style.width;
    petal.style.opacity = Math.random();

    // アニメーションの速度と方向をランダムに設定
    const speed = Math.random() * 5 + 2;
    petal.style.animationDuration = speed + 's';
    petal.style.animationName = 'fall';
    petal.style.animationIterationCount = 'infinite';
    petal.style.animationTimingFunction = 'linear';

    // 一定時間後に花びらを削除
    setTimeout(() => {
        petal.remove();
    }, speed * 1000);
}

setInterval(createPetal, 300);

// CSSの`@keyframes`と一致する名前で落下アニメーションを追加
