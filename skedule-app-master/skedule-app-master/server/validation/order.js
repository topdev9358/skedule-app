const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateOrderInput(data){
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : '';
 
  if(!Validator.isLength(data.text, {min:5, max:300})){
    errors.text = 'Text must be 5 and 300 charaters';

  }
  if(Validator.isEmpty(data.text)){
    errors.text = 'Text field is required.';
  }
   
  return{
    errors,
    isValid: isEmpty(errors)
  }
}