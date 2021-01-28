import create from './create';

export default function createCustomCheckbox(name, parent) {
  const input = create('input', 'hide', null, null, ['type', 'checkbox'], ['name', name]);
  parent.append(create('label', 'checkbox', [
    input,
    create('div', 'checkbox__bar'),
    create('div', 'checkbox__circle'),
  ]));
  return input;
}
