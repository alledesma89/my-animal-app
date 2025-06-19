function AnimalDetail({ animal, onClose }) {
  if (!animal) return null;

  return (
    <div className="details">
      <img src={animal.image} alt={animal.title} />
      <h2>{animal.title}</h2>
      <p><strong>Tipo:</strong> {animal.type}</p>
      <p>{animal.description}</p>
        <br />
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
}

export default AnimalDetail;
