import {render, fireEvent, screen} from '@testing-library/vue'
import { test } from 'vitest'

import HelloWorld from './HelloWorld.vue'

test('increments value on click', async () => {
  const screen = render(HelloWorld)

  screen.getByText('Contagem:')

  const button = screen.getByText('Somar')

  await fireEvent.click(button)
  await fireEvent.click(button)

  screen.getByText('Count is: 2')
})