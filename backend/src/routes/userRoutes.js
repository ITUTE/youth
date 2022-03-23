const express = require('express')
import { getUser } from '../controllers/userController.js'

const router = express.Router()

router.get('/', getUser)
router.get('/event', event)// tạo event
//router.get('/event/many', eventMany)// tạo event
router.get('/event/:id', eventID)// lấy event
router.get('/event/all', eventALL)// all event phân trang
router.put('/event/:id', updateEvent)
router.delete('/event/:id', deleteEvent)
//router.delete('/event', deleteEvent)//xóa toàn bộ
export default router
