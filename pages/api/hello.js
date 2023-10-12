//1. Import Area

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//Defination Area
function handler(req, res) {
        // function serialization
 //object.method().method(actualAtguemnt); 
                      //{ property:value } is a JS Object
   res.status(200).json({ 
                                msg1:`Hello1 ${req.query.name}`,
                                msg2:`Hello4 ${req.query.surname}`,
                                msg3:'Hello2' ,
                                msg4:"Hello3 ",
                                    //obj.property.property
                                testkey: req.query.name
                        });
}

//3. Export
export default handler;
