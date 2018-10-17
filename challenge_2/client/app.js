$('#uploadButton').on('click', e => {
  var formData = new FormData($('form')[0]);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/upload_json', true);

  xhr.onreadystatechange = () => {
    // XMLHttpRequest.DONE === 4
    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
      // $('body').html(xhr.responseText);
      // $('pre').html(xhr.responseText);
      $('#download').html(`<a href="csv/${xhr.responseText}.csv" download>Download your csv here</a>`);
    }
  }

  xhr.send(formData);
});
