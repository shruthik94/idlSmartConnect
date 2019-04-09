export const validationMessages = {

    'email': [
        { type: 'required', message: 'Enter a Valid Email.' },
      //  { type: 'isInvalidEmailFormat', message: 'email must be Valid like sample@sample.com' }
      ],

      'password': [
        { type: 'required', message: 'Password is required.' },
        { type: 'minlength', message: 'Password must be at least 8 characters long.' },
        { type: 'pattern', message: 'password must have atleast 1 uppercase,1 lowercase,1 Special Character and 1 number.' }
      ],
      'title': [
        { type: 'required', message: 'Title is required.'}
      ]
}