// const Todos = require('../services/todo');
// const asyncHandler = require('express-async-handler');


// module.exports.getTodo = asyncHandler(async function(req, res, next) {
//     var arrtodo = [];
//     if (req.currentUser != null) {
//         arrtodo = await Todos.findAllNotDone(req.currentUser.id);
//     }
//     res.render('todo', { arrtodo });
// })


// module.exports.postTodo = asyncHandler(async function(req, res, next) {
//     const name = req.body.name || '';
//     const arrtodo = req.body.checkbox || '';
//     const add = req.body.add;
//     console.log("arr : " + arrtodo);
//     if (add == 'add') {
//         if (name != '') {
//             await Todos.add(name, req.currentUser.id);
//         }
//     } else {

//         const done = req.body.done;
//         if (done == 'done') {
//             if (arrtodo != '') {
//                 if (!Array.isArray(arrtodo)) {
//                     const t = await Todos.findById(Number(arrtodo));
//                     if (t && req.currentUser.id === t.userId) {
//                         await t.maskAsDone();
//                     }
//                     res.redirect('todo');
//                 } else {
//                     for (var i = 0; i < arrtodo.length; i++) {
//                         const t = await Todos.findById(Number(arrtodo[i]));
//                         // log id vs userid
//                         console.log(`userID: ${t.userId} : currentUserid : ${req.currentUser.id}`);
//                         if (t && req.currentUser.id === t.userId) {
//                             await t.maskAsDone();
//                         }

//                     }
//                 }
//             }


//         } else {
//             if (arrtodo != '') {
//                 if (!Array.isArray(arrtodo)) {
//                     const t = await Todos.findById(Number(arrtodo));
//                     if (t && req.currentUser.id === t.userId) {
//                         await t.removeTodo();
//                     }
//                     res.redirect('todo');
//                 } else {
//                     for (var i = 0; i < arrtodo.length; i++) {
//                         const t = await Todos.findById(Number(arrtodo[i]));
//                         // log id vs userid
//                         console.log(`userID: ${t.userId} : currentUserid : ${req.currentUser.id}`);
//                         if (t && req.currentUser.id === t.userId) {
//                             await t.removeTodo();
//                         }
//                     }
//                 }
//             }
//         }

//     }

//     res.redirect('todo');
// });