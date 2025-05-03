(function () {
  const style = document.createElement('style');
  style.textContent = `
    #sms-bubble {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 32.5px;
      height: 32.5px;
      background-color: #20BDBE;
      border-radius: 50%;
      box-shadow: 0 2px 6px rgba(0,0,0,0.25);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-family: 'Cachet', 'Cachet Book', Verdana, Arial, sans-serif;
      font-size: 14px;
      font-weight: 700;
      color: white;
      text-decoration: none;
      line-height: 1;
    }
  `;

  const link = document.createElement('a');
  link.id = 'sms-bubble';
  link.setAttribute('aria-label', 'Contact the YMCA');
  link.textContent = '?';

  const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
  const href = isMobile
    ? 'sms:+18554878041?body=Replace%20this%20text%20with%20your%20question%20and%20send%20away%20to%20the%20YMCA%20%F0%9F%A4%A9'
    : 'https://forms.fillout.com/t/eZLjjVsMS3us';

  link.href = href;
  if (!isMobile) link.target = '_blank';

  document.head.appendChild(style);
  document.body.appendChild(link);
})();
