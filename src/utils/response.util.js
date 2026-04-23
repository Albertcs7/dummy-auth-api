// Utility helpers for consistent API responses.

module.exports = {
  success: (res, data, message = 'OK') => res.status(200).json({ success: true, message, data }),
  error: (res, message = 'Something went wrong', statusCode = 500) =>
    res.status(statusCode).json({ success: false, message }),
};
