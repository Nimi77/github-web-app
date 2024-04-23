/* eslint-disable react/prop-types */

const NewRepo = ({ createdRepo }) => {
  return (
    <div className="font-monteserrat">
      <h2>Newly Created Repository:</h2>
      {createdRepo && (
        <ul>
          <li>
            {createdRepo.name} (Created at:{" "}
            {new Date(createdRepo.createdAt).toLocaleString()})
          </li>
        </ul>
      )}
    </div>
  );
}

export default NewRepo;