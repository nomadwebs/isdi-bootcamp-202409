import registerUser from '../logic/registerUser'
import PasswordInput from '../components/library/PasswordInput'

import Label from '../components/library/Label'
import Input from '../components/library/Input'
import Button from '../components/library/Button'
import Field from '../components/library/Field'
import Form from '../components/library/Form'

//Funcion register, que mostrará el formulario de registro
function Register(props) {
    return <section>
        <h2>Register</h2>

        <form onSubmit={event => {
            event.preventDefault()

            const {
                target: { username: { value: username },
                    password: { value: password },
                    name: { value: name },
                    email: { value: email },
                    passwordRepeat: { value: passwordRepeat } } } = event

            try {

                console.log(name)
                console.log(username)
                console.log(email)
                console.log(password)
                console.log(passwordRepeat)

                registerUser(name, email, username, password, passwordRepeat)
                event.target.reset()
                props.onRegisterClick()

            } catch (error) {
                alert(error.message)

                console.error(error)
            }
        }}>

            <Field>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" />
            </Field>

            <Field>
                <Label htmlFor="email">E-mail</Label>
                <Input type="email" id="email" />
            </Field>
            <Field>
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" />
            </Field>
            <Field>
                <Label htmlFor="password">Password</Label>
                <PasswordInput id="password" />
            </Field>
            <Field>
                <Label htmlFor="passwordRepeat">Repeat Password</Label>
                <PasswordInput id="passwordRepeat" />
            </Field>
            <Button type="submit" className="Button" >Register</Button>
        </form>

        <a href=""
            onClick={event => {
                event.preventDefault()
                props.onLoginClick()
            }}>Login</a>

    </section>
}

export default Register