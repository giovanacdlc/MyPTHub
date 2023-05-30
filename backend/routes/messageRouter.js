const express = require('express');
const router = express.Router();
// const { getUser } = require('../controllers/userController');
const messageController = require('../controllers/messageController');
const {protect} = require('../middleware/authMiddleware')

// router.get('/', getUser);
// router.get('/', userController.getUser);
router.get('/', protect, messageController.getMessage);

// router.post('/', userController.setUser);
router.post('/', protect, messageController.createMessage);

// router.put('/:id', userController.updateUser);
router.put('/:id', protect, messageController.updateMessage);

// router.delete('/:id', userController.deleteUser);
router.delete('/:id', protect, messageController.deleteMessage);

// router.post('/', (req, res) => {
//   res.status(200).json({message: 'Created profile'})
// })
// router.put('/:id', (req, res) => {
//   res.status(200).json({message: `Updated profile ${req.params.id}`})
// })
// router.delete('/:id', (req, res) => {
//   res.status(200).json({message: `Deleted profile ${req.params.id}`})
// })


/*

            *****LIKELY WHAT I WILL BE USING ******

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// router.get('/', userController.getUsers, (req, res) => {
//   res.status(200).json(res.locals.patient)
// })

router.post('/', (req, res) => {
  res.status(200).json({message: 'Created profile'})
})
router.put('/:id', (req, res) => {
  res.status(200).json({message: `Updated profile ${req.params.id}`})
})
router.delete('/:id', (req, res) => {
  res.status(200).json({message: `Deleted profile ${req.params.id}`})
})
                *********************************
*/

// app.post("/add_user", async (request, response) => {
//     const user = new userModel(request.body);
  
//     try {
//       await user.save();
//       response.send(user);
//     } catch (error) {
//       response.status(500).send(error);
//     }
// });

// app.get("/users", async (request, response) => {
//     const users = await userModel.find({});
  
//     try {
//       response.send(users);
//     } catch (error) {
//       response.status(500).send(error);
//     }
//   });

module.exports = router;