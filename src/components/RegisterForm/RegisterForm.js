import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormContainer } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="container">
          <label htmlFor="name">Username</label>
          <input type="text" name="name" />
        </div>

        <div className="container">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>

        <div className="container">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </FormContainer>
  );
};
