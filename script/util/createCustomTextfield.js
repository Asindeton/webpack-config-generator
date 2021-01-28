/* <input
type="textfield"
class="textfield input value-matrix__input"
placeholder="index.js"
/> */
import create from './create';

export default function createCustomInput(name, value, placeholder, parent) {
  const input = create('input', 'textfield input value-matrix__input', null, null, ['type', 'textfield'],
    ['name', name], ['value', value || placeholder], ['placeholder', placeholder]);
  parent.append(input);
  return input;
}
