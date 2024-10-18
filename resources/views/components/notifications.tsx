import Processing from '#models/processing'
import { Button } from './ui/button.js'

export function Notifications({
  documentProcessings = [],
}: {
  documentProcessings?: Processing[]
}) {
  const pendingNotificationsCount = documentProcessings.filter(
    (processing) => processing.receiverId === null
  ).length

  return (
    <div
      x-data="{open: false}"
      hx-get="/documents-processing"
      hx-trigger="load, every 5s"
      hx-target="find ul"
      hx-select="ul"
      class="relative"
    >
      <Button
        x-on:click="open = true"
        id="count"
        hx-swap-oob="true"
        class="relative"
        variant="ghost"
      >
        {pendingNotificationsCount > 0 && (
          <span class="bg-destructive rounded-full w-4 h-4 flex justify-center items-center aspect-square p-1 text-destructive-foreground absolute top-0 right-0">
            {pendingNotificationsCount}
          </span>
        )}
        <i data-lucide="bell" class="w-4 h-4"></i>
      </Button>
      <div
        x-show="open"
        {...{ 'x-on:click.outside': 'open = false' }}
        class="absolute top-full bg-popover border shadow z-50 w-[320px]"
      >
        <ul class="grid gap-4 divide-y-2 p-4">
          {documentProcessings.map((processing) => (
            <li class="flex gap-2 items-center justify-between">
              <p>{processing.document.name}</p>
              {!processing.receiverId && (
                <Button>
                  <i data-lucide="check" class="w-4 h-4"></i>
                </Button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
