import {Unit} from './modules/unit.js'

let unit = new Unit('#unit');

let hint = $('#hintContainer');

if (hint.length) {
    setTimeout(() => hint.removeClass('d-none'), 1000 * 60)
}