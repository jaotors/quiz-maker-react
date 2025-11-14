import { useFieldArray, useForm } from 'react-hook-form'
import Dialog from '../dialog'
import { useState } from 'react'
import QuestionForm from '../question/question-form'

const QuizForm = ({ onSubmit }) => {
  const [open, setOpen] = useState(false)
  const { register, handleSubmit, getValues, control } = useForm()
  const { fields: questions, append } = useFieldArray({
    control,
    name: 'questions',
  })

  const handleAddQuestions = (question) => {
    console.log('question added', question)
    append(question)
    setOpen(false)
  }

  return (
    <>
      <form className='flex flex-col gap-4 max-w-150 p-4 border border-gray-400 rounded-md mx-auto'>
        <div className='form-group'>
          <label>Title</label>
          <input type='text' name='title' />
        </div>
        <div className='form-group'>
          <label>Description</label>
          <input type='text' name='description' />
        </div>
        <div className='form-group'>
          <label className='flex gap-1'>
            <input type='radio' value='mcq' {...register('questionType')} />
            <span>Multiple Choice</span>
          </label>
          <label className='flex gap-1'>
            <input type='radio' value='short' {...register('questionType')} />
            <span>Short Answer</span>
          </label>
        </div>
        <hr />
        <div className='flex flex-col gap-2'>
          <div>
            <button
              type='button'
              className='btn-primary'
              onClick={() => setOpen(true)}
            >
              Add Questions
            </button>
          </div>
          <ul className='list-disc pl-4'>
            {questions.map((question, index) => (
              <li key={question.id}>
                Question {index + 1}: {question.questionText}
              </li>
            ))}
          </ul>
        </div>
        <button className='btn-primary' type='submit'>
          Submit
        </button>
      </form>
      <Dialog open={open} closeDialog={() => setOpen(false)}>
        <QuestionForm
          onAdd={handleAddQuestions}
          questionType={getValues('questionType')}
        />
      </Dialog>
    </>
  )
}

export default QuizForm
