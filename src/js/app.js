/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';

import BaseHelpers from './helpers/BaseHelpers.js';
// import PopupManager from './modules/PopupManager';
import BurgerMenu from './modules/BurgerMenu';
// import Tabs from './modules/Tabs';
// import Accordion from './modules/Accordion.js';

BaseHelpers.checkWebpSupport();
/* Добавление класса touch для HTML если браузер мобильный */
// BaseHelpers.addTouchClass();

/* Добавление loaded для HTML после полной загрузки страницы */
BaseHelpers.addLoadedClass();

/* Фиксированный header */
// BaseHelpers.headerFixed();


/** ===================================================================================
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/**  ===================================================================================
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
AOS.init();


/* Динамический адаптив ===================================================================================
* Что бы перебросить блок в другой блок, повешай на него атрибут:
* data-da="class блока куда нужно перебросить, брекпоинт(ширина экрана), позиция в блоке(цифра либо first,last)"
*/
/*Расскоментировать для использования*/
import { useDynamicAdapt } from './modules/dynamicAdapt.js'
useDynamicAdapt()

/* Cкрыть меню при клике на его ссылки ===================================================================================
*/
import { toggleLinkMenuNoOpen } from './modules/index.js'
toggleLinkMenuNoOpen()

