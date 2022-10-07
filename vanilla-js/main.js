import './style.css';
import $ from 'jquery';

// Please feel free to remove everything below this line 😄
const inputs = $('input')

// Starter data;
const data = {
  name: "World"
}

// updates reactive elements text content;
const reactiveData = new Proxy(data, {
  set(target, prop, value) {
    if (target[prop] === value) return target[prop];
    $(`[data-reactive="${prop}"]`).text(value);
    return true;
  }
})

// updates reactive elems on input
inputs.on('input', function () {
  const name = $(this).prop("name");
  const value = $(this).val();
  reactiveData[name] = value;
})

// populates input elements with proper data;
$(function () {
  const reactiveElems = $('[data-reactive]');
  reactiveElems.each(function (index, elem) {
    const name = $(elem).data('reactive')
    const value = data[name];
    $(elem).text(value);
    $(`[name=${name}]`).val(value)
  })
})