import $ from 'jquery';

const ajaxRequests = {

  get: (path, callback) => {
    $.ajax({
      type: 'GET',
      url: '/get',
      data: { path },
      success: callback,
      error: err => {
        console.log('err from ajaxRequests.get:', err);
      }
    });
  },

  getMultiple: (array, callback) => {
    $.ajax({
      type: 'GET',
      url: '/get/multiple',
      data: { array },
      success: callback,
      error: err => {
        console.log('err from ajaxRequests.getMultiple:', err);
      }
    });
  }

};

export default ajaxRequests;