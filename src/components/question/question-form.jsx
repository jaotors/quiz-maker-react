import { useForm, useFieldArray } from 'react-hook-form'

const QuestionForm = ({ onAdd, questionType }) => {
  const { control, register, handleSubmit, reset } = useForm()
  const { fields: options, append } = useFieldArray({
    control,
    name: 'options',
  })

  const onSubmit = (data) => {
    const formData = { ...data }
    reset({
      questionText: '',
      correctAnswer: '',
      options: [],
    })
    onAdd(formData)
  }

  const handleAddChoices = () => {
    const addChoice = prompt('Enter choice: ')
    if (options.findIndex((opt) => opt.value === addChoice) !== -1) {
      return
    }
    append({ value: addChoice })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-2'>
        <div className='form-group'>
          <label>Question Text</label>
          <input type='text' {...register('questionText')} />
        </div>

        {questionType === 'mcq' && (
          <div className='flex flex-col gap-2'>
            <button
              type='button'
              className='btn-primary'
              onClick={handleAddChoices}
            >
              Add Choices
            </button>
            <ul className='list-disc pl-4'>
              {options.map((opt) => (
                <li key={opt.id}>{opt.value}</li>
              ))}
            </ul>
          </div>
        )}
        <div className='form-group'>
          <label>Correct Answer</label>
          <input type='text' {...register('correctAnswer')} />
        </div>
        <button className='btn-primary'>Submit Question</button>
      </div>
    </form>
  )
}

export default QuestionForm
