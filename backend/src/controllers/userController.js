import User from '../models/User'
import Even from '../models/Event'
export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.body.id)
        const { updateAt, ...data } = user._doc
        res.status(200).json({
            status: 'get user success!',
            data,
        })
    } catch (err) {
        res.status(500).json({ error })
    }
}
export const event = async (req, res) => {
    try {
      let data = await Even.findOne({name:req.body.name})
      if (data){
          console.log("Đã tồn tại!")
        res.status(400).json({
            status: 'Đã tồn tại!',
        })   
      }
      else{
        let datanew = Even.create({
            name:req.body.name,
            creator:req.body.creator,
            shortDescription:req.body.shortDescription,
            detailDescription:req.body.detailDescription,
            startTime:req.body.startTime,
            endTime:req.body.endTime,
        })
        if(datanew){
            res.status(200).json({
                status: 'Success!',
                datanew,
            })
        }
      
      }
      
    } catch (err) {
        res.status(500).json({ error })
    }
}
export const eventID = async (req, res) => {
    try {
        const data = await Even.findOne({_id:req.params.id})
        if (data){
            res.status(200).json({
            status: 'success!',
            data,
        })
        }
        else{
            res.status(400)
        }
        
    } catch (err) {
        res.status(500).json({ error })
    }
}
export const pagination = async(req, res , model)=>{
    try {
        console.log(req.params, req.query)
        let { page, limit } = req.query
        let next = parseInt(page) + 1
        if (parseInt(page) < 0) page = 1
        const skip = (parseInt(page) - 1) * limit
        const data = await model.find({
        })
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(parseInt(limit))

        if (data.length < limit) {
                next = -1
        }
        console.log({ length: data.length, next })

        res.status(200).json({ data: data.reverse(), next })
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}
export const eventALL = async (req, res) => {
    pagination(req, res, Even)
}
export const updateEvent = async (req, res) => {
    
    try {
        let datafind = await Even.findOne({_id:req.params.id})
        if (!datafind){
            res.status(400).json({
                status: 'Khong co data!',
            })
        }
        else{
            let data = await Even.updateOne(
                /*{_id:req.params.id},
                {   name:req.body.name,
                    creator:req.body.creator,
                    shortDescription:req.body.shortDescription,
                    detailDescription:req.body.detailDescription,
                    startTime:req.body.startTime,
                    endTime:req.body.endTime,
                }*/
                { $set:req.body}
                )
            if (data){
                res.status(200).json({
                    status: 'success!',
                    data,
                })
            }
        }  
    } catch (err) {
        res.status(500).json({ error })
    }
}
export const deleteEvent = async (req, res) => {
    try {
        let data = await Even.deleteOne({_id:req.params.id})
        if (!data){
            res.status(400).json({
                status: 'Đã xóa Even này rồi!',
            })
        }
        else{
            res.status(200).json({
                status: 'success!',
                data,
            }) 
        }
    } catch (err) {
        res.status(500).json({ error })
    }
}

