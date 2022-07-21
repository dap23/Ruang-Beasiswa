const createError = (stat, msg) => {
  const err = new Error();
  err.status = stat;
  err.message = msg;
  err.stack;
  return err;
};

module.exports = createError;
