import $ from 'jquery';

export const apiGET = (path, callback) => {
  $.ajax({
    url: 'http://localhost:8080' + path,
    method: 'GET',
    success: (data) => {
      callback(data);
    }
  });
};

export const apiPOST = (path, callback) => {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:3000' + path,
    data: JSON.stringify(postObj),
    contentType: 'application/json',
    success: (data) => {
      console.log(data);
    }
  });
};
