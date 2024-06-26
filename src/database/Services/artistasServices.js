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

    },

    update: async function(artistId, updateData) {

        try {
           const artist=  await db.Artista.findByPk(artistId);  
           await artist.update(updateData);                         // Se pueden poner varios await seguidos
           return artist;

        } catch (error) {
            console.log('Error al actualizar el artista ', error);
            return {status:500}
        }
    },

    destroy: async function(artistId) {

        try {
            const artist = await db.Artista.destroy({
                where: { id: artistId } });
                return {status:200}
            } catch (error) {
                console.log('Error al eliminar el artista ', error);
                return {status:500}
        }
    }


}

module.exports = artistasAPIServices;