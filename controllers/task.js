

const getAllTasks = (req,res) => {
    res.send('get all tasks');
}
const createTask = (req,res) => {
    res.json(req.body)
}    
const updateTask = (req,res) => {
    res.send('update Task')
}
const getTask = (req,res) => {
    res.json({id:req.params.id})
}
const deleteTask = (req,res) => {
    res.send('Delete Task')
}


module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    getTask,
    deleteTask
}