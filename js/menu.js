document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuItems = document.querySelectorAll('.menu-item');

    // 切換選單
    function toggleMenu() {
        menuButton.classList.toggle('active');
        menuOverlay.classList.toggle('active');
    }

    // 點擊選單按鈕
    menuButton.addEventListener('click', toggleMenu);

    // 點擊選單項目時關閉選單
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            toggleMenu();
        });
    });

    // 點擊覆蓋層外部時關閉選單
    menuOverlay.addEventListener('click', (e) => {
        if (e.target === menuOverlay) {
            toggleMenu();
        }
    });

    // 禁止選單開啟時的頁面滾動
    document.body.addEventListener('touchmove', function(e) {
        if (menuOverlay.classList.contains('active')) {
            e.preventDefault();
        }
    }, { passive: false });
}); 