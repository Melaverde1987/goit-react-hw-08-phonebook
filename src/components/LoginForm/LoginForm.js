import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormContainer } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>

        <div className="container">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
      </form>
    </FormContainer>
  );
};
