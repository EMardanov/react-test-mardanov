import React, { useState } from "react";


function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [submittedData, setSubmittedData] = useState(null);
  // Funktion zum Aktualisieren des Formularstatus bei Änderung eines Eingabefeldes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,    // Bestehende Felder beibehalten
      [name]: value,  // Neues Feld oder Aktualisierung des bestehenden Feldes
    });
  };
  // Event-Handler für das Formular-Submit-Event
  const handleSubmit = (e) => {
    e.preventDefault(); // Verhindert das Standard-Submit-Verhalten
    setSubmittedData(formData); // Speichert die eingereichten Daten
    setFormData({ name: "", message: "" }); // Formular leeren
  };
  return (
    <div>
      <h3>Kontaktformular</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Nachname:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name eingeben"
          />
        </label>
        <br />
        <label>
          Nachricht:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Nachricht eingeben"
          />
        </label>
        <br />
        <button type="submit">Absenden</button>
      </form>
      {/* Anzeige der eingereichten Daten */}
      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h4>Eingereichte Daten:</h4>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Nachricht:</strong> {submittedData.message}</p>
        </div>
      )}
    </div>
  );
}
export default ContactForm;