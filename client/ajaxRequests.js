import $ from 'jquery';

const ajaxRequests = {

  get: (path, callback) => {
    return $.ajax({
      type: 'GET',
      url: '/get',
      data: { path },
      success: callback,
      error: err => {
        console.log('err from ajaxRequests.get:', err);
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
  }

};

export default ajaxRequests;