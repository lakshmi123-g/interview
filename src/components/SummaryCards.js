const SummaryCards = ({ coupons }) => {
  const total = coupons.length;
  const active = coupons.filter((c) => c.status === "Active").length;
  const expired = coupons.filter(
    (c) => new Date(c.expiry) < new Date()
  ).length;

  return (
    <div className="cards">
      <div>Total: {total}</div>
      <div>Active: {active}</div>
      <div>Expired: {expired}</div>
    </div>
  );
};

export default SummaryCards;