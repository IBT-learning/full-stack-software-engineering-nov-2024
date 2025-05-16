import jwt from 'jsonwebtoken';

const SECRET = 'secret-key';

const tokenValidator = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token){
    return res.status(401).json({'Error': 'Authorisation token missing'});
  }
  
  try{
    if (token.includes('Bearer')){
      token = token.split(' ')[1];
    }
    
    const payload = jwt.verify(token, SECRET);
    req.user = payload; // exposes payload to subsequent middleware
    next();
  }catch (err){
    console.error('Error validating token: ', err);
    res.status(401).json({'Error': 'Invalid or expired token'});
  }
}

export default tokenValidator;