import { Layout } from '../../layouts/layout.js'
import { LoginForm } from './form.js'

export function LoginPage() {
  return (
    <Layout>
      <main class="flex h-screen w-screen items-center justify-center">
        <div class="card bg-base-100 w-96 card-bordered">
          <div class="card-body">
            <h2 class="card-title mx-auto">Login</h2>
            <LoginForm />
          </div>
        </div>
      </main>
    </Layout>
  )
}
