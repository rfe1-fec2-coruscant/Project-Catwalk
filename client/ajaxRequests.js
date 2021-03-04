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

  putYourOutfitItem: (path, callback) => {
    console.log('addToYourOutfit req to:', path);
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
  }

};

export default ajaxRequests;