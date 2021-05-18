import { mount } from '@vue/test-utils'
import MessageDisplay from '@/components/MessageDisplay'
import { getMessage } from '@/services/axios'
import flushPromises from 'flush-promises'

jest.mock('@/services/axios')
beforeEach(() => {
    jest.clearAllMocks() // limpando todas as chamadas apos serem executadas
})

describe('MessageDisplay', () => {
    it('Sucesso ao chamar getMessage', async () => {
        const mockMessage = 'Hello from the db'
        getMessage.mockResolvedValueOnce({ text : mockMessage }) // simulando sucesso na chamada da api
        const wrapper = mount(MessageDisplay)

        await flushPromises() // lib que resolve todas as promisses antes do teste ser executado

        expect(getMessage).toHaveBeenCalledTimes(1) // executando apenas uma chamada na api
        const message = wrapper.find('[data-testid="message"]').element.textContent
        expect(message).toEqual(mockMessage) // toEqual -> seja igual ao valor informado
    })

    it('Falha ao chamar getMessage', async () => {
        const mockError = 'Oops! something went wrong'
        getMessage.mockRejectedValueOnce(mockError) // simulando falha na chamada da api
        const wrapper = mount(MessageDisplay)

        await flushPromises()

        expect(getMessage).toHaveBeenCalledTimes(1)
        const displayError = wrapper.find('[data-testid="message-error"]').element.textContent
        expect(displayError).toEqual(mockError)
    })
})