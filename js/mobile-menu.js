// 手機端選單功能
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const closeMenuButton = document.getElementById('closeMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuContent = mobileMenu.querySelector('.transform');

    function openMobileMenu() {
        document.body.style.overflow = 'hidden'; // 防止背景滾動
        mobileMenu.classList.remove('hidden');
        requestAnimationFrame(() => {
            mobileMenuContent.classList.remove('translate-y-full');
        });
    }

    function closeMobileMenu() {
        mobileMenuContent.classList.add('translate-y-full');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = ''; // 恢復背景滾動
        }, 300);
    }

    // 點擊漢堡按鈕開啟選單
    mobileMenuButton.addEventListener('click', openMobileMenu);

    // 點擊關閉按鈕關閉選單
    closeMenuButton.addEventListener('click', closeMobileMenu);

    // 點擊選單項目時也關閉選單
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // ESC 鍵關閉選單
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
            closeMobileMenu();
        }
    });

    // 點擊選單外部關閉選單
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            closeMobileMenu();
        }
    });
}); 