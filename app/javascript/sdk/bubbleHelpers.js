import { addClasses, removeClasses, toggleClass } from './DOMHelpers';
import { IFrameHelper } from './IFrameHelper';
import { isExpandedView } from './settingsHelper';

export const bubbleSVG =
  'M365.344 59.5842L66.9785 0C29.9773 0 0 29.9921 0 66.9785V408.183C0 445.17 29.9773 475.162 66.9785 475.162L225.104 443.584C225.104 443.584 318.607 435.923 395.292 512C395.292 512 396.803 456.387 396.892 402.967C420.171 389.231 432.322 369.063 432.322 348.599V126.563C432.322 99.5786 401.471 68.075 365.344 59.5842ZM16.7446 66.9785C16.7446 39.8018 38.4385 17.5893 65.4374 16.7594L361.773 75.9435C392.076 83.1896 415.563 109.047 415.563 126.563V271.337C415.563 286.526 405.664 301.077 388.371 311.287L380.147 316.147V325.69C380.073 351.785 379.703 378.577 379.317 399.011C317.629 353.371 252.918 349.355 232.439 349.355C227.179 349.355 224.067 349.592 223.711 349.622L222.748 349.711L65.4077 381.125C38.4089 380.295 16.715 358.098 16.715 330.906V66.9785H16.7446ZM325.112 193.903V173.843H338.974V154.762L361.317 142.531V173.843H376.647V193.903H361.317V219.833C361.317 232.553 362.948 234.51 376.647 234.51V255.385H373.385C347.455 255.385 338.974 246.578 338.974 219.996V193.903H325.112ZM268.362 257.006C251.075 257.006 229.059 243.307 229.059 214.605C229.059 185.739 250.259 172.203 268.688 172.203C279.288 172.203 287.606 176.117 292.987 181.825V173.834H315.33V255.376H292.987V246.243C287.606 252.603 278.962 257.006 268.362 257.006ZM272.765 236.458C284.833 236.458 293.64 226.51 293.64 214.442C293.64 202.374 284.833 192.589 272.765 192.589C260.371 192.589 250.912 201.884 250.912 214.442C250.912 226.999 260.371 236.458 272.765 236.458ZM144.549 255.379V136.328H166.728V182.807C172.11 176.284 179.938 172.206 189.234 172.206C208.477 172.206 220.056 184.601 220.056 205.639V255.379H197.388V208.737C197.388 197.647 192.332 191.287 182.384 191.287C173.904 191.287 166.891 197.158 166.891 210.857V255.379H144.549ZM97.0657 257.006C73.5817 257.006 54.8271 238.089 54.8271 214.605C54.8271 191.121 73.5817 172.203 97.0657 172.203C115.657 172.203 130.009 182.804 136.369 197.97L116.473 206.451C113.374 198.786 105.872 193.404 97.2288 193.404C85.4868 193.404 76.3542 202.863 76.3542 214.605C76.3542 226.347 85.4868 235.806 97.2288 235.806C105.872 235.806 113.374 230.424 116.473 222.759L136.369 231.239C130.009 246.406 115.657 257.006 97.0657 257.006Z';
