import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

export default function Form() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', mobile: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/confirmation', { state: { ...form, movieId: id } });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20 }}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required /><br /><br />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br /><br />
      <input type="tel" name="mobile" placeholder="Mobile" onChange={handleChange} required /><br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}
