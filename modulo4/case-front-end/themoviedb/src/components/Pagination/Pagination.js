import { ButtonPage } from "./styles";

const Pagination = ({ goToPrevPage, goToNextPage }) => {
  return (
    <div>
      {<ButtonPage onClick={goToPrevPage}>Previous</ButtonPage>}
      {<ButtonPage onClick={goToNextPage}>Next</ButtonPage>}
    </div>
  )}

export default Pagination;