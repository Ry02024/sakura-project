document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('ballContainer');
    const ball = document.createElement('div');
    ball.classList.add('ball');
    container.appendChild(ball);

    let lastTime = null;
    const g = 9.8; // 重力加速度 (m/s^2)
    let position = 0; // 開始位置
    const scale = 100; // 画面上のピクセルと現実世界のメートルの比率

    function update(time) {
        if (lastTime != null) {
            const delta = (time - lastTime) / 1000; // 秒単位に変換
            position += 0.5 * g * delta * delta * scale;
            ball.style.top = `${position}px`;
        }
        if (position < window.innerHeight) {
            lastTime = time;
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
});
