// Create anchor element
const link = document.createElement('a');
link.href = 'https://forms.fillout.com/t/eZLjjVsMS3us';
link.target = '_blank';
link.style.textDecoration = 'none';

// Create button element (as a div)
const button = document.createElement('div');
button.textContent = '💬';
button.style.position = 'fixed';
button.style.bottom = '5px';
button.style.right = '5px';
button.style.width = '33px';
button.style.height = '33px';
button.style.backgroundColor = '#0089D0';
button.style.color = 'white';
button.style.display = 'flex';
button.style.alignItems = 'center';
button.style.justifyContent = 'center';
button.style.borderRadius = '50%';
button.style.fontSize = '18px';
button.style.opacity = '0';
button.style.transition = 'opacity 1s ease';
button.style.cursor = 'pointer';
button.style.zIndex = '9999';
button
