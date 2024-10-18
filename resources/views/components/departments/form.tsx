type ValidationError = {
  message: string
  field: string
}

export function DepartmentForm({ errors }: { errors?: ValidationError[] }) {
  return (
    <form
      hx-post="/departments"
      hx-target="this"
      hx-ext="alpine-morph"
      hx-swap="morph"
      x-data="{ name: '' }"
      class="grid gap-4"
    >
      {errors?.map((error) => error.message)}
      <label class="form-control">
        <div class="label">
          <span class="label-text">Nome do setor</span>
        </div>
        <input x-model="name" name="name" class="input input-bordered" />
      </label>
      <button class="btn btn-primary">Salvar</button>
    </form>
  )
}
