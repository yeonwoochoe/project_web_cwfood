

import { BiSearch} from "react-icons/bi";

export default function Searchbox (){

  return (

    <div className="search_box">
    <form action="#" method="POST">
      <fieldset>
        <legend className="blind">site search</legend>
        <input type="search" id="searchInput" defaultValue="" name="search__Input" placeholder="검색어를 입력하세요" />
        <button type="button"><BiSearch className="searchicon" size="24"  /></button>
      </fieldset>
    </form>
  </div>

  )
}