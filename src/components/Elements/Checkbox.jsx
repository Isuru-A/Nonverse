import React from "react";
import {Field as FormikField} from "formik";

const Checkbox = ({name, error, children}) => {

    return (
        <div className="checkbox-wrapper">
            <div className="checkbox">
                <FormikField type="checkbox" className={error ? 'field-error' : ''} id={name}
                             name={name}/>
                <div className="text">{children}</div>
            </div>
            {error ? <span className="error">{error}</span> : ''}
        </div>
    )

}
export default Checkbox
