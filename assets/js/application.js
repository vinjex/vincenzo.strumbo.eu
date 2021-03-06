/*
  JS modules imports
 */

// Jquery
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;
// Jquery Plugins
require('./vendor/jquery.scrollex.min');
require('./vendor/jquery.scrolly.min');
// Browser
import browser from 'browser-js';
window.browser = browser;
// Breakpoints
import breakpoints from 'breakpoints-js';
window.breakpoints = breakpoints;
// Popper.js
import Popper from 'popper.js'
// Bootstrap
import bootstrap from 'bootstrap';
// Particles.js
require('particles.js');

// Vendor
require('./vendor/util');
require('./vendor/main');
require('./components/timeline');

// Application level code
$(document).ready(() => {
  loadParticles()
});

function loadParticles() {
  particlesJS.load('particlesjs-wrapper', '/assets/data/particlesjs-config.json', () => {
    console.log('ParticleJS loaded!')
  });
}