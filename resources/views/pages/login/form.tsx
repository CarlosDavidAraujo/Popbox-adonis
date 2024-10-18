import { route } from '#start/view'

export function LoginForm() {
  return (
    <form hx-post={route('session.store')} class="flex flex-col gap-4">
      <label class="form-control">
        <div class="label">
          <span class="label-text">Email:</span>
        </div>
        <input name="email" class="input input-bordered" />
      </label>
      <label class="form-control">
        <div class="label">
          <span class="label-text">Senha:</span>
        </div>
        <input type="password" name="password" class="input input-bordered" />
      </label>
      <button type="submit" class="btn btn-primary">
        Entrar
      </button>
    </form>
  )
}
