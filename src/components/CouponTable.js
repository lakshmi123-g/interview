import React from "react";

const CouponTable = ({ coupons, onDelete, onEdit, onToggle }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Type</th>
                    <th>Value</th>
                    <th>Expiry</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {coupons.map((c) => (
                    <tr key={c.id} className={c.expired ? "expired" : ""}>
                        <td>{c.code}</td>
                        <td>{c.type}</td>
                        <td>{c.value}</td>
                        <td>{c.expiry}</td>
                        <td>{c.expired ? "Expired" : c.status}</td>

                        <td>
                            <div className="action-buttons">
                                <button onClick={() => onEdit(c)}>Edit</button>
                                <button onClick={() => onDelete(c.id)}>Delete</button>
                                {!c.expired && (
                                    <button onClick={() => onToggle(c.id)}>Toggle</button>
                                )}
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default CouponTable;