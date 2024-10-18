import { Button } from '#components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '#components/ui/card'
import { Input } from '#components/ui/input'
import { Label } from '#components/ui/label'
import { Textarea } from '#components/ui/textarea'

export function FormPreview() {
  return (
    <Card>
      <CardHeader class="gap-2 items-center space-y-0 flex-row">
        <CardTitle>Preview</CardTitle>
        <Button x-on:click="preview = false">
          <i data-lucide="square-pen" class="w-4 h-4"></i>
        </Button>
      </CardHeader>
      <CardContent>
        <div class="grid gap-4" x-show="preview">
          <CardTitle x-text="title"></CardTitle>
          <CardDescription x-text="description"></CardDescription>
          <template x-for="field in fields">
            <Label class="space-y-2">
              <div>
                <span x-text="field.label"></span>{' '}
                <span x-show="field.required" class="text-destructive">
                  *
                </span>
              </div>
              <template x-if="field.type === 'textarea'">
                <Textarea x-bind:type="field.type" />
              </template>
              <template x-if="field.type !== 'textarea'">
                <Input x-bind:type="field.type" />
              </template>
            </Label>
          </template>
          <Button class="w-max">Salvar</Button>
        </div>
      </CardContent>
    </Card>
  )
}
