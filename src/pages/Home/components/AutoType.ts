export const autoType = (
  elementClass: string,
  typingSpeed: number
): Promise<void> => {
  return new Promise((resolve) => {
    const element = document.querySelector(elementClass) as HTMLElement | null;
    if (element) {
      element.style.position = 'relative';
      element.style.display = 'inline-block';

      const cursorElement = document.createElement('div');
      cursorElement.className = 'cursor';
      cursorElement.style.right = 'initial';
      cursorElement.style.left = '0';
      element.prepend(cursorElement);

      const textElement = element.querySelector(
        '.text-js'
      ) as HTMLElement | null;
      if (textElement) {
        const text = textElement.textContent?.trim().split('') || [];
        const amntOfChars = text.length;
        let newString = '';
        textElement.textContent = '|';
        setTimeout(() => {
          textElement.style.opacity = '1';
          cursorElement.removeAttribute('style');
          textElement.textContent = '';
          text.forEach((char, i) => {
            setTimeout(() => {
              newString += char;
              textElement.textContent = newString;
              if (i === amntOfChars - 1) {
                resolve();
              }
            }, (i + 1) * typingSpeed);
          });
          setTimeout(() => {
            cursorElement.className = 'invisible';
          }, amntOfChars * typingSpeed + 1500); // add 1500 to account for the initial delay
        }, 800);
      }
    }
  });
};
