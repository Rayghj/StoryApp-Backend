const New = {
  async init() {
    this._initialListener();
  },

  _initialListener() {
    const addStoryForm = document.querySelector('#addStoryForm');
    addStoryForm.addEventListener(
      'submit',
      (event) => {
        event.preventDefault();
        event.stopPropagation();
 
 
        addStoryForm.classList.add('was-validated');
        this._sendPost();
      },
      false,
    );
  },

  _sendPost() {
    const formData = this._getFormData();
 
 
    if (this._validateFormData({ ...formData })) {
      console.log('formData');
      console.log(formData);
    }
  },

  _getFormData() {
    const noteInput = document.querySelector('#validationCustomNotes');
    const imgInput = document.querySelector('#validationCustomEvidence');

 
    return {
      img: imgInput.files[0],
      note: noteInput.value,
    };
  },

 
  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');
 
 
    return formDataFiltered.length === 0;
  },
 
 
  // _goToDashboardPage() {
  //   window.location.href = '/';
  // },
}

export default New;