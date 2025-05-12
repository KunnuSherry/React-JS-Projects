import CommonInput from "../common-input";

function CommonForm({ formControls = [], buttonText, formData, setFormData, onSubmit }) {

    const formElementTypes = {
        INPUT: 'input',
        SELECT: 'select',
        TEXTAREA: 'textarea'
    };

    function renderFormElement(formControl) {
        switch (formControl.componentType) {
            case formElementTypes.INPUT:
                return (
                    <CommonInput
                        type={formControl.type}
                        placeholder={formControl.placeholder}
                        value={formData[formControl.name]}
                        name={formControl.name}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                [formControl.name]: event.target.value,
                            })
                        }
                    />
                );
            default:
                return (
                    <CommonInput
                        type={formControl.type}
                        placeholder={formControl.placeholder}
                        value={formData[formControl.name]}
                        name={formControl.name}
                        onChange={formControl.onChange}
                    />
                );
        }
    }

    return (
        <form onSubmit={onSubmit}>
            {formControls.map((control) => (
                <div key={control.name}>{renderFormElement(control)}</div>
            ))}
            <button type="submit">{buttonText || 'Submit'}</button>
        </form>
    );
}

export default CommonForm;
