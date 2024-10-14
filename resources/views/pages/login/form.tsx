import { route } from '#start/view'

export function LoginForm() {
  return (
    <form hx-post={route('session.store')} class="flex flex-col gap-4">
      <label>
        Email:
        <input name="email" />
      </label>
      <label>
        Senha:
        <input type="password" name="password" />
      </label>
      <button type="submit">Entrar</button>
    </form>
  )
}
