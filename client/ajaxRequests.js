import $ from 'jquery';

const ajaxRequests = {

  get: (path, callback) => {
    console.log('path:', path);
    $.ajax({
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