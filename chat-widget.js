(function () {
  const style = document.createElement('style');
  style.textContent = `
    #sms-bubble {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 45px;
      height: 45px;
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
      width: 35px;
      height: 35px;
    }
    #sms-bubble.show {
      opacity: 1;
    }
    @media (max-width: 600px) {
      #sms-bubble {
        width: 65px;
        height: 65px;
      }
      #sms-bubble img {
        width: 55px;
        height: 55px;
      }
    }
  `;

  const link = document.createElement('a');
  link.id = 'sms-bubble';
  link.setAttribute('aria-label', 'Contact the YMCA');

  const icon = document.createElement('img');
  icon.src = 'https://thechurchco-production.s3.amazonaws.com/uploads/sites/1717/2025/05/question.png';
  icon.alt = 'Text Us';
  link.appendChild(icon);

  const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
  link.href = isMobile
    ? 'sms:+18554878041?body=Replace%20this%20text%20with%20your%20question%20and%20send%20away%20to%20the%20YMCA%20%F0%9F%A4%A9'
    : 'https://forms.fillout.com/t/eZLjjVsMS3us';

  if (!isMobile) {
    link.target = '_blank';
  }

  document.head.appendChild(style);
  document.body.appendChild(link);

  // Trigger fade-in after DOM is ready
  window.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(() => {
      link.classList.add('show');
    });
  });
})();
