import $ from 'jquery';

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';


var mobileMobile = new MobileMenu();
new RevealOnScroll($(".believe-item"), "20%");
new RevealOnScroll($(".testimonial"), "100%");
var stickyHeader = new StickyHeader();
