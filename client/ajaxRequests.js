import $ from 'jquery';

const ajaxRequests = {

  get: (path, callback) => {
    $.ajax({
      type: 'GET',
      url: '/get',
      data: { path },
      success: callback,
      error: (err) => {
        console.log(err);
      }
    });
  },

  put: (path, callback) => {
    console.log('ajaxrequest.put', path);
    $.ajax({
      type: 'PUT',
      url: '/put',
      contentType: 'application/json',
      data: JSON.stringify({data: path}),
      success: callback,
      error: (err) => {
        console.log(err);
      }
    });
  },

  post: (path, data, callback) => {
    $.ajax({
      type: 'POST',
      url: '/post',
      contentType: 'application/json',
      data: JSON.stringify({path: path, data: data}),
      success: callback,
      error: (err) => {
        console.log(err);
      }
    });
  }

};

export default ajaxRequests;