const db = require('../models');
const sequelize = db.sequelize;  

let artistasAPIServices = {

    listArtists: async function() {
        
        try {
            let artist = await db.Artista.findAll();
            return artist;
        } catch( error){
            console.log('Error al traer todos los artistas ', error);
            return {status:500}
        }
    },




}

module.exports = artistasAPIServices;