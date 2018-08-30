// dragover and dragenter events need to have 'preventDefault' called
// in order for the 'drop' event to register. 
// See: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_operations#droptargets
dropContainer.ondragover = dropContainer.ondragenter = function(evt) {
    evt.preventDefault();
  };

  dropContainer.ondrop = function(evt) {
    // pretty simple -- but not for IE :(
      //  alert( input.files.split('.').pop());
    input.files = evt.dataTransfer.files;

    evt.preventDefault();

  };
