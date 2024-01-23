import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// TODO: remove this once we're switched `jest` to `vi` in code
// eslint-disable-next-line no-undef
globalThis.jest = vi

// Add the cleanup function for React testing library
afterEach(cleanup)
