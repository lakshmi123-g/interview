import React, { useState, useEffect, useMemo } from "react";
import Header from "../components/Header";
import CouponForm from "../components/CouponForm";
import CouponTable from "../components/CouponTable";
import Filters from "../components/Filters";
import SummaryCards from "../components/SummaryCards";

const CouponsPage = () => {
  const [coupons, setCoupons] = useState(() => {
    return JSON.parse(localStorage.getItem("coupons")) || [];
  });

  const [editCoupon, setEditCoupon] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("coupons", JSON.stringify(coupons));
  }, [coupons]);

  const filteredCoupons = useMemo(() => {
    return coupons
      .map((c) => {
        const isExpired = new Date(c.expiry) < new Date();
        return { ...c, expired: isExpired };
      })
      .filter((c) => {
        return (
          c.code.toLowerCase().includes(search.toLowerCase()) &&
          (statusFilter ? c.status === statusFilter : true) &&
          (typeFilter ? c.type === typeFilter : true)
        );
      });
  }, [coupons, search, statusFilter, typeFilter]);

  const addOrUpdateCoupon = (coupon) => {
    if (editCoupon) {
      setCoupons((prev) =>
        prev.map((c) => (c.id === coupon.id ? coupon : c))
      );
      setEditCoupon(null);
    } else {
      setCoupons([...coupons, { ...coupon, id: Date.now() }]);
    }
  };

  const deleteCoupon = (id) => {
    if (window.confirm("Are you sure?")) {
      setCoupons(coupons.filter((c) => c.id !== id));
    }
  };

  const toggleStatus = (id) => {
    setCoupons((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, status: c.status === "Active" ? "Inactive" : "Active" }
          : c
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <SummaryCards coupons={coupons} />

      <CouponForm onSubmit={addOrUpdateCoupon} editCoupon={editCoupon} />

      <Filters
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
      />

      <CouponTable
        coupons={filteredCoupons}
        onDelete={deleteCoupon}
        onEdit={setEditCoupon}
        onToggle={toggleStatus}
      />
    </div>
  );
};

export default CouponsPage;