/* eslint-disable no-param-reassign */
import createCustomCheckbox from '../util/createCustomCheckBox';
import createCustomTextfield from '../util/createCustomTextfield';

export default class ValueMatrix {
  constructor() {
    this.element = document.querySelector('.value-matrix');
  }

  getValues() {
    const elements = this.element.querySelectorAll('input');
    const options = {};
    elements.forEach((el) => {
      if (!el.disabled && (el.name !== 'undefined')) {
        if (el.type === 'checkbox') {
          if (el.checked) options[el.name] = true;
        } else if (el.value.trim()) {
          options[el.name] = el.value;
        } else {
          options[el.name] = el.placeholder;
        }
      }
    });
    console.log(options);
  }

  // eslint-disable-next-line class-methods-use-this
  setValue(sendingValue, value, isInput) {
    const elements = document.getElementsByName(sendingValue);
    elements.forEach((el) => {
      if (isInput) {
        el.value = value;
      } else {
        el.checked = false;
        if (value !== 'false') el.checked = true;
      }
      el.dispatchEvent(new Event('change'));
    });
  }

  // eslint-disable-next-line class-methods-use-this
  setValueMatrixItemState(parentInput, wrapper) {
    if (((parentInput.type === 'checkbox' && parentInput.checked)
    || (parentInput.type === 'textfield' && parentInput.value)) && !parentInput.disabled) {
      wrapper.classList.remove('value-matrix__item_inactive');
      // eslint-disable-next-line no-param-reassign
      wrapper.querySelector('input').disabled = false;
    } else {
      wrapper.classList.add('value-matrix__item_inactive');
      // eslint-disable-next-line no-param-reassign
      wrapper.querySelector('input').disabled = true;
    }
    wrapper.querySelector('input').dispatchEvent(new Event('change'));
  }

  setParentItem(wrapper, parentInput) {
    this.setValueMatrixItemState(parentInput, wrapper);
    parentInput.addEventListener('change', () => {
      this.setValueMatrixItemState(parentInput, wrapper);
    });
  }

  createValueMatrixItem(question, level = 0, parentInput) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('value-matrix__item');
    wrapper.style.width = `${100 - level * 5}%`;
    const nameEl = document.createElement('div');
    nameEl.classList.add('value-matrix__name');
    nameEl.textContent = question.sendingValue[0].toUpperCase() + question.sendingValue.slice(1);
    const valueEl = document.createElement('div');
    valueEl.classList.add('value-matrix__value');
    let input = null;
    if (question.requireInput) {
      input = createCustomTextfield(question.sendingValue, question.answer || false, question.placeholder || '[Enter]', valueEl);
    } else {
      input = createCustomCheckbox(question.sendingValue, valueEl);
    }
    wrapper.append(nameEl, valueEl);
    this.element.append(wrapper);
    if (parentInput) {
      this.setParentItem(wrapper, parentInput);
    }
    if (question.child) {
      question.child.forEach((el) => {
        this.createValueMatrixItem(el, level + 1, input);
      });
    }
  }
}
