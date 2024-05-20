const db = require('../models');
const sequelize = db.sequelize;  

let artistasAPIServices = {

    listArtists: async function() {
        
        try {
            const artist = await db.Artista.findAll();
            return artist;
        } catch( error){
            console.log('Error al traer todos los artistas ', error);
            return {status:500}
        }
    },

    create: async function(newArtist) {

        try {
            return await db.Artista.create(newArtist);
        } catch (error) {
            console.log('Error al crear el artista ', error);
            return {status:500}
    }

    }



}

module.exports = artistasAPIServices;