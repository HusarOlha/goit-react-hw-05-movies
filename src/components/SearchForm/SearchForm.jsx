import { Formik } from 'formik';
import { toast } from 'react-hot-toast';
import {
  SearchForm,
  SearchButton,
  SearchInput,
  SearchSection,
  SearchButtonLabel,
} from './SearchForm.styled';

const initialValues = {
  value: '',
};

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (values, { resetForm }) => {
    if (!values.value.trim()) {
      toast.error('Please enter a search query');
    } else {
      onSearch(values.value);
      resetForm();
    }
  };

  return (
    <SearchSection>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
          <SearchForm onSubmit={handleSubmit}>
            <SearchButton type="submit" className="button">
              <SearchButtonLabel className="SearchForm-button-label">
                Find
              </SearchButtonLabel>
            </SearchButton>

            <SearchInput
              type="text"
              name="value"
              autoFocus
              placeholder="Search movie"
              autoComplete="off"
            />
          </SearchForm>
        )}
      </Formik>
    </SearchSection>
  );
};

export default SearchBar;
