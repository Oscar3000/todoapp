import { Button } from '@material-ui/core';
import { Form, Formik } from 'formik';
import * as React from 'react';
import Field from './Field';
const myForm = (props)=>{
    return (<Formik initialValues={{firstName: '', lastName: '', email: ''}} 
                onSubmit={(values)=> props.onSubmit(values)}>
        {({values, handleChange, handleBlur}) => (
            <Form>
                <div>
                <Field name="firstName" value={values.firstName} onChange={handleChange}
                    onBlur={handleBlur} placeholder ="Enter FIrst Name" />
                </div>
                <div>
                <Field name="lastName" value={values.lastName} onChange={handleChange}
                    onBlur={handleBlur} placeholder="Enter Last Name" />
                </div>
                <div>
                <Field name="email" value={values.email} onChange={handleChange}
                    onBlur={handleBlur} placeholder="Enter Email" />
                </div>
                <Button type="submit">Submit</Button>
                    <pre>{JSON.stringify(values, null,2)}</pre>
            </Form>
        )}
    </Formik>);
}

export default myForm;