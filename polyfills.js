import { Buffer } from 'buffer';

window.global = window;
window.global.Buffer = Buffer;
window.global.process = {
  env: { DEBUG: undefined },
  version: '',
  // eslint-disable-next-line no-undef
  nextTick: require('next-tick')
};