import { Formik, Form, Field, ErrorMessage } from 'formik';

function Login() {
    return (
        <div>
            <Formik 
                initialValues={{ email: '', password: '' }}
                onSubmit={async values => {
                    try{
                        const url = `${process.env.REACT_APP_API_URL}/auth/login`

                        await fetch(url, {
                            body: JSON.stringify(values),
                            headers: {
                            'Content-Type': 'application/json'
                            },
                            method: 'POST',
                            mode: 'cors'
                        })
                        .then((data)=>{
                            console.log('crb_here')
                            console.log(data)
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });
                    }catch(error: any){
                        throw new error;
                    }
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