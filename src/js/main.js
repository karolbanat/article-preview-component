const shareBtn = document.querySelector('.share-footer__share-btn');
const mediaBox = document.querySelector('.share-footer__media');

const handleMediaBox = () => {
	shareBtn.classList.toggle('active');
	mediaBox.classList.toggle('active', shareBtn.classList.contains('active'));
};

shareBtn.addEventListener('click', handleMediaBox);
