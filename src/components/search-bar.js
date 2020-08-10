import { h } from 'preact'
import { forwardRef } from 'preact/compat'
import './search-bar.css'

const SearchBar = forwardRef(({ value, onInput }, ref) => (
  <div class="search input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">
        <i class="fas fa-search" />
      </span>
    </div>
    <input
      ref={ref}
      type="text"
      class="form-control"
      placeholder="Search..."
      value={value}
      onInput={onInput}
    />
  </div>
))

export default SearchBar
