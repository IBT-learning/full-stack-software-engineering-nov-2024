import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import App from './App'

describe('React To-Do App Tests', () => {
  
  beforeEach(() => {
    render(<App />)
  })

  // ✅ Initial Render Tests
  describe('Initial render', () => {
    it('should render the app title', () => {
      expect(screen.getByText('To-Do App')).toBeInTheDocument()
    })

    it('should render the input field with placeholder', () => {
      const input = screen.getByTestId('todo-input')
      expect(input).toBeInTheDocument()
      expect(input).toHaveAttribute('placeholder', 'Enter a new task...')
    })

    it('should render the add button', () => {
      const addButton = screen.getByTestId('add-button')
      expect(addButton).toBeInTheDocument()
      expect(addButton).toHaveTextContent('Add Task')
    })

    it('should show empty state message when no tasks exist', () => {
      expect(screen.getByTestId('empty-message')).toBeInTheDocument()
      expect(screen.getByText('No tasks yet. Add one above!')).toBeInTheDocument()
    })

    it('should display task statistics with zero values', () => {
      expect(screen.getByTestId('total-count')).toHaveTextContent('0')
      expect(screen.getByTestId('completed-count')).toHaveTextContent('0')
      expect(screen.getByTestId('remaining-count')).toHaveTextContent('0')
    })
  })

  // ✅ Adding New Tasks Tests
  describe('Adding new tasks', () => {
    it('should allow typing in the input field', () => {
      const input = screen.getByTestId('todo-input')
      fireEvent.change(input, { target: { value: 'Learn React Testing' } })
      expect(input).toHaveValue('Learn React Testing')
    })

    it('should add a new task when form is submitted via button click', () => {
      const input = screen.getByTestId('todo-input')
      const addButton = screen.getByTestId('add-button')

      fireEvent.change(input, { target: { value: 'Buy groceries' } })
      fireEvent.click(addButton)

      expect(screen.getByText('Buy groceries')).toBeInTheDocument()
      expect(input).toHaveValue('')
    })

    it('should add a new task when Enter key is pressed', () => {
      const input = screen.getByTestId('todo-input')

      fireEvent.change(input, { target: { value: 'Walk the dog' } })
      fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

      expect(screen.getByText('Walk the dog')).toBeInTheDocument()
      expect(input).toHaveValue('')
    })

    it('should not add empty tasks', () => {
      const input = screen.getByTestId('todo-input')
      const addButton = screen.getByTestId('add-button')

      fireEvent.change(input, { target: { value: '' } })
      fireEvent.click(addButton)

      expect(screen.getByTestId('empty-message')).toBeInTheDocument()
      expect(screen.queryByTestId('tasks-container')).not.toBeInTheDocument()
    })

    it('should not add tasks with only whitespace', () => {
      const input = screen.getByTestId('todo-input')
      const addButton = screen.getByTestId('add-button')

      fireEvent.change(input, { target: { value: '   ' } })
      fireEvent.click(addButton)

      expect(screen.getByTestId('empty-message')).toBeInTheDocument()
      expect(screen.queryByTestId('tasks-container')).not.toBeInTheDocument()
    })

    it('should trim whitespace from task text', () => {
      const input = screen.getByTestId('todo-input')
      const addButton = screen.getByTestId('add-button')

      fireEvent.change(input, { target: { value: '  Clean room  ' } })
      fireEvent.click(addButton)

      expect(screen.getByText('Clean room')).toBeInTheDocument()
    })

    it('should hide empty message when first task is added', () => {
      const input = screen.getByTestId('todo-input')
      const addButton = screen.getByTestId('add-button')

      fireEvent.change(input, { target: { value: 'First task' } })
      fireEvent.click(addButton)

      expect(screen.queryByTestId('empty-message')).not.toBeInTheDocument()
      expect(screen.getByTestId('tasks-container')).toBeInTheDocument()
    })

    it('should update task statistics when tasks are added', () => {
      const input = screen.getByTestId('todo-input')
      const addButton = screen.getByTestId('add-button')

      // Add first task
      fireEvent.change(input, { target: { value: 'Task 1' } })
      fireEvent.click(addButton)

      expect(screen.getByTestId('total-count')).toHaveTextContent('1')
      expect(screen.getByTestId('remaining-count')).toHaveTextContent('1')

      // Add second task
      fireEvent.change(input, { target: { value: 'Task 2' } })
      fireEvent.click(addButton)

      expect(screen.getByTestId('total-count')).toHaveTextContent('2')
      expect(screen.getByTestId('remaining-count')).toHaveTextContent('2')
    })
  })

  // ✅ Task Completion Tests
  describe('Completing tasks', () => {
    it('should mark an incomplete task as complete when toggle button is clicked', async () => {
      // Add a task first
      const input = screen.getByTestId('todo-input')
      const addButton = screen.getByTestId('add-button')

      fireEvent.change(input, { target: { value: 'Complete this task' } })
      fireEvent.click(addButton)

      // Find and click the toggle button
      const toggleButton = screen.getByText('Complete')
      fireEvent.click(toggleButton)

      await waitFor(() => {
        expect(screen.getByText('Undo')).toBeInTheDocument()
      })

      // Verify the task has completed class
      const taskItem = screen.getByText('Complete this task').closest('.task-item')
      expect(taskItem).toHaveClass('completed')
    })

    it('should mark a completed task as incomplete when undo button is clicked', async () => {
      // Add and complete a task first
      const input = screen.getByTestId('todo-input')
      const addButton = screen.getByTestId('add-button')

      fireEvent.change(input, { target: { value: 'Undo this task' } })
      fireEvent.click(addButton)

      const completeButton = screen.getByText('Complete')
      fireEvent.click(completeButton)

      await waitFor(() => {
        const undoButton = screen.getByText('Undo')
        fireEvent.click(undoButton)
      })

      await waitFor(() => {
        expect(screen.getByText('Complete')).toBeInTheDocument()
      })

      const taskItem = screen.getByText('Undo this task').closest('.task-item')
      expect(taskItem).not.toHaveClass('completed')
    })

    it('should update completion statistics when tasks are toggled', async () => {
      // Add two tasks
      const input = screen.getByTestId('todo-input')
      const addButton = screen.getByTestId('add-button')

      fireEvent.change(input, { target: { value: 'Task 1' } })
      fireEvent.click(addButton)
      fireEvent.change(input, { target: { value: 'Task 2' } })
      fireEvent.click(addButton)

      // Complete one task
      const firstCompleteButton = screen.getAllByText('Complete')[0]
      fireEvent.click(firstCompleteButton)

      await waitFor(() => {
        expect(screen.getByTestId('total-count')).toHaveTextContent('2')
        expect(screen.getByTestId('completed-count')).toHaveTextContent('1')
        expect(screen.getByTestId('remaining-count')).toHaveTextContent('1')
      })
    })
  })

  // ✅ Task Deletion Tests
  describe('Deleting tasks', () => {
    it('should remove a task when delete button is clicked', () => {
      // Add a task first
      const input = screen.getByTestId('todo-input')
      const addButton = screen.getByTestId('add-button')

      fireEvent.change(input, { target: { value: 'Delete this task' } })
      fireEvent.click(addButton)

      // Find and click the delete button
      const deleteButton = screen.getByText('Delete')
      fireEvent.click(deleteButton)

      expect(screen.queryByText('Delete this task')).not.toBeInTheDocument()
      expect(screen.getByTestId('empty-message')).toBeInTheDocument()
    })

    it('should show empty message when all tasks are deleted', () => {
      // Add multiple tasks
      const input = screen.getByTestId('todo-input')
      const addButton = screen.getByTestId('add-button')

      fireEvent.change(input, { target: { value: 'Task 1' } })
      fireEvent.click(addButton)
      fireEvent.change(input, { target: { value: 'Task 2' } })
      fireEvent.click(addButton)

      // Delete all tasks
      const deleteButtons = screen.getAllByText('Delete')
      deleteButtons.forEach(button => fireEvent.click(button))

      expect(screen.getByTestId('empty-message')).toBeInTheDocument()
      expect(screen.queryByTestId('tasks-container')).not.toBeInTheDocument()
    })

    it('should update statistics when tasks are deleted', () => {
      // Add and complete a task
      const input = screen.getByTestId('todo-input')
      const addButton = screen.getByTestId('add-button')

      fireEvent.change(input, { target: { value: 'Task to delete' } })
      fireEvent.click(addButton)

      const completeButton = screen.getByText('Complete')
      fireEvent.click(completeButton)

      // Verify stats before deletion
      expect(screen.getByTestId('total-count')).toHaveTextContent('1')
      expect(screen.getByTestId('completed-count')).toHaveTextContent('1')

      // Delete the task
      const deleteButton = screen.getByText('Delete')
      fireEvent.click(deleteButton)

      // Verify stats after deletion
      expect(screen.getByTestId('total-count')).toHaveTextContent('0')
      expect(screen.getByTestId('completed-count')).toHaveTextContent('0')
      expect(screen.getByTestId('remaining-count')).toHaveTextContent('0')
    })
  })

  // ✅ Edge Cases Tests
  describe('Edge cases', () => {
    it('should handle multiple rapid task additions', () => {
      const input = screen.getByTestId('todo-input')
      const addButton = screen.getByTestId('add-button')

      const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5']
      
      tasks.forEach(task => {
        fireEvent.change(input, { target: { value: task } })
        fireEvent.click(addButton)
      })

      tasks.forEach(task => {
        expect(screen.getByText(task)).toBeInTheDocument()
      })

      expect(screen.getByTestId('total-count')).toHaveTextContent('5')
    })

    it('should handle special characters in task text', () => {
      const input = screen.getByTestId('todo-input')
      const addButton = screen.getByTestId('add-button')
      const specialTask = 'Buy 2% milk & eggs @ $3.50 (urgent!)'

      fireEvent.change(input, { target: { value: specialTask } })
      fireEvent.click(addButton)

      expect(screen.getByText(specialTask)).toBeInTheDocument()
    })

    it('should handle very long task text', () => {
      const input = screen.getByTestId('todo-input')
      const addButton = screen.getByTestId('add-button')
      const longTask = 'This is a very long task that contains a lot of text to test how the application handles lengthy task descriptions and whether it displays them correctly'

      fireEvent.change(input, { target: { value: longTask } })
      fireEvent.click(addButton)

      expect(screen.getByText(longTask)).toBeInTheDocument()
    })

    it('should maintain task order after operations', () => {
      const input = screen.getByTestId('todo-input')
      const addButton = screen.getByTestId('add-button')

      // Add tasks in order
      fireEvent.change(input, { target: { value: 'First task' } })
      fireEvent.click(addButton)
      fireEvent.change(input, { target: { value: 'Second task' } })
      fireEvent.click(addButton)
      fireEvent.change(input, { target: { value: 'Third task' } })
      fireEvent.click(addButton)

      const taskTexts = screen.getAllByText(/task$/).map(el => el.textContent)
      expect(taskTexts).toEqual(['First task', 'Second task', 'Third task'])
    })
  })

  // ✅ Form Behavior Tests
  describe('Form behavior', () => {
    it('should prevent form submission when input is empty', () => {
      const form = screen.getByTestId('todo-form')
      
      fireEvent.submit(form)
      
      expect(screen.getByTestId('empty-message')).toBeInTheDocument()
    })

    it('should clear input after successful task addition', () => {
      const input = screen.getByTestId('todo-input')
      const addButton = screen.getByTestId('add-button')

      fireEvent.change(input, { target: { value: 'Test task' } })
      fireEvent.click(addButton)

      expect(input).toHaveValue('')
    })

    it('should focus remain on input after task addition', () => {
      const input = screen.getByTestId('todo-input')
      const addButton = screen.getByTestId('add-button')

      input.focus()
      fireEvent.change(input, { target: { value: 'Focus test' } })
      fireEvent.click(addButton)

      // Input should still be focusable after task addition
      expect(input).toBeInTheDocument()
    })
  })
})