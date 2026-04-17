const Transport = require('../models/Transport');

exports.searchTransports = async(req, res)=>{
    try{
        const { source,destination,type} = req.query;
        // Validate input
        if(!source || !destination){
            return res.status(400).json({message: 'Source and destination are required'});
        }

        let filter = {
            source: { $regex: source, $options: 'i'},
            destination: {$regex: destination, $options: 'i'}
        }

        // search by type if provided
        if(type){
            filter.type = type;
        }

        const transports = await Transport.find(filter);

        res.status(200).json({
            count: transports.length,
            transports
        });

    }catch(error){
        res.status(500).json({message: error.message});
    }
}