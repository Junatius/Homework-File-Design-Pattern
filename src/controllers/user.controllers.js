const { userModel } = require('../models');

const getAllUsers = async (req, res) => {
    const page = req.query.page;
    const per_page = req.query.limit;
    try {
        const result = await userModel.getAllUsers({
            page: page,
            per_page: per_page
        });
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteUserById = async (req, res) => {
    const id = req.params.id;
  
    try {
      const deletedUser = await userModel.deleteUserById(id);
  
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ message: `User with email ${deletedUser.email} deleted successfully` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
};

const updateUserById = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    if (!data || Object.keys(data).length === 0) {
        return res.status(400).json({ message: 'No input data provided' });
    }
    try {
        // Check if the user is an administrator
        if (req.user.role === 'Administrator') {
            const updatedUser = await userModel.updateUserById(id, data);

            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }

            return res.json({ message: `User with email ${updatedUser.email} updated successfully` });
        } else {
            if (req.user.id != id) {
                return res.status(404).json({ message: 'User not found' });            
            }
    
            const updatedUser = await userModel.updateUserById(id, data);
    
            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
    
            res.json({ message: 'User updated successfully' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    getAllUsers,
    deleteUserById,
    updateUserById
}