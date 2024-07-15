
//1-read el file
//load data y3ni (transform it from json to object)
const fs=require("fs");

const addPerson=(fname,lname)=>{
//2- store el file 
const allData=loadInfo()
//duplicated data idea
const duplicatedData = allData.filter((obj)=>{
    return obj.id==id
})
console.log(duplicatedData);
//if there is no duplicated data
if(duplicatedData.length ==0){

allData.push({
    id:id,
    fname:fname,
    lname:lname,
    city:city,
    ag:age
})

       savealldata(allData);
} else{
    console.log("Erorr duplicated data")
}
}


/////////////////////////////////////////////////
/////////////////////////////////////////////////
//in loadinfo , i make two things (load, and transfer)
const loadInfo=()=>{
    const datJson=fs.readFileSyc("data10.js").toString();
    //load it json and return it object
    return JSON.parse(datJson);
}
//////////////////////////////////////////////
//////////////////////////////////////////////
//transfer to json and then store 
const savealldata=(allData)=>{
    const savealldataJson=JSON.stringify(allData);
    fs.writeFileSync("data10.js",savealldataJson)
}
//////////////////////////////////////////
//deleted data by id::
const deleteperson=(id)=>{
    const allData=loadInfo();

    const dataToKeep=allData.filter((obj)=>{
        return obj.id!==id
    })
    console.log(dataToKeep)
    console.log("u have successfully deleted an item")



savealldata(dataToKeep)

}
///////////////////////////
//to read data:
const readData=(id)=>{
    const allData=loadInfo();
    const itemneeded=allData.find((obj)=>{
 return    obj.id==id

    })
    if(itemneeded){
        console.log(itemneeded)
    }else{
        console.log("no data found")
    }
}
///////////////////////////
//list
const listdata =()=>{
    const allData=loadInfo();
    allData.array.forEach(obj => {
        console.log(obj.fname ,obj.city)
    });
}

module.exports={
addPerson,
deleteperson,
readData
}