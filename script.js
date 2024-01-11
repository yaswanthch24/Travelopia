document.addEventListener('DOMContentLoaded', function () {
    var moreContent = document.querySelector('.more-content');
    var readMoreButton = document.getElementById('readMoreBtn');

    var originalText = moreContent.innerHTML;

    function truncateContent() {
        var truncatedText = originalText.slice(0, 200) + '...';
        moreContent.innerHTML = truncatedText;
    }

    truncateContent();

    function checkScreenWidth() {
        return window.innerWidth < 768;
    }

    function toggleReadMoreButton() {
        if (checkScreenWidth()) {
            readMoreButton.style.display = 'block';
            truncateContent();
        } else {
            readMoreButton.style.display = 'none';
            moreContent.innerHTML = originalText;
        }
    }

    toggleReadMoreButton()

    window.addEventListener('resize', toggleReadMoreButton);

    readMoreButton.addEventListener('click', function () {
        if (moreContent.innerHTML === originalText) {
            truncateContent();
            readMoreButton.textContent = 'Read more';
        } else {
            moreContent.innerHTML = originalText;
            readMoreButton.textContent = 'Read less';
        }
    });
});
