export const TextAreaConfig =       {
  id								: 'Texarea',
  name							: 'Textarea',
  subtitle					: 'Textarea',
  group							: 'Textarea',
  formlyType				: 'textarea',
  formlySubtype			: '',
  formlyLabel				: '',
  formlyRequired		: false,
  formlyDesciption	: '',
  formlyOptions			: [],
  formlyExpressionProperties: {},
  formlyValidators	: {},
  formlyValidation	: {
    messages	: {
      required: function(viewValue, modelValue, scope) {
        //return a required validation message :
        //-> '<label as name> is required '
        //-> or if not exists or empty just 'this field is required'
        var defaultReturnMsg 	= 'this Textarea field is required';
        var returnMsg 				= (typeof scope.to.label !== 'undefined') ? ((scope.to.label !== '') ? scope.to.label + ' is required' : defaultReturnMsg) : defaultReturnMsg;
        return returnMsg;
      }
    }
  }
};
