import { isDefined } from './is';

export function getNewState(state, newState) {
  return {...state, newState};
}

export function isFirstRender(items) {
  return items && items.length === 0 || !isDefined(items);
}

export function arrayToObject(array) {
  return array.reduce((obj, item) => {
    obj[Object.keys(item)[0]] = Object.values(item)[0]
    return obj
  }, {})
};

export function getFormData(formData, returnElementsArray = false) {
  const validTypes = ['text', 'number', 'checkbox', 'password', 'radio', 'color', 'date', 'datetime', 'datetime-local', 'email', 'month', 'number', 'range', 'search', 'tel', 'time', 'url', 'week'];
  const testValidTypes = elemnType => validTypes.reduce((bffr, itm) => {
    return itm === elemnType || bffr;
  }, false);
  const _formData = formData.elements;

  // textarea
  const textareaRawCollection = formData.getElementsByTagName('textarea');
  const textareaCollection = Object.values(textareaRawCollection)
    .filter( (eleForm, idx, arry) => eleForm.name &&  arry.indexOf(eleForm) === idx );

  // select

  const selectRawCollection = formData.getElementsByTagName('select');
  const selectCollection = Object.values(selectRawCollection)
    .filter( (eleForm, idx, arry) => eleForm.name &&  arry.indexOf(eleForm) === idx );

  // input
  const dataForm = Object.values(_formData)
    .filter( (eleForm, idx, arry) => eleForm.name &&  arry.indexOf(eleForm) === idx && testValidTypes(eleForm.type) );

  const altogetherCollection = dataForm.concat(textareaCollection).concat(selectCollection);
  let jsonBulid = altogetherCollection.map( ele => ({ [ele.name]: ele.value }));

  return returnElementsArray === 'all' ? [jsonBulid, altogetherCollection] : !returnElementsArray ? jsonBulid : altogetherCollection;
}
