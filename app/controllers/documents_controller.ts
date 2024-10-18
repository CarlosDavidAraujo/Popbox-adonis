import { createDocumentValidator } from '#validators/document'
import type { HttpContext } from '@adonisjs/core/http'
import { DocumentsList } from '../../resources/views/pages/documents/documents-list.js'
import { HtmxEvents } from '../htmx-events/index.js'
import { inject } from '@adonisjs/core'
import FormService from '#services/form_service'
import { DocumentsPage } from '../../resources/views/pages/documents/page.js'
import DocumentService from '#services/document_service'

@inject()
export default class DocumentsController {
  constructor(
    protected formService: FormService,
    protected documentService: DocumentService
  ) {}

  async create({ request, response }: HttpContext) {
    const payload = request.all()
    const form = await this.formService.findOne(payload.formId)
    const [error, validatedPayload] = await createDocumentValidator(form.fields).tryValidate(
      payload
    )

    if (validatedPayload) {
      const { formId, ...metadata } = validatedPayload
      await this.documentService.create(validatedPayload.formId, metadata)
    }

    response.append('hx-trigger', HtmxEvents.DOCUMENT_CREATED)
  }

  async displayDocumentsPage() {
    const forms = await this.formService.findMany()
    return DocumentsPage({ forms })
  }

  async displayDocumentsList() {
    const documents = await this.documentService.findManyBySessionDepartment()
    return DocumentsList({ documents })
  }
}
