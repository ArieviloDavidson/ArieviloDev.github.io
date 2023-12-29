const loadingElement = document.querySelector('.loading');

setInterval(() => {
    loadingElement.style.visibility = (loadingElement.style.visibility == 'hidden' ? '' : 'hidden');
}, 500);