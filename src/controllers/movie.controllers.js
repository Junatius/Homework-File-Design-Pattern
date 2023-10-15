const { movieModel } = require('../models');

const getAllMovies = async (req, res) => {
    const page = req.query.page;
    const per_page = req.query.limit;
    try {
        const result = await movieModel.getAllMovies({
            page: page,
            per_page: per_page
        });
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const deleteMovieById = async (req, res) => {
    const id = req.params.id;
  
    try {
      const deletedMovie = await movieModel.deleteMovieById(id);
  
      if (!deletedMovie) {
        return res.status(404).json({ message: 'Not Found' });
      }
  
      res.json({ message: `Movie ${deletedMovie.title} deleted successfully` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
};

const createMovie = async (req, res) => {
    const { title, genres, year} = req.body;
    try {
        await movieModel.createMovie({
            title: title,
            genres: genres,
            year: year
        })

        res.json({ message: "Successfully Created"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const updateMovieById = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    if (!data || Object.keys(data).length === 0) {
        return res.status(400).json({ message: 'No input data provided' });
    }
    try {
        const updateMovie = await movieModel.updateMovieById(id, data);

        if (!updateMovie) {
            return res.status(404).json({ message: 'Movie not found' });
        }

        return res.json({ message: `Movie with title ${updateMovie.title} updated successfully` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    getAllMovies,
    deleteMovieById,
    updateMovieById,
    createMovie
}