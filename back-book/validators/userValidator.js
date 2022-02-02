

export default function userValidator(){

    verifyMailUnicity : (req, res, next) => {
        console.log('Check email unicity');
        return User.find({"email" : req.body.email}).count((err, result) => {
            if(err){
                next(new Error('Request error : ' + err));
                return ;
            }
            console.log(result)
            result > 1 ? next(new Error('Already exist')) : next();
        });
    }
    
}