// 'M365.344 59.5842L66.9785 0C29.9773 0 0 29.9921 0 66.9785V408.183C0 445.17 29.9773 475.162 66.9785 475.162L225.104 443.584C225.104 443.584 318.607 435.923 395.292 512C395.292 512 396.803 456.387 396.892 402.967C420.171 389.231 432.322 369.063 432.322 348.599V126.563C432.322 99.5786 401.471 68.075 365.344 59.5842ZM16.7446 66.9785C16.7446 39.8018 38.4385 17.5893 65.4374 16.7594L361.773 75.9435C392.076 83.1896 415.563 109.047 415.563 126.563V271.337C415.563 286.526 405.664 301.077 388.371 311.287L380.147 316.147V325.69C380.073 351.785 379.703 378.577 379.317 399.011C317.629 353.371 252.918 349.355 232.439 349.355C227.179 349.355 224.067 349.592 223.711 349.622L222.748 349.711L65.4077 381.125C38.4089 380.295 16.715 358.098 16.715 330.906V66.9785H16.7446Z" fill="#593CFB"></path><path d="M325.112 193.903V173.843H338.974V154.762L361.317 142.531V173.843H376.647V193.903H361.317V219.833C361.317 232.553 362.948 234.51 376.647 234.51V255.385H373.385C347.455 255.385 338.974 246.578 338.974 219.996V193.903H325.112Z" fill="#593CFB"></path><path d="M268.362 257.006C251.075 257.006 229.059 243.307 229.059 214.605C229.059 185.739 250.259 172.203 268.688 172.203C279.288 172.203 287.606 176.117 292.987 181.825V173.834H315.33V255.376H292.987V246.243C287.606 252.603 278.962 257.006 268.362 257.006ZM272.765 236.458C284.833 236.458 293.64 226.51 293.64 214.442C293.64 202.374 284.833 192.589 272.765 192.589C260.371 192.589 250.912 201.884 250.912 214.442C250.912 226.999 260.371 236.458 272.765 236.458Z" fill="#593CFB"></path><path d="M144.549 255.379V136.328H166.728V182.807C172.11 176.284 179.938 172.206 189.234 172.206C208.477 172.206 220.056 184.601 220.056 205.639V255.379H197.388V208.737C197.388 197.647 192.332 191.287 182.384 191.287C173.904 191.287 166.891 197.158 166.891 210.857V255.379H144.549Z" fill="#593CFB"></path><path d="M97.0657 257.006C73.5817 257.006 54.8271 238.089 54.8271 214.605C54.8271 191.121 73.5817 172.203 97.0657 172.203C115.657 172.203 130.009 182.804 136.369 197.97L116.473 206.451C113.374 198.786 105.872 193.404 97.2288 193.404C85.4868 193.404 76.3542 202.863 76.3542 214.605C76.3542 226.347 85.4868 235.806 97.2288 235.806C105.872 235.806 113.374 230.424 116.473 222.759L136.369 231.239C130.009 246.406 115.657 257.006 97.0657 257.006Z" fill="#593CFB'
// 'M240.808 240.808H122.123C56.6994 240.808 3.45695 187.562 3.45695 122.122C3.45695 56.7031 56.6994 3.45697 122.124 3.45697C187.566 3.45697 240.808 56.7031 240.808 122.122V240.808Z';

export const body = document.getElementsByTagName('body')[0];
export const widgetHolder = document.createElement('div');

export const bubbleHolder = document.createElement('div');
export const chatBubble = document.createElement('button');
export const closeBubble = document.createElement('button');
export const notificationBubble = document.createElement('span');

export const setBubbleText = bubbleText => {
  if (isExpandedView(window.$chatwoot.type)) {
    const textNode = document.getElementById('woot-widget--expanded__text');
    textNode.innerText = bubbleText;
  }
};

// export const createBubbleIcon = ({ className, path, target }) => {
//   let bubbleClassName = `${className} woot-elements--${window.$chatwoot.position}`;
//   const bubbleIcon = document.createElementNS(
//     'http://www.w3.org/2000/svg',
//     'svg'
//   );
//   bubbleIcon.setAttributeNS(null, 'id', 'woot-widget-bubble-icon');
//   bubbleIcon.setAttributeNS(null, 'width', '24');
//   bubbleIcon.setAttributeNS(null, 'height', '24');
//   bubbleIcon.setAttributeNS(null, 'viewBox', '0 0 512 512');
//   bubbleIcon.setAttributeNS(null, 'fill', '#593CFB');
//   bubbleIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

//   const bubblePath = document.createElementNS(
//     'http://www.w3.org/2000/svg',
//     'path'
//   );
//   bubblePath.setAttributeNS(null, 'd', path);
//   bubblePath.setAttributeNS(null, 'fill', '#FFFFFF');

//   bubbleIcon.appendChild(bubblePath);
//   target.appendChild(bubbleIcon);

//   if (isExpandedView(window.$chatwoot.type)) {
//     const textNode = document.createElement('div');
//     textNode.id = 'woot-widget--expanded__text';
//     textNode.innerText = '';
//     target.appendChild(textNode);
//     bubbleClassName += ' woot-widget--expanded';
//   }

//   target.className = bubbleClassName;
//   target.title = 'Open chat window';
//   return target;
// };

