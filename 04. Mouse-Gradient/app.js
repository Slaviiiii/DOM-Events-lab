function attachGradientEvents() {
    const gradient = document.getElementById('gradient')
    gradient.addEventListener('mousemove', onHover);
    const result = document.getElementById('result');
    function onHover(ev) {
        result.textContent = Math.floor(ev.offsetX / gradient.clientWidth * 100) + '%';
    }
} 