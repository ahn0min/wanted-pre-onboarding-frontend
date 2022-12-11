const validate = {
  email: (value: string) => {
    //@ 포함되어 있어야한다.
    if (!value) return true;
    const regExp = /^[a-zA-Z0-9\_]+@[a-zA-Z0-9]+\.+[a-zA-Z]+$/.test(value);
    return regExp;
  },
  password: (value: string) => {
    //8글자 이상
    if (!value) return true;
    const regExp = /[\d\w]{8,}/.test(value);
    return regExp;
  },
};

export default validate;
