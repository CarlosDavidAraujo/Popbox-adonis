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
import { DashboardPage } from '../resources/views/pages/dashboard/page.js'
import { middleware } from './kernel.js'

const SessionController = () => import('#controllers/session_controller')
const DocumentsController = () => import('#controllers/documents_controller')
const DocumentsProcessingController = () => import('#controllers/processings_controller')

router.get('/', LoginPage)
router.post('/', [SessionController, 'store']).as('session.store')

router.get('/dashboard', DashboardPage).as('dashboard').use(middleware.auth())

router
  .group(() => {
    router.get('/', [DocumentsController, 'index']).as('documents.index')
    router.post('/', [DocumentsController, 'store']).as('documents.store')
    router.patch('/:id', [DocumentsController, 'update']).as('documents.update')
  })
  .prefix('/documents')
  .use(middleware.auth())

router
  .group(() => {
    router.post('/', [DocumentsProcessingController, 'store']).as('documents-processing.store')
  })
  .prefix('documents-processing')
  .use(middleware.auth())
