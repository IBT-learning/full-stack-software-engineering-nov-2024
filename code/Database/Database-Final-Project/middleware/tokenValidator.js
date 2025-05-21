import jwt from 'jsonwebtoken';

const SECRET = process.env.SECRET_KEY;

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
    req.user = payload; 
    next();
  }catch (err){
    console.error('Error validating token: ', err);
    res.status(401).json({'Error': 'Invalid or expired token'});
  }
};

export default tokenValidator;