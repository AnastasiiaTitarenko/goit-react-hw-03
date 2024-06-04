import css from './SearchBox.module.css'

const SearchBox = ({filter, setFilter}) => {
  return (
    <div className={css.search}>
      <input
        type="text"
        placeholder="Find contacts by name"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
    </div>
  );
}

export default SearchBox
