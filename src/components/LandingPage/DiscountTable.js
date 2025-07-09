import React from 'react';
import './DiscountTable.css';

export default function DiscountTable() {
  return (
    <section className="discount-table-section">
      <h2 className="table-title">🎓 Compare Your Course Discounts</h2>
      <p className="table-subtitle">📉 Save more with every card level</p>

      <div className="table-container">
        <table className="discount-table">
          <thead>
            <tr>
              <th>Program</th>
              <th>EduPass 💡</th>
              <th>ScholarPass 🎓</th>
              <th>InfinityPass 🚀</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Master a Language (ML)</td>
              <td>10%</td>
              <td>10%</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>International Diploma (ID)</td>
              <td>10%</td>
              <td>12%</td>
              <td>12%</td>
            </tr>
            <tr>
              <td>ID Fast Track</td>
              <td>10%</td>
              <td>10%</td>
              <td>12%</td>
            </tr>
            <tr>
              <td>Immersion Programs 🌍</td>
              <td>❌</td>
              <td>12%</td>
              <td>15%</td>
            </tr>
            <tr>
              <td>LMS Courses 💻</td>
              <td>❌</td>
              <td>5%</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>Referral Bonus 🎁</td>
              <td>❌</td>
              <td>5%</td>
              <td>5%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ✅ Additional Benefits Table */}
      <h2 className="table-title" style={{ marginTop: '2.5rem' }}> Additional Benefits</h2> 
      
      <div className="table-container">
        <table className="discount-table">
          <thead>
            <tr>
              <th>Particular</th>
              <th>ISML Elite EduPass</th>
              <th>ISML Elite ScholarPass</th>
              <th>ISML Elite InfinityPass</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online Access</td>
              <td>✔️</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Offline Access</td>
              <td>❌</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Study Abroad Guidance</td>
              <td>❌</td>
              <td>✔️</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>3 Months Priority Support</td>
              <td>❌</td>
              <td>❌</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Internship Priority</td>
              <td>❌</td>
              <td>❌</td>
              <td>✔️</td>
            </tr>
            <tr>
              <td>Placement Assistance</td>
              <td>❌</td>
              <td>❌</td>
              <td>✔️</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
