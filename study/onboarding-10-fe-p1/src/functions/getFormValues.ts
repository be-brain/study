const getFormValues = (form: HTMLFormElement) => {
    const formData = new FormData(form);
    // const username = formData.get("username");
    // const password = formData.get("password");
    // for (let [key, value] of formData.entries()) console.log(key, value);
    const values = [...formData.values()];
    const isEmpty = values.includes("");
    const data = Object.fromEntries(formData);
    return { isEmpty, data };
};

export default getFormValues;
