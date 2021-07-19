window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');
    const activeClass = 'tabheader__item_active';
    const showClass = 'show';
    const hideClass = 'hide';
    const fadeClass = 'fade';

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add(hideClass);
            item.classList.remove(showClass, fadeClass);
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add(showClass, fadeClass);
        tabsContent[i].classList.remove(hideClass);
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
});