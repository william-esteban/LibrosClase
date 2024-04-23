const mongoose = require('mongoose');
let Libros;

const connectDatabase = async () => {
    try {
        if(!Libros){
            Libros = mongoose.model('Libros', require('../models/librosModel').Schema);
        }

        await mongoose.connect('mongodb+srv://william271629:3218741020@clusternotasdb.6dhty9c.mongodb.net/')
        try {
            console.log('MongoDB connected');
        } catch (error) {
            console.log('error connecting to MongoDB');
        }
        // .then(() => console.log('MongoDB connected'))
        // .catch((err) => console.log(err));

      

    } catch (error) {
        console.error('failed to connect to MongoDB', error);
        process.exit(1);

    }

};



module.exports = connectDatabase;