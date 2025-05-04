(function () {
  const style = document.createElement('style');
  style.textContent = `
    #sms-bubble {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 33px;
      height: 33px;
      background-color: #20BDBE;
      border-radius: 50%;
      box-shadow: 0 2px 6px rgba(0,0,0,0.25);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      opacity: 0;
      transition: opacity 1s ease;
    }
    #sms-bubble img {
      width: 20px;
      height: 20px;
    }
    #sms-bubble.show {
      opacity: 1;
    }
    @media (max-width: 600px) {
      #sms-bubble {
        width: 40px;
        height: 40px;
      }
      #sms-bubble img {
        width: 28px;
        height: 28px;
      }
    }
  `;

  const link = document.createElement('a');
  link.id = 'sms-bubble';
  link.setAttribute('aria-label', 'Contact the YMCA');
  link.href = 'https://forms.fillout.com/t/eZLjjVsMS3us';
  link.target = '_blank';

  const icon = document.createElement('img');
  icon.src = 'https://thechurchco-production.s3.amazonaws.com/uploads/sites/1717/2025/05/question-v2.png';
  icon.alt = 'Chat Icon';
  link.appendChild(icon);

  document.head.appendChild(style);
  document.body.appendChild(link);

  window.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(() => {
      link.classList.add('show');
    });
  });
})();
