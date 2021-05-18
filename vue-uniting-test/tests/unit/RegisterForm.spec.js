import { mount } from '@vue/test-utils';
import RegisterForm from '@/components/RegisterForm';

describe('RegisterForm', () => {
  it('Recebe os dados de registro ao disparar o formulário', () => {
    const wrapper = mount(RegisterForm);

    const inputName = wrapper.find('input[id="name"]');
    const inputEmail = wrapper.find('input[id="email"]');
    const inputAge = wrapper.find('input[id="age"]');
    const inputPassword = wrapper.find('input[id="password"]');

    inputName.setValue('Gabriel Caiana Guedes');
    inputEmail.setValue('gabrielcaianaguedes@gmail.com');
    inputAge.setValue('27/11/1996');
    inputPassword.setValue('123456');

    wrapper.trigger('submit');

    const formSubmittedCalls = wrapper.emitted('formSubmitted');
    expect(formSubmittedCalls).toHaveLength(1);

    const expectedPayload = {
      name: 'Gabriel Caiana Guedes',
      email: 'gabrielcaianaguedes@gmail.com',
      age: '27/11/1996',
      password: '123456',
    };

    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(
      expectedPayload
    );
  });

  it('é um instancia do vue', () => {
    const wrapper = mount(RegisterForm);
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it('verificando se existe o botão submit', () => {
    const wrapper = mount(RegisterForm);
    expect(wrapper.contains('button[type="submit"]')).toBe(true);
  });
});
