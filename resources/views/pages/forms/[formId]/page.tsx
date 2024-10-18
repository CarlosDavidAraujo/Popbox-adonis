import { Button } from '#components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '#components/ui/card'
import { Input } from '#components/ui/input'
import { Label } from '#components/ui/label'
import { Textarea } from '#components/ui/textarea'
import { DashboardLayout } from '#layouts/dashboard-layout'
import { Layout } from '#layouts/layout'
import Field from '#models/field'
import Form from '#models/form'

const getFieldComponent = (field: Field) => {
  switch (field.type) {
    case 'textarea':
      return <Textarea name={field.name} />
    default:
      return <Input name={field.name} type={field.type} />
  }
}

export function FormPage({ form }: { form: Form }) {
  return (
    <Layout>
      <DashboardLayout>
        <main>
          <Card class="container max-w-3xl">
            <CardHeader>
              <CardTitle>{form.title}</CardTitle>
              <CardDescription>{form.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <form hx-post="/documents" hx-target="this" hx-swap="none" class="grid gap-4">
                <input type="hidden" name="formId" value={form.id.toString()} />
                {form.fields.map((field) => (
                  <Label class="space-y-2">
                    <span>{field.label}</span>
                    {field.required && <span class="text-destructive"> *</span>}
                    {getFieldComponent(field)}
                  </Label>
                ))}
                <Button type="submit">Salvar</Button>
              </form>
            </CardContent>
          </Card>
        </main>
      </DashboardLayout>
    </Layout>
  )
}
