import { useForm } from '@tanstack/react-form'

const Home = () => {
  const form = useForm({
    defaultValues: {
      fullName: '',
    },
    onSubmit: async ({ value }) => {
      console.log(value)
    },
  })

  return (
    <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <div>
            <form.Field
              name="fullName"
              children={(field) => (
                <input
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              )}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Home