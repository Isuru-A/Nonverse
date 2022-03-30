import React, {useState} from "react";
import {Form, Formik} from "formik";
import Field from "../Elements/Field";
import SimpleButton from "../Elements/SimpleButton";
import {newNotification} from "../../state/notifications";
import {useDispatch} from "react-redux";
import validate from "../../scripts/validate";
import {api} from "../../scripts/api/api";
import {useNavigate} from "react-router";

const RequestForm = () => {

    const [sending, setSending] = useState(false)
    const [error, setError] = useState({})
    const navigate = useNavigate()
    const dispatch = useDispatch()

    async function submit(values) {
        setSending(true)
        await api.post('request-invitation', {
            name: values.name,
            email: values.email
        })
            .then((response) => {
                if (response.data.success) {
                    dispatch(newNotification({
                        key: 'invite_requested',
                        weight: 'success',
                        text: 'Your request was sent successfully',
                        timeout: 5000
                    }))
                    setSending(false)
                    navigate('/')
                }
            })
            .catch((e) => {
                setSending(false)
                if (e.response.status === 422) {
                    dispatch(newNotification({
                        key: 'invite_request-exists',
                        weight: 'warning',
                        text: 'You have already requested an invitation',
                        timeout: 5000
                    }))
                } else {
                    dispatch(newNotification({
                        key: 'invite_request-failed',
                        weight: 'danger',
                        text: 'Something went wrong whilst sending your request',
                        timeout: 5000
                    }))
                }
                navigate('/')
            })
    }

    function validateEmail(value) {
        setError({})
        return validate.email(value)
    }

    return (
        <Formik initialValues={{
            email: '',
            name: ''
        }} onSubmit={(values) => {
            submit(values)
        }}>
            {({values, errors}) => (
                <Form>
                    <Field placeholder="Full Name" name="name" validate={validate.require} error={errors.name}/>
                    <Field placeholder="Email" name="email" validate={validateEmail}
                           error={errors.email ? errors.email : error.email}/>
                    <div className={`submit-wrapper ${sending ? 'action-cover' : ''}`}>
                        <SimpleButton submit label="Submit"/>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default RequestForm