import  { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({ name: '', email: '', people: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking request submitted!');
  };

  return (
    <section id="booking" className="p-8">
      <h2 className="text-2xl font-bold mb-4">Book Your Table</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="text"
          placeholder="Name"
          className="p-2 border"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="number"
          placeholder="Number of People"
          className="p-2 border"
          value={formData.people}
          onChange={(e) => setFormData({ ...formData, people: e.target.value })}
        />
        <button type="submit" className="bg-yellow-500 px-4 py-2 rounded">Book Now</button>
      </form>
    </section>
  );
}

export default BookingForm
