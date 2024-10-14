import { Layout } from '../layout.js'
import { LoginForm } from './form.js'

export function LoginPage() {
  return (
    <Layout>
      <main class="flex h-screen w-screen">
        <LoginForm />
      </main>
    </Layout>
  )
}
