
const asyncHandler = (requestHandler) => (req, res, next) => {
	new Promise((resolve, reject) => {
		resolve(requestHandler(req, res, next));
	})
		.catch((error) => {
			next(error);
		});
};

export {asyncHandler}

// const asyncHandler = (func) => (req, res, next) => {
//   try {
//     func(req, res, next)
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message
//     })
//   }
// }
