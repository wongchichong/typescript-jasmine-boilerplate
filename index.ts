import './style.css';

import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/boot0.js';
import 'jasmine-core/lib/jasmine-core/boot1.js';

import './tests.ts'

(function bootstrap () {
  if (window.jasmineRef) {
    location.reload();
    return;
  }
  window.onload(new Event(null));
  window.jasmineRef = jasmine.getEnv();
}());