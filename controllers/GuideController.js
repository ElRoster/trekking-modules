import Guide from '../models/Guide.js';


export const getGuide = async (req,res) => {
    try{
        const guide = await Guide.find()
        res.send(guide)
    }
    catch(error){
        res.status(500).send('something was wrong with the server')
    }
};


export const ListOneGuide = async (req, res) =>{
    
    try{
        const { Id } = req.params
        const guide = await Guide.findOne({Id: Id})
        if(!guide){
            res.status(404).send('Count not found');
        }
        res.send(guide);
        
    }catch(error){
        res.status(500).send(error)
    }

}


export const postGuide = async (req,res)=>{
    const body = req.body
    try{
        const guide = new Guide(body)
        await guide.save()
        res.status(201).send('Guide saved successfully')
    }
    catch(error){
        res.status(500).send(error)
    }
}



export const putGuide = async (req, res)=>{
    const { Id, Nit, Name, Last_Name, Email, Cellphone, State } = req.body;
    try {
        await Guide.findOneAndUpdate({ Id: Id }, { Nit, Name, Last_Name, Email, Cellphone, State });
        res.status(200).send('Guide updated successfully');
    }catch (error){
        res.status(500).send(error);
    }
}

export const deleteGuide = async (req, res) => {
    try {
        const guide = await Guide.findOne({ Id: req.params.Id });
        if (!cell) return res.status(404).send('Guide not found');
        if (!guide) return res.status(404).send('Guide not found');
        await Guide.deleteOne({ Id: req.params.Id });
        res.send('Guide deleted successfully');
    } catch (error) {
        res.status(500).send(error);
    }
};
