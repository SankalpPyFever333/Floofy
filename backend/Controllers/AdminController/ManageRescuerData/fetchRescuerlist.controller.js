const Rescuer = require("../../../Modals/RescuerModal/Rescuer.modal");


const fetchRescueListController = async(req, res) => {

      try {
            const fetchRscList = await Rescuer.find();
            res.status(200).json({message:"Rescuers fetched" , Rescuer:fetchRscList});
      } catch (error) {
            res.status(500).json({message:"Internal server error"})
      }
}

module.exports = fetchRescueListController;

