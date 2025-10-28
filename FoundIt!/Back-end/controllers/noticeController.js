import Notice from "../models/Notice.js";

export  const getNotice = async (req,res)=>{
   try {
    const notice = await Notice.find();
    res.status(201).json(notice);
   } catch (error) {
    res.status(500).json({message:error.message});
   }
}

export const postNotice = async (req, res) => {
  try {
    const notice = new Notice(req.body);
    const saved = await notice.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

export const getDelete = async (req,res)=>{
    try{
        const deleted = await Notice.findByIdAndDelete(req.params.id);
        if(!deleted){
           return res.status(404).json({message:'Notice not found'});
        }
        res.status(200).json({message:'Notice deleted successfully'});
    }catch(err){
        res.status(500).json({message:err.messagre});
    }
}

export const getupdate = async (req,res)=>{
  try {
      const update = await Notice.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true,runValidators:true}
    )
    if(!update){
        return res.status(404).json({message:'Notice not found'});
    }
    res.status(200).json({message:'updated successfully'});
  } catch (err) {
    res.status(500).json({message:err.message})
  }
}
export default {getNotice,postNotice,getDelete,getupdate};