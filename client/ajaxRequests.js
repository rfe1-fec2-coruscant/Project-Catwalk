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

  getYourOutfits: callback => {
    $.ajax({
      type: 'GET',
      url: '/getYourOutfits',
      // data: { path },
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
      data: JSON.stringify({ data: path }),
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
  },

  putYourOutfitItem: (path, callback) => {
    $.ajax({
      type: 'PUT',
      url: '/addToYourOutfit',
      contentType: 'application/json',
      data: JSON.stringify({ data: path }),
      success: callback,
      error: err => {
        console.log(err);
      }
    });
  },

  deleteFromYourOutfit: (id, callback) => {
    $.ajax({
      type: 'PUT',
      url: '/deleteFromYourOutfit',
      contentType: 'application/json',
      data: JSON.stringify({ data: id }),
      success: callback,
      error: err => {
        console.log(err);
      }
    });
  },

  postGlobalClickTracker: (clickObject, callback) => {
    $.ajax({
      type: 'POST',
      url: '/globalClickTracker',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(clickObject),
      // dataType: 'json',
      success: callback,
      error: (err) => {
        console.log('err:', err);
      }
    });
  }

};

export default ajaxRequests;