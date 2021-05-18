import { mount } from '@vue/test-utils';
import LoginForm from '@/components/loginForm';

describe('LoginForm', () => {
  it('emite um evento com um payload de dados do usuário', () => {
    const wrapper = mount(LoginForm);
    const inputEmail = wrapper.find('input[id="email"]');
    const inputPassword = wrapper.find('input[id="password"]')

    inputEmail.setValue('gabrielcaianaguedes@gmail.com'); // Set value for text input
    inputPassword.setValue('123456');
    wrapper.trigger('submit'); // Simulate form submission

    // Assert event has been emitted
    const formSubmittedCalls = wrapper.emitted('formSubmitted');
    expect(formSubmittedCalls).toHaveLength(1);

    // Assert payload is correct
    const expectedPayload = {
        email: 'gabrielcaianaguedes@gmail.com',
        password: '123456',
    };
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(
      expectedPayload
    );
  });
});
