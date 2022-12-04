import app from '../helpers/firebase/index.js';

const checkAuth = () => async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.status(400).json({
        message: 'Provide Token',
      });
    }
    const user = await app.auth().verifyIdToken(token);

    return next();

  } catch (error) {
    return res.status(401).json({ message: error.toString() });
  }
};

export default checkAuth;
