function previewImage() {
    const fileInput = document.getElementById('image-source');
    const imagePreview = document.getElementById('image-preview');
  
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();
  
      reader.onloadend = function () {
        imagePreview.src = reader.result;
      };
  
      reader.readAsDataURL(file);
    } else {
      imagePreview.src = "";
    }
  }