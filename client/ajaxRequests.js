import $ from 'jquery';

const ajaxRequests = {

  get: (path, callback) => {
    return $.ajax({
      type: 'GET',
      url: '/get',
      data: { path },
      success: callback,
      error: (err) => {
        console.log(err);
      }
    });
  }

};

export default ajaxRequests;