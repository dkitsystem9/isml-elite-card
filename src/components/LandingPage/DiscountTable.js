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
              <td data-label="Program">Master a Language (ML)</td>
              <td data-label="EduPass 💡">10%</td>
              <td data-label="ScholarPass 🎓">10%</td>
              <td data-label="InfinityPass 🚀">10%</td>
            </tr>
            <tr>
              <td data-label="Program">International Diploma (ID)</td>
              <td data-label="EduPass 💡">10%</td>
              <td data-label="ScholarPass 🎓">12%</td>
              <td data-label="InfinityPass 🚀">12%</td>
            </tr>
            <tr>
              <td data-label="Program">ID Fast Track</td>
              <td data-label="EduPass 💡">10%</td>
              <td data-label="ScholarPass 🎓">10%</td>
              <td data-label="InfinityPass 🚀">12%</td>
            </tr>
            <tr>
              <td data-label="Program">Immersion Programs 🌍</td>
              <td data-label="EduPass 💡">❌</td>
              <td data-label="ScholarPass 🎓">12%</td>
              <td data-label="InfinityPass 🚀">15%</td>
            </tr>
            <tr>
              <td data-label="Program">LMS Courses 💻</td>
              <td data-label="EduPass 💡">❌</td>
              <td data-label="ScholarPass 🎓">5%</td>
              <td data-label="InfinityPass 🚀">5%</td>
            </tr>
            <tr>
              <td data-label="Program">Referral Bonus 🎁</td>
              <td data-label="EduPass 💡">❌</td>
              <td data-label="ScholarPass 🎓">5%</td>
              <td data-label="InfinityPass 🚀">5%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="table-title" style={{ marginTop: '2.5rem' }}>
        Additional Benefits
      </h2>

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
              <td data-label="Particular">Online Access</td>
              <td data-label="EduPass">✔️</td>
              <td data-label="ScholarPass">✔️</td>
              <td data-label="InfinityPass">✔️</td>
            </tr>
            <tr>
              <td data-label="Particular">Offline Access</td>
              <td data-label="EduPass">❌</td>
              <td data-label="ScholarPass">✔️</td>
              <td data-label="InfinityPass">✔️</td>
            </tr>
            <tr>
              <td data-label="Particular">Study Abroad Guidance</td>
              <td data-label="EduPass">❌</td>
              <td data-label="ScholarPass">✔️</td>
              <td data-label="InfinityPass">✔️</td>
            </tr>
            <tr>
              <td data-label="Particular">3 Months Priority Support</td>
              <td data-label="EduPass">❌</td>
              <td data-label="ScholarPass">❌</td>
              <td data-label="InfinityPass">✔️</td>
            </tr>
            <tr>
              <td data-label="Particular">Internship Priority</td>
              <td data-label="EduPass">❌</td>
              <td data-label="ScholarPass">❌</td>
              <td data-label="InfinityPass">✔️</td>
            </tr>
            <tr>
              <td data-label="Particular">Placement Assistance</td>
              <td data-label="EduPass">❌</td>
              <td data-label="ScholarPass">❌</td>
              <td data-label="InfinityPass">✔️</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
