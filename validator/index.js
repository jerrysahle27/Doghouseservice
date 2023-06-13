function ValidateInput(value) {
  let errors = {};
  const { name, weight, tailLength, color } = value;

  if (name == null) {
    errors.name = "Name is required";
  }
  if (weight == null) {
    errors.weight = "Weight is required";
  } else if (weight < 0) {
    errors.weight = "Weight can't be negative";
  } else if (typeof weight !== "number") {
    errors.weight = "Weight must be a number";
  }
  if (tailLength == null) {
    errors.tailLength = "TailLength is required";
  } else if (tailLength < 0) {
    errors.tailLength = "TailLength can't be negative";
  } else if (typeof tailLength !== "number") {
    errors.tailLength = "TailLength must be a number";
  }
  if (color == null) {
    errors.color = "Color is required";
  }
  return errors;
}
module.exports = {
  ValidateInput,
};
