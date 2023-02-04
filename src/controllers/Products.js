import Products from '../models/Products.js';

const getAll = async (req, res) => {
    const queriesArray = Object.keys(req.query);
    try {
      const products = await Products.find(req.query).find({ isDeleted: false });
      if (!products) {
        throw {
          message: 'Products not found.', status: 404,
        };
      }
      if (queriesArray.length === 0) {
        return res.status(200).json({
          message: 'Products found.',
          data: products,
        });
      }
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || error,
      });
    }
  };

const getId = async (req, res) => {
    try {
      const { _id } = req.params;
      const products = await Products.findById(_id);
      if (!products) {
        throw {
          message: 'Product not found.', status: 404,
        };
      }
      return res.status(200).json({
        message: 'Product found.',
        data: products,
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || error,
      });
    }
  };

const postProduct = async (req, res) => {
    try {

      const product = new Products({
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        description: req.body.description,
      });

      const result = await product.save();
      if (!result) {
        throw {
          message: 'Could not create a new product.', status: 400,
        };
      }
      const products = await Products.find({ isDeleted: false });
      return res.status(201).json({
        message: 'New product successfully created.',
        data: products,
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || error,
      });
    }
  };

const updateProduct = async (req, res) => {
    try {
      const { _id } = req.params;
      const result = await Products.findByIdAndUpdate(
        { _id: _id },
        req.body,
        { new: true },
      );
      if (!result) {
        throw {
          message: 'Product not found.', status: 404,
        };
      }
      const products = await Products.find({ isDeleted: false });
      return res.status(200).json({
        message: `Product with the ID ${req.params._id} has been updated.`,
        data: products,
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || error,
      });
    }
};

const deleteProduct = async (req, res) => {
    try {
      const result = await Products.findByIdAndUpdate(req.params._id, { isDeleted: true });
      if (!result) {
        throw {
          message: 'Product not found.', status: 404,
        };
      }
      const products = await Products.find({ isDeleted: false });
      return res.status(202).json({
        message: 'Product deleted.',
        data: products,
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || error,
      });
    }
  };

// Exports
export default {
    getAll,
    getId,
    postProduct,
    updateProduct,
    deleteProduct
};
