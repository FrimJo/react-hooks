import { cleanup, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import * as React from 'react'
import { App } from './'

afterEach(cleanup)

it('renders without crashing', () => {
  render(<App />)
})
