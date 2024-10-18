import { Button } from '#components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '#components/ui/card'
import { Checkbox } from '#components/ui/checkbox'
import { Input } from '#components/ui/input'
import { Label } from '#components/ui/label'
import { fieldTypes } from '#lib/field_types'

export function FormBuilder() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Novo modelo de formulário</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          hx-post="/forms"
          hx-target="this"
          hx-headers='{"Content-Type": "application/json"}'
          hx-swap="none"
          class="grid gap-4 container"
        >
          <input type="hidden" name="fields" x-bind:value="JSON.stringify(fields)" />
          <Label class="space-y-2">
            Título <span class="text-destructive">*</span>
            <Input x-model="title" name="title" />
          </Label>

          <Label class="space-y-2">
            <span>Descrição</span>
            <Input x-model="description" name="description" />
          </Label>

          <fieldset class="grid gap-4 border rounded p-4">
            <legend class="p-2 -ml-2 font-medium text-sm">Novo Campo</legend>

            <Label class="space-y-2">
              <span>Titulo</span>
              <span class="text-destructive"> *</span>
              <Input x-model="newField.label" x-ref="fieldTitleInput" />
            </Label>

            <Label class="space-y-2">
              <span>Variavel</span>
              <span class="text-destructive"> *</span>
              <Input x-model="newField.name" />
            </Label>

            <Label class="space-y-2">
              <span>Descrição</span>
              <Input x-model="newField.description" />
            </Label>

            <Label class="space-y-2">
              <span>Tipo de campo</span>
              <span class="text-destructive"> *</span>
              <select x-model="newField.type">
                {fieldTypes.map((types) => (
                  <option value={types}>{types}</option>
                ))}
              </select>
            </Label>

            <Label class="space-y-2 flex items-center gap-2">
              <Checkbox x-model="newField.required" />
              Obrigatório
            </Label>

            <Button x-on:click="addNewField()" type="button" class="w-max">
              Adicionar
            </Button>
          </fieldset>

          <Button type="submit">Salvar</Button>
        </form>
      </CardContent>
    </Card>
  )
}
