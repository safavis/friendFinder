let score
let newData
 const fs=require('fs')
data_freind=require('../data/friend.js')
module.exports=app=>{
    app.post('/friend',(req,res)=>{
        console.log('hittinf freind routes')
        newData=req.body
        score=new Array(data_freind.length-1)

        data_freind.forEach((element,i) => {
            score[i]=Math.abs(parseInt(element.q1)-parseInt(newData.q1))+Math.abs(parseInt(element.q2)-parseInt(newData.q2))+Math.abs(parseInt(element.q3)-parseInt(newData.q3))+Math.abs(parseInt(element.q4)-parseInt(newData.q4))+Math.abs(parseInt(element.q5)-parseInt(newData.q5))+Math.abs(parseInt(element.q6)-parseInt(newData.q6))+Math.abs(parseInt(element.q7)-parseInt(newData.q7))+Math.abs(parseInt(element.q8)-parseInt(newData.q8))+Math.abs(parseInt(element.q9)-parseInt(newData.q9))+Math.abs(parseInt(element.q10)-parseInt(newData.q10))
            
            
        })
        console.log(score)
        data_freind.push(newData)
        let freindIndx=score.indexOf(Math.min(...score))
       
        objectText='module.exports='+JSON.stringify(data_freind)
        fs.writeFile('./app/data/friend.js',objectText,e=>{console.log(e)})
        res.send(data_freind[freindIndx])

        })
       
    
}
