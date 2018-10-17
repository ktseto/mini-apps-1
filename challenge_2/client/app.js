$('#uploadButton').on('click', e => {
  var formData = new FormData($('form')[0]);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/upload_json', true);

  xhr.onreadystatechange = () => {
    // XMLHttpRequest.DONE === 4
    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
      $('body')[0].innerHTML = xhr.responseText;
    }
  }

  xhr.send(formData);
});
