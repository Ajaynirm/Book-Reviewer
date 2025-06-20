export const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization || ""; 
    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).send({ error: "No token provided" });
    }
    
    const idToken = authHeader.split("Bearer ")[1];
    
    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      req.user = decodedToken;
      next();
    } catch (error) {
      res.status(401).send({ error: "Invalid or expired token" });
    }
  };


  
  


