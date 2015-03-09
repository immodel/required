module.exports = function() {
  this.required = function(isRequired) {
    return isRequired
      ? this.validator(this._requiredValidator, 'required')
      : this.removeValidator(this._requiredValidator, 'required');
  };

  this._requiredValidator = this._requiredValidator || function() {
    return !! this.value;
  };

  this.requiredValidator = function(fn) {
    return this.use(function() {
      this._requiredValidator = fn;
    });
  };
};