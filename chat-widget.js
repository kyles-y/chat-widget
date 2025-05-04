// Create anchor element
const link = document.createElement('a');
link.href = 'https://forms.fillout.com/t/eZLjjVsMS3us';
link.target = '_blank';

// Create image element
const img = document.createElement('img');
img.src = 'https://thechurchco-production.s3.amazonaws.com/uploads/sites/1717/2025/05/question-v4.png';
img.alt = 'Question Button';
img.id = 'floating-button';
img.style.position = 'fixed';
img.style.bottom = '5px';
img.style.right = '5px';
img.style.width = '32.5px';
img.style.height = '32.5px';
img.style.opacity = '0';
img.style.transition = 'opacity 1s ease';
img.style.cursor = 'pointer';
img.style.zIndex = '9999';

// Append image to link, then to body
link.appendChild(img);
document.body.appendChild(link);

// Fade in after load
window.addEventListener('load', function () {
  requestAnimationFrame(() => {
    img.style.opacity = '1';
  });
});
