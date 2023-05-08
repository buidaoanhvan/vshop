const express = require("express");
const router = express.Router();
const VoucherController = require("../../controllers/VoucherController");
const { checkSchema } = require("express-validator");

const voucherValidatorSchema = {
    shop_id: {
        notEmpty: true
    },
    title: {
        notEmpty: true
    },
    description: { notEmpty: true },
    image: {},
    status: { notEmpty: true },
    discount_value: {
        notEmpty: true,
        // isNumber: true,
    },
    discount_type: {
        notEmpty: true,
        // isNumber: true,
    },
    max_discount: {
        notEmpty: true,
        // isNumber: true,
    },
    start_time: {
        notEmpty: true,
        // isNumber: true,
    },
    end_time: {
        notEmpty: true,
        // isNumber: true,
    },
};

router.get(
    "/voucher/view",
    checkSchema(voucherValidatorSchema),
    VoucherController.view
);
router.post(
    "/voucher/create",
    checkSchema(voucherValidatorSchema),
    VoucherController.create
);
router.patch(
    "/voucher/update/:id",
    checkSchema(voucherValidatorSchema),
    VoucherController.update
);
// router.delete(
//     "/voucher/delete/:id",
//     checkSchema(voucherValidatorSchema),
//     VoucherController.delete
// );


module.exports = router;