export const createBubbleIcon = ({ className, target }) => {
  let bubbleClassName = `${className} woot-elements--${window.$chatwoot.position}`;
  const bubbleIcon = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg'
  );
  bubbleIcon.setAttributeNS(null, 'id', 'woot-widget-bubble-icon');
  bubbleIcon.setAttributeNS(null, 'width', '1024');
  bubbleIcon.setAttributeNS(null, 'height', '1024');
  bubbleIcon.setAttributeNS(null, 'viewBox', '0 0 512 512');
  bubbleIcon.setAttributeNS(null, 'fill', '#ffff');
  bubbleIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

  const innerSVGContent = `
    <g clip-path="url(#clip0_328_204)">
      <path d="M365.344 59.5842L66.9785 0C29.9773 0 0 29.9921 0 66.9785V408.183C0 445.17 29.9773 475.162 66.9785 475.162L225.104 443.584C225.104 443.584 318.607 435.923 395.292 512C395.292 512 396.803 456.387 396.892 402.967C420.171 389.231 432.322 369.063 432.322 348.599V126.563C432.322 99.5786 401.471 68.075 365.344 59.5842ZM16.7446 66.9785C16.7446 39.8018 38.4385 17.5893 65.4374 16.7594L361.773 75.9435C392.076 83.1896 415.563 109.047 415.563 126.563V271.337C415.563 286.526 405.664 301.077 388.371 311.287L380.147 316.147V325.69C380.073 351.785 379.703 378.577 379.317 399.011C317.629 353.371 252.918 349.355 232.439 349.355C227.179 349.355 224.067 349.592 223.711 349.622L222.748 349.711L65.4077 381.125C38.4089 380.295 16.715 358.098 16.715 330.906V66.9785H16.7446Z" fill="#FFFFFF"></path>
      <path d="M325.112 193.903V173.843H338.974V154.762L361.317 142.531V173.843H376.647V193.903H361.317V219.833C361.317 232.553 362.948 234.51 376.647 234.51V255.385H373.385C347.455 255.385 338.974 246.578 338.974 219.996V193.903H325.112Z" fill="#FFFFFF"></path>
      <path d="M268.362 257.006C251.075 257.006 229.059 243.307 229.059 214.605C229.059 185.739 250.259 172.203 268.688 172.203C279.288 172.203 287.606 176.117 292.987 181.825V173.834H315.33V255.376H292.987V246.243C287.606 252.603 278.962 257.006 268.362 257.006ZM272.765 236.458C284.833 236.458 293.64 226.51 293.64 214.442C293.64 202.374 284.833 192.589 272.765 192.589C260.371 192.589 250.912 201.884 250.912 214.442C250.912 226.999 260.371 236.458 272.765 236.458Z" fill="#FFFFFF"></path>
      <path d="M144.549 255.379V136.328H166.728V182.807C172.11 176.284 179.938 172.206 189.234 172.206C208.477 172.206 220.056 184.601 220.056 205.639V255.379H197.388V208.737C197.388 197.647 192.332 191.287 182.384 191.287C173.904 191.287 166.891 197.158 166.891 210.857V255.379H144.549Z" fill="#FFFFFF"></path>
      <path d="M97.0657 257.006C73.5817 257.006 54.8271 238.089 54.8271 214.605C54.8271 191.121 73.5817 172.203 97.0657 172.203C115.657 172.203 130.009 182.804 136.369 197.97L116.473 206.451C113.374 198.786 105.872 193.404 97.2288 193.404C85.4868 193.404 76.3542 202.863 76.3542 214.605C76.3542 226.347 85.4868 235.806 97.2288 235.806C105.872 235.806 113.374 230.424 116.473 222.759L136.369 231.239C130.009 246.406 115.657 257.006 97.0657 257.006Z" fill="#FFFFFF"></path>
    </g>
    <defs>
      <clipPath id="clip0_328_204">
        <rect widt
        h="432.322" height="512" fill="white"></rect>
      </clipPath>
    </defs>
  `;
  
  bubbleIcon.innerHTML = innerSVGContent;
  target.appendChild(bubbleIcon);

  if (isExpandedView(window.$chatwoot.type)) {
    const textNode = document.createElement('div');
    textNode.id = 'woot-widget--expanded__text';
    textNode.innerText = '';
    target.appendChild(textNode);
    bubbleClassName += ' woot-widget--expanded';
  }

  target.className = bubbleClassName;
  target.title = 'Open chat window';
  return target;
};

export const createBubbleHolder = hideMessageBubble => {
  if (hideMessageBubble) {
    addClasses(bubbleHolder, 'woot-hidden');
  }
  addClasses(bubbleHolder, 'woot--bubble-holder');
  bubbleHolder.id = 'cw-bubble-holder';
  body.appendChild(bubbleHolder);
};

export const onBubbleClick = (props = {}) => {
  const { toggleValue } = props;
  const { isOpen } = window.$chatwoot;
  if (isOpen !== toggleValue) {
    const newIsOpen = toggleValue === undefined ? !isOpen : toggleValue;
    window.$chatwoot.isOpen = newIsOpen;

    toggleClass(chatBubble, 'woot--hide');
    toggleClass(closeBubble, 'woot--hide');
    toggleClass(widgetHolder, 'woot--hide');
    IFrameHelper.events.onBubbleToggle(newIsOpen);

    if (!newIsOpen) {
      chatBubble.focus();
    }
  }
};

export const onClickChatBubble = () => {
  bubbleHolder.addEventListener('click', onBubbleClick);
};

export const addUnreadClass = () => {
  const holderEl = document.querySelector('.woot-widget-holder');
  addClasses(holderEl, 'has-unread-view');
};

export const removeUnreadClass = () => {
  const holderEl = document.querySelector('.woot-widget-holder');
  removeClasses(holderEl, 'has-unread-view');
};
