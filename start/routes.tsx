/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { LoginPage } from '../resources/views/pages/login/index.js'
import { middleware } from './kernel.js'

const SessionController = () => import('#controllers/session_controller')
const DocumentsController = () => import('#controllers/documents_controller')
const DocumentsProcessingController = () => import('#controllers/processings_controller')
const FormsController = () => import('#controllers/forms_controller')
const DepartmentsController = () => import('#controllers/departments_controller')

router.get('/', LoginPage)
router.post('/', [SessionController, 'store']).as('session.store')

router
  .group(() => {
    router.get('/', [DepartmentsController, 'displayDepartmentsPage'])
    router.post('/', [DepartmentsController, 'create'])
    router.get('/list', [DepartmentsController, 'displayDepartmentList'])
  })
  .prefix('/departments')
  .use(middleware.auth())

router
  .group(() => {
    router.get('/', [DocumentsController, 'displayDocumentsPage'])
    router.get('/list', [DocumentsController, 'displayDocumentsList'])
    router.post('/', [DocumentsController, 'create']).as('documents.store')
    //router.post('/:id', [DocumentsController, 'update']).as('documents.update')
  })
  .prefix('/documents')
  .use(middleware.auth())

router
  .group(() => {
    router.get('/', [DocumentsProcessingController, 'index'])
    router.post('/', [DocumentsProcessingController, 'store']).as('documents-processing.store')
  })
  .prefix('documents-processing')
  .use(middleware.auth())

router
  .group(() => {
    router.get('/', [FormsController, 'displayFormsPage'])
    router.post('/', [FormsController, 'create'])
    router.get('/:id', [FormsController, 'displayFormPage'])
  })
  .prefix('forms')
  .use(middleware.auth())
