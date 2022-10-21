/**
 * Check Array is Array
 * @param {Array} arr
 * @returns [Bool]
 */
export const IsArray = (arr) => {
  if (typeof arr !== "undefined" && arr !== null && Array.isArray(arr)) {
    return true;
  }
  return false;
};

/**
 * Check Array Have value
 * @param {Array} Arr
 * @returns [Bool]
 */
export const ArrayHaveValue = (arr) => {
  if (IsArray(arr) && arr.length > 0) return true;
  return false;
};

/**
 * Compare two values
 * @param {[number, string]} value1
 * @param {[number, string]} value2
 * @returns [Node]
 */
export const IsEqual = (value1, value2) => {
  if (value1 === value2) return true;
  return false;
};

/**
 * @param  {[bool]} bool
 * @param  {[bool]} returnNumeric
 * @return {[bool]}
 */
export const IsTrue = (bool, returnNumeric) => {
  if (bool === true || bool === "true" || bool === 1 || bool === "1") {
    return returnNumeric === true ? 1 : true;
  }

  return returnNumeric === true ? 0 : false;
};

/**
 * [description]
 * @param  {[any]}  text
 * @param  {[bool]} nullOption
 * @return {[bool]}
 */
export const HaveValue = (text, nullOption, noneOption) => {
  if (typeof text === "undefined") {
    return false;
  }

  if (IsTrue(nullOption) && (text === "null" || text === null)) {
    return false;
  }

  if (IsTrue(noneOption) && text.toLowerCase() === "none") {
    return false;
  }

  if (text === "0" || text === 0) {
    return true;
  }

  if (text !== "" && text != null) {
    return true;
  }

  return false;
};

/**
 * @param  {Function} functionToCheck
 * @return {boolean}
 */
export const IsFunction = (functionToCheck) =>
  functionToCheck && {}.toString.call(functionToCheck) === "[object Function]";

/**
 * @param  {[any]} obj
 * @return {[bool]}
 */
export const IsObjectHaveValue = (obj) => {
  if (typeof obj == "object" && obj != null && Object.keys(obj).length > 0) {
    return true;
  }

  return false;
};

/**
 * @param  {[any]} obj
 * @return {[bool]}
 */
export const IsObject = (obj) => {
  if (typeof obj != "undefined" && typeof obj == "object" && obj != null) {
    return true;
  }

  return false;
};

/**
 * Validate Password
 * @param {String or Number} password
 * @returns
 */
export const IsValidPassword = (password) => {
  if (!HaveValue(password)) {
    return false;
  }
  password = password.toString();
  let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  return re.test(password);
};

/**
 * [description]
 * @param  {[string]} email
 * @return {[bool]}
 */
export const IsValidEmail = (email) => {
  if (!HaveValue(email)) {
    return false;
  }
  email = email.toString();
  let re =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,30}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
};


