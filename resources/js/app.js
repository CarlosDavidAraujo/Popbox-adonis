
import Alpine from 'alpinejs'
import morph from '@alpinejs/morph'

import {
  createIcons,
  X,
  SquarePen,
  Send,
  Bell,
  Check,
  CheckCheck,
  Eye,
  ChevronDown,
  ChevronUp,
  Pen,
  PlusCircle,
} from 'lucide'

window.Alpine = Alpine
Alpine.plugin(morph)
Alpine.start()

const createLucideIcons = ()=> createIcons({
  icons: {
    X,
    SquarePen,
    Send,
    Bell,
    Check,
    CheckCheck,
    Eye,
    ChevronDown,
    ChevronUp,
    Pen,
    PlusCircle
  },
})

// Inicializar ícones quando a página é carregada
document.addEventListener('DOMContentLoaded', () => {
  createLucideIcons();
});

// Reexecutar a inicialização dos ícones após o HTMX modificar o conteúdo
document.body.addEventListener('htmx:afterSettle', () => {
  createLucideIcons();
});



