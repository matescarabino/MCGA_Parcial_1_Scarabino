import app from '../helpers/firebase/index.js';

const checkAuth = (roles) => async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.status(400).json({
        message: 'Provide Token',
      });
    }

    const admin = await app.auth().verifyIdToken(token);

    if (!roles.includes(admin.role)) {
      throw new Error('Invalid role');
    }
    return next();
  } catch (error) {
    return res.status(401).json({ message: error.toString() });
  }
};

export default checkAuth;
