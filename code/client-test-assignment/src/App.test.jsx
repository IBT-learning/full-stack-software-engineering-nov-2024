import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
import { describe, it, expect } from 'vitest'

describe('To-Do App', () => {
  it('renders initial tasks', () => {
    render(<App />)
    expect(screen.getByText('make dinner')).toBeInTheDocument()
    expect(screen.getByText('wash the dishes')).toBeInTheDocument()
  })

  it('adds a new task to the list', () => {
    render(<App />)

    const input = screen.getByPlaceholderText('Add new task')
    const button = screen.getByText('Add')

    fireEvent.change(input, { target: { value: 'study React' } })
    fireEvent.click(button)

    expect(screen.getByText('study React')).toBeInTheDocument()
  })

  it('marks a task as completed', () => {
    render(<App />)

    const task = screen.getByText('wash the dishes')
    fireEvent.click(task)

    expect(task).toHaveClass('completed')
  })

  it('deletes a task from the list', () => {
    render(<App />)

    const deleteButton = screen.getAllByText('🗑')[0] // Get the first delete button
    fireEvent.click(deleteButton)

    expect(screen.queryByText('make dinner')).not.toBeInTheDocument()
})

  
})
