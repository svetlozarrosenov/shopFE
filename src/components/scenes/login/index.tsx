import { Formik, Form, Field, ErrorMessage } from 'formik';

function Login() {
    return (
        <div>
            <Formik 
                initialValues={{ email: '', password: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}>
            
                {({ isSubmitting }) => (
                    <Form>
                    <Field type="email" name="email" placeholder="email" />
                    <ErrorMessage name="email" component="div" />
                    <Field type="password" name="password" placeholder="password"/>
                    <ErrorMessage name="password" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Login;