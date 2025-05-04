(function () {
  const style = document.createElement('style');
  style.textContent = `
    #sms-bubble {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 33px;
      height: 33px;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      opacity: 0;
      transition: opacity 1s ease;
    }

    #sms-bubble img {
      width: 100%;
      height: 100%;
    }

    #sms-bubble.show {
      opacity: 1;
    }

    @media (max-width: 600px) {
      #sms-bubble {
        width: 40px;
        height: 40px;
      }
    }
  `;

  const link = document.createElement('a');
  link.id = 'sms-bubble';
  link.setAttribute('aria-label', 'Contact the YMCA');
  link.href = 'https://forms.fillout.com/t/eZLjjVsMS3us';
  link.target = '_blank';

  const icon = document.createElement('img');
  icon.src = 'https://thechurchco-production.s3.amazonaws.com/uploads/sites/1717/2025/05/question-v3.png';
  icon.alt = 'Contact Us';
  link.appendChild(icon);

  document.head.appendChild(style);
  document.body.appendChild(link);
