import React, { useState, useEffect } from "react";

const CouponForm = ({ onSubmit, editCoupon }) => {
  const [form, setForm] = useState({
    code: "",
    type: "Percentage",
    value: "",
    expiry: "",
    status: "Active",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editCoupon) setForm(editCoupon);
  }, [editCoupon]);

  const validate = () => {
    let err = {};

    if (!form.code || form.code.length < 5)
      err.code = "Min 5 characters required";

    if (!form.value || form.value <= 0)
      err.value = "Must be > 0";

    if (form.type === "Percentage" && form.value > 100)
      err.value = "Max 100% allowed";

    if (!form.expiry || new Date(form.expiry) < new Date())
      err.expiry = "Invalid date";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({ ...form });
    setForm({
      code: "",
      type: "Percentage",
      value: "",
      expiry: "",
      status: "Active",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Coupon Code"
        value={form.code}
        onChange={(e) => setForm({ ...form, code: e.target.value })}
      />
      {errors.code && <span>{errors.code}</span>}

      <select
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option>Percentage</option>
        <option>Flat</option>
      </select>

      <input
        type="number"
        placeholder="Value"
        value={form.value}
        onChange={(e) => setForm({ ...form, value: e.target.value })}
      />
      {errors.value && <span>{errors.value}</span>}

      <input
        type="date"
        value={form.expiry}
        onChange={(e) => setForm({ ...form, expiry: e.target.value })}
      />
      {errors.expiry && <span>{errors.expiry}</span>}

      <select
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      >
        <option>Active</option>
        <option>Inactive</option>
      </select>

      <button type="submit">Save Coupon</button>
    </form>
  );
};

export default CouponForm;