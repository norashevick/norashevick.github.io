/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

 const AUTOFILLED = 'is-autofilled';
 const onAutoFillStart = (el) => el.classList.add(AUTOFILLED);
 const onAutoFillCancel = (el) => el.classList.remove(AUTOFILLED);

 const onAnimationStart = ({ target, animationName }) => {
     switch (animationName) {
         case 'onAutoFillStart':
             return onAutoFillStart(target)
         case 'onAutoFillCancel':
             return onAutoFillCancel(target)
     }
 }
 document.querySelector('input').addEventListener('animationstart', onAnimationStart, console.log("IT WORKED"));
