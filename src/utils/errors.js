const parse = (e) => {
  const error = {
    type: 'API Error',
    title: 'API Error',
    message: 'An unknown error occurred.',
    status: null,
    data: null,
  };
  // if we got an actual response back from the server
  if (e.response) {
    const { response } = e;
    const { data } = response;
    // --------- set shit up
    error.data = data;
    if (data.message) {
      error.message = data.message;
    }
    if (data.type) {
      error.type = data.type;
    }
    if (response.status) {
      error.status = response.status;
    }
  } else {
    error.message = e.message;
  }
  if (error.status === 429) {
    error.type = 'Too Many Requests';
    error.message = 'You have made too many request against our server. Please wait before proceeding.';
  }
  // handle generic networking error
  if (error.message === 'Network Error') {
    error.type = 'Network Error';
    error.message = 'We may be having issues connecting to the API server. Please check your internet connection.';
  }
  return error;
};

export default { parse };
