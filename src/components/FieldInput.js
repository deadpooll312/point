import React from "react";
import {ErrorMessage, Field} from "formik";
//local

export const FieldInput = ({name, placeholder, label, type, errorName, addClass}) => {
  return (
    <div className="field">
      {label && <label className="label">{label}</label>}
      <Field name={name} placeholder={placeholder} className={addClass} type={type} />
      {errorName && (
        <ErrorMessage name={errorName}>
          {(msg) => (
            <p className="error-message" style={{color: "red"}}>
              {msg}
            </p>
          )}
        </ErrorMessage>
      )}
    </div>
  );
};
