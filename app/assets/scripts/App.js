import $ from 'jquery';

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';


var mobileMobile = new MobileMenu();
new RevealOnScroll($(".believe-item"), "0");
new RevealOnScroll($(".testimonial"), "0");
var stickyHeader = new StickyHeader();
