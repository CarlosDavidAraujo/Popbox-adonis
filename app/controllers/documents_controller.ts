import Document from '#models/document'
import { createDocumentValidator } from '#validators/document'
import type { HttpContext } from '@adonisjs/core/http'
import { DocumentsList } from '../../resources/views/pages/dashboard/documents-list.js'
import { HtmxEvents } from '../htmx-events/index.js'
import Department from '#models/department'

export default class DocumentsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const documents = await Document.all()
    const departments = await Department.all()
    return DocumentsList({ documents, departments })
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const { name } = await request.validateUsing(createDocumentValidator)
    await Document.create({ name })
    response.append('hx-trigger', HtmxEvents.DOCUMENT_CREATED)
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const { name } = await request.validateUsing(createDocumentValidator)
    const document = await Document.findOrFail(params.id)
    await document.merge({ name }).save()

    response.append('hx-trigger', HtmxEvents.DOCUMENT_CREATED)
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
